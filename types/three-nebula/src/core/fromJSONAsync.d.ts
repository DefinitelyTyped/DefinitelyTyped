import { Emitter } from '../emitter';
import { JSONObject } from '../initializer/Rate';
import System from './System';

/**
 * Creates a System instance from a JSON object.
 *
 * @param {object} json - The JSON to create the System instance from
 * @param {number} json.preParticles - The predetermined number of particles
 * @param {string} json.integrationType - The integration algorithm to use
 * @param {array<object>} json.emitters - The emitters for the system instance
 * @param {object} THREE - The Web GL Api to use
 * @param {function} System - The system class
 * @param {function} Emitter - The emitter class
 * @param {object} [options={}] - Optional config options
 * @return {Promise<System>}
 */
export default function fromJSONAsync(
    json: JSONObject | object,
    THREE: object,
    System: System,
    Emitter: Emitter,
    options?: object,
): Promise<System>;
