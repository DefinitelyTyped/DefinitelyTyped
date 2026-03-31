/// <reference types="jquery" />
import Events from "./bull.events";

/**
 * Nested view definitions.
 */
interface BullViewNestedViewItem {
    view: string;
    selector?: string;
    fullSelector?: string;
    el?: string;
}

type BullModel = Events;

type BullCollection = Events;

/**
 * DOM event listeners.
 */
type BullViewDomEvents = Record<string, (e: JQuery.Event) => void>;

/**
 * View options passed to a view on creation.
 */
interface BullViewOptions {
    selector?: string;
    fullSelector?: string;
    optionsToPass?: Array<string>;
    data?: ((obj: object) => object) | object;
    template?: string;
    templateContent?: string;
    layoutDefs?: object;
    layoutData?: object;
    notToRender?: boolean;
    views?: Record<string, BullViewNestedViewItem>;
    name?: string;
    model?: BullModel;
    collection?: BullCollection;
    events?: BullViewDomEvents;
    setViewBeforeCallback?: boolean;
    [key: string]: any;
}

declare class View {
    $el: JQuery<HTMLElement>;
    /**
     * An ID, unique among all views.
     */
    cid: string;

    /**
     * A DOM element.
     */
    element: HTMLElement;

    /**
     * Passed options.
     */
    options: Record<string, any>;

    /**
     * A template name/path.
     */
    template?: string | null;

    /**
     * Template content. Alternative to specifying a template name/path.
     */
    templateContent: string | null;

    /**
     * DOM event listeners. Recommended to use `addHandler` method instead.
     */
    events: BullViewDomEvents;

    /**
     * Not to render a view automatically when a view tree is built (ready).
     * Afterward, it can be rendered manually.
     */
    notToRender: boolean;

    /**
     * Whether the view is ready for rendering (all necessary data is loaded).
     */
    isReady: boolean;

    /**
     * Definitions for nested views that should be automatically created.
     * Format: viewKey => view defs.
     *
     * Example: ```
     * {
     *   body: {
     *     view: 'view/path/body',
     *     selector: '> .body',
     *   }
     * }
     * ```
     */
    views: Record<string, BullViewNestedViewItem> | null;

    /**
     * A list of options to be automatically passed to child views.
     */
    optionsToPass: Array<string> | null;

    /**
     * Nested views.
     * @internal
     */
    nestedViews: Record<string, View>;

    model?: BullModel;
    collection?: BullCollection;

    /**
     * Layout data.
     */
    layoutData: object | null;

    /**
     * Is component. Components does not require a DOM container defined by a parent view.
     * Should have one root DOM element.
     *
     * An experimental feature.
     */
    isComponent: boolean;

    /**
     * @param {Object.<string, *>} [options]
     */
    constructor(options?: BullViewOptions);

    /**
     * Initialize the view. Is invoked before #setup.
     */
    init(): void;

    /**
     * Set up the view. Is invoked after #init.
     */
    setup(): void;

    /**
     * Additional setup. Is invoked after #setup.
     */
    setupFinal(): void;

    /**
     * Compose template data. A key => value result will be passed to a template.
     */
    data(): Record<string, any>;

    /**
     * Set a DOM element selector.
     */
    setElement(selector: string): void;

    /**
     * Removes all view's delegated events. Useful if you want to disable
     * or remove a view from the DOM temporarily.
     */
    undelegateEvents(): void;

    /**
     * Add a DOM event handler. To be called in `setup` method.
     */
    addHandler(type: string, selector: string, handler: ((...args: any[]) => any) | string): void;

    /**
     * Set a view container element if it doesn't exist yet. It will call setElement after render.
     */
    setElementInAdvance(fullSelector: string): void;

    /**
     * Get a full DOM element selector.
     */
    getSelector(): string | null;

    /**
     * Set a full DOM element selector.
     */
    setSelector(selector: string): void;

    /**
     * Checks whether the view has been already rendered
     */
    isRendered(): boolean;

    /**
     * Checks whether the view has been fully rendered (afterRender has been executed).
     */
    isFullyRendered(): boolean;

    /**
     * Whether the view is being rendered at the moment.
     */
    isBeingRendered(): boolean;

    /**
     * Whether the view is removed.
     */
    isRemoved(): boolean;

    /**
     * Cancel rendering.
     */
    cancelRender(): void;

    /**
     * Un-cancel rendering.
     */
    uncancelRender(): void;

    /**
     * Render the view.
     */
    render(callback?: (...args: any[]) => any): Promise<this>;

    /**
     * Re-render the view.
     */
    reRender(options?: any): Promise<this>;

    /**
     * Executed after render.
     */
    afterRender(): void;

    /**
     * Proceed when rendered.
     */
    whenRendered(): Promise<void>;

    /**
     * Provides the ability to modify template data right before render.
     */
    handleDataBeforeRender(data: Record<string, any>): void;

    /**
     * Called each time before render. Should be extended as async.
     */
    prepareRender(): Promise<void> | undefined;

    /**
     * Whether the view has a nested view.
     */
    hasView(key: string): boolean;

    /**
     * Get a nested view.
     */
    getView(key: string): View | null;

    /**
     * Get a nested view key by a view instance.
     */
    getViewKey(view: View): string | null;

    /**
     * Assign a view instance as nested.
     */
    assignView(key: string, view: View, selector?: string): Promise<View>;

    /**
     * Create a nested view. The important method.
     */
    createView(
        key: string,
        viewName: string,
        options: BullViewOptions,
        callback?: (...args: any[]) => any,
        wait?: boolean,
    ): Promise<View>;

    /**
     * Set a nested view.
     */
    setView(key: string, view: View, fullSelector?: string): void;

    /**
     * Clear a nested view. Initiates removal of the nested view.
     */
    clearView(key: string): void;

    /**
     * Removes a nested view for cases when it's supposed that this view can be re-used in future.
     */
    unchainView(key: string): void;

    /**
     * Get a parent view.
     */
    getParentView(): View;

    /**
     * Has a parent view.
     */
    hasParentView(): boolean;

    /**
     * Add a condition for the view getting ready.
     */
    addReadyCondition(condition: ((...args: any[]) => any) | boolean): void;

    /**
     * Wait for a nested view.
     */
    waitForView(key: string): void;

    /**
     * Makes the view to wait for a promise (if a Promise is passed as a parameter).
     */
    wait(wait: Promise<any> | boolean | ((...args: any[]) => any)): Promise<any> | undefined;

    /**
     * Remove the view and all nested tree. Removes an element from DOM. Triggers the 'remove' event.
     */
    remove(dontEmpty?: boolean): this;

    /**
     * Called on view removal.
     */
    onRemove(): void;

    /**
     * Propagate an event to nested views.
     */
    propagateEvent(...parameters: Array<any>): void;

    /**
     * Set a template. Experimental.
     */
    setTemplate(template?: string): void;

    /**
     * Set template content. Experimental.
     */
    setTemplateContent(templateContent: string): void;

    /**
     * Subscribe to an event.
     */
    on(name: string, callback: (...args: any[]) => any, context?: any): any;

    /**
     * Subscribe to an event. Fired once.
     */
    once(name: string, callback: (...args: any[]) => any, context?: any): any;

    /**
     * Unsubscribe from an event or all events.
     */
    off(name?: string, callback?: (...args: any[]) => any, context?: any): any;

    /**
     * Subscribe to an event of other object.
     */
    listenTo(other: any, name: string, callback: (...args: any[]) => any): any;

    /**
     * Subscribe to an event of other object. Fired once. Will be automatically unsubscribed on view removal.
     */
    listenToOnce(other: any, name: string, callback: (...args: any[]) => any): any;

    /**
     * Stop listening to other object. No arguments will remove all listeners.
     */
    stopListening(other?: any, name?: string, callback?: (...args: any[]) => any): any;

    /**
     * Trigger an event.
     */
    trigger(name: string, ...parameters: Array<any>): any;
}

export { type BullViewOptions };
export default View;
