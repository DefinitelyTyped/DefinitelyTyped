// Type definitions for sass-graph v2.1.2
// Project: https://github.com/xzyfer/sass-graph
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace SassGraph {

  export interface Options {
    loadPath?: string[];
    extensions?: string[];
  }

  type Node = {
    [filepath: string]: {
      imports: string[];
      importedBy: string[];
      modified: string;
    }
  }

  /**
   * @class Graph
   */
  export interface Graph {
    dir: string;
    loadPaths: string[];
    extensions: string[];
    index: Node;

    /**
     * Add a sass file to the graph
     * @param {string} filepath Path to the file to visit
     * @param {string} [parent] Parent filepath
     */
    addFile(filepath: string, parent?: string): void;

    /**
     * visits all files that are ancestors of the provided file
     * @param {string}   filepath Path to the file to visit
     * @param {Function} callback Called when a node is visited
     */
    visitAncestors(filepath: string, callback: (edge: string, node: Node) => any): void;

    /**
     * Visits all files that are descendents of the provided file
     * @param {string}   filepath Path to the file to visit
     * @param {Function} callback Called when a node is visited
     */
    visitDescendents(filepath: string, callback: (edge: string, node: Node) => any): void;

    /**
     * A generic visitor that uses an edgeCallback to find the edges to traverse
     * for a node
     * @param {string}   filepath     Path to the file to visit
     * @param {Function} callback     Called when a node is visited
     * @param {Function} edgeCallback Called when we reach an edge
     * @param {string[]} [visited]    Visited edges
     */
    visit(filepath: string, callback: (edge: string, node: Node) => any, edgeCallback: (errorMsg: string, node: Node) => any, visited?: string[]): void;
  }

  /**
   * @function {parseFile} Get the dependency tree of a single file
   * @param {string} filepath  Path to file which should be parsed
   * @param {Object} [options] Parsing options
   * @return {Graph}
   */
  export function parseFile(filepath: string, options?: Options): Graph;

  /**
   * @function {parseDir} Get the dependency tree of all sass files in a folder
   * @param {string} dirpath   Folder which should be parsed
   * @param {Object} [options] Parsing options
   * @return {Graph}
   */
  export function parseDir(dirpath: string, options?: Options): Graph;
}

export = SassGraph;
export as namespace SassGraph;
