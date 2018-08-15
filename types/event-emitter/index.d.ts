// Type definitions for event-emitter 0.3
// Project: https://github.com/medikoo/event-emitter#readme
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ee {
    type EventListener = (...args: any[]) => void;
    type EmitterMethod = (type: string, listener: EventListener) => void;

    interface Emitter {
        emit(type: string, ...args: any[]): void;
        off: EmitterMethod;
        on: EmitterMethod;
        once: EmitterMethod;
    }
}

declare function ee(obj: any): ee.Emitter;

export = ee;
