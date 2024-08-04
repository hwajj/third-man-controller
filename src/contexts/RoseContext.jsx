import React, { createContext, useState, useContext } from "react";

const RoseContext = createContext();

export const useRose = () => useContext(RoseContext);

export const RoseProvider = ({ children }) => {
  // 장미의 발견 여부를 true/false로 관리
  const [roseMap, setRoseMap] = useState([
    { x: -2, z: 3, found: false },
    { x: -7, z: 8, found: false },
    { x: 15, z: -27, found: false },
  ]);
  const [foundRoses, setFoundRoses] = useState(0);

  const checkAndRemoveRose = (characterPosition) => {
    setRoseMap((prevMap) => {
      let newFoundCount = foundRoses;
      const newMap = prevMap.map((rose) => {
        const distance = Math.sqrt(
          Math.pow(characterPosition.x - rose.x, 2) +
            Math.pow(characterPosition.z - rose.z, 2),
        );
        if (distance < 2 && !rose.found) {
          newFoundCount += 1;
          return { ...rose, found: true }; // 장미 발견
        }
        return rose;
      });
      setFoundRoses(newFoundCount);
      return newMap;
    });
  };

  return (
    <RoseContext.Provider value={{ foundRoses, roseMap, checkAndRemoveRose }}>
      {children}
    </RoseContext.Provider>
  );
};
