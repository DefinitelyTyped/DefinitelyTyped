export class NormalMapCreator {
    constructor(planet: any, options: any);
    _minTabelSize: any;
    _maxTableSize: any;
    _planet: any;
    _handler: any;
    _verticesBufferArray: any[];
    _indexBufferArray: any[];
    _positionBuffer: any;
    _framebuffer: Framebuffer;
    _normalMapVerticesTexture: any;
    _width: any;
    _height: any;
    _queue: QueueArray;
    _lock: Lock;
    _init(): void;
    _drawNormalMapBlur(segment: any): boolean;
    _drawNormalMapNoBlur(segment: any): boolean;
    _drawNormalMap(segment: any): boolean;
    drawSingle(segment: any): void;
    frame(): void;
    queue(segment: any): void;
    unshift(segment: any): void;
    remove(segment: any): void;
    clear(): void;
    /**
     * Set activity off
     * @public
     */
    public lock(key: any): void;
    /**
     * Set activity on
     * @public
     */
    public free(key: any): void;
}
import { Framebuffer } from "../webgl/Framebuffer.js";
import { QueueArray } from "../QueueArray.js";
import { Lock } from "../Lock.js";
