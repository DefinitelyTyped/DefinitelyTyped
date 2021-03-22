// Type definitions for simulant 0.2
// Project: https://github.com/Rich-Harris/simulant#readme
// Definitions by: Elizabeth Craig <https://github.com/ecraig12345>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace event {
    function fire(el: Node, e: Event): void;
    function fire(el: Node, e: string, payload?: { [key: string]: any }): void;
}

declare function event(eventName: string, payload?: { [key: string]: any }): Event;
declare function event(window: Window, eventName: string, payload?: { [key: string]: any }): Event;

export = event;
