declare namespace pc {

    /**
    * @name pc.Tags
    * @class Set of tag names
    * @description Create an instance of a Tags.
    * @param {Object} [parent] Parent object who tags belong to.
    * Note: Tags are used as addition of `pc.Entity` and `pc.Asset` as `tags` field.
    */
    class Tags {
        constructor(parent: pc.Entity | pc.Asset)

        /**
        * @function
        * @name pc.Tags#add
        * @description Add a tag, duplicates are ignored. Can be array or comma separated arguments for multiple tags.
        * @param {String} name Name of a tag, or array of tags
        * @returns {Boolean} true if any tag were added
        * @example
        * tags.add('level-1');
        * @example
        * tags.add('ui', 'settings');
        * @example
        * tags.add([ 'level-2', 'mob' ]);
        */
        add(): boolean;


        /**
        * @function
        * @name pc.Tags#remove
        * @description Remove tag.
        * @param {String} name Name of a tag or array of tags
        * @returns {Boolean} true if any tag were removed
        * @example
        * tags.remove('level-1');
        * @example
        * tags.remove('ui', 'settings');
        * @example
        * tags.remove([ 'level-2', 'mob' ]);
        */
        remove(): boolean;


        /**
        * @function
        * @name pc.Tags#clear
        * @description Remove all tags.
        * @example
        * tags.clear();
        */
        clear(): void;


        /**
        * @function
        * @name pc.Tags#has
        * @description Check if tags satisfy filters.
        * Filters can be provided by simple name of tag, as well as by array of tags.
        * When an array is provided it will check if tags contain each tag within the array.
        * If any of comma separated argument is satisfied, then it will return true.
        * Any number of combinations are valid, and order is irrelevant.
        * @param {String} name of tag, or array of names
        * @returns {Boolean} true if filters are satisfied
        * @example
        * tags.has('player'); // player
        * @example
        * tags.has('mob', 'player'); // player OR mob
        * @example
        * tags.has([ 'level-1', 'mob' ]); // monster AND level-1
        * @example
        * tags.has([ 'ui', 'settings' ], [ 'ui', 'levels' ]); // (ui AND settings) OR (ui AND levels)
        */
        has(): boolean;


        /**
        * @function
        * @name pc.Tags#list
        * @description Returns immutable array of tags
        * @returns {String[]} copy of tags array
        */
        list(): string[];

        /**
         * @field
         * @readonly
         * @type Number
         * @name pc.Tags#size
         * @description Number of tags in set
         */
        readonly size: number;


        // Events

        /**
         * @function
         * @name pc.Tags#on
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
         * @name pc.Tags#off
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
         * @name pc.Tags#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.Tags#once
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
        * @name pc.Tags#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;
    }
}
