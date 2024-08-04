import React, { useEffect, useRef } from "react";
import { useRose } from "@/contexts/RoseContext.jsx";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export const Message = () => {
  const { foundRoses, roseMap } = useRose();
  const textRef = useRef(`Found Roses: ${foundRoses} 개`);
  useEffect(() => {
    console.log(textRef.current);
    textRef.current = `Found Roses: ${foundRoses} 개`;
  }, [foundRoses]);
  const speed = 100; // 타이핑 속도 설정 (밀리초)
  const typedText = useTypingEffect(textRef.current, speed);
  return (
    <div className="message-window">
      <p>{typedText}</p>
    </div>
  );
};
