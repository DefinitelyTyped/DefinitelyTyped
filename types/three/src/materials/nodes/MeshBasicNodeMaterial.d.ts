import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import BasicLightingModel from "../../nodes/functions/BasicLightingModel.js";
import BasicEnvironmentNode from "../../nodes/lighting/BasicEnvironmentNode.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshBasicMaterialParameters, MeshBasicMaterialProperties } from "../MeshBasicMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshBasicNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshBasicNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshBasicNodeMaterialNodeProperties>>,
        MeshBasicMaterialParameters
{}

/**
 * Node material version of {@link MeshBasicMaterial}.
 */
declare class MeshBasicNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh basic node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshBasicNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshBasicNodeMaterial: boolean;
    setValues(values?: MeshBasicNodeMaterialParameters): void;
    /**
     * Overwritten since this type of material uses {@link BasicEnvironmentNode}
     * to implement the default environment mapping.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {?BasicEnvironmentNode<vec3>} The environment node.
     */
    setupEnvironment(builder: NodeBuilder): BasicEnvironmentNode | null;
    /**
     * Setups the lighting model.
     *
     * @return {BasicLightingModel} The lighting model.
     */
    setupLightingModel(): BasicLightingModel;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshBasicNodeMaterial extends MeshBasicNodeMaterialNodeProperties, MeshBasicMaterialProperties {}

export default MeshBasicNodeMaterial;
