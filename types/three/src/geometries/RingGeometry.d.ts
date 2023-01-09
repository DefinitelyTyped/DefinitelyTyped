import { BufferGeometry } from './../core/BufferGeometry';

export class RingGeometry extends BufferGeometry {
    /**
     * @param innerRadius - Default is 0.5.
     * @param outerRadius - Default is 1.
     * @param thetaSegments - Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 32.
     * @param phiSegments - Minimum is 1. Default is 1.
     * @param thetaStart - Starting angle. Default is 0.
     * @param thetaLength - Central angle. Default is Math.PI * 2.
     */
    constructor(
        innerRadius?: number,
        outerRadius?: number,
        thetaSegments?: number,
        phiSegments?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'RingGeometry'
     */
    type: string;

    parameters: {
        innerRadius: number;
        outerRadius: number;
        thetaSegments: number;
        phiSegments: number;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): RingGeometry;
}
