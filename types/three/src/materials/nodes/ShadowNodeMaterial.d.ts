import ShadowMaskModel from "../../nodes/functions/ShadowMaskModel.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { ShadowMaterialParameters, ShadowMaterialProperties } from "../ShadowMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShadowNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShadowNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<ShadowNodeMaterialNodeProperties>>,
        ShadowMaterialParameters
{}

/**
 * Node material version of {@link ShadowMaterial}.
 */
declare class ShadowNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new shadow node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: ShadowNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isShadowNodeMaterial: boolean;
    setValues(values?: ShadowNodeMaterialParameters): void;
    /**
     * Setups the lighting model.
     *
     * @return {ShadowMaskModel} The lighting model.
     */
    setupLightingModel(): ShadowMaskModel;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ShadowNodeMaterial extends ShadowNodeMaterialNodeProperties, ShadowMaterialProperties {}

export default ShadowNodeMaterial;
