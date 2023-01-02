import { Object3D, SkinnedMesh, Vector3 } from '../../../src/Three';

// tslint:disable-next-line:interface-name
export interface IKS {
    effector: number;
    iteration: number;
    links: Array<{
        enabled: boolean;
        index: number;
        limitation?: Vector3;
        rotationMin?: Vector3;
        rotationMax?: Vector3;
    }>;
    minAngle: number;
    maxAngle: number;
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
