import { Node } from "three/webgpu";
import { VXGIVolume } from "./VXGIVolume.js";

/**
 * Creates a world-space diffuse irradiance sampler for a prepared {@link VXGIVolume}.
 * Call `volume.update( renderer, scene )` before baking. The sampler traces cosine-weighted
 * cones through the volume's radiance, including cached bounces.
 * It can be passed directly to {@link LightMapper}, without a screen-space pass.
 * The cones are rotated per pixel with interleaved gradient noise like `VXGINode`. When baking, the
 * pixel is the light map texel. The optional sample index shifts the noise so that accumulated
 * samples, or a temporal filter like TRAA, converge.
 *
 * @param {VXGIVolume} volume - The prepared voxel volume.
 * @param {Object} [options] - Options.
 * @param {number} [options.coneCount=8] - The number of cones per sample. Fewer cones are faster but coarser.
 * @return {function(Node<vec3>, Node<vec3>, ?Node<float>): Node<vec3>} The irradiance sampler.
 */
export function vxgiIrradiance(volume: VXGIVolume, { coneCount }?: {
    coneCount?: number | undefined;
}): (position: Node<"vec3">, normal: Node<"vec3">, sample?: Node<"float">) => Node<"vec3">;
