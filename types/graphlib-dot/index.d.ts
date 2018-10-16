// Type definitions for graphlib-dot 0.6
// Project: https://github.com/dagrejs/graphlib-dot
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Graph } from 'graphlib';

/**
 * Reads a single DOT graph from the str and returns it a Graph representation.
 * @param str a string in the DOT language representing a graph
 */
export function read(str: string): Graph;

/**
 * Parses one or more DOT graphs from str in a manner similar to that used by parse for individual graphs.
 * @param str a string in the DOT language representing one or more graphs
 */
export function readMany(str: string): Graph[];

/**
 * Writes a String representation of the given graph in the DOT language.
 * @param g a graphlib Graph object
 */
export function write(g: Graph): string;
