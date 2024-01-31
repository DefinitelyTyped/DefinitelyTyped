import { Object3D } from "../../../../src/Three.js";

export default class Info {
    autoReset: boolean;

    frame: number;
    calls: number;

    render: { calls: number; drawCalls: number; triangles: number; points: number; lines: number };

    compute: { calls: number; computeCalls: number };

    memory: { geometries: number; textures: number };

    timestamp: { compute: number; render: number };

    update(object: Object3D, count: number, instanceCount: number): void;

    updateTimestamp(type: keyof typeof this.timestamp, time: number): void;

    resetCompute(): void;

    reset(): void;

    dispose(): void;
}
