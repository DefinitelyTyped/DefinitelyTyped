import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import PhongLightingModel from "../../nodes/functions/PhongLightingModel.js";
import BasicEnvironmentNode from "../../nodes/lighting/BasicEnvironmentNode.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshLambertMaterialParameters, MeshLambertMaterialProperties } from "../MeshLambertMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshLambertNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshLambertNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshLambertNodeMaterialNodeProperties>>,
        MeshLambertMaterialParameters
{}

/**
 * Node material version of {@link MeshLambertMaterial}.
 */
declare class MeshLambertNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh lambert node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshLambertNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isMeshLambertNodeMaterial: boolean;
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
     * @return {PhongLightingModel} The lighting model.
     */
    setupLightingModel(): PhongLightingModel;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshLambertNodeMaterial extends MeshLambertNodeMaterialNodeProperties, MeshLambertMaterialProperties {}

export default MeshLambertNodeMaterial;
