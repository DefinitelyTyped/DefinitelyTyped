import { Graph } from "graphlib";

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

/**
 * Contains the version of the graphlib library used by graphlib-dot.
 */
export const graphlib: any;

declare global {
    namespace graphlibDot {
        /**
         * Reads a single DOT graph from the str and returns it a Graph representation.
         * @param str a string in the DOT language representing a graph
         */
        function read(str: string): Graph;

        /**
         * Parses one or more DOT graphs from str in a manner similar to that used by parse for individual graphs.
         * @param str a string in the DOT language representing one or more graphs
         */
        function readMany(str: string): Graph[];

        /**
         * Writes a String representation of the given graph in the DOT language.
         * @param g a graphlib Graph object
         */
        function write(g: Graph): string;

        /**
         * Contains the version of the graphlib library used by graphlib-dot.
         */
        const graphlib: any;
    }
}
