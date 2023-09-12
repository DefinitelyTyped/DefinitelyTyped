import { Particle, System } from "../core";

export default class BaseRenderer {
    constructor(type: string);

    type: string;
    init(system: System): void;

    onSystemUpdate(system: System): void;

    onParticleCreated(particle: Particle): void;

    onParticleUpdate(particle: Particle): void;

    onParticleDead(particle: Particle): void;

    logRendererType(): void;
}
