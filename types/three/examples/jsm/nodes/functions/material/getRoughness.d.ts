import Node from "../../core/Node.js";
import MathNode from "../../math/MathNode.js";
import { ShaderNodeObject } from "../../shadernode/ShaderNode.js";

declare const getRoughness: (args: { roughness: Node }) => ShaderNodeObject<MathNode>;

export default getRoughness;
