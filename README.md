# IIT Bombay Techfest: 3D Interactive Experience

A high-performance WebGL interactive environment engineered for the **Techfest 2026 College Ambassador** program. 

**[🚀 Launch the Live 3D Experience](https://techfest-3d-core.vercel.app)**

## ⚙️ Technical Architecture
This project bypasses standard CSS animations to implement a true declarative 3D engine inside a modern React pipeline.

* **Core Framework:** Next.js (App Router)
* **3D Engine:** Three.js & React Three Fiber (@react-three/fiber)
* **Scroll & Physics Helpers:** Drei (@react-three/drei)
* **Styling:** Tailwind CSS

## 🎯 Task Constraints Fulfilled
This architecture was specifically designed to satisfy the 100-point CA task requirements:

1. **3D Scroll Animations:** 
   Utilizes Drei's `useScroll` hook to read the user's viewport offset. This data mathematically interpolates the X/Y coordinates, rotation, and scaling of the central data node, choreographing its movement seamlessly across three HTML sections.
2. **Interactive Objects:** 
   The central `IcosahedronGeometry` actively listens for pointer events. On interaction, it mutates its physical material properties from a minimalist wireframe into a highly reflective solid body utilizing simulated city environment mapping.
3. **Dynamic Transitions:** 
   Wrapped in a `<Float>` component and backed by a deep volumetric `<Stars>` field, ensuring continuous Z-axis depth and ambient motion regardless of the user's scroll state.

## 💻 Local Execution
To run this environment locally:
```bash
# Install the 3D ecosystem and dependencies
npm install

# Launch the Next.js development server
npm run dev