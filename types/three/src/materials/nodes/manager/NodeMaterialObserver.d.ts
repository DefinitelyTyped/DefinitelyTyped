import { BufferAttribute } from "../../../core/BufferAttribute.js";
import { Matrix4 } from "../../../math/Matrix4.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import NodeFrame from "../../../nodes/core/NodeFrame.js";
import RenderObject from "../../../renderers/common/RenderObject.js";
import { Material } from "../../Material.js";
declare const refreshUniforms: readonly [
    "alphaMap",
    "alphaTest",
    "anisotropy",
    "anisotropyMap",
    "anisotropyRotation",
    "aoMap",
    "attenuationColor",
    "attenuationDistance",
    "bumpMap",
    "clearcoat",
    "clearcoatMap",
    "clearcoatNormalMap",
    "clearcoatNormalScale",
    "clearcoatRoughness",
    "color",
    "dispersion",
    "displacementMap",
    "emissive",
    "emissiveMap",
    "envMap",
    "gradientMap",
    "ior",
    "iridescence",
    "iridescenceIOR",
    "iridescenceMap",
    "iridescenceThicknessMap",
    "lightMap",
    "map",
    "matcap",
    "metalness",
    "metalnessMap",
    "normalMap",
    "normalScale",
    "opacity",
    "roughness",
    "roughnessMap",
    "sheen",
    "sheenColor",
    "sheenColorMap",
    "sheenRoughnessMap",
    "shininess",
    "specular",
    "specularColor",
    "specularColorMap",
    "specularIntensity",
    "specularIntensityMap",
    "specularMap",
    "thickness",
    "transmission",
    "transmissionMap",
];
type RefreshUniform = (typeof refreshUniforms)[number];
type MaterialData = {
    [K in RefreshUniform]?: unknown;
};
interface AttributesData {
    [name: string]: {
        version: number;
    };
}
interface RenderObjectData {
    material: MaterialData;
    geometry: {
        id: number;
        attributes: AttributesData;
        indexVersion: number | null;
        drawRange: {
            start: number;
            count: number;
        };
    };
    worldMatrix: Matrix4;
    version?: number;
}
/**
 * This class is used by {@link WebGPURenderer} as management component.
 * It's primary purpose is to determine whether render objects require a
 * refresh right before they are going to be rendered or not.
 */
declare class NodeMaterialObserver {
    renderObjects: WeakMap<RenderObject, RenderObjectData>;
    hasNode: boolean;
    hasAnimation: boolean;
    refreshUniforms: readonly RefreshUniform[];
    renderId: number;
    /**
     * Constructs a new node material observer.
     *
     * @param {NodeBuilder} builder - The node builder.
     */
    constructor(builder: NodeBuilder);
    /**
     * Returns `true` if the given render object is verified for the first time of this observer.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {Boolean} Whether the given render object is verified for the first time of this observer.
     */
    firstInitialization(renderObject: RenderObject): boolean;
    /**
     * Returns monitoring data for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {Object} The monitoring data.
     */
    getRenderObjectData(renderObject: RenderObject): RenderObjectData;
    /**
     * Returns an attribute data structure holding the attributes versions for
     * monitoring.
     *
     * @param {Object} attributes - The geometry attributes.
     * @return {Object} An object for monitoring the versions of attributes.
     */
    getAttributesData(attributes: Record<string, BufferAttribute>): AttributesData;
    /**
     * Returns `true` if the node builder's material uses
     * node properties.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Boolean} Whether the node builder's material uses node properties or not.
     */
    containsNode(builder: NodeBuilder): boolean;
    /**
     * Returns a material data structure holding the material property values for
     * monitoring.
     *
     * @param {Material} material - The material.
     * @return {Object} An object for monitoring material properties.
     */
    getMaterialData(material: Material): MaterialData;
    /**
     * Returns `true` if the given render object has not changed its state.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {Boolean} Whether the given render object has changed its state or not.
     */
    equals(renderObject: RenderObject): boolean;
    /**
     * Checks if the given render object requires a refresh.
     *
     * @param {RenderObject} renderObject - The render object.
     * @param {NodeFrame} nodeFrame - The current node frame.
     * @return {Boolean} Whether the given render object requires a refresh or not.
     */
    needsRefresh(renderObject: RenderObject, nodeFrame: NodeFrame): boolean;
}
export default NodeMaterialObserver;
