import { BufferGeometry, Color, Mesh, Side, Texture, Vector3 } from '../../../src/Three';

export interface WaterOptions {
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    alpha?: number;
    time?: number;
    waterNormals?: Texture;
    sunDirection?: Vector3;
    sunColor?: Color | string | number;
    waterColor?: Color | string | number;
    eye?: Vector3;
    distortionScale?: number;
    side?: Side;
    fog?: boolean;
}

export class Water extends Mesh {
    constructor(geometry: BufferGeometry, options: WaterOptions);
}
