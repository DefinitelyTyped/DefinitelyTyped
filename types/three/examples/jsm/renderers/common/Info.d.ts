import { Object3D } from "three";
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
    constructor();
    update(object: Object3D, count: number, instanceCount: number): void;
    updateTimestamp(type: "render" | "compute", time: number): void;
    reset(): void;
    dispose(): void;
}
export default Info;
