import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

export const materialRefractionRatio: UniformNode<"float", number>;

export const materialEnvIntensity: Node<"float">;

export const materialEnvRotation: Node<"mat4">;
