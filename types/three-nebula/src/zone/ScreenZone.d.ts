import type Particle from "../core/Particle";
import type Zone from "./Zone";

export default class ScreenZone extends Zone {
    /**
     * ScreenZone is a 3d line zone
     * params below are deprecated ???
     * @example
     * var lineZone = new ScreenZone(0,0,0,100,100,0);
     * or
     * var lineZone = new ScreenZone(new Vector3D(0,0,0),new Vector3D(100,100,0));
     */
    constructor(camera: THREE.Camera, renderer: THREE.WebGLRenderer, dis?: number, dir?: number | string);
    /**
     * Returns true to indicate this is a ScreenZone.
     */
    isScreenZone(): boolean;
    protected _dead(particle: Particle): boolean;
    protected _bound(particle: Particle): void;
}
