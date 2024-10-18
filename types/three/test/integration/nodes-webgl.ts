/**
 * Tests some webgl imports, and everything else that is not imported elsewhere.
 */

import { ConstNode, NodeUtils } from "three/webgpu";

NodeUtils.getNodeChildren(new ConstNode(1));
NodeUtils.getValueType(1);
NodeUtils.getValueFromType("color");
