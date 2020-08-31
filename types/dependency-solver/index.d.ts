// Type definitions for dependency-solver 1.0
// Project: https://github.com/haavistu/dependency-solver#readme
// Definitions by: Justus Fluegel <https://github.com/Technikkeller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Solve dependency graph
 *
 * @param g dependency graph
 */
export function solve(g: { [key: string]: string[] }): string[];

/**
 * Add missing keys for dependencies of other nodes
 *
 * @param g dependency graph
 */
export function addMissingKeys(g: { [key: string]: string[] }): { [key: string]: string[] };

/**
 * Get numbers of dependants for each node
 *
 * @param g dependency graph
 */
export function getEdges(g: { [key: string]: string[] }): { [key: string]: number };

/**
 * Get relations between dependencies, eg. the lines in a tree diagramm
 *
 * @param g dependency graph
 */
export function getInDegree(g: { [key: string]: string[] }): Array<[string, string]>;

export { getEdges as getDependedBy, getInDegree as getDependencyLines };
