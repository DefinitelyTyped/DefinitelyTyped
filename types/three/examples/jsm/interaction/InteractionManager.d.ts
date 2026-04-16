import { Camera, Object3D, WebGLRenderer } from "three";
import { WebGPURenderer } from "three/webgpu";

declare class InteractionManager {
    objects: Object3D[];
    element: HTMLCanvasElement | null;
    camera: Camera | null;

    constructor();

    add(...objects: Object3D[]): this;
    remove(...objects: Object3D[]): this;
    connect(renderer: WebGPURenderer | WebGLRenderer, camera: Camera): this;
    update(): void;
    disconnect(): void;
}

export { InteractionManager };
