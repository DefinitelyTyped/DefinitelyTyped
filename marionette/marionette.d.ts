// Type definitions for Marionette
// Project: https://github.com/marionettejs/
// Definitions by: Zeeshan Hamid <https://github.com/zhamid>, Natan Vivo <https://github.com/nvivo>, Sven Tschui <https://github.com/sventschui>, Germain Bergeron <https://github.com/germainbergeron>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

// declarations for Backbone.BabySitter and Backbone.Wreqr, different projects but included in MarionetteJS
declare module Backbone {

    // Backbone.BabySitter
    class ChildViewContainer<TModel extends Backbone.Model, TCollection extends Backbone.Collection<Model>> {

        constructor(initialViews?: any[]);

        add(view: View<TModel, TCollection>, customIndex?: number);
        findByModel(model): View<TModel, TCollection>;
        findByModelCid(modelCid): View<TModel, TCollection>;
        findByCustom(index: number): View<TModel, TCollection>;
        findByIndex(index: number): View<TModel, TCollection>;
        findByCid(cid): View<TModel, TCollection>;
        remove(view: View<TModel, TCollection>);
        call(method);
        apply(method: any, args?: any[]);

        //mixins from Collection (copied from Backbone's Collection declaration)

        all(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): boolean;
        contains(value: any): boolean;
        detect(iterator: (item: any) => boolean, context?: any): any;
        each(iterator: (element: View<TModel, TCollection>, index: number, list?: any) => void , context?: any);
        every(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): View<TModel, TCollection>[];
        find(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): View<TModel, TCollection>;
        first(): View<TModel, TCollection>;
        forEach(iterator: (element: View<TModel, TCollection>, index: number, list?: any) => void , context?: any);
        include(value: any): boolean;
        initial(): View<TModel, TCollection>;
        initial(n: number): View<TModel, TCollection>[];
        invoke(methodName: string, arguments?: any[]);
        isEmpty(object: any): boolean;
        last(): View<TModel, TCollection>;
        last(n: number): View<TModel, TCollection>[];
        lastIndexOf(element: View<TModel, TCollection>, fromIndex?: number): number;
        map(iterator: (element: View<TModel, TCollection>, index: number, context?: any) => any[], context?: any): any[];
        pluck(attribute: string): any[];
        reject(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): View<TModel, TCollection>[];
        rest(): View<TModel, TCollection>;
        rest(n: number): View<TModel, TCollection>[];
        select(iterator: any, context?: any): any[];
        some(iterator: (element: View<TModel, TCollection>, index: number) => boolean, context?: any): boolean;
        toArray(): any[];
        without(...values: any[]): View<TModel, TCollection>[];
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
    function MonitorDOMRefresh(view: Backbone.View<Backbone.Model, Backbone.Collection<Backbone.Model>>): void;
    function bindEntityEvents(target, entity, bindings);
    function unbindEntityEvents(target, entity, bindings);

    class Callbacks {
        add(callback:Function, contextOverride:any): void;
        run(options:any, context:any): void;
        reset(): void;
    }

    class Controller extends Backbone.Events {
        destroy();
    }

    class Region extends Backbone.Events {

        static buildRegion(regionConfig, defaultRegionClass): Region;

        el: any;
        $el: JQuery;
        currentView: View<Backbone.Model, Backbone.Collection<Backbone.Model>>;

        show(view: View<Backbone.Model, Backbone.Collection<Backbone.Model>>, options?: any): void;
        _ensureElement(): void;
        open(view: View<Backbone.Model, Backbone.Collection<Backbone.Model>>): void;
        empty(): void;
        attachView(view: View<Backbone.Model, Backbone.Collection<Backbone.Model>>);
        reset();
    }

    class RegionManager extends Controller {
        addRegions(regionDefinitions, defaults?): any;
        addRegion(name, definition): Region;
        get(name: string): Region;
        removeRegion(name): void;
        removeRegions(): void;
        destroyRegions(): void;
        destroy();

        //mixins from Collection (copied from Backbone's Collection declaration)

        all(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
        contains(value: any): boolean;
        detect(iterator: (item: any) => boolean, context?: any): any;
        each(iterator: (element: Region, index: number, list?: any) => void , context?: any);
        every(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: Region, index: number) => boolean, context?: any): Region[];
        find(iterator: (element: Region, index: number) => boolean, context?: any): Region;
        first(): Region;
        forEach(iterator: (element: Region, index: number, list?: any) => void , context?: any);
        include(value: any): boolean;
        initial(): Region;
        initial(n: number): Region[];
        invoke(methodName: string, arguments?: any[]);
        isEmpty(object: any): boolean;
        last(): Region;
        last(n: number): Region[];
        lastIndexOf(element: Region, fromIndex?: number): number;
        map(iterator: (element: Region, index: number, context?: any) => any[], context?: any): any[];
        pluck(attribute: string): any[];
        reject(iterator: (element: Region, index: number) => boolean, context?: any): Region[];
        rest(): Region;
        rest(n: number): Region[];
        select(iterator: any, context?: any): any[];
        some(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
        toArray(): any[];
        without(...values: any[]): Region[];
    }

    class TemplateCache {
        static get (templateId): any;
        static clear(): void;

        loadTemplate(templateId): any;
        compileTemplate(rawTemplate): any;
    }

    class Renderer {
        static render(template, data): string;
    }

    class View<TModel extends Backbone.Model, TCollection extends Backbone.Collection<Backbone.Model>> extends Backbone.View<TModel, TCollection> {

        constructor(options?: any);

        isDestroyed: boolean;

        template: Function;
        templateHelpers: any;

        triggers(): any;

        modelEvents: any;
        collectionEvents: any;
        ui: any;

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

    class ItemView<TModel extends Backbone.Model> extends View<TModel, Backbone.Collection<Backbone.Model>> {

        constructor(options?: any);

        ui: any;
        options: any;

        serializeData(): any;
        render(): ItemView<TModel>;
        destroy();
    }

    class CollectionView<TModel extends Backbone.Model, TCollection extends Backbone.Collection<Backbone.Model>> extends View<TModel, TCollection> {
        constructor(options?: any);

        childView: any;
        childViewOptions: any;
        children: any;
        options: any;

        //_initialEvents();
        addChildView(item: View<TModel, TCollection>, collection: View<TModel, TCollection>, options?: any);
        onShowCalled();

        triggerBeforeRender();
        triggerRendered();
        render(): CollectionView<TModel, TCollection>;

        getChild(item: any): ItemView<TModel>;
        addChild(item: any, ChildView: ItemView<TModel>, index: Number);
        addChildViewEventForwarding(view: View<TModel, TCollection>);
        renderChildView(view: View<TModel, TCollection>, index: Number);
        buildChildView(item: any, ChildViewType: any, childViewOptions: any): any;
        removeChildView(item: any);
        removeChildView(view: View<TModel, TCollection>);

        checkEmpty();

        attachHtml(collectionView: CollectionView<TModel, TCollection>, childView: View<TModel, TCollection>, index: Number);

        destroy();
        destroyChildren();
    }

    class CompositeView<TModel extends Backbone.Model, TCollection extends Backbone.Collection<Backbone.Model>> extends CollectionView<TModel, TCollection> {

        constructor(options?: any);

        childView: any;
        childViewContainer: string;

        render(): CompositeView<TModel, TCollection>;
        attachHtml(cv: any, iv: any);
        _renderRoot(): any;
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
        destroyRegions(): void;
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