"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import InteractiveShape from "../components/InteractiveShape";

export default function Home() {
  return (
    <main className="w-screen h-screen relative bg-black">
      
      <div className="absolute top-0 left-0 w-full p-8 z-10 pointer-events-none flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold tracking-widest uppercase">
          Techfest <span className="text-indigo-500">3D</span>
        </h1>
        <p className="text-gray-400 font-mono text-sm">
          DRAG TO ROTATE // CLICK TO EXPAND
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        <InteractiveShape />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </main>
  );
}