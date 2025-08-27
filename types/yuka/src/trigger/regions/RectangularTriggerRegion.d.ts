import { Vector3 } from "../../math/Vector3";
import { TriggerRegion } from "../TriggerRegion";

/**
 * Class for representing a rectangular trigger region as an AABB.
 */
export class RectangularTriggerRegion extends TriggerRegion {
    /**
     * The size of the region.
     * @default new Vector3(0,0,0)
     */
    size: Vector3;

    /**
     * Constructs a new rectangular trigger region with the given values.
     *
     * @param [size=Vector3(0,0,0)] - The size of the region.
     */
    constructor(size?: Vector3);
}
