import { Particle, Pool } from "../core";
import { Three } from "../core/three";
import BaseRenderer from "./BaseRenderer";

export default class MeshRenderer extends BaseRenderer {
    constructor(container: THREE.Object3D, THREE: Three);

    container: THREE.Object3D;

    _targetPool: Pool;

    _materialPool: Pool;

    _body: THREE.Mesh | THREE.Sprite;

    isThreeSprite(particle: Particle): boolean;

    onSystemUpdate(): void;

    onParticleCreated(particle: Particle): void;

    onParticleUpdate(particle: Particle): void;

    scale(particle: Particle): void;

    onParticleDead(particle: Particle): void;
}
