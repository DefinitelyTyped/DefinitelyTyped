// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace dojox {
        namespace app {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/main.html
         *
         *
         * @param config
         * @param node
         */
        interface main{(config: any, node: any): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/Controller.html
         *
         *
         * @param app dojox/app application instance.
         * @param events {event : handler}
         */
        class Controller {
            constructor(app: any, events: any);
            /**
             * Bind event on dojo/Evented instance, document, domNode or window.
             * Save event signal in controller instance. If no parameter is provided
             * automatically bind all events registered in controller events property.
             *
             * @param evented dojo/Evented instance, document, domNode or window
             * @param event event
             * @param handler event handler
             */
            bind(evented: Object, event: String, handler: Function): Function;
            /**
             * remove a binded event signal.
             *
             * @param evented dojo/Evented instance, document, domNode or window
             * @param event event
             */
            unbind(evented: Object, event: String): Function;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/View.html
         *
         * View class inheriting from ViewBase adding templating & globalization capabilities.
         *
         * @param params view parameters, include:app: the appid: view idname: view nametemplate: view template identifier. If templateString is not empty, this parameter is ignored.templateString: view template stringcontroller: view controller module identifierparent: parent viewchildren: children viewsnls: nls definition module identifier
         */
        class View extends dijit._TemplatedMixin implements dijit._WidgetsInTemplateMixin, dijit.Destroyable, dojox.app.ViewBase {
            constructor(params: any);
            /**
             * Object to which attach points and events will be scoped.  Defaults
             * to 'this'.
             *
             */
            "attachScope": Object;
            /**
             * Used to provide a context require to the dojo/parser in order to be
             * able to use relative MIDs (e.g. ./Widget) in the widget's template.
             *
             */
            "contextRequire": Function;
            /**
             *
             */
            "searchContainerNode": boolean;
            /**
             * Path to template (HTML file) for this widget relative to dojo.baseUrl.
             * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
             *
             */
            "templatePath": string;
            /**
             * A string that represents the widget template.
             * Use in conjunction with dojo.cache() to load from a file.
             *
             */
            "templateString": string;
            /**
             * Should we parse the template to find widgets that might be
             * declared in markup inside it?  (Remove for 2.0 and assume true)
             *
             */
            "widgetsInTemplate": boolean;
            /**
             * view life cycle afterActivate()
             *
             */
            afterActivate(): void;
            /**
             * view life cycle afterDeactivate()
             *
             */
            afterDeactivate(): void;
            /**
             * view life cycle beforeActivate()
             *
             */
            beforeActivate(): void;
            /**
             * view life cycle beforeDeactivate()
             *
             */
            beforeDeactivate(): void;
            /**
             * Construct the UI for this widget from a template, setting this.domNode.
             *
             */
            buildRendering(): void;
            /**
             *
             * @param obj
             * @param event
             * @param method
             */
            connect(obj: any, event: any, method: any): any;
            /**
             * Destroy this class, releasing any resources registered via own().
             *
             * @param preserveDom
             */
            destroy(preserveDom?: boolean): void;
            /**
             *
             */
            destroyRendering(): void;
            /**
             * view life cycle init()
             *
             */
            init(): void;
            /**
             *
             */
            load(): any;
            /**
             * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
             * already removed/destroyed manually.
             *
             */
            own(): any;
            /**
             * start view object.
             * load view template, view controller implement and startup all widgets in view template.
             *
             */
            start(): any;
            /**
             *
             */
            startup(): void;
            /**
             * Static method to get a template based on the templatePath or
             * templateString key
             */
            getCachedTemplate(): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/ViewBase.html
         *
         * View base class with model & controller capabilities. Subclass must implement rendering capabilities.
         *
         * @param params view parameters, include:app: the appid: view idname: view nameparent: parent viewcontroller: view controller module identifierchildren: children views
         */
        class ViewBase {
            constructor(params: any);
            /**
             * view life cycle afterActivate()
             *
             */
            afterActivate(): void;
            /**
             * view life cycle afterDeactivate()
             *
             */
            afterDeactivate(): void;
            /**
             * view life cycle beforeActivate()
             *
             */
            beforeActivate(): void;
            /**
             * view life cycle beforeDeactivate()
             *
             */
            beforeDeactivate(): void;
            /**
             * view life cycle destroy()
             *
             */
            destroy(): void;
            /**
             * view life cycle init()
             *
             */
            init(): void;
            /**
             *
             */
            load(): any;
            /**
             * start view object.
             * load view template, view controller implement and startup all widgets in view template.
             *
             */
            start(): any;
        }
        namespace controllers {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/History.html
             *
             *
             */
            class History extends dojox.app.Controller {
                constructor();
                /**
                 * Current state
                 *
                 */
                "currentState": Object;
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
                /**
                 *
                 * @param evt
                 */
                onDomNodeChange(evt: any): void;
                /**
                 * Response to dojox/app "popstate" event.
                 *
                 * @param evt Transition options parameter
                 */
                onPopState(evt: Object): void;
                /**
                 * Response to dojox/app "startTransition" event.
                 *
                 * @param evt Transition options parameter
                 */
                onStartTransition(evt: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/HistoryHash.html
             *
             *
             * @param app dojox/app application instance.
             */
            class HistoryHash extends dojox.app.Controller {
                constructor(app: any);
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
                /**
                 *
                 * @param evt
                 */
                onDomNodeChange(evt: any): void;
                /**
                 * Response to dojox/app "startTransition" event.
                 *
                 * @param evt transition options parameter
                 */
                onStartTransition(evt: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/BorderLayout.html
             *
             *
             * @param app dojox/app application instance.
             * @param events {event : handler}
             */
            class BorderLayout extends dojox.app.controllers.LayoutBase {
                constructor(app: any, events: any);
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 *
                 * @param view
                 */
                hideView(view: any): void;
                /**
                 * Response to dojox/app "app-initLayout" event which is setup in LayoutBase.
                 * The initLayout event is called once when the View is being created the first time.
                 *
                 * @param event {"view": view, "callback": function(){}};
                 */
                initLayout(event: Object): void;
                /**
                 * Response to dojox/app "app-layoutView" event.
                 *
                 * @param event {"parent":parent, "view":view, "removeView": boolean}
                 */
                layoutView(event: Object): void;
                /**
                 *
                 * @param view
                 */
                showView(view: any): void;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
                /**
                 *
                 */
                onResize(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/LayoutBase.html
             *
             *
             * @param app dojox/app application instance.
             * @param events {event : handler}
             */
            class LayoutBase extends dojox.app.Controller {
                constructor(app: any, events: any);
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 *
                 * @param view
                 */
                hideView(view: any): void;
                /**
                 * Response to dojox/app "app-initLayout" event.
                 *
                 * @param event {"view": view, "callback": function(){}};
                 */
                initLayout(event: Object): void;
                /**
                 * Response to dojox/app "app-layoutView" event.
                 *
                 * @param event {"parent":parent, "view":view, "removeView": boolean}
                 */
                layoutView(event: Object): void;
                /**
                 *
                 * @param view
                 */
                showView(view: any): void;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
                /**
                 *
                 */
                onResize(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/Load.html
             *
             *
             * @param app dojox/app application instance.
             * @param events {event : handler}
             */
            class Load extends dojox.app.Controller {
                constructor(app: any, events: any);
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 * Create a view instance if not already loaded by calling createView. This is typically a
                 * dojox/app/View.
                 *
                 * @param parent parent of the view.
                 * @param childId view id need to be loaded.
                 * @param subIds sub views' id of this view.
                 * @param params
                 */
                createChild(parent: Object, childId: String, subIds: String, params: any): any;
                /**
                 * Create a dojox/app/View instance. Can be overridden to create different type of views.
                 *
                 * @param parent parent of this view.
                 * @param id view id.
                 * @param name view name.
                 * @param mixin additional property to be mixed into the view (templateString, controller...)
                 * @param params params of this view.
                 * @param type the MID of the View. If not provided "dojox/app/View".
                 */
                createView(parent: Object, id: String, name: String, mixin: String, params: Object, type: String): any;
                /**
                 *
                 * @param event
                 */
                init(event: any): void;
                /**
                 * Response to dojox/app "loadArray" event.
                 *
                 * @param event LoadArray event parameter. It should be like this: {"parent":parent, "viewId":viewId, "viewArray":viewArray, "callback":function(){...}}
                 */
                load(event: Object): any;
                /**
                 * Load child and sub children views recursively.
                 *
                 * @param parent parent of this view.
                 * @param childId view id need to be loaded.
                 * @param subIds sub views' id of this view.
                 * @param params params of this view.
                 * @param loadEvent the event passed for the load of this view.
                 */
                loadChild(parent: Object, childId: String, subIds: String, params: Object, loadEvent: Object): any;
                /**
                 * Response to dojox/app "app-load" event.
                 *
                 * @param loadEvent Load event parameter. It should be like this: {"parent":parent, "viewId":viewId, "callback":function(){...}}
                 */
                loadView(loadEvent: Object): any;
                /**
                 * Proceed load queue by FIFO by default.
                 * If load is in proceeding, add the next load to waiting queue.
                 *
                 * @param loadEvt LoadArray event parameter. It should be like this: {"parent":parent, "viewId":viewId, "viewArray":viewArray, "callback":function(){...}}
                 */
                proceedLoadView(loadEvt: Object): void;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/Layout.html
             *
             *
             * @param app dojox/app application instance.
             * @param events {event : handler}
             */
            class Layout extends dojox.app.controllers.LayoutBase {
                constructor(app: any, events: any);
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 *
                 * @param view
                 */
                hideView(view: any): void;
                /**
                 * Response to dojox/app "app-initLayout" event.
                 *
                 * @param event {"view": view, "callback": function(){}};
                 */
                initLayout(event: Object): void;
                /**
                 * Response to dojox/app "app-layoutView" event.
                 *
                 * @param event {"parent":parent, "view":view, "removeView": boolean}
                 */
                layoutView(event: Object): void;
                /**
                 *
                 * @param w
                 */
                resizeSelectedChildren(w: any): void;
                /**
                 *
                 * @param view
                 */
                showView(view: any): void;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
                /**
                 *
                 */
                onResize(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/controllers/Transition.html
             *
             *
             * @param app dojox/app application instance.
             * @param events {event : handler}
             */
            class Transition extends dojox.app.Controller {
                constructor(app: any, events: any);
                /**
                 *
                 */
                "proceeding": boolean;
                /**
                 *
                 */
                "waitingQueue": any[];
                /**
                 * Bind event on dojo/Evented instance, document, domNode or window.
                 * Save event signal in controller instance. If no parameter is provided
                 * automatically bind all events registered in controller events property.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 * @param handler event handler
                 */
                bind(evented: Object, event: String, handler: Function): Function;
                /**
                 * Proceed transition queue by FIFO by default.
                 * If transition is in proceeding, add the next transition to waiting queue.
                 *
                 * @param transitionEvt "app-transition" event parameter. It should be like: {"viewId":viewId, "opts":opts}
                 */
                proceedTransition(transitionEvt: Object): void;
                /**
                 * Response to dojox/app "app-transition" event.
                 *
                 * @param event "app-transition" event parameter. It should be like: {"viewId": viewId, "opts": opts}
                 */
                transition(event: Object): void;
                /**
                 * remove a binded event signal.
                 *
                 * @param evented dojo/Evented instance, document, domNode or window
                 * @param event event
                 */
                unbind(evented: Object, event: String): Function;
                /**
                 *
                 * @param evt
                 */
                onDomNodeChange(evt: any): void;
                /**
                 * Response to dojox/app "startTransition" event.
                 *
                 * @param evt transition options parameter
                 */
                onStartTransition(evt: Object): void;
            }
        }

        namespace module {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/module/env.html
             *
             *
             */
            class env {
                constructor();
                /**
                 *
                 */
                "mode": string;
                /**
                 *
                 */
                init(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/module/lifecycle.html
             *
             *
             */
            class lifecycle {
                constructor();
                /**
                 *
                 */
                "lifecycle": Object;
                /**
                 *
                 */
                getStatus(): any;
                /**
                 *
                 * @param newStatus
                 */
                setStatus(newStatus: any): void;
            }
        }

        namespace utils {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/mvcModel.html
             *
             * mvcModel is called for each mvc model, to create the mvc model based upon the type and params.
             * It will also load models and return the either the loadedModels or a promise.
             * Called for each model with a modelLoader of "dojox/app/utils/mvcModel", it will
             * create the model based upon the type and the params set for the model in the config.
             *
             * @param config The models section of the config for this view or for the app.
             * @param params The params set into the config for this model.
             * @param item The String with the name of this model
             */
            interface mvcModel{(config: Object, params: Object, item: String): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/nls.html
             *
             * nsl is called to create to load the nls all for the app, or for a view.
             *
             * @param config The section of the config for this view or for the app.
             * @param parent The parent of this view or the app itself, so that models from the parent will beavailable to the view.
             */
            interface nls{(config: Object, parent: Object): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/model.html
             *
             * model is called to create all of the models for the app, and all models for a view, it will
             * create and call the appropriate model utility based upon the modelLoader set in the model in the config
             * Called for each view or for the app.  For each model in the config, it willcreate the model utility based upon the modelLoader and call it to create and load the model.
             *
             * @param config The models section of the config for this view or for the app.
             * @param parent The parent of this view or the app itself, so that models from the parent will be available to the view.
             * @param app
             */
            interface model{(config: Object, parent: Object, app: Object): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/simpleModel.html
             *
             * simpleModel is called for each simple model, to create the simple model from the DataStore
             * based upon the store and query params.
             * It will also load models and return the either the loadedModels or a promise.
             * Called for each model with a modelLoader of "dojox/app/utils/simpleModel", it will
             * create the model based upon the store and query params set for the model in the config.
             *
             * @param config The models section of the config for this view or for the app.
             * @param params The params set into the config for this model.
             * @param item The String with the name of this model
             */
            interface simpleModel{(config: Object, params: Object, item: String): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/constraints.html
             *
             *
             */
            interface constraints {
                /**
                 * get current all selected children for this view and it's selected subviews
                 *
                 * @param view the View to get the child from
                 * @param selChildren the Array of the subChildren found
                 */
                getAllSelectedChildren(view: dojox.app.View, selChildren: any[]): any;
                /**
                 * get current selected child according to the constraint
                 *
                 * @param view the View to get the child from
                 * @param constraint tbe constraint object
                 */
                getSelectedChild(view: dojox.app.View, constraint: Object): any;
                /**
                 *
                 * @param constraint
                 */
                register(constraint: any): void;
                /**
                 * set current selected child according to the constraint
                 *
                 * @param view the View to set the selected child to
                 * @param constraint tbe constraint object
                 * @param child the child to select
                 */
                setSelectedChild(view: dojox.app.View, constraint: Object, child: dojox.app.View): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/config.html
             *
             * This module contains the config
             *
             */
            interface config {
                /**
                 * does a deep copy of the source into the target to merge the config from the source into the target
                 * configMerge will merge the source config into the target config with a deep copy.
                 * anything starting with __ will be skipped and if the target is an array the source items will be pushed into the target.
                 *
                 * @param target an object representing the config which will be updated by merging in the source.
                 * @param source an object representing the config to be merged into the target.
                 */
                configMerge(target: Object, source: Object): any;
                /**
                 * scan the source config for has checks and call configMerge to merge has sections, and remove the has sections from the source.
                 * configProcessHas will scan the source config for has checks.
                 * For each has section the items inside the has section will be tested with has (sniff)
                 * If the has test is true it will call configMerge to merge has sections back into the source config.
                 * It will always remove the has section from the source after processing it.
                 * The names in the has section can be separated by a comma, indicating that any of those being true will satisfy the test.
                 *
                 * @param source an object representing the config to be processed.
                 */
                configProcessHas(source: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/layout.html
             *
             *
             */
            interface layout {
                /**
                 * Layout a bunch of child dom nodes within a parent dom node
                 *
                 * @param container parent node
                 * @param dim {l, t, w, h} object specifying dimensions of container into which to place children
                 * @param children a list of children
                 * @param changedRegionId               OptionalIf specified, the slider for the region with the specified id has been dragged, and thusthe region's height or width should be adjusted according to changedRegionSize
                 * @param changedRegionSize               OptionalSee changedRegionId.
                 */
                layoutChildren(container: HTMLElement, dim: Object, children: any[], changedRegionId: String, changedRegionSize: number): void;
                /**
                 * Given the margin-box size of a node, return its content box size.
                 * Functions like domGeometry.contentBox() but is more reliable since it doesn't have
                 * to wait for the browser to compute sizes.
                 *
                 * @param node
                 * @param mb
                 */
                marginBox2contentBox(node: HTMLElement, mb: Object): Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/utils/hash.html
             *
             * This module contains the hash
             *
             */
            interface hash {
                /**
                 * add the view specific params to the hash for example (view1&param1=value1)
                 *
                 * @param hash the url hash
                 * @param view the view name
                 * @param params the params for this view
                 */
                addViewParams(hash: String, view: String, params: Object): any;
                /**
                 * build up the url hash adding the params
                 *
                 * @param hash the url hash
                 * @param params the params object
                 */
                buildWithParams(hash: String, params: Object): any;
                /**
                 * called to handle a view specific params object
                 *
                 * @param params the view specific params object
                 * @param viewPart the part of the view with the params for the view
                 */
                getParamObj(params: Object, viewPart: String): any;
                /**
                 * get the params from the hash
                 *
                 * @param hash the url hash
                 */
                getParams(hash: String): any;
                /**
                 * return the param string
                 *
                 * @param params the params object
                 */
                getParamString(params: Object): any;
                /**
                 * return the target string
                 *
                 * @param hash the hash string
                 * @param defaultView               Optionalthe optional defaultView string
                 */
                getTarget(hash: String, defaultView: String): any;
            }
        }

        namespace widgets {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/widgets/_ScrollableMixin.html
             *
             * Mixin for widgets to have a touch scrolling capability.
             * Actual implementation is in dojox/mobile/scrollable.js.
             * scrollable.js is not a dojo class, but just a collection
             * of functions. This module makes scrollable.js a dojo class.
             *
             */
            class _ScrollableMixin extends dojox.mobile.scrollable {
                constructor();
                /**
                 * e.g. Allow ScrollableView in a SwapView.
                 *
                 */
                "allowNestedScrolls": boolean;
                /**
                 * Enables the search for application-specific bars (header or footer).
                 *
                 */
                "appBars": boolean;
                /**
                 * bounce back to the content area
                 *
                 */
                "constraint": boolean;
                /**
                 * disable the move handler if scroll starts in the unexpected direction
                 *
                 */
                "dirLock": boolean;
                /**
                 *
                 */
                "disableFlashScrollBar": boolean;
                /**
                 *
                 */
                "fadeScrollBar": boolean;
                /**
                 * height of a fixed footer
                 *
                 */
                "fixedFooterHeight": number;
                /**
                 * height of a fixed header
                 *
                 */
                "fixedHeaderHeight": number;
                /**
                 * explicitly specified height of this widget (ex. "300px")
                 *
                 */
                "height": string;
                /**
                 * footer is view-local (as opposed to application-wide)
                 *
                 */
                "isLocalFooter": boolean;
                /**
                 * let touchstart event propagate up
                 *
                 */
                "propagatable": boolean;
                /**
                 * Parameters for dojox/mobile/scrollable.init().
                 *
                 */
                "scrollableParams": Object;
                /**
                 * show scroll bar or not
                 *
                 */
                "scrollBar": boolean;
                /**
                 * v: vertical, h: horizontal, vh: both, f: flip
                 *
                 */
                "scrollDir": string;
                /**
                 *
                 * 1: use (-webkit-)transform:translate3d(x,y,z) style, use (-webkit-)animation for slide animation
                 * 2: use top/left style,
                 * 3: use (-webkit-)transform:translate3d(x,y,z) style, use (-webkit-)transition for slide animation
                 * 0: use default value (3 for Android, iOS6+, and BlackBerry; otherwise 1)
                 *
                 */
                "scrollType": number;
                /**
                 * drag threshold value in pixels
                 *
                 */
                "threshold": number;
                /**
                 * a node that will have touch event handlers
                 *
                 */
                "touchNode": HTMLElement;
                /**
                 * frictional drag
                 *
                 */
                "weight": number;
                /**
                 * Aborts scrolling.
                 * This function stops the scrolling animation that is currently
                 * running. It is called when the user touches the screen while
                 * scrolling.
                 *
                 */
                abort(): void;
                /**
                 * Adds the transparent DIV cover.
                 * The cover is to prevent DOM events from affecting the child
                 * widgets such as a list widget. Without the cover, for example,
                 * child widgets may receive a click event and respond to it
                 * unexpectedly when the user flicks the screen to scroll.
                 * Note that only the desktop browsers need the cover.
                 *
                 */
                addCover(): void;
                /**
                 * A stub function to be overridden by subclasses.
                 * This function is called from onTouchEnd(). The purpose is to give its
                 * subclasses a chance to adjust the destination position. If this
                 * function returns false, onTouchEnd() returns immediately without
                 * performing scroll.
                 *
                 * @param to The destination position. An object with x and y.
                 * @param pos The current position. An object with x and y.
                 * @param dim Dimension information returned by getDim().
                 */
                adjustDestination(to: Object, pos: Object, dim: Object): boolean;
                /**
                 *
                 */
                buildRendering(): void;
                /**
                 * Calculates the scroll bar position.
                 * Given the scroll destination position, calculates the top and/or
                 * the left of the scroll bar(s). Returns an object with x and y.
                 *
                 * @param to The scroll destination position. An object with x and y.ex. {x:0, y:-5}
                 */
                calcScrollBarPos(to: Object): Object;
                /**
                 * Calculate the speed given the distance and time.
                 *
                 * @param distance
                 * @param time
                 */
                calcSpeed(distance: number, time: number): number;
                /**
                 * Checks if the given node is a fixed bar or not.
                 *
                 * @param node
                 * @param local
                 */
                checkFixedBar(node: HTMLElement, local: boolean): any;
                /**
                 * Uninitialize the module.
                 *
                 */
                cleanup(): void;
                /**
                 * Creates a mask for a scroll bar edge.
                 * This function creates a mask that hides corners of one scroll
                 * bar edge to make it round edge. The other side of the edge is
                 * always visible and round shaped with the border-radius style.
                 *
                 */
                createMask(): void;
                /**
                 *
                 */
                destroy(): void;
                /**
                 * Search for application-specific header or footer.
                 *
                 */
                findAppBars(): void;
                /**
                 * Finds the currently displayed view node from my sibling nodes.
                 *
                 * @param node
                 */
                findDisp(node: HTMLElement): any;
                /**
                 * Shows the scroll bar instantly.
                 * This function shows the scroll bar, and then hides it 300ms
                 * later. This is used to show the scroll bar to the user for a
                 * short period of time when a hidden view is revealed.
                 *
                 */
                flashScrollBar(): void;
                /**
                 * Returns various internal dimensional information needed for calculation.
                 *
                 */
                getDim(): Object;
                /**
                 * Gets the top position in the midst of animation.
                 *
                 */
                getPos(): Object;
                /**
                 * Returns the dimensions of the browser window.
                 *
                 */
                getScreenSize(): Object;
                /**
                 * Returns an object that indicates the scrolling speed.
                 * From the position and elapsed time information, calculates the
                 * scrolling speed, and returns an object with x and y.
                 *
                 */
                getSpeed(): Object;
                /**
                 * Hides the scroll bar.
                 * If the fadeScrollBar property is true, hides the scroll bar with
                 * the fade animation.
                 *
                 */
                hideScrollBar(): void;
                /**
                 * Initialize according to the given params.
                 * Mixes in the given params into this instance. At least domNode
                 * and containerNode have to be given.
                 * Starts listening to the touchstart events.
                 * Calls resize(), if this widget is a top level widget.
                 *
                 * @param params               Optional
                 */
                init(params: Object): void;
                /**
                 * Returns true if the given node is a form control.
                 *
                 * @param node
                 */
                isFormElement(node: HTMLElement): boolean;
                /**
                 * Returns true if this is a top-level widget.
                 * Subclass may want to override.
                 *
                 */
                isTopLevel(): boolean;
                /**
                 * Constructs a string value that is passed to the -webkit-transform property.
                 * Return value example: "translate3d(0px,-8px,0px)"
                 *
                 * @param to The destination position. An object with x and/or y.
                 */
                makeTranslateStr(to: Object): String;
                /**
                 * Removes the transparent DIV cover.
                 *
                 */
                removeCover(): void;
                /**
                 * Moves all the children to containerNode.
                 *
                 */
                reparent(): void;
                /**
                 * Resets the scroll bar length, position, etc.
                 *
                 */
                resetScrollBar(): void;
                /**
                 * Calls resize() of each child widget.
                 *
                 */
                resize(): void;
                /**
                 * Scrolls the pane until the searching node is in the view.
                 * Just like the scrollIntoView method of DOM elements, this
                 * function causes the given node to scroll into view, aligning it
                 * either at the top or bottom of the pane.
                 *
                 * @param node A DOM node to be searched for view.
                 * @param alignWithTop               OptionalIf true, aligns the node at the top of the pane.If false, aligns the node at the bottom of the pane.
                 * @param duration               OptionalDuration of scrolling in seconds. (ex. 0.3)If not specified, scrolls without animation.
                 */
                scrollIntoView(node: HTMLElement, alignWithTop: boolean, duration: number): void;
                /**
                 * Moves the scroll bar(s) to the given position without animation.
                 *
                 * @param to The destination position. An object with x and/or y.ex. {x:2, y:5}, {y:20}, etc.
                 */
                scrollScrollBarTo(to: Object): void;
                /**
                 * Scrolls to the given position immediately without animation.
                 *
                 * @param to The destination position. An object with x and y.ex. {x:0, y:-5}
                 * @param doNotMoveScrollBar               OptionalIf true, the scroll bar will not be updated. If not specified,it will be updated.
                 * @param node               OptionalA DOM node to scroll. If not specified, defaults tothis.containerNode.
                 */
                scrollTo(to: Object, doNotMoveScrollBar: boolean, node: HTMLElement): void;
                /**
                 * Programmatically sets key frames for the scroll animation.
                 *
                 * @param from
                 * @param to
                 * @param idx
                 */
                setKeyframes(from: Object, to: Object, idx: number): void;
                /**
                 * Sets the given node as selectable or unselectable.
                 *
                 * @param node
                 * @param selectable
                 */
                setSelectable(node: HTMLElement, selectable: boolean): void;
                /**
                 * Shows the scroll bar.
                 * This function creates the scroll bar instance if it does not
                 * exist yet, and calls resetScrollBar() to reset its length and
                 * position.
                 *
                 */
                showScrollBar(): void;
                /**
                 * Moves the scroll bar(s) to the given position with the slide animation.
                 *
                 * @param to The destination position. An object with x and y.ex. {x:0, y:-5}
                 * @param duration Duration of the animation in seconds. (ex. 0.3)
                 * @param easing The name of easing effect which webkit supports."ease", "linear", "ease-in", "ease-out", etc.
                 */
                slideScrollBarTo(to: Object, duration: number, easing: String): void;
                /**
                 * Scrolls to the given position with the slide animation.
                 *
                 * @param to The scroll destination position. An object with x and/or y.ex. {x:0, y:-5}, {y:-29}, etc.
                 * @param duration Duration of scrolling in seconds. (ex. 0.3)
                 * @param easing The name of easing effect which webkit supports."ease", "linear", "ease-in", "ease-out", etc.
                 */
                slideTo(to: Object, duration: number, easing: String): void;
                /**
                 *
                 */
                startup(): void;
                /**
                 * Stops the currently running animation.
                 *
                 */
                stopAnimation(): void;
                /**
                 * called after a scroll has been performed.
                 *
                 * @param e the scroll event, that contains the following attributes:x (x coordinate of the scroll destination),y (y coordinate of the scroll destination),beforeTop (a boolean that is true if the scroll detination is before the top of the scrollable),beforeTopHeight (the number of pixels before the top of the scrollable for the scroll destination),afterBottom (a boolean that is true if the scroll destination is after the bottom of the scrollable),afterBottomHeight (the number of pixels after the bottom of the scrollable for the scroll destination)
                 */
                onAfterScroll(e: Event): void;
                /**
                 * called before a scroll is initiated. If this method returns false,
                 * the scroll is canceled.
                 *
                 * @param e the scroll event, that contains the following attributes:x (x coordinate of the scroll destination),y (y coordinate of the scroll destination),beforeTop (a boolean that is true if the scroll detination is before the top of the scrollable),beforeTopHeight (the number of pixels before the top of the scrollable for the scroll destination),afterBottom (a boolean that is true if the scroll destination is after the bottom of the scrollable),afterBottomHeight (the number of pixels after the bottom of the scrollable for the scroll destination)
                 */
                onBeforeScroll(e: Event): boolean;
                /**
                 *
                 * @param e
                 */
                onFlickAnimationEnd(e: any): void;
                /**
                 *
                 * @param e
                 */
                onFlickAnimationStart(e: any): void;
                /**
                 * User-defined function to handle touchEnd events.
                 *
                 * @param e
                 */
                onTouchEnd(e: Event): void;
                /**
                 * User-defined function to handle touchMove events.
                 *
                 * @param e
                 */
                onTouchMove(e: any): void;
                /**
                 * User-defined function to handle touchStart events.
                 *
                 * @param e
                 */
                onTouchStart(e: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/app/widgets/Container.html
             *
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class Container extends dijit._WidgetBase implements dijit._Container, dijit._Contained, dojox.app.widgets._ScrollableMixin {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * e.g. Allow ScrollableView in a SwapView.
                 *
                 */
                "allowNestedScrolls": boolean;
                set(property:"allowNestedScrolls", value: boolean): void;
                get(property:"allowNestedScrolls"): boolean;
                watch(property:"allowNestedScrolls", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Enables the search for application-specific bars (header or footer).
                 *
                 */
                "appBars": boolean;
                set(property:"appBars", value: boolean): void;
                get(property:"appBars"): boolean;
                watch(property:"appBars", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                 * for each XXX attribute to be mapped to the DOM.
                 *
                 * attributeMap sets up a "binding" between attributes (aka properties)
                 * of the widget and the widget's DOM.
                 * Changes to widget attributes listed in attributeMap will be
                 * reflected into the DOM.
                 *
                 * For example, calling set('title', 'hello')
                 * on a TitlePane will automatically cause the TitlePane's DOM to update
                 * with the new title.
                 *
                 * attributeMap is a hash where the key is an attribute of the widget,
                 * and the value reflects a binding to a:
                 *
                 * DOM node attribute
                 *   focus: {node: "focusNode", type: "attribute"}
                 * Maps this.focus to this.focusNode.focus
                 *
                 * DOM node innerHTML
                 *   title: { node: "titleNode", type: "innerHTML" }
                 * Maps this.title to this.titleNode.innerHTML
                 *
                 * DOM node innerText
                 *   title: { node: "titleNode", type: "innerText" }
                 * Maps this.title to this.titleNode.innerText
                 *
                 * DOM node CSS class
                 *   myClass: { node: "domNode", type: "class" }
                 * Maps this.myClass to this.domNode.className
                 *
                 * If the value is an array, then each element in the array matches one of the
                 * formats of the above list.
                 *
                 * There are also some shorthands for backwards compatibility:
                 *
                 * string --> { node: string, type: "attribute" }, for example:
                 * "focusNode" ---> { node: "focusNode", type: "attribute" }
                 * "" --> { node: "domNode", type: "attribute" }
                 *
                 */
                "attributeMap": Object;
                set(property:"attributeMap", value: Object): void;
                get(property:"attributeMap"): Object;
                watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                 * widget state.
                 *
                 */
                "baseClass": string;
                set(property:"baseClass", value: string): void;
                get(property:"baseClass"): string;
                watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 *
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * bounce back to the content area
                 *
                 */
                "constraint": boolean;
                set(property:"constraint", value: boolean): void;
                get(property:"constraint"): boolean;
                watch(property:"constraint", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Designates where children of the source DOM node will be placed.
                 * "Children" in this case refers to both DOM nodes and widgets.
                 * For example, for myWidget:
                 *
                 * <div data-dojo-type=myWidget>
                 *     <b> here's a plain DOM node
                 *     <span data-dojo-type=subWidget>and a widget</span>
                 *     <i> and another plain DOM node </i>
                 * </div>
                 * containerNode would point to:
                 *
                 * <b> here's a plain DOM node
                 * <span data-dojo-type=subWidget>and a widget</span>
                 * <i> and another plain DOM node </i>
                 * In templated widgets, "containerNode" is set via a
                 * data-dojo-attach-point assignment.
                 *
                 * containerNode must be defined for any widget that accepts innerHTML
                 * (like ContentPane or BorderContainer or even Button), and conversely
                 * is null for widgets that don't, like TextBox.
                 *
                 */
                "containerNode": HTMLElement;
                set(property:"containerNode", value: HTMLElement): void;
                get(property:"containerNode"): HTMLElement;
                watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * Bi-directional support, as defined by the HTML DIR
                 * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                 * default direction.
                 *
                 */
                "dir": string;
                set(property:"dir", value: string): void;
                get(property:"dir"): string;
                watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * disable the move handler if scroll starts in the unexpected direction
                 *
                 */
                "dirLock": boolean;
                set(property:"dirLock", value: boolean): void;
                get(property:"dirLock"): boolean;
                watch(property:"dirLock", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "disableFlashScrollBar": boolean;
                set(property:"disableFlashScrollBar", value: boolean): void;
                get(property:"disableFlashScrollBar"): boolean;
                watch(property:"disableFlashScrollBar", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * This is our visible representation of the widget! Other DOM
                 * Nodes may by assigned to other properties, usually through the
                 * template system's data-dojo-attach-point syntax, but the domNode
                 * property is the canonical "top level" node in widget UI.
                 *
                 */
                "domNode": HTMLElement;
                set(property:"domNode", value: HTMLElement): void;
                get(property:"domNode"): HTMLElement;
                watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 *
                 */
                "fadeScrollBar": boolean;
                set(property:"fadeScrollBar", value: boolean): void;
                get(property:"fadeScrollBar"): boolean;
                watch(property:"fadeScrollBar", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "fixedFooter": string;
                set(property:"fixedFooter", value: string): void;
                get(property:"fixedFooter"): string;
                watch(property:"fixedFooter", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * height of a fixed footer
                 *
                 */
                "fixedFooterHeight": number;
                set(property:"fixedFooterHeight", value: number): void;
                get(property:"fixedFooterHeight"): number;
                watch(property:"fixedFooterHeight", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "fixedHeader": string;
                set(property:"fixedHeader", value: string): void;
                get(property:"fixedHeader"): string;
                watch(property:"fixedHeader", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * height of a fixed header
                 *
                 */
                "fixedHeaderHeight": number;
                set(property:"fixedHeaderHeight", value: number): void;
                get(property:"fixedHeaderHeight"): number;
                watch(property:"fixedHeaderHeight", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * This widget or a widget it contains has focus, or is "active" because
                 * it was recently clicked.
                 *
                 */
                "focused": boolean;
                set(property:"focused", value: boolean): void;
                get(property:"focused"): boolean;
                watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * explicitly specified height of this widget (ex. "300px")
                 *
                 */
                "height": string;
                set(property:"height", value: string): void;
                get(property:"height"): string;
                watch(property:"height", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * A unique, opaque ID string that can be assigned by users or by the
                 * system. If the developer passes an ID which is known not to be
                 * unique, the specified ID is ignored and the system-generated ID is
                 * used instead.
                 *
                 */
                "id": string;
                set(property:"id", value: string): void;
                get(property:"id"): string;
                watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * footer is view-local (as opposed to application-wide)
                 *
                 */
                "isLocalFooter": boolean;
                set(property:"isLocalFooter", value: boolean): void;
                get(property:"isLocalFooter"): boolean;
                watch(property:"isLocalFooter", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Rarely used.  Overrides the default Dojo locale used to render this widget,
                 * as defined by the HTML LANG attribute.
                 * Value must be among the list of locales specified during by the Dojo bootstrap,
                 * formatted according to RFC 3066 (like en-us).
                 *
                 */
                "lang": string;
                set(property:"lang", value: string): void;
                get(property:"lang"): string;
                watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * let touchstart event propagate up
                 *
                 */
                "propagatable": boolean;
                set(property:"propagatable", value: boolean): void;
                get(property:"propagatable"): boolean;
                watch(property:"propagatable", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "scrollable": boolean;
                set(property:"scrollable", value: boolean): void;
                get(property:"scrollable"): boolean;
                watch(property:"scrollable", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Parameters for dojox/mobile/scrollable.init().
                 *
                 */
                "scrollableParams": Object;
                set(property:"scrollableParams", value: Object): void;
                get(property:"scrollableParams"): Object;
                watch(property:"scrollableParams", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * show scroll bar or not
                 *
                 */
                "scrollBar": boolean;
                set(property:"scrollBar", value: boolean): void;
                get(property:"scrollBar"): boolean;
                watch(property:"scrollBar", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * v: vertical, h: horizontal, vh: both, f: flip
                 *
                 */
                "scrollDir": string;
                set(property:"scrollDir", value: string): void;
                get(property:"scrollDir"): string;
                watch(property:"scrollDir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 *
                 * 1: use (-webkit-)transform:translate3d(x,y,z) style, use (-webkit-)animation for slide animation
                 * 2: use top/left style,
                 * 3: use (-webkit-)transform:translate3d(x,y,z) style, use (-webkit-)transition for slide animation
                 * 0: use default value (3 for Android, iOS6+, and BlackBerry; otherwise 1)
                 *
                 */
                "scrollType": number;
                set(property:"scrollType", value: number): void;
                get(property:"scrollType"): number;
                watch(property:"scrollType", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * pointer to original DOM node
                 *
                 */
                "srcNodeRef": HTMLElement;
                set(property:"srcNodeRef", value: HTMLElement): void;
                get(property:"srcNodeRef"): HTMLElement;
                watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * HTML style attributes as cssText string or name/value hash
                 *
                 */
                "style": string;
                set(property:"style", value: string): void;
                get(property:"style"): string;
                watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * drag threshold value in pixels
                 *
                 */
                "threshold": number;
                set(property:"threshold", value: number): void;
                get(property:"threshold"): number;
                watch(property:"threshold", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * HTML title attribute.
                 *
                 * For form widgets this specifies a tooltip to display when hovering over
                 * the widget (just like the native HTML title attribute).
                 *
                 * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                 * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                 * interpreted as HTML.
                 *
                 */
                "title": string;
                set(property:"title", value: string): void;
                get(property:"title"): string;
                watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                 * this specifies the tooltip to appear when the mouse is hovered over that text.
                 *
                 */
                "tooltip": string;
                set(property:"tooltip", value: string): void;
                get(property:"tooltip"): string;
                watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * a node that will have touch event handlers
                 *
                 */
                "touchNode": HTMLElement;
                set(property:"touchNode", value: HTMLElement): void;
                get(property:"touchNode"): HTMLElement;
                watch(property:"touchNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * frictional drag
                 *
                 */
                "weight": number;
                set(property:"weight", value: number): void;
                get(property:"weight"): number;
                watch(property:"weight", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * Aborts scrolling.
                 * This function stops the scrolling animation that is currently
                 * running. It is called when the user touches the screen while
                 * scrolling.
                 *
                 */
                abort(): void;
                /**
                 * Makes the given widget a child of this widget.
                 * Inserts specified child widget's dom node as a child of this widget's
                 * container node, and possibly does other processing (such as layout).
                 *
                 * @param widget
                 * @param insertIndex               Optional
                 */
                addChild(widget: dijit._WidgetBase, insertIndex: number): void;
                /**
                 * Adds the transparent DIV cover.
                 * The cover is to prevent DOM events from affecting the child
                 * widgets such as a list widget. Without the cover, for example,
                 * child widgets may receive a click event and respond to it
                 * unexpectedly when the user flicks the screen to scroll.
                 * Note that only the desktop browsers need the cover.
                 *
                 */
                addCover(): void;
                /**
                 * A stub function to be overridden by subclasses.
                 * This function is called from onTouchEnd(). The purpose is to give its
                 * subclasses a chance to adjust the destination position. If this
                 * function returns false, onTouchEnd() returns immediately without
                 * performing scroll.
                 *
                 * @param to The destination position. An object with x and y.
                 * @param pos The current position. An object with x and y.
                 * @param dim Dimension information returned by getDim().
                 */
                adjustDestination(to: Object, pos: Object, dim: Object): boolean;
                /**
                 *
                 */
                buildRendering(): void;
                /**
                 * Calculates the scroll bar position.
                 * Given the scroll destination position, calculates the top and/or
                 * the left of the scroll bar(s). Returns an object with x and y.
                 *
                 * @param to The scroll destination position. An object with x and y.ex. {x:0, y:-5}
                 */
                calcScrollBarPos(to: Object): Object;
                /**
                 * Calculate the speed given the distance and time.
                 *
                 * @param distance
                 * @param time
                 */
                calcSpeed(distance: number, time: number): number;
                /**
                 * Checks if the given node is a fixed bar or not.
                 *
                 * @param node
                 * @param local
                 */
                checkFixedBar(node: HTMLElement, local: boolean): any;
                /**
                 * Uninitialize the module.
                 *
                 */
                cleanup(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: Object, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: any, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: Object, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: any, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: Object, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: any, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: Object, event: Function, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 *
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 *
                 * @param obj
                 * @param event
                 * @param method
                 */
                connect(obj: any, event: Function, method: Function): any;
                /**
                 * Creates a mask for a scroll bar edge.
                 * This function creates a mask that hides corners of one scroll
                 * bar edge to make it round edge. The other side of the edge is
                 * always visible and round shaped with the border-radius style.
                 *
                 */
                createMask(): void;
                /**
                 * Wrapper to setTimeout to avoid deferred functions executing
                 * after the originating widget has been destroyed.
                 * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                 *
                 * @param fcn Function reference.
                 * @param delay               OptionalDelay, defaults to 0.
                 */
                defer(fcn: Function, delay: number): Object;
                /**
                 * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                 * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                 *
                 * This method will also destroy internal widgets such as those created from a template,
                 * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                 *
                 * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                 * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                 * they should use destroyRecursive() for widgets with children.
                 *
                 * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets
                 */
                destroy(preserveDom?: boolean): void;
                /**
                 * Recursively destroy the children of this widget and their
                 * descendants.
                 *
                 * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.
                 */
                destroyDescendants(preserveDom: boolean): void;
                /**
                 * Destroy this widget and its descendants
                 * This is the generic "destructor" function that all widget users
                 * should call to cleanly discard with a widget. Once a widget is
                 * destroyed, it is removed from the manager object.
                 *
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.
                 */
                destroyRecursive(preserveDom: boolean): void;
                /**
                 * Destroys the DOM nodes associated with this widget.
                 *
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.
                 */
                destroyRendering(preserveDom?: boolean): void;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 *
                 * Disconnects handle created by connect.
                 *
                 * @param handle
                 */
                disconnect(handle: any): void;
                /**
                 * Used by widgets to signal that a synthetic event occurred, ex:
                 *
                 * myWidget.emit("attrmodified-selectedChildWidget", {}).
                 * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                 * Also calls onType() method, if present, and returns value from that method.
                 * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                 * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                 *
                 * @param type
                 * @param eventObj               Optional
                 * @param callbackArgs               Optional
                 */
                emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                /**
                 * Search for application-specific header or footer.
                 *
                 */
                findAppBars(): void;
                /**
                 * Finds the currently displayed view node from my sibling nodes.
                 *
                 * @param node
                 */
                findDisp(node: HTMLElement): any;
                /**
                 * Shows the scroll bar instantly.
                 * This function shows the scroll bar, and then hides it 300ms
                 * later. This is used to show the scroll bar to the user for a
                 * short period of time when a hidden view is revealed.
                 *
                 */
                flashScrollBar(): void;
                /**
                 * Get a property from a widget.
                 * Get a named property from a widget. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 *
                 * For example, if the widget has properties foo and bar
                 * and a method named _getFooAttr(), calling:
                 * myWidget.get("foo") would be equivalent to calling
                 * widget._getFooAttr() and myWidget.get("bar")
                 * would be equivalent to the expression
                 * widget.bar2
                 *
                 * @param name The property to get.
                 */
                get(name: any): any;
                /**
                 * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                 * is this widget.   Note that it does not return all descendants, but rather just direct children.
                 * Analogous to Node.childNodes,
                 * except containing widgets rather than DOMNodes.
                 *
                 * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                 * outside of this.containerNode.
                 *
                 * Note that the array returned is a simple array.  Application code should not assume
                 * existence of methods like forEach().
                 *
                 */
                getChildren(): any[];
                /**
                 * Returns various internal dimensional information needed for calculation.
                 *
                 */
                getDim(): Object;
                /**
                 * Returns the index of this widget within its container parent.
                 * It returns -1 if the parent does not exist, or if the parent
                 * is not a dijit/_Container
                 *
                 */
                getIndexInParent(): any;
                /**
                 * Gets the index of the child in this container or -1 if not found
                 *
                 * @param child
                 */
                getIndexOfChild(child: dijit._WidgetBase): any;
                /**
                 * Returns null if this is the last child of the parent,
                 * otherwise returns the next element sibling to the "right".
                 *
                 */
                getNextSibling(): any;
                /**
                 * Returns the parent widget of this widget.
                 *
                 */
                getParent(): any;
                /**
                 * Gets the top position in the midst of animation.
                 *
                 */
                getPos(): Object;
                /**
                 * Returns null if this is the first child of the parent,
                 * otherwise returns the next element sibling to the "left".
                 *
                 */
                getPreviousSibling(): any;
                /**
                 * Returns the dimensions of the browser window.
                 *
                 */
                getScreenSize(): Object;
                /**
                 * Returns an object that indicates the scrolling speed.
                 * From the position and elapsed time information, calculates the
                 * scrolling speed, and returns an object with x and y.
                 *
                 */
                getSpeed(): Object;
                /**
                 * Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
                 *
                 */
                hasChildren(): boolean;
                /**
                 * Hides the scroll bar.
                 * If the fadeScrollBar property is true, hides the scroll bar with
                 * the fade animation.
                 *
                 */
                hideScrollBar(): void;
                /**
                 * Initialize according to the given params.
                 * Mixes in the given params into this instance. At least domNode
                 * and containerNode have to be given.
                 * Starts listening to the touchstart events.
                 * Calls resize(), if this widget is a top level widget.
                 *
                 * @param params               Optional
                 */
                init(params: Object): void;
                /**
                 * Return true if this widget can currently be focused
                 * and false if not
                 *
                 */
                isFocusable(): any;
                /**
                 * Returns true if the given node is a form control.
                 *
                 * @param node
                 */
                isFormElement(node: HTMLElement): boolean;
                /**
                 * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                 *
                 */
                isLeftToRight(): any;
                /**
                 * Returns true if this is a top-level widget.
                 * Subclass may want to override.
                 *
                 */
                isTopLevel(): boolean;
                /**
                 * layout container
                 *
                 */
                layout(): void;
                /**
                 * Constructs a string value that is passed to the -webkit-transform property.
                 * Return value example: "translate3d(0px,-8px,0px)"
                 *
                 * @param to The destination position. An object with x and/or y.
                 */
                makeTranslateStr(to: Object): String;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: Function, func: Function): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 *
                 */
                own(): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 *
                 * @param reference Widget, DOMNode, or id of widget or DOMNode
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().
                 */
                placeAt(reference: String, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 *
                 * @param reference Widget, DOMNode, or id of widget or DOMNode
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().
                 */
                placeAt(reference: HTMLElement, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 *
                 * @param reference Widget, DOMNode, or id of widget or DOMNode
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().
                 */
                placeAt(reference: dijit._WidgetBase, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 *
                 * @param reference Widget, DOMNode, or id of widget or DOMNode
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().
                 */
                placeAt(reference: String, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 *
                 * @param reference Widget, DOMNode, or id of widget or DOMNode
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().
                 */
                placeAt(reference: HTMLElement, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 *
                 * @param reference Widget, DOMNode, or id of widget or DOMNode
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().
                 */
                placeAt(reference: dijit._WidgetBase, position: number): any;
                /**
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
                 *
                 */
                postCreate(): void;
                /**
                 * Called after the parameters to the widget have been read-in,
                 * but before the widget template is instantiated. Especially
                 * useful to set properties that are referenced in the widget
                 * template.
                 *
                 */
                postMixInProperties(): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 *
                 * @param widget
                 */
                removeChild(widget: dijit._WidgetBase): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 *
                 * @param widget
                 */
                removeChild(widget: number): void;
                /**
                 * Removes the transparent DIV cover.
                 *
                 */
                removeCover(): void;
                /**
                 * Moves all the children to containerNode.
                 *
                 */
                reparent(): void;
                /**
                 * Resets the scroll bar length, position, etc.
                 *
                 */
                resetScrollBar(): void;
                /**
                 * Call this to resize a widget, or after its size has changed.
                 * Change size mode
                 * When changeSize is specified, changes the marginBox of this widget
                 * and forces it to re-layout its contents accordingly.
                 * changeSize may specify height, width, or both.
                 *
                 * If resultSize is specified it indicates the size the widget will
                 * become after changeSize has been applied.
                 *
                 * Notification mode
                 * When changeSize is null, indicates that the caller has already changed
                 * the size of the widget, or perhaps it changed because the browser
                 * window was resized.  Tells widget to re-layout its contents accordingly.
                 *
                 * If resultSize is also specified it indicates the size the widget has
                 * become.
                 *
                 * In either mode, this method also:
                 *
                 * Sets this._borderBox and this._contentBox to the new size of
                 *  the widget.  Queries the current domNode size if necessary.
                 * Calls layout() to resize contents (and maybe adjust child widgets).
                 *
                 * @param changeSize               OptionalSets the widget to this margin-box size and position.May include any/all of the following properties:{w: int, h: int, l: int, t: int}
                 * @param resultSize               OptionalThe margin-box size of this widget after applying changeSize (ifchangeSize is specified).  If caller knows this size andpasses it in, we don't need to query the browser to get the size.{w: int, h: int}
                 */
                resize(changeSize?: Object, resultSize?: Object): void;
                /**
                 * Scrolls the pane until the searching node is in the view.
                 * Just like the scrollIntoView method of DOM elements, this
                 * function causes the given node to scroll into view, aligning it
                 * either at the top or bottom of the pane.
                 *
                 * @param node A DOM node to be searched for view.
                 * @param alignWithTop               OptionalIf true, aligns the node at the top of the pane.If false, aligns the node at the bottom of the pane.
                 * @param duration               OptionalDuration of scrolling in seconds. (ex. 0.3)If not specified, scrolls without animation.
                 */
                scrollIntoView(node: HTMLElement, alignWithTop: boolean, duration: number): void;
                /**
                 * Moves the scroll bar(s) to the given position without animation.
                 *
                 * @param to The destination position. An object with x and/or y.ex. {x:2, y:5}, {y:20}, etc.
                 */
                scrollScrollBarTo(to: Object): void;
                /**
                 * Scrolls to the given position immediately without animation.
                 *
                 * @param to The destination position. An object with x and y.ex. {x:0, y:-5}
                 * @param doNotMoveScrollBar               OptionalIf true, the scroll bar will not be updated. If not specified,it will be updated.
                 * @param node               OptionalA DOM node to scroll. If not specified, defaults tothis.containerNode.
                 */
                scrollTo(to: Object, doNotMoveScrollBar: boolean, node: HTMLElement): void;
                /**
                 * Set a property on a widget
                 * Sets named properties on a widget which may potentially be handled by a
                 * setter in the widget.
                 *
                 * For example, if the widget has properties foo and bar
                 * and a method named _setFooAttr(), calling
                 * myWidget.set("foo", "Howdy!") would be equivalent to calling
                 * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                 * would be equivalent to the statement widget.bar = 3;
                 *
                 * set() may also be called with a hash of name/value pairs, ex:
                 *
                 * myWidget.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * });
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 *
                 * @param name The property to set.
                 * @param value The value to set in the property.
                 */
                set(name: any, value: any): any;
                /**
                 * Programmatically sets key frames for the scroll animation.
                 *
                 * @param from
                 * @param to
                 * @param idx
                 */
                setKeyframes(from: Object, to: Object, idx: number): void;
                /**
                 * Sets the given node as selectable or unselectable.
                 *
                 * @param node
                 * @param selectable
                 */
                setSelectable(node: HTMLElement, selectable: boolean): void;
                /**
                 * Shows the scroll bar.
                 * This function creates the scroll bar instance if it does not
                 * exist yet, and calls resetScrollBar() to reset its length and
                 * position.
                 *
                 */
                showScrollBar(): void;
                /**
                 * Moves the scroll bar(s) to the given position with the slide animation.
                 *
                 * @param to The destination position. An object with x and y.ex. {x:0, y:-5}
                 * @param duration Duration of the animation in seconds. (ex. 0.3)
                 * @param easing The name of easing effect which webkit supports."ease", "linear", "ease-in", "ease-out", etc.
                 */
                slideScrollBarTo(to: Object, duration: number, easing: String): void;
                /**
                 * Scrolls to the given position with the slide animation.
                 *
                 * @param to The scroll destination position. An object with x and/or y.ex. {x:0, y:-5}, {y:-29}, etc.
                 * @param duration Duration of scrolling in seconds. (ex. 0.3)
                 * @param easing The name of easing effect which webkit supports."ease", "linear", "ease-in", "ease-out", etc.
                 */
                slideTo(to: Object, duration: number, easing: String): void;
                /**
                 *
                 */
                startup(): void;
                /**
                 * Stops the currently running animation.
                 *
                 */
                stopAnimation(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                 *
                 * Subscribes to the specified topic and calls the specified method
                 * of this object and registers for unsubscribe() on widget destroy.
                 *
                 * Provide widget-specific analog to dojo.subscribe, except with the
                 * implicit use of this widget as the target object.
                 *
                 * @param t The topic
                 * @param method The callback
                 */
                subscribe(t: String, method: Function): any;
                /**
                 * Returns a string that represents the widget.
                 * When a widget is cast to a string, this method will be used to generate the
                 * output. Currently, it does not implement any sort of reversible
                 * serialization.
                 *
                 */
                toString(): string;
                /**
                 * Deprecated. Override destroy() instead to implement custom widget tear-down
                 * behavior.
                 *
                 */
                uninitialize(): boolean;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 *
                 * Unsubscribes handle created by this.subscribe.
                 * Also removes handle from this widget's list of subscriptions
                 *
                 * @param handle
                 */
                unsubscribe(handle: Object): void;
                /**
                 * Watches a property for changes
                 *
                 * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched
                 * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.
                 */
                watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                /**
                 * called after a scroll has been performed.
                 *
                 * @param e the scroll event, that contains the following attributes:x (x coordinate of the scroll destination),y (y coordinate of the scroll destination),beforeTop (a boolean that is true if the scroll detination is before the top of the scrollable),beforeTopHeight (the number of pixels before the top of the scrollable for the scroll destination),afterBottom (a boolean that is true if the scroll destination is after the bottom of the scrollable),afterBottomHeight (the number of pixels after the bottom of the scrollable for the scroll destination)
                 */
                onAfterScroll(e: Event): void;
                /**
                 * called before a scroll is initiated. If this method returns false,
                 * the scroll is canceled.
                 *
                 * @param e the scroll event, that contains the following attributes:x (x coordinate of the scroll destination),y (y coordinate of the scroll destination),beforeTop (a boolean that is true if the scroll detination is before the top of the scrollable),beforeTopHeight (the number of pixels before the top of the scrollable for the scroll destination),afterBottom (a boolean that is true if the scroll destination is after the bottom of the scrollable),afterBottomHeight (the number of pixels after the bottom of the scrollable for the scroll destination)
                 */
                onBeforeScroll(e: Event): boolean;
                /**
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 *
                 */
                onBlur(): void;
                /**
                 *
                 * @param e
                 */
                onFlickAnimationEnd(e: any): void;
                /**
                 *
                 * @param e
                 */
                onFlickAnimationStart(e: any): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * User-defined function to handle touchEnd events.
                 *
                 * @param e
                 */
                onTouchEnd(e: Event): void;
                /**
                 * User-defined function to handle touchMove events.
                 *
                 * @param e
                 */
                onTouchMove(e: any): void;
                /**
                 * User-defined function to handle touchStart events.
                 *
                 * @param e
                 */
                onTouchStart(e: any): void;
            }
        }

    }
}

declare module "dojox/app/main" {
    var exp: dojox.app.main
    export=exp;
}
declare module "dojox/app/Controller" {
    var exp: dojox.app.Controller
    export=exp;
}
declare module "dojox/app/ViewBase" {
    var exp: dojox.app.ViewBase
    export=exp;
}
declare module "dojox/app/View" {
    var exp: dojox.app.View
    export=exp;
}
declare module "dojox/app/controllers/BorderLayout" {
    var exp: dojox.app.controllers.BorderLayout
    export=exp;
}
declare module "dojox/app/controllers/History" {
    var exp: dojox.app.controllers.History
    export=exp;
}
declare module "dojox/app/controllers/HistoryHash" {
    var exp: dojox.app.controllers.HistoryHash
    export=exp;
}
declare module "dojox/app/controllers/Layout" {
    var exp: dojox.app.controllers.Layout
    export=exp;
}
declare module "dojox/app/controllers/LayoutBase" {
    var exp: dojox.app.controllers.LayoutBase
    export=exp;
}
declare module "dojox/app/controllers/Load" {
    var exp: dojox.app.controllers.Load
    export=exp;
}
declare module "dojox/app/controllers/Transition" {
    var exp: dojox.app.controllers.Transition
    export=exp;
}
declare module "dojox/app/module/env" {
    var exp: dojox.app.module.env
    export=exp;
}
declare module "dojox/app/module/lifecycle" {
    var exp: dojox.app.module.lifecycle
    export=exp;
}
declare module "dojox/app/utils/mvcModel" {
    var exp: dojox.app.utils.mvcModel
    export=exp;
}
declare module "dojox/app/utils/nls" {
    var exp: dojox.app.utils.nls
    export=exp;
}
declare module "dojox/app/utils/model" {
    var exp: dojox.app.utils.model
    export=exp;
}
declare module "dojox/app/utils/simpleModel" {
    var exp: dojox.app.utils.simpleModel
    export=exp;
}
declare module "dojox/app/utils/config" {
    var exp: dojox.app.utils.config
    export=exp;
}
declare module "dojox/app/utils/constraints" {
    var exp: dojox.app.utils.constraints
    export=exp;
}
declare module "dojox/app/utils/layout" {
    var exp: dojox.app.utils.layout
    export=exp;
}
declare module "dojox/app/utils/hash" {
    var exp: dojox.app.utils.hash
    export=exp;
}
declare module "dojox/app/widgets/_ScrollableMixin" {
    var exp: dojox.app.widgets._ScrollableMixin
    export=exp;
}
declare module "dojox/app/widgets/Container" {
    var exp: dojox.app.widgets.Container
    export=exp;
}
