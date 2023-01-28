import { BufferGeometry } from './../core/BufferGeometry';

export class TorusGeometry extends BufferGeometry {
    /**
     * @param radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
     * @param tube - Radius of the tube. Default is 0.4.
     * @param radialSegments - Default is 12
     * @param tubularSegments - Default is 48.
     * @param arc - Central angle. Default is Math.PI * 2.
     */
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

    /**
     * @default 'TorusGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        arc: number;
    };

    static fromJSON(data: any): TorusGeometry;
}
