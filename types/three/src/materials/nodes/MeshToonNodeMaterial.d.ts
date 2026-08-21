import ToonLightingModel from "../../nodes/functions/ToonLightingModel.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshToonMaterialParameters, MeshToonMaterialProperties } from "../MeshToonMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshToonNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshToonNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshToonNodeMaterialNodeProperties>>,
        MeshToonMaterialParameters
{}

/**
 * Node material version of {@link MeshToonMaterial}.
 */
declare class MeshToonNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh toon node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshToonNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshToonNodeMaterial: boolean;
    setValues(values?: MeshToonNodeMaterialParameters): void;
    /**
     * Setups the lighting model.
     *
     * @return {ToonLightingModel} The lighting model.
     */
    setupLightingModel(): ToonLightingModel;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshToonNodeMaterial extends MeshToonNodeMaterialNodeProperties, MeshToonMaterialProperties {}

export default MeshToonNodeMaterial;
