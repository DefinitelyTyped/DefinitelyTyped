import { AnalyticLightNode, Node } from "three/webgpu";
import { LightProbeGrid } from "../../lighting/LightProbeGrid.js";

export const ATLAS_PADDING: number;

/**
 * Returns the irradiance of a baked {@link LightProbeGrid} at the given world-space
 * position and normal. Use this to evaluate the grid outside of the lighting context,
 * e.g. when baking light maps with {@link LightMapper}.
 *
 * @param {LightProbeGrid} light - The baked light probe grid.
 * @param {Node<vec3>} position - The world-space position.
 * @param {Node<vec3>} normal - The world-space normal.
 * @return {Node<vec3>} The irradiance.
 */
export function lightProbeGridIrradiance(
    light: LightProbeGrid,
    position: Node<"vec3">,
    normal: Node<"vec3">,
): Node<"vec3">;

export class LightProbeGridNode extends AnalyticLightNode<LightProbeGrid> {
    constructor(light?: LightProbeGrid | null);
}
