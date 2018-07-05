// Type definitions for Sammy.js
// Project: http://sammyjs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov>, Oisin Grehan <https://github.com/oising>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare function Sammy(): Sammy.Application;
declare function Sammy(selector: string): Sammy.Application;
declare function Sammy(handler: Function): Sammy.Application;
declare function Sammy(selector: string, handler: Function): Sammy.Application;

declare namespace Sammy {
    interface SammyFunc {
        (): Sammy.Application;
        (selector: string): Sammy.Application;
        (handler: Function): Sammy.Application;
        (selector: string, handler: Function): Sammy.Application;
    }

    export function Cache(app: any, options: any): any;
    export function DataCacheProxy(initial: any, $element: any): any;
    export var DataLocationProxy:DataLocationProxy;
    export function DefaultLocationProxy(app: any, run_interval_every: any): any;
    export function EJS(app: any, method_alias: any): any;

    export function Exceptional(app: any, errorReporter: any): any;
    export function Flash(app: any): any;
    export var FormBuilder: FormBuilder;
    export function Form(app: any): any; // formFor ( name, object, content_callback )

    export function Haml(app: any, method_alias: any): any;
    export function Handlebars(app: any, method_alias: any): any;
    export function Hogan(app: any, method_alias: any): any;
    export function Hoptoad(app: any, errorReporter: any): any;
    export function JSON(app: any): any;
    export function Meld(app: any, method_alias: any): any;
    export function MemoryCacheProxy(initial: any): any;
    export function Mustache(app: any, method_alias: any): any;
    export function NestedParams(app: any): any;
    export function OAuth2(app: any): any;
    export function PathLocationProxy(app: any): any;
    export function Pure(app: any, method_alias: any): any;
    export function PushLocationProxy(app: any): any;
    export function Session(app: any, options: any): any;
    export function Storage(app: any): any;
    export var Store: Store;

    export function Title(): any;
    export function Template(app: any, method_alias: any): any;
    export function Tmpl(app: any, method_alias: any): any;
    export function addLogger(logger: any): any;
    export function log(...args:any[]): any;

    export class Object {

        constructor(obj: any);

        escapeHTML(s: string): string;
        h(s: string): string;

        has(key: string): boolean;
        join(...args: any[]): string;
        keys(attributes_only?: boolean): string[];
        log(...args: any[]): void;
        toHTML(): string;
        toHash(): any;
        toString(include_functions?: boolean): string;
    }

    export interface Application extends Object {

        ROUTE_VERBS: string[];
        APP_EVENTS: string[];

        (appFn: Function): any;

        $element(selector?: string): JQuery;
        after(callback: Function): Application;
        any(verb: string, path: string, callback: Function): void;
        around(callback: Function): Application;
        before(callback: Function): Application;
        before(options: any, callback: Function): Application;
        bind(name: string, callback: Function): Application;
        bind(name: string, data: any, callback: Function): Application;
        bindToAllEvents(callback: Function): Application;
        clearTemplateCache(): any;
        contextMatchesOptions(context: any, match_options: any, positive?: boolean): boolean;
        del(path: string, callback: Function): Application;
        del(path: RegExp, callback: Function): Application;
        destroy(): Application;
        error(message: string, original_error: Error): void;
        eventNamespace(): string;
        get(path: string, callback: Function): Application;
        get(path: RegExp, callback: Function): Application;
        getLocation(): string;
        helper(name: string, method: Function): any; // Behaviour similar to _.extend
        helpers(extensions: any): any; // Behaviour similar to _.extend
        isRunning(): boolean;
        log(...params: any[]): void;
        lookupRoute(verb: string, path: string): any;
        mapRoutes(route_array: any[]): Application;
        notFound(verb: string, path: string): any;
        post(path: string, callback: Function): Application;
        post(path: RegExp, callback: Function): Application;
        put(path: string, callback: Function): Application;
        put(path: RegExp, callback: Function): Application;
        refresh(): Application;
        routablePath(path: string): string;
        route(verb: string, path: string, callback: Function): Application;
        route(verb: string, path: RegExp, callback: Function): Application;
        run(start_url?: string): Application;
        runRoute(verb: string, path?: string, params?: any, target?: any): any;
        send(...params: any[]): any;
        setLocation(new_location: string): string;
        setLocationProxy(new_proxy: DataLocationProxy): void;
        swap(content: any, callback: Function): any;
        templateCache(key: string, value: any): any;
        toString(): string;
        trigger(name: string, data?: any): Application;
        unload(): Application;
        use(...params: any[]): void;
    last_location: string[];

        // Features provided by oauth2 plugin
        oauthorize: string;
        requireOAuth(): any;
        requireOAuth(path?:string): any;
        requireOAuth(callback?: Function): any;
    }

    export interface DataLocationProxy {

        new (app: any, run_interval_every?: any): DataLocationProxy;
        new (app: any, data_name: any, href_attribute: any): DataLocationProxy;

        fullPath(location_obj: any): string;
        bind(): void;
        unbind(): void;
        setLocation(new_location: string): string;
        _startPolling(every: number): void;
    }

    export interface EventContext extends Object {

        new (app: any, verb: any, path: any, params: any, target: any): any;

        $element(): JQuery;
        engineFor(engine: any): any;
        eventNamespace(): string;
        interpolate(content: any, data: any, engine: any, partials?: any): EventContext;
        json(str: any): any;
        json(str: string): any;
        load(location: any, options?: any, callback?: Function): any;
        loadPartials(partials?: any): any;
        notFound(): any;
        partial(location: string, data?: any, callback?: Function, partials?: any): RenderContext;
        partials: any;
        params: any;
        redirect(...params: any[]): void;
        render(location: string, data?: any, callback?: Function, partials?: any): RenderContext;
        renderEach(location: any, data?: { name: string;data?:any}[],callback?: Function): RenderContext;
        send(...params: any[]): RenderContext;
        swap(contents: any, callback: Function): string;
        toString(): string;
        trigger(name: string, data?: any): EventContext;

        // Provided by common sammy modules:
        name: any;
        title: any;
    }

    export interface FormBuilder {

        new (name: any, object: any): any;

        checkbox(keypath: string, value: any, ...attributes: any[]): string;
        close(): string;
        hidden(keypath: string, ...attributes: any[]): string;
        label(keypath: string, content: any, ...attributes: any[]): string;
        open(...attributes: any[]): any;
        password(keypath: string, ...attributes: any[]): string;
        radio(keypath: string, value: any, ...attributes: any[]): string;
        select(keypath: string, options: any, ...attributes: any[]): string;
        submit(...attributes: any[]): string;
        text(keypath: string, ...attributes: any[]): string;
        textarea(keypath: string, ...attributes: any[]): string;
    }

    export interface Form {
        formFor(name: string, object: any, content_callback: Function): FormBuilder;
    }

    export interface GoogleAnalytics {

        new (app: any, tracker: any): any;

        noTrack(): any;
        track(path: any): any;
    }

    export interface Haml extends EventContext { }

    export interface Handlebars extends EventContext { }

    export interface Hogan extends EventContext { }

    export interface JSON extends EventContext { }

    export interface Mustache extends EventContext { }

    export interface RenderContext extends Object {

        new (event_context: any): any;

        appendTo(selector: string): RenderContext;
        collect(array: any[], callback: Function, now?: boolean): RenderContext;
        interpolate(data: any, engine?: any, retain?: boolean): RenderContext;
        load(location: string, options?: any, callback?: Function): RenderContext;
        loadPartials(partials?: any): RenderContext;
        next(content: any): void;
        partial(location: string, callback: Function, partials: any): RenderContext;
        partial(location: string, data: any, callback: Function, partials: any): RenderContext;
        prependTo(selector: string): RenderContext;
        render(callback: Function): RenderContext;
        render(location: string, data: any): RenderContext;
        render(location: string, callback: Function, partials?: any): RenderContext;
        render(location: string, data: any, callback: Function): RenderContext;
        render(location: string, data: any, callback: Function, partials: any): RenderContext;
        renderEach(location: string, name?: string, data?: any, callback?: Function): RenderContext;
        replace(selector: string): RenderContext;
        send(...params: any[]): RenderContext;
        swap(callback?: Function): RenderContext;
        then(callback: Function): RenderContext;
        trigger(name: any, data: any): any;
        wait(): void;
    }

    export interface StoreOptions {
        name?: string;
        element?: string;
        type?: string;
        memory?: any;
        data?: any;
        cookie?: any;
        local?: any;
        session?: any;
    }

    export interface Store {

        stores: any;

        new (options?:any): any;

        clear(key: string): any;
        clearAll(): void;
        each(callback: Function): boolean;
        exists(key: string): boolean;
        fetch(key: string, callback: Function): any;
        filter(callback: Function): boolean;
        first(callback: Function): boolean;
        get(key: string): any;
        isAvailable(): boolean;
        keys(): string[];
        load(key: string, path: string, callback: Function): void;
        set(key: string, value: any): any;

        Cookie(name: any, element: any, options: any): any;
        Data(name: any, element: any): any;
        LocalStorage(name: any, element: any): any;
        Memory(name: any, element: any): any;
        SessionStorage(name: any, element: any): any;
        isAvailable(type: any): any;
        Template(app: any, method_alias: any): any;
    }
}

declare module "sammy" {
    export = Sammy;
}

interface JQueryStatic {
    sammy: Sammy.SammyFunc;
    log: Function;
}
