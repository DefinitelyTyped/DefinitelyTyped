import { Camera, Object3D, Vector3, WebGLRenderer } from '../../../src/Three';

export class ViewHelper extends Object3D {
    animating: boolean;
    center: Vector3;

    readonly isViewHelper: true;

    constructor(camera: Camera, domElement: HTMLElement);

    render(renderer: WebGLRenderer): void;
    handleClick(event: MouseEvent): boolean;
    update(delta: number): void;
    dispose(): void;
}
