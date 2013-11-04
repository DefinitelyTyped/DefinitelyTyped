/// <reference path="Class.d.ts" />
/// <reference path="IEventPowered.d.ts" />
/// <reference path="LeafletEvent.d.ts" />
/// <reference path="Point.d.ts" />
declare module L {

    export class PosAnimation extends Class implements IEventPowered<PosAnimation> {

        /**
          * Creates a PosAnimation object.
          */
        constructor();
    
        /**
          * Run an animation of a given element to a new position, optionally setting
          * duration in seconds (0.25 by default) and easing linearity factor (3rd argument
          * of the cubic bezier curve, 0.5 by default)
          */
        run(element: HTMLElement, newPos: Point, duration?: number, easeLinearity?: number): PosAnimation;
        
        ////////////////
        //// Methods for events
        ////////////////
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): PosAnimation;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): PosAnimation;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): PosAnimation;
        fire(type: string, data?: any): PosAnimation;
		addEventListener(eventMap: any, context?: any): PosAnimation;
        removeEventListener(eventMap?: any, context?: any): PosAnimation;
        cleanAllEventListeners(): PosAnimation
        on(eventMap: any, context?: any): PosAnimation;
        off(eventMap?: any, context?: any): PosAnimation;
    }
}
