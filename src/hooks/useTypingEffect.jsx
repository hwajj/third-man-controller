import { useState, useEffect, useCallback } from "react";

export const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [reset, setReset] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayedText("");
    let index = 0;
    const textArray = text.split(""); // 문자 단위로 분리
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        // 새로 추가될 문자
        const newText = textArray.slice(0, index + 1).join("");
        return newText;
      });
      index += 1;
      if (index === textArray.length) {
        clearInterval(interval);
        setReset(false);
      }
    }, speed);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    if (reset) {
      startTyping();
    }
  }, [reset, startTyping]);

  useEffect(() => {
    setReset(true);
  }, [text]);

  return displayedText;
};
