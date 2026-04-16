import { BufferAttribute } from "../../core/BufferAttribute.js";
import { Object3D } from "../../core/Object3D.js";
import { Texture } from "../../textures/Texture.js";
import ProgrammableStage from "./ProgrammableStage.js";
import ReadbackBuffer from "./ReadbackBuffer.js";

/**
 * This renderer module provides a series of statistical information
 * about the GPU memory and the rendering process. Useful for debugging
 * and monitoring.
 */
declare class Info {
    /**
     * Whether frame related metrics should automatically
     * be resetted or not. This property should be set to `false`
     * by apps which manage their own animation loop. They must
     * then call `renderer.info.reset()` once per frame manually.
     *
     * @type {boolean}
     * @default true
     */
    autoReset: boolean;
    /**
     * The current frame ID. This ID is managed
     * by `NodeFrame`.
     *
     * @type {number}
     * @readonly
     * @default 0
     */
    readonly frame: number;
    /**
     * The number of render calls since the
     * app has been started.
     *
     * @type {number}
     * @readonly
     * @default 0
     */
    readonly calls: number;
    /**
     * Render related metrics.
     *
     * @type {Object}
     * @readonly
     * @property {number} calls - The number of render calls since the app has been started.
     * @property {number} frameCalls - The number of render calls of the current frame.
     * @property {number} drawCalls - The number of draw calls of the current frame.
     * @property {number} triangles - The number of rendered triangle primitives of the current frame.
     * @property {number} points - The number of rendered point primitives of the current frame.
     * @property {number} lines - The number of rendered line primitives of the current frame.
     * @property {number} timestamp - The timestamp of the frame.
     */
    readonly render: {
        calls: number;
        frameCalls: number;
        drawCalls: number;
        triangles: number;
        points: number;
        lines: number;
        timestamp: number;
    };
    /**
     * Compute related metrics.
     *
     * @type {Object}
     * @readonly
     * @property {number} calls - The number of compute calls since the app has been started.
     * @property {number} frameCalls - The number of compute calls of the current frame.
     * @property {number} timestamp - The timestamp of the frame when using `renderer.computeAsync()`.
     */
    readonly compute: {
        calls: number;
        frameCalls: number;
        timestamp: number;
    };
    /**
     * Memory related metrics.
     *
     * @type {Object}
     * @readonly
     * @property {number} geometries - The number of active geometries.
     * @property {number} textures - The number of active textures.
     * @property {number} attributes - The number of active attributes.
     * @property {number} indexAttributes - The number of active index attributes.
     * @property {number} storageAttributes - The number of active storage attributes.
     * @property {number} indirectStorageAttributes - The number of active indirect storage attributes.
     * @property {number} readbackBuffers - The number of active readback buffers.
     * @property {number} programs - The number of active programs.
     * @property {number} renderTargets - The number of active renderTargets.
     * @property {number} total - The total memory size in bytes.
     * @property {number} texturesSize - The memory size of active textures in bytes.
     * @property {number} attributesSize - The memory size of active attributes in bytes.
     * @property {number} indexAttributesSize - The memory size of active index attributes in bytes.
     * @property {number} storageAttributesSize - The memory size of active storage attributes in bytes.
     * @property {number} indirectStorageAttributesSize - The memory size of active indirect storage attributes in bytes.
     * @property {number} readbackBuffersSize - The memory size of active readback buffers in bytes.
     * @property {number} programsSize - The memory size of active programs in bytes.
     */
    readonly memory: {
        geometries: number;
        textures: number;
        attributes: number;
        indexAttributes: number;
        storageAttributes: number;
        indirectStorageAttributes: number;
        readbackBuffers: number;
        programs: number;
        renderTargets: number;
        total: number;
        texturesSize: number;
        attributesSize: number;
        indexAttributesSize: number;
        storageAttributesSize: number;
        indirectStorageAttributesSize: number;
        readbackBuffersSize: number;
        programsSize: number;
    };
    /**
     * Map for storing calculated byte sizes of tracked objects.
     *
     * @type {Map<Object, number>}
     * @private
     */
    private memoryMap;
    /**
     * This method should be executed per draw call and updates the corresponding metrics.
     *
     * @param {Object3D} object - The 3D object that is going to be rendered.
     * @param {number} count - The vertex or index count.
     * @param {number} instanceCount - The instance count.
     */
    update(object: Object3D, count: number, instanceCount: number): void;
    /**
     * Resets frame related metrics.
     */
    reset(): void;
    /**
     * Performs a complete reset of the object.
     */
    dispose(): void;
    /**
     * Tracks texture memory explicitly, updating counts and byte tracking.
     *
     * @param {Texture} texture
     */
    createTexture(texture: Texture): void;
    /**
     * Tracks texture memory explicitly, updating counts and byte tracking.
     *
     * @param {Texture} texture
     */
    destroyTexture(texture: Texture): void;
    /**
     * Tracks attribute memory explicitly, updating counts and byte tracking.
     *
     * @param {BufferAttribute} attribute
     * @param {string} type - type of attribute
     * @private
     */
    private _createAttribute;
    /**
     * Tracks a regular attribute memory explicitly.
     *
     * @param {BufferAttribute} attribute - The attribute to track.
     */
    createAttribute(attribute: BufferAttribute): void;
    /**
     * Tracks an index attribute memory explicitly.
     *
     * @param {BufferAttribute} attribute - The index attribute to track.
     */
    createIndexAttribute(attribute: BufferAttribute): void;
    /**
     * Tracks a storage attribute memory explicitly.
     *
     * @param {BufferAttribute} attribute - The storage attribute to track.
     */
    createStorageAttribute(attribute: BufferAttribute): void;
    /**
     * Tracks an indirect storage attribute memory explicitly.
     *
     * @param {BufferAttribute} attribute - The indirect storage attribute to track.
     */
    createIndirectStorageAttribute(attribute: BufferAttribute): void;
    /**
     * Tracks attribute memory explicitly, updating counts and byte tracking.
     *
     * @param {BufferAttribute} attribute
     */
    destroyAttribute(attribute: BufferAttribute): void;
    /**
     * Tracks a readback buffer memory explicitly.
     *
     * @param {ReadbackBuffer} readbackBuffer - The readback buffer to track.
     */
    createReadbackBuffer(readbackBuffer: ReadbackBuffer): void;
    /**
     * Tracks a readback buffer memory explicitly.
     *
     * @param {ReadbackBuffer} readbackBuffer - The readback buffer to track.
     */
    destroyReadbackBuffer(readbackBuffer: ReadbackBuffer): void;
    /**
     * Tracks program memory explicitly, updating counts and byte tracking.
     *
     * @param {ProgrammableStage} program - The program to track.
     */
    createProgram(program: ProgrammableStage): void;
    /**
     * Tracks program memory explicitly, updating counts and byte tracking.
     *
     * @param {Object} program - The program to track.
     */
    destroyProgram(program: ProgrammableStage): void;
    /**
     * Calculates the memory size of a texture in bytes.
     *
     * @param {Texture} texture - The texture to calculate the size for.
     * @return {number} The calculated size in bytes.
     * @private
     */
    private _getTextureMemorySize;
    /**
     * Calculates the memory size of an attribute in bytes.
     *
     * @param {BufferAttribute} attribute - The attribute to calculate the size for.
     * @return {number} The calculated size in bytes.
     * @private
     */
    private _getAttributeMemorySize;
}

export default Info;
