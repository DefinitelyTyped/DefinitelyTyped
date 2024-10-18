import { BufferAttribute } from "../../core/BufferAttribute.js";
import { GLBufferAttribute } from "../../core/GLBufferAttribute.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";

export class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext);

    get(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute):
        | {
            buffer: WebGLBuffer;
            type: number;
            bytesPerElement: number;
            version: number;
            size: number;
        }
        | undefined;

    remove(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute, bufferType: number): void;
}
