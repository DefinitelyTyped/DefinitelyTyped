import { BufferGeometry } from './../core/BufferGeometry';

export class RingGeometry extends BufferGeometry {
    /**
     * @param [innerRadius=0.5]
     * @param [outerRadius=1]
     * @param [thetaSegments=8]
     * @param [phiSegments=1]
     * @param [thetaStart=0]
     * @param [thetaLength=Math.PI * 2]
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

export { RingGeometry as RingBufferGeometry };
