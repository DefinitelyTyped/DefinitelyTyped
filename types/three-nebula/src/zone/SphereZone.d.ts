import Particle from "../core/Particle";
import Zone from "./Zone";

export default class SphereZone extends Zone {
    /**
     *  A spherical zone for particles to be emitted within.
     */
    constructor(centerX?: number, centerY?: number, centerZ?: number, radius?: number);
    /**
     * Returns true to indicate this is a SphereZone.
     */
    isSphereZone(): boolean;
    /**
     * Sets the particle to dead if the particle collides with the sphere.
     */
    protected _dead(particle: Particle): void;
    /**
     * Warns that this zone does not support the _cross method.
     */
    protected _cross(): void;
}
