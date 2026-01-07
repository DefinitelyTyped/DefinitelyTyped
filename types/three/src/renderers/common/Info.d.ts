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
    };
    compute: {
        calls: number;
        frameCalls: number;
        timestamp: number;
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
