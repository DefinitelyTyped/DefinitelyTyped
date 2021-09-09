import { core } from './core';


/**
 * A simple white noise generator.
 * Generates values uniformly distributed on the range [-1, 1].
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @returns {core.Node}
 * a {@link core.Node} that generates white noise
 */
export declare const noise:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        []>;


/**
 * A simple pink noise generator.
 * Generates noise with a -3dB/octave rolloff in the frequency response.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @returns {core.Node}
 * a {@link core.Node} that generates pink noise
 */
export declare const pinknoise:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        []>;
