import { WebGLAttribute } from "./WebGLAttributes.js";
import { WebGLExtensions } from "./WebGLExtensions.js";
import { WebGLInfo } from "./WebGLInfo.js";

export class WebGLIndexedBufferRenderer {
    constructor(gl: WebGLRenderingContext, extensions: WebGLExtensions, info: WebGLInfo);

    setMode: (value: number) => void;
    setIndex: (value: WebGLAttribute) => void;
    render: (start: number, count: number) => void;
    renderInstances: (start: number, count: number, primcount: number) => void;
    renderMultiDraw: (starts: Int32Array, counts: Int32Array, drawCount: number) => void;
    renderMultiDrawInstances: (
        starts: Int32Array,
        counts: Int32Array,
        drawCount: number,
        primcount: Int32Array,
    ) => void;
}
