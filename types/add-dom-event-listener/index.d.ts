// Type definitions for add-dom-event-listener 1.1
// Project: https://github.com/yiminghe/add-dom-event-listener
// Definitions by: janeluck <https://github.com/janeluck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function addDomEventListener(target: HTMLElement | Document | Window, eventType: string, callback: (event: any) => any): addDomEventListener.Listener;

declare namespace addDomEventListener {
    interface Listener {
        remove(): void;
    }
}
export = addDomEventListener;
