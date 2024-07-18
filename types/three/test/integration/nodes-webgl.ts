/**
 * Tests some webgl imports, and everything else that is not imported elsewhere.
 */

import { HemisphereLight, PointLight } from "three";
import * as NodeUtils from "three/addons/nodes/core/NodeUtils.js";
import * as Nodes from "three/addons/nodes/Nodes.js";

NodeUtils.getNodeChildren(new Nodes.ConstNode(1));
NodeUtils.getValueType(1);
NodeUtils.getValueFromType("color");

Nodes.LightsNode.setReference(PointLight, Nodes.PointLightNode);
Nodes.LightsNode.setReference(HemisphereLight, Nodes.HemisphereLightNode);
