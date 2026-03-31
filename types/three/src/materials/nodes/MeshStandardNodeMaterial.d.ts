import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import PhysicalLightingModel from "../../nodes/functions/PhysicalLightingModel.js";
import EnvironmentNode from "../../nodes/lighting/EnvironmentNode.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshStandardMaterialParameters, MeshStandardMaterialProperties } from "../MeshStandardMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface MeshStandardNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The emissive color of standard materials is by default inferred from the `emissive`,
     * `emissiveIntensity` and `emissiveMap` properties. This node property allows to
     * overwrite the default and define the emissive color with a node instead.
     *
     * If you don't want to overwrite the emissive color but modify the existing
     * value instead, use {@link materialEmissive}.
     *
     * @default null
     */
    emissiveNode: Node | null;
    /**
     * The metalness of standard materials is by default inferred from the `metalness`,
     * and `metalnessMap` properties. This node property allows to
     * overwrite the default and define the metalness with a node instead.
     *
     * If you don't want to overwrite the metalness but modify the existing
     * value instead, use {@link materialMetalness}.
     *
     * @default null
     */
    metalnessNode: Node | null;
    /**
     * The roughness of standard materials is by default inferred from the `roughness`,
     * and `roughnessMap` properties. This node property allows to
     * overwrite the default and define the roughness with a node instead.
     *
     * If you don't want to overwrite the roughness but modify the existing
     * value instead, use {@link materialRoughness}.
     *
     * @default null
     */
    roughnessNode: Node | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshStandardNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshStandardNodeMaterialNodeProperties>>,
        MeshStandardMaterialParameters
{}

/**
 * Node material version of {@link MeshStandardMaterial}.
 */
declare class MeshStandardNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new mesh standard node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshStandardNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshStandardNodeMaterial: boolean;
    setValues(values?: MeshStandardNodeMaterialParameters): void;
    /**
     * Overwritten since this type of material uses {@link EnvironmentNode}
     * to implement the PBR (PMREM based) environment mapping. Besides, the
     * method honors `Scene.environment`.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {?EnvironmentNode<vec3>} The environment node.
     */
    setupEnvironment(builder: NodeBuilder): EnvironmentNode | null;
    /**
     * Setups the lighting model.
     *
     * @return {PhysicalLightingModel} The lighting model.
     */
    setupLightingModel(): PhysicalLightingModel;
    /**
     * Setups the specular related node variables.
     */
    setupSpecular(): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshStandardNodeMaterial extends MeshStandardNodeMaterialNodeProperties, MeshStandardMaterialProperties {}

export default MeshStandardNodeMaterial;
