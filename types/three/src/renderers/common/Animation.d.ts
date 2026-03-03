import Info from "./Info.js";
import NodeManager from "./nodes/NodeManager.js";
import Renderer from "./Renderer.js";

export interface AnimationContext {
    requestAnimationFrame(callback: FrameRequestCallback, xrFrame?: XRFrame): number;
    cancelAnimationFrame(handle: number): void;
}

/**
 * This module manages the internal animation loop of the renderer.
 *
 * @private
 */
declare class Animation {
    /**
     * Constructs a new animation loop management component.
     *
     * @param {Renderer} renderer - A reference to the main renderer.
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(renderer: Renderer, nodes: NodeManager, info: Info);
    /**
     * A reference to the main renderer.
     *
     * @type {Renderer}
     */
    renderer: Renderer;
    /**
     * Renderer component for managing nodes related logic.
     *
     * @type {Nodes}
     */
    nodes: NodeManager;
    /**
     * Renderer component for managing metrics and monitoring data.
     *
     * @type {Info}
     */
    info: Info;
    /**
     * A reference to the context from `requestAnimationFrame()` can
     * be called (usually `window`).
     *
     * @type {?(Window|XRSession)}
     */
    _context: AnimationContext | null;
    /**
     * The user-defined animation loop.
     *
     * @type {?Function}
     * @default null
     */
    _animationLoop: ((time: DOMHighResTimeStamp, xrFrame?: XRFrame) => void) | null;
    /**
     * The requestId which is returned from the `requestAnimationFrame()` call.
     * Can be used to cancel the stop the animation loop.
     *
     * @type {?number}
     * @default null
     */
    _requestId: number | null;
    /**
     * Starts the internal animation loop.
     */
    start(): void;
    /**
     * Stops the internal animation loop.
     */
    stop(): void;
    /**
     * Returns the user-level animation loop.
     *
     * @return {?Function} The animation loop.
     */
    getAnimationLoop(): ((time: DOMHighResTimeStamp, xrFrame?: XRFrame) => void) | null;
    /**
     * Defines the user-level animation loop.
     *
     * @param {?Function} callback - The animation loop.
     */
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, xrFrame?: XRFrame) => void) | null): void;
    /**
     * Returns the animation context.
     *
     * @return {Window|XRSession} The animation context.
     */
    getContext(): AnimationContext;
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
