import { Camera, Scene, WebGLRenderer } from "three";

export class StereoEffect {
    constructor(renderer: WebGLRenderer);

    setEyeSeparation(eyeSep: number): void;
    render(scene: Scene, camera: Camera): void;
    setSize(width: number, height: number): void;
}
