import React, { useEffect, useRef } from "react";
import "../css/CustomCursor.css";

export default function CustomCursor() {
  const dotsRef = useRef([]);
  const numDots = 8;

  useEffect(() => {
    const dots = [];
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.className = `cursor-dot dot-${i}`;
      document.body.appendChild(dot);
      dots.push(dot);
    }
    dotsRef.current = dots;

    const positions = Array(numDots).fill(null).map(() => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      let prevX = mouse.x;
      let prevY = mouse.y;

      dotsRef.current.forEach((dot, i) => {
        positions[i].x += (prevX - positions[i].x) * 0.2;
        positions[i].y += (prevY - positions[i].y) * 0.2;

        dot.style.transform = `translate3d(${positions[i].x - dot.offsetWidth / 2}px, ${positions[i].y - dot.offsetHeight / 2}px, 0)`;
        prevX = positions[i].x;
        prevY = positions[i].y;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      dotsRef.current.forEach(dot => dot.remove());
    };
  }, []);

  return null;
}
