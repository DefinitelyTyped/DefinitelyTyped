import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

declare class ShadowBaseNode extends Node {
    light: Light;

    readonly isShadowBasedNode: true;

    constructor(light: Light);

    setupShadowPosition(builder: NodeBuilder): void;
}

export const shadowPositionWorld: Node;

export default ShadowBaseNode;
