// Renderers / WebGL /////////////////////////////////////////////////////////////////////
import { WebGLExtensions } from './WebGLExtensions.js';
import { WebGLInfo } from './WebGLInfo.js';
import { WebGLCapabilities } from './WebGLCapabilities.js';

export class WebGLBufferRenderer {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        info: WebGLInfo,
        capabilities: WebGLCapabilities,
    );

    setMode: (value: any) => void;
    render: (start: any, count: number) => void;
    renderInstances: (start: any, count: number, primcount: number) => void;
    renderMultiDraw: (starts: Int32Array, counts: Int32Array, drawCount: number) => void;
}
