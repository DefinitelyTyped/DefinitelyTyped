import { Particle, Pool, System } from '../../../core';
import { Three } from '../../../core/three';
import BaseRenderer from '../../BaseRenderer';
import { ParticleBuffer, TextureAtlas, UniqueList } from '../common';
import { DEFAULT_RENDERER_OPTIONS } from '../common/constants';

/**
 * GPURenderer for devices that support floating point textures.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 */
export default class DesktopGPURenderer extends BaseRenderer {
    constructor(container: Container, three: Three, options: typeof DEFAULT_RENDERER_OPTIONS | object);
    container: Container;
    three: Three;
    camera: THREE.Camera;
    targetPool: Pool;
    uniqueList: UniqueList;
    particleBuffer: ParticleBuffer;
    buffer: ParticleBuffer;
    stride: ParticleBuffer;
    geometry: ParticleBuffer;
    material: THREE.ShaderMaterial;
    points: THREE.Points;
    shouldDebugTextureAtlas: boolean;
    onSystemUpdate(system: System): void;
    /**
     * Pools the particle target if it does not exist.
     * Updates the target and maps particle properties to the point.
     *
     */
    onParticleCreated(particle: Particle): void;
    /**
     * Maps particle properties to the point if the particle has a target.
     *
     */
    onParticleUpdate(particle: Particle): void;
    /**
     * Resets and clears the particle target.
     *
     */
    onParticleDead(particle: Particle): void;
    /**
     * Maps all mutable properties from the particle to the target.
     *
     */
    updateTarget(particle: Particle): DesktopGPURenderer;
    /**
     * Entry point for mapping particle properties to buffer geometry points.
     *
     */
    mapParticleTargetPropsToPoint(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point's position according to the particle's target position.
     *
     */
    updatePointPosition(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point's size relative to the particle's target scale and radius.
     *
     */
    updatePointSize(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point's color attribute according with the particle's target color.
     *
     */
    updatePointColor(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point alpha attribute with the particle's target alpha.
     *
     */
    updatePointAlpha(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point texture attribute with the particle's target texture.
     *
     */
    updatePointTextureIndex(particle: Particle): DesktopGPURenderer;
    getTextureID(texture: TextureAtlas): number;
    /**
     * Tears down the GPURenderer.
     *
     */
    destroy(): void;
}

export type Container = THREE.Scene;

export * from './shaders';
