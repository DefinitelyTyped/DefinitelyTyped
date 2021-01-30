import {
    LineBasicMaterial,
    Matrix4,
    MeshBasicMaterial,
    Object3D,
    SkinnedMesh,
    SphereGeometry,
} from '../../../src/Three';

// tslint:disable-next-line:interface-name
export interface IKS {
    effector: number;
    iteration: number;
    links: {
        enabled: boolean;
        index: number;
    };
    maxAngle: number;
    target: number;
}

export class CCDIKSolver {
    constructor(mesh: SkinnedMesh, iks: IKS[]);

    update(): this;
    createHelper(): CCDIKHelper;
}

export class CCDIKHelper extends Object3D {
    constructor(mesh: SkinnedMesh, iks: IKS[]);
}
