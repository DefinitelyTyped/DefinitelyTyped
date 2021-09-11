import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';


// ============================================================================
// Composite

/**
 * A simple white noise generator.
 * Generates values uniformly distributed on the range [-1, 1].
 *
 * @function noise
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @returns {core.Node}
 * a {@link core.Node} that generates white noise
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const noise:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        []>;


/**
 * A simple pink noise generator.
 * Generates noise with a -3dB/octave rolloff in the frequency response.
 *
 * @function pinknoise
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @returns {core.Node}
 * a {@link core.Node} that generates pink noise
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const pinknoise:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        []>;
