import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const getParallaxCorrectNormal: (
    normal: Node,
    cubeSize: Node,
    cubePos: Node,
) => ShaderNodeObject<Node>;

export default getParallaxCorrectNormal;
