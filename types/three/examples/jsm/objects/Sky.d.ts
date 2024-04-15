import { BoxGeometry, Mesh, ShaderMaterial } from "three";

export class Sky extends Mesh {
    constructor();

    geometry: BoxGeometry;
    material: ShaderMaterial;

    static SkyShader: object;
}
