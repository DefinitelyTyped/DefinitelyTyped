import { CylinderGeometry } from './CylinderGeometry';

export class ConeGeometry extends CylinderGeometry {
    /**
     * @param radius - Radius of the cone base. Default is 1.
     * @param height - Height of the cone. Default is 1.
     * @param radialSegments - Number of segmented faces around the circumference of the cone. Default is 32
     * @param heightSegments - Number of rows of faces along the height of the cone. Default is 1.
     * @param openEnded - A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
     * @param thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.
     */
    constructor(
        radius?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'ConeGeometry'
     */
    type: string;

    static fromJSON(data: any): ConeGeometry;
}
