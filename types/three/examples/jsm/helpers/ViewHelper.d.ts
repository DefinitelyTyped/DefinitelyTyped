import {
    Camera,
    Object3D,
    Vector3,
    WebGLRenderer
} from '../../../src/Three';

export class ViewHelper extends Object3D {
    constructor(camera: Camera, domElement: HTMLElement);

    readonly isViewHelper: true;
    animating: boolean;
    center: Vector3;

    render(renderer: WebGLRenderer): void;
    handleClick(event: Event): boolean;
    update(): void;
    dispose(): void;
}
