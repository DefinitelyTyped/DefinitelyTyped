import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type PackingNodeScope = typeof PackingNode.DIRECTION_TO_COLOR | typeof PackingNode.COLOR_TO_DIRECTION;

declare class PackingNode extends TempNode {
    constructor(scope: PackingNodeScope, node: Node);

    static DIRECTION_TO_COLOR: "directionToColor";
    static COLOR_TO_DIRECTION: "colorToDirection";
}

export default PackingNode;

export const directionToColor: (node: NodeRepresentation) => ShaderNodeObject<PackingNode>;
export const colorToDirection: (node: NodeRepresentation) => ShaderNodeObject<PackingNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        directionToColor: typeof directionToColor;
        colorToDirection: typeof colorToDirection;
    }
}
