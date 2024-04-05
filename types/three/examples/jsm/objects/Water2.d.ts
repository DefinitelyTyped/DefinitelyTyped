import { BufferGeometry, ColorRepresentation, Mesh, ShaderMaterial, Texture, Vector2 } from "three";

export interface Water2Options {
    color?: ColorRepresentation | undefined;
    textureWidth?: number | undefined;
    textureHeight?: number | undefined;
    clipBias?: number | undefined;
    flowDirection?: Vector2 | undefined;
    flowSpeed?: number | undefined;
    reflectivity?: number | undefined;
    scale?: number | undefined;
    shader?: object | undefined;
    flowMap?: Texture | undefined;
    normalMap0?: Texture | undefined;
    normalMap1?: Texture | undefined;
}

export class Water extends Mesh {
    material: ShaderMaterial;
    constructor(geometry: BufferGeometry, options: Water2Options);
}
