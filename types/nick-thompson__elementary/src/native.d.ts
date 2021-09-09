import { core } from './core';


// TODO: figure out what root is and put it here


/**
 * Generates a stream of random numbers
 * uniformly distributed on the range [0, 1].
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @returns {core.RandNode}
 * a {@link core.RandNode} that computes a stream of random numbers
 */
export declare const rand:
    core.NodeFactory<'rand',
        core.KeyProps,
        []>;
