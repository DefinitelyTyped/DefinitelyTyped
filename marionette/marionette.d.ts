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
        add(callback:Function, contextOverride:any): void;
        run(options:any, context:any): void;
        reset(): void;
    }

    class Controller extends Backbone.Events {
        destroy();        
    }

    class Region extends Backbone.Events {

        static buildRegion(regionConfig, defaultRegionType): Region;

        el: any;

        show<TModel extends Backbone.Model>(view: Backbone.View<TModel>): void;
        ensureEl(): void;
<<<<<<< HEAD
        open(view: Backbone.View<TModel>): void;
        destroy(): void;
        attachView(view: Backbone.View<TModel>);
=======
        open<TModel extends Backbone.Model>(view: Backbone.View<TModel>): void;
        close(): void;
        attachView<TModel extends Backbone.Model>(view: Backbone.View<TModel>);
>>>>>>> marionette.superfluous.generics.removed
        reset();
        hasView(): boolean;
        empty();

    }

    class RegionManager extends Controller {
        addRegions(regionDefinitions, defaults?): any;
        addRegion(name, definition): Region;
        get(name: string): Region;
        removeRegion(name): void;
        removeRegions(): void;
        emptyRegions(): void;        
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
<<<<<<< HEAD
        emptyRegions(): void;
        removeRegion(region: Region<TModel>);
        getRegion(regionName: string): Region<TModel>;
=======
        closeRegions(): void;
        removeRegion(region: Region);
        getRegion(regionName: string): Region;
>>>>>>> marionette.superfluous.generics.removed
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
