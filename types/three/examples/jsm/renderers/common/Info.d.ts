import { Object3D } from "three";

export default class Info {
    autoReset: boolean;

    frame: number;
    calls: number;

    render: { calls: number; drawCalls: number; triangles: number; points: number; lines: number; timestamp: number };

    compute: { calls: number; computeCalls: number; timestamp: number };

    memory: { geometries: number; textures: number };

    update(object: Object3D, count: number, instanceCount: number): void;

    updateTimestamp(type: "render" | "compute", time: number): void;

    reset(): void;

    dispose(): void;
}
