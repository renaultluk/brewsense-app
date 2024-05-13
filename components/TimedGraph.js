import { useRef, useState } from "react";
import Canvas from "react-native-canvas";

const TimedGraph = (props) => {
    const [ctx, setCtx] = useState();

    const handleCanvas = (canvas) => {
        const context = canvas.getContext("2d");
        setCtx(context);
    }
    
    return (
        <Canvas ref={handleCanvas} />
    )
}

export default TimedGraph;