import React from 'react';
import { useRef, useEffect } from 'react';
import './spin.css';

export default function Spinner() {

    const canvasRef = useRef(null);
    const n=8;
    const incrementalAngle = 2*Math.PI/n

    useEffect(()=>{
        const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Calculate canvas dimensions as a percentage of screen width and height
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    canvas.width = screenWidth * 0.80; 
    canvas.height = screenHeight * 0.8; 

    // Draw a circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8; // 50% of the smaller dimension

    ctx.fillStyle = '#74B9FF';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();


     //draw the required number of arcs
     let colors = ['#E44236','#3498DB','#2ecc72','#EEC213','#7B8788','#74B9FF','#B83227','#2475B0','#26ae60','#F5C469','#99AAAB','#E74292'];
      let labelOptions = ["India","Australia","New Zealand","South Africa","Afghanistan","Pakistan","Sri Lanka","England"];
     let i=0;

     for(i=0;i<n;i++){
        let start_angle = -Math.PI/2 + (i*incrementalAngle);
        let end_angle = (-Math.PI/2) + ((i+1)*incrementalAngle);
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, start_angle, end_angle);
        ctx.fill();

        drawLabel(start_angle, end_angle, labelOptions[i]);
     }    

     function drawLabel(start_angle, end_angle, color){
      //label settings
      var angle = (start_angle + end_angle) / 2;
      var labelX = centerX + (radius/2 + 20);
      // var labelY = centerY + Math.sin(angle) * (radius + 20);
      var labelY=0;

      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(color, labelX, labelY);
      ctx.strokeStyle = 'black';

    }

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

