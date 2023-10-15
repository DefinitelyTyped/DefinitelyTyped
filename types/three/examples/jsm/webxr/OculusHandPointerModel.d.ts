import 'webxr';

import {
    BufferGeometry,
    Intersection,
    Mesh,
    MeshBasicMaterial,
    Object3D,
    Raycaster,
    SphereGeometry,
    Texture,
    Vector3,
} from '../../../src/Three.js';

import { XRHandMeshModel } from './XRHandMeshModel.js';

export class OculusHandPointerModel extends Object3D {
    hand: Object3D;
    controller: Object3D;
    motionController: XRHandMeshModel | null;

    envMap: Texture | null;

    mesh: Mesh | null;

    pointerGeometry: BufferGeometry | null;
    pointerMesh: Mesh<BufferGeometry, MeshBasicMaterial> | null;
    pointerObject: Object3D | null;

    pinched: boolean;
    attached: boolean;

    cursorObject: Mesh<SphereGeometry, MeshBasicMaterial> | null;

    raycaster: Raycaster;

    visible: boolean;
    xrInputSource: XRInputSource;

    constructor(hand: Object3D, controller: Object3D);

    private _drawVerticesRing(vertices: number[], baseVector: Vector3, ringIndex: number): void;

    private _updatePointerVertices(rearRadius: number): void;

    public createPointer(): void;

    private _updateRaycaster(): void;

    private _updatePointer(): void;

    public updateMatrixWorld(force?: boolean): void;

    public isPinched(): boolean;

    public setAttached(attached: boolean): void;

    public isAttached(): boolean;

    public intersectObject(object: Object3D, recursive?: boolean): Intersection[] | void;

    public intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[] | void;

    public checkIntersections(objects: Object3D[], recursive?: boolean): void;

    public setCursor(distance: number): void;
}
