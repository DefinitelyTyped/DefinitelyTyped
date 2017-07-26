// Type definitions for Polymer 2.0
// Project: https://github.com/Polymer/polymer/
// Definitions by: Justin Fagnani <https://github.com/justinfagnani>, Daniel Busłowicz <https://github.com/draccoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// tslint:disable variable-name

declare namespace Polymer {
  type Fn = (...args: any[]) => any;
  type Constructor<T> = new(...args: any[]) => T;

  interface DomApi {
    node: Node;
    activeElement: Element | null;
    childNodes: NodeList;
    children: HTMLCollection;
    classList: DOMTokenList;
    firstChild: Node | null;
    firstElementChild: Element | null;
    innerHTML: string;
    lastChild: Node | null;
    lastElementChild: Element | null;
    nextElementSibling: Element | null;
    nextSibling: Node | null;
    parentNode: Node | null;
    previousElementSibling: Element | null;
    previousSibling: Node | null;
    textContent: string | null;
  }

  interface EventApi {
    event: Event;
    localTarget: Element;
    path: Element[];
    rootTarget: Element;
  }

  /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   * @memberof Polymer
   */
  class Debouncer {
    /** @typedef {Object} AsyncModule */

    /**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * _debounceWork() {
     *   this._debounceJob = Polymer.Debouncer.debounce(this._debounceJob,
     *       Polymer.Async.microTask, () => {
     *     this._doWork();
     *   });
     * }
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `Polymer.enqueueDebouncer` and
     * `Polymer.flush`. For example, extend the above example by adding
     * `Polymer.enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `Polymer.flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncModule} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */
    static debounce(debouncer: Debouncer | null, asyncModule: any, callback: Fn): Debouncer;

    _asyncModule: any;
    _callback: Fn;
    _timer: any;

    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncModule} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     */
    setConfig(asyncModule: any, callback: Fn): void;

    /**
     * Cancels an active debouncer and returns a reference to itself.
     */
    cancel(): void;

    /**
     * Flushes an active debouncer and returns a reference to itself.
     */
    flush(): void;

    /**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */
    isActive(): boolean;
  }

  function dedupingMixin<T>(mixin: (...args: any[]) => T): (...args: any[]) => T;

  interface DomModule extends HTMLElement {
    register(id: any): void;
  }

  interface PropertyAccessors {
    _initializeProperties(): void;

    _initializeProtoProperties(props: any): void;

    _ensureAttribute(attribute: any, value: any): void;

    _attributeToProperty(attribute: any, value: any, type: any): void;

    _propertyToAttribute(property: any, attribute: any, value: any): void;

    _valueToNodeAttribute(node: any, value: any, attribute: any): void;

    _serializeValue(value: any): void;

    _deserializeValue(value: any, type: any): void;

    _createPropertyAccessor(property: any, readOnly: any): void;

    _setProperty(property: any, value: any): void;

    _setPendingProperty(property: any, value: any): void;

    _isPropertyPending(prop: any): void;

    _invalidateProperties(): void;

    _flushProperties(): void;

    _propertiesChanged(currentProps: any, changedProps: any, oldProps: any): void;

    _shouldPropertyChange(property: any, value: any, old: any): void;
  }

  function PropertyAccessors<T extends Constructor<HTMLElement>>(base: T): T & Constructor<PropertyAccessors>;

  interface TemplateStamp {
    _stampTemplate(template: any): void;

    _parseTemplateAnnotations(template: any): void;

    _addMethodEventListenerToNode(node: any, eventName: any, methodName: any, context: any): void;

    _addEventListenerToNode(node: any, eventName: any, handler: any): void;

    _removeEventListenerFromNode(node: any, eventName: any, handler: any): void;
  }

  function TemplateStamp<T extends Constructor<HTMLElement>>(base: T): T & Constructor<TemplateStamp>;

  interface PropertyEffects extends TemplateStamp, PropertyAccessors {
    _initializeProperties(): void;

    _initializeProtoProperties(props: any): void;

    _addPropertyEffect(property: any, type: any, effect: any): void;

    _hasPropertyEffect(property: any, type: any): void;

    _hasReadOnlyEffect(property: any): void;

    _hasNotifyEffect(property: any): void;

    _hasReflectEffect(property: any): void;

    _hasComputedEffect(property: any): void;

    _setPendingPropertyOrPath(path: any, value: any, shouldNotify: any, isPathNotification: any): void;

    _setUnmanagedPropertyToNode(node: any, prop: any, value: any): void;

    _setPendingProperty(property: any, value: any, shouldNotify?: any): void;

    _setProperty(property: any, value: any): void;

    _invalidateProperties(): void;

    _enqueueClient(client: any): void;

    _flushClients(): void;

    setProperties(props: any): void;

    _flushProperties(): void;

    ready(): void;

    _readyClients(): void;

    _stampTemplate(template: any): void;

    _propertiesChanged(currentProps: any, changedProps: any, oldProps: any): void;

    linkPaths(to: any, from: any): void;

    unlinkPaths(path: any): void;

    notifySplices(path: any, splices: any): void;

    get(path: any, root: any): void;

    set(path: any, value: any, root: any): void;

    push(path: any, ...items: any[]): void;

    pop(path: any): void;

    splice(path: any, start: any, deleteCount: any, ...items: any[]): void;

    shift(path: any): void;

    unshift(path: any, ...items: any[]): void;

    notifyPath(path: any, value: any): void;

    _createReadOnlyProperty(property: any, protectedSetter: any): void;

    _createPropertyObserver(property: any, methodName: any, dynamicFn: any): void;

    _createMethodObserver(expression: any, dynamicFns: any): void;

    _createNotifyingProperty(property: any): void;

    _createReflectedProperty(property: any): void;

    _createComputedProperty(property: any, expression: any, dynamicFns: any): void;

    _bindTemplate(template: any, dynamicFns: any): void;
  }

  function PropertyEffects<T extends Constructor<HTMLElement>>(base: T): T & Constructor<PropertyEffects>;

  interface PolymerElement extends PropertyEffects {
    $: { [name: string]: Element };

    _initializeProperties(): void;

    connectedCallback(): void;

    disconnectedCallback(): void;

    _readyClients(): void;

    _attachDom(dom: any): void;

    attributeChangedCallback(name: any, old: any, value: any): void;

    updateStyles(properties: any): void;

    resolveUrl(url: any, base: any): void;
  }

  function ElementMixin<T extends Constructor<HTMLElement>>(base: T): T & Constructor<PolymerElement>;

  interface GestureEventListeners {
    _addEventListenerToNode(node: any, eventName: any, handler: any): void;

    _removeEventListenerFromNode(node: any, eventName: any, handler: any): void;
  }

  function GestureEventListeners<T extends Constructor<HTMLElement>>(base: T): T & Constructor<GestureEventListeners>;

  function importHref(href: string, onload: Fn, onerror: Fn, optAsync: boolean): HTMLLinkElement;

  function enqueueDebouncer(debouncer: Polymer.Debouncer): void;

  function flush(): void;

  function dom(obj: Node): DomApi;
  function dom(obj: Event): EventApi;

  interface LegacyElement extends PolymerElement, GestureEventListeners {
    created(): void;

    attached(): void;

    detached(): void;

    attributeChanged(): void;

    _initializeProperties(): void;

    _registered(): void;

    ready(): void;

    _ensureAttributes(): void;

    _applyListeners(): void;

    serialize(value: any): void;

    deserialize(value: any, type: any): void;

    reflectPropertyToAttribute(property: any, attribute: any, value: any): void;

    serializeValueToAttribute(value: any, attribute: any, node: any): void;

    extend(prototype: any, api: any): void;

    mixin(target: any, source: any): void;

    chainObject(object: any, inherited: any): void;

    instanceTemplate(template: any): void;

    fire(type: any, detail: any, options: any): void;

    listen(node: any, eventName: any, methodName: any): void;

    unlisten(node: any, eventName: any, methodName: any): void;

    setScrollDirection(direction: any, node: any): void;

    $$(slctr: any): void;

    distributeContent(): void;

    getEffectiveChildNodes(): void;

    queryDistributedElements(selector: any): void;

    getEffectiveChildren(): void;

    getEffectiveTextContent(): void;

    queryEffectiveChildren(selector: any): void;

    queryAllEffectiveChildren(selector: any): void;

    getContentChildNodes(slctr: any): void;

    getContentChildren(slctr: any): void;

    isLightDescendant(node: any): void;

    isLocalDescendant(node: any): void;

    scopeSubtree(container: any, shouldObserve: any): void;

    getComputedStyleValue(property: any): void;

    debounce(jobName: any, callback: any, wait: any): void;

    isDebouncerActive(jobName: any): void;

    flushDebouncer(jobName: any): void;

    cancelDebouncer(jobName: any): void;

    async(callback: any, waitTime: any): void;

    cancelAsync(handle: any): void;

    create(tag: any, props: any): void;

    importHref(href: any, onload: any, onerror: any, optAsync: any): void;

    elementMatches(selector: any, node: any): void;

    toggleAttribute(name: any, bool: any, node: any): void;

    toggleClass(name: any, bool: any, node: any): void;

    transform(transformText: any, node: any): void;

    translate3d(x: any, y: any, z: any, node: any): void;

    arrayDelete(arrayOrPath: any, item: any): void;

    _logger(level: any, args: any): void;

    _log(...args: any[]): void;

    _warn(...args: any[]): void;

    _error(...args: any[]): void;

    _logf(...args: any[]): void;
  }

  function LegacyElementMixin<T extends Constructor<HTMLElement>>(base: T): T & Constructor<LegacyElement>;

  type P<T> = {[K in keyof T]: T[K]};
  type C<T> = Constructor<T>;

  function mixinBehaviors<T, U, P0>(b: [ P<P0> ], base: U & C<T>): U & C<T & P0>;

  function mixinBehaviors<T, U, P0, P1>(b: [ P<P0>, P<P1> ], base: U & C<T>): U & C<T & P0 & P1>;

  function mixinBehaviors<T, U, P0, P1, P2>(b: [ P<P0>, P<P1>, P<P2> ], base: U & C<T>): U & C<T & P0 & P1 & P2>;

  function mixinBehaviors<T, U, P0, P1, P2, P3>(b: [ P<P0>, P<P1>, P<P2>, P<P3> ], base: U & C<T>): U & C<T & P0 & P1 & P2 & P3>;

  function mixinBehaviors<T, U, P0, P1, P2, P3, P4>(
    b: [ P<P0>, P<P1>, P<P2>, P<P3>, P<P4> ], base: U & C<T>): U & C<T & P0 & P1 & P2 & P3 & P4>;

  function mixinBehaviors<T, U, P0, P1, P2, P3, P4, P5>(
    b: [ P<P0>, P<P1>, P<P2>, P<P3>, P<P4>, P<P5> ], base: U & C<T>): U & C<T & P0 & P1 & P2 & P3 & P4 & P5>;

  function mixinBehaviors<T, U, P0, P1, P2, P3, P4, P5, P6>(
    b: [ P<P0>, P<P1>, P<P2>, P<P3>, P<P4>, P<P5>, P<P6> ], base: U & C<T>): U & C<T & P0 & P1 & P2 & P3 & P4 & P5 & P6>;

  function mixinBehaviors<T, U, P0, P1, P2, P3, P4, P5, P6, P7>(
    b: [ P<P0>, P<P1>, P<P2>, P<P3>, P<P4>, P<P5>, P<P6>, P<P7> ], base: U & C<T>): U & C<T & P0 & P1 & P2 & P3 & P4 & P5 & P6 & P7>;

  function mixinBehaviors<T, U, P0, P1, P2, P3, P4, P5, P6, P7, P8>(
    b: [ P<P0>, P<P1>, P<P2>, P<P3>, P<P4>, P<P5>, P<P6>, P<P7>, P<P8> ],
    base: U & C<T>
  ): U & C<T & P0 & P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8>;

  function mixinBehaviors<T, U, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9>(
    b: [ P<P0>, P<P1>, P<P2>, P<P3>, P<P4>, P<P5>, P<P6>, P<P7>, P<P8>, P<P9> ],
    base: U & C<T>
  ): U & C<T & P0 & P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9>;

  function Class(info: object): LegacyElement;

  interface MutableData {
    _shouldPropertyChange(property: any, value: any, old: any): void;
  }

  function MutableData<T extends Constructor<HTMLElement>>(base: T): T & Constructor<MutableData>;

  interface OptionalMutableData {
    mutableData: boolean;

    _shouldPropertyChange(property: any, value: any, old: any): void;
  }

  function OptionalMutableData<T extends Constructor<HTMLElement>>(base: T): T & Constructor<OptionalMutableData>;

  interface DomBind extends OptionalMutableData, PropertyEffects, HTMLElement {
    attributeChangedCallback(): void;

    render(): void;
  }

  const Element: Constructor<HTMLElement & PolymerElement>;

  interface DomRepeat extends OptionalMutableData, PolymerElement, HTMLElement {
    items: any[];
    as: string;
    indexAs: string;
    itemsIndexAs: string;
    sort<T>(array: ArrayLike<T>, compareFn?: (a: T, b: T) => number): T[];
    filter<T>(array: ArrayLike<T>, callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
    observe: string;
    delay: number;
    renderedItemCount: number;
    initialCount: number;
    targetFramerate: number;
    _targetFrameTime: number;

    render(): void;

    _showHideChildren(hidden: any): void;

    itemForElement(el: any): void;

    indexForElement(el: any): void;

    modelForElement(el: any): void;
  }

  interface DomIf extends PolymerElement, HTMLElement {
    if: boolean;
    restamp: boolean;

    render(): void;

    _showHideChildren(): void;
  }

  interface ArraySelectorMixin {
    items: any[];
    multi: boolean;
    selected: object;
    selectedItem: object;
    toggle: boolean;

    clearSelection(): void;

    isSelected(item: any): void;

    isIndexSelected(idx: any): void;

    deselect(item: any): void;

    deselectIndex(idx: any): void;

    select(item: any): void;

    selectIndex(idx: any): void;
  }

  function ArraySelectorMixin<T extends Constructor<HTMLElement>>(base: T): T & Constructor<ArraySelectorMixin>;

  interface ArraySelector extends ArraySelectorMixin, PolymerElement {}

  interface CustomStyle extends HTMLElement {
    getStyle(): void;
  }
}
