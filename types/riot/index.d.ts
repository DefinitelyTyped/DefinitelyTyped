// Type definitions for riot 3.6
// Project: https://github.com/riot/riot
// Definitions by: Boriss Nazarovs <https://github.com/Stubb0rn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Current version number as a string
 */
export const version: string;

/**
 * Riot settings
 */
export interface Settings {
    /**
     * Setting used to customize the start and end tokens of the expression
     * @default { }
     */
    brackets: string;
    /**
     * If set to false, riot will not create lighter tag instances for anonymous tags
     * @default true
     */
    skipAnonymousTags: boolean;
    /**
     * If set to false, DOM event handlers will not trigger update events
     * @default true
     */
    autoUpdate: boolean;
    /**
     * `riot.renderAsync` timeout in ms
     * @default 1000
     */
    asyncRenderTimeout: number;
}

export const settings: Settings;

export interface TemplateError extends Error {
    riotData: {
        _riot_id: number;
        tagName: string;
    };
}

/**
 * Riot template engine
 */
export interface Tmpl {
    (expression: string, data?: any): any;

    version: string;

    /**
     * Utility hook function to catch all the errors swallowed by the riot template engine
     */
    errorHandler(error: TemplateError): void;
}

/**
 * Object that is used to inject and manage the css of every tag instance
 */
export interface StyleManager {
    styleNode: HTMLStyleElement;

    /**
     * Save a tag style to be later injected into DOM
     * @param css - css string
     * @param name - if it's passed the css will be mapped to a tagname
     */
    add(css: string, name?: string): void;

    /**
     * Inject all previously saved tag styles into DOM
     */
    inject(): void;
}

export interface DOMUtil {
    /**
     * Select multiple nodes in the DOM
     * @param selector - DOM selector
     * @param ctx - DOM node where the targets of our search will is located
     * @returns DOM nodes found
     */
    $$(selector: string, ctx?: Element): Element[];

    /**
     * Select a single node in the DOM
     * @param selector - unique dom selector
     * @param ctx - DOM node where the target of search will is located
     * @returns DOM node found
     */
    $(selector: string, ctx?: Element): Element | null;

    /**
     * Create a document fragment
     * @returns Document fragment
     */
    createFrag(): DocumentFragment;

    /**
     * Create a document text node
     * @returns Text node
     */
    createDOMPlaceholder(): Text;

    /**
     * Check if a DOM node is an svg element
     * @param element - node to check
     * @returns True if element is an svg element
     */
    isSvg(element: Element): element is SVGElement;

    /**
     * Create a generic DOM node
     * @param name - name of the DOM node
     * @returns Created element
     */
    mkEl(name: string): Element;

    /**
     * Set the inner html of any DOM node SVGs included
     * @param container - DOM node where html should be injected
     * @param html - html to inject
     */
    setInnerHTML(container: Element, html: string): void;

    /**
     * Toggle the visibility of a DOM node
     * @param element - DOM node to update visibility for
     * @param show - If true element is shown
     */
    toggleVisibility(element: Element, show?: boolean): void;

    /**
     * Remove any DOM attribute from a node
     * @param element - DOM node to update
     * @param name - name of the attribute
     */
    remAttr(element: Element, name: string): void;

    /**
     * Get the value of any DOM attribute on a node
     * @param element - DOM node
     * @param name - name of the attribute
     * @returns Attribute value
     */
    getAttr(element: Element, name: string): string | null;

    /**
     * Set any DOM attribute
     * @param element - DOM node we want to update
     * @param name - name of the property we want to set
     * @param value - value of the property we want to set
     */
    setAttr(element: Element, name: string, value: string): void;

    /**
     * Convert a style object to a string
     * @param style - style object to parse
     * @returns Resulting css string
     */
    styleObjectToString(style: any): string;

    /**
     * Insert tag safely
     * @param root - children container
     * @param curr - node to insert
     * @param next - node that should precede inserted node
     */
    safeInsert(root: Node, curr: Node, next: Node): void;

    /**
     * Run callback function for each attribute in html string
     * @param html - html string we want to parse
     * @param fn - callback function to apply on found attributes
     */
    walkAttrs(html: string, fn: (attrName: string, attrValue: string) => void): void;

    /**
     * Walk down recursively through all child nodes starting with provided dom node
     * @param node - starting node where we will start the recursion
     * @param fn - callback to transform the child node just found
     * @param context - fn can optionally return an object, which is passed to children
     */
    walkNodes(node: Node, fn: (node: Node, context: any) => any, context: any): void;
}

export interface CheckUtil {
    /**
     * Check if provided value is name of boolean attribute
     * @param value - name to check
     * @returns True if value is name of boolean attribute
     */
    isBoolAttr(value: string): boolean;

    /**
     * Check if provided value is a function
     * @param value - reference to check
     * @returns True if provided value is a function
     */
    isFunction(value: any): boolean;

    /**
     * Check if provided value is an object (null excluded)
     * @param value - reference to check
     * @returns True if provided value is an object
     */
    isObject(value: any): boolean;

    /**
     * Check if provided value is undefined
     * @param value - reference to check
     * @returns True if provided value is undefined
     */
    isUndefined(value: any): boolean;

    /**
     * Check if provided value is a string
     * @param value - reference to check
     * @returns True if provided value is a string
     */
    isString(value: any): value is string;

    /**
     * Check if provided value is empty. Different from falsy, because 0 or false are not considered to be blank
     * @param value - value to check
     * @returns True if provided value is undefined, null or empty string
     */
    isBlank(value: any): boolean;

    /**
     * Check if provided value is an array
     * @param value - reference to check
     * @returns True if provided value is an array
     */
    isArray(value: any): boolean;

    /**
     * Check whether object's property could be overridden
     * @param obj - source object
     * @param key - object property
     * @returns True if value for specified key can be overridden
     */
    isWritable(obj: any, key: string): boolean;

    /**
     * Check if provided string is a reserved name for Riot tag instances
     * @param value - name to check
     * @returns True if provided string is a reserved name
     */
    isReservedName(value: string): boolean;
}

export interface MiscUtil {
    /**
     * Specialized function for looping over array-like collections
     * @param list - collection of items
     * @param fn - callback applied to each item
     */
    each(list: any, fn: (item: any, index: number) => void): void;

    /**
     * Check whether an array contains an item
     * @param arr - target array
     * @param item - item to test
     * @returns True if array contains item
     */
    contains(arr: any[], item: any): boolean;

    /**
     * Convert a string containing dashes to camel case
     * @param str - input string
     * @returns my-string -> myString
     */
    toCamel(str: string): string;

    /**
     * Check if string starts with specified value
     * @param str - source string
     * @param value - test string
     * @returns True if string starts with provided value
     */
    startsWith(str: string, value: string): boolean;

    /**
     * Helper function to set an immutable property
     * @param el - object where the new property will be set
     * @param key - object key where the new property will be stored
     * @param value - value of the new property
     * @param options - set the property overriding the default options
     * @returns The initial object
     */
    defineProperty(el: any, key: string, value: any, options: any): any;

    /**
     * Extend any object with other properties
     * @param args - objects to merge
     * @returns The resulting extended object
     */
    extend(...args: any[]): any;
}

export interface TagsUtil {
    /**
     * Detect the tag implementation by a DOM node
     * @param element - DOM node we need to parse to get its tag implementation
     * @returns Object containing the implementation of a custom tag (template and boot function)
     */
    getTag(element: Element): any;

    /**
     * Inherit properties from a target tag instance
     * @param target - tag where we will inherit properties
     * @param propsInSyncWithParent - array of properties to sync with the target
     */
    inheritFrom(this: TagInstance, target: TagInstance, propsInSyncWithParent: string[]): void;

    /**
     * Move the position of a custom tag in its parent tag
     * @param tagName - key where the tag was stored
     * @param newPos - index where the new tag will be stored
     */
    moveChildTag(this: TagInstance, tagName: string, newPos: number): void;

    /**
     * Create a new child tag including it correctly into its parent
     * @param child - child tag implementation
     * @param opts - tag options containing the DOM node where the tag will be mounted
     * @param innerHTML - inner html of the child node
     * @param parent - instance of the parent tag including the child custom tag
     * @returns Instance of the new child tag just created
     */
    initChildTag(child: any, opts: any, innerHTML: string, parent: TagInstance): TagInstance;

    /**
     * Loop backward all the parents tree to detect the first custom parent tag
     * @param tag - a tag instance
     * @returns Instance of the first custom parent tag found
     */
    getImmediateCustomParentTag(tag: TagInstance): TagInstance;

    /**
     * Trigger the unmount method on all the expressions
     * @param expressions - DOM expressions
     */
    unmountAll(expressions: any[]): void;

    /**
     * Get the tag name of any DOM node
     * @param dom - DOM node we want to parse
     * @param skipDataIs - hack to ignore the data-is attribute when attaching to parent
     * @returns Name to identify this dom node in riot
     */
    getTagName(dom: Element, skipDataIs: boolean): string;

    /**
     * With this function we avoid that the internal Tag methods get overridden
     * @param data - options we want to use to extend the tag instance
     * @returns Clean object without containing the riot internal reserved words
     */
    cleanUpData(data: any): any;

    /**
     * Set the property of an object for a given key. If something already
     * exists there, then it becomes an array containing both the old and new value.
     * @param obj - object on which to set the property
     * @param key - property name
     * @param value - the value of the property to be set
     * @param ensureArray - ensure that the property remains an array
     * @param index - add the new item in a certain array position
     */
    arrayishAdd(obj: any, key: string, value: any, ensureArray?: boolean, index?: number): void;

    /**
     * Removes an item from an object at a given key. If the key points to an array,
     * then the item is just removed from the array.
     * @param obj - object on which to remove the property
     * @param key - property name
     * @param value - the value of the property to be removed
     * @param ensureArray - ensure that the property remains an array
     */
    arrayishRemove(obj: any, key: string, value: any, ensureArray?: boolean): void;

    /**
     * Mount a tag creating new Tag instance
     * @param root - dom node where the tag will be mounted
     * @param tagName - name of the riot tag we want to mount
     * @param opts - options to pass to the Tag instance
     * @param ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
     * @returns Created tag instance
     */
    mountTo(root: Element, tagName: string, opts?: TagOpts, ctx?: any): TagInstance;

    /**
     * Makes a tag virtual and replaces a reference in the dom
     * @param tag - tag to make virtual
     * @param ref - dom reference location
     */
    makeReplaceVirtual(tag: TagInstance, ref: Node): void;

    /**
     * Adds the elements for a virtual tag
     * @param src - the node that will do the inserting or appending
     * @param target - only if inserting, insert before this tag's first child
     */
    makeVirtual(this: TagInstance, src: Node, target?: TagInstance): void;

    /**
     * Move virtual tag and all child nodes
     * @param src  - the node that will do the inserting
     * @param target - insert before this tag's first child
     */
    moveVirtual(this: TagInstance, src: Node, target: TagInstance): void;

    /**
     * Get selectors for tags
     * @param tags - tag names to select
     * @returns Selector
     */
    selectTags(tags: string[]): string;
}

export interface Util {
    /**
     * Reference to the internal riot template engine
     */
    tmpl: Tmpl;

    /**
     * Internal riot tags cache
     */
    vdom: TagInstance[];

    /**
     * Object used to append and create custom tags css
     */
    styleManager: StyleManager;

    /**
     * Series of utility functions to query and update DOM nodes
     */
    dom: DOMUtil;

    /**
     * Series of helper functions needed for type checking
     */
    check: CheckUtil;

    /**
     * Generic helper functions
     */
    misc: MiscUtil;

    /**
     * Methods for managing all the riot tags instances
     */
    tags: TagsUtil;
}

export const util: Util;

export type ObservableCallback = (...args: any[]) => any;

export interface Observable {
    /**
     * Register callback for specified events.
     * Callback is executed each time event is triggered
     * @param event Event name or wildcard '*' that matches all events
     * @param callback Callback function
     */
    on(event: string, callback: ObservableCallback): this;

    /**
     * Register callback for specified events.
     * Callback is executed at most once.
     * @param event Event name.
     * @param callback Callback function
     */
    one(event: string, callback: ObservableCallback): this;

    /**
     * For specified event remove specified callback or all registered callbacks if callback is not passed in
     * @param event Event name or wildcard '*' that matches all events
     * @param callback Callback function to remove
     */
    off(event: string, callback?: ObservableCallback): this;

    /**
     * Execute all callback functions registered for specified list of events
     * @param event Event name
     * @param args Arguments provided to callbacks
     */
    trigger(event: string, ...args: any[]): this;
}

/**
 * Adds Observer support for the given object or
 * if the argument is empty a new observable instance is created and returned.
 * @param el Object to become observable
 */
export function observable(el?: any): Observable;

/**
 * Mount custom tags with specified tag name. Returns an array of mounted tag instances.
 * @param selector Tag selector.
 * It can be tag name, css selector or special '*' selector that matches all tags on the page.
 * @param opts Optional object passed for the tags to consume.
 */
export function mount(selector: string, opts?: TagOpts): TagInstance[];

/**
 * Mount a custom tag on DOM nodes matching provided selector or on provided DOM node.
 * @param selector CSS selector
 * @param tagName Custom tag name
 * @param opts Optional object passed for the tag to consume.
 * @returns An array of mounted tag instances.
 */
export function mount(selector: string | Element, tagName: string, opts?: TagOpts): TagInstance[];

/**
 * Unregister a tag previously created via compiler or via `riot.tag()`
 * @param tagName - name of the tag to unregister
 */
export function unregister(tagName: string): void;

/**
 * Render a tag to html. This method is available only on server-side.
 * @param tagName Custom tag name
 * @param opts Optional object passed for the tag to consume.
 */
export function render(tagName: string, opts?: TagOpts): string;

/**
 * Require and compile riot tag in runtime. This method is available only on server-side.
 * @param tagPath path to tag file
 * @param opts riot-compiler options
 * @returns Tag name
 */
export function require(tagPath: string, opts?: any): string;

/**
 * Asynchronously render tag to html. This method is available only on server-side.
 * @param tagName name of the tag
 * @param opts Tag opts
 * @returns Promise that is resolved with resulting html
 */
export function renderAsync(tagName: string, opts?: TagOpts): Promise<string>;

/**
 * Update all the mounted tags and their expressions on the page.
 * Returns an array of tag instances that are mounted on the page.
 */
export function update(): TagInstance[];

/**
 * Register a global mixin and automatically add it to all tag instances.
 * @param mixinObject Mixin object
 */
export function mixin(mixinObject: TagMixin): void;

/**
 * Register a shared mixin, globally available to be used in any tag using `TagInstance.mixin(mixinName)`
 * @param mixinName Name of the mixin
 * @param mixinObject Mixin object
 */
export function mixin(mixinName: string, mixinObject: TagMixin): void;

/**
 * Create a new custom tag “manually” without the compiler. Returns name of the tag.
 * @param tagName The tag name
 * @param html The layout with expressions
 * @param css The style of the tag
 * @param attrs String of attributes for the tag
 * @param constructor The initialization function being called before
 * the tag expressions are calculated and before the tag is mounted
 */
export function tag<T extends TagInterface = any>(tagName: string, html: string, css?: string, attrs?: string, constructor?: (this: T, opts?: TagOpts) => void): string;

/**
 * Create wrapper tag without template
 * @param tagName The tag name
 * @param html Should be set to false
 * @param constructor The initialization function being called before
 * the tag expressions are calculated and before the tag is mounted
 * @returns Tag name
 */
export function tag<T extends TagInterface = any>(tagName: string, html: boolean, constructor: (this: T, opts?: TagOpts) => void): string;

export interface TagOpts {
    [key: string]: any;
}

export interface TagRefs {
    [key: string]: TagInstance | Element;
}

export interface NestedTags {
    [key: string]: TagInstance | TagInstance[];
}

export interface TagInterface extends Observable {
    /**
     * Is tag instance mounted
     */
    isMounted?: boolean;
    /**
     * Tag instance options
     */
    opts: TagOpts;

    /**
     * the parent tag if any
     */
    parent?: TagInstance;

    /**
     * root DOM node
     */
    root: Element;

    /**
     * References to tags or DOM elements
     */
    refs: TagRefs;

    /**
     * nested custom tags
     */
    tags: NestedTags;

    /**
     * Updates all the expressions on the current tag instance as well as on all the children.
     * @param data Context data
     */
    update(data?: any): void;

    /**
     * Extend tag with functionality available on shared mixin registered with `riot.mixin(mixinName, mixinObject)`
     * or extend tag functionality with functionality available on provided mixin object.
     * @param mixin Name of shared mixin or mixin object
     */
    mixin(mixin: string | TagMixin): void;

    /**
     * Mount the tag
     */
    mount(): void;

    /**
     * Detach the tag and its children from the page.
     * @param keepTheParent If `true` unmounting tag doesn't remove the parent tag
     */
    unmount(keepTheParent?: boolean): void;
}

export interface TagInstance extends TagInterface {
    [key: string]: any;
}

/**
 * This class can be extended to create custom tag.
 */
export abstract class Tag implements TagInterface {
    opts: TagOpts;
    root: Element;
    refs: TagRefs;
    tags: NestedTags;
    /**
     * Tag constructor
     * @param element DOM element to mount tag on
     * @param opts Tag opts
     */
    constructor(element: Element, opts?: TagOpts);

    update(data?: any): void;

    mixin(mixinName: string | TagMixin): void;

    mount(): void;

    unmount(keepTheParent?: boolean): void;

    on(event: string, callback: ObservableCallback): this;

    one(event: string, callback: ObservableCallback): this;

    off(event: string, callback?: ObservableCallback): this;

    trigger(event: string, ...args: any[]): this;
}

/**
 * Mixin object for extending tag functionality.
 * When it gets mixed in it has access to all tag properties.
 * It should not override any built in tag properties
 */
export interface TagMixin {
    /**
     * Special method which can initialize the mixin when it's loaded to the tag.
     * This method is not accessible from the tag its mixed in
     */
    init?(this: TagInterface): void;
}

/**
 * Compile all tags defined with <script type="riot/tag"> to JavaScript.
 * @param callback Function that is called after all scripts are compiled
 */
export function compile(callback: () => void): void;

/**
 * Compiles the given tag but doesn't execute it, if `skipExecution` parameter is `true`
 * @param tag Tag definition
 * @param skipExecution If `true` tag is not executed after compilation
 * @return Compiled JavaScript as string
 */
export function compile(tag: string, skipExecution?: boolean): string;

/**
 * Loads the given URL and compiles all tags after which the callback is called
 * @param url URL to load
 * @param callback Function that is called after all tags are compiled
 */
export function compile(url: string, callback: () => void): void;
