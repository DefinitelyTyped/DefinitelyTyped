import Node from "../../nodes/core/Node.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { PointsMaterialParameters, PointsMaterialProperties } from "../PointsMaterial.js";
import SpriteNodeMaterial, { SpriteNodeMaterialNodeProperties } from "./SpriteNodeMaterial.js";

export interface PointsNodeMaterialNodeProperties extends SpriteNodeMaterialNodeProperties {
    /**
     * This node property provides an additional way to set the point size.
     *
     * @default null
     */
    sizeNode: Node;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PointsNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<PointsNodeMaterialNodeProperties>>,
        PointsMaterialParameters
{}

/**
 * Node material version of {@link PointsMaterial}.
 */
declare class PointsNodeMaterial extends SpriteNodeMaterial {
    constructor(parameters?: PointsNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isPointsNodeMaterial: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PointsNodeMaterial extends PointsNodeMaterialNodeProperties, PointsMaterialProperties {}

export default PointsNodeMaterial;
