declare class NA {

    static ajax: {
        (url: string, settings?: JQuery.AjaxSettings): JQuery.jqXHR;
        (settings?: JQuery.AjaxSettings): JQuery.jqXHR;
    };
    static comm: NA.Communicator;
    static cont: NA.Controller;
    static context: NA.Context;
    static config: NA.Config

    /**
     * N.comm is a library that supports Ajax communication with the server, such as requesting content or data from the server or passing parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0203.html }
     */
    comm(url: string | NA.Options.Request): NA.Communicator;
    /**
     * The Communicator.request is a request information object created each time N.comm is initialized.
     *
     * Options for the N.comm() function are saved in the Communicator.request.options object and are passed on as request headers or parameters to the server.
     *
     * When a page file is requested, it is passed as the second argument of the init function of the Controller object or as a member variable (this.request) of the Controller object. You can verify the request information or receive page parameters with the passed request object.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0204.html }
     */
    request(): NA.Request;
    /**
     * N.cont executes the init function of the Controller object and returns the Controller object.
     *
     * > The Controller object is an object that controls the elements of the View and the data retrieved from the Communicator.
     *
     * N.cont should be declared immediately below the View area of the page, like this:
     *
     * ```
     * <article class="view">
     *     <p>View area</p>
     * </article>
     *
     * <script type="text/javascript">
     *     N(".view").cont({ // Controller object
     *         init: function(view, request) {
     *         }
     *     });
     * </script>
     * ```
     *
     * If you load a page with the above structure using the N.popup, N.tab component or N.comm library, the init function of the Controller object is called when page loading is complete.
     *
     * > For Natural-ARCHITECTURE-based pages to function properly, they must be loaded with the N.comm library, N.popup, or N.tab components.
     *
     * > When selecting an element on a page, you must `find` on a view or specify view as the `context` argument (second argument) to a jQuery function.
     * > Otherwise, unintended elements from other block pages may be selected, resulting in unpredictable errors.
     * > For more information, please refer to the [Restrictions and Tips](https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0601.html) menu.
     *
     * > When `N(".view").cont()` is executed, a `pageid data attribute value` such as `data-pageid="view"` is created in the `.view` element specified by the selector.
     * > The `pageid` is `.(dot), #(sharp), [(left bracket), ](right bracket), '(single quote), :(colon), ((left bracket), ), )(right bracket), >(right arrow bracket), " "(space), -(hyphen)` characters are removed to create pageid, so the page identification value is defined not to include the special characters.
     * > For example, `N("page.view-01").cont()` creates a pageid of `pageview01` with the dot and hyphen removed.
     *
     * To control a specific page, such as a block page or tab content, you can get a Controller object as follows.
     * ```
     * var page01Cont = N("#page01").instance("cont");
     * page01Cont.gridInst.bind([]);
     * ```
     * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0201.html }
     */
    cont(contObj: NA.Objects.Controller.Object): NA.Objects.Controller.Object;
}

declare namespace NA {

    class Communicator {
        constructor(obj: NJS<NC.JSONObject[]> | string, url?: string | NA.Options.Request);
        xhr: JQuery.jqXHR;
        initFilterConfig(): NA.Objects.Config.FilterConfig;
        resetFilterConfig(): NA.Communicator;
        /**
         * Registers a callback function to be executed when a successful response is received from the server.
         *
         * If the `callback` argument is not provided to the `submit` function, a Promise-compatible `xhr` object is returned, allowing the use of async/await syntax.
         *
         * ```
         * // JSON Data
         * const fn1 = async () => {
         *     const data = await N.comm("data.json").submit();
         * };
         *
         * // Catch exception
         * const fn2 = async () => {
         *     const data = await N.comm("data.json").submit().then((data) => {
         *         console.log(data);
         *     }).catch((e) => {
         *         console.error(e);
         *     });
         * };
         *
         * // HTML page
         * const fn3 = async () => {
         *     const data = await N("#page-container").comm("page.html").submit();
         *     console.log(data); // HTML Text
         * };
         * ```
         *
         * @param {NA.Callbacks.Communicator.Submit} callback - Define a callback function that handles the server's response when the request is successful.
         *
         * When requesting an HTML page, a Controller object of the loaded page is returned as the argument to the callback function. For other requests, a data object and the Communicator.request object are returned.
         * ```
         * // JSON Data
         * N.comm("data.json").submit(function(data, request) {
         *     N.log(data, request);
         * });
         *
         * // HTML page
         * N("#page-container").comm("page.html").submit(function(cont) {
         *     N.log(cont); // cont: Controller object
         * });
         * ```
         * @return {JQuery.jqXHR | NA.Communicator} The jqXHR object or the communicator instance depending on the submission context.
         */
        submit(callback: NA.Callbacks.Communicator.Submit): JQuery.jqXHR | NA.Communicator;
        /**
         * Registers a callback function that will be executed when an error response is received from the server after calling the submit function or when an error occurs in the callback function of the submit method.
         * > You can call the error method multiple times to register multiple callback functions.
         *
         * @param {NA.Callbacks.Communicator.Error} callback - Defines the callback function that handles errors when they occur.
         *
         * The `this` context of the callback function is the instance of the created N.comm, and it receives the following arguments:
         *  - xhr(arguments[2]): jQuery XMLHTTPRequest
         *  - textStatus(arguments[3]): "success" (when an error occurs in the submit callback) or "error" (when an error occurs from the server)
         *  - e(arguments[0]): ErrorThrown
         *  - request(arguments[1]): Communicator.request
         *  - callback(arguments[4]): The callback function specified as an argument in the submit method when textStatus is "success".
         *
         * ```
         * N.comm("data.json").error(function(xhr, textStatus, e, request, callback) {
         *     // 2. First error handler for col01.length error
         * }).error(function(xhr, textStatus, e, request, callback) {
         *     // 3. Second error handler for col01.length error
         * }).submit(function(data, request) {
         *     var col01;
         *     col01.length; // 1. Generates an undefined related error
         * });
         * ```
         *
         * @return {NA.Communicator} Returns the communicator instance for chaining.
         */
        error(callback: NA.Callbacks.Communicator.Error): NA.Communicator;
        /**
         * The `Communicator.request` object is a request information object created each time `N.comm` is executed.
         *
         * The options of the `N.comm()` function are stored in the `Communicator.request.options` object and are delivered as headers or parameters of the server request.
         *
         * When requesting an HTML page, the request object is passed as the second argument of the `init` function of the Controller object or as a member variable (`this.request`) of the Controller object. You can check the request information or retrieve the request parameter object using the provided request object.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0204.html }
         */
        request: NA.Request;
    }

    class Request {
        constructor(obj: NJS<NC.JSONObject[]>, opts: NA.Options.Request);
        options: NA.Options.Request;
        attrObj: object;
        obj: NA.Communicator;
        /**
         * Get the parameters passed while calling this page.
         *
         * Retrieving data from the loaded page:
         * ```
         * N(".view").cont({
         *     init: function(view, request) {
         *         var data1 = request.attr("data1"); // { data: ["1", "2"] }
         *         var data2 = request.attr("data2"); // ["3", "4"]
         *     }
         * });
         * ```
         *
         * @param {String} name - Parameter name
         *
         * @return {NA.Communicator} Returns the passed parameter value.
         */
        attr(name: string): any;
        /**
         * Set the parameters to be passed to the page to be loaded.
         *
         * Sending data:
         * ```
         * N(".view").cont({
         *     init: function(view, request) {
         *         N("#section").comm("page.html")
         *             .request.attr("data1", { data: ["1", "2"] })
         *             .request.attr("data2", ["3", "4"])
         *                 .submit();
         *     }
         * });
         * ```
         *
         * @param {String} name - Parameter name
         * @param {any} obj - Parameter data
         *
         * @return {NA.Communicator} Returns the Communicator object.
         */
        attr(name: string, obj: any): NA.Communicator;
        removeAttr(name: string): NA.Communicator;
        /**
         * Extracts the GET parameter values from the browser's URL.
         *
         * @return {object} Returns all GET parameters as an object.
         */
        param(): object;
        /**
         * Extracts the value of a GET parameter from the URL in the browser.
         *
         * @param {string} name - The key of the parameter to be retrieved.
         * @return {string} The value of the parameter
         */
        param(name: string): string;
        /**
         * Retrieves the current request options.
         *
         * @return {NA.Options.Request} The options used for the request.
         */
        get(): NA.Options.Request;
        /**
         * Retrieves for the value specified as a key in request options.
         *
         * @param {string} key - Property name of request options
         * @return {any} Value corresponding to the key value specified in request options
         */
        get(key: string): any;

        reload(callback?: NA.Callbacks.Request.Reload): NA.Communicator;
    }

    interface Controller {
        new(obj: NJS<HTMLElement[]>, contObj: NA.Objects.Controller.Object): NA.Objects.Controller.Object;
        trInit(cont: NA.Objects.Controller.Object, request: NA.Request): void;
        /**
         * Aspect-oriented programming(AOP) processing class.
         */
        aop: {
            pointcuts: {
                regexp: {
                    fn(param: RegExp | string, contFrag: NA.Objects.Controller.Object, fnChain: string): boolean;
                };
            };
            wrap(cont: NA.Objects.Controller.Object): void;
        };
    }

    interface Context {
        attrObj: object;
        /**
         * Get data stored in N.context.
         *
         * @param {string} name - data name.
         * @return {any} Stored data.
         */
        attr(name: string): any;
        /**
         * Set the data to be stored in N.context.
         *
         * @param {string} name - data name.
         * @param {any} obj - Data to store.
         * @return {this} The current object, for chainability.
         */
        attr(name: string, obj: any): NA.Context;
    }

    interface Config {
        filterConfig: NA.Objects.Config.FilterConfig;
    }

}
