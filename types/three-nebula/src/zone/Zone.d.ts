import { Particle } from '../core';
import Vector3D from '../math/Vector3D';
/**
 * A Zone determines the area in 3D space where an emitter's particles can position
 * themselves. They are supplied to both the Position initializer
 * and the CrossZone behaviour.
 *
 * @see {@link '../initialize/Position.js'}
 * @see {@link '../behaviour/CrossZone.js'}
 * @abstract
 */

export default class Zone {
    /**
     * Constructs a Zone instance.
     *
     * @param {string} type - The zone type
     * @return void
     */
    constructor(type: string);
    getPosition(): Vector3D | null;
    crossing(particle: Particle): void;
    /**
     * Determines if this zone is a BoxZone.
     *
     * @return {boolean}
     */
    isBoxZone(): boolean;
    /**
     * Determines if this zone is a LineZone.
     *
     * @return {boolean}
     */
    isLineZone(): boolean;
    /**
     * Determines if this zone is a MeshZone.
     *
     * @return {boolean}
     */
    isMeshZone(): boolean;
    /**
     * Determines if this zone is a PointZone.
     *
     * @return {boolean}
     */
    isPointZone(): boolean;
    /**
     * Determines if this zone is a ScreenZone.
     *
     * @return {boolean}
     */
    isScreenZone(): boolean;
    /**
     * Determines if this zone is a SphereZone.
     *
     * @return {boolean}
     */
    isSphereZone(): boolean;
}
