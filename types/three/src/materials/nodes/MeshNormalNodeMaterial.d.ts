import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshNormalMaterialParameters, MeshNormalMaterialProperties } from "../MeshNormalMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshNormalNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshNormalNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshNormalNodeMaterialNodeProperties>>,
        MeshNormalMaterialParameters
{}

/**
 * Node material version of {@link MeshNormalMaterial}.
 */
declare class MeshNormalNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh normal node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshNormalNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     */
    readonly isMeshNormalNodeMaterial: boolean;
    /**
     * Overwrites the default implementation by computing the diffuse color
     * based on the normal data.
     */
    setupDiffuseColor(): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshNormalNodeMaterial extends MeshNormalNodeMaterialNodeProperties, MeshNormalMaterialProperties {}

export default MeshNormalNodeMaterial;
