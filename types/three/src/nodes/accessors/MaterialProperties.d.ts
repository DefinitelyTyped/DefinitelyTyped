import { Matrix4 } from "../../math/Matrix4.js";
import UniformNode from "../core/UniformNode.js";

export const materialRefractionRatio: UniformNode<number>;

export const materialEnvIntensity: UniformNode<number>;

export const materialEnvRotation: UniformNode<Matrix4>;
