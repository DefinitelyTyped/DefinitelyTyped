import type { Vector3 } from 'three';
import Particle from '../core/Particle';
import type { EasingFunction } from '../ease';
import { Emitter } from '../emitter';
import { JSONObject } from '../initializer/Rate';
import { Vector3D } from '../math';
import { BEHAVIOUR_TYPES } from './types';

export default class Behaviour {
    /**
     * Constructs a Behaviour instance.
     *
     * @param {number} [life=Infinity] - The life of the behaviour
     * @param {function} [easing=DEFAULT_BEHAVIOUR_EASING] - The behaviour's decaying trend
     * @param {string} [type=BEHAVIOUR_TYPE_ABSTRACT] - The behaviour type
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(life?: number, easing?: EasingFunction, type?: BEHAVIOUR_TYPES, isEnabled?: boolean);

    id: string;
    age: number;
    energy: number;
    dead: boolean;
    /**
     * Reset this behaviour's parameters
     *
     * @param {number} [life=DEFAULT_LIFE] - The life of the behaviour
     * @param {function} [easing=DEFAULT_BEHAVIOUR_EASING] - The behaviour's decaying trend
     */
    reset(life?: number, easing?: EasingFunction): void;
    /**
     * Ensures that life is infinity if an invalid value is supplied.
     *
     * @return void
     */
    set life(life: number);
    /**
     * Gets the behaviour's life.
     *
     * @return {Number}
     */
    get life(): number;
    /**
     * Normalize a force by 1:100;
     *
     * @param {Vector3D} force - The force to normalize.
     * @return {Vector3D}
     */
    normalizeForce(force: Vector3): Vector3D;
    /**
     * Normalize a value by 1:100;
     *
     * @param {number} value - The value to normalize.
     * @return {number}
     */
    normalizeValue(value: number): number;
    /**
     * Set the behaviour's initial properties on the particle.
     *
     * @param {Particle} particle
     * @abstract
     */
    initialize(particle: Particle): void;
    /**
     * Apply behaviour to the target as a factor of time.
     * Internally calls the mutate method to change properties on the target
     * Will not do so if the behaviour is disabled
     *
     * @abstract
     * @param {Particle|Emitter} target - The particle or emitter to apply the behaviour to
     * @param {Number} time - the system integration time
     * @param {integer} index - the target index
     * @return mixed
     */
    applyBehaviour(target: Particle | Emitter, time: number, index: number): void;
    /**
     * Change the target's properties according to specific behaviour logic.
     *
     * @abstract
     * @param {Particle|Emitter} target - The particle or emitter to apply the behaviour to
     * @param {Number} time - the system integration time
     * @return mixed
     */
    mutate(target: Particle | Emitter, time: number, index: number): void;
    /**
     * Compares the age of the behaviour vs integration time and determines
     * if the behaviour should be set to dead or not.
     * Sets the behaviour energy as a factor of particle age and life.
     *
     * @param {Particle} particle - The particle to apply the behaviour to
     * @param {Number} time - the system integration time
     * @return void
     */
    energize(particle: Particle, time: number): void;
    /**
     * Destory this behaviour.
     *
     * @abstract
     */
    destroy(): void;
    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     *
     * @abstract
     * @param {object} json - JSON object containing the required constructor properties
     * @return {Behaviour}
     */
    fromJSON(json: JSONObject): Behaviour;
}
