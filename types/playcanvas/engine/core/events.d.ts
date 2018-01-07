declare namespace pc {
    /**
     * @name pc.events
     * @namespace
     * @description global namespace that allows to extend other objects with events
     * Additionally it can handle global events it self.
     * @example
     * var obj = { };
     * pc.events.attach(obj);
     *
     * // subscribe to an event
     * obj.on('hello', function(str) {
     *     console.log('event hello is fired', str);
     * });
     *
     * // fire event
     * obj.fire('hello', 'world');
     */
    namespace events {

        /**
        * @function
        * @name pc.events.attach
        * @description Attach event methods 'on', 'off', 'fire' and 'hasEvent' to the target object
        * @param {Object} target The object to add events to.
        * @return {Object} The target object
        * @example
        * var obj = { };
        * pc.events.attach(obj);
        */
        function attach<T>(target: T): T;

        /**
         * @function
         * @name pc.events.on
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
        function on(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.events.off
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
        function off(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.events.fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        function fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.events.once
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
        function once(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
        * @function
        * @name pc.events.hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        function hasEvent(name: string): boolean;
    }
}