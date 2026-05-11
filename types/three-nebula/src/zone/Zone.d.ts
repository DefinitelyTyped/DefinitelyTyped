import { Particle } from "../core";
import Vector3D from "../math/Vector3D";
/**
 * A Zone determines the area in 3D space where an emitter's particles can position
 * themselves. They are supplied to both the Position initializer
 * and the CrossZone behaviour.
 *
 * @see {@link '../initialize/Position.js'}
 * @see {@link '../behaviour/CrossZone.js'}
 */

export default class Zone {
    /**
     * Constructs a Zone instance.
     */
    constructor(type: string);
    getPosition(): Vector3D | null;
    crossing(particle: Particle): void;
    /**
     * Determines if this zone is a BoxZone.
     */
    isBoxZone(): boolean;
    /**
     * Determines if this zone is a LineZone.
     */
    isLineZone(): boolean;
    /**
     * Determines if this zone is a MeshZone.
     */
    isMeshZone(): boolean;
    /**
     * Determines if this zone is a PointZone
     */
    isPointZone(): boolean;
    /**
     * Determines if this zone is a ScreenZone.
     */
    isScreenZone(): boolean;
    /**
     * Determines if this zone is a SphereZone.
     */
    isSphereZone(): boolean;
}
