import { Mesh, IcosahedronGeometry, ShaderMaterial, Texture } from '../../../src/Three';

export class GroundProjectedEnv extends Mesh<IcosahedronGeometry, ShaderMaterial> {
    constructor(texture: Texture, options?: { height?: number; radius?: number });

    set radius(radius: number);

    get radius(): number;

    set height(height: number);

    get height(): number;
}
