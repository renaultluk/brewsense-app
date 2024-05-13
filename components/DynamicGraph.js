import { forwardRef, useRef, useState } from "react";
import Canvas from "react-native-canvas";

const DynamicGraph = forwardRef((props) => {
    const targetRef = useRef();
    const currentRef = useRef();

    const drawLoop = (ctx) => {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(targetRef.current.x, targetRef.current.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(props.current.x, props.current.y, 6, 0, Math.PI * 2);
        ctx.fill();
        requestAnimationFrame(() => drawLoop(ctx))
    }

    const handleCanvas = (canvas) => {
        const ctx = canvas.getContext("2d");
        requestAnimationFrame(() => drawLoop(ctx))
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
})

export default DynamicGraph;