import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshMatcapMaterialParameters, MeshMatcapMaterialProperties } from "../MeshMatcapMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshMatcapNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshMatcapNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshMatcapNodeMaterialNodeProperties>>,
        MeshMatcapMaterialParameters
{}

/**
 * Node material version of {@link MeshMatcapMaterial}.
 */
declare class MeshMatcapNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh normal node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshMatcapNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshMatcapNodeMaterial: boolean;
    /**
     * Setups the matcap specific node variables.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setupVariants(builder: NodeBuilder): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshMatcapNodeMaterial extends MeshMatcapNodeMaterialNodeProperties, MeshMatcapMaterialProperties {}

export default MeshMatcapNodeMaterial;
