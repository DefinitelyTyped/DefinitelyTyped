import { Matrix4 } from "../../math/Matrix4.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const materialRefractionRatio: ShaderNodeObject<UniformNode<number>>;

export const materialEnvIntensity: ShaderNodeObject<UniformNode<number>>;

export const materialEnvRotation: ShaderNodeObject<UniformNode<Matrix4>>;
