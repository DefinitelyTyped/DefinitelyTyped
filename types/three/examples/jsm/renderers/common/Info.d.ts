import { Object3D } from '../../../../src/Three.js';

export default class Info {
    autoReset: boolean;

    frame: number;
    calls: number;

    render: { calls: number; drawCalls: number; triangles: number; points: number; lines: number };

    compute: { calls: number };

    memory: { geometries: number; textures: number };

    update(object: Object3D, count: number, instanceCount: number): void;

    reset(): void;

    dispose(): void;
}
