import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

function findObjectByName(root, name) {
  if (root.name === name) return root;
  for (let i = 0; i < root.children.length; i++) {
    const result = findObjectByName(root.children[i], name);
    if (result) return result;
  }
  return null;
}

export const Map = ({ model, ...props }) => {
  // const { scene, animations } = useGLTF('./models/billys_house.glb');
  const { scene, animations } = useGLTF(model);
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    // const targetObject = findObjectByName(scene, "big.tree.031_25");
    // const position = new Vector3();
    // targetObject.getWorldPosition(position);
    // console.log("World Position:", position);
    scene.traverse((child) => {
      if (child.name.includes("tree")) {
        console.log(child);
      }
      if (child.name.includes("flower")) {
        console.log(child);
      }
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions]);

  return (
    <group>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={scene} {...props} ref={group} />
      </RigidBody>
    </group>
  );
};
