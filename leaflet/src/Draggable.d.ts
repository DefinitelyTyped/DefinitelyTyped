/// <reference path="IEventPowered.d.ts" />
/// <reference path="LeafletEvent.d.ts" />
/// <reference path="Class.d.ts" />
declare module L {

    export class Draggable extends Class implements IEventPowered<Draggable> {

        /**
          * Creates a Draggable object for moving the given element when you start dragging
          * the dragHandle element (equals the element itself by default).
          */
        constructor(element: HTMLElement, dragHandle?: HTMLElement);
    
        /**
          * Creates a Draggable object for moving the given element when you start dragging
          * the dragHandle element (equals the element itself by default).
          */
        static draggable(element: HTMLElement, dragHandle?: HTMLElement): Draggable;

        /**
          * Enables the dragging ability.
          */
        enable(): void;
    
        /**
          * Disables the dragging ability.
          */
        disable(): void;
        
        ////////////////
        //// Methods for events
        ////////////////
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Draggable;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): Draggable;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Draggable;
        fire(type: string, data?: any): Draggable;
		addEventListener(eventMap: any, context?: any): Draggable;
        removeEventListener(eventMap?: any, context?: any): Draggable;
        cleanAllEventListeners(): Draggable
        on(eventMap: any, context?: any): Draggable;
        off(eventMap?: any, context?: any): Draggable;
    }
} 
 
 
