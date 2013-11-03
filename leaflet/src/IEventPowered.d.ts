/// <reference path="LeafletEvent.d.ts" />
declare module L {

    export interface IEventPowered<T> {

        /**
          * Adds a listener function (fn) to a particular event type of the object. You
          * can optionally specify the context of the listener (object the this keyword
          * will point to). You can also pass several space-separated types (e.g. 'click
          * dblclick').
          */
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): T;
        
        /**
          * The same as above except the listener will only get fired once and then removed.
          */
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): T;
        /**
          * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
          */
        addEventListener(eventMap: any, context?: any): T;
        
        /**
          * Removes a previously added listener function. If no function is specified,
          * it will remove all the listeners of that particular event from the object.
          */
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): T;
        
        /**
          * Removes a set of type/listener pairs.
          */
        removeEventListener(eventMap?: any, context?: any): T;
    
        /**
          * Returns true if a particular event type has some listeners attached to it.
          */
        hasEventListeners(type: string): boolean;
        
        /**
          * Fires an event of the specified type. You can optionally provide an data object
          * — the first argument of the listener function will contain its properties.
          */
        fireEvent(type: string, data?: any): T;
                
        /**
          * Removes all listeners to all events on the object.
          */
        cleanAllEventListeners()

        /**
          * Alias to addEventListener.
          */
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): T;

        /**
          * Alias to addEventListener.
          */
        on(eventMap: any, context?: any): T;

        /**
          * Alias to addOneTimeEventListener.
          */
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): T;

        /**
          * Alias to removeEventListener.
          */
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): T;

        /**
          * Alias to removeEventListener.
          */
        off(eventMap?: any, context?: any): T;
        
        /**
          * Alias to fireEvent.
          */
        fire(type: string, data?: any): T;
    }
}
