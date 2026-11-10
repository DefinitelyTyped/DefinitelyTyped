import { AnalyticLightNode, Node } from "three/webgpu";
import { SunLight } from "./SunLight.js";
import { SunShadowNode } from "./SunShadowNode.js";

/**
 * Module for representing sun lights as nodes. Register it with {@link SunLight}
 * to use the light with `WebGPURenderer`:
 * ```js
 * SunLight.registerNode( SunLightNode );
 * ```
 *
 * @three_import import { SunLightNode } from 'three/addons/lights/SunLightNode.js';
 */
export class SunLightNode extends AnalyticLightNode<SunLight> {
    /**
     * Overwritten to setup the cascaded shadows of sun lights.
     *
     * @return {SunShadowNode} The created shadow node.
     */
    setupShadowNode(): SunShadowNode;
    setupDirect(): {
        lightDirection: Node<"vec3">;
        lightColor: Node;
    };
}
