import { WebGLExtensions } from "./WebGLExtensions.js";
import { WebGLInfo } from "./WebGLInfo.js";

export class WebGLBufferRenderer {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        info: WebGLInfo,
    );

    setMode: (value: any) => void;
    render: (start: any, count: number) => void;
    renderInstances: (start: any, count: number, primcount: number) => void;
    renderMultiDraw: (starts: Int32Array, counts: Int32Array, drawCount: number) => void;
    renderMultiDrawInstances: (
        starts: Int32Array,
        counts: Int32Array,
        drawCount: number,
        primcount: Int32Array,
    ) => void;
}
