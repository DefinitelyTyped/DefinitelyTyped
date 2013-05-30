// Type definitions for Marionette
// Project: https://github.com/marionettejs/
// Definitions by: Zeeshan Hamid <https://github.com/zhamid>
// Definitions by: Natan Vivo <https://github.com/nvivo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

// declarations for Backbone.BabySitter and Backbone.Wreqr, different projects but included in MarionetteJS
declare module Backbone {

    // Backbone.BabySitter
    class ChildViewContainer {

        constructor(initialViews?: any[]);

        add(view: View, customIndex?: number);
        findByModel(model): View;
        findByModelCid(modelCid): View;
        findByCustom(index: number): View;
        findByIndex(index: number): View;
        findByCid(cid): View;
        remove(view: View);
        call(method);
        apply(method: any, args?: any[]);

        //mixins from Collection (copied from Backbone's Collection declaration)

        all(iterator: (element: View, index: number) => bool, context?: any): bool;
        any(iterator: (element: View, index: number) => bool, context?: any): bool;
        contains(value: any): bool;
        detect(iterator: (item: any) => bool, context?: any): any;
        each(iterator: (element: View, index: number, list?: any) => void , context?: any);
        every(iterator: (element: View, index: number) => bool, context?: any): bool;
        filter(iterator: (element: View, index: number) => bool, context?: any): View[];
        find(iterator: (element: View, index: number) => bool, context?: any): View;
        first(): View;
        forEach(iterator: (element: View, index: number, list?: any) => void , context?: any);
        include(value: any): bool;
        initial(): View;
        initial(n: number): View[];
        invoke(methodName: string, arguments?: any[]);
        isEmpty(object: any): bool;
        last(): View;
        last(n: number): View[];
        lastIndexOf(element: View, fromIndex?: number): number;
        map(iterator: (element: View, index: number, context?: any) => any[], context?: any): any[];
        pluck(attribute: string): any[];
        reject(iterator: (element: View, index: number) => bool, context?: any): View[];
        rest(): View;
        rest(n: number): View[];
        select(iterator: any, context?: any): any[];
        some(iterator: (element: View, index: number) => bool, context?: any): bool;
        toArray(): any[];
        without(...values: any[]): View[];
    }

    // Backbone.Wreqr
    module Wreqr {

        class Handlers extends Backbone.Events {

            constructor(options?: any);

            options: any;

            setHandler(name: string, handler: any, context: any): void;
            hasHandler(name: string): bool;
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
    function MonitorDOMRefresh(view: Backbone.View): void;
    function bindEntityEvents(target, entity, bindings);
    function unbindEntityEvents(target, entity, bindings);

    class Callbacks {
        add(callback, contextOverride): void;
        run(options, context): void;
        reset(): void;
    }

    class Controller extends Backbone.Events {
        close();
    }

    class Region extends Backbone.Events {

        static buildRegion(regionConfig, defaultRegionType): Region;

        el: any;

        show(view: Backbone.View): void;
        ensureEl(): void;
        open(view: Backbone.View): void;
        close(): void;
        attachView(view: Backbone.View);
        reset();
    }

    class RegionManager extends Controller {
        addRegions(regionDefinitions, defaults?): any;
        addRegion(name, definition): Region;
        get (name: string): Region;
        removeRegion(name): void;
        removeRegions(): void;
        closeRegions(): void;
        close();

        //mixins from Collection (copied from Backbone's Collection declaration)

        all(iterator: (element: Region, index: number) => bool, context?: any): bool;
        any(iterator: (element: Region, index: number) => bool, context?: any): bool;
        contains(value: any): bool;
        detect(iterator: (item: any) => bool, context?: any): any;
        each(iterator: (element: Region, index: number, list?: any) => void , context?: any);
        every(iterator: (element: Region, index: number) => bool, context?: any): bool;
        filter(iterator: (element: Region, index: number) => bool, context?: any): Region[];
        find(iterator: (element: Region, index: number) => bool, context?: any): Region;
        first(): Region;
        forEach(iterator: (element: Region, index: number, list?: any) => void , context?: any);
        include(value: any): bool;
        initial(): Region;
        initial(n: number): Region[];
        invoke(methodName: string, arguments?: any[]);
        isEmpty(object: any): bool;
        last(): Region;
        last(n: number): Region[];
        lastIndexOf(element: Region, fromIndex?: number): number;
        map(iterator: (element: Region, index: number, context?: any) => any[], context?: any): any[];
        pluck(attribute: string): any[];
        reject(iterator: (element: Region, index: number) => bool, context?: any): Region[];
        rest(): Region;
        rest(n: number): Region[];
        select(iterator: any, context?: any): any[];
        some(iterator: (element: Region, index: number) => bool, context?: any): bool;
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

    class View extends Backbone.View {

        constructor(options?: any);

        modelEvents: any;
        collectionEvents: any;
        ui: any;

        getTemplate(): any;
        mixinTemplateHelpers(target?: any): any;
        configureTriggers(): any;
        delegateEvents(events?: any): any;
        undelegateEvents();

        close();
        bindUIElements();
        unbindUIElements();

        triggerMethod(name, ...args: any[]): any;
    }

    class ItemView extends View {

        constructor(options?: any);

        ui: any;

        serializeData(): any;
        render(): ItemView;
        close();
    }

    class CollectionView extends View {
        constructor(options?: any);

        itemView: any;

        //_initialEvents();
        addChildView(item: View, collection: View, options?: any);
        onShowCalled();

        triggerBeforeRender();
        triggerRendered();
        render(): CollectionView;

        getItemView(item: any): ItemView;
        addItemView(item: any, ItemView: ItemView, index: Number);
        addChildViewEventForwarding(view: View);
        renderItemView(view: View, index: Number);
        buildItemView(item: any, ItemViewType: any, itemViewOptions: any): any;
        removeItemView(item: any);
        removeChildView(view: View);

        checkEmpty();

        appendHtml(collectionView: View, itemView: View, index: Number);

        close();
        closeChildren();
    }

    class CompositeView extends CollectionView {

        constructor(options?: any);

        itemView: any;
        itemViewContainer: string;

		render(): CompositeView;
        appendHtml(cv: any, iv: any);
        renderModel(): any;
    }

    class Layout extends ItemView {

        constructor(options?: any);

        addRegion(name: string, definition: any): Region;
        addRegions(regions: any): any;
		render(): Layout;
        removeRegion(name: string);
    }

    class AppRouter extends Backbone.Router {

        constructor(options?: any);
        processAppRoutes(controller: Controller, appRoutes: any);
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
        removeRegion(region: Region);
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
