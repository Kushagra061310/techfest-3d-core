"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, Scroll, Stars } from "@react-three/drei";
import InteractiveShape from "../components/InteractiveShape";

export default function Home() {
  return (
    <main className="w-screen h-screen relative bg-black font-sans select-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Environment preset="city" />
        
        {/* Adds persistent deep 3D atmosphere across all pages */}
        <Stars radius={50} depth={40} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <ScrollControls pages={3} damping={0.2}>
          <InteractiveShape />
          
          <Scroll html style={{ width: '100vw' }}>
            {/* Section 1: Hero */}
            <div className="h-screen w-full flex flex-col justify-center px-8 md:px-20 pointer-events-none">
              <p className="text-indigo-400 font-mono tracking-widest text-sm mb-2">IIT BOMBAY PRESENTS</p>
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight">Techfest<br/>2026</h1>
              <p className="text-gray-400 mt-4 max-w-md text-sm md:text-base leading-relaxed">
                Asia&apos;s Largest Science and Technology Festival. Step into the future of innovation, robotics, and artificial intelligence.
              </p>
            </div>

            {/* Section 2: Core Themes */}
            <div className="h-screen w-full flex flex-col justify-center items-end px-8 md:px-20 text-right pointer-events-none">
              <p className="text-[#00ffcc] font-mono tracking-widest text-sm mb-2">ZONE COMPETITIONS</p>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Innovate.<br/>Disrupt.</h1>
              <p className="text-gray-400 mt-4 max-w-md text-sm md:text-base leading-relaxed">
                Compete against the sharpest minds across the continent. Push the boundaries of modern engineering.
              </p>
            </div>

            {/* Section 3: Call to Action */}
            <div className="h-screen w-full flex flex-col justify-center items-center text-center px-8 pointer-events-none">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight">Lead The<br/>Charge</h1>
              <p className="text-gray-400 mt-4 mb-6 max-w-md text-sm md:text-base leading-relaxed">
                Represent your campus. Become a Techfest College Ambassador and build your legacy.
              </p>
              <div className="pointer-events-auto">
                <button className="bg-indigo-600 hover:bg-[#00ffcc] hover:text-black text-white font-bold px-8 py-3 rounded-md transition-all duration-300">
                  JOIN THE INITIATIVE
                </button>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}