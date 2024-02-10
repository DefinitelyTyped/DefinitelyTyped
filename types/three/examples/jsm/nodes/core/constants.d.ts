export enum NodeShaderStage {
    VERTEX = "vertex",
    FRAGMENT = "fragment",
}

export enum NodeUpdateType {
    NONE = "none",
    FRAME = "frame",
    RENDER = "render",
    OBJECT = "object",
}

export enum NodeType {
    BOOLEAN = "bool",
    INTEGER = "int",
    FLOAT = "float",
    VECTOR2 = "vec2",
    VECTOR3 = "vec3",
    VECTOR4 = "vec4",
    MATRIX2 = "mat2",
    MATRIX3 = "mat3",
    MATRIX4 = "mat4",
}

export type NodeTypeOption =
    | "bool"
    | "int"
    | "float"
    | "vec2"
    | "vec3"
    | "vec4"
    | "mat2"
    | "mat3"
    | "mat4"
    | "code" /* CodeNode */
    | "color" /* NodeUtis.getValueType */
    | "uint"
    | "int" /* NodeBuilder.getComponentType */
    | "void"
    | "property"
    | "sampler"
    | "texture"
    | "cubeTexture" /* NodeBuilder.isReference */
    | "ivec2"
    | "uvec2"
    | "bvec2" /* ShaderNodeBaseElements */
    | "ivec3"
    | "uvec3"
    | "bvec3"
    | "ivec4"
    | "uvec4"
    | "bvec4"
    | "imat3"
    | "umat3"
    | "bmat3"
    | "imat4"
    | "umat4"
    | "bmat4";

export type SwizzleCharacter = "x" | "y" | "z" | "w" | "r" | "g" | "b" | "a" | "s" | "t" | "p" | "q";

export type SwizzleOption = Exclude<
    | `${SwizzleCharacter}`
    | `${SwizzleCharacter}${SwizzleCharacter}`
    | `${SwizzleCharacter}${SwizzleCharacter}${SwizzleCharacter}`
    | `${SwizzleCharacter}${SwizzleCharacter}${SwizzleCharacter}${SwizzleCharacter}`,
    "abs" | "sqrt"
>;

/** Should be the same type as Object3D.userData */
export type NodeUserData = Record<string, any>;

/** generic key value type,curretly used by nodes  */
export interface AnyObject {
    [key: string]: any;
}

/** a generic JSON type, used by nodes only */
export type AnyJson = any;
