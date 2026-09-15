"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function InteractiveShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const scroll = useScroll(); 
  
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Mechanical, deliberate base rotation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      const scrollOffset = scroll.offset;
      // Drastic movement: drops down and spins wildly on scroll
      meshRef.current.position.y = -scrollOffset * 12; 
      meshRef.current.rotation.z = scrollOffset * Math.PI * 4; 
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.8 : 1.2}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Upgraded from Torus to a futuristic Data Node */}
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial 
        color={hovered ? "#00ffcc" : "#2563eb"} 
        wireframe={!active} // Defaults to a techy wireframe, becomes solid on click
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}