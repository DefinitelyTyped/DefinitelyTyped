type BrowserKeyboardEvent = typeof KeyboardEvent;

declare namespace pc {

    /**
    * @name pc.KeyboardEvent
    * @class The KeyboardEvent is passed into all event callbacks from the {@link pc.Keyboard}. It corresponds to a key press or release.
    * @description Create a new KeyboardEvent
    * @param {pc.Keyboard} keyboard The keyboard object which is firing the event.
    * @param {pc.KeyboardEvent} event The original browser event that was fired.
    * @property {Number} key The keyCode of the key that has changed. See the pc.KEY_* constants.
    * @property {Element} element The element that fired the keyboard event.
    * @property {KeyboardEvent} event The original browser event which was fired.
    * @example
    * var onKeyDown = function (e) {
    *     if (e.key === pc.KEY_SPACE) {
    *         // space key pressed
    *     }
    *     e.event.preventDefault(); // Use original browser event to prevent browser action.
    * };
    * app.keyboard.on("keydown", onKeyDown, this);
    */
    class KeyboardEvent {
        constructor(keyboard: pc.Keyboard, event: BrowserKeyboardEvent)

        key: number;
        element: Element;
        event: BrowserKeyboardEvent
    }

    /**
     * @private
     * @function
     * @name pc.toKeyCode
     * @description Convert a string or keycode to a keycode
     * @param {String | Number} s
     */
    function toKeyCode(s: string | number): number;

    /**
     * @name pc.Keyboard
     * @class A Keyboard device bound to an Element. Allows you to detect the state of the key presses.
     * Note, Keyboard object must be attached to an Element before it can detect any key presses.
     * @description Create a new Keyboard object
     * @param {Element} [element] Element to attach Keyboard to. Note that elements like &lt;div&gt; can't
     * accept focus by default. To use keyboard events on an element like this it must have a value of 'tabindex' e.g. tabindex="0". For more details: <a href="http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html">http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html</a>
     * @param {Object} [options]
     * @param {Boolean} [options.preventDefault] Call preventDefault() in key event handlers. This stops the default action of the event occurring. e.g. Ctrl+T will not open a new browser tab
     * @param {Boolean} [options.stopPropagation] Call stopPropagation() in key event handlers. This stops the event bubbling up the DOM so no parent handlers will be notified of the event
     * @example
     * var keyboard = new pc.Keyboard(window); // attach keyboard listeners to the window
     */
    class Keyboard {
        constructor(element?: Element, options?: { preventDefault?: boolean, stopPropagation?: boolean })

        /**
        * @function
        * @name pc.Keyboard#attach
        * @description Attach the keyboard event handlers to an Element
        * @param {Element} element The element to listen for keyboard events on.
        */
        attach(element: Element): void;

        /**
        * @function
        * @name pc.Keyboard#detach
        * @description Detach the keyboard event handlers from the element it is attached to.
        */
        detach(): void;

        /**
         * @private
         * @function
         * @name pc.Keyboard#toKeyIdentifier
         * @description Convert a key code into a key identifier
         * @param {Number} keyCode
         */
        private toKeyIdentifier(keyCode: number): string;


        /**
         * @private
         * @function
         * @name pc.Keyboard#update
         * @description Called once per frame to update internal state.
         */
        private update(dt: number): void;

        /**
         * @function
         * @name pc.Keyboard#isPressed
         * @description Return true if the key is currently down.
         * @param {Number} key The keyCode of the key to test. See the pc.KEY_* constants.
         * @return {Boolean} True if the key was pressed, false if not.
         */
        isPressed(key: number): boolean;

        /**
         * @function
         * @name pc.Keyboard#wasPressed
         * @description Returns true if the key was pressed since the last update.
         * @param {Number} key The keyCode of the key to test. See the pc.KEY_* constants.
         * @return {Boolean} true if the key was pressed.
         */
        wasPressed(key: number): boolean;

        /**
         * @function
         * @name pc.Keyboard#wasReleased
         * @description Returns true if the key was released since the last update.
         * @param {Number} key The keyCode of the key to test. See the pc.KEY_* constants.
         * @return {Boolean} true if the key was pressed.
         */
        wasReleased(key: number): boolean;


        // Events

        /**
         * @function
         * @name pc.Keyboard#on
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
         * @name pc.Keyboard#off
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
         * @name pc.Keyboard#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.Keyboard#once
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
        * @name pc.Keyboard#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;
    }
}