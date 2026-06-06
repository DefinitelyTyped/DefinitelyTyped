import Node from "../../nodes/core/Node.js";
import { LineDashedMaterialParameters, LineDashedMaterialProperties } from "../LineDashedMaterial.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface Line2NodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The dash offset.
     *
     * @default 0
     */
    dashOffset: number;
    /**
     * Defines the lines color.
     *
     * @default null
     */
    lineColorNode: Node | null;
    /**
     * Defines the offset.
     *
     * @default null
     */
    offsetNode: Node | null;
    /**
     * Defines the dash scale.
     *
     * @default null
     */
    dashScaleNode: Node | null;
    /**
     * Defines the dash size.
     *
     * @default null
     */
    dashSizeNode: Node | null;
    /**
     * Defines the gap size.
     *
     * @default null
     */
    gapSizeNode: Node | null;
    set worldUnits(value: boolean);
    /**
     * Whether the lines should sized in world units or not.
     * When set to `false` the unit is pixel.
     *
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
     * @default true
     */
    readonly isLine2NodeMaterial: boolean;
    setValues(values?: Line2NodeMaterialParameters): void;
    /**
     * Copies the properties of the given material to this instance.
     *
     * @param {Line2NodeMaterial} source - The material to copy.
     * @return {Line2NodeMaterial} A reference to this material.
     */
    copy(source: Line2NodeMaterial): this;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Line2NodeMaterial extends Line2NodeMaterialNodeProperties, LineDashedMaterialProperties {}

export default Line2NodeMaterial;
