// Type definitions for eq.js
// Project: https://github.com/Snugug/eq.js
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var eqjs: eqjs.EqjsStatic;

 // Support AMD require
declare module 'eqjs' {
	export = eqjs;
}

declare module eqjs {

	interface EqjsStatic {
	
		/**
		 * List of all nodes.
		 */
		nodes: EqjsNodesTable;

		/**
		 * Number of nodes in eqjs.nodes.
		 */
		nodesLength: number;

		/**
		 * Runs through all nodes and finds their widths and points
		 * @param nodes 
		 * @param callback function to use as a callback once query and nodeWrites have finished
		 */
		query(nodes: HTMLElement[]|JQuery, callback?: Function): void;

		/**
		 *  Refreshes the list of nodes for eqjs to work with
		 */
		refreshNodes(): void;

		/**
		 * Sorts a simple object (key: value) by value and returns a sorted object.
		 * @param obj e.g. "small: 380, medium: 490, large: 600"
		 * @returns {}
		 */
		sortObj(obj: string): EqjsKeyValuePair;

		/**
		 * Runs through all nodes and writes their eq status.
		 * @param nodes An array or NodeList of nodes to query
		 * @returns {} 
		 */
		nodeWrites(nodes?: HTMLElement[]|JQuery);
	}

	interface EqjsKeyValuePair {
		key: string;
		value: number;
	}

	interface EqjsNodesTable {
		[key: string]: HTMLElement;
	}
	
}

// Support jQuery selectors.
interface JQuery { }