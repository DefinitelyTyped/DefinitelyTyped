// Type definitions for glTF 2.0
// Project: https://github.com/KhronosGroup/glTF
// Definitions by: Gary Hsu <https://github.com/bghgary>
//                 Don McCurdy <https://github.com/donmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace GLTF;

/**
 * The datatype of the components in the attribute
 */
export type AccessorComponentType  = 5120 | 5121 | 5122 | 5123 | 5125 | 5126;
export namespace AccessorComponentType {
    /**
     * Byte
     */
    const BYTE = 5120;
    /**
     * Unsigned Byte
     */
    const UNSIGNED_BYTE = 5121;
    /**
     * Short
     */
    const SHORT = 5122;
    /**
     * Unsigned Short
     */
    const UNSIGNED_SHORT = 5123;
    /**
     * Unsigned Int
     */
    const UNSIGNED_INT = 5125;
    /**
     * Float
     */
    const FLOAT = 5126;
}
/**
 * Specifies if the attirbute is a scalar, vector, or matrix
 */
export type AccessorType = "SCALAR" | "VEC2" | "VEC3" | "VEC4" | "MAT2" | "MAT3" | "MAT4";
export namespace AccessorType {
    /**
     * Scalar
     */
    const SCALAR = "SCALAR";
    /**
     * Vector2
     */
    const VEC2 = "VEC2";
    /**
     * Vector3
     */
    const VEC3 = "VEC3";
    /**
     * Vector4
     */
    const VEC4 = "VEC4";
    /**
     * Matrix2x2
     */
    const MAT2 = "MAT2";
    /**
     * Matrix3x3
     */
    const MAT3 = "MAT3";
    /**
     * Matrix4x4
     */
    const MAT4 = "MAT4";
}
/**
 * The name of the node's TRS property to modify, or the weights of the Morph Targets it instantiates
 */
export type AnimationChannelTargetPath = "translation" | "rotation" | "scale" | "weights";
export namespace AnimationChannelTargetPath {
    /**
     * Translation
     */
    const TRANSLATION = "translation";
    /**
     * Rotation
     */
    const ROTATION = "rotation";
    /**
     * Scale
     */
    const SCALE = "scale";
    /**
     * Weights
     */
    const WEIGHTS = "weights";
}
/**
 * Interpolation algorithm
 */
export type AnimationSamplerInterpolation = "LINEAR" | "STEP" | "CUBICSPLINE";
export namespace AnimationSamplerInterpolation {
    /**
     * The animated values are linearly interpolated between keyframes
     */
    const LINEAR = "LINEAR";
    /**
     * The animated values remain constant to the output of the first keyframe, until the next keyframe
     */
    const STEP = "STEP";
    /**
     * The animation's interpolation is computed using a cubic spline with specified tangents
     */
    const CUBICSPLINE = "CUBICSPLINE";
}
/**
 * The target that the GPU buffer should be bound to
 */
export type BufferViewTarget = 34962 | 34963;
export namespace BufferViewTarget {
    /**
     * Buffer containing vertex attributes, such as vertex coordinates, texture coordinate data, or vertex color data
     */
    const ARRAY_BUFFER = 34962;
    /**
     * Buffer used for element indices
     */
    const ELEMENT_ARRAY_BUFFER = 34963;
}
/**
 * A camera's projection.  A node can reference a camera to apply a transform to place the camera in the scene
 */
export type CameraType = "perspective" | "orthographic";
export namespace CameraType {
    /**
     * A perspective camera containing properties to create a perspective projection matrix
     */
    const PERSPECTIVE = "perspective";
    /**
     * An orthographic camera containing properties to create an orthographic projection matrix
     */
    const ORTHOGRAPHIC = "orthographic";
}
/**
 * The mime-type of the image
 */
export type ImageMimeType = "image/jpeg" | "image/png";
export namespace ImageMimeType {
    /**
     * JPEG Mime-type
     */
    const JPEG = "image/jpeg";
    /**
     * PNG Mime-type
     */
    const PNG = "image/png";
}
/**
 * The alpha rendering mode of the material
 */
export type MaterialAlphaMode = "OPAQUE" | "MASK" | "BLEND";
export namespace MaterialAlphaMode {
    /**
     * The alpha value is ignored and the rendered output is fully opaque
     */
    const OPAQUE = "OPAQUE";
    /**
     * The rendered output is either fully opaque or fully transparent depending on the alpha value and the specified
     * alpha cutoff value
     */
    const MASK = "MASK";
    /**
     * The alpha value is used to composite the source and destination areas. The rendered output is combined with the
     * background using the normal painting operation (i.e. the Porter and Duff over operator)
     */
    const BLEND = "BLEND";
}
/**
 * The type of the primitives to render
 */
export type MeshPrimitiveMode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export namespace MeshPrimitiveMode {
    /**
     * Points
     */
    const POINTS = 0;
    /**
     * Lines
     */
    const LINES = 1;
    /**
     * Line Loop
     */
    const LINE_LOOP = 2;
    /**
     * Line Strip
     */
    const LINE_STRIP = 3;
    /**
     * Triangles
     */
    const TRIANGLES = 4;
    /**
     * Triangle Strip
     */
    const TRIANGLE_STRIP = 5;
    /**
     * Triangle Fan
     */
    const TRIANGLE_FAN = 6;
}
/**
 * Magnification filter.  Valid values correspond to WebGL enums: 9728 (NEAREST) and 9729 (LINEAR)
 */
export type TextureMagFilter = 9728 | 9729;
export namespace TextureMagFilter {
    /**
     * Nearest
     */
    const NEAREST = 9728;
    /**
     * Linear
     */
    const LINEAR = 9729;
}
/**
 * Minification filter.  All valid values correspond to WebGL enums
 */
export type TextureMinFilter = 9728 | 9729 | 9984 | 9985 | 9986 | 9987;
export namespace TextureMinFilter {
    /**
     * Nearest
     */
    const NEAREST = 9728;
    /**
     * Linear
     */
    const LINEAR = 9729;
    /**
     * Nearest Mip-Map Nearest
     */
    const NEAREST_MIPMAP_NEAREST = 9984;
    /**
     * Linear Mipmap Nearest
     */
    const LINEAR_MIPMAP_NEAREST = 9985;
    /**
     * Nearest Mipmap Linear
     */
    const NEAREST_MIPMAP_LINEAR = 9986;
    /**
     * Linear Mipmap Linear
     */
    const LINEAR_MIPMAP_LINEAR = 9987;
}
/**
 * S (U) wrapping mode.  All valid values correspond to WebGL enums
 */
export type TextureWrapMode = 33071 | 33648 | 10497;
export namespace TextureWrapMode {
    /**
     * Clamp to Edge
     */
    const CLAMP_TO_EDGE = 33071;
    /**
     * Mirrored Repeat
     */
    const MIRRORED_REPEAT = 33648;
    /**
     * Repeat
     */
    const REPEAT = 10497;
}
/**
 * glTF Property
 */
export interface IProperty {
    /**
     * Dictionary object with extension-specific objects
     */
    extensions?: {
    [key: string]: any;
    };
    /**
     * Application-Specific data
     */
    extras?: any;
}
/**
 * glTF Child of Root Property
 */
export interface IChildRootProperty extends IProperty {
    /**
     * The user-defined name of this object
     */
    name?: string;
}
/**
 * Indices of those attributes that deviate from their initialization value
 */
export interface IAccessorSparseIndices extends IProperty {
    /**
     * The index of the bufferView with sparse indices. Referenced bufferView can't have ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER target
     */
    bufferView: number;
    /**
     * The offset relative to the start of the bufferView in bytes. Must be aligned
     */
    byteOffset?: number;
    /**
     * The indices data type.  Valid values correspond to WebGL enums: 5121 (UNSIGNED_BYTE), 5123 (UNSIGNED_SHORT), 5125 (UNSIGNED_INT)
     */
    componentType: AccessorComponentType;
}
/**
 * Array of size accessor.sparse.count times number of components storing the displaced accessor attributes pointed by accessor.sparse.indices
 */
export interface IAccessorSparseValues extends IProperty {
    /**
     * The index of the bufferView with sparse values. Referenced bufferView can't have ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER target
     */
    bufferView: number;
    /**
     * The offset relative to the start of the bufferView in bytes. Must be aligned
     */
    byteOffset?: number;
}
/**
 * Sparse storage of attributes that deviate from their initialization value
 */
export interface IAccessorSparse extends IProperty {
    /**
     * The number of attributes encoded in this sparse accessor
     */
    count: number;
    /**
     * Index array of size count that points to those accessor attributes that deviate from their initialization value.
     * Indices must strictly increase
     */
    indices: IAccessorSparseIndices;
    /**
     * Array of size count times number of components, storing the displaced accessor attributes pointed by indices.
     * Substituted values must have the same componentType and number of components as the base accessor
     */
    values: IAccessorSparseValues;
}
/**
 * A typed view into a bufferView.  A bufferView contains raw binary data.  An accessor provides a typed view into a
 * bufferView or a subset of a bufferView similar to how WebGL's vertexAttribPointer() defines an attribute in a buffer
 */
export interface IAccessor extends IChildRootProperty {
    /**
     * The index of the bufferview
     */
    bufferView?: number;
    /**
     * The offset relative to the start of the bufferView in bytes
     */
    byteOffset?: number;
    /**
     * The datatype of components in the attribute
     */
    componentType: AccessorComponentType;
    /**
     * Specifies whether integer data values should be normalized
     */
    normalized?: boolean;
    /**
     * The number of attributes referenced by this accessor
     */
    count: number;
    /**
     * Specifies if the attribute is a scalar, vector, or matrix
     */
    type: AccessorType;
    /**
     * Maximum value of each component in this attribute
     */
    max?: number[];
    /**
     * Minimum value of each component in this attribute
     */
    min?: number[];
    /**
     * Sparse storage of attributes that deviate from their initialization value
     */
    sparse?: IAccessorSparse;
}
/**
 * Targets an animation's sampler at a node's property
 */
export interface IAnimationChannel extends IProperty {
    /**
     * The index of a sampler in this animation used to compute the value for the target
     */
    sampler: number;
    /**
     * The index of the node and TRS property to target
     */
    target: IAnimationChannelTarget;
}
/**
 * The index of the node and TRS property that an animation channel targets
 */
export interface IAnimationChannelTarget extends IProperty {
    /**
     * The index of the node to target
     */
    node: number;
    /**
     * The name of the node's TRS property to modify, or the weights of the Morph Targets it instantiates
     */
    path: AnimationChannelTargetPath;
}
/**
 * Combines input and output accessors with an interpolation algorithm to define a keyframe graph (but not its target)
 */
export interface IAnimationSampler extends IProperty {
    /**
     * The index of an accessor containing keyframe input values, e.g., time
     */
    input: number;
    /**
     * Interpolation algorithm
     */
    interpolation?: AnimationSamplerInterpolation;
    /**
     * The index of an accessor, containing keyframe output values
     */
    output: number;
}
/**
 * A keyframe animation
 */
export interface IAnimation extends IChildRootProperty {
    /**
     * An array of channels, each of which targets an animation's sampler at a node's property
     */
    channels: IAnimationChannel[];
    /**
     * An array of samplers that combines input and output accessors with an interpolation algorithm to define a keyframe graph (but not its target)
     */
    samplers: IAnimationSampler[];
}
/**
 * Metadata about the glTF asset
 */
export interface IAsset extends IChildRootProperty {
    /**
     * A copyright message suitable for display to credit the content creator
     */
    copyright?: string;
    /**
     * Tool that generated this glTF model.  Useful for debugging
     */
    generator?: string;
    /**
     * The glTF version that this asset targets
     */
    version: string;
    /**
     * The minimum glTF version that this asset targets
     */
    minVersion?: string;
}
/**
 * A buffer points to binary geometry, animation, or skins
 */
export interface IBuffer extends IChildRootProperty {
    /**
     * The uri of the buffer.  Relative paths are relative to the .gltf file.  Instead of referencing an external file, the uri can also be a data-uri
     */
    uri?: string;
    /**
     * The length of the buffer in bytes
     */
    byteLength: number;
}
/**
 * A view into a buffer generally representing a subset of the buffer
 */
export interface IBufferView extends IChildRootProperty {
    /**
     * The index of the buffer
     */
    buffer: number;
    /**
     * The offset into the buffer in bytes
     */
    byteOffset?: number;
    /**
     * The lenth of the bufferView in bytes
     */
    byteLength: number;
    /**
     * The stride, in bytes
     */
    byteStride?: number;
    /**
     * The target that the GPU buffer should be bound to
     */
    target?: BufferViewTarget;
}
/**
 * An orthographic camera containing properties to create an orthographic projection matrix
 */
export interface ICameraOrthographic extends IProperty {
    /**
     * The floating-point horizontal magnification of the view. Must not be zero
     */
    xmag: number;
    /**
     * The floating-point vertical magnification of the view. Must not be zero
     */
    ymag: number;
    /**
     * The floating-point distance to the far clipping plane. zfar must be greater than znear
     */
    zfar: number;
    /**
     * The floating-point distance to the near clipping plane
     */
    znear: number;
}
/**
 * A perspective camera containing properties to create a perspective projection matrix
 */
export interface ICameraPerspective extends IProperty {
    /**
     * The floating-point aspect ratio of the field of view
     */
    aspectRatio?: number;
    /**
     * The floating-point vertical field of view in radians
     */
    yfov: number;
    /**
     * The floating-point distance to the far clipping plane
     */
    zfar?: number;
    /**
     * The floating-point distance to the near clipping plane
     */
    znear: number;
}
/**
 * A camera's projection.  A node can reference a camera to apply a transform to place the camera in the scene
 */
export interface ICamera extends IChildRootProperty {
    /**
     * An orthographic camera containing properties to create an orthographic projection matrix
     */
    orthographic?: ICameraOrthographic;
    /**
     * A perspective camera containing properties to create a perspective projection matrix
     */
    perspective?: ICameraPerspective;
    /**
     * Specifies if the camera uses a perspective or orthographic projection
     */
    type: CameraType;
}
/**
 * Image data used to create a texture. Image can be referenced by URI or bufferView index. mimeType is required in the latter case
 */
export interface IImage extends IChildRootProperty {
    /**
     * The uri of the image.  Relative paths are relative to the .gltf file.  Instead of referencing an external file, the uri can also be a data-uri.  The image format must be jpg or png
     */
    uri?: string;
    /**
     * The image's MIME type
     */
    mimeType?: ImageMimeType;
    /**
     * The index of the bufferView that contains the image. Use this instead of the image's uri property
     */
    bufferView?: number;
}
/**
 * Material Normal Texture Info
 */
export interface IMaterialNormalTextureInfo extends ITextureInfo {
    /**
     * The scalar multiplier applied to each normal vector of the normal texture
     */
    scale?: number;
}
/**
 * Material Occlusion Texture Info
 */
export interface IMaterialOcclusionTextureInfo extends ITextureInfo {
    /**
     * A scalar multiplier controlling the amount of occlusion applied
     */
    strength?: number;
}
/**
 * A set of parameter values that are used to define the metallic-roughness material model from Physically-Based Rendering (PBR) methodology
 */
export interface IMaterialPbrMetallicRoughness {
    /**
     * The material's base color factor
     */
    baseColorFactor?: number[];
    /**
     * The base color texture
     */
    baseColorTexture?: ITextureInfo;
    /**
     * The metalness of the material
     */
    metallicFactor?: number;
    /**
     * The roughness of the material
     */
    roughnessFactor?: number;
    /**
     * The metallic-roughness texture
     */
    metallicRoughnessTexture?: ITextureInfo;
}
/**
 * The material appearance of a primitive
 */
export interface IMaterial extends IChildRootProperty {
    /**
     * A set of parameter values that are used to define the metallic-roughness material model from Physically-Based
     * Rendering (PBR) methodology. When not specified, all the default values of pbrMetallicRoughness apply
     */
    pbrMetallicRoughness?: IMaterialPbrMetallicRoughness;
    /**
     * The normal map texture
     */
    normalTexture?: IMaterialNormalTextureInfo;
    /**
     * The occlusion map texture
     */
    occlusionTexture?: IMaterialOcclusionTextureInfo;
    /**
     * The emissive map texture
     */
    emissiveTexture?: ITextureInfo;
    /**
     * The RGB components of the emissive color of the material. These values are linear. If an emissiveTexture is specified, this value is multiplied with the texel values
     */
    emissiveFactor?: number[];
    /**
     * The alpha rendering mode of the material
     */
    alphaMode?: MaterialAlphaMode;
    /**
     * The alpha cutoff value of the material
     */
    alphaCutoff?: number;
    /**
     * Specifies whether the material is double sided
     */
    doubleSided?: boolean;
}
/**
 * Geometry to be rendered with the given material
 */
export interface IMeshPrimitive extends IProperty {
    /**
     * A dictionary object, where each key corresponds to mesh attribute semantic and each value is the index of the accessor containing attribute's data
     */
    attributes: {
    [name: string]: number;
    };
    /**
     * The index of the accessor that contains the indices
     */
    indices?: number;
    /**
     * The index of the material to apply to this primitive when rendering
     */
    material?: number;
    /**
     * The type of primitives to render. All valid values correspond to WebGL enums
     */
    mode?: MeshPrimitiveMode;
    /**
     * An array of Morph Targets, each  Morph Target is a dictionary mapping attributes (only POSITION, NORMAL, and TANGENT supported) to their deviations in the Morph Target
     */
    targets?: Array<{
    [name: string]: number;
    }>;
}
/**
 * A set of primitives to be rendered.  A node can contain one mesh.  A node's transform places the mesh in the scene
 */
export interface IMesh extends IChildRootProperty {
    /**
     * An array of primitives, each defining geometry to be rendered with a material
     */
    primitives: IMeshPrimitive[];
    /**
     * Array of weights to be applied to the Morph Targets
     */
    weights?: number[];
}
/**
 * A node in the node hierarchy
 */
export interface INode extends IChildRootProperty {
    /**
     * The index of the camera referenced by this node
     */
    camera?: number;
    /**
     * The indices of this node's children
     */
    children?: number[];
    /**
     * The index of the skin referenced by this node
     */
    skin?: number;
    /**
     * A floating-point 4x4 transformation matrix stored in column-major order
     */
    matrix?: number[];
    /**
     * The index of the mesh in this node
     */
    mesh?: number;
    /**
     * The node's unit quaternion rotation in the order (x, y, z, w), where w is the scalar
     */
    rotation?: number[];
    /**
     * The node's non-uniform scale, given as the scaling factors along the x, y, and z axes
     */
    scale?: number[];
    /**
     * The node's translation along the x, y, and z axes
     */
    translation?: number[];
    /**
     * The weights of the instantiated Morph Target. Number of elements must match number of Morph Targets of used mesh
     */
    weights?: number[];
}
/**
 * Texture sampler properties for filtering and wrapping modes
 */
export interface ISampler extends IChildRootProperty {
    /**
     * Magnification filter.  Valid values correspond to WebGL enums: 9728 (NEAREST) and 9729 (LINEAR)
     */
    magFilter?: TextureMagFilter;
    /**
     * Minification filter.  All valid values correspond to WebGL enums
     */
    minFilter?: TextureMinFilter;
    /**
     * S (U) wrapping mode.  All valid values correspond to WebGL enums
     */
    wrapS?: TextureWrapMode;
    /**
     * T (V) wrapping mode.  All valid values correspond to WebGL enums
     */
    wrapT?: TextureWrapMode;
}
/**
 * The root nodes of a scene
 */
export interface IScene extends IChildRootProperty {
    /**
     * The indices of each root node
     */
    nodes: number[];
}
/**
 * Joints and matrices defining a skin
 */
export interface ISkin extends IChildRootProperty {
    /**
     * The index of the accessor containing the floating-point 4x4 inverse-bind matrices.  The default is that each
     * matrix is a 4x4 identity matrix, which implies that inverse-bind matrices were pre-applied
     */
    inverseBindMatrices?: number;
    /**
     * The index of the node used as a skeleton root. When undefined, joints transforms resolve to scene root
     */
    skeleton?: number;
    /**
     * Indices of skeleton nodes, used as joints in this skin.  The array length must be the same as the count property
     * of the inverseBindMatrices accessor (when defined)
     */
    joints: number[];
}
/**
 * A texture and its sampler
 */
export interface ITexture extends IChildRootProperty {
    /**
     * The index of the sampler used by this texture. When undefined, a sampler with repeat wrapping and auto filtering
     * should be used
     */
    sampler?: number;
    /**
     * The index of the image used by this texture
     */
    source: number;
}
/**
 * Reference to a texture
 */
export interface ITextureInfo {
    /**
     * The index of the texture
     */
    index: number;
    /**
     * The set index of texture's TEXCOORD attribute used for texture coordinate mapping
     */
    texCoord?: number;
}
/**
 * The root object for a glTF asset
 */
export interface IGLTF extends IProperty {
    /**
     * An array of accessors. An accessor is a typed view into a bufferView
     */
    accessors?: IAccessor[];
    /**
     * An array of keyframe animations
     */
    animations?: IAnimation[];
    /**
     * Metadata about the glTF asset
     */
    asset: IAsset;
    /**
     * An array of buffers.  A buffer points to binary geometry, animation, or skins
     */
    buffers?: IBuffer[];
    /**
     * An array of bufferViews.  A bufferView is a view into a buffer generally representing a subset of the buffer
     */
    bufferViews?: IBufferView[];
    /**
     * An array of cameras
     */
    cameras?: ICamera[];
    /**
     * Names of glTF extensions used somewhere in this asset
     */
    extensionsUsed?: string[];
    /**
     * Names of glTF extensions required to properly load this asset
     */
    extensionsRequired?: string[];
    /**
     * An array of images.  An image defines data used to create a texture
     */
    images?: IImage[];
    /**
     * An array of materials.  A material defines the appearance of a primitive
     */
    materials?: IMaterial[];
    /**
     * An array of meshes.  A mesh is a set of primitives to be rendered
     */
    meshes?: IMesh[];
    /**
     * An array of nodes
     */
    nodes?: INode[];
    /**
     * An array of samplers.  A sampler contains properties for texture filtering and wrapping modes
     */
    samplers?: ISampler[];
    /**
     * The index of the default scene
     */
    scene?: number;
    /**
     * An array of scenes
     */
    scenes?: IScene[];
    /**
     * An array of skins.  A skin is defined by joints and matrices
     */
    skins?: ISkin[];
    /**
     * An array of textures
     */
    textures?: ITexture[];
}
