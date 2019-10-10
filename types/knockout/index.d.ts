// Type definitions for Knockout v3.4.0
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov>,
//                 Igor Oleinikov <https://github.com/Igorbek>,
//                 Clément Bourgeois <https://github.com/moonpyk>,
//                 Matt Brooks <https://github.com/EnableSoftware>,
//                 Benjamin Eckardt <https://github.com/BenjaminEckardt>,
//                 Mathias Lorenzen <https://github.com/ffMathy>,
//                 Leonardo Lombardi <https://github.com/ltlombardi>
//                 Retsam <https://github.com/Retsam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface KnockoutSubscribableFunctions<T> {
    /**
     * Notify subscribers of knockout "change" event. This doesn't actually change the observable value.
     * @param eventValue A value to be sent with the event.
     * @param event The knockout event.
     */
    notifySubscribers(eventValue?: T, event?: "change"): void;
    /**
     * Notify subscribers of a knockout or user defined event.
     * @param eventValue A value to be sent with the event.
     * @param event The knockout or user defined event name.
     */
    notifySubscribers<U>(eventValue: U, event: string): void;
}

interface KnockoutComputedFunctions<T> {
}

interface KnockoutObservableFunctions<T> {
    /**
     * Used by knockout to decide if value of observable has changed and should notify subscribers. Returns true if instances are primitives, and false if are objects.
     * If your observable holds an object, this can be overwritten to return equality based on your needs.
     * @param a previous value.
     * @param b next value.
     */
    equalityComparer(a: T, b: T): boolean;
}

// The functions of observable arrays that don't mutate the array
interface KnockoutReadonlyObservableArrayFunctions<T> {
    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
    slice(start: number, end?: number): T[];
}
// The functions of observable arrays that mutate the array
interface KnockoutObservableArrayFunctions<T> extends KnockoutReadonlyObservableArrayFunctions<T> {
    /**
     * Removes and returns all the remaining elements starting from a given index.
     * @param start The zero-based location in the array from which to start removing elements.
     */
    splice(start: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    /**
     * Removes the last value from the array and returns it.
     */
    pop(): T;
    /**
     * Adds new item or items to the end of array.
     * @param items Items  to be added.
     */
    push(...items: T[]): void;
    /**
     * Removes the first value from the array and returns it.
     */
    shift(): T;
    /**
     * Inserts new item or items at the beginning of the array.
     * @param items Items to be added.
     */
    unshift(...items: T[]): number;
    /**
     * Reverses the order of the array and returns the observableArray (not the underlying array).
     */
    reverse(): KnockoutObservableArray<T>;
    /**
     * Sorts the array contents and returns the observableArray.
     */
    sort(): KnockoutObservableArray<T>;
    /**
     * Sorts the array contents and returns the observableArray.
     * @param compareFunction A function that returns negative value if first argument is smaller, positive value if second is smaller, or zero to treat them as equal.
     */
    sort(compareFunction: (left: T, right: T) => number): KnockoutObservableArray<T>;

    // Ko specific
    /**
     * Replaces the first value that equals oldItem with newItem.
     * @param oldItem Item to be replaced.
     * @param newItem Replacing item.
     */
    replace(oldItem: T, newItem: T): void;
    /**
     * Removes all values that equal item and returns them as an array.
     * @param item The item to be removed.
     */
    remove(item: T): T[];
    /**
     * Removes all values and returns them as an array.
     * @param removeFunction A function used to determine true if item should be removed and fasle otherwise.
     */
    remove(removeFunction: (item: T) => boolean): T[];
    /**
     * Removes all values that equal any of the supplied items.
     * @param items Items to be removed.
     */
    removeAll(items: T[]): T[];
    /**
     * Removes all values and returns them as an array.
     */
    removeAll(): T[];

    // Ko specific Usually relevant to Ruby on Rails developers only
    /**
     * Finds any objects in the array that equal someItem and gives them a special property called _destroy with value true.
     * @param item Items to be marked with the property.
     */
    destroy(item: T): void;
    /**
     * Finds any objects in the array filtered by a function and gives them a special property called _destroy with value true.
     * @param destroyFunction A function used to determine which items should be marked with the property.
     */
    destroy(destroyFunction: (item: T) => boolean): void;
    /**
     * Finds any objects in the array that equal suplied items and gives them a special property called _destroy with value true.
     * @param items
     */
    destroyAll(items: T[]): void;
    /**
     * Gives a special property called _destroy with value true to all objects in the array.
     */
    destroyAll(): void;
}

interface KnockoutSubscribableStatic {
    fn: KnockoutSubscribableFunctions<any>;

    new <T>(): KnockoutSubscribable<T>;
}

interface KnockoutSubscription {
    /**
     * Terminates a subscription.
     */
    dispose(): void;
}

interface KnockoutSubscribable<T> extends KnockoutSubscribableFunctions<T> {
    /**
     * Registers to be notified after the observable's value changes.
     * @param callback Function that is called whenever the notification happens.
     * @param target Defines the value of 'this' in the callback function.
     * @param event The knockout event name.
     */
    subscribe(callback: (newValue: T) => void, target?: any, event?: "change"): KnockoutSubscription;
    /**
     * Registers to be notified before the observable's value changes.
     * @param callback Function that is called whenever the notification happens.
     * @param target Defines the value of 'this' in the callback function.
     * @param event The knockout event name.
     */
    subscribe(callback: (newValue: T) => void, target: any, event: "beforeChange"): KnockoutSubscription;
    /**
     * Registers to be notified when a knockout or user defined event happens.
     * @param callback Function that is called whenever the notification happens. eventValue can be anything. No relation to underlying observable.
     * @param target Defines the value of 'this' in the callback function.
     * @param event The knockout or user defined event name.
     */
    subscribe<U>(callback: (eventValue: U) => void, target: any, event: string): KnockoutSubscription;
    /**
     * Customizes observables basic functionality.
     * @param requestedExtenders Name of the extender feature and its value, e.g. { notify: 'always' }, { rateLimit: 50 }
     */
    extend(requestedExtenders: { [key: string]: any; }): KnockoutSubscribable<T>;
    /**
    * Gets total number of subscribers.
    */
    getSubscriptionsCount(): number;
    /**
     * Gets number of subscribers of a particular event.
     * @param event Event name.
     */
    getSubscriptionsCount(event: string): number;
}

interface KnockoutComputedStatic {
    fn: KnockoutComputedFunctions<any>;

    /**
     * Creates computed observable.
     */
    <T>(): KnockoutComputed<T>;
    /**
     * Creates computed observable.
     * @param evaluatorFunction Function that computes the observable value.
     * @param context Defines the value of 'this' when evaluating the computed observable.
     * @param options An object with further properties for the computed observable.
     */
    <T>(evaluatorFunction: () => T, context?: any, options?: KnockoutComputedOptions<T>): KnockoutComputed<T>;
    /**
     * Creates computed observable.
     * @param options An object that defines the computed observable options and behavior.
     * @param context Defines the value of 'this' when evaluating the computed observable.
     */
    <T>(options: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>;
}

interface KnockoutReadonlyComputed<T> extends KnockoutReadonlyObservable<T> {
    /**
     * Returns whether the computed observable may be updated in the future. A computed observable is inactive if it has no dependencies.
     */
    isActive(): boolean;
    /**
     * Returns the current number of dependencies of the computed observable.
     */
    getDependenciesCount(): number;
}

interface KnockoutComputed<T> extends KnockoutReadonlyComputed<T>, KnockoutObservable<T>, KnockoutComputedFunctions<T> {
    fn: KnockoutComputedFunctions<any>;

    /**
     * Manually disposes the computed observable, clearing all subscriptions to dependencies.
     * This function is useful if you want to stop a computed observable from being updated or want to clean up memory for a
     * computed observable that has dependencies on observables that won’t be cleaned.
     */
    dispose(): void;
    /**
     * Customizes observables basic functionality.
     * @param requestedExtenders Name of the extender feature and it's value, e.g. { notify: 'always' }, { rateLimit: 50 }
     */
    extend(requestedExtenders: { [key: string]: any; }): KnockoutComputed<T>;
}

interface KnockoutObservableArrayStatic {
    fn: KnockoutObservableArrayFunctions<any>;

    <T>(value?: T[] | null): KnockoutObservableArray<T>;
}

/**
 * While all observable arrays are writable at runtime, this type is analogous to the native ReadonlyArray type:
 * casting an observable array to this type expresses the intention that it shouldn't be mutated.
 */
interface KnockoutReadonlyObservableArray<T> extends KnockoutReadonlyObservable<ReadonlyArray<T>>, KnockoutReadonlyObservableArrayFunctions<T> {
    // NOTE: Keep in sync with KnockoutObservableArray<T>, see note on KnockoutObservableArray<T>
    subscribe(callback: (newValue: KnockoutArrayChange<T>[]) => void, target: any, event: "arrayChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T[]) => void, target: any, event: "beforeChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T[]) => void, target?: any, event?: "change"): KnockoutSubscription;
    subscribe<U>(callback: (newValue: U) => void, target: any, event: string): KnockoutSubscription;
}

/*
    NOTE: In theory this should extend both KnockoutObservable<T[]> and KnockoutReadonlyObservableArray<T>,
        but can't since they both provide conflicting typings of .subscribe.
    So it extends KnockoutObservable<T[]> and duplicates the subscribe definitions, which should be kept in sync
*/
interface KnockoutObservableArray<T> extends KnockoutObservable<T[]>, KnockoutObservableArrayFunctions<T> {
    subscribe(callback: (newValue: KnockoutArrayChange<T>[]) => void, target: any, event: "arrayChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T[]) => void, target: any, event: "beforeChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T[]) => void, target?: any, event?: "change"): KnockoutSubscription;
    subscribe<U>(callback: (newValue: U) => void, target: any, event: string): KnockoutSubscription;

    extend(requestedExtenders: { [key: string]: any; }): KnockoutObservableArray<T>;
}

interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions<any>;

    <T>(value: T): KnockoutObservable<T>;
    <T = any>(value: null): KnockoutObservable<T | null>
    <T = any>(): KnockoutObservable<T | undefined>
}

/**
 * While all observable are writable at runtime, this type is analogous to the native ReadonlyArray type:
 * casting an observable to this type expresses the intention that this observable shouldn't be mutated.
 */
interface KnockoutReadonlyObservable<T> extends KnockoutSubscribable<T>, KnockoutObservableFunctions<T> {
    (): T;

    /**
     * Returns the current value of the computed observable without creating a dependency.
     */
    peek(): T;
    valueHasMutated?: { (): void; };
    valueWillMutate?: { (): void; };
}

interface KnockoutObservable<T> extends KnockoutReadonlyObservable<T> {
    (value: T): void;

    // Since .extend does arbitrary thing to an observable, it's not safe to do on a readonly observable
    /**
     * Customizes observables basic functionality.
     * @param requestedExtenders Name of the extender feature and it's value, e.g. { notify: 'always' }, { rateLimit: 50 }
     */
    extend(requestedExtenders: { [key: string]: any; }): KnockoutObservable<T>;
}

interface KnockoutComputedOptions<T> {
    /**
     * Makes the computed observable writable. This is a function that receives values that other code is trying to write to your computed observable.
     * It’s up to you to supply custom logic to handle the incoming values, typically by writing the values to some underlying observable(s).
     * @param value Value being written to the computer observable.
     */
    write?(value: T): void;
    /**
     * Disposal of the computed observable will be triggered when the specified DOM node is removed by KO.
     * This feature is used to dispose computed observables used in bindings when nodes are removed by the template and control-flow bindings.
     */
    disposeWhenNodeIsRemoved?: Node;
    /**
     * This function is executed before each re-evaluation to determine if the computed observable should be disposed.
     * A true-ish result will trigger disposal of the computed observable.
     */
    disposeWhen?(): boolean;
    /**
     * Defines the value of 'this' whenever KO invokes your 'read' or 'write' callbacks.
     */
    owner?: any;
    /**
     * If true, then the value of the computed observable will not be evaluated until something actually attempts to access its value or manually subscribes to it.
     * By default, a computed observable has its value determined immediately during creation.
     */
    deferEvaluation?: boolean;
    /**
     * If true, the computed observable will be set up as a purecomputed observable. This option is an alternative to the ko.pureComputed constructor.
     */
    pure?: boolean;
}

interface KnockoutComputedDefine<T> extends KnockoutComputedOptions<T> {
    /**
     * A function that is used to evaluate the computed observable’s current value.
     */
    read(): T;
}

interface KnockoutBindingContext {
    $parent: any;
    $parents: any[];
    $root: any;
    $data: any;
    $rawData: any | KnockoutObservable<any>;
    $index?: KnockoutObservable<number>;
    $parentContext?: KnockoutBindingContext;
    $component: any;
    $componentTemplateNodes: Node[];

    /**
     * Clones the current Binding Context, adding extra properties to it.
     * @param properties object with properties to be added in the binding context.
     */
    extend(properties: { [key: string]: any; } | (() => { [key: string]: any; })): KnockoutBindingContext;
    /**
     * This returns a new binding context whose viewmodel is the first parameter and whose $parentContext is the current bindingContext. 
     * @param dataItemOrAccessor The binding context of the children.
     * @param dataItemAlias An alias for the data item in descendant contexts.
     * @param extendCallback Function to be called.
     * @param options Further options.
     */
    createChildContext(dataItemOrAccessor: any, dataItemAlias?: string, extendCallback?: Function, options?: { "exportDependencies": boolean }): any;
}

interface KnockoutAllBindingsAccessor {
    (): any;
    get(name: string): any;
    has(name: string): boolean;
}

interface KnockoutBindingHandler<E extends Node = any, V = any, VM = any> {
    after?: Array<string>;
    init?: (element: E, valueAccessor: () => V, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: VM, bindingContext: KnockoutBindingContext) => void | { controlsDescendantBindings: boolean; };
    update?: (element: E, valueAccessor: () => V, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: VM, bindingContext: KnockoutBindingContext) => void;
    options?: any;
    preprocess?: (value: string, name: string, addBindingCallback?: (name: string, value: string) => void) => string;
    [s: string]: any;
}

interface KnockoutBindingHandlers {
    [bindingHandler: string]: KnockoutBindingHandler;

    // Controlling text and appearance
    visible: KnockoutBindingHandler;
    text: KnockoutBindingHandler;
    html: KnockoutBindingHandler;
    css: KnockoutBindingHandler;
    style: KnockoutBindingHandler;
    attr: KnockoutBindingHandler;

    // Control Flow
    foreach: KnockoutBindingHandler;
    if: KnockoutBindingHandler;
    ifnot: KnockoutBindingHandler;
    with: KnockoutBindingHandler;

    // Working with form fields
    click: KnockoutBindingHandler;
    event: KnockoutBindingHandler;
    submit: KnockoutBindingHandler;
    enable: KnockoutBindingHandler;
    disable: KnockoutBindingHandler;
    value: KnockoutBindingHandler;
    textInput: KnockoutBindingHandler;
    hasfocus: KnockoutBindingHandler;
    checked: KnockoutBindingHandler;
    options: KnockoutBindingHandler;
    selectedOptions: KnockoutBindingHandler;
    uniqueName: KnockoutBindingHandler;

    // Rendering templates
    template: KnockoutBindingHandler;

    // Components (new for v3.2)
    component: KnockoutBindingHandler;
}

interface KnockoutMemoization {
    memoize(callback: Function): string;
    unmemoize(memoId: string, callbackParams: any[]): boolean;
    unmemoizeDomNodeAndDescendants(domNode: any, extraCallbackParamsArray: any[]): boolean;
    parseMemoText(memoText: string): string;
}

interface KnockoutVirtualElement { }

interface KnockoutVirtualElements {
    allowedBindings: { [bindingName: string]: boolean; };
    emptyNode(node: KnockoutVirtualElement): void;
    firstChild(node: KnockoutVirtualElement): KnockoutVirtualElement;
    insertAfter(container: KnockoutVirtualElement, nodeToInsert: Node, insertAfter: Node): void;
    nextSibling(node: KnockoutVirtualElement): Node;
    prepend(node: KnockoutVirtualElement, toInsert: Node): void;
    setDomNodeChildren(node: KnockoutVirtualElement, newChildren: { length: number;[index: number]: Node; }): void;
    childNodes(node: KnockoutVirtualElement): Node[];
}

interface KnockoutExtenders {
    throttle(target: any, timeout: number): KnockoutComputed<any>;
    notify(target: any, notifyWhen: string): any;

    rateLimit(target: any, timeout: number): any;
    rateLimit(target: any, options: { timeout: number; method?: string; }): any;

    trackArrayChanges(target: any): any;
}

//
// NOTE TO MAINTAINERS AND CONTRIBUTORS : pay attention to only include symbols that are
// publicly exported in the minified version of ko, without that you can give the false
// impression that some functions will be available in production builds.
//
interface KnockoutUtils {
    //////////////////////////////////
    // utils.domData.js
    //////////////////////////////////

    domData: {
        get(node: Node, key: string): any;

        set(node: Node, key: string, value: any): void;

        getAll(node: Node, createIfNotFound: boolean): any;

        clear(node: Node): boolean;
    };

    //////////////////////////////////
    // utils.domNodeDisposal.js
    //////////////////////////////////

    domNodeDisposal: {
        addDisposeCallback(node: Node, callback: Function): void;

        removeDisposeCallback(node: Node, callback: Function): void;

        cleanNode(node: Node): Node;

        removeNode(node: Node): void;
    };

    addOrRemoveItem<T>(array: T[] | KnockoutObservable<T>, value: T, included: T): void;

    arrayFilter<T>(array: T[], predicate: (item: T) => boolean): T[];

    arrayFirst<T>(array: T[], predicate: (item: T) => boolean, predicateOwner?: any): T;

    arrayForEach<T>(array: T[], action: (item: T, index: number) => void): void;

    arrayGetDistinctValues<T>(array: T[]): T[];

    arrayIndexOf<T>(array: T[], item: T): number;

    arrayMap<T, U>(array: T[], mapping: (item: T) => U): U[];

    arrayPushAll<T>(array: T[] | KnockoutObservableArray<T>, valuesToPush: T[]): T[];

    arrayRemoveItem(array: any[], itemToRemove: any): void;

    compareArrays<T>(a: T[], b: T[]): Array<KnockoutArrayChange<T>>;

    extend(target: Object, source: Object): Object;

    fieldsIncludedWithJsonPost: any[];

    getFormFields(form: any, fieldName: string): any[];

    objectForEach(obj: any, action: (key: any, value: any) => void): void;

    parseHtmlFragment(html: string): any[];

    parseJson(jsonString: string): any;

    postJson(urlOrForm: any, data: any, options: any): void;

    peekObservable<T>(value: KnockoutObservable<T>): T;

    range(min: any, max: any): any;

    registerEventHandler(element: any, eventType: any, handler: Function): void;

    setHtml(node: Element, html: () => string): void;

    setHtml(node: Element, html: string): void;

    setTextContent(element: any, textContent: string | KnockoutObservable<string>): void;

    stringifyJson(data: any, replacer?: Function, space?: string): string;

    toggleDomNodeCssClass(node: any, className: string, shouldHaveClass: boolean): void;

    triggerEvent(element: any, eventType: any): void;

    unwrapObservable<T>(value: KnockoutObservable<T> | T): T;
    unwrapObservable<T>(value: KnockoutObservableArray<T> | T[]): T[];

    // NOT PART OF THE MINIFIED API SURFACE (ONLY IN knockout-{version}.debug.js) https://github.com/SteveSanderson/knockout/issues/670
    // forceRefresh(node: any): void;
    // ieVersion: number;
    // isIe6: boolean;
    // isIe7: boolean;
    // jQueryHtmlParse(html: string): any[];
    // makeArray(arrayLikeObject: any): any[];
    // moveCleanedNodesToContainerElement(nodes: any[]): HTMLElement;
    // replaceDomNodes(nodeToReplaceOrNodeArray: any, newNodesArray: any[]): void;
    // setDomNodeChildren(domNode: any, childNodes: any[]): void;
    // setElementName(element: any, name: string): void;
    // setOptionNodeSelectionState(optionNode: any, isSelected: boolean): void;
    // simpleHtmlParse(html: string): any[];
    // stringStartsWith(str: string, startsWith: string): boolean;
    // stringTokenize(str: string, delimiter: string): string[];
    // stringTrim(str: string): string;
    // tagNameLower(element: any): string;
}

interface KnockoutArrayChange<T> {
    status: "added" | "deleted" | "retained";
    value: T;
    index: number;
    moved?: number;
}

//////////////////////////////////
// templateSources.js
//////////////////////////////////

interface KnockoutTemplateSourcesDomElement {
    text(): any;
    text(value: any): void;

    data(key: string): any;
    data(key: string, value: any): any;
}

interface KnockoutTemplateAnonymous extends KnockoutTemplateSourcesDomElement {
    nodes(): any;
    nodes(value: any): void;
}

interface KnockoutTemplateSources {

    domElement: {
        prototype: KnockoutTemplateSourcesDomElement
        new(element: Element): KnockoutTemplateSourcesDomElement
    };

    anonymousTemplate: {
        prototype: KnockoutTemplateAnonymous;
        new(element: Element): KnockoutTemplateAnonymous;
    };
}

//////////////////////////////////
// nativeTemplateEngine.js
//////////////////////////////////

interface KnockoutNativeTemplateEngine extends KnockoutTemplateEngine {

    renderTemplateSource(templateSource: Object, bindingContext?: KnockoutBindingContext, options?: Object): any[];
}

//////////////////////////////////
// templateEngine.js
//////////////////////////////////

interface KnockoutTemplateEngine {

    createJavaScriptEvaluatorBlock(script: string): string;

    makeTemplateSource(template: any, templateDocument?: Document): any;

    renderTemplate(template: any, bindingContext: KnockoutBindingContext, options: Object, templateDocument: Document): any;

    isTemplateRewritten(template: any, templateDocument: Document): boolean;

    rewriteTemplate(template: any, rewriterCallback: Function, templateDocument: Document): void;
}

//////////////////////////////////
// tasks.js
//////////////////////////////////

interface KnockoutTasks {
    scheduler: (callback: Function) => any;
    schedule(task: Function): number;
    cancel(handle: number): void;
    runEarly(): void;
}

/////////////////////////////////
interface KnockoutStatic {
    utils: KnockoutUtils;
    memoization: KnockoutMemoization;

    bindingHandlers: KnockoutBindingHandlers;
    getBindingHandler(handler: string): KnockoutBindingHandler;

    virtualElements: KnockoutVirtualElements;
    extenders: KnockoutExtenders;

    applyBindings(viewModelOrBindingContext?: any, rootNode?: any): void;
    applyBindingsToDescendants(viewModelOrBindingContext: any, rootNode: any): void;
    applyBindingAccessorsToNode(node: Node, bindings: (bindingContext: KnockoutBindingContext, node: Node) => {}, bindingContext: KnockoutBindingContext): void;
    applyBindingAccessorsToNode(node: Node, bindings: {}, bindingContext: KnockoutBindingContext): void;
    applyBindingAccessorsToNode(node: Node, bindings: (bindingContext: KnockoutBindingContext, node: Node) => {}, viewModel: any): void;
    applyBindingAccessorsToNode(node: Node, bindings: {}, viewModel: any): void;
    applyBindingsToNode(node: Node, bindings: any, viewModelOrBindingContext?: any): any;

    subscribable: KnockoutSubscribableStatic;
    observable: KnockoutObservableStatic;

    computed: KnockoutComputedStatic;
    /**
     * Creates a pure computed observable.
     * @param evaluatorFunction Function that computes the observable value.
     * @param context Defines the value of 'this' when evaluating the computed observable.
     */
    pureComputed<T>(evaluatorFunction: () => T, context?: any): KnockoutComputed<T>;
    /**
     * Creates a pure computed observable.
     * @param options An object that defines the computed observable options and behavior.
     * @param context Defines the value of 'this' when evaluating the computed observable.
     */
    pureComputed<T>(options: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>;

    observableArray: KnockoutObservableArrayStatic;

    /**
     * Evaluates if instance is a KnockoutSubscribable.
     * @param instance Instance to be evaluated.
     */
    isSubscribable(instance: any): instance is KnockoutSubscribable<any>;
    /**
     * Clones object substituting each observable for it's underlying value. Uses browser JSON.stringify internally to stringify the result.
     * @param viewModel Object with observables to be converted.
     * @param replacer A Function or array of names that alters the behavior of the stringification process.
     * @param space Used to insert white space into the output JSON string for readability purposes.
     */
    toJSON(viewModel: any, replacer?: Function | [string | number], space?: string | number): string;
    /**
     * Clones object substituting for each observable the current value of that observable.
     * @param viewModel Object with observables to be converted.
     */
    toJS(viewModel: any): any;
    /**
     * Determine if argument is an observable. Returns true for observables, observable arrays, and all computed observables.
     * @param instance Object to be checked.
     */
    isObservable(instance: any): instance is KnockoutObservable<any>;
    /**
     * Determine if argument is an observable. Returns true for observables, observable arrays, and all computed observables.
     * @param instance Object to be checked.
     */
    isObservable<T>(instance: KnockoutObservable<T> | T): instance is KnockoutObservable<T>;
    /**
     * Determine if argument is a writable observable. Returns true for observables, observable arrays, and writable computed observables.
     * @param instance Object to be checked.
     */
    isWriteableObservable(instance: any): instance is KnockoutObservable<any>;
    /**
     * Determine if argument is a writable observable. Returns true for observables, observable arrays, and writable computed observables.
     * @param instance Object to be checked.
     */
    isWriteableObservable<T>(instance: KnockoutObservable<T> | T): instance is KnockoutObservable<T>;
    /**
     * Determine if argument is a computed observable.
     * @param instance Object to be checked.
     */
    isComputed(instance: any): instance is KnockoutComputed<any>;
    /**
     * Determine if argument is a computed observable.
     * @param instance Object to be checked.
     */
    isComputed<T>(instance: KnockoutObservable<T> | T): instance is KnockoutComputed<T>;

    /**
     * Returns the data that was available for binding against the element.
     * @param node Html node that contains the binding context.
     */
    dataFor(node: Node): any;
    /**
     * Returns the entire binding context that was available to the DOM element.
     * @param node Html node that contains the binding context.
     */
    contextFor(node: Node): any;
    /**
     * Removes a node from the DOM.
     * @param node Node to be removed.
     */
    removeNode(node: Node): void;
    /**
     * Used internally by Knockout to clean up data/computeds that it created related to the element. It does not remove any event handlers added by bindings.
     * @param node Node to be cleaned.
     */
    cleanNode(node: Node): Node;
    renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any): any;
    renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any): any;
    /**
     * Returns the underlying value of the Knockout Observable or in case of plain js object, return the object. Use this to easily accept both observable and plain values.
     * @param instance observable to be unwraped if it's an Observable.
     */
    unwrap<T>(instance: KnockoutObservable<T> | T): T;
    /**
     * Gets the array inside the KnockoutObservableArray.
     * @param instance observable to be unwraped.
     */
    unwrap<T>(instance: KnockoutObservableArray<T> | T[]): T[];

    /**
     * Get information about the current computed property during the execution of a computed observable’s evaluator function.
     */
    computedContext: KnockoutComputedContext;

    //////////////////////////////////
    // templateSources.js
    //////////////////////////////////

    templateSources: KnockoutTemplateSources;

    //////////////////////////////////
    // templateEngine.js
    //////////////////////////////////

    templateEngine: {

        prototype: KnockoutTemplateEngine;

        new(): KnockoutTemplateEngine;
    };

    //////////////////////////////////
    // templateRewriting.js
    //////////////////////////////////

    templateRewriting: {

        ensureTemplateIsRewritten(template: Node, templateEngine: KnockoutTemplateEngine, templateDocument: Document): any;
        ensureTemplateIsRewritten(template: string, templateEngine: KnockoutTemplateEngine, templateDocument: Document): any;

        memoizeBindingAttributeSyntax(htmlString: string, templateEngine: KnockoutTemplateEngine): any;

        applyMemoizedBindingsToNextSibling(bindings: any, nodeName: string): string;
    };

    //////////////////////////////////
    // nativeTemplateEngine.js
    //////////////////////////////////

    nativeTemplateEngine: {

        prototype: KnockoutNativeTemplateEngine;

        new(): KnockoutNativeTemplateEngine;

        instance: KnockoutNativeTemplateEngine;
    };

    //////////////////////////////////
    // jqueryTmplTemplateEngine.js
    //////////////////////////////////

    jqueryTmplTemplateEngine: {

        prototype: KnockoutTemplateEngine;

        renderTemplateSource(templateSource: Object, bindingContext: KnockoutBindingContext, options: Object): Node[];

        createJavaScriptEvaluatorBlock(script: string): string;

        addTemplate(templateName: string, templateMarkup: string): void;
    };

    //////////////////////////////////
    // templating.js
    //////////////////////////////////

    setTemplateEngine(templateEngine: KnockoutNativeTemplateEngine | undefined): void;

    renderTemplate(template: Function, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    renderTemplate(template: any, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    renderTemplate(template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    renderTemplate(template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    renderTemplate(template: Function, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    renderTemplate(template: any, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    renderTemplate(template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    renderTemplate(template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;

    renderTemplateForEach(template: Function, arrayOrObservableArray: any[], options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    renderTemplateForEach(template: any, arrayOrObservableArray: any[], options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    renderTemplateForEach(template: Function, arrayOrObservableArray: KnockoutObservable<any>, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    renderTemplateForEach(template: any, arrayOrObservableArray: KnockoutObservable<any>, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;

    /**
     * Executes a callback function inside a computed observable, without creating a dependecy between it and the observables inside the function.
     * @param callback Function to be called.
     * @param callbackTarget Defines the value of 'this' in the callback function.
     * @param callbackArgs Arguments for the callback Function.
     */
    ignoreDependencies<T>(callback: () => T, callbackTarget?: any, callbackArgs?: any): T;

    expressionRewriting: {
        bindingRewriteValidators: any[];
        twoWayBindings: any;
        parseObjectLiteral: (objectLiteralString: string) => any[];

        /**
        Internal, private KO utility for updating model properties from within bindings
        property:            If the property being updated is (or might be) an observable, pass it here
                             If it turns out to be a writable observable, it will be written to directly
        allBindings:         An object with a get method to retrieve bindings in the current execution context.
                             This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
                             (See note below)
        key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
        value:               The value to be written
        checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
                             it is !== existing value on that writable observable

        Note that if you need to write to the viewModel without an observable property,
        you need to set ko.expressionRewriting.twoWayBindings[key] = true; *before* the binding evaluation.
        */
        writeValueToProperty: (property: KnockoutObservable<any> | any, allBindings: KnockoutAllBindingsAccessor, key: string, value: any, checkIfDifferent?: boolean) => void;
    };

    /////////////////////////////////

    bindingProvider: {
        instance: KnockoutBindingProvider;
        new(): KnockoutBindingProvider;
    }

    /////////////////////////////////
    // selectExtensions.js
    /////////////////////////////////

    selectExtensions: {

        readValue(element: HTMLElement): any;

        writeValue(element: HTMLElement, value: any, allowUnset?: boolean): void;
    };

    components: KnockoutComponents;

    /////////////////////////////////
    // options.js
    /////////////////////////////////

    options: {
        deferUpdates: boolean,

        useOnlyNativeEvents: boolean
    };

    /////////////////////////////////
    // tasks.js
    /////////////////////////////////

    tasks: KnockoutTasks;

    /////////////////////////////////
    // utils.js
    /////////////////////////////////

    onError?: (error: Error) => void;
}

interface KnockoutBindingProvider {
    nodeHasBindings(node: Node): boolean;
    getBindings(node: Node, bindingContext: KnockoutBindingContext): {};
    getBindingAccessors?(node: Node, bindingContext: KnockoutBindingContext): { [key: string]: string; };
}

interface KnockoutComputedContext {
    /**
     * Returns the number of dependencies of the computed observable detected so far during the current evaluation.
     */
    getDependenciesCount(): number;
    /**
     * A function that returns true if called during the first ever evaluation of the current computed observable, or false otherwise.
     * For pure computed observables, isInitial() is always undefined.
     */
    isInitial: () => boolean;
    isSleeping: boolean;
}

//
// refactored types into a namespace to reduce global pollution
// and used Union Types to simplify overloads (requires TypeScript 1.4)
//
declare namespace KnockoutComponentTypes {

    interface Config {
        viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
        template: string | Node[] | DocumentFragment | TemplateElement | AMDModule;
        synchronous?: boolean;
    }

    interface ComponentConfig {
        viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
        template: any;
        createViewModel?: any;
    }

    interface EmptyConfig {
    }

    // common AMD type
    interface AMDModule {
        require: string;
    }

    // viewmodel types
    interface ViewModelFunction {
        (params?: any): any;
    }

    interface ViewModelSharedInstance {
        instance: any;
    }

    interface ViewModelFactoryFunction {
        createViewModel: (params: any, componentInfo: ComponentInfo) => any;
    }

    interface ComponentInfo {
        element: Node;
        templateNodes: Node[];
    }

    interface TemplateElement {
        element: string | Node;
    }

    interface Loader {
        /**
         * Define this if: you want to supply configurations programmatically based on names, e.g., to implement a naming convention.
         * @see {@link https://knockoutjs.com/documentation/component-loaders.html}
         */
        getConfig?(componentName: string, callback: (result: ComponentConfig | null) => void): void;
        /**
         * Define this if: you want to take control over how component configurations are interpreted, e.g., if you do not want to use the standard 'viewModel/template' pair format.
         * @see {@link https://knockoutjs.com/documentation/component-loaders.html}
         */
        loadComponent?(componentName: string, config: ComponentConfig, callback: (result: Definition | null) => void): void;
        /**
         * Define this if: you want to use custom logic to supply DOM nodes for a given template configuration (e.g., using an ajax request to fetch a template by URL).
         * @see {@link https://knockoutjs.com/documentation/component-loaders.html}
         */
        loadTemplate?(componentName: string, templateConfig: any, callback: (result: Node[] | null) => void): void;
        /**
         * Define this if: you want to use custom logic to supply a viewmodel factory for a given viewmodel configuration (e.g., integrating with a third-party module loader or dependency injection system).
         * @see {@link https://knockoutjs.com/documentation/component-loaders.html}
         */
        loadViewModel?(componentName: string, viewModelConfig: any, callback: (result: any) => void): void;
        suppressLoaderExceptions?: boolean;
    }

    interface Definition {
        template: Node[];
        createViewModel?(params: any, options: { element: Node; }): any;
    }
}

interface KnockoutComponents {

    /**
     * Registers a component, in the default component loader, to be used by name in the component binding.
     * @param componentName Component name. Will be used for your custom HTML tag name.
     * @param config Component configuration.
     */
    register(componentName: string, config: KnockoutComponentTypes.Config | KnockoutComponentTypes.EmptyConfig): void;
    /**
     * Determine if a component with the specified name is already registered in the default component loader.
     * @param componentName Component name.
     */
    isRegistered(componentName: string): boolean;
    /**
     * Removes the named component from the default component loader registry. Or if no such component was registered, does nothing.
     * @param componentName Component name.
     */
    unregister(componentName: string): void;
    /**
     * Searchs each registered component loader by component name, and returns the viewmodel/template declaration via callback parameter.
     * @param componentName Component name.
     * @param callback Function to be called with the viewmodel/template declaration parameter.
     */
    get(componentName: string, callback: (definition: KnockoutComponentTypes.Definition) => void): void;
    /**
     * Clears the cache knockout creates to speed up component loading, for a given component.
     * @param componentName Component name.
     */
    clearCachedDefinition(componentName: string): void
    defaultLoader: KnockoutComponentTypes.Loader;
    loaders: KnockoutComponentTypes.Loader[];
    /**
     * Returns the registered component name for a HTML element. Can be overwriten to to control dynamically which HTML element map to which component name.
     * @param node html element that corresponds to a custom component.
     */
    getComponentNameForNode(node: Node): string;
}

declare var ko: KnockoutStatic;

declare module "knockout" {
    export = ko;
}
