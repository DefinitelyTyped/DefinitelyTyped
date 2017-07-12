// Type definitions for Finite State Machine 2.4
// Project: https://github.com/jakesgordon/javascript-state-machine
// Definitions by: Boris Yankov <https://github.com/borisyankov/>,
// 					Maarten Docter <https://github.com/mdocter>,
// 					William Sears <https://github.com/MrBigDog2U>,
// 					samael <https://github.com/samael65535>,
// 					taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type StateMachineErrorCallback = (
	eventName?: string,
	from?: string,
	to?: string,
	args?: any[],
	errorCode?: number,
	errorMessage?: string,
	ex?: Error
) => void; // NB. errorCode? See: StateMachine.Error

export interface StateMachineEventDef {
	name: string;
	from: any;    // string or string[]
	to: string;
}

export type StateMachineEvent = (...args: any[]) => void;

export interface StateMachineConfig {
	initial?: any; // string or { state: 'foo', event: 'setup', defer: true|false }
	events?: StateMachineEventDef[];
	callbacks?: {
		[s: string]: (event?: string, from?: string, to?: string, ...args: any[]) => any;
	};
	target?: StateMachine;
	error?: StateMachineErrorCallback;
}

export type StateMachineIsFinished = (state: string) => boolean;

export const VERSION: string; 		        // = "2.4.0"
export const WILDCARD: string;		        // = '*'
export const ASYNC: string;			        // = 'async'

export const Result: {
	SUCCEEDED: number;	        // = 1, the event transitioned successfully from one state to another
	NOTRANSITION: number;	    // = 2, the event was successfull but no state transition was necessary
	CANCELLED: number;	        // = 3, the event was cancelled by the caller in a beforeEvent callback
	PENDING: number;		        // = 4, the event is asynchronous and the caller is in control of when the transition occurs
};

export const Error: {
	INVALID_TRANSITION: number;	// = 100, caller tried to fire an event that was innapropriate in the current state
	PENDING_TRANSITION: number;	// = 200, caller tried to fire an event while an async transition was still pending
	INVALID_CALLBACK: number;	// = 300, caller provided callback function threw an exception
};

export function create(config: StateMachineConfig, target?: StateMachine): StateMachine;

export interface StateMachineTransition {
	(): void;
	cancel(): void;
}

export type StateMachineIs = (state: string) => boolean;

export type StateMachineCan = (evt: string) => boolean;

export type StateMachineTransitions = () => string[];

export interface StateMachine {
	current: string;
	is: StateMachineIs;
	can: StateMachineCan;
	cannot: StateMachineCan;
	error: StateMachineErrorCallback;
	isFinished: StateMachineIsFinished;
	/*  transition - only available when performing async state transitions; otherwise null. Can be a:
		[1] fsm.transition(); // called from async callback
		[2] fsm.transition.cancel();
	*/
	transition: StateMachineTransition;
	transitions: StateMachineTransitions;
}

export namespace StateMachine {
	const VERSION: string; 		        // = "2.4.0"
	const WILDCARD: string;		        // = '*'
	const ASYNC: string;			        // = 'async'

	const Result: {
		SUCCEEDED: number;	        // = 1, the event transitioned successfully from one state to another
		NOTRANSITION: number;	    // = 2, the event was successfull but no state transition was necessary
		CANCELLED: number;	        // = 3, the event was cancelled by the caller in a beforeEvent callback
		PENDING: number;		        // = 4, the event is asynchronous and the caller is in control of when the transition occurs
	};

	const Error: {
		INVALID_TRANSITION: number;	// = 100, caller tried to fire an event that was innapropriate in the current state
		PENDING_TRANSITION: number;	// = 200, caller tried to fire an event while an async transition was still pending
		INVALID_CALLBACK: number;	// = 300, caller provided callback function threw an exception
	};
	function create(config: StateMachineConfig, target?: StateMachine): StateMachine;
}

export as namespace StateMachine;
