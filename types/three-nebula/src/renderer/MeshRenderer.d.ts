import type { Mesh, Object3D, Sprite } from 'three';
import { Particle, Pool } from '../core';
import BaseRenderer from './BaseRenderer';
/**
 * @requires THREE - { Mesh, BoxGeometry, MeshLambertMaterial }
 */
export default class MeshRenderer extends BaseRenderer {
    /**
     * @param {object} container - An Object3D container, usually a THREE.Scene
     * @param {object} THREE - THREE Api
     */
    constructor(container: Object3D, THREE: Three);
    container: Object3D;
    _targetPool: Pool;
    _materialPool: Pool;
    _body: Mesh | Sprite;
    isThreeSprite(particle: Particle): boolean;
    onSystemUpdate(): void;
    onParticleCreated(particle: Particle): void;
    onParticleUpdate(particle: Particle): void;
    scale(particle: Particle): void;
    onParticleDead(particle: Particle): void;
}

type Three = typeof import('three');
