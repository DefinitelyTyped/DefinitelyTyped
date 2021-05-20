import { Node } from "../../graph/core/Node";
import { Vector3 } from "../../math/Vector3";

/**
 * Class for representing navigation nodes.
 */
export class NavNode extends Node {
    /**
     * The position of the node in 3D space.
     */
    position: Vector3;

    /**
     * Custom user data connected to this node.
     */
    userData: object;

    /**
     * Constructs a new navigation node.
     *
     * @param [index=-1] - The unique index of this node.
     * @param [position] - The position of the node in 3D space.
     * @param [userData] - Custom user data connected to this node.
     */
    constructor(index?: number, position?: Vector3, userData?: {});
}
