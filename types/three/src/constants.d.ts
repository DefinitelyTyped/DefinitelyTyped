export const REVISION: string;

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
export enum MOUSE {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    ROTATE = 0,
    DOLLY = 1,
    PAN = 2,
}

export enum TOUCH {
    ROTATE = 0,
    PAN = 1,
    DOLLY_PAN = 2,
    DOLLY_ROTATE = 3,
}

// GL STATE CONSTANTS
export const CullFaceNone: 0;
export const CullFaceBack: 1;
export const CullFaceFront: 2;
export const CullFaceFrontBack: 3;
export type CullFace = typeof CullFaceNone | typeof CullFaceBack | typeof CullFaceFront | typeof CullFaceFrontBack;

// Shadowing Type
export const BasicShadowMap: 0;
export const PCFShadowMap: 1;
export const PCFSoftShadowMap: 2;
export const VSMShadowMap: 3;
export type ShadowMapType = typeof BasicShadowMap | typeof PCFShadowMap | typeof PCFSoftShadowMap | typeof VSMShadowMap;

// MATERIAL CONSTANTS

// side
export const FrontSide: 0;
export const BackSide: 1;
export const DoubleSide: 2;
/**
 * Defines which side of faces will be rendered - front, back or both.
 * Default is {@link FrontSide}.
 */
export type Side = typeof FrontSide | typeof BackSide | typeof DoubleSide;

// blending modes
export const NoBlending: 0;
export const NormalBlending: 1;
export const AdditiveBlending: 2;
export const SubtractiveBlending: 3;
export const MultiplyBlending: 4;
export const CustomBlending: 5;
export const MaterialBlending: 6;
export type Blending =
    | typeof NoBlending
    | typeof NormalBlending
    | typeof AdditiveBlending
    | typeof SubtractiveBlending
    | typeof MultiplyBlending
    | typeof CustomBlending
    | typeof MaterialBlending;

// custom blending equations
// (numbers start from 100 not to clash with other
// mappings to OpenGL constants defined in Texture.js)
export const AddEquation: 100;
export const SubtractEquation: 101;
export const ReverseSubtractEquation: 102;
export const MinEquation: 103;
export const MaxEquation: 104;
export type BlendingEquation =
    | typeof AddEquation
    | typeof SubtractEquation
    | typeof ReverseSubtractEquation
    | typeof MinEquation
    | typeof MaxEquation;

// custom blending factors
export const ZeroFactor: 200;
export const OneFactor: 201;
export const SrcColorFactor: 202;
export const OneMinusSrcColorFactor: 203;
export const SrcAlphaFactor: 204;
export const OneMinusSrcAlphaFactor: 205;
export const DstAlphaFactor: 206;
export const OneMinusDstAlphaFactor: 207;
export const DstColorFactor: 208;
export const OneMinusDstColorFactor: 209;
export const SrcAlphaSaturateFactor: 210;
export const ConstantColorFactor: 211;
export const OneMinusConstantColorFactor: 212;
export const ConstantAlphaFactor: 213;
export const OneMinusConstantAlphaFactor: 214;
export type BlendingDstFactor =
    | typeof ZeroFactor
    | typeof OneFactor
    | typeof SrcColorFactor
    | typeof OneMinusSrcColorFactor
    | typeof SrcAlphaFactor
    | typeof OneMinusSrcAlphaFactor
    | typeof DstAlphaFactor
    | typeof OneMinusDstAlphaFactor
    | typeof DstColorFactor
    | typeof OneMinusDstColorFactor
    | typeof ConstantColorFactor
    | typeof OneMinusConstantColorFactor
    | typeof ConstantAlphaFactor
    | typeof OneMinusConstantAlphaFactor;
export type BlendingSrcFactor = BlendingDstFactor | typeof SrcAlphaSaturateFactor;

// depth modes
export const NeverDepth: 0;
export const AlwaysDepth: 1;
export const LessDepth: 2;
export const LessEqualDepth: 3;
export const EqualDepth: 4;
export const GreaterEqualDepth: 5;
export const GreaterDepth: 6;
export const NotEqualDepth: 7;
export type DepthModes =
    | typeof NeverDepth
    | typeof AlwaysDepth
    | typeof LessDepth
    | typeof LessEqualDepth
    | typeof EqualDepth
    | typeof GreaterEqualDepth
    | typeof GreaterDepth
    | typeof NotEqualDepth;

// TEXTURE CONSTANTS
// Operations
export const MultiplyOperation: 0;
export const MixOperation: 1;
export const AddOperation: 2;
export type Combine = typeof MultiplyOperation | typeof MixOperation | typeof AddOperation;

// Tone Mapping modes
export const NoToneMapping: 0;
export const LinearToneMapping: 1;
export const ReinhardToneMapping: 2;
export const CineonToneMapping: 3;
export const ACESFilmicToneMapping: 4;
export const CustomToneMapping: 5;
export const AgXToneMapping: 6;
export const NeutralToneMapping: 7;
export type ToneMapping =
    | typeof NoToneMapping
    | typeof LinearToneMapping
    | typeof ReinhardToneMapping
    | typeof CineonToneMapping
    | typeof ACESFilmicToneMapping
    | typeof CustomToneMapping
    | typeof AgXToneMapping
    | typeof NeutralToneMapping;

// Bind modes
export const AttachedBindMode: "attached";
export const DetachedBindMode: "detached";
export type BindMode = typeof AttachedBindMode | typeof DetachedBindMode;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Mapping modes

/**
 * Maps the texture using the mesh's UV coordinates.
 * @remarks This is the _default_ value and behaver for Texture Mapping.
 */
export const UVMapping: 300;

/**
 * @remarks This is the _default_ value and behaver for Cube Texture Mapping.
 */
export const CubeReflectionMapping: 301;
export const CubeRefractionMapping: 302;
export const CubeUVReflectionMapping: 306;

export const EquirectangularReflectionMapping: 303;
export const EquirectangularRefractionMapping: 304;

/**
 * Texture Mapping Modes for non-cube Textures
 * @remarks {@link UVMapping} is the _default_ value and behaver for Texture Mapping.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type Mapping =
    | typeof UVMapping
    | typeof EquirectangularReflectionMapping
    | typeof EquirectangularRefractionMapping;

/**
 * Texture Mapping Modes for cube Textures
 * @remarks {@link CubeReflectionMapping} is the _default_ value and behaver for Cube Texture Mapping.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type CubeTextureMapping =
    | typeof CubeReflectionMapping
    | typeof CubeRefractionMapping
    | typeof CubeUVReflectionMapping;

/**
 * Texture Mapping Modes for any type of Textures
 * @see {@link Mapping} and {@link CubeTextureMapping}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type AnyMapping = Mapping | CubeTextureMapping;

///////////////////////////////////////////////////////////////////////////////
// Wrapping modes

/** With {@link RepeatWrapping} the texture will simply repeat to infinity. */
export const RepeatWrapping: 1000;
/**
 * With {@link ClampToEdgeWrapping} the last pixel of the texture stretches to the edge of the mesh.
 * @remarks This is the _default_ value and behaver for Wrapping Mapping.
 */
export const ClampToEdgeWrapping: 1001;
/** With {@link MirroredRepeatWrapping} the texture will repeats to infinity, mirroring on each repeat. */
export const MirroredRepeatWrapping: 1002;

/**
 * Texture Wrapping Modes
 * @remarks {@link ClampToEdgeWrapping} is the _default_ value and behaver for Wrapping Mapping.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type Wrapping = typeof RepeatWrapping | typeof ClampToEdgeWrapping | typeof MirroredRepeatWrapping;

///////////////////////////////////////////////////////////////////////////////
// Filters

/** {@link NearestFilter} returns the value of the texture element that is nearest (in Manhattan distance) to the specified texture coordinates. */
export const NearestFilter: 1003;

/**
 * {@link NearestMipmapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion (the texel nearest to the center of the pixel) to produce a texture value.
 */
export const NearestMipmapNearestFilter: 1004;
/**
 * {@link NearestMipmapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion (the texel nearest to the center of the pixel) to produce a texture value.
 */
export const NearestMipMapNearestFilter: 1004;

/**
 * {@link NearestMipmapLinearFilter} chooses the two mipmaps that most closely match the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
export const NearestMipmapLinearFilter: 1005;
/**
 * {@link NearestMipMapLinearFilter} chooses the two mipmaps that most closely match the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
export const NearestMipMapLinearFilter: 1005;

/**
 * {@link LinearFilter} returns the weighted average of the four texture elements that are closest to the specified texture coordinates,
 * and can include items wrapped or repeated from other parts of a texture,
 * depending on the values of {@link THREE.Texture.wrapS | wrapS} and {@link THREE.Texture.wrapT | wrapT}, and on the exact mapping.
 */
export const LinearFilter: 1006;

/**
 * {@link LinearMipmapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion (a weighted average of the four texels that are closest to the center of the pixel) to produce a texture value.
 */
export const LinearMipmapNearestFilter: 1007;
/**
 * {@link LinearMipMapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion (a weighted average of the four texels that are closest to the center of the pixel) to produce a texture value.
 */
export const LinearMipMapNearestFilter: 1007;

/**
 * {@link LinearMipmapLinearFilter} is the default and chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
export const LinearMipmapLinearFilter: 1008;

/**
 * {@link LinearMipMapLinearFilter} is the default and chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
export const LinearMipMapLinearFilter: 1008;

/**
 * Texture Magnification Filter Modes.
 * For use with a texture's {@link THREE.Texture.magFilter | magFilter} property,
 * these define the texture magnification function to be used when the pixel being textured maps to an area less than or equal to one texture element (texel).
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://sbcode.net/threejs/mipmaps/ | Texture Mipmaps (non-official)}
 */
export type MagnificationTextureFilter = typeof NearestFilter | typeof LinearFilter;

/**
 * Texture Minification Filter Modes.
 * For use with a texture's {@link THREE.Texture.minFilter | minFilter} property,
 * these define the texture minifying function that is used whenever the pixel being textured maps to an area greater than one texture element (texel).
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://sbcode.net/threejs/mipmaps/ | Texture Mipmaps (non-official)}
 */
export type MinificationTextureFilter =
    | typeof NearestFilter
    | typeof NearestMipmapNearestFilter
    | typeof NearestMipMapNearestFilter
    | typeof NearestMipmapLinearFilter
    | typeof NearestMipMapLinearFilter
    | typeof LinearFilter
    | typeof LinearMipmapNearestFilter
    | typeof LinearMipMapNearestFilter
    | typeof LinearMipmapLinearFilter
    | typeof LinearMipMapLinearFilter;

/**
 * Texture all Magnification and Minification Filter Modes.
 * @see {@link MagnificationTextureFilter} and {@link MinificationTextureFilter}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://sbcode.net/threejs/mipmaps/ | Texture Mipmaps (non-official)}
 */
export type TextureFilter = MagnificationTextureFilter | MinificationTextureFilter;

///////////////////////////////////////////////////////////////////////////////
// Data types

export const UnsignedByteType: 1009;
export const ByteType: 1010;
export const ShortType: 1011;
export const UnsignedShortType: 1012;
export const IntType: 1013;
export const UnsignedIntType: 1014;
export const FloatType: 1015;
export const HalfFloatType: 1016;
export const UnsignedShort4444Type: 1017;
export const UnsignedShort5551Type: 1018;
export const UnsignedInt248Type: 1020;
export const UnsignedInt5999Type: 35902;
export const UnsignedInt101111Type: 35899;

export type AttributeGPUType = typeof FloatType | typeof IntType;

/**
 * Texture Types.
 * @remarks Must correspond to the correct {@link PixelFormat | format}.
 * @see {@link THREE.Texture.type}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type TextureDataType =
    | typeof UnsignedByteType
    | typeof ByteType
    | typeof ShortType
    | typeof UnsignedShortType
    | typeof IntType
    | typeof UnsignedIntType
    | typeof FloatType
    | typeof HalfFloatType
    | typeof UnsignedShort4444Type
    | typeof UnsignedShort5551Type
    | typeof UnsignedInt248Type
    | typeof UnsignedInt5999Type
    | typeof UnsignedInt101111Type;

///////////////////////////////////////////////////////////////////////////////
// Pixel formats

/** {@link AlphaFormat} discards the red, green and blue components and reads just the alpha component. */
export const AlphaFormat: 1021;

export const RGBFormat: 1022;

/** {@link RGBAFormat} is the default and reads the red, green, blue and alpha components. */
export const RGBAFormat: 1023;

/**
 * {@link DepthFormat} reads each element as a single depth value, converts it to floating point, and clamps to the range `[0,1]`.
 * @remarks This is the default for {@link THREE.DepthTexture}.
 */
export const DepthFormat: 1026;

/**
 * {@link DepthStencilFormat} reads each element is a pair of depth and stencil values.
 * The depth component of the pair is interpreted as in {@link DepthFormat}.
 * The stencil component is interpreted based on the depth + stencil internal format.
 */
export const DepthStencilFormat: 1027;

/**
 * {@link RedFormat} discards the green and blue components and reads just the red component.
 */
export const RedFormat: 1028;

/**
 * {@link RedIntegerFormat} discards the green and blue components and reads just the red component.
 * The texels are read as integers instead of floating point.
 */
export const RedIntegerFormat: 1029;

/**
 * {@link RGFormat} discards the alpha, and blue components and reads the red, and green components.
 */
export const RGFormat: 1030;

/**
 * {@link RGIntegerFormat} discards the alpha, and blue components and reads the red, and green components.
 * The texels are read as integers instead of floating point.
 */
export const RGIntegerFormat: 1031;

/**
 * {@link RGBIntegerFormat} discards the alpha components and reads the red, green, and blue components.
 */
export const RGBIntegerFormat: 1032;

/**
 * {@link RGBAIntegerFormat} reads the red, green, blue and alpha component
 * @remarks This is the default for {@link THREE.Texture}.
 */
export const RGBAIntegerFormat: 1033;

/**
 * All Texture Pixel Formats Modes.
 * @remarks Note that the texture must have the correct {@link THREE.Texture.type} set, as described in  {@link TextureDataType}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type PixelFormat =
    | typeof AlphaFormat
    | typeof RGBFormat
    | typeof RGBAFormat
    | typeof DepthFormat
    | typeof DepthStencilFormat
    | typeof RedFormat
    | typeof RedIntegerFormat
    | typeof RGFormat
    | typeof RGIntegerFormat
    | typeof RGBIntegerFormat
    | typeof RGBAIntegerFormat;

/**
 * All Texture Pixel Formats Modes for {@link THREE.DepthTexture}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type DepthTexturePixelFormat = typeof DepthFormat | typeof DepthStencilFormat;

///////////////////////////////////////////////////////////////////////////////
// Compressed texture formats
// DDS / ST3C Compressed texture formats

/**
 * A DXT1-compressed image in an RGB image format.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
export const RGB_S3TC_DXT1_Format: 33776;
/**
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
export const RGBA_S3TC_DXT1_Format: 33777;
/**
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
export const RGBA_S3TC_DXT3_Format: 33778;
/**
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs from the DXT3 compression in how the alpha compression is done.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
export const RGBA_S3TC_DXT5_Format: 33779;

// PVRTC compressed './texture formats

/**
 * RGB compression in 4-bit mode. One block for each 4×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
export const RGB_PVRTC_4BPPV1_Format: 35840;
/**
 * RGB compression in 2-bit mode. One block for each 8×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
export const RGB_PVRTC_2BPPV1_Format: 35841;
/**
 * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
export const RGBA_PVRTC_4BPPV1_Format: 35842;
/**
 * RGBA compression in 2-bit mode. One block for each 8×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
export const RGBA_PVRTC_2BPPV1_Format: 35843;

// ETC compressed texture formats

/**
 * @remarks Require support for the _WEBGL_compressed_texture_etc1_ (ETC1) or _WEBGL_compressed_texture_etc_ (ETC2) WebGL extension.
 */
export const RGB_ETC1_Format: 36196;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_etc1_ (ETC1) or _WEBGL_compressed_texture_etc_ (ETC2) WebGL extension.
 */
export const RGB_ETC2_Format: 37492;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_etc1_ (ETC1) or _WEBGL_compressed_texture_etc_ (ETC2) WebGL extension.
 */
export const RGBA_ETC2_EAC_Format: 37496;

export const R11_EAC_Format: 37488;
export const SIGNED_R11_EAC_Format: 37489;
export const RG11_EAC_Format: 37490;
export const SIGNED_RG11_EAC_Format: 37491;

// ASTC compressed texture formats

/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_4x4_Format: 37808;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_5x4_Format: 37809;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_5x5_Format: 37810;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_6x5_Format: 37811;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_6x6_Format: 37812;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_8x5_Format: 37813;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_8x6_Format: 37814;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_8x8_Format: 37815;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_10x5_Format: 37816;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_10x6_Format: 37817;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_10x8_Format: 37818;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_10x10_Format: 37819;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_12x10_Format: 37820;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
export const RGBA_ASTC_12x12_Format: 37821;

// BPTC compressed texture formats

/**
 * @remarks Require support for the _EXT_texture_compression_bptc_ WebGL extension.
 */
export const RGBA_BPTC_Format: 36492;
export const RGB_BPTC_SIGNED_Format = 36494;
export const RGB_BPTC_UNSIGNED_Format = 36495;

// RGTC compressed texture formats
export const RED_RGTC1_Format: 36283;
export const SIGNED_RED_RGTC1_Format: 36284;
export const RED_GREEN_RGTC2_Format: 36285;
export const SIGNED_RED_GREEN_RGTC2_Format: 36286;

/**
 * For use with a {@link THREE.CompressedTexture}'s {@link THREE.CompressedTexture.format | .format} property.
 * @remarks Compressed Require support for correct WebGL extension.
 */
export type CompressedPixelFormat =
    | typeof RGB_S3TC_DXT1_Format
    | typeof RGBA_S3TC_DXT1_Format
    | typeof RGBA_S3TC_DXT3_Format
    | typeof RGBA_S3TC_DXT5_Format
    | typeof RGB_PVRTC_4BPPV1_Format
    | typeof RGB_PVRTC_2BPPV1_Format
    | typeof RGBA_PVRTC_4BPPV1_Format
    | typeof RGBA_PVRTC_2BPPV1_Format
    | typeof RGB_ETC1_Format
    | typeof RGB_ETC2_Format
    | typeof RGBA_ETC2_EAC_Format
    | typeof R11_EAC_Format
    | typeof SIGNED_R11_EAC_Format
    | typeof RG11_EAC_Format
    | typeof SIGNED_RG11_EAC_Format
    | typeof RGBA_ASTC_4x4_Format
    | typeof RGBA_ASTC_5x4_Format
    | typeof RGBA_ASTC_5x5_Format
    | typeof RGBA_ASTC_6x5_Format
    | typeof RGBA_ASTC_6x6_Format
    | typeof RGBA_ASTC_8x5_Format
    | typeof RGBA_ASTC_8x6_Format
    | typeof RGBA_ASTC_8x8_Format
    | typeof RGBA_ASTC_10x5_Format
    | typeof RGBA_ASTC_10x6_Format
    | typeof RGBA_ASTC_10x8_Format
    | typeof RGBA_ASTC_10x10_Format
    | typeof RGBA_ASTC_12x10_Format
    | typeof RGBA_ASTC_12x12_Format
    | typeof RGBA_BPTC_Format
    | typeof RGB_BPTC_SIGNED_Format
    | typeof RGB_BPTC_UNSIGNED_Format
    | typeof RED_RGTC1_Format
    | typeof SIGNED_RED_RGTC1_Format
    | typeof RED_GREEN_RGTC2_Format
    | typeof SIGNED_RED_GREEN_RGTC2_Format;

///////////////////////////////////////////////////////////////////////////////

/**
 * All Possible Texture Pixel Formats Modes. For any Type or SubType of Textures.
 * @remarks Note that the texture must have the correct {@link THREE.Texture.type} set, as described in {@link TextureDataType}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link PixelFormat} and {@link DepthTexturePixelFormat} and {@link CompressedPixelFormat}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
export type AnyPixelFormat = PixelFormat | DepthTexturePixelFormat | CompressedPixelFormat;

///////////////////////////////////////////////////////////////////////////////
// Loop styles for AnimationAction
export const LoopOnce: 2200;
export const LoopRepeat: 2201;
export const LoopPingPong: 2202;
export type AnimationActionLoopStyles = typeof LoopOnce | typeof LoopRepeat | typeof LoopPingPong;

// Interpolation
export const InterpolateDiscrete: 2300;
export const InterpolateLinear: 2301;
export const InterpolateSmooth: 2302;
export const InterpolateBezier: 2303;
export type InterpolationModes =
    | typeof InterpolateDiscrete
    | typeof InterpolateLinear
    | typeof InterpolateSmooth
    | typeof InterpolateBezier;

// Interpolant ending modes
export const ZeroCurvatureEnding: 2400;
export const ZeroSlopeEnding: 2401;
export const WrapAroundEnding: 2402;
export type InterpolationEndingModes = typeof ZeroCurvatureEnding | typeof ZeroSlopeEnding | typeof WrapAroundEnding;

// Animation blending modes
export const NormalAnimationBlendMode: 2500;
export const AdditiveAnimationBlendMode: 2501;
export type AnimationBlendMode = typeof NormalAnimationBlendMode | typeof AdditiveAnimationBlendMode;

// Triangle Draw modes
export const TrianglesDrawMode: 0;
export const TriangleStripDrawMode: 1;
export const TriangleFanDrawMode: 2;
export type TrianglesDrawModes = typeof TrianglesDrawMode | typeof TriangleStripDrawMode | typeof TriangleFanDrawMode;

///////////////////////////////////////////////////////////////////////////////
// Depth packing strategies

export const BasicDepthPacking: 3200;
export const RGBADepthPacking: 3201;
export const RGBDepthPacking: 3202;
export const RGDepthPacking: 3203;
export type DepthPackingStrategies =
    | typeof BasicDepthPacking
    | typeof RGBADepthPacking
    | typeof RGBDepthPacking
    | typeof RGDepthPacking;

///////////////////////////////////////////////////////////////////////////////
// Normal Map types

export const TangentSpaceNormalMap: 0;
export const ObjectSpaceNormalMap: 1;
export type NormalMapTypes = typeof TangentSpaceNormalMap | typeof ObjectSpaceNormalMap;

export const NoColorSpace: "";
export const SRGBColorSpace: "srgb";
export const LinearSRGBColorSpace: "srgb-linear";
export type ColorSpace =
    | typeof NoColorSpace
    | typeof SRGBColorSpace
    | typeof LinearSRGBColorSpace;

export const LinearTransfer: "linear";
export const SRGBTransfer: "srgb";
export type ColorSpaceTransfer = typeof LinearTransfer | typeof SRGBTransfer;

export const NoNormalPacking: "";
export const NormalRGPacking: "rg";
export const NormalGAPacking: "ga";
export type NormalPacking = typeof NoNormalPacking | typeof NormalRGPacking | typeof NormalGAPacking;

// Stencil Op types
export const ZeroStencilOp: 0;
export const KeepStencilOp: 7680;
export const ReplaceStencilOp: 7681;
export const IncrementStencilOp: 7682;
export const DecrementStencilOp: 7283;
export const IncrementWrapStencilOp: 34055;
export const DecrementWrapStencilOp: 34056;
export const InvertStencilOp: 5386;
export type StencilOp =
    | typeof ZeroStencilOp
    | typeof KeepStencilOp
    | typeof ReplaceStencilOp
    | typeof IncrementStencilOp
    | typeof DecrementStencilOp
    | typeof IncrementWrapStencilOp
    | typeof DecrementWrapStencilOp
    | typeof InvertStencilOp;

// Stencil Func types
export const NeverStencilFunc: 512;
export const LessStencilFunc: 513;
export const EqualStencilFunc: 514;
export const LessEqualStencilFunc: 515;
export const GreaterStencilFunc: 516;
export const NotEqualStencilFunc: 517;
export const GreaterEqualStencilFunc: 518;
export const AlwaysStencilFunc: 519;
export type StencilFunc =
    | typeof NeverStencilFunc
    | typeof LessStencilFunc
    | typeof EqualStencilFunc
    | typeof LessEqualStencilFunc
    | typeof GreaterStencilFunc
    | typeof NotEqualStencilFunc
    | typeof GreaterEqualStencilFunc
    | typeof AlwaysStencilFunc;

export const NeverCompare: 512;
export const LessCompare: 513;
export const EqualCompare: 514;
export const LessEqualCompare: 515;
export const GreaterCompare: 516;
export const NotEqualCompare: 517;
export const GreaterEqualCompare: 518;
export const AlwaysCompare: 519;
export type TextureComparisonFunction =
    | typeof NeverCompare
    | typeof LessCompare
    | typeof EqualCompare
    | typeof LessEqualCompare
    | typeof GreaterCompare
    | typeof NotEqualCompare
    | typeof GreaterEqualCompare
    | typeof AlwaysCompare;

// usage types
export const StaticDrawUsage: 35044;
export const DynamicDrawUsage: 35048;
export const StreamDrawUsage: 35040;
export const StaticReadUsage: 35045;
export const DynamicReadUsage: 35049;
export const StreamReadUsage: 35041;
export const StaticCopyUsage: 35046;
export const DynamicCopyUsage: 35050;
export const StreamCopyUsage: 35042;
export type Usage =
    | typeof StaticDrawUsage
    | typeof DynamicDrawUsage
    | typeof StreamDrawUsage
    | typeof StaticReadUsage
    | typeof DynamicReadUsage
    | typeof StreamReadUsage
    | typeof StaticCopyUsage
    | typeof DynamicCopyUsage
    | typeof StreamCopyUsage;

export const GLSL1: "100";
export const GLSL3: "300 es";
export type GLSLVersion = typeof GLSL1 | typeof GLSL3;

export const WebGLCoordinateSystem: 2000;
export const WebGPUCoordinateSystem: 2001;
export type CoordinateSystem =
    | typeof WebGLCoordinateSystem
    | typeof WebGPUCoordinateSystem;

export const TimestampQuery: {
    COMPUTE: "compute";
    RENDER: "render";
};
export type TimestampQuery = typeof TimestampQuery.COMPUTE | typeof TimestampQuery.RENDER;

export const InterpolationSamplingType: {
    PERSPECTIVE: "perspective";
    LINEAR: "linear";
    FLAT: "flat";
};
export type InterpolationSamplingType =
    | typeof InterpolationSamplingType.PERSPECTIVE
    | typeof InterpolationSamplingType.LINEAR
    | typeof InterpolationSamplingType.FLAT;

export const InterpolationSamplingMode: {
    NORMAL: "normal";
    CENTROID: "centroid";
    SAMPLE: "sample";
    FIRST: "first";
    EITHER: "either";
};
export type InterpolationSamplingMode =
    | typeof InterpolationSamplingMode.NORMAL
    | typeof InterpolationSamplingMode.CENTROID
    | typeof InterpolationSamplingMode.SAMPLE
    | typeof InterpolationSamplingMode.FIRST
    | typeof InterpolationSamplingMode.EITHER;

export const Compatibility: {
    TEXTURE_COMPARE: "depthTextureCompare";
};
export type Compatibility = typeof Compatibility.TEXTURE_COMPARE;

///////////////////////////////////////////////////////////////////////////////
// Texture - Internal Pixel Formats

/**
 * For use with a texture's {@link THREE.Texture.internalFormat} property, these define how elements of a {@link THREE.Texture}, or texels, are stored on the GPU.
 * - `R8` stores the red component on 8 bits.
 * - `R8_SNORM` stores the red component on 8 bits. The component is stored as normalized.
 * - `R8I` stores the red component on 8 bits. The component is stored as an integer.
 * - `R8UI` stores the red component on 8 bits. The component is stored as an unsigned integer.
 * - `R16I` stores the red component on 16 bits. The component is stored as an integer.
 * - `R16UI` stores the red component on 16 bits. The component is stored as an unsigned integer.
 * - `R16F` stores the red component on 16 bits. The component is stored as floating point.
 * - `R32I` stores the red component on 32 bits. The component is stored as an integer.
 * - `R32UI` stores the red component on 32 bits. The component is stored as an unsigned integer.
 * - `R32F` stores the red component on 32 bits. The component is stored as floating point.
 * - `RG8` stores the red and green components on 8 bits each.
 * - `RG8_SNORM` stores the red and green components on 8 bits each. Every component is stored as normalized.
 * - `RG8I` stores the red and green components on 8 bits each. Every component is stored as an integer.
 * - `RG8UI` stores the red and green components on 8 bits each. Every component is stored as an unsigned integer.
 * - `RG16I` stores the red and green components on 16 bits each. Every component is stored as an integer.
 * - `RG16UI` stores the red and green components on 16 bits each. Every component is stored as an unsigned integer.
 * - `RG16F` stores the red and green components on 16 bits each. Every component is stored as floating point.
 * - `RG32I` stores the red and green components on 32 bits each. Every component is stored as an integer.
 * - `RG32UI` stores the red and green components on 32 bits. Every component is stored as an unsigned integer.
 * - `RG32F` stores the red and green components on 32 bits. Every component is stored as floating point.
 * - `RGB8` stores the red, green, and blue components on 8 bits each. RGB8_SNORM` stores the red, green, and blue components on 8 bits each. Every component is stored as normalized.
 * - `RGB8I` stores the red, green, and blue components on 8 bits each. Every component is stored as an integer.
 * - `RGB8UI` stores the red, green, and blue components on 8 bits each. Every component is stored as an unsigned integer.
 * - `RGB16I` stores the red, green, and blue components on 16 bits each. Every component is stored as an integer.
 * - `RGB16UI` stores the red, green, and blue components on 16 bits each. Every component is stored as an unsigned integer.
 * - `RGB16F` stores the red, green, and blue components on 16 bits each. Every component is stored as floating point
 * - `RGB32I` stores the red, green, and blue components on 32 bits each. Every component is stored as an integer.
 * - `RGB32UI` stores the red, green, and blue components on 32 bits each. Every component is stored as an unsigned integer.
 * - `RGB32F` stores the red, green, and blue components on 32 bits each. Every component is stored as floating point
 * - `R11F_G11F_B10F` stores the red, green, and blue components respectively on 11 bits, 11 bits, and 10bits. Every component is stored as floating point.
 * - `RGB565` stores the red, green, and blue components respectively on 5 bits, 6 bits, and 5 bits.
 * - `RGB9_E5` stores the red, green, and blue components on 9 bits each.
 * - `RGBA8` stores the red, green, blue, and alpha components on 8 bits each.
 * - `RGBA8_SNORM` stores the red, green, blue, and alpha components on 8 bits. Every component is stored as normalized.
 * - `RGBA8I` stores the red, green, blue, and alpha components on 8 bits each. Every component is stored as an integer.
 * - `RGBA8UI` stores the red, green, blue, and alpha components on 8 bits. Every component is stored as an unsigned integer.
 * - `RGBA16I` stores the red, green, blue, and alpha components on 16 bits. Every component is stored as an integer.
 * - `RGBA16UI` stores the red, green, blue, and alpha components on 16 bits. Every component is stored as an unsigned integer.
 * - `RGBA16F` stores the red, green, blue, and alpha components on 16 bits. Every component is stored as floating point.
 * - `RGBA32I` stores the red, green, blue, and alpha components on 32 bits. Every component is stored as an integer.
 * - `RGBA32UI` stores the red, green, blue, and alpha components on 32 bits. Every component is stored as an unsigned integer.
 * - `RGBA32F` stores the red, green, blue, and alpha components on 32 bits. Every component is stored as floating point.
 * - `RGB5_A1` stores the red, green, blue, and alpha components respectively on 5 bits, 5 bits, 5 bits, and 1 bit.
 * - `RGB10_A2` stores the red, green, blue, and alpha components respectively on 10 bits, 10 bits, 10 bits and 2 bits.
 * - `RGB10_A2UI` stores the red, green, blue, and alpha components respectively on 10 bits, 10 bits, 10 bits and 2 bits. Every component is stored as an unsigned integer.
 * - `SRGB8` stores the red, green, and blue components on 8 bits each.
 * - `SRGB8_ALPHA8` stores the red, green, blue, and alpha components on 8 bits each.
 * - `DEPTH_COMPONENT16` stores the depth component on 16bits.
 * - `DEPTH_COMPONENT24` stores the depth component on 24bits.
 * - `DEPTH_COMPONENT32F` stores the depth component on 32bits. The component is stored as floating point.
 * - `DEPTH24_STENCIL8` stores the depth, and stencil components respectively on 24 bits and 8 bits. The stencil component is stored as an unsigned integer.
 * - `DEPTH32F_STENCIL8` stores the depth, and stencil components respectively on 32 bits and 8 bits. The depth component is stored as floating point, and the stencil component as an unsigned integer.
 * @remark Note that the texture must have the correct {@link THREE.Texture.type} set, as well as the correct {@link THREE.Texture.format}.
 * @see {@link WebGLRenderingContext.texImage2D} and {@link WebGLRenderingContext.texImage3D} for more details regarding the possible combination
 * of {@link THREE.Texture.format}, {@link THREE.Texture.internalFormat}, and {@link THREE.Texture.type}.
 * @see {@link https://registry.khronos.org/webgl/specs/latest/2.0/ | WebGL2 Specification} and
 * {@link https://registry.khronos.org/OpenGL/specs/es/3.0/es_spec_3.0.pdf | OpenGL ES 3.0 Specification} For more in-depth information regarding internal formats.
 */
export type PixelFormatGPU =
    | "ALPHA"
    | "RGB"
    | "RGBA"
    | "LUMINANCE"
    | "LUMINANCE_ALPHA"
    | "RED_INTEGER"
    | "R8"
    | "R8_SNORM"
    | "R8I"
    | "R8UI"
    | "R16I"
    | "R16UI"
    | "R16F"
    | "R32I"
    | "R32UI"
    | "R32F"
    | "RG8"
    | "RG8_SNORM"
    | "RG8I"
    | "RG8UI"
    | "RG16I"
    | "RG16UI"
    | "RG16F"
    | "RG32I"
    | "RG32UI"
    | "RG32F"
    | "RGB565"
    | "RGB8"
    | "RGB8_SNORM"
    | "RGB8I"
    | "RGB8UI"
    | "RGB16I"
    | "RGB16UI"
    | "RGB16F"
    | "RGB32I"
    | "RGB32UI"
    | "RGB32F"
    | "RGB9_E5"
    | "SRGB8"
    | "R11F_G11F_B10F"
    | "RGBA4"
    | "RGBA8"
    | "RGBA8_SNORM"
    | "RGBA8I"
    | "RGBA8UI"
    | "RGBA16I"
    | "RGBA16UI"
    | "RGBA16F"
    | "RGBA32I"
    | "RGBA32UI"
    | "RGBA32F"
    | "RGB5_A1"
    | "RGB10_A2"
    | "RGB10_A2UI"
    | "SRGB8_ALPHA8"
    | "SRGB8"
    | "DEPTH_COMPONENT16"
    | "DEPTH_COMPONENT24"
    | "DEPTH_COMPONENT32F"
    | "DEPTH24_STENCIL8"
    | "DEPTH32F_STENCIL8";
