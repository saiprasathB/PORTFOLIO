
import { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

  
    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    setCanvasSize();

    const NUM_STARS = 100;
    const STAR_COLORS = ["#FFFFFF", "#DDDDDD", "#BBBBBB"];


    let stars = [];

    
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    
    class Star {
      constructor(x, y, radius, color) {
        this.x = x || random(0, canvas.width);
        this.y = y || random(0, canvas.height);
        this.radius = radius || random(0.5, 1.5);
        this.color = color || STAR_COLORS[Math.floor(random(0, STAR_COLORS.length))];
        this.speed = -random(0.1, 0.3); 
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.y += this.speed;
        if (this.y < 0) this.y = canvas.height; 
        this.draw();
      }
    }

    
    function createStars() {
      stars = [];
      for (let i = 0; i < NUM_STARS; i++) {
        stars.push(new Star());
      }
    }

  
    function drawBackground() {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

  
    function animate() {
      requestAnimationFrame(animate);
      drawBackground();
      stars.forEach((star) => star.update());
    }

    
    createStars();
    animate();

  
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "black",
      }}
    />
  );
};

export default StarryBackground;
