import { useState } from "react";
import "./App.css";
import { Experience } from "./components/Experience.jsx";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { KeyboardControls } from "@react-three/drei";
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

function App() {
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas shadows camera={{ position: [3, 3, 3], near: 0.1, fov: 60 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </KeyboardControls>
      <div className="message-window">dddd</div>
    </>
  );
}

export default App;
