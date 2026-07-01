import Node from "../../nodes/core/Node.js";
import { LineDashedMaterialParameters, LineDashedMaterialProperties } from "../LineDashedMaterial.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface Line2NodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The dash offset.
     *
     * @type {number}
     * @default 0
     */
    dashOffset: number;
    /**
     * Defines the offset.
     *
     * @type {?Node<float>}
     * @default null
     */
    offsetNode: Node | null;
    /**
     * Defines the dash scale.
     *
     * @type {?Node<float>}
     * @default null
     */
    dashScaleNode: Node | null;
    /**
     * Defines the dash size.
     *
     * @type {?Node<float>}
     * @default null
     */
    dashSizeNode: Node | null;
    /**
     * Defines the gap size.
     *
     * @type {?Node<float>}
     * @default null
     */
    gapSizeNode: Node | null;
    set lineColorNode(value: Node | null);
    /**
     * Defines the lines color.
     *
     * @deprecated since r185. Use {@link NodeMaterial#colorNode} instead.
     * @type {?Node<vec3>}
     */
    get lineColorNode(): Node | null;
    set worldUnits(value: boolean);
    /**
     * Whether the lines should sized in world units or not.
     * When set to `false` the unit is pixel.
     *
     * @type {boolean}
     * @default false
     */
    get worldUnits(): boolean;
    set dashed(value: boolean);
    /**
     * Whether the lines should be dashed or not.
     *
     * @default false
     */
    get dashed(): boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Line2NodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<Line2NodeMaterialNodeProperties>>,
        LineDashedMaterialParameters
{}

/**
 * This node material can be used to render lines with a size larger than one
 * by representing them as instanced meshes.
 *
 * @augments NodeMaterial
 */
declare class Line2NodeMaterial extends NodeMaterial {
    /**
     * Constructs a new node material for wide line rendering.
     *
     * @param {Object} [parameters={}] - The configuration parameter.
     */
    constructor(parameters?: Line2NodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isLine2NodeMaterial: boolean;
    setValues(values?: Line2NodeMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Line2NodeMaterial extends Line2NodeMaterialNodeProperties, LineDashedMaterialProperties {}

export default Line2NodeMaterial;
