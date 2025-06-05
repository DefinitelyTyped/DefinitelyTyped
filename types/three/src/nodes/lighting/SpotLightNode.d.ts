import { SpotLight } from "../../lights/SpotLight.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

declare class SpotLightNode extends AnalyticLightNode<SpotLight> {
    directionNode: Node;

    coneCosNode: Node;
    penumbraCosNode: Node;

    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    colorNode: Node;

    constructor(light?: SpotLight | null);

    getLightCoord(builder: NodeBuilder): ShaderNodeObject<Node>;
}

declare module "three" {
    export interface SpotLight {
        attenuationNode?: ((lightNode: SpotLightNode) => Node) | null | undefined;
    }
}

export default SpotLightNode;
