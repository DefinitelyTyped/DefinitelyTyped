interface ChocolateChipStatic {
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM HTMLElement to use as context
     */
    (
        selector: string | HTMLElement | Document,
        context?: HTMLElement | ChocolateChipElementArray,
    ): ChocolateChipElementArray;

    /**
     * Binds a function to be executed when the DOM has finished loading.
     *
     * @param callback A function to execute after the DOM is ready.
     */
    (callback: () => any): void;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param element A DOM element to wrap in an array.
     */
    (element: HTMLElement): ChocolateChipElementArray;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param elementArray An array of DOM elements to convert into a ChocolateChip Collection.
     */
    (elementArray: ChocolateChipElementArray): ChocolateChipElementArray;

    /**
     * Accepts the document element and returns it wrapped in an array.
     *
     * @param document The document object.
     */
    (document: Document): Document[];

    /**
     * If no argument is provided, return the document as a ChocolateChipElementArray.
     */
    (): Document[];

    /**
     * Extend the ChocolateChipJS object itself with the provided object.
     *
     * @param object The object to add to ChocolateChipJS.
     * @return The ChocolateChipJS object.
     */
    extend(object: Object): Object;

    /**
     * Extend a target object with another object.
     *
     * @param target An object to extend.
     * @param object The object to add to the target.
     * @return The extended object.
     */
    extend(target: Object, object: Object): Object;

    /**
     * The base for extending ChocolateChipJS collections, which are arrays of elements.
     */
    fn: {
        /**
         * This method adds the provided object to the Array prototype to make it available to all arrays of HTML elements.
         *
         * @param object And object to add to element arrays.
         * @return The extended array of elements.
         */
        extend(object: Object): HTMLElement[];
    };

    /**
     * Contains the version of ChocolateChipJS in use.
     */
    version: string;

    /**
     * Contains the name of the library (ChocolateChip).
     */
    libraryName: string;

    /**
     * An empty function.
     */
    noop(): void;

    /**
     * Uuid number.
     */
    uuid: number;

    /**
     * Create a random number to use as a uuid.
     */
    uuidNum(): number;

    /**
     * Creates a uuid using uuidNum().
     */
    makeUuid(): string;

    /**
     * Create a ChocolateChip collection object by creating elements from an HTML string.
     */
    make(selector: string): ChocolateChipElementArray;

    /**
     * Create a ChocolateChip collection object by creating elements from an HTML string. This is an alias for $.make.
     */
    html(selector: string): ChocolateChipElementArray;

    /**
     * Replace one element with another.
     * @return {HTMLElement[]}
     */
    replace(newElement: ChocolateChipElementArray, oldElement: ChocolateChipElementArray): void;

    /**
     * Load a JavaScript file from a url, then execute it.
     *
     * @param url A string containing the URL where the script resides.
     * @param callback A callback function that is executed after the script loads.
     * @return {void}
     */
    require(url: string, callback: Function): Function;

    /**
     * Process JavaScript returned by Ajax request. An optional name can be used to create a custom variable name by which the data is exposed, otherwise it is exposed with the variable "data".
     *
     * @param url A string containing the URL where the script resides.
     * @param callback A callback function that is executed after the script loads.
     * @return {Function}
     */
    processJSON(json: string, name?: string): any;

    /**
     * This method takes a referenced form and serializes its element names and values, which it returns as a string. This is required if you want to send form data.
     *
     * @param element A string, HTML element or ChocolateChipElementArray containing a reference to a from.
     * @return An encode string form element names and values.
     */
    serialize(element: any): string;

    /**
     * Parse the data in a Promise response as JSON.
     *
     * @param response The response from a Promise.
     */
    json(reponse: Response): JSON;

    /**
     * This method will defer the execution of a function until the call stack is clear.
     *
     * @param callback A function to execute.
     * @param duration The number of milliseconds to delay execution.
     */
    delay(callback: Function, duration?: number): any;

    /**
     * The method will defer the execution of its callback until the call stack is clear.
     *
     * @param callback A callback to execute after a delay.
     */
    defer(callback: Function): Function;

    /**
     * This method makes sure a method always returns an array.
     * If no values are available to return, it returns and empty array.
     * This is to make sure that methods that expect a chainable array will not throw and exception.
     *
     * @param result The result of a method to test if it can be returned in an array.
     * @return An array holding the results of a method, otherwise an empty array.
     */
    returnResult(result: HTMLElement[]): any[];

    /**
     * This method allows you to execute a callback on each item in an array of elements.
     *
     * @param array An array of elements.
     * @param callback A callback to execute on each element. This has two parameters: the context, followed by the index of the current iteration.
     */
    each<T>(array: T[], callback: (ctx: T, idx: number) => any): any;

    /**
     * This method will concatenate strings or values as a cleaner alternative to using the '+' operator.
     *
     * @param {string | number} A comma separated series of strings to concatenate.
     */
    concat(...string: string[]): string;

    /**
     * This method takes a space-delimited string of words and returns it as an array where the individual words are indices.
     *
     * @param Any string with values separated by spaces.
     */
    w(string: string): string[];

    /**
     * This method converts a string of hyphenated tokens into a camel cased string.
     *
     * @param string A string of hyphenated tokens.
     */
    camelize(string: string): string;

    /**
     * This method converts a camel case string into lowercase with hyphens.
     *
     * @param string A camel case string.
     */
    deCamelize(string: string): string;

    /**
     * This method capitalizes the first letter of a string.
     */
    capitalize(string: string, boolean?: boolean): string;

    /**
     * Determine whether the argument is a string.
     *
     * @param obj Object to test whether or not it is a string.
     */
    isString(obj: any): boolean;

    /**
     * Determine whether the argument is an array.
     *
     * @param obj Object to test whether or not it is an array.
     */
    isArray(obj: any): boolean;

    /**
     * Determine whether the argument is a function.
     *
     * @param obj Object to test whether or not it is an function.
     */
    isFunction(obj: any): boolean;

    /**
     * Determine whether the argument is an object.
     *
     * @param obj Object to test whether or not it is an object.
     */
    isObject(obj: any): boolean;

    /**
     * Determine whether the argument is an empty object.
     *
     * @param obj Object to test whether or not it is an empty object.
     * @return boolean
     */
    isEmptyObject(obj: any): boolean;

    /**
     * Determine whether the argument is an empty object.
     *
     * @param obj Object to test whether or not it is an empty object.
     */
    isEmptyObject(obj: any): boolean;

    /**
     * Determine whether the argument is a number.
     *
     * @param obj Object to test whether or not it is a number.
     */
    isNumber(obj: any): boolean;

    /**
     * Determine whether the argument is an integer.
     *
     * @param obj Object to test whether or not it is an integer.
     */
    isInteger(obj: any): boolean;

    /**
     * Determine whether the argument is a float.
     *
     * @param obj Object to test whether or not it is a float.
     */
    isFloat(obj: any): boolean;

    /**
     * Whether device is iPhone.
     */
    isiPhone: boolean;

    /**
     * Whether device is iPad.
     */
    isiPad: boolean;

    /**
     * Whether device is iPod.
     */
    isiPod: boolean;

    /**
     * Whether OS is iOS.
     */
    isiOS: boolean;

    /**
     * Whether OS is Android
     */
    isAndroid: boolean;

    /**
     * Whether OS is WebOS.
     */
    isWebOS: boolean;

    /**
     * Whether OS is Blackberry.
     */
    isBlackberry: boolean;

    /**
     * Whether OS supports touch events.
     */
    isTouchEnabled: boolean;

    /**
     * Whether there is a network connection.
     */
    isOnline: boolean;

    /**
     * Whether app is running in stanalone mode.
     */
    isStandalone: boolean;

    /**
     * Whether OS is iOS 6.
     */
    isiOS6: boolean;

    /**
     * Whether OS i iOS 7.
     */
    isiOS7: boolean;

    /**
     * Whether OS is Windows.
     */
    isWin: boolean;

    /**
     * Whether device is Windows Phone.
     */
    isWinPhone: boolean;

    /**
     * Whether browser is IE10.
     */
    isIE10: boolean;

    /**
     * Whether browser is IE11.
     */
    isIE11: boolean;

    /**
     * Whether browser is Webkit based.
     */
    isWebkit: boolean;

    /**
     * Whether browser is running on mobile device.
     */
    isMobile: boolean;

    /**
     * Whether browser is running on desktop.
     */
    isDesktop: boolean;

    /**
     * Whether browser is Safari.
     */
    isSafari: boolean;

    /**
     * Whether browser is Chrome.
     */
    isChrome: boolean;

    /**
     * Is native Android browser (not mobile Chrome).
     */
    isNativeAndroid: boolean;

    /**
     * Serialize
     */
    serialize(form: HTMLFormElement | ChocolateChipElementArray): string;

    /**
     * Grabs values from a form and converts them into a JSON object.
     *
     * @param rootNode: A form whose values you want to convert to JSON.
     * @param delimiter A delimiter to namespace your form values. The default is "."
     * You use the form input's name to set up the namespace structure for your JSON, e.g. name="newUser.name.first".
     */
    form2JSON(rootNode: string | HTMLElement, delimiter: string): Object;

    /**
     * Subscribe to a publication. You provide the topic you want to subscribe to, as well as a callback to execute when a publication occurs.
     * Any data passed by the publisher is exposed to the callback as its second parameter. The callback's first parameter is the published topic.
     *
     * @param topic A topic to subscribe to. This can be a single term, or any type of namespaced term with delimiters.
     * @param callback You can receive any type: string, number, array, object, etc.
     */
    subscribe(topic: string, callback: (topic: string, data: any) => any): boolean;

    /**
     * Unsubscribe from a topic. Pass this the topic you wish to unsubscribe from. The subscription will be terminated immediately.
     *
     * @param topic The name of the topic to unsubscribe from.
     */
    unsubscribe(topic: string): void;

    /**
     *    Publish a topic with data for the topic's subscribers to receive.
     *
     * @param topic The topic you wish to publish.
     * @param data The data to send with the publication. This can be of any type: string, number, array, object, etc.
     * @return {void}
     */
    publish(topic: string, data: any): string;

    /**
     * Object used to store string templates and parsed templates.
     *
     * @param {strin} A string defining the template.
     * @param {string} A label used to access an object's properties in the template. If none is provided it defaults to "data": [[= data.name]].
     * @return {void}
     */
    templates: Object;

    /**
     * This method returns a parsed template.
     */
    template: {
        /**
         * This method parses a string and an optoinal variable name and returns a parsed template in the form of a function. You can then pass this function data to get rendered nodes.
         *
         * @param template A string of markup to use as a template.
         * @param variable An option name to use in the template. If it were "myData": [[= myData.name]]. Otherwise it defaults to "data": [[= data.name]].
         */
        (template: string, variable?: string): Function;

        /**
         * The repeater method used to rendering iterable template data.
         */
        repeater: {
            /**
             * Use this method to render declarative temlate repeaters. This expects a "data-repeater" attribute whose value points to data stored on $.template.data.
             */
            (): void;

            /**
             * A method to repeated output a template.
             *
             * @param element The target container into which the content will be inserted.
             * @param template A string of markup.
             * @param data The iterable data the template will consume.
             */
            (element: ChocolateChipElementArray, template: string, data: any): void;
        };

        /**
         * An object that holds the reference to the controller for a repeater.
         * This is used to cache the data that a repeater uses. After the repeater is rendered, the reference is deleted from this object.
         * Example: $.template.data["myRepeater"] = [{name: "Joe"}, {name: "Sue"}];
         */
        data: any;

        /**
         * Use this value to output an index value in a template repeater.
         */
        index: number;
    };

    /**
     * ATENTION: DO NOT TOUCH!
     * This is the ChocolateChipJS cache.
     * This is used to store details about registered events and data.
     * You should not touch any of these values, even though they are exposed, as this can seriously impair the behavior of your app.
     *
     * data: this is used by $(element).data() to store data.
     * events: this is used by the event system.
     */
    chch_cache: {
        /**
         * DO NOT TOUCH! This hold data stored by $(element).data().
         */
        data: {};

        /**
         * DO NOT TOUCH! This stores information about registered events.
         */
        events: {
            keys: any[];
            values: any[];
            set: Function;
            hasKey: Function;
            _delete: Function;
        };
    };
}

/**
 * Interface for ChocolateChipJS Element Collections.
 */
interface ChocolateChipElementArray extends Array<HTMLElement> {
    /**
     * Iterate over an Array object, executing a function for each matched element.
     */
    each(func: (ctx: any, idx: number) => void): void;

    /**
     * Sorts an array and removes duplicates before returning it.
     */
    unique(): ChocolateChipElementArray;

    /**
     * This method returns the element at the position in the array indicated by the argument. This is a zero-based number.
     * When dealing with document nodes, this allows you to cherry pick a node from its collection based on its
     * position amongst its siblings.
     *
     * @param index Value indicating the node you wish to access from a collection. This is zero-based.
     */
    eq(index: number): ChocolateChipElementArray;

    /**
     * Search for a given element from among the matched elements on a collection.
     * This method returns the index value as an integer.
     */
    index(): number;

    /**
     * Search for a given element from among the matched elements on a collection.
     * This method returns the index value as an integer.
     *
     * @param selector A selector representing an element to look for in a collection of elements.
     */
    index(selector: string | HTMLElement[]): number;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it matches the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    is(selector: string): ChocolateChipElementArray;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it matches the given arguments.
     *
     * @param elements One or more elements to match the current set of elements against.
     */
    is(element: any): ChocolateChipElementArray;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it does not match the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    isnt(selector: string): ChocolateChipElementArray;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it does not match the given arguments.
     *
     * @param elements One or more elements to match the current set of elements against.
     */
    isnt(element: any): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    has(selector: string): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param contained A DOM element to match elements against.
     */
    has(contained: HTMLElement): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to those that have a descendant that does not match the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @ return HTMLElement[]
     */
    hasnt(selector: string): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to those that have a descendant that does not match the selector or DOM element.
     *
     * @param contained A DOM element to match elements against.
     */
    hasnt(contained: HTMLElement): ChocolateChipElementArray;

    /**
     * Same overload as is present in the base type
     */
    find(predicate: (value: HTMLElement, index: number, obj: HTMLElement[]) => boolean, thisArg?: any): HTMLElement;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector or element.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    find(selector: string): ChocolateChipElementArray;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector or element.
     *
     * @param element An element to match elements against.
     */
    find(element: HTMLElement): ChocolateChipElementArray;

    /**
     * Get the immediately preceding sibling of each element in the set of matched elements.
     */
    prev(): ChocolateChipElementArray;

    /**
     * Get the immediately following sibling of each element in the set of matched elements.
     */
    next(): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to the first in the set.
     */
    first(): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to the last in the set.
     */
    last(): ChocolateChipElementArray;

    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    children(selector?: string): ChocolateChipElementArray;

    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     * If multiple elements have the same parent, only one instance of the parent is returned.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    parent(selector?: string): ChocolateChipElementArray;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree, or, if a number is provided,
     * retrieving that ancestor based on its distance from the element.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    ancestor(selector: string | number): ChocolateChipElementArray;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    closest(selector: string | number): ChocolateChipElementArray;

    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    siblings(selector?: string): ChocolateChipElementArray;

    /**
     * Get the HTML contents of the first element in the set of matched elements.
     */
    html(): ChocolateChipElementArray;

    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     */
    html(htmlString: string): ChocolateChipElementArray;

    /**
     * Get the value of style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     */
    css(propertyName: string): string;

    /**
     * Set one or more CSS properties for the set of matched elements using a quoted string.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     */
    css(propertyName: string, value: string): ChocolateChipElementArray;

    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     */
    css(properties: Object): ChocolateChipElementArray;

    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     * @return string
     */
    attr(attributeName: string): string;

    /**
     * Set an attribute for the set of matched elements.
     *
     * @param attributeName A string indicating the attribute to set.
     * @param value A string indicating the value to set the attribute to.
     */
    attr(attributeName: string, value: string): ChocolateChipElementArray;

    /**
     * Remove an attribute from a node.
     *
     * @param attributeName A string indicating the attribute to remove.
     */
    removeAttr(attributeName: string): ChocolateChipElementArray;

    /**
     * Return any of the matched elements that have the given attribute.
     *
     * @param className The class name to search for.
     */
    hasAttr(attributeName: string): ChocolateChipElementArray;

    /**
     * Test whether an attribute exists on the first element in the set of matched elements. The value returned is a boolean.
     *
     * @param attributeName The name of the attribute to get.
     */
    prop(propertyName: string): boolean;

    /**
     * Set an property for the set of matched elements.
     *
     * @param propertyName A string indicating the property to set.
     * @param value A string indicating the value to set the property to.
     */
    prop(propertyName: string, value: any | boolean): ChocolateChipElementArray;

    /**
     * Remove an element property.
     *
     * @param property The property to remove.
     */
    removeProp(property: string): ChocolateChipElementArray;

    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     */
    addClass(className: string): ChocolateChipElementArray;

    /**
     * Remove a single class or multiple classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     */
    removeClass(className?: string): ChocolateChipElementArray;

    /**
     * Add or remove a classe from each element in the set of matched elements, depending on whether the class is present or not.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     */
    toggleClass(className: string, swtch?: boolean): ChocolateChipElementArray;

    /**
     * Return any of the matched elements that have the given class.
     *
     * @param className The class name to search for.
     */
    hasClass(className: string): ChocolateChipElementArray;

    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any Javascript type including Array or Object.
     */
    data(key: string, value: any): ChocolateChipElementArray;

    /**
     * Return the value at the named data store for the first element in the element collection, as set by
     * data(name).
     *
     * @param key Name of the data stored.
     */
    data(key: string): any;

    /**
     * Remove the value at the named data store for the first element in the element collection, as set by data(name, value).
     *
     * @param key Name of the data stored.
     */
    removeData(key?: string): any;

    /**
     * Store string data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it must be a string. You can convert JSON into a string to use with this.
     */
    dataset(key: string, value: any): ChocolateChipElementArray;

    /**
     * Retrieve a dataset key's value for the first element in the element collection.
     *
     * @param key A string naming the piece of data to set.
     */
    dataset(key: string): ChocolateChipElementArray;

    /**
     * Return the value at the named data store for the first element in the element collection, as set by data(name, value).
     *
     * @param key Name of the data stored.
     */
    data(key: string): any;

    /**
     * Store arbitrary data associated with the matched element.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any Javascript type including Array or Object.
     */
    data(key: string, value?: any): ChocolateChipElementArray;

    /**
     * Get the current value of the first element in the set of matched elements.
     */
    val(): any;

    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text or an array of strings corresponding to the value of each matched element
     * to set as selected/checked.
     */
    val(value: string): ChocolateChipElementArray;

    /**
     * Set the property of an element to enabled by removing the "disabled" attribute.
     */
    enable(): ChocolateChipElementArray;

    /**
     * Set the property of an element to "disabled".
     */
    disable(): ChocolateChipElementArray;

    /**
     * Display the matched elements.
     *
     * @param speed A string or number determining how long the animation will run.
     * @param callback A function to call once the animation is complete.
     */
    show(duration?: number | string, callback?: Function): ChocolateChipElementArray;

    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param callback A function to call once the animation is complete.
     */
    hide(duration?: number | string, callback?: Function): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param content HTML string, DOM element, array of elements to insert before each element in the set of matched elements.
     */
    before(content: ChocolateChipElementArray | HTMLElement | string): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param content HTML string, DOM element, array of elements to insert after each element in the set of matched elements.
     */
    after(content: ChocolateChipElementArray | HTMLElement | string): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param content DOM element, array of elements, or HTML string to insert at the end of each element in the set
     * of matched elements.
     */
    append(content: ChocolateChipElementArray | HTMLElement | Text | string): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, at the beginning of each element in the set of matched elements.
     *
     * @param content DOM element, array of elements, or HTML string to insert at the beginning of each element in the set of matched elements.
     */
    prepend(content: ChocolateChipElementArray | HTMLElement | Text | string): ChocolateChipElementArray;

    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, or HTML string. The matched set of elements will be inserted at the beginning of the element specified by this parameter.
     */
    prependTo(target: any[] | HTMLElement | string): ChocolateChipElementArray;

    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, or HTML string. The matched set of elements will be inserted at the end of the element specified by this parameter.
     * If no position value is provided it will simply append the content to the target.
     */
    appendTo(target: any[] | HTMLElement | string): ChocolateChipElementArray;

    /**
     * Insert element(s) into the target element.
     */
    insert(content: string, position?: number | string): ChocolateChipElementArray;

    /**
     * Create a copy of the set of matched elements.
     *
     * @param value A Boolean indicating whether to copy the element(s) with their children. A true value copies the children.
     */
    clone(value?: boolean): ChocolateChipElementArray;

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param wrappingElement A selector or HTML string specifying the structure to wrap around the matched elements.
     */
    wrap(wrappingElement: string): ChocolateChipElementArray;

    /**
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
     */
    unwrap(): ChocolateChipElementArray;

    /**
     * Remove the set of matched elements from the DOM. If there are any attached events, this will remove them to prevent memory leaks.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     */
    remove(selector?: string): ChocolateChipElementArray;

    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     */
    empty(): ChocolateChipElementArray;

    /**
     * Get an object of the current coordinates of the first element in the set of matched elements, relative to the document.
     * These are: top, left, bottom and right. The values are numbers representing pixel values.
     */
    offset(): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };

    /**
     * Get the current computed width for the first element in the set of matched elements,
     * including padding but excluding borders.
     */
    width(): number;

    /**
     * Get the current computed height for the first element in the set of matched elements,
     * including padding but excluding borders.
     */
    height(): number;

    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants
     */
    text(): string;

    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text
     *        The text to set as the content of each matched element.
     *        When Number is supplied, it will be converted to a String representation.
     *        To delete text, use ChocolateChipElementArray.empty() or ChocolateChipElementArray.remove().
     */
    text(text: string | number): HTMLElement;

    /**
     * A method to animate DOM nodes using CSS. This uses CSS transitions.
     *
     * @param options And object of key value pairs define the CSS properties and values to animate.
     * @param duration A string representing the time. Should have a time identifier: "200s", "200ms", etc.
     * @param easing A string indicating the easing for the animation, such as "ease-out", "ease-in", "ease-in-out".
     */
    animate(options: Object, duration?: string, easing?: string): void;

    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     */
    bind(eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

    /**
     * Remove a handler for an event from the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     */
    unbind(eventType?: string, handler?: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

    /**
     * Add a delegated event to listen for the provided event on the descendant elements.
     *
     * @param selector A string defining the descendant elements to listen on for the designated event.
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered. The keyword "this" will refer
     * to the element receiving the event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     */
    delegate(
        selector: any,
        eventType: string,
        handler: (eventObject: Event) => any,
        useCapture?: boolean,
    ): ChocolateChipStatic;

    /**
     * Add a delegated event to listen for the provided event on the descendant elements.
     *
     * @param selector A string defining the descendant elements are listening for the event.
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function handler assigned to this event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     */
    undelegate(
        selector?: any,
        eventType?: string,
        handler?: (eventObject: Event) => any,
        useCapture?: boolean,
    ): ChocolateChipStatic;

    /**
     * Add a handler to an event for elements. If a selector is provided as the second argument, this implements a delegated event.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param selector A string defining the descendant elements are listening for the event.
     * @param handler A function handler assigned to this event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     */
    on(
        eventType: string,
        selector: any,
        handler?: (eventObject: Event) => any,
        capturePhase?: boolean,
    ): ChocolateChipStatic;

    /**
     * Remove a handler for an event from the elements. If the second argument is a selector, it tries to undelegate the event.
     * If no arugments are provided, it removes all events from the element(s).
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param selector A string defining the descendant elements are listening for the event.
     * @param handler A function handler assigned to this event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     */
    off(
        eventType?: string,
        selector?: any,
        handler?: (eventObject: Event) => any,
        capturePhase?: boolean,
    ): ChocolateChipStatic;

    /**
     * Trigger an event on an element.
     *
     * @param eventType The event to trigger.
     */
    trigger(eventType: string): void;
}

type DOMString = string;
type OpenEndedDictionary = Object;

/**
 * Headers Interface. This defines the methods exposed by the Headers object.
 */
interface Headers {
    (headers?: any): void;
    append(name: string, value: string): void;
    delete(name: string): any;
    get(name: string): any;
    getAll(name: string): any;
    has(name: string): any;
    set(name: string, value: string): any;
    forEach(callback: Function, thisArg: any): any;
}

interface RequestInit {
    timeout?: number | undefined;
}

interface ChocolateChipStatic {
    /**
     * A cache to hold callbacks execute by the response from a JSONP request.
     * This is an array of strings.
     * By default these values get purged when the callback execute and exposes the data returned by the request.
     */
    JSONPCallbacks: string[];
    /**
     * Method to perform JSONP request.
     *
     * @param url A string defining the url to target.
     * @param options And object literal of properties: {timeout? number, callbackName?: string, clear?: boolean}
     */
    jsonp(url: string, options?: {
        /**
         * A number representing milliseconds to express when to refect a JSONP request.
         */
        timeout?: number | undefined;

        /**
         * The optional name for the callback when the server response will execute.
         * The default value is "callback".
         * However some sites may use a different name for their JSONP function.
         * Consult the documentation on the site to ascertain the correct value for this callback.
         */
        callbackName?: string | undefined;

        /**
         * This value determines whether the callbacks and script associate with JSONP persist or are purged after the request returns. By default this is set to true, meaning that they will be purged.
         */
        clear?: boolean | undefined;
    }): any;
}

interface Window {
    chocolatechipjs: ChocolateChipStatic;
    $: ChocolateChipStatic;
    jsonp: any;
}
declare var $: ChocolateChipStatic;

declare var chocolatechipjs: ChocolateChipStatic;
