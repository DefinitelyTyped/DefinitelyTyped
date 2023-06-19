import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Zone from '../zone/Zone';
import Behaviour from './Behaviour';

/**
 * Behaviour that allows for specific functions to be called on particles when
 * they interact with a zone.
 *
 */
export default class CrossZone extends Behaviour {
    /**
     * Constructs a CrossZone behaviour instance.
     *
     * @param {Zone} zone - the zone used to apply to particles with this behaviour
     * @param {string?} [crossType=DEFAULT_CROSS_TYPE] - enum of cross types, valid strings include 'dead', 'bound', 'cross'
     * @param {number?} life - The life of the particle
     * @param {function?} easing - The behaviour's decaying trend eg. ease.inQuad
     * @param {boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     */
    constructor(zone: Zone, crossType?: string, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Resets the behaviour properties.
     *
     * @param {Zone} zone - the zone used to apply to particles with this behaviour
     * @param {string} [crossType=DEFAULT_CROSS_TYPE] - enum of cross types, valid strings include 'dead', 'bound', 'cross'
     * @param {number?} life - The life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     */
    reset(zone: Zone, crossType?: EasingFunction, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Applies the behaviour to the particle.
     *
     * @see {@link '../zone/Zone.js'} crossing
     * @param {object} particle - the particle to apply the behaviour to
     * @param {number} time - engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a CrossZone initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @return {CrossZone}
     */
    static fromJSON(json: JSONObject): CrossZone;
}
