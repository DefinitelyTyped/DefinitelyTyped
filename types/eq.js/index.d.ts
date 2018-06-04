// Type definitions for eq.js
// Project: https://github.com/Snugug/eq.js
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare var eqjs: eq.EqjsStatic;

// Support AMD require
declare module 'eq.js' {
	export = eqjs;
}

declare namespace eq {
	type AvailableElementType = HTMLElement|HTMLCollectionOf<Element>|HTMLElement[]|NodeList|JQuery;

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
		query(nodes: AvailableElementType, callback?: Function): void;

		/**
		 *  Refreshes the list of nodes for eqjs to work with
		 */
		refreshNodes(): void;

		/**
		 * Sorts a simple object (key: value) by value and returns a sorted object.
		 * @param obj e.g. "small: 380, medium: 490, large: 600"
		 * @returns {}
		 */
		sortObj(obj: string): EqjsKeyValuePair[];

		/**
		 * Runs through all nodes and writes their eq status.
		 * @param nodes An array or NodeList of nodes to query
		 * @returns {}
		 */
		nodeWrites(nodes?: AvailableElementType): void;
	}

	interface EqjsKeyValuePair {
		key: string;
		value: number;
	}

	interface EqjsNodesTable {
		[index: number]: HTMLElement;
	}

}

// Support jQuery selectors.
interface JQuery { }
