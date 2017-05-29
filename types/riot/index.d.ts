// Type definitions for riot v2.6.0
// Project: https://github.com/riot/riot
// Definitions by: Boriss Nazarovs <https://github.com/Stubb0rn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace riot {
    /**
     * Current version number as string
     */
    const version: string;

    /**
     * Riot settings
     */
    interface Settings {
        /**
         * Setting used to customize the start and end tokens of the expression
         */
        brackets: string;
    }

    const settings: Settings;

    interface TemplateError extends Error {
        riotData: {
            tagName: string;
        }
    }

    interface Util {
        tmpl: {
            errorHandler(error: TemplateError): void;
        }
    }

    const util: Util;

    /**
     * Internal riot tags cache
     */
    const vdom: Tag[];

    interface Observable {
        /**
         * Register callback for specified events.
         * Callback is executed each time event is triggered
         * @param events Space separated list of events or wildcard '*' that matches all events
         * @param callback Callback function
         */
        on?(events: string, callback: Function): Observable;

        /**
         * Register callback for specified events.
         * Callback is executed at most once.
         * @param events Space separated list of events.
         * @param callback Callback function
         */
        one?(events: string, callback: Function): Observable;

        /**
         * Remove all registered callbacks for specified events
         * @param events Space separated list of events or wildcard '*' that matches all events
         */
        off?(events: string): Observable;

        /**
         * Remove specified callback for specified events
         * @param events Space separated list of events or wildcard '*' that matches all events
         * @param callback Callback function to remove
         */
        off?(events: string, callback: Function): Observable;

        /**
         * Execute all callback functions registered for specified list of events
         * @param events Space separated list of events
         * @param args Arguments provided to callbacks
         */
        trigger?(events: string, ...args: any[]): Observable;
    }

    /**
     * Riot Router
     */
    interface Route {
        /**
         * Register callback that is executed when the URL changes
         * @param callback Callback function
         */
        (callback: (...args: any[]) => void): void;

        /**
         * Register callback that is executed when the URL changes and new URL matches specified filter
         * @param filter URL filter
         * @param callback Callback function
         */
        (filter: string, callback: (...any: string[]) => void): void;

        /**
         * Change the browser URL and notify all the listeners registered with `Route(callback)`
         * @param to New URL
         * @param title Document title for new URL
         * @param shouldReplace Should new url replace the current history
         */
        (to: string, title?: string, shouldReplace?: boolean): void;

        /**
         * Return a new routing context
         */
        create(): Route;

        /**
         * Start listening for url changes
         * @param autoExec Should router exec routing on the current url
         */
        start(autoExec?: boolean): void;

        /**
         * Stop all the routings.
         * Removes the listeners and clears the callbacks.
         */
        stop(): void;

        /**
         * Study the current browser path “in place” and emit routing without waiting for it to change.
         */
        exec(): void;

        /**
         * @deprecated
         */
        exec(callback: Function): void;

        /**
         * Extract query from the url
         */
        query(): { [key: string]: string };

        /**
         * Change the base path
         * @param base Base path
         */
        base(base: string): void;

        /**
         * Change the default parsers to the custom ones.
         * @param parser Replacement parser for default parser
         * @param secondParser Replacement parser for handling url filters
         */
        parser(parser: (path: string) => any[], secondParser?: (path: string, filter: string) => any[]): void;
    }

    /**
     * Adds Observer support for the given object or
     * if the argument is empty a new observable instance is created and returned.
     * @param el Object to become observable
     */
    function observable(el?: any): Observable;

    const route: Route;

    /**
     * Mount custom tags with specified tag name. Returns an array of mounted tag instances.
     * @param selector Tag selector.
     * It can be tag name, css selector or special '*' selector that matches all tags on the page.
     * @param opts Optional object passed for the tags to consume.
     */
    function mount(selector: string, opts?: any): Tag[];

    /**
     * Mount a custom tag on DOM nodes matching provided selector. Returns an array of mounted tag instances.
     * @param selector CSS selector
     * @param tagName Custom tag name
     * @param opts Optional object passed for the tag to consume.
     */
    function mount(selector: string, tagName: string, opts?: any): Tag[];

    /**
     * Mount a custom tag on a given DOM node. Returns an array of mounted tag instances.
     * @param domNode DOM node
     * @param tagName Tag name
     * @param opts Optional object passed for the tag to consume.
     */
    function mount(domNode: Node, tagName: string, opts?: any): Tag[];

    /**
     * Render a tag to html. This method is only available on server-side.
     * @param tagName Custom tag name
     * @param opts Optional object passed for the tag to consume.
     */
    function render(tagName: string, opts?: any): string;

    /**
     * Update all the mounted tags and their expressions on the page.
     * Returns an array of tag instances that are mounted on the page.
     */
    function update(): Tag[];

    /**
     * Register a global mixin and automatically add it to all tag instances.
     * @param mixinObject Mixin object
     */
    function mixin(mixinObject: TagMixin): void;

    /**
     * Register a shared mixin, globally available to be used in any tag using `TagInstance.mixin(mixinName)`
     * @param mixinName Name of the mixin
     * @param mixinObject Mixin object
     * @param isGlobal Is global mixin?
     */
    function mixin(mixinName: string, mixinObject: TagMixin, isGlobal?: boolean): void;

    /**
     * Create a new custom tag “manually” without the compiler. Returns name of the tag.
     * @param tagName The tag name
     * @param html The layout with expressions
     * @param css The style of the tag
     * @param attrs String of attributes for the tag
     * @param constructor The initialization function being called before
     * the tag expressions are calculated and before the tag is mounted
     */
    function tag(tagName: string, html: string, css?: string, attrs?: string, constructor?: (opts: any) => void): string;


    interface TagImplementation {
        /**
         * Tag template
         */
        tmpl: string;
        /**
         * The callback function called on the mount event
         * @param opts Tag options object
         */
        fn?(opts: any): void;
        /**
         * Root tag html attributes as object (key => value)
         */
        attrs?: {
            [key: string]: any;
        }
    }

    interface TagConfiguration {
        /**
         * DOM node where you will mount the tag template
         */
        root: Node;
        /**
         * Tag options
         */
        opts?: any;
        /**
         * Is it used in as loop tag
         */
        isLoop?: boolean;
        /**
         * Is already registered using `riot.tag`
         */
        hasImpl?: boolean;
        /**
         * Loop item in the loop assigned to this instance
         */
        item?: any;
    }

    interface TagInterface extends Observable {
        /**
         * options object
         */
        opts?: any;
        /**
         * the parent tag if any
         */
        parent?: Tag;
        /**
         * root DOM node
         */
        root?: Node;
        /**
         * nested custom tags
         */
        tags?: {
            [key: string]: Tag | Tag[];
        };

        /**
         * Updates all the expressions on the current tag instance as well as on all the children.
         * @param data Context data
         */
        update?(data?: any): void;

        /**
         * Extend tag with functionality available on shared mixin registered with `riot.mixin(mixinName, mixinObject)`
         * @param mixinName Name of shared mixin
         */
        mixin?(mixinName: string): void;

        /**
         * Extend tag functionality with functionality available on provided mixin object.
         * @param mixinObject Mixin object
         */
        mixin?(mixinObject: TagMixin): void;

        /**
         * Mount the tag
         */
        mount?(): void;

        /**
         * Detach the tag and its children from the page.
         * @param keepTheParent If `true` unmounting tag doesn't remove the parent tag
         */
        unmount?(keepTheParent?: boolean): void;
    }


    class Tag implements TagInterface {
        /**
         * Tag constructor
         * @param impl Tag implementation
         * @param conf Tag configuration
         * @param innerHTML HTML that can be used replacing a nested `yield` tag in its template
         */
        constructor(impl: TagImplementation, conf: TagConfiguration, innerHTML?: string);

        /**
         * options object
         */
        opts: any;
        /**
         * the parent tag if any
         */
        parent: Tag;
        /**
         * root DOM node
         */
        root: Node;
        /**
         * nested custom tags
         */
        tags: {
            [key: string]: Tag | Tag[];
        };

        /**
         * Updates all the expressions on the current tag instance as well as on all the children.
         * @param data Context data
         */
        update(data?: any): void;

        /**
         * Extend tag with functionality available on shared mixin registered with `riot.mixin(mixinName, mixinObject)`
         * @param mixinName Name of shared mixin
         */
        mixin(mixinName: string): void;

        /**
         * Extend tag functionality with functionality available on provided mixin object.
         * @param mixinObject Mixin object
         */
        mixin(mixinObject: TagMixin): void;

        /**
         * Mount the tag
         */
        mount(): void;

        /**
         * Detach the tag and its children from the page.
         * @param keepTheParent If `true` unmounting tag doesn't remove the parent tag
         */
        unmount(keepTheParent?: boolean): void;

        // Observable methods
        on(events: string, callback: Function): this;
        one(events: string, callback: Function): this;
        off(events: string): this;
        off(events: string, callback: Function): this;
        trigger(events: string, ...args: any[]): this;
    }

    /**
     * Mixin object for extending tag functionality.
     * When it gets mixed in it has access to all tag properties.
     * It should not override any built in tag properties
     */
    interface TagMixin extends TagInterface {
        /**
         * Special method which can initialize
         * the mixin when it's loaded to the tag and is not
         * accessible from the tag its mixed in
         */
        init?(): void;
    }

    /**
     * Compile all tags defined with <script type="riot/tag"> to JavaScript.
     * @param callback Function that is called after all scripts are compiled
     */
    function compile(callback: Function): void;

    /**
     * Compiles and executes the given tag.
     * @param tag Tag definition
     * @return {string} Compiled JavaScript as string
     */
    function compile(tag: string): string;

    /**
     * Compiles the given tag but doesn't execute it, if `skipExecution` parameter is `true`
     * @param tag Tag definition
     * @param skipExecution If `true` tag is not executed after compilation
     * @return {string} Compiled JavaScript as string
     */
    function compile(tag: string, skipExecution: boolean): string;

    /**
     * Loads the given URL and compiles all tags after which the callback is called
     * @param url URL to load
     * @param callback Function that is called after all tags are compiled
     */
    function compile(url: string, callback: Function): void;
}

declare module 'riot' {
    export = riot;
}
