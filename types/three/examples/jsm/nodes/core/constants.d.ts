import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from '../../../../src/Three';

// disable automatic export, we have some private declarations
export const NodeShaderStage: {
    VERTEX: 'vertex';
    FRAGMENT: 'fragment';
};

export const NodeUpdateType: {
    NONE: 'none';
    FRAME: 'frame';
    RENDER: 'render';
    OBJECT: 'object';
};

export type NodeValueOption = Color | Vector2 | Vector3 | Vector4 | Matrix3 | Matrix4 | boolean | number;
export type NodeUpdateTypeOption = 'none' | 'frame' | 'object';
export type NodeShaderStageOption = 'vertex' | 'fragment' | 'compute';
export type NodeTypeOption =
    | 'bool'
    | 'int'
    | 'float'
    | 'vec2'
    | 'vec3'
    | 'vec4'
    | 'mat3'
    | 'mat4'
    | 'code' /* CodeNode */
    | 'color' /* NodeUtis.getValueType */
    | 'uint'
    | 'int' /* NodeBuilder.getComponentType */
    | 'void'
    | 'property'
    | 'sampler'
    | 'texture'
    | 'cubeTexture' /* NodeBuilder.isReference */
    | 'ivec2'
    | 'uvec2'
    | 'bvec2' /* ShaderNodeBaseElements */
    | 'ivec3'
    | 'uvec3'
    | 'bvec3'
    | 'ivec4'
    | 'uvec4'
    | 'bvec4'
    | 'imat3'
    | 'umat3'
    | 'bmat3'
    | 'imat4'
    | 'umat4'
    | 'bmat4';

// can be defined with string template type in Typescript 4.1
export type SwizzleOption = string;

/** Should be the same type as Object3D.userData */
export interface NodeUserData {
    [key: string]: any;
}

/** generic key value type,curretly used by nodes  */
export interface AnyObject {
    [key: string]: any;
}

/** a generic JSON type, used by nodes only */
export type AnyJson = any;

export const NodeType: {
    BOOLEAN: 'bool';
    INTEGER: 'int';
    FLOAT: 'float';
    VECTOR2: 'vec2';
    VECTOR3: 'vec3';
    VECTOR4: 'vec4';
    MATRIX3: 'mat3';
    MATRIX4: 'mat4';
};
