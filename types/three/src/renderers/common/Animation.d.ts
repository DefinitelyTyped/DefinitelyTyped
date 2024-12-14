import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
interface AnimationContext {
    requestAnimationFrame(callback: FrameRequestCallback, frame?: XRFrame): number;
    cancelAnimationFrame(handle: number): void;
}
declare class Animation {
    nodes: Nodes;
    info: Info;
    _context: AnimationContext;
    _animationLoop: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null;
    _requestId: number | null;
    constructor(nodes: Nodes, info: Info);
    start(): void;
    stop(): void;
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null): void;
    setContext(context: AnimationContext): void;
    dispose(): void;
}
export default Animation;
