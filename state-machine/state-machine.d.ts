// Type definitions for Finite State Machine 2.2
// Project: https://github.com/jakesgordon/javascript-state-machine
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface ErrorCallback {
    (name: string, from: string, to: string, args: any[]): void;
}

interface EventCallback {
    event: string;
    from: string;
    to: string;
    msg?: string;
}

interface StateMachineEvent {
    name: string;
    from: string;
    to: string;
}

interface StateMachineConfig {
    initial?: any; // string or { state: 'foo', event: 'setup', defer: true|false }
    events?: StateMachineEvent[];
    callbacks?: any;
    target?: any;
    error?: ErrorCallback;
}

interface StateMachineStatic {
    create(config: StateMachineConfig, target?: any): StateMachine;
}

interface StateMachine {
    current: string;
    is(sstate: string): bool;
    can(event: StateMachineEvent): bool;
    cannot(event: StateMachineEvent): bool;
    error: ErrorCallback;

    onbeforeevent: EventCallback;
    onleaveevent: EventCallback;
    onenterevent: EventCallback;
    onafterevent: EventCallback;
}

declare var StateMachine: StateMachineStatic;