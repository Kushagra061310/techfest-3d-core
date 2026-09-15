"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, Scroll } from "@react-three/drei";
import InteractiveShape from "../components/InteractiveShape";

export default function Home() {
  return (
    <main className="w-screen h-screen relative bg-black font-sans">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Environment preset="city" />
        
        <ScrollControls pages={3} damping={0.2}>
          <InteractiveShape />
          
          <Scroll html style={{ width: '100%' }}>
            {/* Page 1: Brand Authority */}
            <div className="absolute top-[15vh] left-[5vw] md:left-[10vw]">
              <p className="text-indigo-500 font-mono tracking-widest mb-2">IIT BOMBAY PRESENTS</p>
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight">Techfest<br/>2026</h1>
              <p className="text-gray-400 mt-4 max-w-md">Asia's Largest Science and Technology Festival. Step into the future of innovation, robotics, and artificial intelligence.</p>
            </div>

            {/* Page 2: The Core Themes */}
            <div className="absolute top-[115vh] right-[5vw] md:right-[10vw] text-right">
              <p className="text-[#00ffcc] font-mono tracking-widest mb-2">ZONE COMPETITIONS</p>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase">Innovate.<br/>Disrupt.</h1>
              <p className="text-gray-400 mt-4 max-w-md ml-auto">Compete against the sharpest minds across the continent. Push the boundaries of modern engineering.</p>
            </div>

            {/* Page 3: The Call to Action */}
            <div className="absolute top-[215vh] left-[5vw] md:left-[10vw]">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase">Lead The<br/>Charge</h1>
              <p className="text-gray-400 mt-4 mb-8 max-w-md">Represent your campus. Become a Techfest College Ambassador and build your legacy.</p>
              <button className="bg-indigo-600 text-white px-8 py-3 font-bold hover:bg-[#00ffcc] hover:text-black transition-colors">
                JOIN THE INITIATIVE
              </button>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}