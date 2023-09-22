import Particle from "../core/Particle";
import { Vector3D } from "../math";
import Zone from "./Zone";

export default class BoxZone extends Zone {
    /**
     * BoxZone is a box zone
     * @example
     * var boxZone = new BoxZone(0,0,0,50,50,50);
     * or
     * var boxZone = new BoxZone(new Vector3D(0,0,0), 50, 50, 50);
     */
    constructor(a: number, b?: number, c?: number, d?: number, e?: number, f?: number);
    /**
     * Returns true to indicate this is a BoxZone.
     */
    isBoxZone(): boolean;

    getPosition(): Vector3D;

    protected _dead(particle: Particle): boolean;

    protected _bound(particle: Particle): void;

    protected _static(particle: Particle): void;

    protected _cross(particle: Particle): void;
}
