import { Camera, Object3D, Scene, Vector2 } from "three";

declare class CSS2DObject extends Object3D {
    element: HTMLElement;
    center: Vector2;

    constructor(element: HTMLElement);

    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
}

export interface CSS2DParameters {
    element?: HTMLElement | undefined;
}

declare class CSS2DRenderer {
    domElement: HTMLElement;
    sortObjects: boolean;

    constructor(parameters?: CSS2DParameters);

    getSize: () => { width: number; height: number };
    render: (scene: Scene, camera: Camera) => void;
    setSize: (width: number, height: number) => void;
}

export { CSS2DObject, CSS2DRenderer };
