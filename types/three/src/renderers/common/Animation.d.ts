import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
declare class Animation {
    nodes: Nodes;
    info: Info;
    animationLoop: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null;
    requestId: number | null;
    constructor(nodes: Nodes, info: Info);
    _init(): void;
    dispose(): void;
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null): void;
}
export default Animation;
