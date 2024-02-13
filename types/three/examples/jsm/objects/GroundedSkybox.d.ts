import { Mesh, MeshBasicMaterial, SphereGeometry, Texture } from "../../../src/Three.js";

export class GroundedSkybox extends Mesh<SphereGeometry, MeshBasicMaterial> {
    constructor(map: Texture, height: number, radius: number, resolution?: number);
}
