import Particle from '../core/Particle';
import { Vector3D } from '../math';
import Zone from './Zone';

export default class BoxZone extends Zone {
    /**
     * BoxZone is a box zone
     * @param {Number|Vector3D} x - the position's x value or a Vector3D Object
     * @param {Number?} y - the position's y value
     * @param {Number?} z - the position's z value
     * @param {Number?} w - the Box's width
     * @param {Number?} h - the Box's height
     * @param {Number?} d - the Box's depth
     * @example
     * var boxZone = new BoxZone(0,0,0,50,50,50);
     * or
     * var boxZone = new BoxZone(new Vector3D(0,0,0), 50, 50, 50);
     * @extends {Zone}
     * @constructor
     */
    constructor(a: number, b?: number, c?: number, d?: number, e?: number, f?: number);
    /**
     * Returns true to indicate this is a BoxZone.
     *
     * @return {boolean}
     */
    isBoxZone(): boolean;
    /**
     * @return {Vector3D} a random position vector3D
     */
    getPosition(): Vector3D;
    protected _dead(particle: Particle): boolean;
    protected _bound(particle: Particle): void;
    protected _static(particle: Particle): void;
    protected _cross(particle: Particle): void;
}
