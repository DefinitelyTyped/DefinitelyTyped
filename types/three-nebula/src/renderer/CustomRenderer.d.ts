import { Particle, Pool } from "../core";
import BaseRenderer from "./BaseRenderer";

export default class CustomRenderer extends BaseRenderer {
    constructor();

    targetPool: Pool;

    materialPool: Pool;

    onSystemUpdate(): void;

    onParticleCreated(particle: Particle): void;

    onParticleUpdate(particle: Particle): void;

    onParticleDead(particle: Particle): void;
}
