// Type definitions for Marionette
// Project: https://github.com/marionettejs/
// Definitions by: Zeeshan Hamid <https://github.com/zhamid>, Natan Vivo <https://github.com/nvivo>, Sven Tschui <https://github.com/sventschui>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

// declarations for Backbone.BabySitter and Backbone.Wreqr, different projects but included in MarionetteJS
declare module Backbone {

    // Backbone.BabySitter
    class ChildViewContainer<TModel extends Backbone.Model> {

        constructor(initialViews?: any[]);

        add(view: View<TModel>, customIndex?: number): void;
        findByModel(model: TModel): View<TModel>;
        findByModelCid(modelCid: string): View<TModel>;
        findByCustom(index: number): View<TModel>;
        findByIndex(index: number): View<TModel>;
        findByCid(cid: string): View<TModel>;
        remove(view: View<TModel>): void;
        call(method: any): void;
        apply(method: any, args?: any[]): void;

        //mixins from Collection (copied from Backbone's Collection declaration)

        all(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        contains(value: any): boolean;
        detect(iterator: (item: any) => boolean, context?: any): any;
        each(iterator: (element: View<TModel>, index: number, list?: any) => void, context?: any): any;
        every(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: View<TModel>, index: number) => boolean, context?: any): View<TModel>[];
        find(iterator: (element: View<TModel>, index: number) => boolean, context?: any): View<TModel>;
        first(): View<TModel>;
        forEach(iterator: (element: View<TModel>, index: number, list?: any) => void, context?: any): void;
        include(value: any): boolean;
        initial(): View<TModel>;
        initial(n: number): View<TModel>[];
        invoke(methodName: string, arguments?: any[]): any;
        isEmpty(object: any): boolean;
        last(): View<TModel>;
        last(n: number): View<TModel>[];
        lastIndexOf(element: View<TModel>, fromIndex?: number): number;
        map(iterator: (element: View<TModel>, index: number, context?: any) => any[], context?: any): any[];
        pluck(attribute: string): any[];
        reject(iterator: (element: View<TModel>, index: number) => boolean, context?: any): View<TModel>[];
        rest(): View<TModel>;
        rest(n: number): View<TModel>[];
        select(iterator: any, context?: any): any[];
        some(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        toArray(): any[];
        without(...values: any[]): View<TModel>[];
    }

    // Backbone.Wreqr
    module Wreqr {

        module radio {

            function channel(channelName: string): Channel;

        }

        class Channel {

            constructor(channelName: string);

            vent: Backbone.Wreqr.EventAggregator;
            reqres: Backbone.Wreqr.RequestResponse;
            commands: Backbone.Wreqr.Commands;
            channelName: string;

            reset(): Channel;
            connectEvents(hash: string, context: any): Channel;
            connectCommands(hash: string, context: any): Channel;
            connectRequests(hash: string, context: any): Channel;

        }

        class Handlers extends Backbone.Events {

            constructor(options?: any);

            options: any;

            setHandler(name: string, handler: any, context?: any): void;
            hasHandler(name: string): boolean;
            getHandler(name: string): Function;
            removeHandler(name: string): void;
            removeAllHandlers(): void;
        }

        class CommandStorage {

            constructor(options?: any);

            getCommands(commandName: string): Commands;
            addCommand(commandName: string, args: any): void;
            clearCommands(commandName: string): void;
        }

        class Commands extends Handlers {

            constructor(options?: any);

            storageType: CommandStorage;
            execute(name: string, ...args: any[]): void;
        }

        class RequestResponse extends Handlers {

            constructor(options?: any);

            request(...args: any[]): any;
        }

        class EventAggregator extends Backbone.Events {

            constructor(options?: any);
        }
    }
}

declare module Marionette {

    /**
     * Retrieve an object's attribute either directly from the object, or 
     * from the object's this.options, with this.options taking precedence.
     */
    function getOption(target: any, optionName: string): any;

    /**
     * Trigger an event and a corresponding method on the target object.
     * All arguments that are passed to the triggerMethod call are passed along 
     * to both the event and the method, with the exception of the event name not 
     * being passed to the corresponding method.
     */
    function triggerMethod(name: string, ...args: any[]): any;

    /**
     * Invoke triggerMethod on a specific context.
     * This is useful when it's not clear that the object has triggerMethod defined.
     */
    function triggerMethodOn(ctx: any, name: string, ...args: any[]): any;

    /**
     * Monitor a view's state, and after it has been rendered and shown in the DOM,
     * trigger a "dom:refresh" event every time it is re-rendered.
     */
    function MonitorDOMRefresh(view: Backbone.View<Backbone.Model>): void;

    /**
     * This method is used to bind a backbone "entity" (collection/model) to methods on a target object.
     * @param target An object that must have a listenTo method from the EventBinder object.
     * @param entity The entity (Backbone.Model or Backbone.Collection) to bind the events from.
     * @param bindings a hash of { "event:name": "eventHandler" } configuration. Multiple handlers can be separated by a space. A function can be supplied instead of a string handler name.
     */
    function bindEntityEvents(target: any, entity: any, bindings: any): void;

    /**
     * This method can be used to unbind callbacks from entities' (collection/model) events. It's the opposite of bindEntityEvents
     * @param target An object that must have a listenTo method from the EventBinder object.
     * @param entity The entity (Backbone.Model or Backbone.Collection) to bind the events from.
     * @param bindings a hash of { "event:name": "eventHandler" } configuration. Multiple handlers can be separated by a space. A function can be supplied instead of a string handler name.
     */
    function unbindEntityEvents(target: any, entity: any, bindings: any): void;

    class Callbacks {
        add(callback: Function, contextOverride: any): void;
        run(options: any, context: any): void;
        reset(): void;
    }

    /**
     * A base class which other classes can extend from. Object incorporates many 
     * backbone conventions and utilities like initialize and Backbone.Events.
     */
    class Object extends Backbone.Events {
        /**
         * Initialize is called immediately after the Object has been instantiated, 
         * and is invoked with the same arguments that the constructor received.
         */
        initialize(options?: any): void;

        /**
         * Retrieve an object's attribute either directly from the object, or from 
         * the object's this.options, with this.options taking precedence.
         * @param optionName the name of the option to retrieve.
         */
        getOption(optionName: string): any;

        /**
         * Objects have a destroy method that unbind the events that are directly 
         * attached to the instance. Invoking the destroy method will trigger a 
         * "before:destroy" event and corresponding onBeforeDestroy method call. 
         * These calls will be passed any arguments destroy was invoked with.
         * @param args any arguments to pass to the "before:destory" event and call to
         * onBeforeDestroy.
         */
        destroy(...args: any[]): void;
    }

    /**
     * A Controller is an object used in the Marionette Router. Controllers are 
     * where you store your Router's callbacks.
     */
    class Controller extends Backbone.Events {
        /**
         * @param options Options that should be stored in this options. Can be retreived via 
         * getOption.
         */
        constructor(options?: any);

        /**
         * Handles unbinding all of the events that are directly attached to the 
         * controller instance, as well as those that are bound using the 
         * EventBinder from the controller.
         * 
         * Invoking the destroy method will trigger the "before:destroy" and 
         * "destroy" events and the corresponding onBeforeDestory and onDestroy 
         * method calls. These calls will be passed any arguments destroy was 
         * invoked with.
         */
        destroy(...args: any[]): void;

        /**
         * Retrieve an object's attribute either directly from the object, or from 
         * the object's this.options, with this.options taking precedence.
         * @param optionName the name of the option to retrieve.
         */
        getOption(optionName: string): any;

        triggerMethod(name: string, ...args: any[]): any;
    }

    interface RegionConstructionOptions {
        /**
         * Specifies the element for the region to manage. This may be 
         * a selector string, a raw DOM node reference or a jQuery wrapped
         * DOM node.
         */
        el?: any;
    }

    interface RegionShowOptions {
        /**
         * If you replace the current view with a new view by calling show, by 
         * default it will automatically destroy the previous view. You can 
         * prevent this behavior by setting this option to true.
         */
        preventDestroy?: boolean;

        /**
         * If you re-call show with the same view, by default nothing will happen 
         * because the view is already in the region. You can force the view to be 
         * re-shown by setting this option to true.
         */
        forceShow?: boolean;

        /**
         * Regions that are attached to the document when you execute show are 
         * special in that the views that they show will also become attached 
         * to the document. These regions fire a pair of triggerMethods on all 
         * of the views that are about to be attached � even the nested ones. 
         * This can cause a performance issue if you're rendering hundreds or 
         * thousands of views at once.
         * If you think these events might be causing some lag in your app, you 
         * can selectively turn them off with the triggerBeforeAttach 
         * and triggerAttach properties.
         */
        triggerBeforeAttach?: boolean;

        /**
         * Regions that are attached to the document when you execute show are 
         * special in that the views that they show will also become attached 
         * to the document. These regions fire a pair of triggerMethods on all 
         * of the views that are about to be attached � even the nested ones. 
         * This can cause a performance issue if you're rendering hundreds or 
         * thousands of views at once.
         * If you think these events might be causing some lag in your app, you 
         * can selectively turn them off with the triggerBeforeAttach 
         * and triggerAttach properties.
         */
        triggerAttach?: boolean;
    }

    /**
     * Regions provide consistent methods to manage, show and destroy views in 
     * your applications and layouts. They use a jQuery selector to show your 
     * views in the correct place.     
     */
    class Region extends Marionette.Object {

        /**
         * Build an instance of a region by passing in a configuration object and 
         * a default region class to use if none is specified in the config.
         * The config object should either be a string as a jQuery DOM selector,
         * a Region class directly, or an object literal that specifies a selector,
         * a custom regionClass, and any options to be supplied to the region
         */
        static buildRegion(regionConfig: any, defaultRegionType: any): Region;

        /**
         * You can specify an el for the region to manage at the time the region
         * is instantiated.
         */
        constructor(options?: RegionConstructionOptions);

        /**
         * Contains the element that this region should manage.
         */
        el: any;

        /** 
         * Renders and displays the specified view in this region.
         * @param view the view to display.
         */
        show<TModel extends Backbone.Model>(view: Backbone.View<TModel>, options?: RegionShowOptions): void;

        /**
         * Attaches an existing view to a region, without rendering or showing the view, 
         * and without replacing the HTML content of the region. 
         */
        attachView<TModel extends Backbone.Model>(view: Backbone.View<TModel>, options?: RegionShowOptions): any;

        /** 
         * Override this method to change how the new view is
         * appended to the `$el` that the region is managing
         */
        attachHtml<TModel extends Backbone.Model>(view: Backbone.View<TModel>): void;

        /**
         * A region can be reset at any time. This destroys any existing view 
         * being displayed, and deletes the cached el. The next time the region 
         * shows a view, the region's el is queried from the DOM.
         */
        reset(): any;

        /**
         * If you wish to check whether a region has a view, you can use the hasView function. This will return a boolean value depending whether or not the region is showing a view.
         */
        hasView(): boolean;

        /**
         * Empties the current view from the region.
         */
        empty(): any;

    }

    interface RegionDefaults {
        /**
         * A selector string indicating which element to assign the region two.  
         */
        selector?: string;

        /**
         * A selector string, a jQuery object, or an HTML node indicating which element
         * the region should use.
         */
        el?: any;

        /**
         * A custom region class.
         */
        regionClass?: any;

        /**
         * Ordinarily regions enforce the presence of a backing DOM element. In 
         * some instances it may be desirable to allow regions to be instantiated 
         * and used without an element, such as when regions defined by a parent 
         * LayoutView class are used by only some of its subclasses. In these 
         * instances, the region can be defined with this option set to true, 
         * suppressing the missing element error and causing show calls to the 
         * region to be treated as no-ops.
         */
        allowMissingEl?: boolean;
    }

    /**
     * Region managers provide a consistent way to manage a number of Marionette.Region 
     * objects within an application. The RegionManager is intended to be used by 
     * other objects, to facilitate the addition, storage, retrieval, and removal of 
     * regions from that object.
     */
    class RegionManager extends Controller {

        /**
         * Constructor.
         * @param options May contain an optional `regions` option. These regions 
         * are passed directly into addRegions for this instance.
         */
        constructor(options?: any);

        /**
         * Adds one or more regions to this RegionManager instance. 
         * @param regionDefinitions a function returning an object literal with the region definitions. The function will 
         * be called with the RegionManager instance context and all the arguments passed to addRegions.
         * @param defaults Specifies default options that will be applied to every region added.
         * @returns an object literal with all the created regions.
         */
        addRegions(regionDefinitions: Function, defaults?: RegionDefaults): any;

        /**
         * Adds one or more regions to this RegionManager instance. 
         * @param regionDefinitions an object literal containing region names as keys and region
         * definitions as values.
         * @param defaults Specifies default options that will be applied to every region added.
         * @returns an object literal with all the created regions.
         */
        addRegions(regionDefinitions: { [regionName: string]: any }, defaults?: RegionDefaults): any;

        /** 
         * Adds a region to this RegionManager.
         * @param name the region name.
         * @param definition the region definition. This may be a selector, object literal
         * with various region creation options or an instance of a region object.
         */
        addRegion(name: string, definition: any): Region;

        /** 
         * Gets the region with the specified name from this RegionManager.
         */
        get(name: string): Region;

        /**
         * Removes the region with the specified name from this RegionManager. 
         */
        removeRegion(name: string): void;

        /**
         * Removes all regions from the RegionManager.
         */
        removeRegions(): void;

        /**
         * Empties all regions from the RegionManager instance.
         */
        emptyRegions(): void;

        /**
         * Destroys the RegionManager instance entierly which both destroys and
         * removes all regions from the RegionManager instance.
         */
        destroy(): void;

        //mixins from Collection (copied from Backbone's Collection declaration)

        /**
         * Returns true if all of the values in the list pass the predicate truth test. 
         * @alias every
         */
        all(iterator: (element: Region, index: number) => boolean, context?: any): boolean;

        /**
         * Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 
         */
        any(iterator: (element: Region, index: number) => boolean, context?: any): boolean;

        /**
         * Returns true if the value is present in the list.
         * @alias include 
         */
        contains(value: any): boolean;

        /**
         * Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. 
         * @alias find
         */
        detect(iterator: (item: any) => boolean, context?: any): any;

        /**
         * Iterates over the regions in this instance, yielding each in turn to an 
         * iterator function. The iterator is bound to the context object, if one 
         * is passed.
         * @alias forEach 
         */
        each(iterator: (element: Region, index: number, list?: any) => void, context?: any): void;

        /**
         * Returns true if all of the values in the list pass the predicate truth test. 
         * @alias all
         */
        every(iterator: (element: Region, index: number) => boolean, context?: any): boolean;

        /**
         * Looks through each Region in the collection, returning an array of all 
         * the values that pass a truth test (predicate). 
         * @alias select
         */
        filter(iterator: (element: Region, index: number) => boolean, context?: any): Region[];

        /**
         * Looks through each Region in this instance, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. 
         * @alias detect
         */
        find(iterator: (element: Region, index: number) => boolean, context?: any): Region;

        /**
         * Returns the first Region of this RegionManager.
         */
        first(): Region;

        /**
         * Returns the first n Regions of this RegionManager.
         */
        first(n: number): Region[];

        /**
         * Iterates over the regions in this instance, yielding each in turn to an 
         * iterator function. The iterator is bound to the context object, if one 
         * is passed. 
         * @alias each
         */
        forEach(iterator: (element: Region, index: number, list?: any) => void, context?: any): void;

        /**
         * Returns true if the value is present in the list.
         * @alias contains 
         */
        include(value: any): boolean;

        /**
         * Returns everything but the last n Regions of this instance.
         * @param n if specified determines the number of regions to exclude,
         * otherwise only the last element is excluded.
         */
        initial(n: number): Region[];

        /**
         * Calls the method named by methodName on each value in the collection. Any extra 
         * arguments passed to invoke will be forwarded on to the method invocation. 
         */
        invoke(methodName: string, arguments?: any[]): any;

        /**
         * Returns true if the RegionManager contains no regions.
         */
        isEmpty(object: any): boolean;

        /**
         * Returns the last element of a collection. 
         */
        last(): Region;

        /**
         * Returns the last n elements of the collection.
         */
        last(n: number): Region[];

        /**
         * Returns the index of the last occurrence of element in the collection, or -1 if 
         * element is not present. 
         * @param fromIndex if specified starts the search at the given index.
         */
        lastIndexOf(element: Region, fromIndex?: number): number;

        /**
         * Produces a new array of values by mapping each value in the collection through a 
         * transformation function (iterator).
         * @alias collect
         */
        map(iterator: (element: Region, index: number, context?: any) => any[], context?: any): any[];

        /** 
         * Pluck an attribute from each model in the collection. Equivalent to 
         * calling map and returning a single attribute from the iterator. 
         */
        pluck(attribute: string): any[];

        /**
         * Returns the values in the collection without the elements that the truth test 
         * (predicate) passes. The opposite of filter. 
         */
        reject(iterator: (element: Region, index: number) => boolean, context?: any): Region[];

        /**
         * Returns the rest of the elements of the collection. 
         * Pass an index to return the values of the array from that index onward. If not
         * specified the first item in the collection is dropped.
         * @alias tail, drop
         */
        rest(n: number): Region[];

        /**
         * Looks through each value in the collection, returning an array of all 
         * the values that pass a truth test (predicate). 
         * @alias filter
         */
        select(iterator: any, context?: any): Region[];

        /**
         * Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 
         * @alias any
         */
        some(iterator: (element: Region, index: number) => boolean, context?: any): boolean;

        /**
         * Creates an array containing the regions in this instance.
         */
        toArray(): Region[];

        /**
         * Returns an array of all the regions in the RegionManager except the ones specified. 
         */
        without(...values: any[]): Region[];
    }

    /**
     * The TemplateCache provides a cache for retrieving templates from script blocks 
     * in your HTML. This will improve the speed of subsequent calls to get a template.
     */
    class TemplateCache {
        /**
         * To use the TemplateCache, call the get method on TemplateCache directly. Internally, instances of the TemplateCache class will be created and stored but you do not have to manually create these instances yourself. get will return a compiled template function.
         */
        static get(templateId: string): any;

        /**
         * You can clear one or more, or all items from the cache using the clear 
         * method. Clearing a template from the cache will force it to re-load 
         * from the DOM the next time it is retrieved.
         * @param  the templateId used for loading / caching of the templates to clear. If none specified, all templates will be cleared from the cache.
         */
        static clear(...templateId: string[]): void;

        /**
         * The default template retrieval is to select the template contents from the 
         * DOM using jQuery. If you wish to change the way this works, you can 
         * override this method on the TemplateCache object.
         */
        loadTemplate(templateId: string): any;

        /**
         * he default template compilation passes the results from loadTemplate to 
         * the compileTemplate function, which returns an underscore.js compiled 
         * template function. When overriding compileTemplate remember that it 
         * must return a function which takes an object of parameters and values 
         * and returns a formatted HTML string.
         */
        compileTemplate(rawTemplate: any): any;
    }

    /**
     * The Renderer object was extracted from the ItemView rendering process, in 
     * order to create a consistent and re-usable method of rendering a template 
     * with or without data.
     */
    class Renderer {
        /**
         *  This method returns a string containing the result of applying the 
         * template using the data object as the context.
         * @param template The template to render. If this is a function this is 
         * treated as a pre-compiled template and does not try to compile it again. This 
         * allows any view that supports a template parameter to specify a pre-compiled 
         * template function as the template setting. The template function does not 
         * have to be any specific template engine. It only needs to be a function 
         * that returns valid HTML as a string from the data parameter passed to 
         * the function.
         */
        static render(template: any, data: any): string;
    }

    /**
     * This base view provides some common and core functionality for other views 
     * to take advantage of.
     * Note: The Marionette.View class is not intended to be used directly. It 
     * exists as a base view for other view classes to be extended from, and to 
     * provide a common location for behaviors that are shared across all views.
     */
    class View<TModel extends Backbone.Model> extends Backbone.View<TModel> {

        constructor(options?: Backbone.ViewOptions<TModel>);

        /** 
         * Defines behaviors attached to this view. 
         */
        behaviors: any;

        /**
         * Defines `triggers` to forward DOM events to view
         * events. `triggers: {"click .foo": "do:foo"}`
         */
        triggers:{[key:string]:any};

        /**
         * A configuration hash for models. The left side is the event on 
         * the model, and the right side is the name of the 
         * method on the view or a function to handle the event. This property
         * can also be a function that returns the hash described above.
         */
        modelEvents: any;

        /**
         * A configuration hash for collections. The left side is the event on 
         * the collection, and the right side is the name of the 
         * method on the view or a function to handle the event. This property
         * can also be a function that returns the hash described above.
         */
        collectionEvents: any;

        /**
         * In several cases you need to access ui elements inside the view to 
         * retrieve their data or manipulate them. For example you have a certain 
         * div element you need to show/hide based on some state, or other ui 
         * element that you wish to set a css class to it. Instead of having 
         * jQuery selectors hanging around in the view's code you can define a 
         * ui hash that contains a mapping between the ui element's name and its 
         * jQuery selector. Afterwards you can simply access it via 
         * this.ui.elementName.
         */
        ui: any;

        /**
         * There may be some cases where you need to change the template that is 
         * used for a view, based on some simple logic such as the value of a 
         * specific attribute in the view's model. To do this, you can provide a 
         * getTemplate function on your views and use this to return the template 
         * that you need.
         */
        getTemplate(): any;


        /**
         * Retrieve an object's attribute either directly from the object, or
         * from the object's this.options, with this.options taking precedence.
         */
        getOption<T>(optionName:string): T;

        mixinTemplateHelpers(target?: any): any;
        configureTriggers(): any;

        /**
         * View implements a destroy method, which is called by the region managers automatically. As part of the implementation.
         */
        destroy(...args: any[]): void;

        /**
         * In several cases you need to access ui elements inside the view to 
         * retrieve their data or manipulate them. For example you have a certain 
         * div element you need to show/hide based on some state, or other ui 
         * element that you wish to set a css class to it. Instead of having jQuery 
         * selectors hanging around in the view's code you can define a ui hash 
         * that contains a mapping between the ui element's name and its jQuery 
         * selector. Afterwards you can simply access it via this.ui.elementName. 
         * This functionality is provided via the bindUIElements method. 
         * Since View doesn't implement the render method, then if you directly 
         * extend from View you will need to invoke this method from your render 
         * method. In ItemView and CompositeView this is already taken care of.
         */
        bindUIElements(): any;

        unbindUIElements(): any;

        triggerMethod(name: string, ...args: any[]): any;

        /**
         * Called on the view instance when the view has been rendered and 
         * displayed. This event can be used to react to when a view has been 
         * shown via a region. A common use case for the onShow method is to 
         * use it to add children views.
         */
        onShow(): void;

        /**
         * Triggered just after the view has been destroyed.
         */
        onDestroy(): void;

        /**
         * When destroying a view, an onBeforeDestroy method will be called, if 
         * it has been provided, just before the view destroys. It will be passed 
         * any arguments that destroy was invoked with.
         */
        onBeforeDestroy(...args: any[]): void;

        /**
         * Called anytime that showing the view in a Region causes it to be 
         * attached to the document. 
         */
        onAttach(): void;

        /**
         * Triggered right before the view is attached to the document.
         */
        onBeforeAttach(): void;

        /**
         * Triggered after the view has been rendered, has been shown in the DOM via a Marionette.Region, and has been re-rendered. 
         * This event / callback is useful for DOM-dependent UI plugins such as jQueryUI or KendoUI.
         */
        onDomRefresh(): void;
    }

    /**
     * An ItemView is a view that represents a single item. That item may be 
     * a Backbone.Model or may be a Backbone.Collection. Whichever it is though, 
     * it will be treated as a single item.
     */
    class ItemView<TModel extends Backbone.Model> extends View<TModel> {

        constructor(options?: Backbone.ViewOptions<TModel>);

        /**
         * Item views will serialize a model or collection, by default, by calling 
         * .toJSON on either the model or collection. If both a model and 
         * collection are attached to an item view, the model will be used as the 
         * data source. The results of the data serialization will be passed to 
         * the template that is rendered.
         * 
         * If you need custom serialization for your data, you can provide a serializeData 
         * method on your view. It must return a valid JSON object, as if you had 
         * called .toJSON on a model or collection.
         */
        serializeData(): any;

        /** 
         * Renders the view. It is unwise to override the render method of any 
         * Marionette view. Instead, you should use the onBeforeRender and 
         * onRender callbacks to layer in additional functionality to the 
         * rendering of your view.
         */
        render(): ItemView<TModel>;

        /**
         * Triggered before an ItemView is rendered.
         */
        onBeforeRender(): void;

        /**
         * Triggered after the view has been rendered. You can implement this in 
         * your view to provide custom code for dealing with the view's el after 
         * it has been rendered.
         */
        onRender(): void;
    }


    interface CollectionViewOptions<TModel extends Backbone.Model> extends Backbone.ViewOptions<TModel> {

        /**
         * By default the CollectionView will maintain a sorted collection's order 
         * in the DOM. This behavior can be disabled by specifying {sort: false} 
         * on initialize.
         */
        sort?: boolean;
    }

    /**
     * The CollectionView will loop through all of the models in the specified 
     * collection, render each of them using a specified childView, then append 
     * the results of the child view's el to the collection view's el. By 
     * default the CollectionView will maintain a sorted collection's order in the 
     * DOM. This behavior can be disabled by specifying {sort: false} on 
     * initialize.
     */
    class CollectionView<TModel extends Backbone.Model> extends View<TModel> {
        constructor(options?: CollectionViewOptions<TModel>);

        /**
         * Specify a childView in your collection view definition. This must be a 
         * Backbone view object definition, not an instance. It can be any 
         * Backbone.View or be derived from Marionette.ItemView
         */
        childView: any;

        /**
         * There may be scenarios where you need to pass data from your parent 
         * collection view in to each of the childView instances. To do this, 
         * provide a childViewOptions definition on your collection view as an 
         * object literal. This will be passed to the constructor of your childView 
         * as part of the options.
         * 
         * You can also specify the childViewOptions as a function, if you need to 
         * calculate the values to return at runtime. The model will be passed 
         * into the function should you need access to it when calculating 
         * childViewOptions. The function must return an object, and the attributes of 
         * the object will be copied to the childView instance's options.
         */
        childViewOptions: any;

        /**
         * You can customize the event prefix for events that are forwarded through 
         * the collection view. To do this, set the childViewEventPrefix on the 
         * collection view.
         */
        childViewEventPrefix: string;

        /**
         * You can specify a childEvents hash or method which allows you to 
         * capture all bubbling childEvents without having to manually set bindings. 
         * The keys of the hash can either be a function or a string that is the 
         * name of a method on the collection view.
         */
        childEvents: any;

        /**
         * When a collection has no children, and you need to render a view other than 
         * the list of childViews, you can specify an emptyView attribute on your collection 
         * view.
         */
        emptyView: any;

        /**
         * Similar to childView and childViewOptions, there is an emptyViewOptions 
         * property that will be passed to the emptyView constructor. It can be 
         * provided as an object literal or as a function. If emptyViewOptions 
         * aren't provided the CollectionView will default to passing the 
         * childViewOptions to the emptyView.
         */
        emptyViewOptions: any;

        /**
         * The CollectionView uses Backbone.BabySitter to store and manage its 
         * child views. This allows you to easily access the views within the 
         * collection view, iterate them, find them by a given indexer such as the 
         * view's model or collection, and more.
         */
        children: Backbone.ChildViewContainer<TModel>;

        /**
         * The render method of the collection view is responsible for rendering the 
         * entire collection. It loops through each of the children in the collection 
         * and renders them individually as an childView.
         */
        render(): CollectionView<TModel>;

        /**
         * The addChild method is responsible for rendering the childViews and 
         * adding them to the HTML for the collectionView instance. It is also 
         * responsible for triggering the events per ChildView. In most cases you 
         * should not override this method.
         */
        addChild(item: any, ChildView: Backbone.View<TModel>, index: Number): void;

        renderChildView(view: Backbone.View<TModel>, index: Number): void;

        /**
         * When a custom view instance needs to be created for the childView that 
         * represents a child, override the buildChildView method. This method 
         * takes three parameters and returns a view instance to be used as the 
         * child view.
         */
        buildChildView(child: any, ItemViewType: any, itemViewOptions: any): View<TModel>;

        /** 
         * Remove the child view and destroy it. This function also updates the indices of
         * later views in the collection in order to keep the children in sync with the collection.
         */
        removeChildView(view: any): void;

        /**
         * Determines if the view is empty. If you want to control when the empty 
         * view is rendered, you can override isEmpty.
         */
        isEmpty(): boolean;

        /**
         * If empty, show the empty view
         */
        checkEmpty(): void;

        destroyChildren(): void;

        /**
         * By default the CollectionView will maintain the order of its collection 
         * in the DOM. However on occasions the view may need to re-render to make 
         * this possible, for example if you were to change the comparator on the 
         * collection. By default CollectionView will call render when this happens, 
         * but there are cases where this may not be suitable. For instance when 
         * sorting the children in a CompositeView, you want to only render the 
         * internal collection.
         */
        resortView(): void;

        /**
         * By default the collection view will append the HTML of each ChildView 
         * into the element buffer, and then call jQuery's .append once at the end 
         * to move the HTML into the collection view's el.
         * You can override this by specifying an attachHtml method in your view 
         * definition. 
         * @param collectionView the instance of the collection view that will receive the HTML.
         * @param childView the current child view instance.
         * @param index he index of the model that this childView instance represents, 
         * in the collection that the model came from. This is useful for sorting 
         * a collection and displaying the sorted list in the correct order on the 
         * screen.
         */
        attachHtml(collectionView: CollectionView<TModel>, childView: Backbone.View<TModel>, index: number): void;

        /**
         * The value returned by this method is the ChildView class that will be 
         * instantiated when a Model needs to be initially rendered. This method 
         * also gives you the ability to customize per Model ChildViews.
         */
        getChildView(item: TModel): any;

        /**
         * If you need the emptyView's class chosen dynamically, specify 
         * getEmptyView.
         */
        getEmptyView(): any;

        /**
         * Called just prior to rendering the collection view.
         */
        onBeforeRender(): void;

        /**
         * Triggered after the view has been rendered. You can implement this in 
         * your view to provide custom code for dealing with the view's el after 
         * it has been rendered.
         */
        onRender(): void;

        /**
         * This callback function allows you to know when a child / child view 
         * instance is about to be added to the collection view. It provides 
         * access to the view instance for the child that was added.
         */
        onBeforeAddChild(view: any): void;

        /**
         * This callback function allows you to know when a child / child view 
         * instance has been added to the collection view. It provides access to 
         * the view instance for the child that was added.
         */
        onAddChild(childView: any): void;

        /**
         * This callback function allows you to know when a childView instance is 
         * about to be removed from the collectionView. It provides access to the 
         * view instance for the child that was removed.
         */
        onBeforeRemoveChild(childView: any): void;

        /**
         * This callback function allows you to know when a child / childView 
         * instance has been deleted or removed from the collection.
         */
        onRemoveChild(childView: any): void;
    }

    /**
     * A CompositeView extends from CollectionView to be used as a composite view 
     * for scenarios where it should represent both a branch and leaf in a tree 
     * structure, or for scenarios where a collection needs to be rendered within 
     * a wrapper template.
     */
    class CompositeView<TModel extends Backbone.Model> extends CollectionView<TModel> {

        constructor(options?: CollectionViewOptions<TModel>);

        /**
         * Each childView will be rendered using the childView's template. The 
         * CompositeView's template is rendered and the childView's templates are 
         * added to this.
         */
        childView: any;

        /**
         * By default the composite view uses the same attachHtml method that the 
         * collection view provides. This means the view will call jQuery's 
         * .append to move the HTML contents from the child view instance in to 
         * the collection view's el.
         * This is typically not very useful as a composite view will usually render 
         * a container DOM element in which the child views should be placed.
         * This can be either a string or a function returning a string.
         */
        childViewContainer: any;

        /**
        * Renders the view.
        */
        render(): CompositeView<TModel>;

        /**
         * Invoked before the model has been rendered
         */
        onBeforeRenderTemplate(): void;

        /**
         * Invoked after the model has been rendered.
         */
        onRenderTemplate(): void;

        /**
         * Invoked before the collection of models is rendered
         */
        onBeforeRenderCollection(): void;

        /**
         * Invoked after the collection of models has been rendered
         */
        onRenderCollection(): void;
    }

    /**
     * A LayoutView is a hybrid of an ItemView and a collection of Region objects. 
     * They are ideal for rendering application layouts with multiple sub-regions 
     * managed by specified region managers.
     * A layoutView can also act as a composite-view to aggregate multiple views 
     * and sub-application areas of the screen allowing applications to attach 
     * multiple region managers to dynamically rendered HTML.
     * You can create complex views by nesting layoutView managers within Regions.
     */
    class LayoutView<TModel extends Backbone.Model> extends ItemView<TModel> {
        /**
         * f you have the need to replace the Region with a region class of your 
         * own implementation, you can specify an alternate class to use with this 
         * property.
         */
        regionClass: any;

        /**
         * Constructor.
         * A hash that can contain a regions hash that allows you to specify regions per 
         * LayoutView instance.
         */
        constructor(options?: any);

        /** Adds a region to the layout view. */
        addRegion(name: string, definition: any): Region;

        /**
         * Add multiple regions as a {name: definition, name2: def2} object literal.
         */
        addRegions(regions: any): any;

        /**
         * Renders the view.
         */
        render(): LayoutView<TModel>;

        /** 
         * Removes the region with the specified name.
         * @param name the name of the region to remove.
         */
        removeRegion(name: string): any;

        /** Enable easy overriding of the default `RegionManager`
          * for customized region interactions and business specific
          * view logic for better control over single regions.
          */
        getRegionManager(): any;
    }

    interface AppRouterOptions extends Backbone.RouterOptions {
        /**
         * The appRoutes.
         */
        appRoutes?: any;

        /**
         * The controller to associate with this router.
         */
        controller?: any;
    }

    /**
     * Reduce the boilerplate code of handling route events and then calling a 
     * single method on another object. Have your routers configured to call 
     * the method on your object, directly.
     */
    class AppRouter extends Backbone.Router {

        /**
         * Configure an AppRouter with appRoutes. The route definition 
         * is passed on to Backbone's standard routing handlers. This means 
         * that you define routes like you normally would. However, instead of 
         * providing a callback method that exists on the router, you provide a 
         * callback method that exists on the controller, which you specify for 
         * the router instance (see below.)
         */
        constructor(options?: AppRouterOptions);

        /**
         * You can specify a controller with the multiple routes at runtime with 
         * this method. However, In this case the current controller of AppRouter 
         * will not change.
         */
        processAppRoutes(controller: any, appRoutes: any): void;

        /**
         * Adds an app route at runtime to this instance. It works the same as the 
         * built-in router.route() call from Backbone's Router, but has all the 
         * same semantics and behavior of the appRoutes configuration.
         */
        appRoute(route: string, methodName: string): void;
    }

    /**
     * The Backbone.Marionette.Application object is the hub of your composite 
     * application. It organizes, initializes and coordinates the various pieces 
     * of your app. It also provides a starting point for you to call into from 
     * your HTML script block, or directly from your JavaScript files if you 
     * prefer to go that route. The Application is meant to be instantiated 
     * directly, although you can extend it to add your own functionality.
     */
    class Application extends Backbone.Events {

        /**
         * The Event Aggregator is available through this property. It is 
         * convenient for passively sharing information between pieces of your 
         * application as events occur.
         * Note! To access this application channel from other objects within your 
         * app you are encouraged to get a handle of the systems through the 
         * Wreqr API instead of the Application instance itself.
         */
        vent: Backbone.Wreqr.EventAggregator;

        /**
         * Commands are used to make any component tell another component to 
         * perform an action without a direct reference to it.
         */
        commands: Backbone.Wreqr.Commands;

        /**
         * Request Response is a means for any component to request information 
         * from another component without being tightly coupled.
         */
        reqres: Backbone.Wreqr.RequestResponse;

        submodules: any;

        /** Command execution, facilitated by Backbone.Wreqr.Commands */
        execute(...args: any[]): void;

        /** Request/response, facilitated by Backbone.Wreqr.RequestResponse */
        request(...args: any[]): any;

        /** Deprecated! Initializers, you should use events to manage start-up logic. */
        addInitializer(initializer: any): void;

        /**
         * Once you have your application configured, you can kick everything off 
         * by calling this method.
         * @param options This parameter will be passed to each of your initializer functions, as well as the initialize events. This allows you to provide extra configuration for various parts of your app throughout the initialization sequence.
         */
        start(options?: any): void;

        /** Deprecated! nstead of using the Application as the root of your view tree, you should use a Layout View.*/
        addRegions(regions: any): any;

        /** Deprecated! nstead of using the Application as the root of your view tree, you should use a Layout View.*/
        emptyRegions(): void;

        /** Deprecated! nstead of using the Application as the root of your view tree, you should use a Layout View.*/
        removeRegion(region: Region): void;

        /** Deprecated! nstead of using the Application as the root of your view tree, you should use a Layout View.*/
        getRegion(regionName: string): Region;

        module(moduleNames: any, moduleDefinition: any): Module;

        /**
         * Called just before the Application starts and before the initializers are executed.
         */
        onBeforeStart(options?: any): void;

        /**
         * Called after the Application has started and after the initializers have been executed.
         */
        onStart(options?: any): void;
    }

    // modules mapped for convenience, but you should probably use TypeScript modules instead    
    class Module extends Backbone.Events {

        constructor(moduleName: string, app: Application);

        submodules: any;
        triggerMethod(name: string, ...args: any[]): any;

        addInitializer(callback: any): void;
        addFinalizer(callback: any): void;
        start(options?: any): void;        
        addDefinition(moduleDefinition: any, customArgs: any): any;
    }

    /**
     * A Behavior is an isolated set of DOM / user interactions that can be mixed 
     * into any View or another Behavior. Behaviors allow you to blackbox View 
     * specific interactions into portable logical chunks, keeping your views 
     * simple and your code DRY.
     */
    class Behavior extends Marionette.Object {
        constructor(options?: any, view?: any);

        options: any;

        /**
         * Any triggers you define on the Behavior will be triggered in response to the appropriate event on the view.
         */
        triggers: any;

        /**
         * modelEvents will respond to the view's model events.
         */
        modelEvents: any;

        /**
         * collectionEvents will respond to the view's collection events.
         */
        collectionEvents: any;

        /**
         * The behaviors key allows a behavior to group multiple behaviors 
         * together.
         */
        behaviors: any;

        /**
         * defaults can be a hash or function to define the default options for 
         * your behavior. The default options will be overridden depending on 
         * what you set as the options per behavior (this works just like a 
         * backbone.model).
         */
        defaults: any;

        /**
         * el is a direct proxy of the view's el
         */
        el: any;

        /**
         * $el is a direct proxy of the view's el cached as a jQuery selector.
         */
        $el: JQuery;

        /** A reference to the view instance that the behavior is on. */
        view: any;

        /**
         * $ is a direct proxy of the views $ lookup method.
         */
        $(selector: any): JQuery;
    }

    /**
     * Marionette.Behaviors' is a utility class that takes care of glueing your 
     * behavior instances to their given View. The most important part of this 
     * class is that you MUST override the class level behaviorsLookup method or 
     * set the option behaviorClass for things to work properly.
     */
    class Behaviors {
        /**
         * This method defines where your behavior classes are stored. Override this to provide another lookup.
         */
        static behaviorsLookup(): any;

        /**
         * This method has a default implementation that is simple to override. It 
         * is responsible for the lookup of single behavior from within the 
         * Behaviors.behaviorsLookup or elsewhere. Note that it should return the type of the 
         * class to instantiate, not an instance of that class.
         */
        static getBehaviorClass(options: any, key: string): any;
    }
}

declare module 'backbone.marionette' {
    import Backbone = require('backbone');

    export = Marionette;
}
