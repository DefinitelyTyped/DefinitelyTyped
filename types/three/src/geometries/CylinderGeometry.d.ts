import { BufferGeometry } from '../core/BufferGeometry';

export class CylinderGeometry extends BufferGeometry {
    /**
     * @param radiusTop - Radius of the cylinder at the top. Default is 1.
     * @param radiusBottom - Radius of the cylinder at the bottom. Default is 1.
     * @param height - Height of the cylinder. Default is 1.
     * @param radialSegments - Number of segmented faces around the circumference of the cylinder. Default is 32
     * @param heightSegments - Number of rows of faces along the height of the cylinder. Default is 1.
     * @param openEnded - A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
     * @param thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
     */
    constructor(
        radiusTop?: number,
        radiusBottom?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'CylinderGeometry'
     */
    type: string;

    parameters: {
        radiusTop: number;
        radiusBottom: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): CylinderGeometry;
}
