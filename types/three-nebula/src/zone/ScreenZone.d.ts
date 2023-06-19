import type Particle from '../core/Particle';
import type Zone from './Zone';

export default class ScreenZone extends Zone {
    /**
   * ScreenZone is a 3d line zone
   * @param {THREE.Camera} camera - the camera
   * @param {THREE.WebGLRenderer} renderer - the renderer
   * @param {Number?} dis - the distance from camera
   * @param {String | Number?} dir - the direction ? is a string ?
   * params below are deprecated ???
  //  * @param {Number|Vector3D} x1 - the line's start point of x value or a Vector3D Object
  //  * @param {Number|Vector3D} y1 - the line's start point of y value or a Vector3D Object
  //  * @param {Number} z1 - the line's start point of z value
  //  * @param {Number} x2 - the line's end point of x value
  //  * @param {Number} y2 - the line's end point of y value
  //  * @param {Number} z2 - the line's end point of z value

   * @example
   * var lineZone = new ScreenZone(0,0,0,100,100,0);
   * or
   * var lineZone = new ScreenZone(new Vector3D(0,0,0),new Vector3D(100,100,0));
   * @extends {Zone}
   * @constructor
   */
    constructor(camera: THREE.Camera, renderer: THREE.WebGLRenderer, dis?: number, dir?: number | string);
    /**
     * Returns true to indicate this is a ScreenZone.
     *
     * @return {boolean}
     */
    isScreenZone(): boolean;
    protected _dead(particle: Particle): boolean;
    protected _bound(particle: Particle): void;
}
