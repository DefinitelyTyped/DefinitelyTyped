import { Object3D, Camera, MOUSE, Raycaster, Mesh, Vector3, Quaternion } from '../../../src/Three.js';

export class TransformControls extends Object3D {
    constructor(object: Camera, domElement?: HTMLElement);

    domElement: HTMLElement;

    // API

    camera: Camera;
    object: Object3D | undefined;
    enabled: boolean;
    axis: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null;
    mode: 'translate' | 'rotate' | 'scale';
    translationSnap: number | null;
    rotationSnap: number | null;
    space: 'world' | 'local';
    size: number;
    dragging: boolean;
    showX: boolean;
    showY: boolean;
    showZ: boolean;
    readonly isTransformControls: true;
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };

    attach(object: Object3D): this;
    detach(): this;
    getMode(): 'translate' | 'rotate' | 'scale';
    getRaycaster(): Raycaster;
    setMode(mode: 'translate' | 'rotate' | 'scale'): void;
    setTranslationSnap(translationSnap: number | null): void;
    setRotationSnap(rotationSnap: number | null): void;
    setScaleSnap(scaleSnap: number | null): void;
    setSize(size: number): void;
    setSpace(space: 'world' | 'local'): void;
    reset(): void;
    dispose(): void;
}

export class TransformControlsGizmo extends Object3D {
    type: 'TransformControlsGizmo';
    isTransformControlsGizmo: true;

    gizmo: {
        translate: Object3D;
        rotate: Object3D;
        scale: Object3D;
    };
    helper: {
        translate: Object3D;
        rotate: Object3D;
        scale: Object3D;
    };
    picker: {
        translate: Object3D;
        rotate: Object3D;
        scale: Object3D;
    };

    constructor();
}

export class TransformControlsPlane extends Mesh {
    type: 'TransformControlsPlane';
    isTransformControlsPlane: true;

    constructor();

    mode: 'translate' | 'scale' | 'rotate';

    axis: 'X' | 'Y' | 'Z' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'E';

    space: 'local' | 'world';

    eye: Vector3;
    worldPosition: Vector3;
    worldQuaternion: Quaternion;
}
