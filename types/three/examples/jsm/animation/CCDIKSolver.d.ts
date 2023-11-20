import { Object3D, SkinnedMesh, Vector3 } from '../../../src/Three.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IKS {
    effector: number;
    iteration?: number | undefined;
    links: Array<{
        enabled?: boolean | undefined;
        index: number;
        limitation?: Vector3 | undefined;
        rotationMin?: Vector3 | undefined;
        rotationMax?: Vector3 | undefined;
    }>;
    minAngle?: number | undefined;
    maxAngle?: number | undefined;
    target: number;
}

export class CCDIKSolver {
    constructor(mesh: SkinnedMesh, iks: IKS[]);

    update(): this;
    updateOne(iks: IKS): this;
    createHelper(): CCDIKHelper;
}

export class CCDIKHelper extends Object3D {
    constructor(mesh: SkinnedMesh, iks?: IKS[], sphereSize?: number);
    dispose(): void;
}
