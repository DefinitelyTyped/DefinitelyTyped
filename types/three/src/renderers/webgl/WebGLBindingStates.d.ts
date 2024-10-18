import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import { WebGLAttributes } from "./WebGLAttributes.js";
import { WebGLProgram } from "./WebGLProgram.js";

export class WebGLBindingStates {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes);

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
