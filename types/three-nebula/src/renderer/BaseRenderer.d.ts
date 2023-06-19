import { Particle, System } from '../core';

export default class BaseRenderer {
    /**
     *
     * @param type The class type.
     * @default RENDERER_TYPE_BASE
     */
    constructor(type: string);
    /**
     * @description The class type.
     * @type {string}
     */
    type: string;
    init(system: System): void;
    /**
     * @abstract
     */
    onSystemUpdate(system: System): void;
    /**
     * @abstract
     */
    onParticleCreated(particle: Particle): void;
    /**
     * @abstract
     */
    onParticleUpdate(particle: Particle): void;
    /**
     * @abstract
     */
    onParticleDead(particle: Particle): void;
    logRendererType(): void;
}
