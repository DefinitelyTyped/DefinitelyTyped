export = Emitter;
declare function Emitter(opt_parentProperty?: string): void;
declare class Emitter {
    constructor(opt_parentProperty?: string);
    private parentProperty_;
    private registeredEventTypes_;
    private listenersByType_;
    listenerCompareFunction: (
        arg0: (...args: any[]) => any,
        arg1: (...args: any[]) => any
    ) => boolean;
    duplicationHandling: any;
    private listeners_;
    on(type: string, listener: (arg0: Event) => any): void;
    replaceListeners(
        type: string,
        listener: Listener | ((arg0: Event, arg1: (arg0: Event) => any) => any)
    ): void;
    registerEventType(type: string | string[]): void;
    unregisterEventType(type: string | string[]): void;
    listeners(opt_type?: string): Listener[];
    listenerHandlers(type: string): Array<(arg0: Event) => any>;
    off(type: string, listener: Listener | ((arg0: Event) => any)): void;
    offAll(opt_type?: string): void;
    emit(event: Event): boolean;
    assignListeners(emitter: Emitter, opt_type?: string | string[]): void;
    addListenersFromEmitter(emitter: Emitter, opt_type?: string): void;
    filterListeners(filterFn: (arg0: Listener) => boolean, opt_type?: string): void;
    hasListeners(type: string | string[]): boolean;
}
import Event = require('./Event.js');
import Listener = require('./Listener.js');
