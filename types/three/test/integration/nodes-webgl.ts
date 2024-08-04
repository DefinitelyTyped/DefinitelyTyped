/**
 * Tests some webgl imports, and everything else that is not imported elsewhere.
 */

import {
    ConstNode,
    HemisphereLight,
    HemisphereLightNode,
    LightsNode,
    NodeUtils,
    PointLight,
    PointLightNode,
} from "three/webgpu";

NodeUtils.getNodeChildren(new ConstNode(1));
NodeUtils.getValueType(1);
NodeUtils.getValueFromType("color");

LightsNode.setReference(PointLight, PointLightNode);
LightsNode.setReference(HemisphereLight, HemisphereLightNode);
