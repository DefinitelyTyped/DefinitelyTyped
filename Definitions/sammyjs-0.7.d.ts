// Type definitions for Sammy.js
// Project: http://sammyjs.org/
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="jquery-1.8.d.ts"/>

interface Sammy {
    (): Application;
    (selector: string): Application;
    (handler: Function): Application;
    (selector: string, handler: Function): Application;

    Cache(app, options);
    DataCacheProxy(initial, $element);
    DataLocationProxy(app, data_name, href_attribute);
    DefaultLocationProxy(app, run_interval_every);
    EJS(app, method_alias);

    Exceptional(app, errorReporter);
    Flash(app);
    Form(app); // formFor ( name, object, content_callback )

    Haml(app, method_alias);
    Handlebars(app, method_alias);
    Hogan(app, method_alias);
    Hoptoad(app, errorReporter);
    JSON(app);
    Meld(app, method_alias);
    MemoryCacheProxy(initial);
    Mustache(app, method_alias);
    NestedParams(app);
    OAuth2(app);
    PathLocationProxy(app);
    Pure(app, method_alias);
    PushLocationProxy(app);
    Session(app, options);
    Storage(app);

    Title();
    Tmpl(app, method_alias);
    addLogger(logger);
    log();

    Object: Object;
}

interface Object {

    constructor (obj: any);

    escapeHTML(s: string): string;
    h(s: string): string;

    has(key: string): bool;
    join(...args: any[]): string;
    keys(attributes_only?: bool): string[];
    log(...args: any[]): void;
    toHTML(): string;
    toHash(): any;
    toString(include_functions?: bool): string;
}

interface Application extends Object {

    ROUTE_VERBS: string[];
    APP_EVENTS: string[];

    (appFn: Function);

    $element(selector: string): JQuery;
    after: (callback: Function): Application;
    any(verb: string, path: string, callback: Function): void;
    route(verb: string, path: string, callback: Function): void;
    around(callback);
    before(options: any, callback: Function): Application;
    bind(name: string, data: any, callback: Function): Application;
    bindToAllEvents(callback);
    clearTemplateCache();
    contextMatchesOptions(context, match_options, positive);
    del(path: string, callback: Function): Application;
    del(path: RegExp, callback: Function): Application;
    destroy();
    error(message, original_error);
    eventNamespace(): string;
    get(path: string, callback: Function): Application;
    get(path: RegExp, callback: Function): Application;
    getLocation(): string;
    helper(name, method);
    helpers(extensions);
    isRunning();
    log(...params: any[]): void;
    lookupRoute(verb, path);
    mapRoutes(route_array: any[]): Application;
    notFound(verb, path);
    post(path: string, callback: Function): Application;
    post(path: RegExp, callback: Function): Application;
    put(path: string, callback: Function): Application;
    put(path: RegExp, callback: Function): Application;
    refresh(): Application;
    routablePath(path);
    route(verb: string, path: string, callback: Function): Application;
    route(verb: string, path: RegExp, callback: Function): Application;
    run(start_url);
    runRoute(verb, path, params, target);
    setLocation(new_location: string): string;
    setLocationProxy(new_proxy: DataLocationProxy): void;
    swap(content, callback);
    templateCache(key, value);
    toString(): string;
    trigger(name: string, data: any): Application;
    unload();
    use(...params: any[]): void;
}

interface DataLocationProxy {
    (app, run_interval_every): DataLocationProxy;
    fullPath(location_obj): string;
    bind(): void;
    unbind(): void;
    setLocation(new_location: string): string;
    _startPolling(every: number): void;
}

interface EventContext {
    constructor (app, verb, path, params, target);
    $element();
    engineFor(engine);
    eventNamespace();
    interpolate(content, data, engine, partials);
    json(string);
    load(location, options, callback);
    loadPartials(partials);
    notFound();
    partial(location, data, callback, partials);
    redirect();
    render(location, data, callback, partials);
    renderEach(location, name, data, callback);
    send();
    swap(contents, callback);
    toString();
    trigger(name, data);
}

interface FormBuilder {
    constructor (name, object);
    checkbox(keypath, value, attributes);
    close();
    hidden(keypath, attributes);
    label(keypath, content, attributes);
    open(attributes);
    password(keypath, attributes);
    radio(keypath, value, attributes);
    select(keypath, options, attributes);
    submit(attributes);
    text(keypath, attributes);
    textarea(keypath, attributes);
}

interface GoogleAnalytics {
    constructor (app, tracker);
    noTrack();
    track(path);
}

interface RenderContext {
    constructor (event_context);
    appendTo(selector);
    collect(array, callback, now);
    interpolate(data, engine, retain);
    load(location, options, callback);
    loadPartials(partials);
    next(content);
    partial(location, data, callback, partials);
    prependTo(selector);
    render(location, data, callback, partials);
    renderEach(location, name, data, callback);
    replace(selector);
    send();
    swap(callback);
    then(callback);
    trigger(name, data);
    wait();
}


interface StoreOptions {
    name?: string;
    element?: string;
    type?: string;
    memory?: any;
    data?: any;
    cookie?: any;
    local?: any;
    session?: any;
}

interface Store {
    constructor (options);

    clear(key);
    clearAll();
    each(callback);
    exists(key);
    fetch(key, callback);
    filter(callback);
    first(callback);
    get(key);
    isAvailable();
    keys();
    load(key, path, callback);
    set(key, value);

    Cookie(name, element, options);
    Data(name, element);
    LocalStorage(name, element);
    Memory(name, element);
    SessionStorage(name, element);
    isAvailable(type);
    Template(app, method_alias);
}


interface JQueryStatic {
    sammy: Sammy;
}

declare var Sammy: Sammy;