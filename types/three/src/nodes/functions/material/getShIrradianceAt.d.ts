import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const getShIrradianceAt: (normal: Node, shCoefficients: Node) => ShaderNodeObject<Node>;

export default getShIrradianceAt;
