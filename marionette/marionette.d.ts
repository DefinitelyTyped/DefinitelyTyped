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

        add(view: View<TModel>, customIndex?: number);
        findByModel(model): View<TModel>;
        findByModelCid(modelCid): View<TModel>;
        findByCustom(index: number): View<TModel>;
        findByIndex(index: number): View<TModel>;
        findByCid(cid): View<TModel>;
        remove(view: View<TModel>);
        call(method);
        apply(method: any, args?: any[]);

        //mixins from Collection (copied from Backbone's Collection declaration)

        all(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        contains(value: any): boolean;
        detect(iterator: (item: any) => boolean, context?: any): any;
        each(iterator: (element: View<TModel>, index: number, list?: any) => void , context?: any);
        every(iterator: (element: View<TModel>, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: View<TModel>, index: number) => boolean, context?: any): View<TModel>[];
        find(iterator: (element: View<TModel>, index: number) => boolean, context?: any): View<TModel>;
        first(): View<TModel>;
        forEach(iterator: (element: View<TModel>, index: number, list?: any) => void , context?: any);
        include(value: any): boolean;
        initial(): View<TModel>;
        initial(n: number): View<TModel>[];
        invoke(methodName: string, arguments?: any[]);
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
            removeHandler(name: string);
            removeAllHandlers(): void;
        }

        class CommandStorage {

            constructor(options?: any);

            getCommands(commandName: string): Commands;
            addCommand(commandName: string, args: any);
            clearCommands(commandName: string): void;
        }

        class Commands extends Handlers {

            constructor(options?: any);

            storageType: CommandStorage;
            execute(name: string, ...args: any[]);
        }

        class RequestResponse extends Handlers {

            constructor(options?: any);

            request(...args: any[]);
        }

        class EventAggregator extends Backbone.Events {

            constructor(options?: any);
        }
    }
}

declare module Marionette {

    function getOption(target, optionName): any;
    function triggerMethod(name, ...args: any[]): any;
    function MonitorDOMRefresh(view: Backbone.View<Backbone.Model>): void;
    function bindEntityEvents(target, entity, bindings);
    function unbindEntityEvents(target, entity, bindings);

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
        initialize(options?: any);

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
         * of the views that are about to be attached – even the nested ones. 
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
         * of the views that are about to be attached – even the nested ones. 
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
        destroy();

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
        each(iterator: (element: Region, index: number, list?: any) => void, context?: any);

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
        forEach(iterator: (element: Region, index: number, list?: any) => void, context?: any);

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
        invoke(methodName: string, arguments?: any[]);

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

    class Renderer {
        static render(template, data): void;
    }

    class View<TModel extends Backbone.Model> extends Backbone.View<TModel> {

        constructor(options?: any);

        modelEvents: any;
        collectionEvents: any;
        ui(): any;

        getTemplate(): any;
        mixinTemplateHelpers(target?: any): any;
        configureTriggers(): any;
        delegateEvents(events?: any): any;
        undelegateEvents();

        destroy();
        bindUIElements();
        unbindUIElements();

        triggerMethod(name, ...args: any[]): any;
    }

    class ItemView<TModel extends Backbone.Model> extends View<TModel> {

        constructor(options?: any);

        ui(): any;

        serializeData(): any;
        render(): ItemView<TModel>;        
    }

    class CollectionView<TModel extends Backbone.Model> extends View<TModel> {
        constructor(options?: any);

        itemView: any;
        children: any;

        //_initialEvents();
        addChildView(item: View<TModel>, collection: View<TModel>, options?: any);
        onShowCalled();

        triggerBeforeRender();
        triggerRendered();
        render(): CollectionView<TModel>;

        getItemView(item: any): ItemView<TModel>;
        addItemView(item: any, ItemView: ItemView<TModel>, index: Number);
        addChildViewEventForwarding(view: View<TModel>);
        renderItemView(view: View<TModel>, index: Number);
        buildItemView(item: any, ItemViewType: any, itemViewOptions: any): any;
        removeItemView(item: any);
        removeChildView(view: View<TModel>);
        isEmpty(): boolean;
        checkEmpty();

        appendHtml(collectionView: View<TModel>, itemView: View<TModel>, index: Number);

        destroy();
        destroyChildren();
    }

    class CompositeView<TModel extends Backbone.Model> extends CollectionView<TModel> {

        constructor(options?: any);

        itemView: any;
        itemViewContainer: string;

        render(): CompositeView<TModel>;
        appendHtml(cv: any, iv: any);
        renderModel(): any;
    }

    class LayoutView<TModel extends Backbone.Model> extends ItemView<TModel> {

        constructor(options?: any);

        addRegion(name: string, definition: any): Region;
        addRegions(regions: any): any;
        render(): LayoutView<TModel>;
        removeRegion(name: string);
    }

    interface AppRouterOptions extends Backbone.RouterOptions {
        appRoutes: any;
        controller: any;
    }

    class AppRouter extends Backbone.Router {

        constructor(options?: AppRouterOptions);
        processAppRoutes(controller: any, appRoutes: any);
        appRoute(route:string, methodName:string):void;
        
    }

    class Application extends Backbone.Events {

        vent: Backbone.Wreqr.EventAggregator;
        commands: Backbone.Wreqr.Commands;
        reqres: Backbone.Wreqr.RequestResponse;
        submodules: any;

        execute(...args: any[]);
        request(...args: any[]);
        addInitializer(initializer);
        start(options?);
        addRegions(regions);
        emptyRegions(): void;
        removeRegion(region: Region);
        getRegion(regionName: string): Region;
        module(moduleNames, moduleDefinition);
    }

    // modules mapped for convenience, but you should probably use TypeScript modules instead
    class Module extends Backbone.Events {

        constructor(moduleName: string, app: Application);

        submodules: any;
        triggerMethod(name, ...args: any[]): any;

        addInitializer(callback): void;
        addFinalizer(callback): void;
        start(options?: any): void;
        stopvoid;
        addDefinition(moduleDefinition, customArgs);
    }
}

declare module 'backbone.marionette' {
    import Backbone = require('backbone');

    export = Marionette;
}
