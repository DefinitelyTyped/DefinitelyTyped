import { BufferGeometry } from '../core/BufferGeometry';

export class CapsuleGeometry extends BufferGeometry {
    /**
     * @param [radius=1] — Radius of the capsule.
     * @param [length=1] — Length of the middle section.
     * @param [capSegments=4] — Number of curve segments used to build the caps.
     * @param [radialSegments=8] — Number of segmented faces around the circumference of the capsule.
     */
    constructor(radius?: number, length?: number, capSegments?: number, radialSegments?: number);

    /**
     * @default 'CapsuleGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        length: number;
        capSegments: number;
        radialSegments: number;
    };

    static fromJSON(data: any): CapsuleGeometry;
}
