import { BufferAttribute } from "../../../core/BufferAttribute.js";
import { Light } from "../../../lights/Light.js";
import { Matrix4 } from "../../../math/Matrix4.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import NodeFrame from "../../../nodes/core/NodeFrame.js";
import LightsNode from "../../../nodes/lighting/LightsNode.js";
import Renderer from "../../../renderers/common/Renderer.js";
import RenderObject from "../../../renderers/common/RenderObject.js";
import { Material } from "../../Material.js";
declare const refreshUniforms: readonly [
    "alphaMap",
    "alphaTest",
    "anisotropy",
    "anisotropyMap",
    "anisotropyRotation",
    "aoMap",
    "aoMapIntensity",
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
    "emissiveIntensity",
    "emissiveMap",
    "envMap",
    "envMapIntensity",
    "gradientMap",
    "ior",
    "iridescence",
    "iridescenceIOR",
    "iridescenceMap",
    "iridescenceThicknessMap",
    "lightMap",
    "lightMapIntensity",
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
interface LightData {
    map: number;
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
     * @return {boolean} Whether the given render object is verified for the first time of this observer.
     */
    firstInitialization(renderObject: RenderObject): boolean;
    /**
     * Returns `true` if the current rendering produces motion vectors.
     *
     * @param {Renderer} renderer - The renderer.
     * @return {boolean} Whether the current rendering produces motion vectors or not.
     */
    needsVelocity(renderer: Renderer): boolean;
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
     * @return {boolean} Whether the node builder's material uses node properties or not.
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
     * @param {Array<Light>} lightsData - The current material lights.
     * @return {boolean} Whether the given render object has changed its state or not.
     */
    equals(renderObject: RenderObject, lightsData: Light[]): boolean;
    /**
     * Returns the lights data for the given material lights.
     *
     * @param {Array<Light>} materialLights - The material lights.
     * @return {Array<Object>} The lights data for the given material lights.
     */
    getLightsData(materialLights: Light[]): LightData[];
    /**
     * Returns the lights for the given lights node and render ID.
     *
     * @param {LightsNode} lightsNode - The lights node.
     * @param {number} renderId - The render ID.
     * @return {Array} The lights for the given lights node and render ID.
     */
    getLights(lightsNode: LightsNode, renderId: number): LightData[];
    /**
     * Checks if the given render object requires a refresh.
     *
     * @param {RenderObject} renderObject - The render object.
     * @param {NodeFrame} nodeFrame - The current node frame.
     * @return {boolean} Whether the given render object requires a refresh or not.
     */
    needsRefresh(renderObject: RenderObject, nodeFrame: NodeFrame): boolean;
}
export default NodeMaterialObserver;
