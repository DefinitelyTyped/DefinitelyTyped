import { Object3D, SkinnedMesh } from '../../../src/Three';

// tslint:disable-next-line:interface-name
export interface IKS {
    effector: number;
    iteration: number;
    links: Array<{
        enabled: boolean;
        index: number;
    }>;
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
    mesh: SkinnedMesh;
    iks: IKS[];
    constructor(mesh: SkinnedMesh, iks: IKS[]);
}
