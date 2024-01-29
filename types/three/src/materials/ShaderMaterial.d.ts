import { IUniform } from '../renderers/shaders/UniformsLib.js';
import { MaterialParameters, Material } from './Material.js';
import { GLSLVersion } from '../constants.js';
import { UniformsGroup } from '../core/UniformsGroup.js';

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
              derivatives?: boolean | undefined;
              fragDepth?: boolean | undefined;
              drawBuffers?: boolean | undefined;
              shaderTextureLOD?: boolean | undefined;
          }
        | undefined;
    glslVersion?: GLSLVersion | undefined;
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
     * @default 'ShaderMaterial'
     */
    type: string;

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
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
     */
    derivatives: any;

    /**
     * @default { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false, clipCullDistance: false }
     */
    extensions: {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
        clipCullDistance: boolean;
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
    toJSON(meta: any): any;
}
