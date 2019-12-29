// Type definitions for micro-events 1.0
// Project: https://github.com/alexanderGugel/micro-events
// Definitions by: Alexander Sychev <https://github.com/AlexanderSychev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/** Event emitter class */
declare class MicroEventEmitter {
    /** Max listeners count */
    maxListeners: number;
    /** Attach listener */
    on(type: string, handler: MicroEventEmitter.EventHandler): MicroEventEmitter;
    /** Detach listener */
    off(type: string, handler?: MicroEventEmitter.EventHandler): MicroEventEmitter;
    /** Trigger event */
    emit(type: string, ...arguments: any[]): MicroEventEmitter;
}
declare namespace MicroEventEmitter {
    /** Event handler function signature */
    type EventHandler = (...args: any[]) => any;
}
export = MicroEventEmitter;
