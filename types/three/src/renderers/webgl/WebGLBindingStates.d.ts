import { WebGLExtensions } from './WebGLExtensions.js';
import { WebGLAttributes } from './WebGLAttributes.js';
import { WebGLProgram } from './WebGLProgram.js';
import { WebGLCapabilities } from './WebGLCapabilities.js';
import { Object3D } from './../../core/Object3D.js';
import { BufferGeometry } from './../../core/BufferGeometry.js';
import { BufferAttribute } from './../../core/BufferAttribute.js';
import { Material } from './../../materials/Material.js';

export class WebGLBindingStates {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        attributes: WebGLAttributes,
        capabilities: WebGLCapabilities,
    );

    setup(
        object: Object3D,
        material: Material,
        program: WebGLProgram,
        geometry: BufferGeometry,
        index: BufferAttribute,
    ): void;
    reset(): void;
    resetDefaultState(): void;
    dispose(): void;
    releaseStatesOfGeometry(): void;
    releaseStatesOfProgram(): void;
    initAttributes(): void;
    enableAttribute(attribute: number): void;
    disableUnusedAttributes(): void;
}
