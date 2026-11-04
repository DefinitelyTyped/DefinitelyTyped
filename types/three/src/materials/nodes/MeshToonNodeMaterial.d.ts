import Node from "../../nodes/core/Node.js";
import ToonLightingModel from "../../nodes/functions/ToonLightingModel.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshToonMaterialParameters, MeshToonMaterialProperties } from "../MeshToonMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface MeshToonNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The emissive color of toon materials is by default inferred from the `emissive`,
     * `emissiveIntensity` and `emissiveMap` properties. This node property allows to
     * overwrite the default and define the emissive color with a node instead.
     *
     * If you don't want to overwrite the emissive color but modify the existing
     * value instead, use {@link materialEmissive}.
     *
     * @default null
     */
    emissiveNode: Node | null;
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
