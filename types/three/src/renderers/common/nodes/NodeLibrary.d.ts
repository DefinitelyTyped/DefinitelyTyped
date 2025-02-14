import { ToneMapping } from "../../../constants.js";
import { Light } from "../../../lights/Light.js";
import { Material } from "../../../materials/Material.js";
import NodeMaterial from "../../../materials/nodes/NodeMaterial.js";
import Node from "../../../nodes/core/Node.js";
import AnalyticLightNode from "../../../nodes/lighting/AnalyticLightNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../../../nodes/tsl/TSLCore.js";
/**
 * The purpose of a node library is to assign node implementations
 * to existing library features. In `WebGPURenderer` lights, materials
 * which are not based on `NodeMaterial` as well as tone mapping techniques
 * are implemented with node-based modules.
 *
 * @private
 */
declare class NodeLibrary {
    lightNodes: WeakMap<{
        new(): Light;
    }, {
        new(light: Light): AnalyticLightNode<Light>;
    }>;
    materialNodes: Map<string, {
        new(): NodeMaterial;
    }>;
    toneMappingNodes: Map<
        ToneMapping,
        (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>
    >;
    /**
     * Constructs a new node library.
     */
    constructor();
    /**
     * Returns a matching node material instance for the given material object.
     *
     * This method also assigns/copies the properties of the given material object
     * to the node material. This is done to make sure the current material
     * configuration carries over to the node version.
     *
     * @param {Material} material - A material.
     * @return {NodeMaterial} The corresponding node material.
     */
    fromMaterial(material: Material): Material | NodeMaterial | null;
    /**
     * Adds a tone mapping node function for a tone mapping technique (constant).
     *
     * @param {Function} toneMappingNode - The tone mapping node function.
     * @param {Number} toneMapping - The tone mapping.
     */
    addToneMapping(
        toneMappingNode: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>,
        toneMapping: ToneMapping,
    ): void;
    /**
     * Returns a tone mapping node function for a tone mapping technique (constant).
     *
     * @param {Number} toneMapping - The tone mapping.
     * @return {Function?} The tone mapping node function. Returns `null` if no node function is found.
     */
    getToneMappingFunction(
        toneMapping: ToneMapping,
    ): ((color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>) | null;
    /**
     * Returns a node material class definition for a material type.
     *
     * @param {String} materialType - The material type.
     * @return {NodeMaterial.constructor?} The node material class definition. Returns `null` if no node material is found.
     */
    getMaterialNodeClass(materialType: string): (new() => NodeMaterial) | null;
    /**
     * Adds a node material class definition for a given material type.
     *
     * @param {NodeMaterial.constructor} materialNodeClass - The node material class definition.
     * @param {String} materialClassType - The material type.
     */
    addMaterial(materialNodeClass: {
        new(): NodeMaterial;
    }, materialClassType: string): void;
    /**
     * Returns a light node class definition for a light class definition.
     *
     * @param {Light.constructor} light - The light class definition.
     * @return {AnalyticLightNode.constructor?} The light node class definition. Returns `null` if no light node is found.
     */
    getLightNodeClass(light: Light): (new(light: Light) => AnalyticLightNode<Light>) | null;
    /**
     * Adds a light node class definition for a given light class definition.
     *
     * @param {AnalyticLightNode.constructor} lightNodeClass - The light node class definition.
     * @param {Light.constructor} lightClass - The light class definition.
     */
    addLight<TLight extends Light>(lightNodeClass: {
        new(light: TLight): AnalyticLightNode<TLight>;
    }, lightClass: {
        new(): TLight;
    }): void;
    /**
     * Adds a node class definition for the given type to the provided type library.
     *
     * @param {Any} nodeClass - The node class definition.
     * @param {Number|String} type - The object type.
     * @param {Map} library - The type library.
     */
    addType<TNodeClass, TType>(nodeClass: TNodeClass, type: TType, library: Map<TType, TNodeClass>): void;
    /**
     * Adds a node class definition for the given class definition to the provided type library.
     *
     * @param {Any} nodeClass - The node class definition.
     * @param {Any} baseClass - The class definition.
     * @param {WeakMap} library - The type library.
     */
    addClass<TNodeClass, TBaseClass extends object>(
        nodeClass: TNodeClass,
        baseClass: TBaseClass,
        library: WeakMap<TBaseClass, TNodeClass>,
    ): void;
}
export default NodeLibrary;
