import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import PhongLightingModel from "../../nodes/functions/PhongLightingModel.js";
import BasicEnvironmentNode from "../../nodes/lighting/BasicEnvironmentNode.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshPhongMaterialParameters, MeshPhongMaterialProperties } from "../MeshPhongMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface MeshPhongNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The shininess of phong materials is by default inferred from the `shininess`
     * property. This node property allows to overwrite the default
     * and define the shininess with a node instead.
     *
     * If you don't want to overwrite the shininess but modify the existing
     * value instead, use {@link materialShininess}.
     *
     * @default null
     */
    shininessNode: Node | null;
    /**
     * The specular color of phong materials is by default inferred from the
     * `specular` property. This node property allows to overwrite the default
     * and define the specular color with a node instead.
     *
     * If you don't want to overwrite the specular color but modify the existing
     * value instead, use {@link materialSpecular}.
     *
     * @default null
     */
    specularNode: Node | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshPhongNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshPhongNodeMaterialNodeProperties>>,
        MeshPhongMaterialParameters
{}

/**
 * Node material version of {@link MeshPhongMaterial}.
 */
declare class MeshPhongNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh lambert node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshPhongNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshPhongNodeMaterial: boolean;
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
interface MeshPhongNodeMaterial extends MeshPhongNodeMaterialNodeProperties, MeshPhongMaterialProperties {}

export default MeshPhongNodeMaterial;
