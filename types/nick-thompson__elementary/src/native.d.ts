import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';


// ============================================================================
// Native

// TODO: figure out what root is and put it here


/**
 * Generates a stream of random numbers
 * uniformly distributed on the range [0, 1].
 *
 * @memberOf el
 * @function rand
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @returns {core.RandNode}
 * a {@link core.RandNode} that computes a stream of random numbers
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.RandNode
 */
export declare const rand:
    core.NodeFactory<'rand',
        core.KeyProps,
        []>;
