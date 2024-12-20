declare namespace NUS {
    namespace Options {
        interface NotifyPosition {
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
        }
        interface Notify {
            /**
             * Set where the message will appear.
             *
             * It can be specified with the left / right / top / bottom properties of the options object.
             *
             * @default { top: 10, right: 10 }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050104.html
             */
            position?: NotifyPosition;
            /**
             * Specifies a global message container that contains message elements.
             *
             * @default N("body")
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050104.html
             */
            container?: NJS<HTMLElement[]>;
            /**
             * An instance of the element that displays the message is assigned.
             *
             * @default undefined
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Set the time in seconds for the message to be displayed.
             *
             * @default 7
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050104.html
             */
            displayTime?: number;
            /**
             * If set to true, the message dialog will always appear on top.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050104.html
             */
            alwaysOnTop?: boolean;
            /**
             * If set to true, the HTML Code of the message will be applied.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050104.html
             */
            html?: boolean;
            /**
             * When applying the alwaysOnTop option, specify target elements for calculating the top z-index.
             *
             * > Specified with jQuery selector syntax.
             *
             * > When N.notify related elements are obscured by other elements, please add a selector for the element that is being obscured.
             *
             * @default "div, span, ul, p, nav, article, section, header, footer, aside"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0501.html&tab=html/naturaljs/refr/refr050104.html
             */
            alwaysOnTopCalcTarget?: string;
        }

        interface DocsObject {
            [key: string]: DocOpts;
        }
        /**
         * This is an option that can be set whenever tab content is added to the Documents component.
         *
         * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050205.html
         */
        interface DocOpts {
            /**
             * Document id
             */
            docId?: string;
            /**
             * Document name
             */
            docNm?: string;
            /**
             * Document url
             */
            url: string;
            /**
             * Specifies whether to block responses when the `location.href` when requesting to the server is different from the `location.href` when receiving the response from the server.
             *
             * @default true
             */
            urlSync?: boolean;
            /**
             * onBeforeLoad event that applies only to the document being added.
             *
             * @default null
             */
            onBeforeLoad?: EventHandlers.Documents.OnBeforeLoad | null;
            /**
             * onLoad event that applies only to the document being added.
             *
             * @default null
             */
            onLoad?: EventHandlers.Documents.OnLoad | null;
            /**
             * onBeforeActive event that applies only to the document being added.
             *
             * @default null
             */
            onBeforeActive?: EventHandlers.Documents.OnBeforeActive | null;
            /**
             * onActive event that applies only to the document being added.
             *
             * @default null
             */
            onActive?: EventHandlers.Documents.OnActive | null;
            /**
             * onBeforeInactive event that applies only to the document being added.
             *
             * @default null
             */
            onBeforeInactive?: EventHandlers.Documents.OnBeforeInactive | null;
            /**
             * onInactive event that applies only to the document being added.
             *
             * @default null
             */
            onInactive?: EventHandlers.Documents.OnInactive | null;
            /**
             * onBeforeRemoveState event that applies only to the document being added.
             *
             * @default null
             */
            onBeforeRemoveState?: EventHandlers.Documents.OnBeforeRemoveState | null;
            /**
             * onRemoveState event that applies only to the document being added.
             *
             * @default null
             */
            onRemoveState?: EventHandlers.Documents.OnRemoveState | null;
            /**
             * onBeforeRemove event that applies only to the document being added.
             *
             * @default null
             */
            onBeforeRemove?: EventHandlers.Documents.OnBeforeRemove | null;
            /**
             * onRemove event that applies only to the document being added.
             *
             * @default null
             */
            onRemove?: EventHandlers.Documents.OnRemove | null;
            /**
             * Whether to maintain the state of tab content
             *
             * @default false
             */
            stateless?: boolean;
        }
        interface Documents {
            /**
             * Specifies the element to apply N.docs to.
             *
             * @default undefined
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * If set to true, N.docs are created in the tab-based Multiple-Document Interface(MDI) format, and if set to false, N.docs are created in the general Single-Document Interface(SDI) format.
             *  - true: Displays tab and page content.
             *  - false: Shows only one page content and no tabs.
             *
             * @default true
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            multi?: boolean;
            /**
             * If the multi option is true, you can set the maximum number of persistent tab contents to prevent your web browser from slowing down each time additional tab content is opened.
             * > When opening new content, if the number of open tab contents exceeds the maximum number of state retentions, the state of the content of the first opened tab is removed, and clicking on the tab from which state retention has been removed will reload the content.
             *
             * > A value of 0 does not limit the maximum number of stateful content.
             *
             * @default 0
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            maxStateful?: number;
            /**
             * If the multi option is true, you can set a maximum number of tab contents to prevent your web browser from slowing down each time additional tab content is opened.
             *
             * > When opening new content, if the number of open tab contents exceeds the maximum number of tabs, no more tab contents can be opened. To open new content, you must close one of your existing tabs.
             *
             * > A value of 0 does not limit the maximum number of stateful content.
             *
             * @default 0
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            maxTabs?: number;
            /**
             * If set to true, new tabs will be added last when you call the add method.
             *
             * @default false
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            addLast?: boolean;
            /**
             * If set to true, tabs can be scrolled by mouse drag or touch.
             *
             * @default false
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            tabScroll?: boolean;
            /**
             * Styles(CSS) that affect the tab element may cause the last tab to be cut off or have a gap.
             * At this time, you can adjust the following option values using the properties of the tabScrollCorrection object to display it normally.
             *  - rightCorrectionPx: This is an option that allows you to correct the appearance of the tab by increasing or decreasing it by 1 when the last tab is cut off or a space is created.
             * ```
             * N("#docs").docs({
             *     tabScrollCorrection: {
             *         rightCorrectionPx: 1
             *     }
             * });
             * ```
             * > If you set the `tabScrollCorrection` option in the `N.context.attr("ui.shell").docs` property of [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010206.html), it will be applied to the entire N.docs component.
             *
             * @default { rightCorrectionPx: 0 }
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            tabScrollCorrection?: {
                rightCorrectionPx?: number;
            };
            /**
             * When you click the "Close All" button, if the closeAllRedirectURL option value is null, all tabs except the active tab will be closed, and if you enter a url string, you will be redirected to that url.
             *
             * When developing as a SPA(Single Page Application), it is recommended to enter the URL to go to the 'home' page so that the browser's garbage resources can be cleaned up.
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            closeAllRedirectURL?: string | null;
            msgContext?: NJS<Window[]>;
            /**
             * If set to true, a progress bar will be displayed until all Ajax requests executed when the page is loaded are completed.
             *
             * @default false
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            entireLoadIndicator?: boolean;
            /**
             * If set to true, Double Submit will be prevented by blocking the screen until all Ajax requests executed when the page is loaded are completed.
             *
             * @default false
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            entireLoadScreenBlock?: boolean;
            /**
             * URLs specified as entireLoadExcludeURLs in entireLoad-related events or options (entireLoadIndicator, entireLoadScreenBlock, etc.) are excluded from capture.
             * > Set this when you want to exclude Ajax calls that are loaded outside the N.docs context when the page is first loaded.
             *
             * @default []
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            entireLoadExcludeURLs?: string[];
            entireLoadRequestCnt?: number;
            entireLoadRequestMaxCnt?: number;
            /**
             * This event runs before content is loaded.
             * ```
             * onBeforeLoad: function(docId, target) {
             *     // docId: document id
             *     // target: Element to place loaded content
             *
             *     var doc = this.doc(docId); // document 정보 가져오기
             * }
             * ```
             * > It will not be called again until the open page is closed.
             *
             * > Because it is executed before the page is loaded, the Controller object of the page loaded with the cont method cannot be obtained.
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onBeforeLoad?: EventHandlers.Documents.OnBeforeLoad | null;
            /**
             * This event runs after the page is loaded.
             * ```
             * onLoad: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             * > It will not be called again until the open page is closed.
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onLoad?: EventHandlers.Documents.OnLoad | null;
            /**
             * This is an event that is executed before any Ajax requests are captured when the page is loading.
             * ```
             * onBeforeEntireLoad: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Retrieve document information
             * }
             * ```
             * > The event is executed once before the content is loaded, which means it is not possible to retrieve the Controller object of the page loaded using the `cont` method at this point.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onBeforeEntireLoad?: EventHandlers.Documents.OnBeforeEntireLoad | null;
            /**
             * Defines an event handler that is executed when an error occurs before page loading is complete and all Ajax requests are completed.
             * ```
             * onErrorEntireLoad: function(e, request, xhr, textStatus, callback) {
             *     // e(arguments[0]): ErrorThrown
             *     // request(arguments[1]): Communicator.request
             *     // xhr(arguments[2]): jQuery XMLHTTORequest
             *     // textStatus(arguments[3]): "success" (if the request succeeds) or "error" (if an error occurs in the submit callback during the request (on the server-side))
             *     // callback(arguments[4]): If the textStatus value is "success," this is the callback function specified as an argument for the submit method.
             * }
             * ```
             * > The event handler function of onErrorEntireLoad is the same as the `callback` parameter of the `N.comm.error` method.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html}
             */
            onErrorEntireLoad?: EventHandlers.Documents.OnErrorEntireLoad | null;
            /**
             * Defines an event handler that is executed after page loading is complete and all Ajax requests are completed.
             * ```
             * onEntireLoad: function(docId, entireLoadRequestCnt, entireLoadRequestMaxCnt) {
             *     // docId: document id
             *     // entireLoadRequestCnt: Number of completed requests
             *     // entireLoadRequestMaxCnt: Maximum number of requests that can be completed
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onEntireLoad?: EventHandlers.Documents.OnEntireLoad | null;
            /**
             * Defines an event handler that runs before the selected tab is activated.
             * ```
             * onBeforeActive: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onBeforeActive?: EventHandlers.Documents.OnBeforeActive | null;
            /**
             * Defines an event handler that runs after the selected tab is activated.
             * ```
             * onActive: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onActive?: EventHandlers.Documents.OnActive | null;
            /**
             * Defines an event handler that runs before the selected tab is disabled.
             * ```
             * onBeforeInactive: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onBeforeInactive?: EventHandlers.Documents.OnBeforeInactive | null;
            /**
             * Defines an event handler that runs after the selected tab is disabled.
             * ```
             * onInactive: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onInactive?: EventHandlers.Documents.OnInactive | null;
            /**
             * Defines an event handler that runs before the state of the selected tab is removed.
             * ```
             * onBeforeRemoveState: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onBeforeRemoveState?: EventHandlers.Documents.OnBeforeRemoveState | null;
            /**
             * Defines an event handler that runs after the state of the selected tab is removed.
             * ```
             * onRemoveState: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onRemoveState?: EventHandlers.Documents.OnRemoveState | null;
            /**
             * Defines an event handler that runs before the selected tab is removed.
             * ```
             * onBeforeRemove: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onBeforeRemove?: EventHandlers.Documents.OnBeforeRemove | null;
            /**
             * Defines an event handler that runs after the selected tab is removed.
             * ```
             * onRemove: function(docId) {
             *     // docId: document id
             *
             *     var doc = this.doc(docId); // Get document information
             *     var cont = this.cont(docId); // Get the Controller object of the document
             *     var view = cont.view;
             *     var request = cont.request;
             * }
             * ```
             *
             * @default null
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            onRemove?: EventHandlers.Documents.OnRemove | null;
            docs?: DocsObject;
            /**
             * If set to true, the menu list dialog will always appear at the top.
             *
             * @default false
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            alwaysOnTop?: boolean;
            /**
             * When applying the `alwaysOnTop` option, specify target elements for calculating the top z-index.
             * > Specified with jQuery selector syntax.
             *
             * > When N.docs-related elements are obscured by other elements, please add an obscured element selector.
             *
             * @default "div, span, ul, p, nav, article, section, header, footer, aside"
             *
             * @see @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0502.html&tab=html/naturaljs/refr/refr050203.html
             */
            alwaysOnTopCalcTarget?: string;
            order?: string[];
            loadedDocId?: string | null;
        }
    }

    namespace EventHandlers {
        namespace Documents {
            interface OnBeforeEntireLoad {
                (this: NUS.Documents, docId?: string): void;
            }
            interface OnErrorEntireLoad {
                (
                    this: NUS.Documents,
                    e: Error,
                    request: NA.Request,
                    xhr: JQueryXHR,
                    textStatus: "success" | "error",
                    submitCallback: NA.Callbacks.Communicator.Submit,
                ): void;
            }
            interface OnEntireLoad {
                (
                    this: NUS.Documents,
                    docId: string,
                    entireLoadRequestCnt: number,
                    entireLoadRequestMaxCnt: number,
                ): void;
            }
            interface OnBeforeLoad {
                (this: NUS.Documents, docId: string, target: NJS<HTMLElement[]>): void;
            }
            interface OnLoad {
                (this: NUS.Documents, docId: string): void;
            }
            interface OnBeforeActive {
                (this: NUS.Documents, docId: string, isFromDocsTabList: boolean, isNotLoaded: boolean): void;
            }
            interface OnActive {
                (this: NUS.Documents, docId: string, isFromDocsTabList: boolean, isNotLoaded: boolean): void;
            }
            interface OnBeforeInactive {
                (this: NUS.Documents, docId?: string): void;
            }
            interface OnInactive {
                (this: NUS.Documents, docId?: string): void;
            }
            interface OnBeforeRemoveState {
                (this: NUS.Documents, docId?: string): void;
            }
            interface OnRemoveState {
                (this: NUS.Documents, docId?: string): void;
            }
            interface OnBeforeRemove {
                (this: NUS.Documents, docId?: string): void;
            }
            interface OnRemove {
                (this: NUS.Documents, docId?: string): void;
            }
        }
    }

    namespace Callbacks {
        namespace Documents {
            interface RemoveState {
                (this: NUS.Documents, docId?: string): void;
            }
            interface LoadContent {
                (this: NUS.Documents): void;
            }
            interface Reload {
                (this: NA.Communicator, html?: string, request?: NA.Request): void;
            }
        }
    }
}
