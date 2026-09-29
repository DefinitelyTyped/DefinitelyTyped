import { DepthTexture, Node, NodeBuilder, NodeFrame, RenderTarget, ShadowNode } from "three/webgpu";
import { SunLight } from "./SunLight.js";
import { SunLightShadow } from "./SunLightShadow.js";

export function sunShadow(light: SunLight, shadow?: SunLightShadow | null): SunShadowNode;
/**
 * Represents the cascaded shadow map of a {@link SunLight}.
 *
 * The two cascade cameras are fitted by {@link SunLightShadow} and rendered
 * into the viewports of a single shadow map atlas. Each fragment walks the
 * cascades back to front, blending across the fade bands between them.
 *
 * @three_import import { sunShadow } from 'three/addons/lights/SunShadowNode.js';
 */
export class SunShadowNode extends ShadowNode {
    /**
     * Constructs a new sun shadow node.
     *
     * @param {SunLight} light - The shadow casting sun light.
     * @param {?SunLightShadow} [shadow=null] - An optional sun light shadow.
     */
    constructor(light: SunLight, shadow?: SunLightShadow | null);
    /**
     * Overwrites the default implementation to size the render target as the cascade atlas.
     *
     * @param {SunLightShadow} shadow - The light shadow object.
     * @param {NodeBuilder} builder - A reference to the current node builder.
     * @return {Object} An object containing the shadow map and depth texture.
     */
    setupRenderTarget(shadow: SunLightShadow, builder: NodeBuilder): {
        shadowMap: RenderTarget;
        depthTexture: DepthTexture;
    };
    /**
     * Sets up the atlas render target and shadow output node.
     *
     * @param {NodeBuilder} builder - A reference to the current node builder.
     * @return {Node<float>} The shadow output node.
     */
    setupShadow(builder: NodeBuilder): Node<"float">;
    /**
     * Renders the two cascades into the viewports of the shadow map atlas.
     *
     * @param {NodeFrame} frame - A reference to the current node frame.
     */
    renderShadow(frame: NodeFrame): void;
    /**
     * Overwritten as a no-op since VSM is not supported for cascaded shadow maps.
     *
     * @param {Renderer} renderer - A reference to the current renderer.
     */
    vsmPass(): void;
}
