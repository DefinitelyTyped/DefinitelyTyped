import { Object3D } from '../../../../src/Three.js';

export default class Info {
    autoRest: boolean;

    render: { frame: number; drawCalls: number; triangles: number; points: number; lines: number };

    memory: { geometries: number; textures: number };

    update(object: Object3D, count: number, instanceCount: number): void;

    reset(): void;

    dispose(): void;
}
