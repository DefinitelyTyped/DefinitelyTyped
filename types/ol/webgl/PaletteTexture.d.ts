export default class PaletteTexture {
    constructor(name: string, data: Uint8Array);
    getTexture(gl: WebGLRenderingContext): WebGLTexture;
}
