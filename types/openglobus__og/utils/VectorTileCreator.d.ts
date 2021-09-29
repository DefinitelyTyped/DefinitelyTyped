export class VectorTileCreator {
    constructor(planet: any, maxFrames: any, width: any, height: any);
    _width: any;
    _height: any;
    _handler: any;
    _planet: any;
    _framebuffer: Framebuffer;
    MAX_FRAMES: any;
    _currentFrame: number;
    _queue: any[];
    _initialize(): void;
    frame(): void;
    add(material: any): void;
    remove(material: any): void;
}
import { Framebuffer } from "../webgl/Framebuffer.js";
