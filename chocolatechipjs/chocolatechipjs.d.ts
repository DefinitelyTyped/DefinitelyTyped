// Type definitions for chocolatechip v3.8.11
// Project: https://github.com/chocolatechipui/ChocolateChipJS
// Definitions by: Robert Biggs <http://chocolatechip-ui.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/**
 * Defines the base object namespace for ChocolateChipJS.
 */
declare var $chocolatechipjs: ChocolateChipStatic;
declare var $: ChocolateChipStatic;

/**
 * Static members of ChocolateChip (those on $ and ChocolateChipJS themselves)
 */
interface ChocolateChipStatic {

    /**
     * Contains the version of ChocolateChipJS in use.
     */
    version: string;

    /**
     * Contains the name of the library (ChocolateChip).
     */
    libraryName: string;

    /*
     * This method takes an array-like object and returns its members as an array.
     *
     * @param arrayLikeObject Either the arguents object or an node collection.
     */
    slice(arrayLikeObject: any): Array<any>;

    /**
     * Merge the contents of one object into the first object. If only one argument is provided, it is merged into ChocolateChipStatic.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will extend the ChocolateChipStatic namespace if there is a single argument.
     * @param object An object containing additional properties to merge in.
     */
    extend(target: any, object?: any): any;

    /**
     * Create a ChocolateChip collection object by creating elements from an HTML string.
     *
     * @param selector
     * @return any
     */
    make(selector: string): ChocolateChipElementArray;

    /**
     * Create a ChocolateChip collection object by creating elements from an HTML string. This is an alias for $.make.
     *
     * @param selector
     * @return any
     */
    html(selector: string): ChocolateChipElementArray;

    /**
     * Replace one element with another.
     *
     * @param new HTMLElement
     * @param old HTMLElement
     * @return HTMLElement[]
     */
    replace(newElement: ChocolateChipElementArray, oldElement: ChocolateChipElementArray): void;

    /**
     * Load a JavaScript file from a url, then execute it.
     *
     * @param url A string containing the URL where the script resides.
     * @param callback A callback function that is executed after the script loads.
     * @return void
     */
    require(url: string, callback: Function): Function;

    /**
     * Process JavaScript returned by Ajax request. An optional name can be used to create a custom variable name by which the data is exposed, otherwise it is exposed with the variable "data".
     *
     * @param url A string containing the URL where the script resides.
     * @param callback A callback function that is executed after the script loads.
     * @return Function
     */
    processJSON(json: string, name?: string): any;

    /**
     * This method will defer the execution of a function until the call stack is clear.
     *
     * @param callback A function to execute.
     * @param duration The number of milliseconds to delay execution.
     * @return any
     */
    delay(callback: Function, duration?: number): any;

    /**
     * The method will defer the execution of its callback until the call stack is clear.
     *
     * @param callback A callback to execute after a delay.
     * @return    Function.
     */
    defer(callback: Function): Function;

    /**
     * An empty function.
     *
     * @return any
     */
    noop(): void;

    /**
     * This method will concatenate strings or values as a cleaner alternative to using the '+' operator.
     *
     * @param string or number A comma separated series of strings to concatenate.
     * @return string
     */
    concat(...string: string[]): string;

    /**
     * This method takes a space-delimited string of words and returns it as an array where the individual words are indices.
     *
     * @param string Any string with values separated by spaces.
     * @return string[]
     */
    w(string: string): string[];

    /**
     * Determine whether the argument is a string.
     *
     * @param obj Object to test whether or not it is a string.
     * @return boolean
     */
    isString(obj: any): boolean;

    /**
     * Determine whether the argument is an array.
     *
     * @param obj Object to test whether or not it is an array.
     * @return boolean
     */
    isArray(obj: any): boolean;

    /**
     * Determine whether the argument is a function.
     *
     * @param obj Object to test whether or not it is an function.
     * @return boolean
     */
    isFunction(obj: any): boolean;

    /**
     * Determine whether the argument is an object.
     *
     * @param obj Object to test whether or not it is an object.
     * @return boolean
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
     * @return boolean
     */
    isEmptyObject(obj: any): boolean;

    /**
     * Determine whether the argument is a number.
     *
     * @param obj Object to test whether or not it is a number.
     * @return boolean
     */
    isNumber(obj: any): boolean;

    /**
     * Determine whether the argument is an integer.
     *
     * @param obj Object to test whether or not it is an integer.
     * @return boolean
     */
    isInteger(obj: any): boolean;

    /**
     * Determine whether the argument is a float.
     *
     * @param obj Object to test whether or not it is a float.
     * @return boolean
     */
    isFloat(obj: any): boolean;

    /**
     * Creates a Uuid and returns it as a string with the prefix: "chch_".
     */
    makeUuid(): string;

    /**
     * A generic iterator function, which can be used to seamlessly iterate over arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1.
     *
     * @param collection The object or array to iterate over.
     * @param callback The function that will be executed on every object.
     * @return any
     */
    each(
            collection: any,
            callback: (valueOfElement: any, indexInArray: number) => any
        ): any;


    /**
     * This method converts a string of hyphenated tokens into a camel cased string.
     *
     * @param string A string of hyphenated tokens.
     * @return string
     */
    camelize(string: string): string;

    /**
     * This method converts a camel case string into lowercase with hyphens.
     *
     * @param string A camel case string.
     * @return string
     */
    deCamelize(string: string): string;

    /**
     * This method capitalizes the first letter of a string.
     *
     * @param string A string.
     * @param boolean A boolean value.
     * @return string
     */
    capitalize(string: string, boolean?: boolean): string;

    /**
     * Object used to store string templates and parsed templates.
     *
     * @param string A string defining the template.
     * @param string A label used to access an object's properties in the template. If none is provided it defaults to "data": [[= data.name]].
     * @return void
     */
    templates: Object;

    /**
     * This method returns a parsed template.
     *
     */
    template: ChocolateChipTemplate;


    /**
     * This is the base for the plugin "extend" interface, which allows you to add methods that can iterate over element collections.
     */
    fn: ChocolateChipPlugin;

    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     *
     * param newContent The content to insert. May be an HTML string, DOM element, or an array of DOM elements.
     * @return void
     */
    replace(newELement: HTMLElement, oldElement: HTMLElement): void;

    /**
     * Perform an asynchronous HTTP (Ajax) request.
     */
    ajax(settings: ChocolateChipAjaxSettings): Promise<any>;

    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (json, or html).
     * @return Promise
     */
    get(url: string, data?: any, success?: (data: any) => any, dataType?: string): Promise<any>;

    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @param dataType The type of data expected from the server.
     * @return Promise
     */
    post(url: string, data?: any, success?: () => any, dataType?: string): Promise<any>;

    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @return Promise
     */
     //each(func: (ctx: any, idx: number) => any): void;
    getJSON(url: string, data?: any, success?: (data: any) => any): Promise<any>;

    /**
     * Load JSON from a remote server using the JSONP technique.
     *
     * @param url A string
     * @return Promise
     */
    JSONP(options: ChocolateChipJSONP): Promise<any>;
    //JSONP({url: string, success?: (data: any), callbackType?: string, timeout?: number}): Promise<any>;



    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     * @return any
     */
    ready(handler: () => any): void;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM HTMLElement to use as context
     * @return HTMLElement[]
     */
    (selector: string, context?: HTMLElement|ChocolateChipElementArray): ChocolateChipElementArray;

    /**
     * Binds a function to be executed when the DOM has finished loading.
     *
     * @param callback A function to execute after the DOM is ready.
     * @return void
     */
    (callback: () => any): void;


    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param element A DOM element to wrap in an array.
     * @return HTMLElement[]
     */
    (element: HTMLElement): ChocolateChipElementArray;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param elementArray An array of DOM elements to convert into a ChocolateChip Collection.
     * @return HTMLElement[]
     */
    (elementArray: ChocolateChipElementArray): ChocolateChipElementArray;

    /**
     * If no argument is provided, return the document as a ChocolateChipElementArray.
     * @return Document[]
     */
    (): Document[];

    /**
     * Subscribe to a publication. You provide the topic you want to subscribe to, as well as a callback to execute when a publication occurs.
     * Any data passed by the publisher is exposed to the callback as its second parameter. The callback's first parameter is the published topic.
     *
     * @param topic string A topic to subscribe to. This can be a single term, or any type of namespaced term with delimiters.
     * @data any You can receive any type: string, number, array, object, etc.
     * @return any
     */
    subscribe(topic: string, callback: (topic: string, data: any) => any):any;

    /**
     * Unsubscribe from a topic. Pass this the topic you wish to unsubscribe from. The subscription will be terminated immediately.
     *
     * @param topic string The name of the topic to unsubscribe from.
     * @return void
     */
    unsubscribe(topic: string): void;

    /**
     *    Publish a topic with data for the topic's subscribers to receive.
     *
     * @param topic string The topic you wish to publish.
     * @param data The data to send with the publication. This can be of any type: string, number, array, object, etc.
     * @return void
     */
    publish(topic: string, data: any): void;

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
     * Grabs values from a form and converts them into a JSON object.
     *
     * @param rootNode: string|HTMLElement A form whose values you want to convert to JSON.
     * @param delimiter string A delimiter to namespace your form values. The default is "."
     * You use the form input's name to set up the namespace structure for your JSON, e.g. name="newUser.name.first".
     */
    form2JSON(rootNode: string | HTMLElement, delimiter: string): Object;
}

interface ChocolateChipPlugin {
    /**
     * This method extends ChocolateChipElementArray, enabling iteration over collection items.
     *
     * @param object Object literal of properties and values. Value can be strings, number, array, objects or functions.
     * @return HTMLElement[]
     */
    extend: (object: any) => ChocolateChipElementArray;
}

interface ChocolateChipTemplate {
    /**
     * This method parses a string and an optoinal variable name and returns a parsed template in the form of a function. You can then pass this function data to get rendered nodes.
     *
     * @param template A string of markup to use as a template.
     * @param variable An option name to use in the template. If it were "myData": [[= myData.name]]. Otherwise it defaults to "data": [[= data.name]].
     * @return A function.
     */
    (template: string, variable?: string): Function;

    /**
     * A method to repeated output a template.
     *
     * @param element The target container into which the content will be inserted.
     * @param template A string of markup.
     * @param data The iterable data the template will consume.
     * @return void.
     */
    repeater: (element: ChocolateChipElementArray, template: string, data: any) => void;
}

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     *
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @return Promise A Promise for the completion of which ever callback is executed.
     * @return Promise A new Promise
     */
    then<TResult>(onfulfilled?: (value: T) => TResult | Promise<TResult>, onrejected?: (reason: any) => TResult | Promise<TResult>): Promise<TResult>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     *
     * @param onrejected The callback to execute when the Promise is rejected.
     * @return Promise A Promise for the completion of the callback.
     * @return Promise A new Promise
     */
    catch(onrejected?: (reason: any) => T | Promise<T>): Promise<T>;
}

interface PromiseConstructor {
    /**
     * A reference to the prototype.
     */
    prototype: Promise<any>;

    /**
     * Creates a new Promise.
     *
     * @param init A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
     * @return Promise A new Proimise
     */
    new <T>(init: (resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

    <T>(init: (resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
     *
     * @param values An array of Promises.
     * @return Promise A new Promise.
     */
    all<T>(values: (T | Promise<T>)[]): Promise<T[]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
     *
     * @param values An array of values.
     * @returns A new Promise.
     */
    all(values: Promise<void>[]): Promise<void>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
     *
     * @param values An array of Promises.
     * @return Promise A new Promise.
     */
    race<T>(values: (T | Promise<T>)[]): Promise<T>;

    /**
     * Creates a new rejected promise for the provided reason.
     *
     * @param reason The reason the promise was rejected.
     * @return Promise A new rejected Promise.
     */
    reject(reason: any): Promise<void>;

    /**
     * Creates a new rejected promise for the provided reason.
     *
     * @param reason The reason the promise was rejected.
     * @return void A Promise is rejected.
     */
    reject<T>(reason: any): Promise<T>;

    /**
     * Creates a new resolved promise for the provided value.
     *
     * @param value A promise.
     * @return Promise A promise whose internal state matches the provided promise.
     */
    resolve<T>(value: T | Promise<T>): Promise<T>;

    /**
     * Creates a new resolved promise.
     *
     * @return Promise A resolved promise.
     */
    resolve(): Promise<void>;
}

declare var Promise: PromiseConstructor;


/**
 * Interface for the Ajax setting that will configure the Ajax request.
 */
interface ChocolateChipAjaxSettings {
    /**
     * A string containing the URL to which the request is sent.
     */
    url?: string;

    /**
     * A username to be used with XMLHttpRequest in response to an HTTP access authentication request.
     */
    user?: string;

    /**
     * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
     */
    password?: string;

    /**
     * The type of data that you're expecting back from the server. If none is specified, ChocolateChipJS will
     * infer it based on the MIME type of the response.
     */
    dataType?: string;

    /**
     * The type of request to make ("POST" or "GET"), default is "GET". Note: Other HTTP request methods,
     * such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
     */
    type?: string;

    /**
     * A pre-request callback function that can be used to modify the XMLHTTPRequest object before it is sent.
     * Use this to set custom headers, etc. This is an Ajax Event. Returning false in the beforeSend function will cancel the request.
     * @return void
     */
    beforeSend?: (xhr: XMLHttpRequest, settings: ChocolateChipAjaxSettings) => void;

    /**
     * A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server,
     * formatted according to the dataType parameter; a string describing the status; and the XMLHttpRequest object. This is an Ajax Event.
     * @return void
     */
    success?: (data: any) => void;

    /**
     * A function to be called if the request fails. The function receives three arguments: The XMLHttpRequest object, a string describing
     * the type of error that occurred and an optional exception object, if one occurred. Possible values for the second argument (besides null)
     * are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status,
     * such as "Not Found" or "Internal Server Error." This is an Ajax Event.
     */
    error?: (error: Error) => void;

    /**
     * This object will be made the context of all Ajax-related callbacks. By default, the context is null.
     */
    context?: any;

    /**
     * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false.
     * Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation. Note that synchronous requests may temporarily lock the
     * browser, disabling any actions while the request is active.
     */
    async?: boolean;

    /**
     * Set a timeout (in milliseconds) for the request. The timeout period starts at the point the $.ajax call is made; if several other requests are in progress
     * and the browser has no connections available, it is possible for a request to time out before it can be sent.
     */
    timeout?: number;

    /**
     * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport. The header X-Requested-With: XMLHttpRequest is always added,
     * but its default XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from within the beforeSend function.
     */
    headers?: Object;

    /**
     * Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. Object must be Key/Value pairs.
     */
    data?: any;
}

interface ChocolateChipXHR {
    ajax: (settings: ChocolateChipAjaxSettings) => PromiseConstructor;
}

interface ChocolateChipJSONP {
        url: string; 
        success?: (data: any) => Promise<any>; 
        callbackType?: string; 
        timeout?: number; 
}

interface ChocolateChipElementArray extends Array<HTMLElement> {
    /**
     * Iterate over an Array object, executing a function for each matched element.
     *
     * @param Function
     * @return void
     */
    each(func: (ctx: any, idx: number) => any): void;

    /**
     * Sorts an array and removes duplicates before returning it.
     *
     * @return Array
     */
    unique<T, TSort>(): T[];

    /**
     * This method returns the element at the position in the array indicated by the argument. This is a zero-based number.
     * When dealing with document nodes, this allows you to cherry pick a node from its collection based on its
     * position amongst its siblings.
     *
     * @param number Index value indicating the node you wish to access from a collection. This is zero-based.
     * @return HTMLElement
     */
    eq(index: number): ChocolateChipElementArray;

    /**
     * Search for a given element from among the matched elements on a collection.
     * This method returns the index value as an integer.
     *
     * @return number
     */
    index(): number;

    /**
     * Search for a given element from among the matched elements on a collection.
     * This method returns the index value as an integer.
     *
     * @param selector A selector representing an element to look for in a collection of elements.
     * @return number
     */
    index(selector: string | HTMLElement[]): number;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it matches the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @return HTMLElement[]
     */
    is(selector: string): ChocolateChipElementArray;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it matches the given arguments.
     *
     * @param elements One or more elements to match the current set of elements against.
     * @ return HTMLElement[]
     */
    is(element: any): ChocolateChipElementArray;


    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it does not match the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @ return HTMLElement[]
     */
    isnt(selector: string): ChocolateChipElementArray;

    /**
     * Check the current matched set of elements against a selector or element and return it
     * if it does not match the given arguments.
     *
     * @param elements One or more elements to match the current set of elements against.
     * @ return HTMLElement[]
     */
    isnt(element: any): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @ return HTMLElement[]
     */
    has(selector: string): ChocolateChipElementArray;
    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param contained A DOM element to match elements against.
     * @ return HTMLElement[]
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
     * @ return HTMLElement[]
     */
    hasnt(contained: HTMLElement): ChocolateChipElementArray;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector or element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @ return HTMLElement[]
     */
    find(selector: string): ChocolateChipElementArray;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector or element.
     *
     * @param element An element to match elements against.
     * @ return HTMLElement[]
     */
    find(element: HTMLElement): ChocolateChipElementArray;

    /**
     * Get the immediately preceding sibling of each element in the set of matched elements.
     *
     * @ return HTMLElement[]
     */
    prev(): ChocolateChipElementArray;

    /**
     * Get the immediately following sibling of each element in the set of matched elements.
     *
     * @ return HTMLElement[]
     */
    next(): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to the first in the set.
     */
    first(): ChocolateChipElementArray;

    /**
     * Reduce the set of matched elements to the last in the set.
     *
     * @return HTMLElement[]
     */
    last(): ChocolateChipElementArray;

    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @return HTMLElement[]
     */
    children(selector?: string): ChocolateChipElementArray;

    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     * If multiple elements have the same parent, only one instance of the parent is returned.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @return HTMLElement[]
     */
    parent(selector?: string): ChocolateChipElementArray;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree, or, if a number is provided,
     * retrieving that ancestor based on its distance from the element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @return HTMLElement[]
     */
    ancestor(selector: string | number): ChocolateChipElementArray;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @return HTMLElement[]
     */
    closest(selector: string | number): ChocolateChipElementArray;


    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @return HTMLElement[]
     */
    siblings(selector?: string): ChocolateChipElementArray;

    /**
     * Get the HTML contents of the first element in the set of matched elements.
     *
     * @return HTMLElement[]
     */
    html(): ChocolateChipElementArray;

    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     * @return HTMLElement[]
     */
    html(htmlString: string): ChocolateChipElementArray;


    /**
     * Get the value of style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     * @return string
     */
    css(propertyName: string): string;

    /**
     * Set one or more CSS properties for the set of matched elements using a quoted string.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     * @return HTMLElement[]
     */
    css(propertyName: string, value: string): ChocolateChipElementArray;

    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @return HTMLElement[]
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
     * @return HTMLElement[]
     */
    attr(attributeName: string, value: string): ChocolateChipElementArray;

    /**
     * Remove an attribute from a node.
     *
     * @param attributeName A string indicating the attribute to remove.
     * @return HTMLElement[]
     */
    removeAttr(attributeName: string): ChocolateChipElementArray;

    /**
     * Return any of the matched elements that have the given attribute.
     *
     * @param className The class name to search for.
     * @return HTMLElement[]
     */
    hasAttr(attributeName: string): ChocolateChipElementArray;


    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     * @return string
     */
    prop(attributeName: string): string;

    /**
     * Set an property for the set of matched elements.
     *
     * @param propertyName A string indicating the property to set.
     * @param value A string indicating the value to set the property to.
     * @return HTMLElement[]
     */
    prop(propertyName: string, value: string): ChocolateChipElementArray;

    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     * @return HTMLElement[]
     */
    addClass(className: string): ChocolateChipElementArray;

    /**
     * Remove a single class or multiple classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     * @return HTMLElement[]
     */
    removeClass(className?: string): ChocolateChipElementArray;

    /**
     * Add or remove a classe from each element in the set of matched elements, depending on whether the class is present or not.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @return HTMLElement[]
     */
    toggleClass(className: string, swtch?: boolean): ChocolateChipElementArray;

    /**
     * Return any of the matched elements that have the given class.
     *
     * @param className The class name to search for.
     * @return HTMLElement[]
     */
    hasClass(className: string): ChocolateChipElementArray;

    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any Javascript type including Array or Object.
     * @return HTMLElement[]
     */
    data(key: string, value: any): ChocolateChipElementArray;

    /**
     * Return the value at the named data store for the first element in the element collection, as set by
     * data(name).
     *
     * @param key Name of the data stored.
     * @return any
     */
    data(key: string): any;

    /**
     * Remove the value at the named data store for the first element in the element collection, as set by data(name, value).
     *
     * @param key Name of the data stored.
     * @return any
     */
    removeData(key: string): any;

    /**
     * Store string data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it must be a string. You can convert JSON into a string to use with this.
     * @return HTMLElement[]
     */
    dataset(key: string, value: any): ChocolateChipElementArray;

     /**
    * Retrieve a dataset key's value for the first element in the element collection.
     *
     * @param key A string naming the piece of data to set.
     * @return HTMLElement[]
     */
    dataset(key: string): ChocolateChipElementArray;

    /**
     * Return the value at the named data store for the first element in the element collection, as set by data(name, value).
     *
     * @param key Name of the data stored.
     * @return any
     */
    data(key: string): any;

    /**
     * Store arbitrary data associated with the matched element.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any Javascript type including Array or Object.
     * @return HTMLElement[]
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
     * @return any
     */
    val(value: string): ChocolateChipElementArray;

    /**
     * Set the property of an element to enabled by removing the "disabled" attribute.
     *
     * @return HTMLElement[]
     */
    enable(): ChocolateChipElementArray;

    /**
     * Set the property of an element to "disabled".
     *
     * @return HTMLElement[]
     */
    disable(): ChocolateChipElementArray;

    /**
     * Display the matched elements.
     *
     * @param speed A string or number determining how long the animation will run.
     * @param callback A function to call once the animation is complete.
     * @return HTMLElement[]
     */
    show(duration?: number | string, callback?: Function): ChocolateChipElementArray;

    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param callback A function to call once the animation is complete.
     * @return HTMLElement[]
     */
    hide(duration?: number | string, callback?: Function): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param content HTML string, DOM element, array of elements to insert before each element in the set of matched elements.
     * @return HTMLElement[]
     */
    before(content: ChocolateChipElementArray | HTMLElement | string): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param content HTML string, DOM element, array of elements to insert after each element in the set of matched elements.
     * @return HTMLElement[]
     */
    after(content: ChocolateChipElementArray | HTMLElement | string): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param content DOM element, array of elements, or HTML string to insert at the end of each element in the set
     * of matched elements.
     * @return HTMLElement[]
     */
    append(content: ChocolateChipElementArray|HTMLElement|Text|string): ChocolateChipElementArray;

    /**
     * Insert content, specified by the parameter, at the beginning of each element in the set of matched elements.
     *
     * @param content DOM element, array of elements, or HTML string to insert at the beginning of each element in the set of matched elements.
     * @return HTMLElement[]
     */
    prepend(content: ChocolateChipElementArray|HTMLElement|Text|string): ChocolateChipElementArray;

    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, or HTML string. The matched set of elements will be inserted at the beginning of the element specified by this parameter.
     * @return HTMLElement[]
     */
    prependTo(target: any[]|HTMLElement|string): ChocolateChipElementArray;

    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, or HTML string. The matched set of elements will be inserted at the end of the element specified by this parameter.
     * If no position value is provided it will simply append the content to the target.
     * @return HTMLElement[]
     */
    appendTo(target: any[]|HTMLElement|string): ChocolateChipElementArray;

    /**
     * Insert element(s) into the target element.
     *
     * @return HTMLElement[]
     */
    insert(content: string, position?: number | string): ChocolateChipElementArray;

    /**
     * Create a copy of the set of matched elements.
     *
     * @param value A Boolean indicating whether to copy the element(s) with their children. A true value copies the children.
     * @return HTMLElement[]
     */
    clone(value?: boolean): ChocolateChipElementArray;

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param wrappingElement A selector or HTML string specifying the structure to wrap around the matched elements.
     * @return HTMLElement[]
     */
    wrap(wrappingElement: string): ChocolateChipElementArray;

    /**
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
     *
     * @return HTMLElement[]
     */
    unwrap(): ChocolateChipElementArray;

    /**
     * Remove the set of matched elements from the DOM. If there are any attached events, this will remove them to prevent memory leaks.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @return HTMLElement[]
     */
    remove(selector?: string): ChocolateChipElementArray;

    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     *
     * @return HTMLElement[]
     */
    empty(): ChocolateChipElementArray;

    /**
     * Get an object of the current coordinates of the first element in the set of matched elements, relative to the document.
     * These are: top, left, bottom and right. The values are numbers representing pixel values.
     * @return Object
     */
    offset(): ChocolateChipOffsetObject;

    /**
     * Get the current computed width for the first element in the set of matched elements,
     * including padding but excluding borders.
     *
     * @return number
     */
    width(): number;

    /**
     * Get the current computed height for the first element in the set of matched elements,
     * including padding but excluding borders.
     *
     * @return number
     */
    height(): number;

    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     *
     * @return string
     */
    text(): string;

    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text The text to set as the content of each matched element. When Number is supplied, it will be converted to a String representation. To delete text, use ChocolateChipElementArray.empty() or ChocolateChipElementArray.remove().
     * @return HTMLElement
     */
    text(text: string | number): HTMLElement;

    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     * @return ChocolateChipStatic
     */
    bind(eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

    /**
     * Remove a handler for an event from the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     * @return ChocolateChipStatic
     */
    unbind(eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

    /**
     * Add a delegated event to listen for the provided event on the descendant elements.
     *
     * @param selector A string defining the descendant elements to listen on for the designated event.
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered. The keyword "this" will refer
     * to the element receiving the event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     * @return ChocolateChipStatic
     */
    delegate(selector: any, eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

    /**
     * Add a delegated event to listen for the provided event on the descendant elements.
     *
     * @param selector A string defining the descendant elements are listening for the event.
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function handler assigned to this event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     * @return ChocolateChipStatic
     */
    undelegate(selector: any, eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

    /**
     * Add a handler to an event for elements. If a selector is provided as the second argument, this implements a delegated event.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param selector A string defining the descendant elements are listening for the event.
     * @param handler A function handler assigned to this event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     * @return ChocolateChipStatic
     */
    on( eventType: string, selector: any, handler?: (eventObject: Event) => any, capturePhase?: boolean): ChocolateChipStatic;

    /**
     * Remove a handler for an event from the elements. If the second argument is a selector, it tries to undelegate the event.
     * If no arugments are provided, it removes all events from the element(s).
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param selector A string defining the descendant elements are listening for the event.
     * @param handler A function handler assigned to this event.
     * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
     * @return ChocolateChipStatic
     */
    off( eventType?: string, selector?: any, handler?: (eventObject: Event) => any, capturePhase?: boolean): ChocolateChipStatic;

    /**
    *
    */
    trigger(eventType: string): void;

    /**
     * A method to animate DOM nodes using CSS. This uses CSS transitions.
     *
     * @param options And object of key value pairs define the CSS properties and values to animate.
     * @param duration A string representing the time. Should have a time identifier: "200s", "200ms", etc.
     * @param easing A string indicating the easing for the animation, such as "ease-out", "ease-in", "ease-in-out".
     * @return void
     */
     animate(options: Object, duration?: string, easing?: string ): void;
}

/**
 * Interface for offset object.
 */
interface ChocolateChipOffsetObject {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
