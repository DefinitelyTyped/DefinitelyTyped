import Node from "../../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const getParallaxCorrectNormal: (
    normal: NodeRepresentation,
    cubeSize: NodeRepresentation,
    cubePos: NodeRepresentation,
) => ShaderNodeObject<Node>;

export default getParallaxCorrectNormal;
