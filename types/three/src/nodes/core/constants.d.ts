/**
 * Possible shader stages.
 *
 * @property {string} VERTEX The vertex shader stage.
 * @property {string} FRAGMENT The fragment shader stage.
 */
export declare const NodeShaderStage: {
    readonly VERTEX: "vertex";
    readonly FRAGMENT: "fragment";
};
/**
 * Update types of a node.
 *
 * @property {string} NONE The update method is not executed.
 * @property {string} FRAME The update method is executed per frame.
 * @property {string} RENDER The update method is executed per render. A frame might be produced by multiple render calls so this value allows more detailed updates than FRAME.
 * @property {string} OBJECT The update method is executed per {@link Object3D} that uses the node for rendering.
 */
export declare const NodeUpdateType: {
    readonly NONE: "none";
    readonly FRAME: "frame";
    readonly RENDER: "render";
    readonly OBJECT: "object";
};
/**
 * Data types of a node.
 *
 * @property {string} BOOLEAN Boolean type.
 * @property {string} INTEGER Integer type.
 * @property {string} FLOAT Float type.
 * @property {string} VECTOR2 Two-dimensional vector type.
 * @property {string} VECTOR3 Three-dimensional vector type.
 * @property {string} VECTOR4 Four-dimensional vector type.
 * @property {string} MATRIX2 2x2 matrix type.
 * @property {string} MATRIX3 3x3 matrix type.
 * @property {string} MATRIX4 4x4 matrix type.
 */
export declare const NodeType: {
    readonly BOOLEAN: "bool";
    readonly INTEGER: "int";
    readonly FLOAT: "float";
    readonly VECTOR2: "vec2";
    readonly VECTOR3: "vec3";
    readonly VECTOR4: "vec4";
    readonly MATRIX2: "mat2";
    readonly MATRIX3: "mat3";
    readonly MATRIX4: "mat4";
};
/**
 * Access types of a node. These are relevant for compute and storage usage.
 *
 * @property {string} READ_ONLY Read-only access
 * @property {string} WRITE_ONLY Write-only access.
 * @property {string} READ_WRITE Read and write access.
 */
export declare const NodeAccess: {
    readonly READ_ONLY: "readOnly";
    readonly WRITE_ONLY: "writeOnly";
    readonly READ_WRITE: "readWrite";
};
export type NodeShaderStage = "vertex" | "fragment" | "compute";
export type NodeUpdateType = "none" | "frame" | "render" | "object";
export type NodeAccess = "readOnly" | "writeOnly" | "readWrite";
export declare const defaultShaderStages: NodeShaderStage[];
export declare const defaultBuildStages: string[];
export declare const shaderStages: NodeShaderStage[];
export declare const vectorComponents: string[];
