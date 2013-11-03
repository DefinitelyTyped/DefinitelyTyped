/// <reference path="Point.d.ts" />
declare module L {

    export class DomEvent {

        /**
          * Adds a listener fn to the element's DOM event of the specified type. this keyword
          * inside the listener will point to context, or to the element if not specified.
          */
        static addListener(el: HTMLElement, type: string, fn: (e: Event) => void, context?: any): DomEvent;
    
        /**
          * Removes an event listener from the element.
          */
        static removeListener(el: HTMLElement, type: string, fn: (e: Event) => void): DomEvent;
    
        /**
          * Stop the given event from propagation to parent elements. Used inside the
          * listener functions:
          * L.DomEvent.addListener(div, 'click', function
          * (e) {
          * L.DomEvent.stopPropagation(e);
          * });
          */
        static stopPropagation(e: Event): DomEvent;
    
        /**
          * Prevents the default action of the event from happening (such as following
          * a link in the href of the a element, or doing a POST request with page reload
          * when form is submitted). Use it inside listener functions.
          */
        static preventDefault(e: Event): DomEvent;
    
        /**
          * Does stopPropagation and preventDefault at the same time.
          */
        static stop(e: Event): DomEvent;
    
        /**
          * Adds stopPropagation to the element's 'click', 'doubleclick', 'mousedown'
          * and 'touchstart' events.
          */
        static disableClickPropagation(el: HTMLElement): DomEvent;
    
        /**
          * Gets normalized mouse position from a DOM event relative to the container
          * or to the whole page if not specified.
          */
        static getMousePosition(e: Event, container?: HTMLElement): Point;
    
        /**
          * Gets normalized wheel delta from a mousewheel DOM event.
          */
        static getWheelDelta(e: Event): number;
    
    }
}
