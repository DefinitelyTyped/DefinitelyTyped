import Particle from '../core/Particle';
import Zone from './Zone';

export default class SphereZone extends Zone {
    /**
     *  A spherical zone for particles to be emitted within.
     * @constructs {SphereZone}
     *
     * @param {number?} centerX - the sphere's center x coordinate
     * @param {number?} centerY - the sphere's center y coordinate
     * @param {number?} centerZ - the sphere's center z coordinate
     * @param {number?} radius - the sphere's radius value
     * @return void
     */
    constructor(centerX?: number, centerY?: number, centerZ?: number, radius?: number);
    /**
     * Returns true to indicate this is a SphereZone.
     *
     * @return {boolean}
     */
    isSphereZone(): boolean;
    /**
     * Sets the particle to dead if the particle collides with the sphere.
     *
     * @param {object} particle
     * @return void
     */
    protected _dead(particle: Particle): void;
    /**
     * Warns that this zone does not support the _cross method.
     *
     * @return void
     */
    protected _cross(): void;
}
