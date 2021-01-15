import { FrameState } from '../PluggableMap';
import { UniformValue } from './Helper';

export interface Options {
    webGlContext: WebGLRenderingContext;
    scaleRatio?: number;
    vertexShader?: string;
    fragmentShader?: string;
    uniforms?: { [key: string]: UniformValue };
}
export default class WebGLPostProcessingPass {
    constructor(options: Options);
    /**
     * Render to the next postprocessing pass (or to the canvas if final pass).
     */
    apply(frameState: FrameState, nextPass?: WebGLPostProcessingPass): void;
    getFrameBuffer(): WebGLFramebuffer;
    /**
     * Get the WebGL rendering context
     */
    getGL(): WebGLRenderingContext;
    /**
     * Initialize the render target texture of the post process, make sure it is at the
     * right size and bind it as a render target for the next draw calls.
     * The last step to be initialized will be the one where the primitives are rendered.
     */
    init(frameState: FrameState): void;
}
