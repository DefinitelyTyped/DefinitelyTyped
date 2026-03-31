import { Object3D } from "../../core/Object3D.js";

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
     * @property {number} frameCalls - The number of active textures.
     */
    readonly memory: {
        geometries: number;
        textures: number;
    };
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
}

export default Info;
