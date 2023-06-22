import { WebGLCapabilities } from './WebGLCapabilities';
import { BufferAttribute } from '../../core/BufferAttribute';
import { InterleavedBufferAttribute } from '../../core/InterleavedBufferAttribute';
import { GLBufferAttribute } from '../../core/GLBufferAttribute';

export class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): {
        buffer: WebGLBuffer;
        type: number;
        bytesPerElement: number;
        version: number;
    };

    remove(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute, bufferType: number): void;
}
