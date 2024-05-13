import { useRef, useState } from "react";
import Canvas from "react-native-canvas";

const StaticGraph = (props) => {

    const handleCanvas = (canvas) => {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(props.target.x, props.target.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(props.current.x, props.current.y, 6, 0, Math.PI * 2);
        ctx.fill();
    }
    
    return (
        <Canvas 
            ref={handleCanvas} 
            style={{
                // position: "absolute",
                width: 200,
                height: 200,
            }}
        />
    )
}

export default StaticGraph;