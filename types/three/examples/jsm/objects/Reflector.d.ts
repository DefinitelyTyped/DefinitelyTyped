import { BufferGeometry, ColorRepresentation, Mesh, PerspectiveCamera, WebGLRenderTarget } from "three";

export interface ReflectorOptions {
    color?: ColorRepresentation | undefined;
    textureWidth?: number | undefined;
    textureHeight?: number | undefined;
    clipBias?: number | undefined;
    shader?: object | undefined;
    multisample?: number | undefined;
}

export class Reflector extends Mesh {
    type: "Reflector";
    forceUpdate: boolean;
    camera: PerspectiveCamera;

    constructor(geometry?: BufferGeometry, options?: ReflectorOptions);

    getRenderTarget(): WebGLRenderTarget;

    dispose(): void;
}
