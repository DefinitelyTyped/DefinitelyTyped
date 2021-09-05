import { core } from './core';


// TODO: figure out what this is
// /**
//  * Computes the root of the arguments.
//  *
//  * @param {...core.Node} args
//  * args to compute the root of
//  * @returns {core.Node}
//  * a node that computes the root of the arguments
//  */
// export declare function root(
//   ...args: core.Node[]): core.Node;


/**
 * Generates a stream of random numbers
 * uniformly distributed on the range [0, 1].
 *
 * @returns {core.Node}
 * a node that computes a stream of random numbers
 */
export declare function rand(): core.Node;
