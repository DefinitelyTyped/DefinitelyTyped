import { Camera } from "../cameras/Camera.js";
import {
    Blending,
    BlendingDstFactor,
    BlendingEquation,
    BlendingSrcFactor,
    Combine,
    DepthModes,
    NormalMapTypes,
    Side,
    StencilFunc,
    StencilOp,
} from "../constants.js";
import { BufferGeometry } from "../core/BufferGeometry.js";
import { EventDispatcher } from "../core/EventDispatcher.js";
import { JSONMeta, Object3D } from "../core/Object3D.js";
import { Color, ColorRepresentation } from "../math/Color.js";
import { EulerTuple } from "../math/Euler.js";
import { Plane } from "../math/Plane.js";
import { Vector2Tuple } from "../math/Vector2.js";
import { Group } from "../objects/Group.js";
import { WebGLProgramParametersWithUniforms } from "../renderers/webgl/WebGLPrograms.js";
import { WebGLRenderer } from "../renderers/WebGLRenderer.js";
import { Scene } from "../scenes/Scene.js";
import { SourceJSON } from "../textures/Source.js";
import { TextureJSON } from "../textures/Texture.js";

export interface MaterialProperties {
    /**
     * The name of the material.
     */
    name: string;
    /**
     * Defines the blending type of the material.
     *
     * It must be set to `CustomBlending` if custom blending properties like
     * {@link Material#blendSrc}, {@link Material#blendDst} or {@link Material#blendEquation}
     * should have any effect.
     *
     * @default NormalBlending
     */
    blending: Blending;
    /**
     * Defines which side of faces will be rendered - front, back or both.
     *
     * @default FrontSide
     */
    side: Side;
    /**
     * If set to `true`, vertex colors should be used.
     *
     * The engine supports RGB and RGBA vertex colors depending on whether a three (RGB) or
     * four (RGBA) component color buffer attribute is used.
     *
     * @default false
     */
    vertexColors: boolean;
    /**
     * Defines how transparent the material is.
     * A value of `0.0` indicates fully transparent, `1.0` is fully opaque.
     *
     * If the {@link Material#transparent} is not set to `true`,
     * the material will remain fully opaque and this value will only affect its color.
     *
     * @default 1
     */
    opacity: number;
    /**
     * Defines whether this material is transparent. This has an effect on
     * rendering as transparent objects need special treatment and are rendered
     * after non-transparent objects.
     *
     * When set to true, the extent to which the material is transparent is
     * controlled by {@link Material#opacity}.
     *
     * @default false
     */
    transparent: boolean;
    /**
     * Enables alpha hashed transparency, an alternative to {@link Material#transparent} or
     * {@link Material#alphaTest}. The material will not be rendered if opacity is lower than
     * a random threshold. Randomization introduces some grain or noise, but approximates alpha
     * blending without the associated problems of sorting. Using TAA can reduce the resulting noise.
     *
     * @default false
     */
    alphaHash: boolean;
    /**
     * Defines the blending source factor.
     *
     * @default SrcAlphaFactor
     */
    blendSrc: BlendingSrcFactor;
    /**
     * Defines the blending destination factor.
     *
     * @default OneMinusSrcAlphaFactor
     */
    blendDst: BlendingDstFactor;
    /**
     * Defines the blending equation.
     *
     * @default AddEquation
     */
    blendEquation: BlendingEquation;
    /**
     * Defines the blending source alpha factor.
     *
     * @default null
     */
    blendSrcAlpha: BlendingSrcFactor | null;
    /**
     * Defines the blending destination alpha factor.
     *
     * @default null
     */
    blendDstAlpha: BlendingDstFactor | null;
    /**
     * Defines the blending equation of the alpha channel.
     *
     * @default null
     */
    blendEquationAlpha: BlendingEquation | null;
    /**
     * Represents the RGB values of the constant blend color.
     *
     * This property has only an effect when using custom blending with `ConstantColor` or `OneMinusConstantColor`.
     *
     * @default (0,0,0)
     */
    blendColor: Color;
    /**
     * Represents the alpha value of the constant blend color.
     *
     * This property has only an effect when using custom blending with `ConstantAlpha` or `OneMinusConstantAlpha`.
     *
     * @default 0
     */
    blendAlpha: number;
    /**
     * Defines the depth function.
     *
     * @default LessEqualDepth
     */
    depthFunc: DepthModes;
    /**
     * Whether to have depth test enabled when rendering this material.
     * When the depth test is disabled, the depth write will also be implicitly disabled.
     *
     * @default true
     */
    depthTest: boolean;
    /**
     * Whether rendering this material has any effect on the depth buffer.
     *
     * When drawing 2D overlays it can be useful to disable the depth writing in
     * order to layer several things together without creating z-index artifacts.
     *
     * @default true
     */
    depthWrite: boolean;
    /**
     * The bit mask to use when writing to the stencil buffer.
     *
     * @default 0xff
     */
    stencilWriteMask: number;
    /**
     * The stencil comparison function to use.
     *
     * @default AlwaysStencilFunc
     */
    stencilFunc: StencilFunc;
    /**
     * The value to use when performing stencil comparisons or stencil operations.
     *
     * @default 0
     */
    stencilRef: number;
    /**
     * The bit mask to use when comparing against the stencil buffer.
     *
     * @default 0xff
     */
    stencilFuncMask: number;
    /**
     * Which stencil operation to perform when the comparison function returns `false`.
     *
     * @default KeepStencilOp
     */
    stencilFail: StencilOp;
    /**
     * Which stencil operation to perform when the comparison function returns
     * `true` but the depth test fails.
     *
     * @default KeepStencilOp
     */
    stencilZFail: StencilOp;
    /**
     * Which stencil operation to perform when the comparison function returns
     * `true` and the depth test passes.
     *
     * @default KeepStencilOp
     */
    stencilZPass: StencilOp;
    /**
     * Whether stencil operations are performed against the stencil buffer. In
     * order to perform writes or comparisons against the stencil buffer this
     * value must be `true`.
     *
     * @default false
     */
    stencilWrite: boolean;
    /**
     * User-defined clipping planes specified as THREE.Plane objects in world
     * space. These planes apply to the objects this material is attached to.
     * Points in space whose signed distance to the plane is negative are clipped
     * (not rendered). This requires {@link WebGLRenderer#localClippingEnabled} to
     * be `true`.
     *
     * @default null
     */
    clippingPlanes: Array<Plane> | null;
    /**
     * Changes the behavior of clipping planes so that only their intersection is
     * clipped, rather than their union.
     *
     * @default false
     */
    clipIntersection: boolean;
    /**
     * Defines whether to clip shadows according to the clipping planes specified
     * on this material.
     *
     * @default false
     */
    clipShadows: boolean;
    /**
     * Defines which side of faces cast shadows. If `null`, the side casting shadows
     * is determined as follows:
     *
     * - When {@link Material#side} is set to `FrontSide`, the back side cast shadows.
     * - When {@link Material#side} is set to `BackSide`, the front side cast shadows.
     * - When {@link Material#side} is set to `DoubleSide`, both sides cast shadows.
     *
     * @default null
     */
    shadowSide: Side | null;
    /**
     * Whether to render the material's color.
     *
     * This can be used in conjunction with {@link Object3D#renderOder} to create invisible
     * objects that occlude other objects.
     *
     * @default true
     */
    colorWrite: boolean;
    /**
     * Override the renderer's default precision for this material.
     *
     * @default null
     */
    precision: ("highp" | "mediump" | "lowp") | null;
    /**
     * Whether to use polygon offset or not. When enabled, each fragment's depth value will
     * be offset after it is interpolated from the depth values of the appropriate vertices.
     * The offset is added before the depth test is performed and before the value is written
     * into the depth buffer.
     *
     * Can be useful for rendering hidden-line images, for applying decals to surfaces, and for
     * rendering solids with highlighted edges.
     *
     * @default false
     */
    polygonOffset: boolean;
    /**
     * Specifies a scale factor that is used to create a variable depth offset for each polygon.
     *
     * @default 0
     */
    polygonOffsetFactor: number;
    /**
     * Is multiplied by an implementation-specific value to create a constant depth offset.
     *
     * @default 0
     */
    polygonOffsetUnits: number;
    /**
     * Whether to apply dithering to the color to remove the appearance of banding.
     *
     * @default false
     */
    dithering: boolean;
    /**
     * Whether alpha to coverage should be enabled or not. Can only be used with MSAA-enabled contexts
     * (meaning when the renderer was created with *antialias* parameter set to `true`). Enabling this
     * will smooth aliasing on clip plane edges and alphaTest-clipped edges.
     *
     * @default false
     */
    alphaToCoverage: boolean;
    /**
     * Whether to premultiply the alpha (transparency) value.
     *
     * @default false
     */
    premultipliedAlpha: boolean;
    /**
     * Whether double-sided, transparent objects should be rendered with a single pass or not.
     *
     * The engine renders double-sided, transparent objects with two draw calls (back faces first,
     * then front faces) to mitigate transparency artifacts. There are scenarios however where this
     * approach produces no quality gains but still doubles draw calls e.g. when rendering flat
     * vegetation like grass sprites. In these cases, set the `forceSinglePass` flag to `true` to
     * disable the two pass rendering to avoid performance issues.
     *
     * @default false
     */
    forceSinglePass: boolean;
    /**
     * Whether it's possible to override the material with {@link Scene#overrideMaterial} or not.
     *
     * @default true
     */
    allowOverride: boolean;
    /**
     * Defines whether 3D objects using this material are visible.
     *
     * @default true
     */
    visible: boolean;
    /**
     * Defines whether this material is tone mapped according to the renderer's tone mapping setting.
     *
     * It is ignored when rendering to a render target or using post processing or when using
     * `WebGPURenderer`. In all these cases, all materials are honored by tone mapping.
     *
     * @default true
     */
    toneMapped: boolean;
    /**
     * An object that can be used to store custom data about the Material. It
     * should not hold references to functions as these will not be cloned.
     */
    userData: Record<string, any>;
    set alphaTest(value: number);
    /**
     * Sets the alpha value to be used when running an alpha test. The material
     * will not be rendered if the opacity is lower than this value.
     *
     * @default 0
     */
    get alphaTest(): number;
}

export type MapColorPropertiesToColorRepresentations<T> = {
    [P in keyof T]: T[P] extends Color ? ColorRepresentation : T[P];
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MaterialParameters extends Partial<MapColorPropertiesToColorRepresentations<MaterialProperties>> {}

export interface MaterialJSON {
    metadata: { version: number; type: string; generator: string };

    uuid: string;
    type: string;

    name?: string;

    color?: number;
    roughness?: number;
    metalness?: number;

    sheen?: number;
    sheenColor?: number;
    sheenRoughness?: number;
    emissive?: number;
    emissiveIntensity?: number;

    specular?: number;
    specularIntensity?: number;
    specularColor?: number;
    shininess?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
    clearcoatMap?: string;
    clearcoatRoughnessMap?: string;
    clearcoatNormalMap?: string;
    clearcoatNormalScale?: Vector2Tuple;

    dispersion?: number;

    iridescence?: number;
    iridescenceIOR?: number;
    iridescenceThicknessRange?: number;
    iridescenceMap?: string;
    iridescenceThicknessMap?: string;

    anisotropy?: number;
    anisotropyRotation?: number;
    anisotropyMap?: string;

    map?: string;
    matcap?: string;
    alphaMap?: string;

    lightMap?: string;
    lightMapIntensity?: number;

    aoMap?: string;
    aoMapIntensity?: number;

    bumpMap?: string;
    bumpScale?: number;

    normalMap?: string;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2Tuple;

    displacementMap?: string;
    displacementScale?: number;
    displacementBias?: number;

    roughnessMap?: string;
    metalnessMap?: string;

    emissiveMap?: string;
    specularMap?: string;
    specularIntensityMap?: string;
    specularColorMap?: string;

    envMap?: string;
    combine?: Combine;

    envMapRotation?: EulerTuple;
    envMapIntensity?: number;
    reflectivity?: number;
    refractionRatio?: number;

    gradientMap?: string;

    transmission?: number;
    transmissionMap?: string;
    thickness?: number;
    thicknessMap?: string;
    attenuationDistance?: number;
    attenuationColor?: number;

    size?: number;
    shadowSide?: number;
    sizeAttenuation?: boolean;

    blending?: Blending;
    side?: Side;
    vertexColors?: boolean;

    opacity?: number;
    transparent?: boolean;

    blendSrc?: BlendingSrcFactor;
    blendDst?: BlendingDstFactor;
    blendEquation?: BlendingEquation;
    blendSrcAlpha?: number | null;
    blendDstAlpha?: number | null;
    blendEquationAlpha?: number | null;
    blendColor?: number;
    blendAlpha?: number;

    depthFunc?: DepthModes;
    depthTest?: boolean;
    depthWrite?: boolean;
    colorWrite?: boolean;

    stencilWriteMask?: number;
    stencilFunc?: StencilFunc;
    stencilRef?: number;
    stencilFuncMask?: number;
    stencilFail?: StencilOp;
    stencilZFail?: StencilOp;
    stencilZPass?: StencilOp;
    stencilWrite?: boolean;

    rotation?: number;

    polygonOffset?: boolean;
    polygonOffsetFactor?: number;
    polygonOffsetUnits?: number;

    linewidth?: number;
    dashSize?: number;
    gapSize?: number;
    scale?: number;

    dithering?: boolean;

    alphaTest?: number;
    alphaHash?: boolean;
    alphaToCoverage?: boolean;
    premultipliedAlpha?: boolean;
    forceSinglePass?: boolean;

    wireframe?: boolean;
    wireframeLinewidth?: number;
    wireframeLinecap?: string;
    wireframeLinejoin?: string;

    flatShading?: boolean;

    visible?: boolean;

    toneMapped?: boolean;

    fog?: boolean;

    userData?: Record<string, unknown>;

    textures?: Array<Omit<TextureJSON, "metadata">>;
    images?: SourceJSON[];
}

/**
 * Abstract base class for materials.
 *
 * Materials define the appearance of renderable 3D objects.
 *
 * @abstract
 */
export class Material extends EventDispatcher<{ dispose: {} }> {
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMaterial: boolean;
    /**
     * The UUID of the material.
     */
    readonly uuid: string;
    /**
     * The type property is used for detecting the object type
     * in context of serialization/deserialization.
     */
    readonly type: string;
    /**
     * This starts at `0` and counts how many times {@link Material#needsUpdate} is set to `true`.
     *
     * @default 0
     */
    readonly version: number;
    /**
     * An optional callback that is executed immediately before the material is used to render a 3D object.
     *
     * This method can only be used when rendering with {@link WebGLRenderer}.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Scene} scene - The scene.
     * @param {Camera} camera - The camera that is used to render the scene.
     * @param {BufferGeometry} geometry - The 3D object's geometry.
     * @param {Object3D} object - The 3D object.
     * @param {Object} group - The geometry group data.
     */
    onBeforeRender(
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        object: Object3D,
        group: Group,
    ): void;
    /**
     * An optional callback that is executed immediately before the shader
     * program is compiled. This function is called with the shader source code
     * as a parameter. Useful for the modification of built-in materials.
     *
     * This method can only be used when rendering with {@link WebGLRenderer}. The
     * recommended approach when customizing materials is to use `WebGPURenderer` with the new
     * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
     *
     * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
     * @param {WebGLRenderer} renderer - A reference to the renderer.
     */
    onBeforeCompile(parameters: WebGLProgramParametersWithUniforms, renderer: WebGLRenderer): void;
    /**
     * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
     * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
     * shader or recompile the shader for this material as needed.
     *
     * This method can only be used when rendering with {@link WebGLRenderer}.
     *
     * @return {string} The custom program cache key.
     */
    customProgramCacheKey(): string;
    /**
     * This method can be used to set default values from parameter objects.
     * It is a generic implementation so it can be used with different types
     * of materials.
     *
     * @param {Object} [values] - The material values to set.
     */
    setValues(values?: MaterialParameters): void;
    /**
     * Serializes the material into JSON.
     *
     * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
     * @return {Object} A JSON object representing the serialized material.
     * @see {@link ObjectLoader#parse}
     */
    toJSON(meta?: JSONMeta): MaterialJSON;
    /**
     * Returns a new material with copied values from this instance.
     *
     * @return {Material} A clone of this instance.
     */
    clone(): this;
    /**
     * Copies the values of the given material to this instance.
     *
     * @param {Material} source - The material to copy.
     * @return {Material} A reference to this instance.
     */
    copy(source: Material): this;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     *
     * @fires Material#dispose
     */
    dispose(): void;
    /**
     * Setting this property to `true` indicates the engine the material
     * needs to be recompiled.
     *
     * @default false
     * @param {boolean} value
     */
    set needsUpdate(value: boolean);
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Material extends MaterialProperties {}
