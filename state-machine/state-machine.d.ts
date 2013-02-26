// Type definitions for Finite State Machine 2.2
// Project: https://github.com/jakesgordon/javascript-state-machine
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Updated: 2013/01/22 by Maarten Docter <https://github.com/mdocter>
// Updated: 2013/01/25 by William Sears <https://github.com/MrBigDog2U>

interface StateMachineErrorCallback {
    (eventName?: string, from?: string, to?: string, args?: any[], errorCode?: number, errorMessage?: string, ex?: Error): void; // NB. errorCode? See: StateMachine.Error
}

interface StateMachineEventDef {
    name: string;
    from: string;
    to: string;
}

interface StateMachineEvent {
	(...args: any[]): void;
}

interface StateMachineConfig {
    initial?: any; // string or { state: 'foo', event: 'setup', defer: true|false }
    events?: StateMachineEventDef[];
    callbacks?: {
        [s: string]: (event?: string, from?: string, to?: string, ...args: any[]) => any;
    };
    target?: StateMachine;
    error?: StateMachineErrorCallback;
}

interface StateMachineStatic {

    VERSION: string; 		        // = "2.2.0"
    WILDCARD: string;		        // = '*'
    ASYNC: string;			        // = 'async'   

    Result: {
        SUCCEEDED: number;	        // = 1, the event transitioned successfully from one state to another
        NOTRANSITION: number;	    // = 2, the event was successfull but no state transition was necessary
        CANCELLED: number;	        // = 3, the event was cancelled by the caller in a beforeEvent callback
        ASYNC: number;		        // = 4, the event is asynchronous and the caller is in control of when the transition occurs
    };

    Error: {
        INVALID_TRANSITION: number;	// = 100, caller tried to fire an event that was innapropriate in the current state
        PENDING_TRANSITION: number;	// = 200, caller tried to fire an event while an async transition was still pending
        INVALID_CALLBACK: number;	// = 300, caller provided callback function threw an exception
    };

    create(config: StateMachineConfig, target?: StateMachine): StateMachine;
}

interface StateMachineTransition {
	(): void;
	cancel(): void;
}

interface StateMachineIs {
	(state: string): bool;
}

interface StateMachineCan {
	(evt: string): bool;
}

interface StateMachine {
    current: string;
    is: StateMachineIs;
    can: StateMachineCan;
    cannot: StateMachineCan;
    error: StateMachineErrorCallback;

    /*  transition - only available when performing async state transitions; otherwise null. Can be a: 
        [1] fsm.transition(); // called from async callback
        [2] fsm.transition.cancel(); 
    */
    transition: StateMachineTransition;
}

declare var StateMachine: StateMachineStatic;