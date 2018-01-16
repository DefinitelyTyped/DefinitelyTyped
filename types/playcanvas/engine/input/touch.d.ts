type BrowserTouchEvent = typeof TouchEvent;
type BrowserTouch = typeof Touch;

declare namespace pc {

    /**
    * @name pc.TouchEvent
    * @class A Event corresponding to touchstart, touchend, touchmove or touchcancel. TouchEvent wraps the standard
    * browser event and provides lists of {@link pc.Touch} objects.
    * @description Create a new TouchEvent from an existing browser event
    * @param {pc.TouchDevice} device The source device of the touch events
    * @param {TouchEvent} event The original browser TouchEvent
    * @property {Element} element The target Element that the event was fired from
    * @property {pc.Touch[]} touches A list of all touches currently in contact with the device
    * @property {pc.Touch[]} changedTouches A list of touches that have changed since the last event
    */
    class TouchEvent {
        constructor(device: pc.TouchDevice, event: BrowserTouchEvent)

        element: Element;
        touches: pc.Touch[];
        changedTouches: pc.Touch[];

        /**
        * @function
        * @name pc.TouchEvent#getTouchById
        * @description Get an event from one of the touch lists by the id. It is useful to access
        * touches by their id so that you can be sure you are referencing the same touch.
        * @param {Number} id The identifier of the touch.
        * @param {pc.Touch[]} list An array of touches to search.
        * @returns {pc.Touch} The {@link pc.Touch} object or null.
        */
        getTouchById(id: number, list: pc.Touch[]): pc.Touch | null
    }

    /**
    * @name pc.Touch
    * @class A instance of a single point touch on a {@link pc.TouchDevice}
    * @description Create a new Touch object from the browser Touch
    * @param {Touch} touch The browser Touch object
    * @property {Number} id The identifier of the touch
    * @property {Number} x The x co-ordinate relative to the element that the TouchDevice is attached to
    * @property {Number} y The y co-ordinate relative to the element that the TouchDevice is attached to
    * @property {Element} target The target element of the touch event
    * @property {Touch} touch The original browser Touch object
    */
    class Touch {
        constructor(touch: BrowserTouch)
        id: number;
        x: number;
        y: number;
        target: Element;
        touch: BrowserTouch;
    }

    /**
    * @name pc.TouchDevice
    * @class Attach a TouchDevice to an element and it will receive and fire events when the element is touched.
    * See also {@link pc.Touch} and {@link pc.TouchEvent}
    * @description Create a new touch device and attach it to an element
    * @param {Element} element The element to attach listen for events on
    */
    class TouchDevice {
        constructor(element: Element)

        /**
        * @function
        * @name pc.TouchDevice#attach
        * @description Attach a device to an element in the DOM.
        * If the device is already attached to an element this method will detach it first
        * @param {Element} element The element to attach to
        */
        attach(element: Element): void;

        /**
        * @function
        * @name pc.TouchDevice#detach
        * @description Detach a device from the element it is attached to
        */
        detach(): void;

        /**
        * @function
        * @name pc.getTouchTargetCoords
        * @description Similiar to {@link pc.getTargetCoords} for the MouseEvents.
        * This function takes a browser Touch object and returns the co-ordinates of the
        * touch relative to the target element.
        * @param {Touch} touch The browser Touch object
        * @returns {Object} The co-ordinates of the touch relative to the touch.target element. In the format {x, y}
        */
        getTouchTargetCoords(touch: BrowserTouch): { x: number, y: number };


        // Events

        /**
         * @function
         * @name pc.Touch#on
         * @description Attach an event handler to an event
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.on('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         */
        on(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.Touch#off
         * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
         * if scope is not provided then all events with the callback will be unbound.
         * @param {String} [name] Name of the event to unbind
         * @param {Function} [callback] Function to be unbound
         * @param {Object} [scope] Scope that was used as the this when the event is fired
         * @example
         * var handler = function () {
         * };
         * obj.on('test', handler);
         *
         * obj.off(); // Removes all events
         * obj.off('test'); // Removes all events called 'test'
         * obj.off('test', handler); // Removes all handler functions, called 'test'
         * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
         */
        off(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.Touch#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.Touch#once
         * @description Attach an event handler to an event. This handler will be removed after being fired once.
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.once('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         * obj.fire('test', 1, 2); // not going to get handled
         */
        once(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
        * @function
        * @name pc.Touch#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;
    }
}