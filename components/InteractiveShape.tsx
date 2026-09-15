"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function InteractiveShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      if (hovered) {
        meshRef.current.rotation.x += delta * 2;
        meshRef.current.rotation.y += delta * 2;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusKnotGeometry args={[2, 0.6, 128, 32]} />
      <meshStandardMaterial 
        color={hovered ? "#00ffcc" : "#6366f1"} 
        wireframe={active} 
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}