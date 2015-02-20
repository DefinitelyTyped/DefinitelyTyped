/// <reference path="ionic.domUtil.d.ts" />

declare module Ionic {

    interface IBase {
        Platform: IPlatform;
        DomUtil: IDomUtil;
        EventController: IEventController;

        //#region EventController Aliases
        /**
         * @param eventType The event to trigger
         * @param data The data for the event. Hint: pass in {target: targetElement}
         * @param bubbles Whether the event should bubble up the DOM
         * @param cancelable Whether the event should be cancelable
         */
        trigger(eventType: string, data: Object, bubbles?: boolean, cancelable?: boolean): void;

        /**
         * Listen to an event on an element.
         * 
         * @param type The event to listen for
         * @param callback The listener to be called
         * @param element The element to listen for the event on
         */
        on(type: string, callback: () => void, element: Element): void;


        /**
         * Remove an event listener
         * 
         * @param type The event to listen for
         * @param callback The listener to be called
         * @param element The element to listen for the event on
         */
        off(type: string, callback: () => void, element: Element): void;

        /**
         * Add an event listener for a gesture on an element.
         * 
         * @param eventType The gesture event to listen for
         * @param callback The function to call when the gesture happens
         * @param element The angular element to listen for the event on
         */
        onGesture(eventType: string, callback: () => void, element: Element): void;
        onGesture(eventType: "hold", callback: () => void, element: Element): void;
        onGesture(eventType: "tap", callback: () => void, element: Element): void;
        onGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        onGesture(eventType: "drag", callback: () => void, element: Element): void;
        onGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        onGesture(eventType: "dragend", callback: () => void, element: Element): void;
        onGesture(eventType: "dragup", callback: () => void, element: Element): void;
        onGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        onGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        onGesture(eventType: "dragright", callback: () => void, element: Element): void;
        onGesture(eventType: "swipe", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        onGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        onGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        onGesture(eventType: "transform", callback: () => void, element: Element): void;
        onGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        onGesture(eventType: "transformend", callback: () => void, element: Element): void;
        onGesture(eventType: "rotate", callback: () => void, element: Element): void;
        onGesture(eventType: "pinch", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        onGesture(eventType: "touch", callback: () => void, element: Element): void;
        onGesture(eventType: "release", callback: () => void, element: Element): void;

        /**
         * Remove an event listener for a gesture on an element.
         * 
         * @param eventType The gesture event
         * @param callback The listener that was added earlier
         * @param element The element the listener was added on
         */
        offGesture(eventType: string, callback: () => void, element: Element): void;
        offGesture(eventType: "hold", callback: () => void, element: Element): void;
        offGesture(eventType: "tap", callback: () => void, element: Element): void;
        offGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        offGesture(eventType: "drag", callback: () => void, element: Element): void;
        offGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        offGesture(eventType: "dragend", callback: () => void, element: Element): void;
        offGesture(eventType: "dragup", callback: () => void, element: Element): void;
        offGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        offGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        offGesture(eventType: "dragright", callback: () => void, element: Element): void;
        offGesture(eventType: "swipe", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        offGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        offGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        offGesture(eventType: "transform", callback: () => void, element: Element): void;
        offGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        offGesture(eventType: "transformend", callback: () => void, element: Element): void;
        offGesture(eventType: "rotate", callback: () => void, element: Element): void;
        offGesture(eventType: "pinch", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        offGesture(eventType: "touch", callback: () => void, element: Element): void;
        offGesture(eventType: "release", callback: () => void, element: Element): void;

        //#endregion

        //#region DomUtil Aliases

        /**
         * Calls requestAnimationFrame, or a polyfill if not available.
         * 
         * @param callback The function to call when the next frame happens
         */
        requestAnimationFrame(callback: () => void): void;

        /**
         * When given a callback, if that callback is called 100 times between animation frames, adding Throttle will make it only run the last of the 100 calls.
         * 
         * @param callback a function which will be throttled to requestAnimationFrame
         */
        animationFrameThrottle(callback: () => void): void;

        //#endregion
    }
}