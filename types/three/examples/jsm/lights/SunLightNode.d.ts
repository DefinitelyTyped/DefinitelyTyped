import { AnalyticLightNode, Node } from "three/webgpu";
import { SunLight } from "./SunLight.js";
import { SunShadowNode } from "./SunShadowNode.js";

/**
 * Module for representing sun lights as nodes. Register it with the
 * renderer's node library to use {@link SunLight} with `WebGPURenderer`:
 * ```js
 * renderer.library.addLight( SunLightNode, SunLight );
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
