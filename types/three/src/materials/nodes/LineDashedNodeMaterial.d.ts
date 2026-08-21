import Node from "../../nodes/core/Node.js";
import { LineDashedMaterialParameters, LineDashedMaterialProperties } from "../LineDashedMaterial.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface LineDashedNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The dash offset.
     *
     * @default 0
     */
    dashOffset: number;
    /**
     * The offset of dash materials is by default inferred from the `dashOffset`
     * property. This node property allows to overwrite the default
     * and define the offset with a node instead.
     *
     * If you don't want to overwrite the offset but modify the existing
     * value instead, use {@link materialLineDashOffset}.
     *
     * @default null
     */
    offsetNode: Node | null;
    /**
     * The scale of dash materials is by default inferred from the `scale`
     * property. This node property allows to overwrite the default
     * and define the scale with a node instead.
     *
     * If you don't want to overwrite the scale but modify the existing
     * value instead, use {@link materialLineScale}.
     *
     * @default null
     */
    dashScaleNode: Node | null;
    /**
     * The dash size of dash materials is by default inferred from the `dashSize`
     * property. This node property allows to overwrite the default
     * and define the dash size with a node instead.
     *
     * If you don't want to overwrite the dash size but modify the existing
     * value instead, use {@link materialLineDashSize}.
     *
     * @default null
     */
    dashSizeNode: Node | null;
    /**
     * The gap size of dash materials is by default inferred from the `gapSize`
     * property. This node property allows to overwrite the default
     * and define the gap size with a node instead.
     *
     * If you don't want to overwrite the gap size but modify the existing
     * value instead, use {@link materialLineGapSize}.
     *
     * @default null
     */
    gapSizeNode: Node | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineDashedNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<LineDashedNodeMaterialNodeProperties>>,
        LineDashedMaterialParameters
{}

/**
 * Node material version of  {@link LineDashedMaterial}.
 */
declare class LineDashedNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new line dashed node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: LineDashedNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isLineDashedNodeMaterial: boolean;
    setValues(values?: LineDashedNodeMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LineDashedNodeMaterial extends LineDashedNodeMaterialNodeProperties, LineDashedMaterialProperties {}

export default LineDashedNodeMaterial;
