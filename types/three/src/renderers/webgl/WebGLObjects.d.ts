import { BufferGeometry } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { WebGLAttributes } from "./WebGLAttributes.js";
import { WebGLBindingStates } from "./WebGLBindingStates.js";
import { WebGLGeometries } from "./WebGLGeometries.js";
import { WebGLInfo } from "./WebGLInfo.js";

export class WebGLObjects {
    constructor(
        gl: WebGLRenderingContext,
        geometries: WebGLGeometries,
        attributes: WebGLAttributes,
        bindingStates: WebGLBindingStates,
        info: WebGLInfo,
    );

    update(object: Object3D): BufferGeometry;
    dispose(): void;
}
