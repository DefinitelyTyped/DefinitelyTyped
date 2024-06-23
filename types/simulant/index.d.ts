declare namespace event {
    function fire(el: Node, e: Event): void;
    function fire(el: Node, e: string, payload?: { [key: string]: any }): void;
}

declare function event(eventName: string, payload?: { [key: string]: any }): Event;
declare function event(window: Window, eventName: string, payload?: { [key: string]: any }): Event;

export = event;
