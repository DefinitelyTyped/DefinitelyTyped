/**
 * Tests some webgl imports, and everything else that is not imported elsewhere.
 */

import { HemisphereLight, Object3D, PointLight, WebGLRenderer } from "three";
import * as NodeUtils from "three/addons/nodes/core/NodeUtils.js";
import * as Nodes from "three/addons/nodes/Nodes.js";
import SlotNode from "three/addons/renderers/webgl/nodes/SlotNode.js";
import { WebGLNodeBuilder } from "three/addons/renderers/webgl/nodes/WebGLNodeBuilder.js";
import { nodeFrame } from "three/addons/renderers/webgl/nodes/WebGLNodes.js";

nodeFrame.update();
new WebGLNodeBuilder(new Object3D(), new WebGLRenderer(), { uniforms: [], vertexShader: [], fragmentShader: [] });
new SlotNode({
    node: new Nodes.ConstNode(1),
    nodeType: "float",
});

NodeUtils.getNodeChildren(new Nodes.ConstNode(1));
NodeUtils.getValueType(1);
NodeUtils.getValueFromType("color");

Nodes.LightsNode.setReference(PointLight, Nodes.PointLightNode);
Nodes.LightsNode.setReference(HemisphereLight, Nodes.HemisphereLightNode);
