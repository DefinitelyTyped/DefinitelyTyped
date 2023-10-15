import { OrbitControls } from './OrbitControls.js';
import { Camera } from '../../../src/Three.js';

/**
 * MapControls performs orbiting, dollying (zooming), and panning.
 * Unlike TrackballControls, it maintains the "up" direction
 * object.up (+Y by default).
 *
 *    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch:
 *    two-finger rotate
 *    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
 *    Pan - left mouse, or arrow keys / touch: one-finger move
 *
 * @param object - The camera to be controlled. The camera must not
 * be a child of another object, unless that object is the scene itself.
 * @param domElement - The HTML element used for
 * event listeners.
 */
export class MapControls extends OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);
}
