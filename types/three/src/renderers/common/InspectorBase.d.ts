import { Camera } from "../../cameras/Camera.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import Node from "../../nodes/core/Node.js";
import NodeFrame from "../../nodes/core/NodeFrame.js";
import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import { Scene } from "../../scenes/Scene.js";
import { Texture } from "../../textures/Texture.js";
import Renderer from "./Renderer.js";

/**
 * InspectorBase is the base class for all inspectors.
 *
 * @class InspectorBase
 */
declare class InspectorBase {
    /**
     * The renderer associated with this inspector.
     *
     * @type {WebGLRenderer}
     * @private
     */
    private _renderer;
    /**
     * The current frame being processed.
     *
     * @type {Object}
     */
    currentFrame: unknown;
    /**
     * Returns the node frame for the current renderer.
     *
     * @return {Object} The node frame.
     */
    get nodeFrame(): NodeFrame;
    /**
     * Sets the renderer for this inspector.
     *
     * @param {WebGLRenderer} renderer - The renderer to associate with this inspector.
     * @return {InspectorBase} This inspector instance.
     */
    setRenderer(renderer: Renderer): InspectorBase;
    /**
     * Returns the renderer associated with this inspector.
     *
     * @return {WebGLRenderer} The associated renderer.
     */
    getRenderer(): Renderer;
    /**
     * Initializes the inspector.
     */
    init(): void;
    /**
     * Called when a frame begins.
     */
    begin(): void;
    /**
     * Called when a frame ends.
     */
    finish(): void;
    /**
     * Inspects a node.
     *
     * @param {Node} node - The node to inspect.
     */
    inspect(node: Node): void;
    /**
     * When a compute operation is performed.
     *
     * @param {ComputeNode} computeNode - The compute node being executed.
     * @param {number|Array<number>} dispatchSizeOrCount - The dispatch size or count.
     */
    computeAsync(computeNode: ComputeNode, dispatchSizeOrCount: number | number[]): void;
    /**
     * Called when a compute operation begins.
     *
     * @param {string} uid - A unique identifier for the render context.
     * @param {ComputeNode} computeNode - The compute node being executed.
     */
    beginCompute(uid: string, computeNode: ComputeNode): void;
    /**
     * Called when a compute operation ends.
     *
     * @param {string} uid - A unique identifier for the render context.
     * @param {ComputeNode} computeNode - The compute node being executed.
     */
    finishCompute(uid: string): void;
    /**
     * Called when a render operation begins.
     *
     * @param {string} uid - A unique identifier for the render context.
     * @param {Scene} scene - The scene being rendered.
     * @param {Camera} camera - The camera being used for rendering.
     * @param {?WebGLRenderTarget} renderTarget - The render target, if any.
     */
    beginRender(uid: string, scene: Scene, camera: Camera, renderTarget: RenderTarget): void;
    /**
     * Called when an animation loop ends.
     *
     * @param {string} uid - A unique identifier for the render context.
     */
    finishRender(uid: string): void;
    /**
     * Called when a texture copy operation is performed.
     *
     * @param {Texture} srcTexture - The source texture.
     * @param {Texture} dstTexture - The destination texture.
     */
    copyTextureToTexture(srcTexture: Texture, dstTexture: Texture): void;
    /**
     * Called when a framebuffer copy operation is performed.
     *
     * @param {Texture} framebufferTexture - The texture associated with the framebuffer.
     */
    copyFramebufferToTexture(framebufferTexture: Texture): void;
}

export default InspectorBase;
