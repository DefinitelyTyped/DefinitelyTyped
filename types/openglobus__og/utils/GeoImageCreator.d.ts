export class GeoImageCreator {
    constructor(planet: any, maxFrames: any);
    _gridSize: number;
    _planet: any;
    _framebuffer: Framebuffer;
    _texCoordsBuffer: any;
    _indexBuffer: any;
    MAX_FRAMES: any;
    _currentFrame: number;
    _queue: any[];
    _animate: any[];
    _initialize(): void;
    /**
     * Creates geoImage corners coordinates grid buffer.
     * @public
     * @param{Array.<og.LonLat>} c - GeoImage corners coordinates.
     * @return{WebGLBuffer} Grid coordinates buffer.
     */
    public createGridBuffer(c: Array<any>, toMerc: any): WebGLBuffer;
    frame(): void;
    add(geoImage: any): void;
    remove(geoImage: any): void;
    _initBuffers(): void;
    _framebufferMercProj: Framebuffer;
    _quadTexCoordsBuffer: any;
    _quadVertexBuffer: any;
    _initShaders(): void;
}
import { Framebuffer } from "../webgl/Framebuffer.js";
