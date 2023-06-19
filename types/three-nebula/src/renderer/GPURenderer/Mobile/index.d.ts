import { Camera, Points, ShaderMaterial } from 'three';
import { Particle, Pool } from '../../../core';
import BaseRenderer from '../../BaseRenderer';
import { Container, Three } from '../Desktop';
import { ParticleBuffer, TextureAtlas, UniqueList } from '../common';
import { DEFAULT_RENDERER_OPTIONS } from '../common/constants';
/**
 * GPURenderer for mobile devices that do not support floating point textures.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 */
export default class MobileGPURenderer extends BaseRenderer {
    constructor(container: Container, three: Three, options: typeof DEFAULT_RENDERER_OPTIONS | object);
    three: Three;
    camera: Camera;
    targetPool: Pool;
    uniqueList: UniqueList;
    particleBuffer: ParticleBuffer;
    buffer: Float32Array;
    stride: number;
    geometry: ParticleBuffer;
    material: ShaderMaterial;
    points: Points;
    shouldDebugTextureAtlas: boolean;
    onSystemUpdate(system: object): void;
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
     * @return {MobileGPURenderer}
     */
    updateTarget(particle: Particle): MobileGPURenderer;
    /**
     * Entry point for mapping particle properties to buffer geometry points.
     *
     * @param {Particle} particle - The particle containing the properties to map
     * @return {MobileGPURenderer}
     */
    mapParticleTargetPropsToPoint(particle: Particle): MobileGPURenderer;
    /**
     * Updates the point's position according to the particle's target position.
     *
     * @param {Particle} particle - The particle containing the target position.
     * @return {MobileGPURenderer}
     */
    updatePointPosition(particle: Particle): MobileGPURenderer;
    /**
     * Updates the point's size relative to the particle's target scale and radius.
     *
     * @param {Particle} particle - The particle containing the target scale.
     * @return {MobileGPURenderer}
     */
    updatePointSize(particle: Particle): MobileGPURenderer;
    /**
     * Updates the point's color attribute according with the particle's target color.
     *
     * @param {Particle} particle - The particle containing the target color and alpha.
     * @return {MobileGPURenderer}
     */
    updatePointColor(particle: Particle): MobileGPURenderer;
    /**
     * Updates the point alpha attribute with the particle's target alpha.
     *
     * @param {Particle} particle - The particle containing the target alpha.
     * @return {MobileGPURenderer}
     */
    updatePointAlpha(particle: Particle): MobileGPURenderer;
    /**
     * Updates the point texture attribute with the particle's target texture.
     *
     * @param {Particle} particle - The particle containing the target texture.
     * @return {MobileGPURenderer}
     */
    updatePointTexture(particle: Particle): MobileGPURenderer;
    getTextureID(texture: TextureAtlas, debug: boolean): number;
    destroy(): void;
}
