import { Camera } from "../cameras/Camera.js";
import {
    Blending,
    BlendingDstFactor,
    BlendingEquation,
    BlendingSrcFactor,
    Combine,
    DepthModes,
    NormalMapTypes,
    PixelFormat,
    Side,
    StencilFunc,
    StencilOp,
} from "../constants.js";
import { BufferGeometry } from "../core/BufferGeometry.js";
import { EventDispatcher } from "../core/EventDispatcher.js";
import { JSONMeta, Object3D } from "../core/Object3D.js";
import { Color, ColorRepresentation } from "../math/Color.js";
import { Plane } from "../math/Plane.js";
import { Group } from "../objects/Group.js";
import { WebGLProgramParametersWithUniforms } from "../renderers/webgl/WebGLPrograms.js";
import { WebGLRenderer } from "../renderers/WebGLRenderer.js";
import { Scene } from "../scenes/Scene.js";
import { EulerTuple, SourceJSON, TextureJSON, Vector2Tuple } from "../Three.js";

export interface MaterialParameters {
    alphaHash?: boolean | undefined;
    alphaTest?: number | undefined;
    alphaToCoverage?: boolean | undefined;
    blendAlpha?: number | undefined;
    blendColor?: ColorRepresentation | undefined;
    blendDst?: BlendingDstFactor | undefined;
    blendDstAlpha?: number | undefined;
    blendEquation?: BlendingEquation | undefined;
    blendEquationAlpha?: number | undefined;
    blending?: Blending | undefined;
    blendSrc?: BlendingSrcFactor | BlendingDstFactor | undefined;
    blendSrcAlpha?: number | undefined;
    clipIntersection?: boolean | undefined;
    clippingPlanes?: Plane[] | undefined;
    clipShadows?: boolean | undefined;
    colorWrite?: boolean | undefined;
    defines?: any;
    depthFunc?: DepthModes | undefined;
    depthTest?: boolean | undefined;
    depthWrite?: boolean | undefined;
    name?: string | undefined;
    opacity?: number | undefined;
    polygonOffset?: boolean | undefined;
    polygonOffsetFactor?: number | undefined;
    polygonOffsetUnits?: number | undefined;
    precision?: "highp" | "mediump" | "lowp" | null | undefined;
    premultipliedAlpha?: boolean | undefined;
    forceSinglePass?: boolean | undefined;
    dithering?: boolean | undefined;
    side?: Side | undefined;
    shadowSide?: Side | undefined;
    toneMapped?: boolean | undefined;
    transparent?: boolean | undefined;
    vertexColors?: boolean | undefined;
    visible?: boolean | undefined;
    format?: PixelFormat | undefined;
    stencilWrite?: boolean | undefined;
    stencilFunc?: StencilFunc | undefined;
    stencilRef?: number | undefined;
    stencilWriteMask?: number | undefined;
    stencilFuncMask?: number | undefined;
    stencilFail?: StencilOp | undefined;
    stencilZFail?: StencilOp | undefined;
    stencilZPass?: StencilOp | undefined;
    userData?: Record<string, any> | undefined;
}

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
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 */
export class Material extends EventDispatcher<{ dispose: {} }> {
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Material}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isMaterial: true;

    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a
     * scene.
     */
    type: string;

    /**
     * Enables alpha hashed transparency, an alternative to {@link .transparent} or {@link .alphaTest}. The material
     * will not be rendered if opacity is lower than a random threshold. Randomization introduces some grain or noise,
     * but approximates alpha blending without the associated problems of sorting. Using TAARenderPass can reduce the
     * resulting noise.
     */
    alphaHash: boolean;

    /**
     * Enables alpha to coverage. Can only be used with MSAA-enabled rendering contexts (meaning when the renderer was
     * created with *antialias* parameter set to `true`). Enabling this will smooth aliasing on clip plane edges and
     * alphaTest-clipped edges.
     * @default false
     */
    alphaToCoverage: boolean;

    /**
     * Represents the alpha value of the constant blend color. This property has only an effect when using custom
     * blending with {@link ConstantAlphaFactor} or {@link OneMinusConstantAlphaFactor}.
     * @default 0
     */
    blendAlpha: number;

    /**
     * Represent the RGB values of the constant blend color. This property has only an effect when using custom
     * blending with {@link ConstantColorFactor} or {@link OneMinusConstantColorFactor}.
     * @default 0x000000
     */
    blendColor: Color;

    /**
     * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
     * @default THREE.OneMinusSrcAlphaFactor
     */
    blendDst: BlendingDstFactor;

    /**
     * The tranparency of the .blendDst. Default is null.
     * @default null
     */
    blendDstAlpha: number | null;

    /**
     * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
     * @default THREE.AddEquation
     */
    blendEquation: BlendingEquation;

    /**
     * The tranparency of the .blendEquation. Default is null.
     * @default null
     */
    blendEquationAlpha: number | null;

    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     * @default THREE.NormalBlending
     */
    blending: Blending;

    /**
     * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
     * @default THREE.SrcAlphaFactor
     */
    blendSrc: BlendingSrcFactor | BlendingDstFactor;

    /**
     * The tranparency of the .blendSrc. Default is null.
     * @default null
     */
    blendSrcAlpha: number | null;

    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     * @default false
     */
    clipIntersection: boolean;

    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space.
     * These planes apply to the objects this material is attached to.
     * Points in space whose signed distance to the plane is negative are clipped (not rendered).
     * See the WebGL / clipping /intersection example. Default is null.
     * @default null
     */
    clippingPlanes: Plane[] | null;

    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     * @default false
     */
    clipShadows: boolean;

    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     * @default true
     */
    colorWrite: boolean;

    /**
     * Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }.
     * The pairs are defined in both vertex and fragment shaders. Default is undefined.
     * @default undefined
     */
    defines: undefined | { [key: string]: any };

    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     * @default THREE.LessEqualDepth
     */
    depthFunc: DepthModes;

    /**
     * Whether to have depth test enabled when rendering this material. When the depth test is disabled, the depth write
     * will also be implicitly disabled.
     * @default true
     */
    depthTest: boolean;

    /**
     * Whether rendering this material has any effect on the depth buffer. Default is true.
     * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
     * @default true
     */
    depthWrite: boolean;

    /**
     * Unique number of this material instance.
     */
    id: number;

    /**
     * Whether rendering this material has any effect on the stencil buffer. Default is *false*.
     * @default false
     */
    stencilWrite: boolean;

    /**
     * The stencil comparison function to use. Default is {@link AlwaysStencilFunc}. See stencil operation constants for all possible values.
     * @default THREE.AlwaysStencilFunc
     */
    stencilFunc: StencilFunc;

    /**
     * The value to use when performing stencil comparisons or stencil operations. Default is *0*.
     * @default 0
     */
    stencilRef: number;

    /**
     * The bit mask to use when writing to the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilWriteMask: number;

    /**
     * The bit mask to use when comparing against the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilFuncMask: number;

    /**
     * Which stencil operation to perform when the comparison function returns false. Default is {@link KeepStencilOp}. See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true but the depth test fails.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true and the depth test passes.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZPass: StencilOp;

    /**
     * Material name. Default is an empty string.
     * @default ''
     */
    name: string;

    /**
     * Opacity. Default is 1.
     * @default 1
     */
    opacity: number;

    /**
     * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
     * @default false
     */
    polygonOffset: boolean;

    /**
     * Sets the polygon offset factor. Default is 0.
     * @default 0
     */
    polygonOffsetFactor: number;

    /**
     * Sets the polygon offset units. Default is 0.
     * @default 0
     */
    polygonOffsetUnits: number;

    /**
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     * @default null
     */
    precision: "highp" | "mediump" | "lowp" | null;

    /**
     * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
     * @default false
     */
    premultipliedAlpha: boolean;

    /**
     * @default false
     */
    forceSinglePass: boolean;

    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     * @default false
     */
    dithering: boolean;

    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is {@link THREE.FrontSide}. Other options are {@link THREE.BackSide} and {@link THREE.DoubleSide}.
     *
     * @default {@link THREE.FrontSide}
     */
    side: Side;

    /**
     * Defines which of the face sides will cast shadows. Default is *null*.
     * If *null*, the value is opposite that of side, above.
     * @default null
     */
    shadowSide: Side | null;

    /**
     * Defines whether this material is tone mapped according to the renderer's
     * {@link WebGLRenderer.toneMapping toneMapping} setting. It is ignored when rendering to a render target or using
     * post processing.
     * @default true
     */
    toneMapped: boolean;

    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * @default false
     */
    transparent: boolean;

    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    uuid: string;

    /**
     * Defines whether vertex coloring is used. Default is false.
     * @default false
     */
    vertexColors: boolean;

    /**
     * Defines whether this material is visible. Default is true.
     * @default true
     */
    visible: boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: Record<string, any>;

    /**
     * This starts at 0 and counts how many times .needsUpdate is set to true.
     * @default 0
     */
    version: number;

    /**
     * Gets the alpha value to be used when running an alpha test. Default is 0.
     * @default 0
     */
    get alphaTest(): number;

    /**
     * Sets the alpha value to be used when running an alpha test. Default is 0.
     * @default 0
     */
    set alphaTest(value: number);

    /**
     * An optional callback that is executed immediately before the material is used to render a 3D object.
     * Unlike properties, the callback is not supported by {@link .clone()}, {@link .copy()} and {@link .toJSON()}.
     * This callback is only supported in `WebGLRenderer` (not `WebGPURenderer`).
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
     * An optional callback that is executed immediately before the shader program is compiled.
     * This function is called with the shader source code as a parameter.
     * Useful for the modification of built-in materials.
     * Unlike properties, the callback is not supported by {@link .clone()}, {@link .copy()} and {@link .toJSON()}.
     * This callback is only supported in `WebGLRenderer` (not `WebGPURenderer`).
     * @param parameters WebGL program parameters
     * @param renderer WebGLRenderer context that is initializing the material
     */
    onBeforeCompile(parameters: WebGLProgramParametersWithUniforms, renderer: WebGLRenderer): void;

    /**
     * In case onBeforeCompile is used, this callback can be used to identify values of settings used in onBeforeCompile, so three.js can reuse a cached shader or recompile the shader as needed.
     */
    customProgramCacheKey(): string;

    /**
     * Sets the properties based on the values.
     * @param values A container with parameters.
     */
    setValues(values: MaterialParameters): void;

    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     */
    toJSON(meta?: JSONMeta): MaterialJSON;

    /**
     * Return a new material with the same parameters as this material.
     */
    clone(): this;

    /**
     * Copy the parameters from the passed material into this material.
     * @param material
     */
    copy(material: Material): this;

    /**
     * Frees the GPU-related resources allocated by this instance. Call this method whenever this instance is no longer
     * used in your app.
     *
     * Material textures must be disposed of by the dispose() method of {@link Texture}.
     */
    dispose(): void;

    /**
     * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
     * This property is automatically set to true when instancing a new material.
     * @default false
     */
    set needsUpdate(value: boolean);

    /**
     * @deprecated onBuild() has been removed.
     */
    onBuild(object: Object3D, parameters: WebGLProgramParametersWithUniforms, renderer: WebGLRenderer): void;
}
