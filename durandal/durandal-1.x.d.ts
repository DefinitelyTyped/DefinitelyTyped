// Type definitions for durandal 1.1.1
// Project: http://durandaljs.com
// Definitions by: Evan Larsen <http://nouvosoft.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

declare module "durandal/system" {
    /**
      * Returns the module id associated with the specified object
      */
    export var getModuleId: (obj: any) => string;
    /**
      * Sets the module id on the module.
      */
    export var setModuleId: (obj, id: string) => void;
    /**
      * Call this function to enable or disable Durandal's debug mode. Calling it with no parameters will return true if the framework is currently in debug mode, false otherwise.
      */
    export var debug: (debug?: boolean) => boolean;
    /**
      * Checks if the obj is an array
      */
    export var isArray: (obj: any) => boolean;
    /**
      * Logs data to the console. Pass any number of parameters to be logged. Log output is not processed if the framework is not running in debug mode.
      */
    export var log: (...msgs: any[]) => void;
    /**
      * Creates a deferred object which can be used to create a promise. Optionally pass a function action to perform which will be passed an object used in resolving the promise.
      */
    export var defer: (action?: Function) => JQueryDeferred<any>;
    /**
      * Creates a simple V4 UUID. This should not be used as a PK in your database. It can be used to generate internal, unique ids.
      */
    export var guid: () => string;
    /**
      * Uses require.js to obtain a module. This function returns a promise which resolves with the module instance. You can pass more than one module id to this function. If more than one is passed, then the promise will resolve with one callback parameter per module.
      */
    export var acquire: (...modules: string[]) => JQueryPromise<any>;
}

declare module "durandal/app" {
    /**
      * Sets the title for the app. You must set this before calling start. This will set the document title and the default message box header. It is also used internally by the router to set the document title when pages change.
      */
    export var title: string;
    /**
      *  simple helper function that wraps a call to modalDialog.show()
      */
    export var showModal: (obj, activationData?, context?) => JQueryPromise<any>;
    /**
      * A simple helper function that translates to return modalDialog.show(new MessageBox(message, title, options));
      */
    export var showMessage: (message: string, title?: string, options?: any) => JQueryPromise<any>;
    /**
      * Call this function to bootstrap the Durandal framework. It returns a promise which is resolved when the framework is configured and the dom is ready. At that point you are ready to set your root.
      */
    export var start: () => JQueryPromise<any>;
    /**
      * This sets the root view or view model and displays the composed application in the specified application host. 
      * @param root parameter is required and can be anything that the composition module understands as a view or view model. This includes strings and objects. 
      * @param transition If you have a splash screen, you may want to specify an optional transition to animate from the splash to your main shell. 
      * @param applicationHost parameter is optional. If provided it should be an element id for the node into which the UI should be composed. If it is not provided the default is to look for an element with an id of "applicationHost".
      */
    export var setRoot: (root: any, transition?: string, applicationHost?: string) => void;
    /**
      * If you intend to run on mobile, you should also call app.adaptToDevice() before setting the root.
      */
    export var adaptToDevice: () => void;
    /**
      * The events parameter is a space delimited string containing one or more event identifiers. When one of these events is triggered, the callback is called and passed the event data provided by the trigger. The special events value of "all" binds all events on the object to the callback. If a context is provided, it will be bound to this for the callback. If the callback is omitted, then a promise-like object is returned from on. This object represents a subscription and has a then function used to register callbacks.
      */
    export var on: (events: string, callback: Function, context?) => IEventSubscription;
    /**
      * Unwires callbacks from events. If no context is specified, all callbacks with different contexts will be removed. If no callback is specified, all callbacks for the event will be removed. If no event is specified, all event callbacks on the object will be removed.
      */
    export var off: (events: string, callback: Function, context?) => any;
    /**
      * Triggers an event, or space-delimited list of events. Subsequent arguments to trigger will be passed along to the event callbacks.
      */
    export var trigger: (events: string, ...args: any[]) => any;
    /**
      * Provides a function which can be used as a callback to trigger the events. This is useful in combination with jQuery events which may need to trigger the aggregator's events.
      */
    export var proxy: (events) => Function;
}

declare module "durandal/composition" {
    /**
      * sets activate: true on every compose binding
      */
    export var activateDuringComposition: boolean;
    /**
      * changes the convention for finding where transitions are located
      */
    export var convertTransitionToModuleId: (name: string) => string;
    /**
      * sets a default transition for all compositions
      */
    export var defaultTransitionName: string;
    /**
      * the default implementation for switching the content during composition
      */
    export var switchContent: (parent: HTMLElement, newChild: HTMLElement, settings: any) => void;
    /**
      * the default implementation on binding and showing content during composition
      */
    export var bindAndShow: (element: HTMLElement, view: HTMLElement, settings: any) => void;
    /**
      * the default strategy which is: return viewLocator.locateViewForObject(settings.model, settings.viewElements);
      */
    export var defaultStrategy: (settings: any) => JQueryPromise<any>;
    /**
      * the default method for getting settings from the binding handler compose.
      */
    export var getSettings: (valueAccessor: any) => any;
    /**
      * the default method for executing a strategy during composition
      */
    export var executeStrategy: (element: HTMLElement, settings: any) => void;
    /**
      * the default method for injecting during composition
      */
    export var inject: (element: HTMLElement, settings: any) => void;
    /**
      * the default method for composing
      */
    export var compose: (element: HTMLElement, settings: any, bindingContext: any) => void;
}

declare module "durandal/http" {
    /**
      * the default is 'callback'
      */
    export var defaultJSONPCallbackParam: string;
    /**
      * Performs an HTTP GET request on the specified URL. This function returns a promise which resolves with the returned response data. You can optionally return a query object whose properties will be used to construct a query string.
      */
    export var get: (url: string, query: Object) => JQueryPromise<any>;
    /**
      * Performs a JSONP request to the specified url. You can optionally include a query object whose properties will be used to construct the query string. Also, you can pass the name of the API's callback parameter. If none is specified, it defaults to "callback". This api returns a promise. If you are using a callback parameter other than "callback" consistently throughout your application, then you may want to set the http module's defaultJSONPCallbackParam so that you don't need to specify it on every request.
      */
    export var jsonp: (url: string, query: Object, callbackParam: string) => JQueryPromise<any>;
    /**
      * Performs an HTTP POST request on the specified URL with the supplied data. The data object is converted to JSON and the request is sent with an application/json content type. Thie function returns a promise which resolves with the returned response data.
      */
    export var post: (url: string, data: Object) => JQueryPromise<any>;
}

declare module "durandal/modalDialog" {
    /**
      * the default is 1050
      */
    export var currentZIndex: number;
    /**
      * This is a helper function which can be used in the creation of custom modal contexts. Each time it is called, it returns a successively higher zIndex value than the last time.
      */
    export var getNextZIndex: () => number;
    /**
      * This is a helper function which will tell you if any modals are currently open.
      */
    export var isModalOpen: () => boolean;
    /**
      * You may wish to customize modal displays or add additional contexts in order to display modals in different ways. To alter the default context, you would acquire it by calling getContext() and then alter it's pipeline. If you don't provide a value for name it returns the default context.
      */
    export var getContext: (name: string) => any;
    /**
      * Pass a name and an object which defines the proper modal display pipeline via the functions described in the next section. This creates a new modal context or "modal style."
      */
    export var addContext: (name: string, modalContext: any) => JQueryPromise<any>;
    /**
      * creates a settings obj from the supplied params
      */
    export var createCompositionSettings: (obj: any, modalContext: any) => any;
    /**
      * This API uses the composition module to compose your obj into a modal popover. It also uses the viewModel module to check and enforce any screen lifecycle needs that obj may have. A promise is returned which will be resolved when the modal dialog is dismissed. The obj is the view model for your modal dialog, or a moduleId for the view model to load. Your view model instance will have a single property added to it by this mechanism called modal which represents the dialog infrastructure itself. This modal object has a single function called close which can be invoked to close the modal. You may also pass data to close which will be returned via the promise mechanism. The modal object also references it's owner, activator, the composition settings it was created with and its display context. Speaking of context, this parameter represents the display context or modal style. By default, there is one context registered with the system, named 'default'. If no context is specified, the default context with be used to display the modal. You can also specify activationData which is an arbitrary object that will be passed to your modal's activate function, if it has one.
      */
    export var show: (obj: any, activationData: any, context: any) => JQueryPromise<any>;
}

declare module "durandal/viewEngine" {
    /**
      * The file extension that view source files are expected to have.
      */
    export var viewExtension: string;
    /**
      * The name of the RequireJS loader plugin used by the viewLocator to obtain the view source. (Use requirejs to map the plugin's full path).
      */
    export var viewPlugin: string;
    /**
      * Returns true if the potential string is a url for a view, according to the view engine.
      */
    export var isViewUrl: (url: string) => boolean;
    /**
      * Converts a view url into a view id.
      */
    export var convertViewUrlToViewId: (url: string) => string;
    /**
      * Converts a view id into a full RequireJS path.
      */
    export var convertViewIdToRequirePath: (viewId: string) => string;
    /**
      * Parses some markup and turns it into a dom element.
      */
    export var parseMarkup: (markup: string) => HTMLElement;
    /**
      * Returns a promise for a dom element identified by the viewId parameter.
      */
    export var createView: (viewId: string) => JQueryPromise<any>;
}

declare module "durandal/viewLocator" {
    /**
      * Allows you to set up a convention for mapping module folders to view folders. modulesPath is a string in the path that will be replaced by viewsPath. Partial views will be mapped to the "views" folder unless an areasPath is specified. All parameters are optional. If none are specified, the convention will map modules in a "viewmodels" folder to views in a "views" folder.
      */
    export var useConvention: (modulesPath?: string, viewsPath?: string, areasPath?: string) => string;
    /**
      * This function takes in an object instance, which it then maps to a view id. That id is then passed to the locateView function and it is processed as above. If elementsToSearch are provided, those are passed along to locateView. Following is a description of how locateViewForObject determines the view for a given object instance.
      */
    export var locateViewForObject: (obj: {}, elementsToSearch: HTMLElement[]) => JQueryPromise<any>;
    /**
      * This function does nothing by default which is why editCustomer.js is mapped to editCustomer.html (both have the same underlying id of editCustomer). Replace this function with your own implementation to easily create your own mapping logic based on moduleId.
      */
    export var convertModuleIdToViewId: (moduleId: string) => string;
    /**
      * As mentioned above, if no view id can be determined, the system falls back to attempting to determine the object's type and then uses that. This function contains the implementation of that fallback behavior. Replace it if you desire something different. Under normal usage however, this function should not be called.
      */
    export var determineFallbackViewId: (obj: any) => string;
    /**
      * When a view area is specified, it along with the requested view id will be passed to this function, allowing you to customize the path of your view. You can specify area as part of the locateView call, but more commonly you would specify it as part of a compose binding. Any compose binding that does not include a model, but only a view, has a default area of 'partial'.
      */
    export var translateViewIdToArea: (viewId: string, area?: string) => string;
    /**
      * The viewOrUrlOrId parameter represents a url/id for the view. The file extension is not necessary (ie. .html). When this function is called, the viewEngine will be used to construct the view. The viewEngine is passed the finalized id and returns a constructed DOM sub-tree, which is returned from this function. If the viewOrUrlOrId is not a string but is actually a DOM node, then the DOM node will be immediately returned. Optionally, you can pass an area string and it along with the url will be passed to the view locator's translateViewIdToArea before constructing the final id to pass to the view engine. If you provide an array of DOM elements for elementsToSearch, before we call the view engine, we will search the existing array for a match and return it if found.
      */
    export var locateView: (viewOrUrlOrId: any, area: string, elementsToSearch: HTMLElement[]) => JQueryPromise<any>;
}

declare module "durandal/viewModel" {
    /**
      * A property which is the home to some basic settings and functions that control how all activators work. These are used to create the instance settings object for each activator. They can be overriden on a per-instance-basis by passing a settings object when creating an activator or by accessing the settings property of the activator. To change them for all activators, change them on the defaults property. The two most common customizations are presented below. See the source for additional information.
      */
    export var defaults: IViewModelDefaults;
    /**
      * This creates a computed observable which enforces a lifecycle on all values the observable is set to. When creating the activator, you can specify an initialActiveItem to activate. You can also specify a settings object. Use of the settings object is for advanced scenarios and will not be detailed much here.
      */
    export var activator: {
        (): IDurandalViewModelActiveItem;
        (initialActiveItem: any, settings?: IViewModelDefaults): IDurandalViewModelActiveItem;
    };
}

declare module "durandal/viewModelBinder" {
    /**
      * Applies bindings to a view using a pre-existing bindingContext. This is used by the composition module when a view is supplied without a model. It allows the parent binding context to be preserved. If the optional obj parameter is supplied, a new binding context will be created that is a child of bindingContext with its model set to obj. This is used by the widget framework to provide the widget binding while allowing templated parts to access their surrounding scope.
      */
    export var bindContext: (bindingContext: KnockoutBindingContext, view: HTMLElement, obj?: any) => void;
    /**
      * Databinds obj, which can be an arbitrary object, to view which is a dom sub-tree. If obj has a function called setView, then, following binding, this function will be called, providing obj with an opportunity to interact directly with the dom fragment that it is bound to.
      */
    export var bind: (obj: any, view: HTMLElement) => void;
}

interface IViewModelDefaults {
    /**
      * When the activator attempts to activate an item as described below, it will only activate the new item, by default, if it is a different instance than the current. Overwrite this function to change that behavior.
      */
    areSameItem(currentItem, newItem, activationData): boolean;
    /**
      * default is true
      */
    closeOnDeactivate: boolean;
    /**
      * Interprets values returned from guard methods like canActivate and canDeactivate by transforming them into bools. The default implementation translates string values "Yes" and "Ok" as true...and all other string values as false. Non string values evaluate according to the truthy/falsey values of JavaScript. Replace this function with your own to expand or set up different values. This transformation is used by the activator internally and allows it to work smoothly in the common scenario where a deactivated item needs to show a message box to prompt the user before closing. Since the message box returns a promise that resolves to the button option the user selected, it can be automatically processed as part of the activator's guard check.
      */
    interpretResponse(value: any): boolean;
    /**
      * called before activating a module
      */
    beforeActivate(newItem: any): any;
    /**
      * called after deactivating a module
      */
    afterDeactivate(): any;
}

interface IDurandalViewModelActiveItem {
    /**
      * knockout observable
      */
    (val?): any;
    /**
      * A property which is the home to some basic settings and functions that control how all activators work. These are used to create the instance settings object for each activator. They can be overriden on a per-instance-basis by passing a settings object when creating an activator or by accessing the settings property of the activator. To change them for all activators, change them on the defaults property. The two most common customizations are presented below. See the source for additional information.
      */
    settings: IViewModelDefaults;
    /**
      * This observable is set internally by the activator during the activation process. It can be used to determine if an activation is currently happening.
      */
    isActivating(val?: boolean): boolean;
    /**
      * Pass a specific item as well as an indication of whether it should be closed, and this function will tell you the answer.
      */
    canDeactivateItem(item, close): JQueryPromise<any>;
    /**
      * Deactivates the specified item (optionally closing it). Deactivation follows the lifecycle and thus only works if the item can be deactivated.
      */
    deactivateItem(item, close): JQueryDeferred<any>;
    /**
      * Determines if a specific item can be activated. You can pass an arbitrary object to this function, which will be passed to the item's canActivate function , if present. This is useful if you are manually controlling activation and you want to provide some context for the operation.
      */
    canActivateItem(newItem, activationData?): JQueryPromise<any>;
    /**
      * Activates a specific item. Activation follows the lifecycle and thus only occurs if possible. activationData functions as stated above.
      */
    activateItem(newItem, activationData?): JQueryPromise<any>;
    /**
      * Checks whether or not the activator itself can be activated...that is whether or not it's current item or initial value can be activated.
      */
    canActivate(): JQueryPromise<any>;
    /**
      * Activates the activator...that is..it activates it's current item or initial value.
      */
    activate(): JQueryPromise<any>;
    /**
      * Checks whether or not the activator itself can be deactivated...that is whether or not it's current item can be deactivated.
      */
    canDeactivate(): JQueryPromise<any>;
    /**
      *  Deactivates the activator...interpreted as deactivating its current item.
      */
    deactivate(): JQueryDeferred<any>;
    /**
      * Adds canActivate, activate, canDeactivate and deactivate functions to the provided model which pass through to the corresponding functions on the activator.
      */
    includeIn(includeIn: any): JQueryPromise<any>;
    /**
      * Sets up a collection representing a pool of objects which the activator will activate. See below for details. Activators without an item boolean always close their values on deactivate. Activators with an items pool only deactivate, but do not close them.
      */
    forItems(items): IDurandalViewModelActiveItem;
}

/**
  * A router plugin, currently based on SammyJS. The router abstracts away the core configuration of Sammy and re-interprets it in terms of durandal's composition and activation mechanism. To use the router, you must require it, configure it and bind it in the UI.
  * Documentation at http://durandaljs.com/documentation/Router/
  */
declare module "durandal/plugins/router" {
    /**
      * Parameters to the map function. or information on route url patterns, see the SammyJS documentation. But 
      * basically, you can have simple routes my/route/, parameterized routes customers/:id or Regex routes. If you 
      * have a parameter in your route, then the activation data passed to your module's activate function will have a 
      * property for every parameter in the route (rather than the splat array, which is only present for automapped 
      * routes).
      */
    interface IRouteInfo {
        url: string;
        moduleId: string;
        name: string;
        /** used to set the document title */
        caption: string;
        /** determines whether or not to include it in the router's visibleRoutes array for easy navigation UI binding */
        visible: boolean;
        settings: Object;
        hash: string;
        /** only present on visible routes to track if they are active in the nav */
        isActive?: KnockoutComputed<boolean>;
    }
    /**
      * Parameters to the map function. e only required parameter is url the rest can be derived. The derivation 
      * happens by stripping parameters from the url and casing where appropriate. You can always explicitly provide 
      * url, name, moduleId, caption, settings, hash and visible. In 99% of situations, you should not need to provide 
      * hash; it's just there to simplify databinding for you. Most of the time you may want to teach the router how 
      * to properly derive the moduleId and name based on a url. If you want to do that, overwrite.
      */
    interface IRouteInfoParameters {
        /** your url pattern. The only required parameter */
        url: any;
        /** if not supplied, router.convertRouteToName derives it */
        moduleId?: string;
        /** if not supplied, router.convertRouteToModuleId derives it */
        name?: string;
        /** used to set the document title */
        caption?: string;
        /** determines whether or not to include it in the router's visibleRoutes array for easy navigation UI binding */
        visible?: boolean;
        settings?: Object;
    }
    /**
      * observable that is called when the router is ready
      */
    export var ready: KnockoutObservable<boolean>;
    /**
      * An observable array containing all route info objects.
      */
    export var allRoutes: KnockoutObservableArray<IRouteInfo>;
    /**
      * An observable array containing route info objects configured with visible:true (or by calling the mapNav function).
      */
    export var visibleRoutes: KnockoutObservableArray<IRouteInfo>;
    /**
      * An observable boolean which is true while navigation is in process; false otherwise.
      */
    export var isNavigating: KnockoutObservable<boolean>;
    /**
      * An observable whose value is the currently active item/module/page.
      */
    export var activeItem: IDurandalViewModelActiveItem;
    /**
      * An observable whose value is the currently active route.
      */
    export var activeRoute: KnockoutObservable<IRouteInfo>;
    /**
      * called after an a new module is composed
      */
    export var afterCompose: () => void;
    /**
      * Returns the activatable instance from the supplied module.
      */
    export var getActivatableInstance: (routeInfo: IRouteInfo, params: any, module: any) => any;
    /**
      * Causes the router to move backwards in page history.
      */
    export var navigateBack: () => void;
    /**
      * Use router default convention.
      */
    export var useConvention: () => void;
    /**
      * Causes the router to navigate to a specific url.
      */
    export var navigateTo: (url: string) => void;
    /**
      * replaces the windows.location w/ the url
      */
    export var replaceLocation: (url: string) => void;
    /**
      * akes a route in and returns a calculated name.
      */
    export var convertRouteToName: (route: string) => string;
    /**
      * Takes a route in and returns a calculated moduleId. Simple transformations of this can be done via the useConvention function above. For more advanced transformations, you can override this function.
      */
    export var convertRouteToModuleId: (url: string) => string;
    /**
      * This can be overwritten to provide your own convention for automatically converting routes to module ids.
      */
    export var autoConvertRouteToModuleId: (url: string) => string;
    /**
      * This should not normally be overwritten. But advanced users can override this to completely transform the developer's routeInfo input into the final version used to configure the router.
      */
    export var prepareRouteInfo: (info: IRouteInfo) => void;
    /**
      * This should not normally be overwritten. But advanced users can override this to completely transform the developer's routeInfo input into the final version used to configure the router.
      */
    export var handleInvalidRoute: (route: IRouteInfo, parameters: any) => void;
    /**
      * Once the router is required, you can call router.mapAuto(). This is the most basic configuration option. When you call this function (with no parameters) it tells the router to directly correlate route parameters to module names in the viewmodels folder.
      */
    export var mapAuto: (path?: string) => void;
    /**
      * Works the same as mapRoute except that routes are automatically added to the visibleRoutes array.
      */
    export var mapNav: (url: string, moduleId?: string, name?: string) => IRouteInfo;
    /**
      * You can pass a single routeInfo to this function, or you can pass the basic configuration parameters. url is your url pattern, moduleId is the module path this pattern will map to, name is used as the document title and visible determines whether or not to include it in the router's visibleRoutes array for easy navigation UI binding.
      */
    export var mapRoute: {
        (route: IRouteInfoParameters): IRouteInfo;
        (url: string, moduleId?: string, name?: string, visible?: boolean): IRouteInfo;
    }
    /**
      * This function takes an array of routeInfo objects or a single routeInfo object and uses it to configure the router. The finalized routeInfo (or array of infos) is returned.
      */
    export var map: {
        (routeOrRouteArray: IRouteInfoParameters): IRouteInfo;
        (routeOrRouteArray: IRouteInfoParameters[]): IRouteInfo[];
    }
    /**
      * After you've configured the router, you need to activate it. This is usually done in your shell. The activate function of the router returns a promise that resolves when the router is ready to start. To use the router, you should add an activate function to your shell and return the result from that. The application startup infrastructure of Durandal will detect your shell's activate function and call it at the appropriate time, waiting for it's promise to resolve. This allows Durandal to properly orchestrate the timing of composition and databinding along with animations and splash screen display.
      */
    export var activate: (defaultRoute: string) => JQueryPromise<any>;
    /**
      * Before any route is activated, the guardRoute funtion is called. You can plug into this function to add custom logic to allow, deny or redirect based on the requested route. To allow, return true. To deny, return false. To redirect, return a string with the hash or url. You may also return a promise for any of these values.
      */
    export var guardRoute: (routeInfo: IRouteInfo, params: any, instance: any) => any;
}

declare module "durandal/widget" {
    /**
      * Use this function to create a widget through code. The element should reference a dom element that the widget will be created on. The settings can be either a string or an object. If it's a string, it should specify the widget kind. If it's an object, it represents settings that will be passed along to the widget. This object should have a kind property used to identify the widget kind to create. Optionally, you can specify a bindingContext of which you want the widget's binding context to be created as a child.
      */
    export function create(element: any, settings: any, bindingContext?: any);
    /**
      * By default, you can create widgets in html by using the widget binding extension. Calling registerKind allows you to easily create a custom binding handler for your widget kind. Without calling registerKind you might declare a widget binding for an expander control with
      */
    export function registerKind(kind: string);
    /**
      * Use this to re-map a widget kind identifier to a new viewId or moduleId representing the 'skin' and 'behavior' respectively.
      */
    export function mapKind(kind: string, viewId?: string, moduleId?: string);
    /**
      * Developers implementing widgets may wish to use this function to acquire the resolved template parts for a widget. Pass a single dom element or an array of elements and get back an object keyed by part name whose values are the dom elements corresponding to each part in that scope.
      */
    export function getParts(elements: any): any;
    /**
      * (overrridable) Replace this to re-interpret the kind id as a module path. By default it does a lookup for any custom maps added through mapKind and then falls back to the path "durandal/widgets/{kind}/controller".
      */
    export function convertKindToModuleId(kind): string;
    /**
      * (overridable) Replace this to re-interpret the kind id as a view id. The default does a lookup for any custom maps added through mapKind and then falls back to the path "durandal/widgets/{kind}/view".
      */
    export function convertKindToViewId(kind): string;
}

interface IEventSubscription
{
    /**
      * This function adding callback to event subscription
      */
    then(thenCallback: any): void;

    /**
      * This function removing current subscription from event handlers
      */
     off(): void;
 }
