// Type definitions for RiotControl
// Project: https://github.com/jimsparkman/RiotControl
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module RiotControl {
	interface Store {
		on(events: string, fn: Function): Store;
		one(name: string, fn: Function): Store;
		off(events: string, fn?: Function): Store;
		trigger(name: string, ...args: any[]): Store;
	}

	var _stores: Store[];

	function addStore(store: Store): void;

	function on(events: string, fn: Function): void;
	function one(name: string, fn: Function): void;
	function off(events: string, fn?: Function): void;
	function trigger(name: string, ...args: any[]): void;
}

declare module "riotcontrol" {
	export = RiotControl;
}
