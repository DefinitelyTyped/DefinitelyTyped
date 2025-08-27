import Node from "../../nodes/core/Node.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { PointsMaterialParameters, PointsMaterialProperties } from "../PointsMaterial.js";
import SpriteNodeMaterial, { SpriteNodeMaterialNodeProperties } from "./SpriteNodeMaterial.js";

export interface PointsNodeMaterialNodeProperties extends SpriteNodeMaterialNodeProperties {
    /**
     * This node property provides an additional way to set the point size.
     *
     * Note that WebGPU only supports point primitives with 1 pixel size. Consequently,
     * this node has no effect when the material is used with {@link Points} and a WebGPU
     * backend. If an application wants to render points with a size larger than 1 pixel,
     * the material should be used with {@link Sprite} and instancing.
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
