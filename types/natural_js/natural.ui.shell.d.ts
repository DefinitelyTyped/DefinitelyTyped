declare class NUS {
    /**
     * Create an object instance of Notify with the N() function.
     * ```
     * var notify = N(position).notify(opts);
     * ```
     *
     * @param {NUS.Options.Notify} [opts] - Specifies the initialization option object for the component.
     * @returns {NUS.Notify} An instance of a Notify object, configured according to the provided options.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050103.html
     */
    notify(this: NJS<NUS.Options.NotifyPosition>, opts?: NUS.Options.Notify): NUS.Notify;
    /**
     * Create an object instance of Documents with the N() function.
     * ```
     * var docs = N(context).docs(opts);
     * ```
     *
     * @param {NUS.Options.Documents} [opts] - Specifies the initialization option object for the component.
     * @returns {NUS.Documents} An instance of a Documents object, configured according to the provided options.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050202.html
     */
    docs(this: NJS<HTMLElement[]>, opts?: NUS.Options.Documents): NUS.Documents;

    static notify: {
        /**
         * Creates a new Notify instance.
         * ```
         * var notify = new N.notify(position, opts);
         * ```
         *
         * @param {NUS.Options.NotifyPosition} position - Set where the message will appear.
         * > It can be specified with the left / right / top / bottom properties of the options object.
         * @param {NUS.Options.Notify} [opts] - Specifies the initialization option object for the component.
         * @returns {NUS.Notify} An instance of a Notify object, configured according to the provided options.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050103.html
         */
        new(position: NUS.Options.NotifyPosition, opts?: NUS.Options.Notify): NUS.Notify;
        add(msg: string, url?: string): void;
        wrapEle(): void;
    };

    static docs: {
        /**
         * Creates a new Documents instance.
         * ```
         * var docs = new N.docs(context, opts);
         * ```
         *
         * @param {NJS<HTMLElement[]>} obj - The context element to which the Documents will be applied.
         * @param {NUS.Options.Documents} [opts] - Specifies the initialization option object for the component.
         * @returns {NUS.Documents} An instance of a Documents object, configured according to the provided options.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050202.html
         */
        new(obj: NJS<HTMLElement[]>, opts?: NUS.Options.Documents): NUS.Documents;
        createLoadIndicator(): NUS.Documents;
        updateLoadIndicator(entireLoadRequestCnt: number, entireLoadRequestMaxCnt: number): NUS.Documents;
        removeLoadIndicator(): NUS.Documents;
        errorLoadIndicator(): NUS.Documents;
        wrapEle(): void;
        wrapScroll(): void;
        clearScrollPosition(tabEle: number | NJS<HTMLElement[]>, isActive?: boolean): void;
        loadContent(docOpts: NUS.Options.DocOpts, callback: NUS.Callbacks.Documents.LoadContent): void;
        closeBtnControl(): void;
        inactivateTab(): void;
        activateTab(docId_: string, isFromDocsTabList_?: boolean, isNotLoaded_?: boolean): void;
        showTabContents(docId_: string): boolean | undefined;
        hideTabContents(docId_: string): void;
        remove(targetTabEle: NJS<HTMLElement[]>): void;
    };
}

declare namespace NUS {
    interface Notify {
        options: NUS.Options.Notify;
        /**
         * Returns the message container element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050105.html
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Adds a notification message, optionally with a URL link.
         *
         * @param {string} msg - The notification message to be added.
         * @param {string} [url] - An optional URL associated with the notification.
         * @return {NUS.Notify} Returns the `Notify` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050105.html
         */
        add(msg: string, url?: string): NUS.Notify;
        /**
         * Removes the specified message dialog element(s) from the DOM.
         *
         * @param {NJS<HTMLElement[]>} msgBoxEle - The element(s) representing the message box to be removed.
         * @return {NUS.Notify} Returns the `Notify` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050105.html
         */
        remove(msgBoxEle: NJS<HTMLElement[]>): NUS.Notify;
    }

    interface Documents {
        options: NUS.Options.Documents;
        request: DocumentsRequest;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Add new Documents tab content.
         *
         * @param {string} docId - The unique identifier for the document page to be added.
         * @param {string} docNm - The name of the document page to be added.
         * @param {NUS.Options.DocOpts} docOpts - Enter options that apply only to the page being added.
         * ```
         * var docOpts = {
         *     url: "url", // document URL
         *     urlSync: true, // The response will be blocked if location.href when requesting to the server and location.href when receiving a response from the server are different.
         *     docId: docId, // document id
         *     docNm: docNm, // document name
         *     onBeforeLoad: function(docId, target) {
         *         // onBeforeLoad event that applies only to the document being added.
         *
         *         // docId: document id
         *         // target: Element to put loaded content
         *
         *        var doc = this.doc(docId); // get document info
         *        var cont = this.cont(docId); // get document's Controller object
         *        var view = cont.view;
         *        var request = cont.request;
         *     },
         *     onLoad: function(docId) {
         *         // onLoad event that applies only to the document being added.
         *     },
         *     onBeforeActive: function(docId) {
         *         // onBeforeActive event that applies only to the document being added.
         *     },
         *     onActive: function(docId) {
         *         // onActive event that applies only to the document being added.
         *     },
         *     onBeforeInactive: function(docId) {
         *         // onBeforeInactive event that applies only to the document being added.
         *     },
         *     onInactive: function(docId) {
         *         // onInactive event that applies only to the document being added.
         *     },
         *     onBeforeRemoveState: function(docId) {
         *         // onBeforeRemoveState event that applies only to the document being added.
         *     },
         *     onRemoveState: function(docId) {
         *         // onRemoveState event that applies only to the document being added.
         *     },
         *     onBeforeRemove: function(docId) {
         *         // onBeforeRemove event that applies only to the document being added.
         *     },
         *     onRemove: function(docId) {
         *         // onRemove event that applies only to the document being added.
         *     },
         *     stateless: false // Whether to maintain the state of tab content
         * }
         * ```
         * > Events set here are executed after the global event is executed.
         * @return {NUS.Documents} Returns the `Documents` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        add(docId: string, docNm: string, docOpts: NUS.Options.DocOpts): NUS.Documents;
        /**
         * Activates the content of the specified tab.
         *
         * @param {string} docId - The unique identifier for the document to activate.
         * @param {boolean} [isFromDocsTabList] - Arguments used inside the component.
         * @param {boolean} [isNotLoaded] - Arguments used inside the component.
         * @return {NUS.Documents} Returns the `Documents` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        active(docId: string, isFromDocsTabList?: boolean, isNotLoaded?: boolean): NUS.Documents;
        /**
         * Removes the state of the specified tab content.
         *
         * @param {string | NUS.Callbacks.Documents.RemoveState} [docId] - Unique identifier of the document whose status should be removed. When you enter a function, it is processed as a callback argument value.
         * @param {NUS.Callbacks.Documents.RemoveState} [callback] - Specify a callback function to be executed when you click the OK button in the warning window that appears when the maximum number of state maintenance is exceeded.
         * @return {NUS.Documents} Returns the `Documents` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        removeState(
            docId?: string | NUS.Callbacks.Documents.RemoveState,
            callback?: NUS.Callbacks.Documents.RemoveState,
        ): NUS.Documents;
        /**
         * Removes the contents of the specified tab.
         *
         * @param {string} docId - The unique identifier of the document to be removed.
         * @param {boolean} [unconditional] - Specifies whether to immediately remove the page without prompting even if there is modified data.
         * @return {NUS.Documents} Returns the `Documents` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        remove(docId: string, unconditional?: boolean): NUS.Documents;
        /**
         * Retrieves option information set for all currently open tab contents.
         *
         * @return {NUS.Options.DocsObject}
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        doc(): NUS.Options.DocsObject;
        /**
         * Retrieves option information set for the specified tab content.
         *
         * @param {string} docId - The unique identifier of the document to retrieve option information.
         * @return {NUS.Options.DocOpts} Option information set for the specified tab content
         */
        doc(docId: string): NUS.Options.DocOpts;
        /**
         * Retrieves the controller object for the given document ID.
         *
         * @param {string} docId - The unique identifier of the document.
         * @return {NA.Objects.Controller.Object} The controller object associated with the document ID.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        cont(docId: string): NA.Objects.Controller.Object;
        /**
         * Reloads a document content by its identifier and executes a callback function upon completion.
         * > If you do not specify a value with the `request.attr` function before executing the reload function, the value of the request object before reload will be maintained even after reloading.
         *
         * @param {string} docId - The unique identifier of the document to be reloaded.
         * @param {NUS.Callbacks.Documents.Reload} [callback] - The callback function to execute after the document is reloaded.
         * `page's HTML code string` and `Communicator.request` object are input as arguments to the callback function.
         * ```
         * docsInstance.reload("docId", function(html, request) {
         *     N.log(html, request);
         * });
         * ```
         * @return {NUS.Documents} Returns the `Documents` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        reload(docId: string, callback?: NUS.Callbacks.Documents.Reload): NUS.Documents;
    }

    interface DocumentsRequest extends Documents {
        /**
         * Set the parameters to be passed to the page to be loaded.
         *
         * @param {String} name - Parameter name
         * @param {any} [obj] - Parameter data
         *
         * @return {DocumentsRequest} Returns the `DocumentsRequest` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050204.html
         */
        attr(name: string, obj?: any): DocumentsRequest;
        removeAttr(name: string): DocumentsRequest;
        /**
         * Extracts the GET parameter values from the browser's URL.
         *
         * @return {object} Returns all GET parameters as an object.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050204.html
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
         * @return {DocumentsRequest} Returns the `DocumentsRequest` instance for chaining.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050204.html
         */
        get(): DocumentsRequest;
        /**
         * Retrieves for the value specified as a key in request options.
         *
         * @param {string} key - Property name of request options
         * @return {any} Value corresponding to the key value specified in request options
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050204.html
         */
        get(key: string): any;
    }
}
