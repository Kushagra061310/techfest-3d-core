"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Float } from "@react-three/drei";
import * as THREE from "three";

export default function InteractiveShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();
  
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Continuous smooth rotation
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;

    // scroll.offset goes smoothly from 0.0 (top) to 1.0 (bottom)
    const offset = scroll.offset;

    // Section 1 -> 2 -> 3 Choreography:
    // Move from right (x=2) to left (x=-2.5) to center (x=0)
    if (offset < 0.5) {
      // Transition between Hero and Section 2
      const t = offset / 0.5;
      meshRef.current.position.x = THREE.MathUtils.lerp(2, -2.2, t);
      meshRef.current.position.y = THREE.MathUtils.lerp(0, -0.2, t);
    } else {
      // Transition between Section 2 and Section 3
      const t = (offset - 0.5) / 0.5;
      meshRef.current.position.x = THREE.MathUtils.lerp(-2.2, 0, t);
      meshRef.current.position.y = THREE.MathUtils.lerp(-0.2, 0.3, t);
    }

    // Dynamic rotation & scaling tied to scroll
    meshRef.current.rotation.z = offset * Math.PI * 2;
    const targetScale = active ? 1.6 : (offset > 0.8 ? 1.4 : 1.1);
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#00ffcc" : (active ? "#3b82f6" : "#6366f1")} 
          wireframe={!active}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}