import Particle from '../core/Particle';
import { INTEGRATION_TYPES } from './constants';

/**
 * Performs euler integration on the particle.
 *
 * @param {Particle} particle - The particle to integrate
 * @param {number} time - The factor of time to use
 * @param {number} damping - The damping to use
 * @return void
 */
export function eulerIntegration(particle: Particle, time: number, damping: number): void;

/**
 * Performs the chosen integration on the particle.
 * Defaults to euler integration.
 *
 * @param {Particle} particle - The particle to integrate
 * @param {number} time - The factor of time to use
 * @param {number} damping - The damping to use
 * @param {string} [type=INTEGRATION_TYPE_EULER] - The algorithm to use
 * @return void
 */
export function integrate(particle: Particle, time: number, damping: number, type?: INTEGRATION_TYPES): void;
