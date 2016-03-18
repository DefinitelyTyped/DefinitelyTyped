// Type definitions for aurelia-flux
// Project: https://github.com/tfrydrychewicz/aurelia-flux
// Definitions by: Tomasz Frydrychewicz <https://github.com/tfrydrychewicz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * A Flux plugin for Aurelia that supports Promises.
 */
declare module 'aurelia-flux' {
	/**
	 * Flux Dispatcher 
	 */
	export class Dispatcher implements aurelia.flux.IDispatcher {
		
		/**
		 * Dispatches an action along with all passed parameters (paylod)
		 * 		  
		 * @param action Dispatching action name
		 * @param payload Action payload
		 * @returns void 
		 */
		dispatch(action: String, ...payload: any[]): void;

		/**
		 * Registers new handler function for given action patterns
		 * 		 	 
		 * @param actions Handled actions (e.g. 'items.add', 'items.*', 'items.???')	 
		 * @param callback Handler callback method
		 * @returns Handler dispose method
		 */
		handle(actions: String | String[], callback: aurelia.flux.IDispatcherCallback): aurelia.flux.IDisposeDisptacher;
		
		/**
		 * Registers a method that will be invoked when all
		 * given types finish dispatching
		 * 		 
		 * @param types Types to wait for before dispatcher will call this handler
	 	 * @param callback Callback function flux dispatcher will call when all 
		 *        specified types have handled defined action (requires @handle)
 		 * @returns void
		 */
		waitFor(types: Function | Function[], callback: (() => void)): void;
	}

	/**
	 * Registers new handler function for given action patterns
	 * 		 	 
	 * @param actions Handled actions (e.g. 'items.add', 'items.*', 'items.???')
 	 * @returns Method decorator
	 */
	export function handle(...actions: String[]): MethodDecorator;

	/**
	 * Registers a method that will be invoked when all
	 * given types finish dispatching
	 * 		 
	 * @param types	Types to wait for before dispatcher will call this handler
 	 * @returns Method decorator
	 */
	export function waitFor(...types: Function[]): MethodDecorator;

}

declare module aurelia.flux {
	export interface IDispatcher {
		/**
		 * Dispatches an action along with all passed parameters (paylod)
		 * 		  
		 * @param action Dispatching action name
		 * @param payload Action payload
		 * @returns void 
		 */
		dispatch(action: String, ...payload: any[]): void;

		/**
		 * Registers new handler function for given action patterns
		 * 		 	 
		 * @param actions Handled actions (e.g. 'items.add', 'items.*', 'items.???')	 
		 * @param callback Handler callback method
		 * @returns Handler dispose method
		 */
		handle(actions: String | String[], callback: IDispatcherCallback): IDisposeDisptacher;

		/**
		 * Registers a method that will be invoked when all
		 * given types finish dispatching
		 * 		 
		 * @param types Types to wait for before dispatcher will call this handler
	 	 * @param callback Callback function flux dispatcher will call when all 
		 *        specified types have handled defined action (requires @handle) 
 		 * @returns void
		 */
		waitFor(types: Function | Function[], callback: (() => void)): void;
	}
	
	export interface IDispatcherCallback {
		(action: String, ...payload: any[]): any;
	}

	export interface IDispatcherDispatch {
		(action: String, ...payload: any[]): void;
	}

	export interface IDispatcherWaitFor {
		(actions: String | String[], callback: ((action: String, ...payload: any[]) => any)): (() => void);
	}
	
	export interface IDispatcherHandle {
		(actions: String | String[], callback: aurelia.flux.IDispatcherCallback): aurelia.flux.IDisposeDisptacher;
	}
	
	export interface IDisposeDisptacher {
		(): void;
	}
}

	