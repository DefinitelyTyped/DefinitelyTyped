import { LineBasicMaterial, MeshBasicMaterial, Object3D, SkinnedMesh, SphereGeometry, Vector3 } from "three";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IK {
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
    mesh: SkinnedMesh;
    iks: IK[];

    constructor(mesh: SkinnedMesh, iks?: IK[]);

    update(): this;
    updateOne(ik: IK): this;
    createHelper(sphereSize?: number): CCDIKHelper;
}

export class CCDIKHelper extends Object3D {
    root: SkinnedMesh;
    iks: IK[];

    sphereGeometry: SphereGeometry;
    targetSphereMaterial: MeshBasicMaterial;
    effectorSphereMaterial: MeshBasicMaterial;
    linkSphereMaterial: MeshBasicMaterial;
    lineMaterial: LineBasicMaterial;

    constructor(mesh: SkinnedMesh, iks?: IK[], sphereSize?: number);

    dispose(): void;
}
