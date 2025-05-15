import { GLSLVersion } from "../constants.js";
import { JSONMeta } from "../core/Object3D.js";
import { UniformsGroup } from "../core/UniformsGroup.js";
import { Matrix3, Matrix3Tuple } from "../math/Matrix3.js";
import { Matrix4, Matrix4Tuple } from "../math/Matrix4.js";
import { Vector2Tuple } from "../math/Vector2.js";
import { Vector3Tuple } from "../math/Vector3.js";
import { Vector4Tuple } from "../math/Vector4.js";
import { IUniform } from "../renderers/shaders/UniformsLib.js";
import { Material, MaterialJSON, MaterialParameters } from "./Material.js";

export interface ShaderMaterialParameters extends MaterialParameters {
    uniforms?: { [uniform: string]: IUniform } | undefined;
    uniformsGroups?: UniformsGroup[] | undefined;
    vertexShader?: string | undefined;
    fragmentShader?: string | undefined;
    linewidth?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    lights?: boolean | undefined;
    clipping?: boolean | undefined;
    fog?: boolean | undefined;
    extensions?:
        | {
            clipCullDistance?: boolean | undefined;
            multiDraw?: boolean | undefined;
        }
        | undefined;
    glslVersion?: GLSLVersion | undefined;
}

export type ShaderMaterialUniformJSON = {
    type: "t";
    value: string;
} | {
    type: "c";
    value: number;
} | {
    type: "v2";
    value: Vector2Tuple;
} | {
    type: "v3";
    value: Vector3Tuple;
} | {
    type: "v4";
    value: Vector4Tuple;
} | {
    type: "m3";
    value: Matrix3Tuple;
} | {
    type: "m4";
    value: Matrix4Tuple;
} | {
    value: unknown;
};

export interface ShaderMaterialJSON extends MaterialJSON {
    glslVersion: number | null;
    uniforms: Record<string, ShaderMaterialUniformJSON>;

    defines?: Record<string, unknown>;

    vertexShader: string;
    fragmentShader: string;

    lights: boolean;
    clipping: boolean;

    extensions?: Record<string, boolean>;
}

export class ShaderMaterial extends Material {
    constructor(parameters?: ShaderMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link ShaderMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isShaderMaterial: true;

    /**
     * @default {}
     */
    defines: { [key: string]: any };

    /**
     * @default {}
     */
    uniforms: { [uniform: string]: IUniform };

    uniformsGroups: UniformsGroup[];

    vertexShader: string;

    fragmentShader: string;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    /**
     * @default false
     */
    lights: boolean;

    /**
     * @default false
     */
    clipping: boolean;

    /**
     * @default {
     *   clipCullDistance: false,
     *   multiDraw: false
     * }
     */
    extensions: {
        clipCullDistance: boolean;
        multiDraw: boolean;
    };

    /**
     * @default { 'color': [ 1, 1, 1 ], 'uv': [ 0, 0 ], 'uv1': [ 0, 0 ] }
     */
    defaultAttributeValues: any;

    /**
     * @default undefined
     */
    index0AttributeName: string | undefined;

    /**
     * @default false
     */
    uniformsNeedUpdate: boolean;

    /**
     * @default null
     */
    glslVersion: GLSLVersion | null;

    setValues(parameters: ShaderMaterialParameters): void;

    toJSON(meta?: JSONMeta): ShaderMaterialJSON;
}
