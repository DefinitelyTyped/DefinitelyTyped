/**
 * Tests some webgl imports, and everything else that is not imported elsewhere.
 */

import * as Nodes from 'three/examples/jsm/nodes/Nodes';
import StorageBufferNode from 'three/examples/jsm/nodes/accessors/StorageBufferNode';
import * as NodeUtils from 'three/examples/jsm/nodes/core/NodeUtils';
import SlotNode from 'three/examples/jsm/renderers/webgl/nodes/SlotNode';
import { WebGLNodeBuilder } from 'three/examples/jsm/renderers/webgl/nodes/WebGLNodeBuilder';
import { nodeFrame } from 'three/examples/jsm/renderers/webgl/nodes/WebGLNodes';
import { HemisphereLight, Object3D, PointLight, WebGLRenderer } from 'three/src/Three';
import WebGLPhysicalContextNode from 'three/examples/jsm/renderers/webgl/nodes/WebGLPhysicalContextNode';

nodeFrame.update();
new WebGLNodeBuilder(new Object3D(), new WebGLRenderer(), { uniforms: [], vertexShader: [], fragmentShader: [] });
new StorageBufferNode([], 'float');
new SlotNode(new Nodes.ConstNode(1), 'OPACITY', 'float');

NodeUtils.getNodesKeys(new Nodes.ConstNode(1));
NodeUtils.getValueType(1);
NodeUtils.getValueFromType('color');
new WebGLPhysicalContextNode(WebGLPhysicalContextNode.RADIANCE, new Nodes.ConstNode(true));

Nodes.LightsNode.setReference(PointLight, Nodes.PunctualLightNode);
Nodes.LightsNode.setReference(HemisphereLight, Nodes.HemisphereLightNode);
