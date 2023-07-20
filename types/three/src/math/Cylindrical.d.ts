import { Vector3 } from './Vector3.js';

export class Cylindrical {
    constructor(radius?: number, theta?: number, y?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    theta: number;

    /**
     * @default 0
     */
    y: number;

    clone(): this;
    copy(other: Cylindrical): this;
    set(radius: number, theta: number, y: number): this;
    setFromVector3(vec3: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}
