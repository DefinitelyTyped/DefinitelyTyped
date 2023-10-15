import { WebGLRenderer } from './../WebGLRenderer.js';
import { WebGLProgram } from './WebGLProgram.js';
import { WebGLCapabilities } from './WebGLCapabilities.js';
import { WebGLCubeMaps } from './WebGLCubeMaps.js';
import { WebGLExtensions } from './WebGLExtensions.js';
import { WebGLClipping } from './WebGLClipping.js';
import { WebGLBindingStates } from './WebGLBindingStates.js';
import { Material } from './../../materials/Material.js';
import { Scene } from './../../scenes/Scene.js';

export class WebGLPrograms {
    constructor(
        renderer: WebGLRenderer,
        cubemaps: WebGLCubeMaps,
        extensions: WebGLExtensions,
        capabilities: WebGLCapabilities,
        bindingStates: WebGLBindingStates,
        clipping: WebGLClipping,
    );

    programs: WebGLProgram[];

    getParameters(material: Material, lights: any, shadows: object[], scene: Scene, object: any): any;
    getProgramCacheKey(parameters: any): string;
    getUniforms(material: Material): object;
    acquireProgram(parameters: any, cacheKey: string): WebGLProgram;
    releaseProgram(program: WebGLProgram): void;
}
