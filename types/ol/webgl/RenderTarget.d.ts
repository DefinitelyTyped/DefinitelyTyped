import WebGLHelper from './Helper';

export default class WebGLRenderTarget {
    constructor(helper: WebGLHelper, opt_size?: number[]);
    /**
     * This will cause following calls to #readAll or #readPixel to download the content of the
     * render target into memory, which is an expensive operation.
     * This content will be kept in cache but should be cleared after each new render.
     */
    clearCachedData(): void;
    getFramebuffer(): WebGLFramebuffer;
    /**
     * Returns the size of the render target texture
     */
    getSize(): number[];
    getTexture(): WebGLTexture;
    /**
     * Returns the full content of the frame buffer as a series of r, g, b, a components
     * in the 0-255 range (unsigned byte).
     */
    readAll(): Uint8Array;
    /**
     * Reads one pixel of the frame buffer as an array of r, g, b, a components
     * in the 0-255 range (unsigned byte).
     * If x and/or y are outside of existing data, an array filled with 0 is returned.
     */
    readPixel(x: number, y: number): Uint8Array;
    /**
     * Changes the size of the render target texture. Note: will do nothing if the size
     * is already the same.
     */
    setSize(size: number[]): void;
}
