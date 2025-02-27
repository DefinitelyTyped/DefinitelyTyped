import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ShadowBaseNode extends Node {
    light: Light;

    readonly isShadowBasedNode: true;

    constructor(light: Light);

    setupShadowPosition(builder: NodeBuilder): void;
}

export const shadowPositionWorld: ShaderNodeObject<Node>;

export default ShadowBaseNode;
