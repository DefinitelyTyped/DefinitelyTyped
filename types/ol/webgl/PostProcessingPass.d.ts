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
    apply(frameState: FrameState, nextPass?: WebGLPostProcessingPass): void;
    getFrameBuffer(): WebGLFramebuffer;
    getGL(): WebGLRenderingContext;
    init(frameState: FrameState): void;
}
