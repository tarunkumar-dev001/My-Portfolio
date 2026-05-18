import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs/promises';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;
const dataDir = path.join(__dirname, 'data');
const databasePath = process.env.DATABASE_PATH ? path.resolve(__dirname, process.env.DATABASE_PATH) : path.join(dataDir, 'messages.db');

const smtpConfig = process.env.SMTP_HOST
  ? {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }
  : null;

const emailFrom = process.env.EMAIL_FROM;
const emailTo = process.env.EMAIL_TO;

let db;

async function initDb() {
  await fs.mkdir(dataDir, { recursive: true });
  db = await open({
    filename: databasePath,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      createdAt TEXT NOT NULL
    );
  `);
}

async function sendNotificationEmail(message) {
  if (!smtpConfig || !emailFrom || !emailTo) {
    return null;
  }

  const transporter = nodemailer.createTransport(smtpConfig);
  const info = await transporter.sendMail({
    from: emailFrom,
    to: emailTo,
    subject: `New portfolio contact from ${message.name}`,
    text: `You have a new message from ${message.name} (${message.email}):\n\n${message.message}`,
    html: `<p><strong>Name:</strong> ${message.name}</p><p><strong>Email:</strong> ${message.email}</p><p><strong>Message:</strong></p><p>${message.message.replace(/\n/g, '<br/>')}</p>`,
  });

  return info;
}

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', service: 'tarun-portfolio-backend', timestamp: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const result = await db.run(
      `INSERT INTO messages (name, email, message, createdAt) VALUES (?, ?, ?, ?)`,
      payload.name,
      payload.email,
      payload.message,
      payload.createdAt
    );

    payload.id = result.lastID;

    let emailResult = null;
    try {
      emailResult = await sendNotificationEmail(payload);
    } catch (error) {
      console.warn('Email notification failed:', error.message || error);
    }

    console.log('Saved contact message:', payload);
    return res.status(201).json({
      message: 'Message received successfully. I will follow up soon.',
      data: { id: payload.id },
      emailNotification: emailResult ? 'sent' : 'skipped',
    });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    res.status(500).json({ error: 'Unable to process the request right now.' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Portfolio backend running at http://localhost:${PORT}`);
      console.log(`SQLite database path: ${databasePath}`);
      if (smtpConfig) {
        console.log('Email notifications are enabled.');
      } else {
        console.log('Email notifications are disabled. Set SMTP_* env vars to enable them.');
      }
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
