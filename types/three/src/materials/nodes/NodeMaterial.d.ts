import ClippingNode from "../../nodes/accessors/ClippingNode.js";
import ContextNode from "../../nodes/core/ContextNode.js";
import LightingModel from "../../nodes/core/LightingModel.js";
import MRTNode from "../../nodes/core/MRTNode.js";
import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialParameters } from "../Material.js";
import NodeMaterialObserver from "./manager/NodeMaterialObserver.js";

export interface NodeMaterialNodeProperties {
    /**
     * Whether this material is affected by fog or not.
     *
     * @default true
     */
    fog: boolean;
    /**
     * Whether this material is affected by lights or not.
     *
     * @default false
     */
    lights: boolean;
    /**
     * Whether this material uses hardware clipping or not.
     * This property is managed by the engine and should not be
     * modified by apps.
     *
     * @default false
     */
    hardwareClipping: boolean;
    /**
     * Node materials which set their `lights` property to `true`
     * are affected by all lights of the scene. Sometimes selective
     * lighting is wanted which means only _some_ lights in the scene
     * affect a material. This can be achieved by creating an instance
     * of {@link LightsNode} with a list of selective
     * lights and assign the node to this property.
     *
     * ```js
     * const customLightsNode = lights( [ light1, light2 ] );
     * material.lightsNode = customLightsNode;
     * ```
     *
     * @default null
     */
    lightsNode: LightsNode | null;
    /**
     * The environment of node materials can be defined by an environment
     * map assigned to the `envMap` property or by `Scene.environment`
     * if the node material is a PBR material. This node property allows to overwrite
     * the default behavior and define the environment with a custom node.
     *
     * ```js
     * material.envNode = pmremTexture( renderTarget.texture );
     * ```
     *
     * @default null
     */
    envNode: Node | null;
    /**
     * The lighting of node materials might be influenced by ambient occlusion.
     * The default AO is inferred from an ambient occlusion map assigned to `aoMap`
     * and the respective `aoMapIntensity`. This node property allows to overwrite
     * the default and define the ambient occlusion with a custom node instead.
     *
     * If you don't want to overwrite the diffuse color but modify the existing
     * values instead, use {@link materialAO}.
     *
     * @default null
     */
    aoNode: Node | null;
    /**
     * The diffuse color of node materials is by default inferred from the
     * `color` and `map` properties. This node property allows to overwrite the default
     * and define the diffuse color with a node instead.
     *
     * ```js
     * material.colorNode = color( 0xff0000 ); // define red color
     * ```
     *
     * If you don't want to overwrite the diffuse color but modify the existing
     * values instead, use {@link materialColor}.
     *
     * ```js
     * material.colorNode = materialColor.mul( color( 0xff0000 ) ); // give diffuse colors a red tint
     * ```
     *
     * @default null
     */
    colorNode: Node<"float"> | Node<"vec2"> | Node<"vec3"> | Node<"vec4"> | Node<"color"> | null;
    /**
     * The normals of node materials are by default inferred from the `normalMap`/`normalScale`
     * or `bumpMap`/`bumpScale` properties. This node property allows to overwrite the default
     * and define the normals with a node instead.
     *
     * If you don't want to overwrite the normals but modify the existing values instead,
     * use {@link materialNormal}.
     *
     * @default null
     */
    normalNode: Node | null;
    /**
     * The opacity of node materials is by default inferred from the `opacity`
     * and `alphaMap` properties. This node property allows to overwrite the default
     * and define the opacity with a node instead.
     *
     * If you don't want to overwrite the opacity but modify the existing
     * value instead, use {@link materialOpacity}.
     *
     * @default null
     */
    opacityNode: Node | null;
    /**
     * This node can be used to implement a variety of filter-like effects. The idea is
     * to store the current rendering into a texture e.g. via `viewportSharedTexture()`, use it
     * to create an arbitrary effect and then assign the node composition to this property.
     * Everything behind the object using this material will now be affected by a filter.
     *
     * ```js
     * const material = new NodeMaterial()
     * material.transparent = true;
     *
     * // everything behind the object will be monochromatic
     * material.backdropNode = saturation( viewportSharedTexture().rgb, 0 );
     * ```
     *
     * Backdrop computations are part of the lighting so only lit materials can use this property.
     *
     * @default null
     */
    backdropNode: Node | null;
    /**
     * This node allows to modulate the influence of `backdropNode` to the outgoing light.
     *
     * @default null
     */
    backdropAlphaNode: Node | null;
    /**
     * The alpha test of node materials is by default inferred from the `alphaTest`
     * property. This node property allows to overwrite the default and define the
     * alpha test with a node instead.
     *
     * If you don't want to overwrite the alpha test but modify the existing
     * value instead, use {@link materialAlphaTest}.
     *
     * @default null
     */
    alphaTestNode: Node | null;
    /**
     * Discards the fragment if the mask value is `false`.
     *
     * @default null
     */
    maskNode: Node | null;
    /**
     * This node can be used to implement a shadow mask for the material.
     *
     * @default null
     */
    maskShadowNode: Node | null;
    /**
     * The local vertex positions are computed based on multiple factors like the
     * attribute data, morphing or skinning. This node property allows to overwrite
     * the default and define local vertex positions with nodes instead.
     *
     * If you don't want to overwrite the vertex positions but modify the existing
     * values instead, use {@link positionLocal}.
     *
     * ```js
     * material.positionNode = positionLocal.add( displace );
     * ```
     *
     * @default null
     */
    positionNode: Node | null;
    /**
     * This node property is intended for logic which modifies geometry data once or per animation step.
     * Apps usually place such logic randomly in initialization routines or in the animation loop.
     * `geometryNode` is intended as a dedicated API so there is an intended spot where geometry modifications
     * can be implemented.
     *
     * The idea is to assign a `Fn` definition that holds the geometry modification logic. A typical example
     * would be a GPU based particle system that provides a node material for usage on app level. The particle
     * simulation would be implemented as compute shaders and managed inside a `Fn` function. This function is
     * eventually assigned to `geometryNode`.
     *
     * @default null
     */
    geometryNode: Node | null;
    /**
     * Allows to overwrite depth values in the fragment shader.
     *
     * @default null
     */
    depthNode: Node | null;
    /**
     * Allows to overwrite the position used for shadow map rendering which
     * is by default {@link positionWorld}, the vertex position
     * in world space.
     *
     * @default null
     */
    receivedShadowPositionNode: Node | null;
    /**
     * Allows to overwrite the geometry position used for shadow map projection which
     * is by default {@link positionLocal}, the vertex position in local space.
     *
     * @default null
     */
    castShadowPositionNode: Node | null;
    /**
     * This node can be used to influence how an object using this node material
     * receive shadows.
     *
     * ```js
     * const totalShadows = float( 1 ).toVar();
     * material.receivedShadowNode = Fn( ( [ shadow ] ) => {
     * 	totalShadows.mulAssign( shadow );
     * 	//return float( 1 ); // bypass received shadows
     * 	return shadow.mix( color( 0xff0000 ), 1 ); // modify shadow color
     * } );
     *
     * @default null
     */
    receivedShadowNode: (() => Node) | null;
    /**
     * This node can be used to influence how an object using this node material
     * casts shadows. To apply a color to shadows, you can simply do:
     *
     * ```js
     * material.castShadowNode = vec4( 1, 0, 0, 1 );
     * ```
     *
     * Which can be nice to fake colored shadows of semi-transparent objects. It
     * is also common to use the property with `Fn` function so checks are performed
     * per fragment.
     *
     * ```js
     * materialCustomShadow.castShadowNode = Fn( () => {
     * 	hash( vertexIndex ).greaterThan( 0.5 ).discard();
     * 	return materialColor;
     * } )();
     *  ```
     *
     * @default null
     */
    castShadowNode: Node | null;
    /**
     * This node can be used to define the final output of the material.
     *
     * TODO: Explain the differences to `fragmentNode`.
     *
     * @default null
     */
    outputNode: Node | null;
    /**
     * MRT configuration is done on renderer or pass level. This node allows to
     * overwrite what values are written into MRT targets on material level. This
     * can be useful for implementing selective FX features that should only affect
     * specific objects.
     *
     * @default null
     */
    mrtNode: MRTNode | null;
    /**
     * This node property can be used if you need complete freedom in implementing
     * the fragment shader. Assigning a node will replace the built-in material
     * logic used in the fragment stage.
     *
     * @default null
     */
    fragmentNode: Node | null;
    /**
     * This node property can be used if you need complete freedom in implementing
     * the vertex shader. Assigning a node will replace the built-in material logic
     * used in the vertex stage.
     *
     * @default null
     */
    vertexNode: Node | null;
    /**
     * This node can be used as a global context management component for this material.
     *
     * @default null
     */
    contextNode: ContextNode<unknown> | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NodeMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<NodeMaterialNodeProperties>>, MaterialParameters
{}

/**
 * Base class for all node materials.
 */
declare class NodeMaterial extends Material {
    static get type(): string;
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isNodeMaterial: boolean;
    setValues(values?: NodeMaterialParameters): void;
    /**
     * Builds this material with the given node builder.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    build(builder: NodeBuilder): void;
    /**
     * Setups a node material observer with the given builder.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {NodeMaterialObserver} The node material observer.
     */
    setupObserver(builder: NodeBuilder): NodeMaterialObserver;
    /**
     * Setups the vertex and fragment stage of this node material.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setup(builder: NodeBuilder): void;
    /**
     * Setups the clipping node.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {ClippingNode} The clipping node.
     */
    setupClipping(builder: NodeBuilder): ClippingNode;
    /**
     * Setups the hardware clipping if available on the current device.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setupHardwareClipping(builder: NodeBuilder): void;
    /**
     * Setups the depth of this material.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setupDepth(builder: NodeBuilder): void;
    /**
     * Setups the position node in view space. This method exists
     * so derived node materials can modify the implementation e.g. sprite materials.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec3>} The position in view space.
     */
    setupPositionView(builder: NodeBuilder): Node;
    /**
     * Setups the position in clip space.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec4>} The position in view space.
     */
    setupModelViewProjection(): Node;
    /**
     * Setups the logic for the vertex stage.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec4>} The position in clip space.
     */
    setupVertex(builder: NodeBuilder): Node;
    /**
     * Setups the computation of the position in local space.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec3>} The position in local space.
     */
    setupPosition(builder: NodeBuilder): Node;
    /**
     * Setups the computation of the material's diffuse color.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {BufferGeometry} geometry - The geometry.
     */
    setupDiffuseColor(builder: NodeBuilder): void;
    /**
     * Abstract interface method that can be implemented by derived materials
     * to setup material-specific node variables.
     *
     * @abstract
     * @param {NodeBuilder} builder - The current node builder.
     */
    setupVariants(builder: NodeBuilder): void;
    /**
     * Setups the outgoing light node variable
     *
     * @return {Node<vec3>} The outgoing light node.
     */
    setupOutgoingLight(): Node;
    /**
     * Setups the normal node from the material.
     *
     * @return {Node<vec3>} The normal node.
     */
    setupNormal(): Node;
    /**
     * Setups the environment node from the material.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec4>} The environment node.
     */
    setupEnvironment(builder: NodeBuilder): Node | null;
    /**
     * Setups the light map node from the material.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec3>} The light map node.
     */
    setupLightMap(builder: NodeBuilder): Node;
    /**
     * Setups the lights node based on the scene, environment and material.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {LightsNode} The lights node.
     */
    setupLights(builder: NodeBuilder): LightsNode;
    /**
     * This method should be implemented by most derived materials
     * since it defines the material's lighting model.
     *
     * @abstract
     * @param {NodeBuilder} builder - The current node builder.
     * @return {LightingModel} The lighting model.
     */
    setupLightingModel(): LightingModel;
    /**
     * Setups the outgoing light node.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node<vec3>} The outgoing light node.
     */
    setupLighting(builder: NodeBuilder): Node;
    /**
     * Setup the fog.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {Node<vec4>} outputNode - The existing output node.
     * @return {Node<vec4>} The output node.
     */
    setupFog(builder: NodeBuilder, outputNode: Node): Node;
    /**
     * Setups premultiplied alpha.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {Node<vec4>} outputNode - The existing output node.
     * @return {Node<vec4>} The output node.
     */
    setupPremultipliedAlpha(builder: NodeBuilder, outputNode: Node): Node;
    /**
     * Setups the output node.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {Node<vec4>} outputNode - The existing output node.
     * @return {Node<vec4>} The output node.
     */
    setupOutput(builder: NodeBuilder, outputNode: Node): Node;
    /**
     * Most classic material types have a node pendant e.g. for `MeshBasicMaterial`
     * there is `MeshBasicNodeMaterial`. This utility method is intended for
     * defining all material properties of the classic type in the node type.
     *
     * @param {Material} material - The material to copy properties with their values to this node material.
     */
    setDefaultValues(material: Material): void;
    /**
     * Copies the properties of the given node material to this instance.
     *
     * @param {NodeMaterial} source - The material to copy.
     * @return {NodeMaterial} A reference to this node material.
     */
    copy(source: NodeMaterial): this;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NodeMaterial extends NodeMaterialNodeProperties {}

export default NodeMaterial;
