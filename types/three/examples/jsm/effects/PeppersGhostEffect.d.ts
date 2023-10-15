import { Camera, Scene, WebGLRenderer } from '../../../src/Three.js';

export class PeppersGhostEffect {
    constructor(renderer: WebGLRenderer);
    cameraDistance: number;
    reflectFromAbove: boolean;

    render(scene: Scene, camera: Camera): void;
    setSize(width: number, height: number): void;
}
