import React from 'react';
import { useRef, useEffect } from 'react';
import './spin.css';

export default function Spinner() {

    const canvasRef = useRef(null);
    const n=4;
    const incrementalAngle = 2*Math.PI/n

    useEffect(()=>{
        const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Calculate canvas dimensions as a percentage of screen width and height
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    canvas.width = screenWidth * 0.40; // 80% of screen width
    canvas.height = screenHeight * 0.7; // 80% of screen height

    // Draw a circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8; // 50% of the smaller dimension

    ctx.fillStyle = '#74B9FF';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();


     //draw the required number of arcs
     let colors = ['#E44236','#3498DB','#2ecc72','#EEC213','#7B8788','#EAF0F1','#B83227','#2475B0','#26ae60','#F5C469','#99AAAB','#E74292'];

     let i=0;

     for(i=0;i<n;i++){
        let start_angle = -Math.PI/2 + (i*incrementalAngle);
        let end_angle = (-Math.PI/2) + ((i+1)*incrementalAngle);
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, start_angle, end_angle);
        ctx.fill();
     }

     // Calculate middle of the arc
     console.log(Math.sin(7*Math.PI / 4));
     const arcMiddleX = centerX-(radius * Math.sin(7*Math.PI / 4))/2;
     const arcMiddleY = centerY-(radius * Math.cos(7*Math.PI / 4))/2;
       

     // Add label 'India'
     ctx.fillStyle = 'white';
     ctx.font = 'bold 24px sans-serif';
    //  ctx.textAlign = 'left';
     ctx.fillText('INDIA', arcMiddleX, arcMiddleY);

  }, []);

  return (
    <div>
        <canvas
      ref={canvasRef}
      className='container'
      
    />
    </div>
    
  );

  }

