export as namespace HistoryEvents;

/** Event fired by history changes */
export interface HistoryEvent extends Event {
    /** The event name, eg. `changestate` */
    eventName: string;
    /** The state object passed to the history function */
    state: any;
}

/**
 * Returns whether or not the History API is supported by the current browser
 */
export function isHistorySupported(): boolean;

/**
 * Add an event listener to an element, including an `onevent` function for old IE versions
 */
export function addEventListener(el: EventTarget, type: string, handler: EventListener): void;

/**
 * Remove an event listener from an element, including an `onevent` function for old IE versions
 */
export function removeEventListener(el: EventTarget, type: string, handler: EventListener): void;

/**
 * Fire a history event on a given element.
 * Tries to fire using `dispatchEvent`. If not possible, calls the `onevent` method on the target element
 */
export function triggerEvent(el: EventTarget, eventName: string, state: any): void;

declare global {
    interface WindowEventHandlersEventMap {
        /**
         * Fired when `history.pushState` is called
         * @event window#pushstate
         */
        pushstate: HistoryEvent;
        /**
         * Fired when `history.replaceState` is called
         * @event window#replacestate
         */
        replacestate: HistoryEvent;
        /**
         * Fired when `history.pushState` or `history.replaceState` is called,
         * or when the browser's back/forward buttons are pressed
         * @event window#changestate
         */
        changestate: HistoryEvent;
    }

    interface Window {
        /**
         * Called when `history.pushState` is called **only if window.dispatchEvent does not exist**.
         * No event is passed to this function
         * @listens window#pushstate
         */
        onpushstate?(): void;
        /**
         * Called when `history.replaceState` is called **only if window.dispatchEvent does not exist**.
         * No event is passed to this function
         * @listens window#replacestate
         */
        onreplacestate?(): void;
        /**
         * Called when either `history.pushState` or `history.replaceState` is called
         * or when the browser's back/forward buttons are pressed **only if window.dispatchEvent does not exist**.
         * No event is passed to this function
         * @listens window#changestate
         */
        onchangestate?(): void;
    }
}
