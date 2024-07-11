export declare const NodeShaderStage: {
    readonly VERTEX: "vertex";
    readonly FRAGMENT: "fragment";
};
export declare const NodeUpdateType: {
    readonly NONE: "none";
    readonly FRAME: "frame";
    readonly RENDER: "render";
    readonly OBJECT: "object";
};
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
export type NodeShaderStage = "vertex" | "fragment" | "compute";
export type NodeUpdateType = "none" | "frame" | "render" | "object";
export declare const defaultShaderStages: NodeShaderStage[];
export declare const defaultBuildStages: string[];
export declare const shaderStages: NodeShaderStage[];
export declare const vectorComponents: string[];
