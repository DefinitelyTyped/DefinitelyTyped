import { Object3D } from "../../core/Object3D.js";
/**
 * This renderer module provides a series of statistical information
 * about the GPU memory and the rendering process. Useful for debugging
 * and monitoring.
 */
declare class Info {
    autoReset: boolean;
    frame: number;
    calls: number;
    render: {
        calls: number;
        frameCalls: number;
        drawCalls: number;
        triangles: number;
        points: number;
        lines: number;
        timestamp: number;
        previousFrameCalls: number;
        timestampCalls: number;
    };
    compute: {
        calls: number;
        frameCalls: number;
        timestamp: number;
        previousFrameCalls: number;
        timestampCalls: number;
    };
    memory: {
        geometries: number;
        textures: number;
    };
    /**
     * Constructs a new info component.
     */
    constructor();
    /**
     * This method should be executed per draw call and updates the corresponding metrics.
     *
     * @param {Object3D} object - The 3D object that is going to be rendered.
     * @param {Number} count - The vertex or index count.
     * @param {Number} instanceCount - The instance count.
     */
    update(object: Object3D, count: number, instanceCount: number): void;
    /**
     * Used by async render methods to updated timestamp metrics.
     *
     * @param {('render'|'compute')} type - The type of render call.
     * @param {Number} time - The duration of the compute/render call in milliseconds.
     */
    updateTimestamp(type: "render" | "compute", time: number): void;
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
