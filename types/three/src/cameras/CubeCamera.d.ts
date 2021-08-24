import { WebGLCubeRenderTarget } from './../renderers/WebGLCubeRenderTarget';
import { Scene } from './../scenes/Scene';
import { WebGLRenderer } from './../renderers/WebGLRenderer';
import { Object3D } from './../core/Object3D';

export class CubeCamera extends Object3D {
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    type: 'CubeCamera';

    renderTarget: WebGLCubeRenderTarget;

    update(renderer: WebGLRenderer, scene: Scene): void;
}
