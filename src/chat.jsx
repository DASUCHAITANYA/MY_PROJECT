import React, { useState, useEffect } from "react";
import "./Chat.css";

const Resize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight); 
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="resize-container">
      <h2>I love React ❤️ </h2>
      <p style={{color:"blue"}}>Window width: {width}px</p>
      <p style={{color:"red"}}>Window height: {height}px</p>
    </div> 
  );
};

export default Resize;
