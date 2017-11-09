// Type definitions for Marionette 3.3
// Project: https://github.com/marionettejs/
// Definitions by: Zeeshan Hamid <https://github.com/zhamid>, Natan Vivo <https://github.com/nvivo>, Sven Tschui <https://github.com/sventschui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Backbone from 'backbone';
import * as JQuery from 'jquery';
import * as Radio from 'backbone.radio';

export as namespace Marionette;

// These mixins mirror Marionette source and ensure that Marionette classes that
// extend these mixins have the correct methods attached.
export interface CommonMixin {
    normalizeMethods: any;
    mergeOptions: any;
    getOption: any;
    bindEvents: any;
    unbindEvents: any;
}

export interface RadioMixinOptions {
    /**
     * Defines the Radio channel that will be used for the requests and/or
     * events.
     */
    channelName?: string;

    /**
     * Defines an events hash with the events to be listened and its respective
     * handlers.
     */
    radioEvents?: any;

    /**
     * Defines an events hash with the requests to be replied and its respective
     * handlers
     */
    radioRequests?: any;
}

export interface RadioMixin {
    getChannel: any;
    bindEvents: any;
    unbindEvents: any;
    bindRequests: any;
    unbindRequests: any;
}

export interface DomMixin {
    createBuffer: any;
    appendChildren: any;
    beforeEl: any;
    replaceEl: any;
    detachContents: any;
    setInnerContent: any;
    detachEl: any;
    removeEl: any;
    findEls: any;
}

export interface ViewMixinOptions {
    /**
     * Behavior objects to assign to this View.
     */
    behaviors?: Marionette.Behavior[];

    /**
     * Customize the event prefix for events that are forwarded through the
     * collection view.
     */
    childViewEventPrefix?: string | false;

    /**
     * Use the childViewEvents attribute to map child events to methods on the
     * parent view.
     */
    childViewEvents?: Marionette.EventsHash;

    /**
     * A childViewTriggers hash or method permits proxying of child view events
     * without manually setting bindings. The values of the hash should be a
     * string of the event to trigger on the parent.
     */
    childViewTriggers?: Marionette.EventsHash;

    /**
     * Bind to events that occur on attached collections.
     */
    collectionEvents?: Marionette.EventsHash;

    /**
     * Bind to events that occur on attached models.
     */
    modelEvents?: Marionette.EventsHash;

    /**
     * The view triggers attribute binds DOM events to Marionette View events
     * that can be responded to at the view or parent level.
     */
    triggers?: Marionette.EventsHash;

    /**
     * Name parts of your template to be used
     * throughout the view with the ui attribute.
     */
    ui?: any;
}

export interface ViewMixin extends DomMixin, CommonMixin {
    supportsRenderLifecycle: any;
    supportsDestroyLifecycle: any;
    isDestroyed: any;
    isRendered: any;
    isAttached: any;
    delegateEvents: any;
    getTriggers: any;
    delegateEntityEvents: any;
    undelegateEntityEvents: any;
    destroy: any;
    bindUIElements: any;
    unbindUIElements: any;
    childViewEventPrefix: any;
    triggerMethod: any;
}

export interface RegionsMixin {
    regionClass: any;
    addRegion: any;
    addRegions: any;
    removeRegion: any;
    removeRegions: any;
    emptyRegions: any;
    hasRegion: any;
    getRegion: any;
    getRegions: any;
    showChildView: any;
    detachChildView: any;
    getChildView: any;
}

export class Container<TView> {
    /**
     * Find a view by it's cid.
     */
    findByCid(cid: string): TView;

    /**
     * Find a view by model.
     */
    findByModel(model: Backbone.Model): TView;

    /**
     * Find a view by model cid.
     */
    findByModelCid(modelCid: string): TView;

    /**
     * Find by custom key.
     */
    findByCustom(key: string): TView;

    /**
     * Find by numeric index (unstable).
     */
    findByIndex(index: number): TView;

    /**
     * Find a view by it's cid.
     */
    add(view: TView, customIndex?: number): void;

    /**
     * Find a view by it's cid.
     */
    remove(view: TView): void;
}

/**
 * Alias of Backbones extend function.
 */
export function extend(properties: any, classProperties?: any): any;

/**
 * Determines whether the passed-in node is a child of the document or not.
 */
export function isNodeAttached(el: HTMLElement): boolean;

/**
 * A handy function to pluck certain options and attach them directly to an
 * instance.
 */
export function mergeOptions(target: any, options: any, keys: any): void;

/**
 * Retrieve an object's attribute either directly from the object, or
 * from the object's this.options, with this.options taking precedence.
 */
export function getOption(target: any, optionName: string): any;

/**
 * Trigger an event and a corresponding method on the target object.
 * All arguments that are passed to the triggerMethod call are passed along
 * to both the event and the method, with the exception of the event name not
 * being passed to the corresponding method.
 */
export function triggerMethod(target: any, name: string, ...args: any[]): any;

/**
 * Invoke triggerMethod on a specific context.
 * This is useful when it's not clear that the object has triggerMethod defined.
 */
export function triggerMethodOn(ctx: any, name: string, ...args: any[]): any;

/**
 * This method is used to bind a backbone "entity" (collection/model) to methods on a target object.
 * @param target An object that must have a listenTo method from the EventBinder object.
 * @param entity The entity (Backbone.Model or Backbone.Collection) to bind the events from.
 * @param bindings a hash of { "event:name": "eventHandler" } configuration. Multiple handlers can be separated by a space. A function can be supplied instead of a string handler name.
 */
export function bindEvents(target: any, entity: any, bindings: any): void;

/**
 * This method can be used to unbind callbacks from entities' (collection/model) events. It's the opposite of bindEvents
 * @param target An object that must have a listenTo method from the EventBinder object.
 * @param entity The entity (Backbone.Model or Backbone.Collection) to bind the events from.
 * @param bindings a hash of { "event:name": "eventHandler" } configuration. Multiple handlers can be separated by a space. A function can be supplied instead of a string handler name.
 */
export function unbindEvents(target: any, entity: any, bindings: any): void;

/**
 * This method is used to bind a radio requests to methods on a target
 * object.
 */
export function bindRequests(target: any, channel: Radio.Channel, bindings: any): void;

/**
 * This method is used to unbind a radio requests to methods on a target
 * object.
 */
export function unbindRequests(target: any, channel: Radio.Channel, bindings: any): void;

/**
 * Receives a hash of event names and functions and/or function names, and
 * returns the same hash with the function names replaced with the function
 * references themselves.
 */
export function normalizeMethods<T>(target: any, hash: any): T;

/**
 * Allows you to run multiple instances of Marionette in the same
 * application.
 */
export function noConflict(): void;

/**
 * Overrides Backbone.EventsHash as JQueryEventObject is deprecated and
 * doesn't allow you to set the event target
 */
export interface EventsHash extends Backbone.EventsHash {
    [selector: string]: string | ((eventObject: JQuery.Event) => void);
}

export interface ObjectOptions extends RadioMixinOptions {
    /**
     * Initialize is called immediately after the Object has been instantiated,
     * and is invoked with the same arguments that the constructor received.
     */
    initialize?(options?: ObjectOptions): void;

    [index: string]: any;
}

/**
 * A base class which other classes can extend from. Object incorporates many
 * backbone conventions and utilities like initialize and Backbone.Events.
 */
export class Object extends Backbone.Events implements CommonMixin, RadioMixin {
    constructor(options?: ObjectOptions);

    /**
     * Receives a hash of event names and functions and/or function names,
     * and returns the same hash with the function names replaced with the
     * function references themselves.
     */
    normalizeMethods<T>(hash: any): T;

    /**
     * A handy function to pluck certain options and attach them directly
     * to an instance.
     */
    mergeOptions(options: any, keys: any): void;

    /**
     * Retrieve an object's attribute either directly from the object, or from
     * the object's this.options, with this.options taking precedence.
     * @param optionName the name of the option to retrieve.
     */
    getOption(optionName: string): any;

    /**
     * This method is used to bind a backbone "entity" (collection/model) to
     * methods on a target object.
     */
    bindEvents(entity: any, bindings: any): void;

    /**
     * This method can be used to unbind callbacks from entities'
     * (collection/model) events.
     */
    unbindEvents(entity: any, bindings: any): void;

    /**
     * Returns a Radio.Channel instance using 'channelName'
     */
    getChannel(): Backbone.Radio.Channel;

    /**
     * This method is used to bind a radio requests to methods on a target
     * object.
     */
    bindRequests(channel: Radio.Channel, bindings: any): void;

    /**
     * This method is used to unbind a radio requests to methods on a target
     * object.
     */
    unbindRequests(channel: Radio.Channel, bindings: any): void;

    /**
     * Defines the Radio channel that will be used for the requests and/or events
     */
    channelName: string;

    /**
     * Defines an events hash with the events to be listened and its respective handlers
     */
    radioEvents: any;

    /**
     * Defines an events hash with the requests to be replied and its respective handlers
     */
    radioRequests: any;

    /**
     * Check if this Oject has been destroyed.
     */
    isDestroyed(): boolean;

    /**
     * Initialize is called immediately after the Object has been instantiated,
     * and is invoked with the same arguments that the constructor received.
     */
    initialize(options?: ObjectOptions): void;

    /**
     * Objects have a destroy method that unbind the events that are directly
     * attached to the instance. Invoking the destroy method will trigger a
     * "before:destroy" event and corresponding onBeforeDestroy method call.
     * These calls will be passed any arguments destroy was invoked with.
     * @param args any arguments to pass to the "before:destory" event and call to
     * onBeforeDestroy.
     */
    destroy(...args: any[]): void;

    /**
     * Trigger an event and a corresponding method on the target object.
     * All arguments that are passed to the triggerMethod call are passed
     * along to both the event and the method, with the exception of the
     * event name not being passed to the corresponding method.
     */
    triggerMethod(name: string, ...args: any[]): any;
}

/**
 * The TemplateCache provides a cache for retrieving templates from script blocks
 * in your HTML. This will improve the speed of subsequent calls to get a template.
 */
export class TemplateCache implements DomMixin {
    /**
     * Returns a new HTML DOM node instance. The resulting node can be
     * passed into the other DOM functions.
     */
    createBuffer(): DocumentFragment;

    /**
     * Takes the DOM node el and appends the rendered children to the end of
     * the element's contents.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param children is jQuery.append argument: http://api.jquery.com/append/
     */
    appendChildren(el: any, children: any): void;

    /**
     * Add sibling to the DOM immediately before the DOM node el. The
     * sibling will be at the same level as el.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param sibling is jQuery.before argument: http://api.jquery.com/before/
     */
    beforeEl(el: any, sibling: any): void;

    /**
     * Remove oldEl from the DOM and put newEl in its place.
     */
    replaceEl(newEl: HTMLElement, oldEL: HTMLElement): void;

    /**
     * Remove the inner contents of el from the DOM while leaving el itself
     * in the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    detachContents(el: any): void;

    /**
     * Replace the contents of el with the HTML string of html. Unlike other
     * DOM functions, this takes a literal string for its second argument.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param html is a jQuery.html argument: https://api.jquery.com/html/
     */
    setInnerContent(el: any, html: string): void;

    /**
     * Detach el from the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    detachEl(el: any): void;

    /**
     * Remove el from the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    removeEl(el: any): void;

    /**
     * Lookup the selector string within the DOM node for context. The
     * optional context argument will come in as a DOM Node reference to run
     * the selector search. If context hasn't been set, then findEls should
     * search the entire document for the selector.
     * @param selector is a jQuery argument: https://api.jquery.com/jQuery/
     * @param context is a jQuery argument: https://api.jquery.com/jQuery/
     */
    findEls(selector: any, context: any): void;

    /**
     * To use the TemplateCache, call the get method on TemplateCache
     * directly. Internally, instances of the TemplateCache class will be
     * created and stored but you do not have to manually create these
     * instances yourself. get will return a compiled template function.
     */
    static get(templateId: string, options?: any): any;

    /**
     * You can clear one or more, or all items from the cache using the clear
     * method. Clearing a template from the cache will force it to re-load
     * from the DOM the next time it is retrieved.
     * @param  the templateId used for loading / caching of the templates to clear. If none specified, all templates will be cleared from the cache.
     */
    static clear(...templateId: string[]): void;

    /**
     * Initial method to load the template. (undocumented)
     */
    load(options?: any): any;

    /**
     * The default template retrieval is to select the template contents from the
     * DOM using jQuery. If you wish to change the way this works, you can
     * override this method on the TemplateCache object.
     * Note that the options argument seems to be unused in the source.
     */
    loadTemplate(templateId: string, options?: any): any;

    /**
     * The default template compilation passes the results from loadTemplate to
     * the compileTemplate function, which returns an underscore.js compiled
     * template function. When overriding compileTemplate remember that it
     * must return a function which takes an object of parameters and values
     * and returns a formatted HTML string.
     */
    compileTemplate(rawTemplate: any, options?: any): any;
}

export interface RegionConstructionOptions {
    /**
     * Specifies the element for the region to manage. This may be
     * a selector string, a raw DOM node reference or a jQuery wrapped
     * DOM node.
     */
    el?: any;

    /**
     * Prevents error on missing element. (undocumented)
     */
    allowMissingEl?: boolean;

    /**
     * Element to use as context when finding el via jQuery. Defaults to the
     * the document. (undocumented)
     */
    parentEl?: string;

    /**
     * Overwrite the parent el of the region with the rendered contents of
     * the inner View.
     */
    replaceElement?: string;
}

export interface RegionViewOptions {
    /**
     * DEPRECATED: If you replace the current view with a new view by calling show, by
     * default it will automatically destroy the previous view. You can
     * prevent this behavior by setting this option to true.
     */
    preventDestroy?: boolean;
}

/**
 * Regions provide consistent methods to manage, show and destroy views in
 * your applications and layouts. They use a jQuery selector to show your
 * views in the correct place.
 */
export class Region extends Object implements DomMixin {
    /**
     * Returns a new HTML DOM node instance. The resulting node can be
     * passed into the other DOM functions.
     */
    createBuffer(): DocumentFragment;

    /**
     * Takes the DOM node el and appends the rendered children to the end of
     * the element's contents.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param children is jQuery.append argument: http://api.jquery.com/append/
     */
    appendChildren(el: any, children: any): void;

    /**
     * Add sibling to the DOM immediately before the DOM node el. The
     * sibling will be at the same level as el.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param sibling is jQuery.before argument: http://api.jquery.com/before/
     */
    beforeEl(el: any, sibling: any): void;

    /**
     * Remove oldEl from the DOM and put newEl in its place.
     */
    replaceEl(newEl: HTMLElement, oldEL: HTMLElement): void;

    /**
     * Remove the inner contents of el from the DOM while leaving el itself
     * in the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    detachContents(el: any): void;

    /**
     * Replace the contents of el with the HTML string of html. Unlike other
     * DOM functions, this takes a literal string for its second argument.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param html is a jQuery.html argument: https://api.jquery.com/html/
     */
    setInnerContent(el: any, html: string): void;

    /**
     * Detach el from the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    detachEl(el: any): void;

    /**
     * Remove el from the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    removeEl(el: any): void;

    /**
     * Lookup the selector string within the DOM node for context. The
     * optional context argument will come in as a DOM Node reference to run
     * the selector search. If context hasn't been set, then findEls should
     * search the entire document for the selector.
     * @param selector is a jQuery argument: https://api.jquery.com/jQuery/
     * @param context is a jQuery argument: https://api.jquery.com/jQuery/
     */
    findEls(selector: any, context: any): void;

    /**
     * You can specify an el for the region to manage at the time the region
     * is instantiated.
     */
    constructor(options?: RegionConstructionOptions);

    /**
     * Defaults to 'mnr' (undocumented)
     */
    cidPrefix: string;

    /**
     * Overwrite the parent el of the region with the rendered contents of
     * the inner View.
     */
    replaceElement: boolean;

    /**
     * Contains the element that this region should manage.
     */
    el: any;

    /**
     * Renders and displays the specified view in this region.
     * @param view the view to display.
     */
    show(view: Backbone.View<Backbone.Model>, options?: RegionViewOptions): void;

    /**
     * Override this method to change how the region finds the DOM element
     * that it manages. Return a jQuery selector object scoped to a provided
     * parent el or the document if none exists. (undocumented)
     */
    getEl(): any;

    /**
     * Check to see if the region’s el was replaced. (undocumented)
     */
    isReplaced(): boolean;

    /**
     * Check to see if a view is being swapped by another.
     */
    isSwappingView(): boolean;

    /**
     * Override this method to change how the new view is appended to the
     * `$el` that the region is managing
     */
    attachHtml(view: Backbone.View<Backbone.Model>): void;

    /**
     * Destroy the current view, clean up any event handlers and remove it
     * from the DOM. When a region is emptied empty events are triggered.
     */
    empty(options?: RegionViewOptions): any;

    /**
     * Destroys the view taking into consideration if is a View descendant
     * or vanilla Backbone view.
     */
    destroyView<TModel extends Backbone.Model>(view: Backbone.View<TModel>): Backbone.View<TModel>;

    /**
     * Override the region's removeView method to change how and when the
     * view is destroyed / removed from the DOM.
     */
    removeView(view: Backbone.View<Backbone.Model>): void;

    /**
     * Empties the Region without destroying the view, returns the detached
     * view.
     */
    detachView(): Backbone.View<Backbone.Model>;

    /**
     * Override this method to change how the region detaches current
     * content.
     */
    detachHtml(): void;

    /**
     * If you wish to check whether a region has a view, you can use the
     * hasView function. This will return a boolean value depending whether
     * or not the region is showing a view.
     */
    hasView(): boolean;

    /**
     * A region can be reset at any time. This destroys any existing view
     * being displayed, and deletes the cached el. The next time the region
     * shows a view, the region's el is queried from the DOM.
     */
    reset(): any;

    /**
     * @returns view that this region has.
     */
    currentView: Backbone.View<Backbone.Model>;
}

/**
 * Render a template with data by passing in the template selector and the
 * data to render. This is the default renderer that is used by Marionette.
 */
export namespace Renderer {
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
    function render(template: any, data: any): string;
}

export interface ViewOptions<TModel extends Backbone.Model> extends Backbone.ViewOptions<TModel>, ViewMixinOptions {
    /**
     * The events attribute binds DOM events to actions to perform on the
     * view. It takes DOM event key and a mapping to the handler.
     */
    events?: EventsHash;

    /**
     * If you've created a custom region class, you can use it to define
     * your region.
     */
    regionClass?: any;

    /**
     * Add regions to this View.
     */
    regions?: any;

    /**
     * Set the template of this View.
     */
    template?: any;

    /**
     * The templateContext attribute can be used to add extra information to
     * your templates
     */
    templateContext?: any;
}

/**
 * A View is a view that represents an item to be displayed with a template.
 * This is typically a Backbone.Model, Backbone.Collection, or nothing at
 * all. Views are also used to build up your application hierarchy - you can
 * easily nest multiple views through the regions attribute.
 */
export class View<TModel extends Backbone.Model> extends Backbone.View<TModel> implements ViewMixin, RegionsMixin {
    constructor(options?: ViewOptions<TModel>);

    events(): EventsHash;

    /**
     * Returns a new HTML DOM node instance. The resulting node can be
     * passed into the other DOM functions.
     */
    createBuffer(): DocumentFragment;

    /**
     * Takes the DOM node el and appends the rendered children to the end of
     * the element's contents.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param children is jQuery.append argument: http://api.jquery.com/append/
     */
    appendChildren(el: any, children: any): void;

    /**
     * Add sibling to the DOM immediately before the DOM node el. The
     * sibling will be at the same level as el.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param sibling is jQuery.before argument: http://api.jquery.com/before/
     */
    beforeEl(el: any, sibling: any): void;

    /**
     * Remove oldEl from the DOM and put newEl in its place.
     */
    replaceEl(newEl: HTMLElement, oldEL: HTMLElement): void;

    /**
     * Remove the inner contents of el from the DOM while leaving el itself
     * in the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    detachContents(el: any): void;

    /**
     * Replace the contents of el with the HTML string of html. Unlike other
     * DOM functions, this takes a literal string for its second argument.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     * @param html is a jQuery.html argument: https://api.jquery.com/html/
     */
    setInnerContent(el: any, html: string): void;

    /**
     * Detach el from the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    detachEl(el: any): void;

    /**
     * Remove el from the DOM.
     * @param el is a jQuery argument: https://api.jquery.com/jQuery/
     */
    removeEl(el: any): void;

    /**
     * Lookup the selector string within the DOM node for context. The
     * optional context argument will come in as a DOM Node reference to run
     * the selector search. If context hasn't been set, then findEls should
     * search the entire document for the selector.
     * @param selector is a jQuery argument: https://api.jquery.com/jQuery/
     * @param context is a jQuery argument: https://api.jquery.com/jQuery/
     */
    findEls(selector: any, context: any): void;

    /**
     * Receives a hash of event names and functions and/or function names,
     * and returns the same hash with the function names replaced with the
     * function references themselves.
     */
    normalizeMethods<T>(hash: any): T;

    /**
     * A handy function to pluck certain options and attach them directly
     * to an instance.
     */
    mergeOptions(options: any, keys: any): void;

    /**
     * Retrieve an object's attribute either directly from the object, or from
     * the object's this.options, with this.options taking precedence.
     * @param optionName the name of the option to retrieve.
     */
    getOption(optionName: string): any;

    /**
     * This method is used to bind a backbone "entity" (collection/model) to
     * methods on a target object.
     */
    bindEvents(entity: any, bindings: any): void;

    /**
     * This method can be used to unbind callbacks from entities'
     * (collection/model) events.
     */
    unbindEvents(entity: any, bindings: any): void;

    /**
     * Internal property. (undocumented)
     */
    supportsRenderLifecycle: boolean;

    /**
     * Internal property. (undocumented)
     */
    supportsDestroyLifecycle: boolean;

    /**
     * Check if this View has been destroyed.
     */
    isDestroyed(): boolean;

    /**
     * Check if this View has been rendered.
     */
    isRendered(): boolean;

    /**
     * Check if this View is attached to the DOM.
     */
    isAttached(): boolean;

    /**
     * Overrides Backbone.View.delegateEvents. By default Marionette uses
     * this to add handlers for events and triggers. (undocumented)
     */
    delegateEvents(eventsArg: any): View<TModel>;

    /**
     * Get the triggers that are currently attached to this view.
     * (undocumented)
     */
    getTriggers(): EventsHash;

    /**
     * Delegate entity events. (undocumented)
     */
    delegateEntityEvents(): View<TModel>;

    /**
     * Undelegate entity events. (undocumented)
     */
    undelegateEntityEvents(): View<TModel>;

    /**
     * Manually destroy a view by calling the destroy method. The method
     * unbinds the UI elements, removes the view and its children from the
     * DOM and unbinds the listeners. It also triggers lifecycle events.
     */
    destroy(...args: any[]): View<TModel>;

    /**
     * Bind UI elements to this view. By default this is called in the
     * render method. (undocumented)
     */
    bindUIElements(): any;

    /**
     * Bind UI elements from this view. (undocumented)
     */
    unbindUIElements(): any;

    /**
     * Customize the event prefix for events that are forwarded through the
     * collection view.
     */
    childViewEventPrefix: string | false;

    /**
     * Trigger an event and a corresponding method on the target object.
     * All arguments that are passed to the triggerMethod call are passed
     * along to both the event and the method, with the exception of the
     * event name not being passed to the corresponding method.
     */
    triggerMethod(name: string, ...args: any[]): any;

    /**
     * Define the region class used for this View.
     */
    regionClass: any;

    /**
     * Add a region to this View.
     */
    addRegion(regionName: string, element: any): any;

    /**
     * Add multiple regions to this View.
     */
    addRegions(regions: any): any;

    /**
     * Remove a region from this View.
     */
    removeRegion(regionName: string): any;

    /**
     * Remove all regions from this View.
     */
    removeRegions(): any;

    /**
     * Empty all regions from this View.
     */
    emptyRegions(): any;

    /**
     * Check if this View has a particular region.
     */
    hasRegion(regionName: string): any;

    /**
     * Return a region from this View.
     */
    getRegion(regionName: string): Region;

    /**
     * Returns all regions from this View.
     */
    getRegions(): any;

    /**
     * Show a view inside a region.
     */
    showChildView(regionName: string, view: any, options?: RegionViewOptions): void;

    /**
     * Detach a view from a region.
     */
    detachChildView<TModel extends Backbone.Model>(regionName: string): Backbone.View<TModel>;

    /**
     * Get the view from a region.
     */
    getChildView<TModel extends Backbone.Model>(regionName: string): Backbone.View<TModel>;

    /**
     * The results of this method ared passed to this View's template. By
     * default Marionette will attempt to pass either an attached model or
     * collection which has been converted to JSON.
     */
    serializeData(): any;

    /**
     * Method used by this.serializeData to serialize this View's model
     * data.
     */
    serializeModel(): any;

    /**
     * Method used by this.serializeData to serialize this View's collection
     * data.
     */
    serializeCollection(): any;

    /**
     * Rebind this View to a new element. Overriding Backbone.View’s
     * setElement to handle if an element was previously defined.
     * (undocumented)
     */
    setElement(element: any): View<TModel>;

    /**
     * Renders the view. Given a template this method will build your HTML
     * from that template, mixing in model information and any extra
     * template context.
     */
    render(): View<TModel>;

    /**
     * Used to determine which template to use. Override this method to add
     * logic for using multiple templates.
     */
    getTemplate(): any;

    /**
     * Mix in template context methods. Looks for a templateContext
     * attribute, which can either be an object literal, or a function that
     * returns an object literal. All methods and attributes from this
     * object are copies to the object passed in. (undocumented)
     */
    mixinTemplateContext(...args: any[]): any;

    /**
     * Used to attached the rendered template to this View's element.
     */
    attachElContent(html: string): View<TModel>;

    /**
     * Used to set the renderer for this View. The rendere function is
     * passed the template and the data and is expected to return an html
     * string. By default this is set to use Renderer.
     */
    setRenderer(renderer: (template: any, data: any) => string): void;

    /**
     * Event that is triggered before this View is rendered.
     */
    onBeforeRender(view: View<TModel>): void;

    /**
     * Event that is triggered after this View is rendered.
     */
    onRender(view: View<TModel>): void;

    /**
     * Event that is triggered before this View is added to the DOM.
     */
    onBeforeAttach(view: View<TModel>): void;

    /**
     * Event that is triggered after this View's element has been added to
     * the DOM.
     */
    onAttach(view: View<TModel>): void;

    /**
     * Event that is triggered after this View's content has been added to
     * the DOM. Is also triggered every time this.render() is called.
     */
    onDomRefresh(view: View<TModel>): void;

    /**
     * Event that is triggered before this View is destroyed.
     */
    onBeforeDestroy(view: View<TModel>, ...args: any[]): void;

    /**
     * Event that is triggered before this View's element is removed from
     * the DOM.
     */
    onBeforeDetach(view: View<TModel>): void;

    /**
     * Event that is triggered before this View's content is removed from
     * the DOM.
     */
    onDomRemove(view: View<TModel>): void;

    /**
     * Event that is triggered after this View's element has been removed
     * from the DOM.
     */
    onDetach(view: View<TModel>): void;

    /**
     * Event that is triggered after this View is destroyed.
     */
    onDestroy(view: View<TModel>, ...args: any[]): void;

    /**
     * Event that is triggered before a Region is added.
     */
    onBeforeAddRegion(regionName: string, region: Region): void;

    /**
     * Event that is triggered after a Region has been added.
     */
    onAddRegion(regionName: string, region: Region): void;

    /**
     * Event that is triggered before a Region is removed.
     */
    onBeforeRemoveRegion(regionName: string, region: Region): void;

    /**
     * Event that is triggered after a Region has been removed.
     */
    onRemoveRegion(regionName: string, region: Region): void;

    /**
     * Behavior objects to assign to this View.
     */
    behaviors: Behavior[] | { [index: string]: typeof Behavior; } | Array<{
        behaviorClass: typeof Behavior;
        [index: string]: any;
    }>;

    /**
     * Bind to events that occur on attached models.
     */
    modelEvents: EventsHash;

    /**
     * The view triggers attribute binds DOM events to Marionette View events
     * that can be responded to at the view or parent level.
     */
    triggers: EventsHash;

    /**
     * Name parts of your template to be used
     * throughout the view with the ui attribute.
     */
    ui: any;
}

export interface CollectionViewOptions<
    TModel extends Backbone.Model,
    TCollection extends Backbone.Collection<TModel> = Backbone.Collection<TModel>
> extends Backbone.ViewOptions<TModel>, ViewMixinOptions {
    /**
     * Specify a child view to use.
     */
    childView?: (() => typeof Backbone.View) | typeof Backbone.View;

    /**
     * Define options to pass to the childView constructor.
     */
    childViewOptions?: (() => ViewOptions<TModel>) | ViewOptions<TModel>;

    /**
     * The events attribute binds DOM events to actions to perform on the
     * view. It takes DOM event key and a mapping to the handler.
     */
    events?: EventsHash;

    /**
     * Prevent some of the underlying collection's models from being
     * rendered as child views.
     */
    filter?(child?: TModel, index?: number, collection?: TCollection): boolean;

    /**
     * Specify a view to use if the collection has no children.
     */
    emptyView?: (() => typeof Backbone.View) | typeof Backbone.View;

    /**
     * Define options to pass to the emptyView constructor.
     */
    emptyViewOptions?: (() => ViewOptions<TModel>) | ViewOptions<TModel>;

    /**
     * If true when you sort your collection there will be no re-rendering,
     * only the DOM nodes will be reordered.
     */
    reorderOnSort?: boolean;

    /**
     * If false the collection view will not maintain a sorted collection's
     * order in the DOM.
     */
    sort?: boolean;

    /**
     * Render your collection view's children with a different sort order
     * than the underlying Backbone collection.
     */
    viewComparator?: string | ((element: TModel) => number | string) | ((compare: TModel, to?: TModel) => number); // Mirrors Backbone.Collection.comparator
}

/**
 * The CollectionView will loop through all of the models in the specified
 * collection, render each of them using a specified childView, then append
 * the results of the child view's el to the collection view's el. By
 * default the CollectionView will maintain a sorted collection's order in the
 * DOM. This behavior can be disabled by specifying {sort: false} on
 * initialize.
 */
export class CollectionView<TModel extends Backbone.Model, TView extends View<TModel>, TCollection extends Backbone.Collection<TModel> = Backbone.Collection<TModel>> extends View<TModel> {
    constructor(options?: CollectionViewOptions<TModel, TCollection>);

    /**
     * Specify a child view to use.
     */
    childView: (() => { new(...args: any[]): TView }) | { new(...args: any[]): TView };

    /**
     * Define options to pass to the childView constructor.
     */
    childViewOptions: ((model: TModel, index: number) => ViewOptions<TModel>) | ViewOptions<TModel>;

    /**
     * Prevent some of the underlying collection's models from being
     * rendered as child views.
     */
    filter: (child?: TModel, index?: number, collection?: TCollection) => boolean;

    /**
     * Modify the CollectionView's filter attribute, and renders the new
     * ChildViews in a efficient way, instead of rendering the whole DOM
     * structure again.
     */
    setFilter: (filter: (child?: TModel, index?: number, collection?: TCollection) => boolean, options: { preventRender: boolean }) => void;

    /**
     * Remove a filter from the CollectionView.
     */
    removeFilter: (options: { preventRender: boolean }) => void;

    /**
     * Specify a view to use if the collection has no children.
     */
    emptyView: (() => { new(...args: any[]): Backbone.View<TModel> }) | { new(...args: any[]): Backbone.View<TModel> };

    /**
     * Define options to pass to the emptyView constructor.
     */
    emptyViewOptions: ((model: TModel, index: number) => ViewOptions<TModel>) | ViewOptions<TModel>;

    /**
     * Method used to determine when emptyView is rendered.
     */
    isEmpty(): boolean;

    /**
     * The render method of the collection view is responsible for rendering
     * the entire collection. It loops through each of the children in the
     * collection and renders them individually as an childView.
     */
    render(): CollectionView<TModel, TView, TCollection>;

    /**
     * This method is used move the HTML from the element buffer into the
     * collection view's el.
     */
    attachHtml(collectionView: CollectionView<TModel, TView, TCollection>, childView: TView, index: number): void;

    /**
     * When overriding attachHtml it may be necessary to also override how
     * the buffer is attached.
     */
    attachBuffer(collectionView: CollectionView<TModel, TView, TCollection>, buffer: DocumentFragment): void;

    /**
     * Customize the event prefix for events that are forwarded through the
     * collection view.
     */
    childViewEventPrefix: string | false;

    /**
     * Use the childViewEvents attribute to map child events to methods on the
     * parent view.
     */
    childViewEvents: EventsHash;

    /**
     * A childViewTriggers hash or method permits proxying of child view events
     * without manually setting bindings. The values of the hash should be a
     * string of the event to trigger on the parent.
     */
    childViewTriggers: EventsHash;

    /**
     * Bind to events that occur on attached collections.
     */
    collectionEvents: EventsHash;

    /**
     * Bind to events that occur on attached models.
     */
    modelEvents: EventsHash;

    /**
     * The view triggers attribute binds DOM events to Marionette View events
     * that can be responded to at the view or parent level.
     */
    triggers: EventsHash;

    /**
     * If true when you sort your collection there will be no re-rendering,
     * only the DOM nodes will be reordered.
     */
    reorderOnSort: boolean;

    /**
     * If reorderOnSort is set to true, this function will be used instead
     * of re-rendering all children.
     */
    reorder(): void;

    /**
     * By default the CollectionView will maintain the order of its
     * collection in the DOM. However on occasions the view may need to
     * re-render to make this possible, for example if you were to change
     * the comparator on the collection. The CollectionView will re-render
     * its children or reorder them depending on reorderOnSort.
     */
    resortView(): void;

    /**
     * Render your collection view's children with a different sort order
     * than the underlying Backbone collection.
     */
    viewComparator: string | ((element: TModel) => number | string) | ((compare: TModel, to?: TModel) => number); // Mirrors Backbone.Collection.comparator

    /**
     * Override this method to determine which viewComparator to use.
     */
    getViewComparator: () => (string | ((element: TModel) => number | string) | ((compare: TModel, to?: TModel) => number)); // Mirrors Backbone.Collection.comparator

    /**
     * Behavior objects to assign to this View.
     */
    behaviors: Behavior[] | { [index: string]: typeof Behavior; } | Array<{
        behaviorClass: typeof Behavior;
        [index: string]: any;
    }>;

    /**
     * Name parts of your template to be used throughout the view with the
     * ui attribute.
     */
    ui: any;

    /**
     * The CollectionView can store and manage its child views. This allows
     * you to easily access the views within the collection view, iterate
     * them, find them by a given indexer such as the view's model or
     * collection, and more.
     */
    children: Container<TView>;

    /**
     * The buildChildView is responsible for taking the ChildView class and
     * instantiating it with the appropriate data.
     */
    buildChildView(child: TModel, childViewClass: { new(...args: any[]): TView }, childViewOptions: ViewOptions<TModel>): void;

    /**
     * The addChildView method can be used to add a view that is independent
     * of your Backbone.Collection.
     */
    addChildView(childView: TView, index: number): void;

    /**
     * The removeChildView method is useful if you need to remove a view
     * from the CollectionView without affecting the view's collection.
     */
    removeChildView(childView: TView): void;

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
    onBeforeAddChild(childView: TView): void;

    /**
     * This callback function allows you to know when a child / child view
     * instance has been added to the collection view. It provides access to
     * the view instance for the child that was added.
     */
    onAddChild(childView: TView): void;

    /**
     * This callback function allows you to know when a childView instance is
     * about to be removed from the collectionView. It provides access to the
     * view instance for the child that was removed.
     */
    onBeforeRemoveChild(childView: TView): void;

    /**
     * This callback function allows you to know when a child / childView
     * instance has been deleted or removed from the collection.
     */
    onRemoveChild(childView: TView): void;

    /**
     * Automatically destroys this Collection's children and cleans up
     * listeners.
     */
    destroy(...args: any[]): CollectionView<TModel, TView, TCollection>;
}

export interface AppRoutes {
    [index: string]: string;
}

export interface AppRouterOptions {
    /**
     * Define the app routes and the method names on the controller that
     * will be called when accessing the routes.
     */
    appRoutes?: AppRoutes;

    /**
     * Define the app routes and the method names on the router that will be
     * called when accessing the routes.
     */
    routes?: AppRoutes;

    /**
     * An object that contains the methods specified in appRoutes.
     */
    controller?: any;
}

/**
 * The Marionette AppRouter is typically used to set up your app when the
 * user loads a specific endpoint directly.
 */
export class AppRouter extends Backbone.Router {
    constructor(options?: AppRouterOptions);

    /**
     * Add an app route at runtime.
     */
    appRoute(route: string, methodName: string): void;

    /**
     * Specify a controller with the multiple routes at runtime. This will
     * preserve the existing controller as well.
     */
    processAppRoutes(controller: any, appRoutes: AppRoutes): void;

    /**
     * An object that contains the methods specified in appRoutes.
     */
    controller: any;

    /**
     * Fires whenever the user navigates to a new route in your application
     * that matches a route.
     */
    onRoute(name: string, path: string, args: any[]): void;
}

export interface ApplicationOptions extends ObjectOptions {
    /**
     * Root entry point for the View tree of your Application.
     */
    region: string;
}

/**
 * The Application is used to model your Marionette application under a
 * single entry point. The application provides:
 * - An obvious entry point to your app
 * - A clear hook for global events e.g. the AppRouter
 * - An interface to let you inject variables from the wider context into
 *   your app
 */
export class Application extends Object {
    constructor(options?: ApplicationOptions);

    /**
     * Root entry point for the View tree of your Application.
     */
    region: string;

    /**
     * Called immediately after the Application has been instantiated, and
     * is invoked with the same arguments that the constructor received.
     */
    initialize(options: ApplicationOptions): void;

    /**
     * Fired just before the application is started.
     */
    onBeforeStart(options: ApplicationOptions): void;

    /**
     * Fired as part of the application startup.
     */
    onStart(options: ApplicationOptions): void;

    /**
     * Once you have your application configured, you can kick everything
     * off by calling this method.
     */
    start(options?: any): void;

    /**
     * Return the attached region object for the Application.
     */
    getRegion(): Region;

    /**
     * Display View in the region attached to the Application. This runs the
     * View lifecycle.
     */
    showView(view: View<any>): void;

    /**
     * Return the view currently being displayed in the Application's
     * attached region. If the Application is not currently displaying a
     * view, this method returns undefined.
     */
    getView(): View<any>;
}

/**
 * A Behavior provides a clean separation of concerns to your view logic,
 * allowing you to share common user-facing operations between your views.
 */
export class Behavior extends Object {
    constructor(options?: any);

    options: any;

    /**
     * Behaviors can have their own ui hash, which will be mixed into the ui
     * hash of its associated View instance. ui elements defined on either the
     * Behavior or the View will be made available within events and triggers.
     * They also are attached directly to the Behavior and can be accessed within
     * Behavior methods as this.ui.
     */
    ui: any;

    /**
     * Any triggers you define on the Behavior will be triggered in response to the appropriate event on the view.
     */
    triggers: EventsHash;

    /**
     * modelEvents will respond to the view's model events.
     */
    modelEvents: EventsHash;

    /**
     * collectionEvents will respond to the view's collection events.
     */
    collectionEvents: EventsHash;

    /**
     * The behaviors key allows a behavior to group multiple behaviors
     * together.
     */
    behaviors: Behavior[] | { [index: string]: typeof Behavior; } | Array<{
        behaviorClass: typeof Behavior;
        [index: string]: any;
    }>;

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

    /**
     * The View that this behavior is attached to.
     */
    view: View<any>;

    /**
     * $ is a direct proxy of the views $ lookup method.
     */
    $(selector: any): JQuery;
}

/**
 * DEPRECATED
 */
export namespace Behaviors {
    /**
     * This method defines where your behavior classes are stored. Override this to provide another lookup.
     */
    function behaviorsLookup(): any;

    /**
     * This method has a default implementation that is simple to override. It
     * is responsible for the lookup of single behavior from within the
     * Behaviors.behaviorsLookup or elsewhere. Note that it should return the type of the
     * class to instantiate, not an instance of that class.
     */
    function getBehaviorClass(options: any, key: string): any;
}
