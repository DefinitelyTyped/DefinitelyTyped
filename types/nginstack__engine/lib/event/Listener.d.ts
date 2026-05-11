export = Listener;
declare function Listener(handler: (arg0: Event) => any): void;
declare class Listener {
    constructor(handler: (arg0: Event) => any);
    handler: (arg0: Event) => any;
    handleEvent(evt: any): boolean;
    toString(): string;
}
declare namespace Listener {
    export { Event };
}
type Event = import('./Event');
