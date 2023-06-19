import type { Camera, Points, Scene, ShaderMaterial } from 'three';
import { Particle, Pool, System } from '../../../core';
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
    camera: Camera;
    targetPool: Pool;
    uniqueList: UniqueList;
    particleBuffer: ParticleBuffer;
    buffer: ParticleBuffer;
    stride: ParticleBuffer;
    geometry: ParticleBuffer;
    material: ShaderMaterial;
    points: Points;
    shouldDebugTextureAtlas: boolean;
    onSystemUpdate(system: System): void;
    /**
     * Pools the particle target if it does not exist.
     * Updates the target and maps particle properties to the point.
     *
     * @param {Particle}
     */
    onParticleCreated(particle: Particle): void;
    /**
     * Maps particle properties to the point if the particle has a target.
     *
     * @param {Particle}
     */
    onParticleUpdate(particle: Particle): void;
    /**
     * Resets and clears the particle target.
     *
     * @param {Particle}
     */
    onParticleDead(particle: Particle): void;
    /**
     * Maps all mutable properties from the particle to the target.
     *
     * @param {Particle}
     * @return {DesktopGPURenderer}
     */
    updateTarget(particle: Particle): DesktopGPURenderer;
    /**
     * Entry point for mapping particle properties to buffer geometry points.
     *
     * @param {Particle} particle - The particle containing the properties to map
     * @return {DesktopGPURenderer}
     */
    mapParticleTargetPropsToPoint(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point's position according to the particle's target position.
     *
     * @param {Particle} particle - The particle containing the target position.
     * @return {DesktopGPURenderer}
     */
    updatePointPosition(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point's size relative to the particle's target scale and radius.
     *
     * @param {Particle} particle - The particle containing the target scale.
     * @return {DesktopGPURenderer}
     */
    updatePointSize(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point's color attribute according with the particle's target color.
     *
     * @param {Particle} particle - The particle containing the target color and alpha.
     * @return {DesktopGPURenderer}
     */
    updatePointColor(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point alpha attribute with the particle's target alpha.
     *
     * @param {Particle} particle - The particle containing the target alpha.
     * @return {DesktopGPURenderer}
     */
    updatePointAlpha(particle: Particle): DesktopGPURenderer;
    /**
     * Updates the point texture attribute with the particle's target texture.
     *
     * @param {Particle} particle - The particle containing the target texture.
     * @return {DesktopGPURenderer}
     */
    updatePointTextureIndex(particle: Particle): DesktopGPURenderer;
    getTextureID(texture: TextureAtlas): number;
    /**
     * Tears down the GPURenderer.
     *
     * @return void
     */
    destroy(): void;
}

export type Three = typeof import('three');

export type Container = object & {
    scene: Scene;
};
