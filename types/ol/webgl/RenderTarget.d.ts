import WebGLHelper from './Helper';

export default class WebGLRenderTarget {
    constructor(helper: WebGLHelper, opt_size?: number[]);
    clearCachedData(): void;
    getFramebuffer(): WebGLFramebuffer;
    getSize(): number[];
    getTexture(): WebGLTexture;
    readAll(): Uint8Array;
    readPixel(x: number, y: number): Uint8Array;
    setSize(size: number[]): void;
}
