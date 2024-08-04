import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { Fox } from "./Fox";
import { Map } from "./Map";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { CharacterController } from "./CharacterController.jsx";

const maps = {
  castle_on_hills: {
    scale: 10,
    position: [-6, -50, 0],
  },
  billys_house: {
    scale: 44,
    position: [-10, 0, 0],
    rotation: [0, 0, 0],
  },
  billys_house2: {
    scale: 44,
    position: [-10, 0, 0],
    rotation: [0, 0, 0],
  },
  buildings: {
    scale: 20,
    position: [-15, -1, 10],
  },
  fps_game_map: {
    scale: 0.72,
    position: [0, -1, -3.5],
  },
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const controlsRef = useRef();
  const foxRef = useRef();
  const { camera } = useThree();
  // useControls로 scale, position, rotation을 관리
  const { map } = useControls("Map", {
    map: {
      value: "billys_house",
      options: Object.keys(maps),
    },
  });

  return (
    <>
      {/*<OrbitControls ref={controlsRef} />*/}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics debug>
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
        />
        <CharacterController />
      </Physics>
    </>
  );
};
