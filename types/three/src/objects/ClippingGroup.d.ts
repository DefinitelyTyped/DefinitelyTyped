import { Plane } from "../math/Plane.js";
import { Group } from "./Group.js";

/**
 * A special version of the Group object that defines clipping planes for decendant objects. ClippingGroups can be
 * nested, with clipping planes accumulating by type: intersection or union.
 */
declare class ClippingGroup extends Group {
    /**
     * Read-only flag to check if a given object is of type ClippingGroup.
     */
    readonly isClippingGroup: true;

    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space. These planes apply to the objects
     * that are children of this ClippingGroup. Points in space whose signed distance to the plane is negative are
     * clipped (not rendered). See the webgpu_clipping example. Default is `[]`.
     */
    clippingPlanes: Plane[];

    /**
     * Determines if the clipping planes defined by this object are applied. Default is `true`.
     */
    enabled: boolean;

    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union.
     * Default is `false`.
     */
    clipIntersection: boolean;

    /**
     * Defines whether to clip shadows according to the clipping planes specified by this ClippingGroup. Default is
     * `false`.
     */
    clipShadows: boolean;

    constructor();
}

export { ClippingGroup };
