export = SurrogateListener;
declare function SurrogateListener(
    handler: (arg0: Event, arg1: (arg0: Event) => any) => any,
    surrogatedListeners: Listener[]
): void;
declare class SurrogateListener {
    constructor(
        handler: (arg0: Event, arg1: (arg0: Event) => any) => any,
        surrogatedListeners: Listener[]
    );
    surrogatedListeners: Listener[];
    handler: (arg0: Event, arg1: (arg0: Event) => any) => any;
    handleEvent(event: Event): boolean;
    filterSurrogatedListeners(filterFn: (arg0: Listener) => any): void;
}
declare namespace SurrogateListener {
    export { Event };
}
type Event = import('./Event');
import Listener = require('./Listener.js');
