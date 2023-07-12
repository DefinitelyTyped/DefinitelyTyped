import { WebGLProgram } from './WebGLProgram.js';
import { WebGLTextures } from './WebGLTextures.js';

export class WebGLUniforms {
    constructor(gl: WebGLRenderingContext, program: WebGLProgram);

    setValue(gl: WebGLRenderingContext, name: string, value: any, textures: WebGLTextures): void;
    setOptional(gl: WebGLRenderingContext, object: any, name: string): void;

    static upload(gl: WebGLRenderingContext, seq: any, values: any[], textures: WebGLTextures): void;
    static seqWithValue(seq: any, values: any[]): any[];
}
