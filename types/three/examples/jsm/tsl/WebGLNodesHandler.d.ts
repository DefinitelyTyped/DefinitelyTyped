import { Camera } from "../../../src/cameras/Camera.js";
import { Object3D } from "../../../src/core/Object3D.js";
import { Material } from "../../../src/materials/Material.js";
import { WebGLProgramParametersWithUniforms } from "../../../src/renderers/webgl/WebGLPrograms.js";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer.js";

export class WebGLNodesHandler {
    constructor();

    setRenderer(renderer: WebGLRenderer): void;
    renderStart(scene: Object3D, camera: Camera): void;
    renderEnd(): void;
    build(material: Material, object: Object3D, parameters: WebGLProgramParametersWithUniforms): void;
}
