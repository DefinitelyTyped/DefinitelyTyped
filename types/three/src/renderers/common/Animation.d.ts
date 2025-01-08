import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
interface AnimationContext {
    requestAnimationFrame(callback: FrameRequestCallback, frame?: XRFrame): number;
    cancelAnimationFrame(handle: number): void;
}
/**
 * This module manages the internal animation loop of the renderer.
 *
 * @private
 */
declare class Animation {
    nodes: Nodes;
    info: Info;
    _context: AnimationContext;
    _animationLoop: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null;
    _requestId: number | null;
    /**
     * Constructs a new animation loop management component.
     *
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(nodes: Nodes, info: Info);
    /**
     * Starts the internal animation loop.
     */
    start(): void;
    /**
     * Stops the internal animation loop.
     */
    stop(): void;
    /**
     * Defines the user-level animation loop.
     *
     * @param {Function} callback - The animation loop.
     */
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null): void;
    /**
     * Defines the context in which `requestAnimationFrame()` is executed.
     *
     * @param {Window|XRSession} context - The context to set.
     */
    setContext(context: AnimationContext): void;
    /**
     * Frees all internal resources and stops the animation loop.
     */
    dispose(): void;
}
export default Animation;
