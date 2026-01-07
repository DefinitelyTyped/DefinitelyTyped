import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { SpriteMaterialParameters, SpriteMaterialProperties } from "../SpriteMaterial.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface SpriteNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * The rotation of sprite materials is by default inferred from the `rotation`,
     * property. This node property allows to overwrite the default and define
     * the rotation with a node instead.
     *
     * If you don't want to overwrite the rotation but modify the existing
     * value instead, use {@link materialRotation}.
     *
     * @default null
     */
    rotationNode: Node | null;
    /**
     * This node property provides an additional way to scale sprites next to
     * `Object3D.scale`. The scale transformation based in `Object3D.scale`
     * is multiplied with the scale value of this node in the vertex shader.
     *
     * @default null
     */
    scaleNode: Node | null;
    set sizeAttenuation(value: boolean);
    /**
     * Whether to use size attenuation or not.
     *
     * @type {boolean}
     * @default true
     */
    get sizeAttenuation(): boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SpriteNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<SpriteNodeMaterialNodeProperties>>,
        SpriteMaterialParameters
{}

/**
 * Node material version of {@link SpriteMaterial}.
 */
declare class SpriteNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new sprite node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: SpriteNodeMaterialParameters);
    readonly isSpriteMaterial: boolean;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isSpriteNodeMaterial: boolean;
    setValues(values?: SpriteNodeMaterialParameters): void;
    /**
     * Setups the position node in view space. This method implements
     * the sprite specific vertex shader.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec3>} The position in view space.
     */
    setupPositionView(builder: NodeBuilder): Node;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SpriteNodeMaterial extends SpriteNodeMaterialNodeProperties, SpriteMaterialProperties {}

export default SpriteNodeMaterial;
