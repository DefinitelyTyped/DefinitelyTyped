import { Three } from "../../core/three";
import BaseRenderer from "../BaseRenderer";
import { DEFAULT_RENDERER_OPTIONS } from "./common/constants";
/**
 * Performant particle renderer that uses THREE.Points to propagate particle (postiion, rgba etc.,) properties to
 * vertices in a ParticleBufferGeometry.
 * Uses a dynamic texture atlas to support systems with mutliple sprites in a performant way.
 *
 * NOTE! This is an experimental renderer and is currently not covered by tests, coverage will be added when the API
 * is more stable. Currently only compatible with sprite/texture based systems. Meshes are not yet supported.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 */
export default class GPURenderer extends BaseRenderer {
    constructor(container: Container, THREE: Three, options?: typeof DEFAULT_RENDERER_OPTIONS | object);
    isFloatingPointTextureSupported(): boolean;
}

export type Container = THREE.Scene;

export * from "./Desktop";
export * from "./Mobile";
