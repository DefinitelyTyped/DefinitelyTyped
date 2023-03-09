import { BufferGeometry } from '../core/BufferGeometry';

export class CircleGeometry extends BufferGeometry {
    /**
     * @param radius - Radius of the circle, default = 1.
     * @param segments - Number of segments (triangles), minimum = 3, default = 32.
     * @param thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

    /**
     * @default 'CircleGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        segments: number;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): CircleGeometry;
}
