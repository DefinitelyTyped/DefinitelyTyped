import { CubeTexture, Mesh, PerspectiveCamera, Scene } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class CubeTexturePass extends Pass {
    constructor(camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number);
    camera: PerspectiveCamera;
    cubeShader: object;
    cubeMesh: Mesh;
    envMap: CubeTexture;
    opacity: number;
    cubeScene: Scene;
    cubeCamera: PerspectiveCamera;
}
