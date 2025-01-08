import { BufferGeometry, ColorRepresentation, Mesh, PerspectiveCamera, ShaderMaterial, WebGLRenderTarget } from "three";

export interface RefractorOptions {
    color?: ColorRepresentation | undefined;
    textureWidth?: number | undefined;
    textureHeight?: number | undefined;
    clipBias?: number | undefined;
    shader?: object | undefined;
    multisample?: number | undefined;
}

export class Refractor extends Mesh<BufferGeometry, ShaderMaterial> {
    type: "Refractor";
    camera: PerspectiveCamera;

    constructor(geometry?: BufferGeometry, options?: RefractorOptions);

    getRenderTarget(): WebGLRenderTarget;

    dispose(): void;
}
