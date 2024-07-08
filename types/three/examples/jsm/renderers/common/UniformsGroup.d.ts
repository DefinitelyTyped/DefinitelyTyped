import {
    ColorNodeUniform,
    Matrix3NodeUniform,
    Matrix4NodeUniform,
    NodeUniformGPU,
    NumberNodeUniform,
    Vector2NodeUniform,
    Vector3NodeUniform,
    Vector4NodeUniform,
} from "./nodes/NodeUniform.js";
import UniformBuffer from "./UniformBuffer.js";
declare class UniformsGroup extends UniformBuffer {
    readonly isUniformsGroup: true;
    _values: number[] | null;
    uniforms: NodeUniformGPU[];
    constructor(name?: string);
    addUniform(uniform: NodeUniformGPU): this;
    removeUniform(uniform: NodeUniformGPU): this;
    get values(): number[];
    get buffer(): Float32Array;
    get byteLength(): number;
    update(): boolean;
    updateByType(uniform: NodeUniformGPU): boolean | undefined;
    updateNumber(uniform: NumberNodeUniform): boolean;
    updateVector2(uniform: Vector2NodeUniform): boolean;
    updateVector3(uniform: Vector3NodeUniform): boolean;
    updateVector4(uniform: Vector4NodeUniform): boolean;
    updateColor(uniform: ColorNodeUniform): boolean;
    updateMatrix3(uniform: Matrix3NodeUniform): boolean;
    updateMatrix4(uniform: Matrix4NodeUniform): boolean;
}
export default UniformsGroup;
