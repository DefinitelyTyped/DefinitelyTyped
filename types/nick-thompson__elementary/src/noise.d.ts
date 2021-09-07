import { core } from './core';


/**
 * A simple white noise generator.
 * Generates values uniformly distributed on the range [-1, 1].
 *
 * @returns {core.Node}
 * a {@link core.Node} that generates white noise
 */
export declare function noise(): core.Node;


/**
 * A simple pink noise generator.
 * Generates noise with a -3dB/octave rolloff in the frequency response.
 *
 * @returns {core.Node}
 * a {@link core.Node} that generates pink noise
 */
export declare function pinknoise(): core.Node;
