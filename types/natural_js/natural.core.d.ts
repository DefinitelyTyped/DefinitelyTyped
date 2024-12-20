/**
 * The NC class is a CORE package of Natural-JS that provides various utilities and methods for collection manipulation, event binding, instance handling, value management, event retrieval, locale setting, etc.
 */
declare class NC {
    /**
     * Removes an element from the collection based on the provided index or identifier.
     *
     * @param {any} idx - The index or identifier of the element to be removed.
     * @param {number} length - The length of the collection from which the element is to be removed.
     * @return {this} The instance of the collection after the element has been removed.
     */
    remove_(idx: any, length: number): NC;
    /**
     * Binds an event handler that is executed with top priority to the specified event type of the selected element.
     *
     * @param {string} eventName - The name of the event to bind to.
     * @param {JQuery.EventHandler} eventHandler - The event handler function to execute when the event is triggered.
     * @return {this} The current object, for chainability.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010103.html
     */
    tpBind(eventName: string, eventHandler: JQuery.EventHandler<HTMLElement, any>): NC;
    /**
     * Returns or stores an instance of the component object or Controller object in the context element or View element of the UI component.
     * > Natural-JS stores the created object instances in the specified template (context or view) elements during the initialization of components or libraries to easily control block content such as tabs or popups.
     *
     * The method operates differently based on the number and type of arguments as follows:
     *   1. Returns all instances stored in the selected elements.
     *
     *      If only one instance is returned, the original instance object is returned. If there are two or more instances, they are stored and returned in an array. If no instances are found, `undefined` is returned.
     *      ```
     *      var all = N(".grid01", ".grid02").instance();
     *      ```
     *   2. Specifies all instances stored in the selected elements as arguments of the callback function.
     *      > The callback function is executed as many times as there are instances.
     *      ```
     *      var all = N(".grid01", ".grid02").instance(function(instanceId, instance) {
     *          // this: instance
     *          // instanceId: identifier of the stored instance
     *          // instance: stored instance
     *      });
     *      ```
     *   3. Returns all instances stored with the instanceId `name` in the selected elements.
     *
     *      If only one instance is returned, the original instance object is returned. If there are two or more instances, they are stored and returned in an array. If no instances are found, `undefined` is returned.
     *      ```
     *      var all = N(".grid01", ".grid02").instance("name");
     *      ```
     *   4. Returns all instances stored with the instanceId `name` in the selected elements as arguments of the callback function.
     *      > The callback function is executed as many times as there are instances.
     *      ```
     *      var all = N(".grid01", ".grid02").instance("name", function(instanceId, instance) {
     *          // this: instance
     *          // instanceId: identifier of the stored instance
     *          // instance: stored instance
     *      });
     *      ```
     *   5. Stores the instance with instanceId `name` in the selected elements.
     *      ```
     *      N(".grid01").instance("name", instance);
     *      ```
     *      > If the `instance` argument is a function type, it might not work correctly. Use object or string types for the `instance` argument instead.
     *
     * @param {string | NC.InstanceCallback} name - The name of the instance.
     *
     * Predefined instance names are as follows:
     *
     *  - Controller object of N.cont: cont
     *  - Instance of N.alert: alert
     *    > Stored in the .block_overlay_msg__ element.
     *  - Instance of N.button: button
     *  - Instance of N.datepicker: datepicker
     *  - Instance of N.popup: popup
     *    > The Controller object of the loaded popup content is stored in the .block_overlay_msg__ > .msg_box__ > .view_context__ element.
     *  - Instance of N.tab: tab
     *    > The Controller object of the loaded tab content is stored in the .tab__ > .{tab content element id} > .view_context__ element.
     *  - Instance of N.select: select
     *  - Instance of N.form: form
     *  - Instance of N.list: list
     *  - Instance of N.grid: grid
     *  - Instance of N.pagination: pagination
     *  - Instance of N.tree: tree
     *  - Instance of N.notify: notify
     *  - Instance of N.docs: docs
     *    > Components whose instance storage locations are not specifically mentioned are stored in the context elements specified by the context option.
     * @param {NC.Instance} [instance] - The instance to store in the selected elements or a callback function to retrieve instances.
     * > The callback function returns the index (arguments[0]) and each instance (arguments[1]). The `this` context of the callback function refers to each instance.
     * @return {void | NJS<NC.Instance[]> | NC.Instance[] | NC.Instance | NC} Returns undefined, an array of instances, a single instance, or the context itself.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010103.html
     */
    instance(
        name: string | NC.InstanceCallback,
        instance?: NC.Instance,
    ): undefined | NJS<NC.Instance[]> | NC.Instance[] | NC.Instance | NC;
    /**
     * Gets or selects the selected values of elements such as select, select[multiple=multiple], input[type=radio], and input[type=checkbox].
     *
     * > In the case of checkbox, if there is only one option, it operates in a mode that decides whether it is Y/N or 1/0.
     *
     * > You can set whether the default value for single selection is Y/N, 1/0, or on/off with the variables N.context.attr("core").sgChkdVal("Checked Value") and N.context.attr("core").sgUnChkdVal("Unchecked Value") in natural.config.js.
     *
     * @param {string|string[]|NC.ValsCallback} [vals] - Optional parameter that can be either a string, an array of strings, or a callback function.
     *
     * When specifying a single value, specify the value as a string, and when selecting two or more options, specify the value as an array of strings.
     *
     * If a function is specified, the callback function is executed for each selected option element. The arguments for the callback function are as follows:
     *  - this: The selected option element
     *  - args[0]: The index of the selected option element
     *  - args[1]: The selected option element
     * @return {string|string[] | NJS<HTMLElement[]> | this} If the vals argument is not provided, the selected value is returned. If the vals argument is specified, the elements that match the specified value are selected.
     * If only one is selected, a value of type string is returned, and if two or more are selected, the values are returned in an array.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010103.html
     */
    vals(vals?: string | string[] | NC.ValsCallback): string | string[] | NJS<HTMLElement[]> | NC;
    /**
     * Returns the events bound to the selected element.
     *
     * @param {string} eventName - The name of the event.
     * @param {string} [namespace] - The optional namespace for the event.
     * @return {NC.EventsObject | NC.EventObject} If neither the eventType argument nor the namespace argument is provided, all events are returned; if the namespace is not provided, only the events corresponding to the specified eventType are returned.
     * If the namespace argument is provided, the events are returned as an array object, otherwise they are returned as a jQuery object. If no events are bound, undefined is returned.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010103.html
     */
    events(eventName: string, namespace?: string): NC.EventsObject | NC.EventObject;
    /**
     * Gets the default locale value configured in the framework.
     * > The default messages of the framework will be processed in multiple languages according to the configured locale value.
     *
     * > Pre-registered multilingual message sets include en_US, ko_KR, and can be modified in the `message` property of the [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html).
     *
     * > The default locale of the framework can be set to the value of the `N.context.attr("core").locale` property in [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html).
     *
     * @return {string} If the `str` argument is provided, it returns `undefined`. If not provided, it returns a locale string such as "en_US" or "ko_KR".
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static locale(): string;
    /**
     * Sets the default locale value to be configured in the framework.
     * > The default messages of the framework will be processed in multiple languages according to the configured locale value.
     *
     * > Pre-registered multilingual message sets include en_US, ko_KR, and can be modified in the `message` property of the [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html).
     *
     * > The default locale of the framework can be set to the value of the `N.context.attr("core").locale` property in [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html).
     *
     * @param {string} str - Enter a valid locale string such as "en_US" or "ko_KR".
     * @return {void} This method does not return any value.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static locale(str: string): void;
    /**
     * Logs the `debug` level messages to the console.
     *
     * @param {...any} obj - The items to log to the console. They can be of any type and multiple arguments can be passed.
     * @return {Console} Displays the contents of the provided item in the browser console.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010103.html
     */
    static debug(...obj: any): Console;
    /**
     * Logs the messages to the console.
     *
     * @param {...any} obj - The items to log to the console. They can be of any type and multiple arguments can be passed.
     * @return {Console} Displays the contents of the provided item in the browser console.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static log(...obj: any): Console;
    /**
     * Logs the `info` level messages to the console.
     *
     * @param {...any} obj - The items to log to the console. They can be of any type and multiple arguments can be passed.
     * @return {Console} Displays the contents of the provided item in the browser console.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static info(...obj: any): Console;
    /**
     * Logs the `warning` level messages to the console.
     *
     * @param {...any} obj - The items to log to the console. They can be of any type and multiple arguments can be passed.
     * @return {Console} Displays the contents of the provided item in the browser console.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static warn(...obj: any): Console;
    /**
     * Throws an error and logs the error message to the browser console.
     *
     * > The N.error function returns an ErrorThrown object, so to raise an error, you must declare the throw statement before the N.error function.
     *   ```
     *   throw N.error("An error has occurred.");
     *   ```
     *
     * @param {string} msg - The error message to be logged.
     * @param {Error} [e] - If an Error object is specified, the error is raised using the specified object.
     * @return {Error} Error object.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static error(msg: string, e?: Error): Error;
    /**
     * Identifies the type of an object.
     *
     * @param {any} obj - The object to identify the type of.
     * @return {NC.ObjectType | string} The identified type of the object, either as an NC.ObjectType or a string.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static type(obj: any): NC.ObjectType | string;
    /**
     * Determines if the provided object is a string.
     *
     * @param {any} obj - The object to check.
     * @return {boolean} true if the value is a string; otherwise, false.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isString(obj: any): boolean;
    /**
     * Determines if the provided object is a numeric.
     *
     * @param {any} obj - The object to check.
     * @return {boolean} true if the value is a numeric; otherwise, false.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isNumeric(obj: any): boolean;
    /**
     * Determines if a given object is a plain object.
     * A plain object is one that is created by the Object constructor or one with a prototype of null.
     *
     * @param {any} obj - The object to test.
     * @return {boolean} true if the object is a plain object, false otherwise.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isPlainObject(obj: any): boolean;
    /**
     * Checks if the given object is empty (i.e., has no own enumerable properties).
     *
     * @param {object} obj - The object to check for emptiness.
     * @return {boolean} Returns true if the object is empty, false otherwise.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isEmptyObject(obj: any): boolean;
    /**
     * Determines if the given object is an array.
     *
     * @param {any} obj - The object to be checked.
     * @return {boolean} true if the object is an array, otherwise false.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isArray(obj: any): boolean;
    /**
     * Checks if the given object is array-like.
     * An object is considered array-like if it is not a function and has a `length` property that is a number.
     *
     * @param {any} obj - The object to check.
     * @return {boolean} - Returns `true` if the object is array-like, otherwise returns `false`.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isArraylike(obj: any): boolean;
    /**
     * Checks if the given object is of type jQuery object.
     *
     * @param {any} obj - The object to check.
     * @return {boolean} true if the object is a jQuery object, otherwise false.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isWrappedSet(obj: any): boolean;
    /**
     * Determines if the provided object is a DOM element.
     *
     * @param {any} obj - The object to check.
     * @return {boolean} true if the object is a DOM element, otherwise false.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static isElement(obj: any): boolean;
    /**
     * Converts a given element, array of elements, or any input to a CSS selector string.
     *
     * @param {NJS<HTMLElement[]> | HTMLElement | HTMLElement[] | any} el - The input element(s) or any value to convert.
     * @returns {string} The CSS selector string derived from the input.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static toSelector(el: NC.Selector): string;
    /**
     * A function that takes a variable number of arguments and returns an array of
     * JQuery.Deferred objects, ensuring that the deferred tasks are executed in serial order.
     *
     * @param {...Function} args - The arguments to be passed to each deferred task.
     * @returns {JQuery.Deferred[]} An array of JQuery.Deferred objects representing the serialized execution of tasks.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010104.html
     */
    static serialExecute(...args: unknown[]): JQuery.Deferred<any>[];
    /**
     * Provides methods to perform different levels of garbage collection.
     */
    static gc: {
        /**
         * Minimum garbage collection
         *
         * @returns {true} If the operation is successful, it unconditionally returns true.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010105.html
         */
        minimum(): true;
        /**
         * Full garbage collection
         *
         * @returns {true} If the operation is successful, it unconditionally returns true.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010105.html
         */
        full(): true;
        /**
         * Remove garbage instances from observables in ND.ds.
         *
         * @return {void} This method does not return any value.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010105.html
         */
        ds(): void;
    };
    /**
     * Provides utility functions for processing and manipulating strings.
     */
    static string: {
        /**
         * Checks if the given context string contains the specified substring.
         *
         * @param {string} context - The string in which to search for the substring.
         * @param {string} str - The substring to search for within the context string.
         * @return {boolean} - Returns true if the context string contains the specified substring, otherwise false.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        contains(context: string, str: string): boolean;

        /**
         * Checks if the given string context ends with the specified substring str.
         *
         * @param {string} context - The string to be checked.
         * @param {string} str - The substring to look for at the end of the context string.
         * @return {boolean} Returns true if the context string ends with the specified substring, otherwise false.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        endsWith(context: string, str: string): boolean;
        /**
         * Checks if the provided string starts with the given substring.
         *
         * @param {string} context - The full string to be checked.
         * @param {string} str - The substring to check for at the start of the full string.
         * @return {boolean} true if the full string starts with the substring, otherwise false.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        startsWith(context: string, str: string): boolean;
        /**
         * Inserts a given substring into a context string at a specified index.
         *
         * @param {string} context - The original string where the substring will be inserted.
         * @param {number} idx - The index at which to insert the substring.
         * @param {string} str - The substring to be inserted.
         * @return {string} - The resulting string after the insertion.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        insertAt(context: string, idx: number, str: string): string;
        /**
         * Removes all whitespace characters from the given string.
         *
         * @param {string} str - The string from which to remove whitespace.
         * @return {string} The string without any whitespace characters.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        removeWhitespace(str: string): string;
        /**
         * Pads the left side of a string with a specified character or string until the string reaches a given length.
         *
         * @param {string} str - The original string to be padded.
         * @param {number} length - The desired total length of the string after padding.
         * @param {string} padStr - The string to pad the original string with.
         * @return {string} - The padded string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        lpad(str: string, length: number, padStr: string): string;
        /**
         * Right pads a given string with a specified string up to a certain length.
         *
         * @param {string} str - The original string to be padded.
         * @param {number} length - The total length of the resulting string after padding.
         * @param {string} padStr - The string to pad with.
         * @return {string} The padded string of the specified length.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        rpad(str: string, length: number, padStr: string): string;
        /**
         * Checks if the provided string is empty.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} true if the string is empty, otherwise false.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        isEmpty(str: string): boolean;
        /**
         * Calculates the byte length of a string given a specific character byte length.
         *
         * @param {string} str - The input string for which to calculate the byte length.
         * @param {number} charByteLength - The default byte length of each individual character in the string.
         * @return {number} The total byte length of the string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        byteLength(str: string, charByteLength: number): number;
        /**
         * Trims the input string and returns an empty string if the input is null or undefined.
         *
         * @param str - The input string to be trimmed.
         * @return The trimmed string, or an empty string if the input is null or undefined.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        trimToEmpty(str: string): string;
        /**
         * Converts a null or undefined string to an empty string.
         * If the input string is neither null nor undefined, it will be returned as is.
         *
         * @param {string | null | undefined} str - The input string which can be null, undefined, or a string.
         * @return {string} The original string if it is not null/undefined, otherwise an empty string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        nullToEmpty(str: string | null | undefined): string;
        /**
         * Trims the input string and returns `null` if the resulting string is empty.
         *
         * @param {string} str - The input string to be trimmed.
         * @return {string | null} The trimmed string or null if the trimmed string is empty.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        trimToNull(str: string): string | null;
        /**
         * Trims the given string and returns `undefined` if the resulting string is empty.
         *
         * @param {string} str - The string to be trimmed.
         * @return {string | undefined} - The trimmed string or undefined if the trimmed string is empty.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        trimToUndefined(str: string): string | undefined;
        /**
         * Trims leading and trailing whitespace from the given string. If the resulting string is empty,
         * the method returns the string "0".
         *
         * @param {string} str - The string to be trimmed.
         * @return {string} - The trimmed string, or "0" if the resulting string is empty.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        trimToZero(str: string): string;
        /**
         * Trims a given string and replaces it with a provided default value if it is empty.
         *
         * @param {string} str - The string to be trimmed.
         * @param {string} val - The value to replace if the trimmed string is empty.
         * @return {string} The trimmed string, or the replacement value if empty.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010106.html
         */
        trimToVal(str: string, val: string): string;
    };
    /**
     * Provides various utilities for handling and manipulating dates.
     */
    static date: {
        /**
         * Calculates the difference in days between two dates given in string format.
         *
         * @param {string} refDateStr - The reference date as a string in the format YYYYMMDD.
         * @param {string} targetDateStr - The target date as a string in the format YYYYMMDD.
         * @return {number} The number of days between the reference date and the target date.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        diff(refDateStr: string, targetDateStr: string): number;
        /**
         * Converts a date string to an array of strings or numbers representing the date components.
         *
         * @param {string} str - The date string to be converted.
         * @param {string} format - The format of the date string (e.g. "YYYYMMDD").
         * @param {boolean} [isString] - Optional. If true, returns the components as strings; otherwise, returns them as numbers.
         * @return {string[] | number[]} An array of strings or numbers representing the date components.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        strToDateStrArr(str: string, format: string, isString?: boolean): string[] | number[];
        /**
         * Converts a string to a NC.Date object based on the specified format.
         *
         * @param {string} str - The date and time string to be converted.
         *  - "19991231": "1999-12-31 00:00:00"
         *  - "1999123103": "1999-12-31 03:00:00"
         *  - "199912310348": "1999-12-31 03:48:00"
         *  - "19991231034856": "1999-12-31 03:48:56"
         * @param {string} format - The expected format of the date and time string.
         *  - Y: Year
         *  - m: Month
         *  - d: Day
         *  - H: Hour
         *  - i: Minute
         *  - s: Second
         *  - e.g., "19991231": "Ymd"
         *  - e.g., "3112": "dm"
         *  - e.g., "12311999": "mdY"
         *  - e.g., "19991231120159": "YmdHis"
         *
         * > If the format argument is not provided, it is automatically set depending on the length of the input date string as follows:
         * > - 4 digits: "Y"
         * > - 6 digits: "Y-m"
         * > - 8 digits: "Y-m-d"
         * > - 10 digits: "Y-m-d H"
         * > - 12 digits: "Y-m-d H:i"
         * > - 14 digits: "Y-m-d H:i:s"
         *
         * > Date and time separator characters such as dash (-) and colon (:) are defined by the [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html) N.context.attr("data").formatter.date object functions. You can change these separator characters by modifying the return string of these functions.
         *
         * @return {NC.Date | null} A NC.Date object representing the date in the string, or null if the string does not match the format.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        strToDate(str: string, format: string): NC.Date | null;
        /**
         * Formats a given date string into the specified format.
         *
         * @param {string} str - The date string to be formatted.
         * @param {string} [format] - An optional format string that determines the output format. If not provided, a default format will be used.
         *  - Y: Year
         *  - m: Month
         *  - d: Day
         *  - e.g., "19991231": "Ymd"
         *  - e.g., "3112": "dm"
         *  - e.g., "12311999": "mdY"
         * @return {string} The formatted date string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        format(str: string, format?: string): string; // Format the date string
        /**
         * Converts a Date object to a timestamp.
         *
         * @param {Date} [dateObj] - The Date object to convert. If no Date object is provided, the current date and time are used.
         * @return {number} The timestamp representation of the given date.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        dateToTs(dateObj?: Date): number;
        /**
         * Converts a Unix timestamp to a JavaScript Date object.
         *
         * @param {number} [tsNum] - The Unix timestamp to convert. If not provided, the current time will be used.
         * @return {Date} The JavaScript Date object representing the given timestamp.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        tsToDate(tsNum?: number): Date;
        /**
         * Generates a list of date objects for a specified year and month.
         *
         * @param {number} year - The year for which the date list is to be generated.
         * @param {number} month - The month for which the date list is to be generated.
         * @return {[NC.JSONObject[]]} An array containing date objects for each day of the specified month in the specified year.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010108.html
         */
        dateList(year: number, month: number): [Date, Date, Date, Date, Date, Date, Date][];
    };
    /**
     * Provides utility methods for working with HTML elements, including converting data attributes to options objects, creating JSON data objects, defining data change effects, and calculating maximum z-index.
     */
    static element: {
        /**
         * Converts an object string defined by the `data-opts` attribute value of an HTML element to an options object.
         *
         * @param {NJS<HTMLElement[]>} ele - HTML elements to be converted.
         * @return {string} Options object.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010107.html
         */
        toOpts(ele: NJS<HTMLElement[]>): string;
        /**
         * Converts an array object string defined by the `data-format` or `data-validate` attribute value of an HTML element to an rule array object.
         *
         * @param {NJS<HTMLElement[]>} ele - HTML elements to be converted.
         * @param {"format" | "validate"} ruleset - The type of rules to be applied, either formatting or validation.
         * @return {NC.RuleObj} - The resulting rule object containing the applied rules.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010107.html
         */
        toRules(ele: NJS<HTMLElement[]>, ruleset: "format" | "validate"): NC.RuleObj;
        /**
         * Creates a JSON Data object with the id and value attributes of the specified input elements.
         *
         * > Used in the N.form's add method to create initial data.
         *
         * e.g. Convert the values of the input elements inside the #box element to JSON data.
         * ```
         * var data = N.element.toData($("#box").find(":input"));
         * ```
         *
         * @param {NJS<HTMLElement[]>} eles - N object containing only input select elements.
         * @return {JSONObject} JSON data object with id and value pairs of the input elements.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010107.html
         */
        toData(eles: NJS<HTMLElement[]>): NC.JSONObject;

        /**
         * The effect of changes displayed on elements when data is synchronized by ND.ds is defined.
         *
         * @param {NJS<HTMLElement[]>} eles - HTML elements on which the change effect will be displayed.
         * @return {void} This method does not return a value.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010107.html
         */
        dataChanged(eles: NJS<HTMLElement[]>): void;
        /**
         * Calculates the maximum z-index value among a collection of HTML elements.
         *
         * @param {NJS<HTMLElement[]>} ele - A collection of HTML elements to evaluate.
         * @return {number} The highest z-index value found within the collection of elements.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010107.html
         */
        maxZindex(ele: NJS<HTMLElement[]>): number;
    };
    /**
     * Provides various utility functions and properties related to browser operation.
     */
    static browser: {
        /**
         * Sets or gets a cookie based on the provided parameters. When only the name is provided, it retrieves the cookie value.
         * When name and value are provided, it sets a cookie with the optional expiry days and domain.
         *
         * @param {string} name - The name of the cookie.
         * @param {string} [value] - The value to be assigned to the cookie. If not provided, the function will return the current value of the cookie.
         * @param {number} [expiredays] - The number of days until the cookie expires. Defaults to session cookie if not provided.
         * @param {string} [domain] - The domain where the cookie is accessible. Defaults to current domain if not provided.
         * @return {string | undefined} - The value of the cookie if only name is provided. Undefined if setting a cookie.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010109.html
         */
        cookie(name: string, value?: string, expiredays?: number, domain?: string): string | undefined;
        /**
         * Removes a cookie by its name and optional domain.
         *
         * @param {string} name - The name of the cookie to remove.
         * @param {string} [domain] - The domain from which the cookie is to be removed. If omitted, the current domain is assumed.
         * @return {void} This method does not return anything.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010109.html
         */
        removeCookie(name: string, domain?: string): void;
        /**
         * Function to retrieve the version of Microsoft Internet Explorer (IE).
         *
         * This function detects the version of IE being used by the client and returns
         * it as a number. If the browser is not Internet Explorer, it returns 0.
         *
         * @return {number} The version of Internet Explorer as a number, or 0 if the browser is not IE.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010109.html
         */
        msieVersion(): number;
        /**
         * Checks if the given browser name matches the current browser type.
         *
         * @param {"opera" | "firefox" | "safari" | "chrome" | "ie" | "ios" | "android"} name - The name of the browser type to check against.
         * @return {boolean} true if the given browser name matches the current browser type, otherwise false.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010109.html
         */
        is(name: NC.BrowserType): boolean;
        /**
         * Retrieves the context path of the application.
         *
         * This function returns a string representing the context path,
         * which is typically the base path or root directory from which
         * the application is served. It is commonly used for constructing
         * URLs that are relative to the application's root.
         * - "opera": Opera Browser.
         * - "firefox": Mozilla Firefox Browser.
         * - "safari": Apple Safari Browser.
         * - "chrome": Google Chrome Browser.
         * - "ie": Microsoft Internet Explorer Browser.
         * - "android": Google Android OS
         * - "ios": Apple iOS
         *
         * @returns {string} The application context path.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010109.html
         */
        contextPath(): string;
        /**
         * Calculates and returns the width of the browser's scrollbar.
         *
         * This function creates a temporary DOM element, measures the difference
         * between its clientWidth and offsetWidth, and then removes the element.
         *
         * @returns {number} The width of the scrollbar in pixels.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010109.html
         */
        scrollbarWidth(): number;
    };
    /**
     * Provides various utilities for handling messages.
     */
    static message: {
        /**
         * Replaces variables in the given message string with corresponding values from the vars array.
         *
         * @param msg - The message string containing variables to be replaced. Variables are denoted by placeholders such as {0}, {1}, etc.
         * @param vars - An optional array of strings. Each entry in this array provides a replacement for the corresponding placeholder in the message string.
         * @return The message string with all placeholders replaced by their corresponding values from the vars array.
         */
        replaceMsgVars(msg: string, vars?: string[]): string;
        /**
         * Returns a message that matches the currently set locale from the input message resource.
         *
         * The framework's default locale is `N.context.attr("core")` value in [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html) This can be set as the value of the `locale` property.
         *
         * @param {NC.MessageResourceObj} resource - The message resource object that needs to be fetched.
         * Message resources must be created as object types and configure locale-specific message sets as follows.
         * ```
         * var message = {
         *     "ko_KR": {
         *         messageKey: "안녕 {0}."
         *     },
         *     "en_US": {
         *         messageKey: "Hello {0}."
         *     }
         * }
         *
         * var msg = N.message.get(message, "key", ["Natural-JS"]);
         *
         * // msg: "Hello Natural-JS."
         * ```
         * @param {string} key - This is the key of the message to retrieve from the message resource object.
         *                       The message string containing variables to be replaced. Variables are denoted by placeholders such as {0}, {1}, etc.
         * @param {string[]} [vars] - An optional array of strings. Each entry in this array provides a replacement for the corresponding placeholder in the message string.
         * @return {string} Message string, if there is no message string corresponding to key, the key value is returned as is.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010110.html
         */
        get(resource: NC.MessageResourceObj, key: string, vars?: string[]): string;
    };
    /**
     * Array utilities for various array operations.
     */
    static array: {
        /**
         * Removes duplicate objects from an array based on a specified key.
         * If no key is provided, it removes duplicate primitive values.
         *
         * @param {JSONObject[] | NJS<JSONObject[]>} arr - The array from which duplicates are to be removed.
         * @param {string} [key] - Optional. The property name on which duplication check is based.
         * @return {JSONObject[]} A new array with duplicates removed.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010111.html
         */
        deduplicate(arr: NC.JSONObject[] | NJS<NC.JSONObject[]>, key?: string): NC.JSONObject[];
    };
    /**
     * Provides utilities for processing JSON data.
     */
    static json: {
        mapFromKeys(obj: NC.JSONObject | NC.JSONObject[]): NC.JSONObject | NC.JSONObject[];
        /**
         * Merges two JSON arrays based on a specified key.
         *
         * > - Merges the arr2 argument based on the arr1 argument and excludes duplicate elements.
         * > - If you specify the object's property name as the third argument, duplicate elements are excluded based on that property.
         * > - Even if the objects specified by the arr1 argument are merged, their memory references do not change.
         *
         * @param {JSONObject[] | NJS<JSONObject[]>} arr1 - The first JSON array to merge.
         * @param {JSONObject[] | NJS<JSONObject[]>} arr2 - The second JSON array to merge.
         * @param {string} key - The key used to identify and merge objects from the arrays.
         * @return {JSONObject[]} The merged JSON array containing objects from both arrays.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010112.html
         */
        mergeJsonArray(
            arr1: NC.JSONObject[] | NJS<NC.JSONObject[]>,
            arr2: NC.JSONObject[] | NJS<NC.JSONObject[]>,
            key: string,
        ): NC.JSONObject[];
        /**
         * Formats the given data to a string representation with specified indentation.
         *
         * @param {object | object[] | string} oData - The data to be formatted. The data can be an object, array of objects, or json string.
         * @param {number} sIndent - The number of spaces to use for indentation.
         * @return {string | null} The formatted string or null if the data type is unsupported.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010112.html
         */
        format(oData: object | object[] | string, sIndent?: number): string | null;
    };
    /**
     * Provides utilities for processing event.
     */
    static event: {
        /**
         * Checks if the provided keyboard event is related to number input keys.
         * > This function was taken from "https://stackoverflow.com/a/13952775" and modified.
         *
         * @param e - The jQuery keyboard event to be checked.
         * @return A boolean value indicating whether the event is related to number input keys.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010113.html
         */
        isNumberRelatedKeys(e: JQuery.Event): boolean; //
        /**
         * Disables the current event handling, effectively preventing the default action and stopping the propagation of the event.
         *
         * @param {JQuery.Event} e - The jQuery event object associated with the event being handled.
         * @return {boolean} - Always returns false to indicate that the default action should not be executed.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0101.html&tab=html/naturaljs/refr/refr010113.html
         */
        disable(e: JQuery.Event): false;
        /**
         * Locks the window scrolling functionality to specific elements.
         *
         * @param {NJS<HTMLElement[]>} ele - HTML element that should lock window scrolling.
         * @return {void} This method does not return a value.
         */
        windowScrollLock(ele: NJS<HTMLElement[]>): void;
        /**
         * Retrieves the maximum duration of CSS animations or transitions applied to any of the given HTMLElements.
         *
         * @param {NJS<HTMLElement[]>} ele - A wrapped or unwrapped array of HTMLElements to analyze for CSS durations.
         * @param {string} css - The CSS property name (e.g., 'animation', 'transition') to inspect for durations.
         * @return {number} The maximum duration in milliseconds among all specified CSS properties on the provided elements.
         */
        getMaxDuration(ele: NJS<HTMLElement[]>, css: string): number;
        /**
         * Detects the end event name of a CSS animation.
         * > Referenced the code from [David Walsh](http://davidwalsh.name/css-animation-callback).
         *
         * @param {NJS<HTMLElement[]>} ele - The HTML elements to check for animation events.
         * @return {string | "nothing"} The name of the animation event, or "nothing" if no event is found.
         */
        whichAnimationEvent(ele: NJS<HTMLElement[]>): string | "nothing"; // Detect the end event name of CSS animations,
        /**
         * Detects the end event name of a CSS transition.
         * > Referenced the code from [David Walsh](http://davidwalsh.name/css-animation-callback).
         *
         * @param {NJS<HTMLElement[]>} ele - The HTML elements to check for transition events.
         * @return {string | "nothing"} The name of the animation event, or "nothing" if no event is found.
         */
        whichTransitionEvent(ele: NJS<HTMLElement[]>): string | "nothing";
    };
    /**
     * Used in N.formatter to process user formats.
     *
     * @see http://www.pengoworks.com/workshop/js/mask/ Mask JavaScript API(dswitzer@pengoworks.com)
     */
    static mask: {
        new(m: any): {
            /**
             * Sets a generic value for masking operations.
             */
            setGeneric(_v: string, _d: boolean): string;
            /**
             * Sets a numeric value for masking based on the provided parameters.
             */
            setNumeric(_v: string, _p: string, _d: boolean): string;
        };
    };
}

/**
 * Extends the JavaScript Date object to provide additional utility functions for date manipulation and formatting.
 */
interface Date {
    /**
     * Returns a string created with the date of the Date object in the specified format.
     * > This is a function that extends to the Javascript Date object.
     *
     * > Referenced the library from [http://www.svendtofte.com/javascript/javascript-date-string-formatting/](http://www.svendtofte.com/javascript/javascript-date-string-formatting/) and [http://www.php.net/date](http://www.php.net/date).
     *
     * @param {string} input - Date format string.
     *  - Y: Year
     *  - m: Month
     *  - d: Day
     *  - H: Hour
     *  - i: Minute
     *  - s: Second
     *  - e.g., "1999-12-31": "Y-m-d"
     *  - e.g., "31/12": "d/m"
     *  - e.g., "12-31-1999": "m-d-Y"
     *  - e.g., "1999-12-31-12:01:59": "Y-m-d H:i:s"
     * @param {number} [time] - A Timestamp value that sets the default date for the Date object.
     * @return {string} The formatted date string.
     */
    formatDate(input: string, time?: number): string;
}
