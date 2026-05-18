import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleNetwork() {
  const group = useRef();
  const pointsRef = useRef();
  const count = 760;
  const basePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  const positions = useMemo(() => new Float32Array(basePositions), [basePositions]);

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime();
    if (!pointsRef.current) return;

    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i += 1) {
      const idx = i * 3;
      positionsArray[idx + 1] = basePositions[idx + 1] + Math.sin(time * 1.25 + basePositions[idx] * 0.18) * 0.28;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    if (group.current) {
      const targetX = pointer.y * 0.35;
      const targetY = pointer.x * 0.35;
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, 0.02);
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, 0.02);
      group.current.rotation.z = Math.sin(time * 0.08) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <points ref={pointsRef} position={[0, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color="#38bdf8"
          size={0.18}
          sizeAttenuation
          transparent
          opacity={0.78}
          depthWrite={false}
          fog={false}
        />
      </points>
      <points position={[0, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color="#0ea5e9"
          size={0.09}
          sizeAttenuation
          transparent
          opacity={0.54}
          depthWrite={false}
          fog={false}
        />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.7]}
      camera={{ position: [0, 0, 20], fov: 36 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight color="#5eead4" position={[3, 4, 5]} intensity={0.8} />
      <directionalLight color="#38bdf8" position={[-5, -2, -3]} intensity={0.3} />
      <ParticleNetwork />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}
