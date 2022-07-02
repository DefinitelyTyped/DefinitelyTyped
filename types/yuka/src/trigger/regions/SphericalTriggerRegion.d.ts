import { TriggerRegion } from "../TriggerRegion";

/**
 * Class for representing a spherical trigger region as a bounding sphere.
 */
export class SphericalTriggerRegion extends TriggerRegion {
    /**
     * The radius of the region.
     */
    radius: number;

    /**
     * Constructs a new spherical trigger region.
     *
     * @param [radius=0] - The radius of the region.
     */
    constructor(radius?: number);
}
