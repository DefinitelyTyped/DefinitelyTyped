import { BufferGeometry, WebGLRenderer, WebGLRenderTarget } from "../../../src/Three.js";

export class SDFGeometryGenerator {
    constructor(renderer: WebGLRenderer);

    generate(res?: number, distFunc?: string, bounds?: number): BufferGeometry;

    computeSDF(
        width: number,
        height: number,
        tilesX: number,
        tilesY: number,
        bounds: number,
        shader: string,
    ): WebGLRenderTarget;
}
