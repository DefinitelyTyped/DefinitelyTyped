import { WebGLCapabilities } from './WebGLCapabilities.js';
import { BufferAttribute } from '../../core/BufferAttribute.js';
import { InterleavedBufferAttribute } from '../../core/InterleavedBufferAttribute.js';
import { GLBufferAttribute } from '../../core/GLBufferAttribute.js';

export class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute):
        | {
              buffer: WebGLBuffer;
              type: number;
              bytesPerElement: number;
              version: number;
          }
        | undefined;

    remove(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute, bufferType: number): void;
}
