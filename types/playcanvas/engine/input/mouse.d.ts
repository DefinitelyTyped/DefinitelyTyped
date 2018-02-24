type BrowserMouseEvent = typeof MouseEvent;

declare namespace pc {
    /**
    * @name pc.MouseEvent
    * @class MouseEvent object that is passed to events 'mousemove', 'mouseup', 'mousedown' and 'mousewheel'.
    * @description Create an new MouseEvent
    * @param {pc.Mouse} mouse The Mouse device that is firing this event
    * @param {MouseEvent} event The original browser event that fired
    * @property {Number} x The x co-ordinate of the mouse pointer relative to the element pc.Mouse is attached to
    * @property {Number} y The y co-ordinate of the mouse pointer relative to the element pc.Mouse is attached to
    * @property {Number} dx The change in x co-ordinate since the last mouse event
    * @property {Number} dy The change in y co-ordinate since the last mouse event
    * @property {pc.MOUSEBUTTON} button The button
    * @property {Number} wheel A value representing the amount the mouse wheel has moved, only valid for {@link mousemove} events
    * @property {Element} element The element that the mouse was fired from
    * @property {Boolean} ctrlKey True if the ctrl key was pressed when this event was fired
    * @property {Boolean} shiftKey True if the shift key was pressed when this event was fired
    * @property {Boolean} altKey True if the alt key was pressed when this event was fired
    * @property {Boolean} metaKey True if the meta key was pressed when this event was fired
    * @property {MouseEvent} event The original browser event
    * @since 0.88.0
    */
    class MouseEvent {
        constructor(mouse: pc.Mouse, event: BrowserMouseEvent)

        x: number;
        y: number;
        dx: number;
        dy: number;
        button: number;
        wheel: number;
        element: Element;
        ctrlKey: boolean;
        shiftKey: boolean;
        altKey: boolean;
        metaKey: boolean;
        event: BrowserMouseEvent;
    }

    /**
     * @name pc.Mouse
     * @class A Mouse Device, bound to a DOM Element.
     * @description Create a new Mouse device
     * @param {Element} [element] The Element that the mouse events are attached to
     */
    class Mouse {
        constructor(element?: Element)

        /**
        * @function
        * @name pc.Mouse.isPointerLocked
        * @description Check if the mouse pointer has been locked, using {@link pc.Mouse#enabledPointerLock}
        * @returns {Boolean} True if locked
        */
        isPointerLocked(): void;


        /**
         * @function
         * @name pc.Mouse#attach
         * @description Attach mouse events to an Element.
         * @param {Element} element
         */
        attach(element: Element): void;

        /**
         * @function
         * @name pc.Mouse#detach
         * @description Remove mouse events from the element that it is attached to
         */
        detach(): void;

        /**
         * @function
         * @name pc.Mouse#disableContextMenu
         * @description Disable the context menu usually activated with right-click
         */
        disableContextMenu(): void;

        /**
         * @function
         * @name pc.Mouse#enableContextMenu
         * @description Enable the context menu usually activated with right-click. This option is active by default.
         */
        enableContextMenu(): void;

        /**
        * @function
        * @name pc.Mouse#enablePointerLock
        * @description Request that the browser hides the mouse cursor and locks the mouse to the element.
        * Allowing raw access to mouse movement input without risking the mouse exiting the element.
        * Notes: <br />
        * <ul>
        * <li>In some browsers this will only work when the browser is running in fullscreen mode. See {@link pc.Application#enableFullscreen}
        * <li>Enabling pointer lock can only be initiated by a user action e.g. in the event handler for a mouse or keyboard input.
        * </ul>
        * @param {Function} [success] Function called if the request for mouse lock is successful.
        * @param {Function} [error] Function called if the request for mouse lock is unsuccessful.
        */
        enablePointerLock(success?: (...args: any[]) => {}, error?: (...args: any[]) => {}): void;

        /**
        * @function
        * @name pc.Mouse#disablePointerLock
        * @description Return control of the mouse cursor to the user
        * @param {Function} [success] Function called when the mouse lock is disabled
        */
        disablePointerLock(success?: (...args: any[]) => {}): void;

        /**
         * @function
         * @name pc.Mouse#update
         * @description Update method, should be called once per frame
         * @param {Object} dt
         */
        update(dt: number): void;

        /**
         * @function
         * @name pc.Mouse#isPressed
         * @description Returns true if the mouse button is currently pressed
         * @param {pc.MOUSEBUTTON} button
         * @returns {Boolean} True if the mouse button is current pressed
         */
        isPressed(button: number): boolean;

        /**
         * @function
         * @name pc.Mouse#wasPressed
         * @description Returns true if the mouse button was pressed this frame (since the last call to update).
         * @param {pc.MOUSEBUTTON} button
         * @returns {Boolean} True if the mouse button was pressed since the last update
         */
        wasPressed(button: number): boolean;

        /**
         * @function
         * @name pc.Mouse#wasReleased
         * @description Returns true if the mouse button was released this frame (since the last call to update).
         * @param {pc.MOUSEBUTTON} button
         * @returns {Boolean} True if the mouse button was released since the last update
         */
        wasReleased(button: number): boolean;


        // Events

        /**
         * @function
         * @name pc.Mouse#on
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
         * @name pc.Mouse#off
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
         * @name pc.Mouse#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.Mouse#once
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
        * @name pc.Mouse#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;
    }
}
