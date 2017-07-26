// Type definitions for Polymer 2.0
// Project: polymer-project.org
// Definitions by: Justin Fagnani <https://github.com/justinfagnani>, Daniel Busłowicz <https://github.com/draccoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
declare namespace Polymer {
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
    path: Array<Element>;
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
    static debounce(debouncer: Debouncer | null, asyncModule: any, callback: (...args) => any): Debouncer;

    _asyncModule: any;
    _callback: (...args) => any;
    _timer: any;

    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncModule} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     */
    setConfig(asyncModule: any, callback: (...args) => any): void;

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

  function dedupingMixin(mixin: Function): Function;

  interface DomModule extends HTMLElement {
    register(id: any);
  }

  interface PropertyAccessors {
    _initializeProperties();

    _initializeProtoProperties(props: any);

    _ensureAttribute(attribute: any, value: any);

    _attributeToProperty(attribute: any, value: any, type: any);

    _propertyToAttribute(property: any, attribute: any, value: any);

    _valueToNodeAttribute(node: any, value: any, attribute: any);

    _serializeValue(value: any);

    _deserializeValue(value: any, type: any);

    _createPropertyAccessor(property: any, readOnly: any);

    _setProperty(property: any, value: any);

    _setPendingProperty(property: any, value: any);

    _isPropertyPending(prop: any);

    _invalidateProperties();

    _flushProperties();

    _propertiesChanged(currentProps: any, changedProps: any, oldProps: any);

    _shouldPropertyChange(property: any, value: any, old: any);
  }

  function PropertyAccessors<T extends Constructor<HTMLElement>>(base: T): T & Constructor<PropertyAccessors>;

  interface TemplateStamp {
    _stampTemplate(template: any);

    _parseTemplateAnnotations(template: any);

    _addMethodEventListenerToNode(node: any, eventName: any, methodName: any, context: any);

    _addEventListenerToNode(node: any, eventName: any, handler: any);

    _removeEventListenerFromNode(node: any, eventName: any, handler: any);
  }

  function TemplateStamp<T extends Constructor<HTMLElement>>(base: T): T & Constructor<TemplateStamp>;

  interface PropertyEffects extends TemplateStamp, PropertyAccessors {
    _initializeProperties();

    _initializeProtoProperties(props: any);

    _addPropertyEffect(property: any, type: any, effect: any);

    _hasPropertyEffect(property: any, type: any);

    _hasReadOnlyEffect(property: any);

    _hasNotifyEffect(property: any);

    _hasReflectEffect(property: any);

    _hasComputedEffect(property: any);

    _setPendingPropertyOrPath(path: any, value: any, shouldNotify: any, isPathNotification: any);

    _setUnmanagedPropertyToNode(node: any, prop: any, value: any);

    _setPendingProperty(property: any, value: any, shouldNotify?: any);

    _setProperty(property: any, value: any);

    _invalidateProperties();

    _enqueueClient(client: any);

    _flushClients();

    setProperties(props: any);

    _flushProperties();

    ready();

    _readyClients();

    _stampTemplate(template: any);

    _propertiesChanged(currentProps: any, changedProps: any, oldProps: any);

    linkPaths(to: any, from: any);

    unlinkPaths(path: any);

    notifySplices(path: any, splices: any);

    get(path: any, root: any);

    set(path: any, value: any, root: any);

    push(path: any, ...items: any[]);

    pop(path: any);

    splice(path: any, start: any, deleteCount: any, ...items: any[]);

    shift(path: any);

    unshift(path: any, ...items: any[]);

    notifyPath(path: any, value: any);

    _createReadOnlyProperty(property: any, protectedSetter: any);

    _createPropertyObserver(property: any, methodName: any, dynamicFn: any);

    _createMethodObserver(expression: any, dynamicFns: any);

    _createNotifyingProperty(property: any);

    _createReflectedProperty(property: any);

    _createComputedProperty(property: any, expression: any, dynamicFns: any);

    _bindTemplate(template: any, dynamicFns: any);
  }

  function PropertyEffects<T extends Constructor<HTMLElement>>(base: T): T & Constructor<PropertyEffects>;

  interface PolymerElement extends PropertyEffects {
    $: { [name: string]: Element };

    _initializeProperties();

    connectedCallback();

    disconnectedCallback();

    _readyClients();

    _attachDom(dom: any);

    attributeChangedCallback(name: any, old: any, value: any);

    updateStyles(properties: any);

    resolveUrl(url: any, base: any);
  }

  function ElementMixin<T extends Constructor<HTMLElement>>(base: T): T & Constructor<PolymerElement>;

  interface GestureEventListeners {
    _addEventListenerToNode(node: any, eventName: any, handler: any);

    _removeEventListenerFromNode(node: any, eventName: any, handler: any);
  }

  function GestureEventListeners<T extends Constructor<HTMLElement>>(base: T): T & Constructor<GestureEventListeners>;

  function importHref(href: string, onload: Function, onerror: Function, optAsync: boolean): HTMLLinkElement;

  function enqueueDebouncer(debouncer: Polymer.Debouncer);

  function flush();

  function dom(obj: Node): DomApi;
  function dom(obj: Event): EventApi;

  interface LegacyElement extends PolymerElement, GestureEventListeners {
    created();

    attached();

    detached();

    attributeChanged();

    _initializeProperties();

    _registered();

    ready();

    _ensureAttributes();

    _applyListeners();

    serialize(value: any);

    deserialize(value: any, type: any);

    reflectPropertyToAttribute(property: any, attribute: any, value: any);

    serializeValueToAttribute(value: any, attribute: any, node: any);

    extend(prototype: any, api: any);

    mixin(target: any, source: any);

    chainObject(object: any, inherited: any);

    instanceTemplate(template: any);

    fire(type: any, detail: any, options: any);

    listen(node: any, eventName: any, methodName: any);

    unlisten(node: any, eventName: any, methodName: any);

    setScrollDirection(direction: any, node: any);

    $$(slctr: any);

    distributeContent();

    getEffectiveChildNodes();

    queryDistributedElements(selector: any);

    getEffectiveChildren();

    getEffectiveTextContent();

    queryEffectiveChildren(selector: any);

    queryAllEffectiveChildren(selector: any);

    getContentChildNodes(slctr: any);

    getContentChildren(slctr: any);

    isLightDescendant(node: any);

    isLocalDescendant(node: any);

    scopeSubtree(container: any, shouldObserve: any);

    getComputedStyleValue(property: any);

    debounce(jobName: any, callback: any, wait: any);

    isDebouncerActive(jobName: any);

    flushDebouncer(jobName: any);

    cancelDebouncer(jobName: any);

    async(callback: any, waitTime: any);

    cancelAsync(handle: any);

    create(tag: any, props: any);

    importHref(href: any, onload: any, onerror: any, optAsync: any);

    elementMatches(selector: any, node: any);

    toggleAttribute(name: any, bool: any, node: any);

    toggleClass(name: any, bool: any, node: any);

    transform(transformText: any, node: any);

    translate3d(x: any, y: any, z: any, node: any);

    arrayDelete(arrayOrPath: any, item: any);

    _logger(level: any, args: any);

    _log(...args: any[]);

    _warn(...args: any[]);

    _error(...args: any[]);

    _logf(...args: any[]);
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

  function Class(info: Object): LegacyElement;

  interface MutableData {
    _shouldPropertyChange(property: any, value: any, old: any);
  }

  function MutableData<T extends Constructor<HTMLElement>>(base: T): T & Constructor<MutableData>;

  interface OptionalMutableData {
    mutableData: boolean;

    _shouldPropertyChange(property: any, value: any, old: any);
  }

  function OptionalMutableData<T extends Constructor<HTMLElement>>(base: T): T & Constructor<OptionalMutableData>;

  interface DomBind extends OptionalMutableData, PropertyEffects, HTMLElement {
    attributeChangedCallback();

    render();
  }

  const Element: Constructor<HTMLElement & PolymerElement>;

  interface DomRepeat extends OptionalMutableData, PolymerElement, HTMLElement {
    items: any[];
    as: string;
    indexAs: string;
    itemsIndexAs: string;
    sort: Function;
    filter: Function;
    observe: string;
    delay: number;
    renderedItemCount: number;
    initialCount: number;
    targetFramerate: number;
    _targetFrameTime: number;

    render();

    _showHideChildren(hidden: any);

    itemForElement(el: any);

    indexForElement(el: any);

    modelForElement(el: any);
  }

  interface DomIf extends PolymerElement, HTMLElement {
    if: boolean;
    restamp: boolean;

    render();

    _showHideChildren();
  }

  interface ArraySelectorMixin {
    items: any[];
    multi: boolean;
    selected: Object;
    selectedItem: Object;
    toggle: boolean;

    clearSelection();

    isSelected(item: any);

    isIndexSelected(idx: any);

    deselect(item: any);

    deselectIndex(idx: any);

    select(item: any);

    selectIndex(idx: any);
  }

  function ArraySelectorMixin<T extends Constructor<HTMLElement>>(base: T): T & Constructor<ArraySelectorMixin>;

  interface ArraySelector extends ArraySelectorMixin, PolymerElement {}

  interface CustomStyle extends HTMLElement {
    getStyle();
  }
}
