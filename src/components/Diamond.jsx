import React, { useEffect, useMemo, useState } from "react";
import { Clone, Float, useGLTF } from "@react-three/drei";
import { getRandomInRange } from "@/util/utils.js";

export const Diamond = ({ position, isFound }) => {
  const { scene } = useGLTF("/models/diamond.glb"); // GLTF 모델을 로드합니다.

  return (
    <Float floatIntensity={1}>
      <Clone
        object={scene}
        position={position}
        scale={isFound ? [0, 0, 0] : [0.01, 0.01, 0.01]}
      />
    </Float>
  );
};
