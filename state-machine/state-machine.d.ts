// Type definitions for Finite State Machine 2.2
// Project: https://github.com/jakesgordon/javascript-state-machine
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Updated: 2013/01/22 by Maarten Docter <https://github.com/mdocter>


interface ErrorCallback {
    (eventName?: string, from?: string, to?: string, args?: any[], errorCode?: number, errorMessage?: string, ex?: Error): void; // NB. errorCode? See: StateMachine.Error
}

interface StateMachineEvent {
    name: string;
    from: string;
    to: string;
}

interface StateMachineConfig {
    initial?: any; // string or { state: 'foo', event: 'setup', defer: true|false }
    events?: StateMachineEvent[];
    callbacks?: {
        [s: string]: (event?: string, from?: string, to?: string, ...args: any[]) => any;
    };
    target?: any;
    error?: ErrorCallback;
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

    create(config: StateMachineConfig, target?: any): StateMachine;
}

interface StateMachine {
    current: string;
    is(state: string): bool;
    can(event: StateMachineEvent): bool;
    cannot(event: StateMachineEvent): bool;
    error: ErrorCallback;

    /*  transition - only available when performing async state transitions; otherwise null. Can be a: 
        [1] function without arguments (see: https://github.com/jakesgordon/javascript-state-machine#asynchronous-state-transitions) 
        [2] property with a cancel function to cancel the ASYNC event. Example usages:
    
        [1] fsm.transition(); // called form async callback
        [2] fsm.transition.cancel(); 
    */
    transition?: any;
}

declare var StateMachine: StateMachineStatic;