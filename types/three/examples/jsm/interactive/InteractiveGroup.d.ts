import { Camera, Group, Object3D, Object3DEventMap, Raycaster, Vector2, WebGLRenderer, XRTargetRaySpace } from "three";

export interface InteractiveObject3DEventMap extends Object3DEventMap {
    hoveron: { data: Vector2 };
    pointerdown: { data: Vector2 };
    pointerup: { data: Vector2 };
    pointermove: { data: Vector2 };
    mousedown: { data: Vector2 };
    mouseup: { data: Vector2 };
    mousemove: { data: Vector2 };
    click: { data: Vector2 };
}

export class InteractiveObject3D extends Object3D<InteractiveObject3DEventMap> {}

export class InteractiveGroup extends Group {
    raycaster: Raycaster;

    listenToPointerEvents(renderer: WebGLRenderer, camera: Camera): void;

    disconnectionPointerEvents(): void;

    listenToXRControllerEvents(controller: XRTargetRaySpace): void;

    disconnectXrControllerEvents(): void;

    disconnect(): void;
}
