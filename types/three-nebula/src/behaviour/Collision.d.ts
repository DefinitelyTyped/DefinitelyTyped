import Particle from '../core/Particle';
import { Easing, EasingFunction } from '../ease';
import { Emitter } from '../emitter';
import { JSONObject } from '../initializer/Rate';
import Behaviour from './Behaviour';

/**
 * Behaviour that causes particles to move away from other particles they collide with.
 */
export default class Collision extends Behaviour {
    /**
     * Constructs a Collision behaviour instance.
     *
     * @param {Emitter} emitter - The emitter containing the particles to detect collisions against
     * @param {boolean?} useMass - Determiens whether to use mass or not
     * @param {function?} onCollide - Function to call when particles collide
     * @param {number?} life - The life of the particle
     * @param {function?} easing - The behaviour's decaying trend eg. ease.easeLinear
     * @param {boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(
        emitter: Emitter,
        useMass?: boolean,
        onCollide?: onCollideCallback,
        life?: number,
        easing?: keyof Easing,
        isEnabled?: boolean,
    );

    /**
     * Resets the behaviour properties.
     *
     * @param {Emitter} emitter - The emitter containing the particles to detect collisions against
     * @param {boolean?} useMass - Determiens whether to use mass or not
     * @param {function?} onCollide - Function to call when particles collide
     * @param {number?} life - The life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     * @return void
     */
    reset(life?: number, easing?: EasingFunction): void;
    reset(
        emitter: Emitter,
        useMass?: boolean,
        onCollide?: onCollideCallback,
        life?: number,
        easing?: EasingFunction,
    ): void;

    /**
     * Detects collisions with other particles and calls the
     * onCollide function on colliding particles.
     *
     * @param {Particle} particle - the particle to apply the behaviour to
     * @param {number} time - particle engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Gets the average mass of both particles.
     *
     * @param {Particle} particleA - The first particle
     * @param {Particle} particleB - The second particle
     * @return {number}
     */
    _getAverageMass(particleA: Particle, particleB: Particle): number;

    /**
     * TODO - Not Yet Implemented
     * @param json
     */
    fromJSON(json: JSONObject): Collision;
}

type onCollideCallback = (any: any) => any;
