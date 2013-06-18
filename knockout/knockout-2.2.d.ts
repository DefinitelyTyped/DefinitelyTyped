// Type definitions for Knockout 2.2
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface KnockoutSubscribableFunctions {
    extend(source);
    dispose(): void;
    peek(): any;
    valueHasMutated(): void;

    valueWillMutate(): void;
}

interface KnockoutComputedFunctions extends KnockoutSubscribableFunctions {
    getDependenciesCount(): number;
    hasWriteFunction(): bool;
}

interface KnockoutObservableFunctions extends KnockoutSubscribableFunctions {
}

interface KnockoutObservableArrayFunctions<T> extends KnockoutObservableFunctions {
    // General Array functions
    indexOf(searchElement: T, fromIndex?: number): number;
    slice(start: number, end?: number): T[];
    splice(start: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    pop();
    push(...items: T[]): void;
    shift();
    unshift(...items: T[]): number;
    reverse(): T[];
    sort(): void;
    sort(compareFunction): void;

    // Ko specific
    replace(oldItem: T, newItem: T): void;

    remove(item): T[];
    removeAll(items: T[]): T[];
    removeAll(): T[];

    destroy(item: T): void;
    destroyAll(items: T[]): void;
    destroyAll(): void;
}

interface KnockoutSubscribableStatic {
    fn: KnockoutSubscribableFunctions;

    new (): KnockoutSubscription;
}

interface KnockoutSubscription extends KnockoutSubscribableFunctions {
    subscribe(callback: (newValue: any) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite, topic?: string);
}

interface KnockoutComputedStatic {
    fn: KnockoutComputedFunctions;

    <T>(): KnockoutComputed<T>;
    <T>(func: () => T, context?: any): KnockoutComputed<T>;
    <T>(def: KnockoutComputedDefine<T>): KnockoutComputed<T>;
    (options?: any): KnockoutComputed<any>;
}

interface KnockoutComputed<T> extends KnockoutComputedFunctions {
    (): T;
    (value: T): void;

    subscribe(callback: (newValue: T) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T, topic?: string);
}

interface KnockoutObservableArrayStatic {

    fn: KnockoutObservableArrayFunctions<any>;

    <T>(): KnockoutObservableArray<T>;
    <T>(value: T[]): KnockoutObservableArray<T>;
}

interface KnockoutObservableArray<T> extends KnockoutObservableArrayFunctions<T> {
    (): T[];
    (value: T[]): void;

    subscribe(callback: (newValue: T[]) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T[], topic?: string);
}

interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions;

    <T>(value: T): KnockoutObservable<T>;
}

interface KnockoutObservableBase extends KnockoutObservableFunctions {
}

interface KnockoutObservable<T> extends KnockoutObservableBase {
    (): T;
    (value: T): void;

    subscribe(callback: (newValue: T) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T, topic?: string);
}

interface KnockoutComputedDefine<T> {
    read(): T;
    write(T);
}

interface KnockoutBindingContext {
    $parent: any;
    $parents: any[];
    $root: any;
    $data: any;
    $index?: number;
    $parentContext?: KnockoutBindingContext;

    extend(any): any;
    createChildContext(any): any;
}

interface KnockoutBindingHandler {
    init?(element: any, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void;
    update?(element: any, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void;
    options?: any;
}

interface KnockoutBindingHandlers {
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
    hasfocus: KnockoutBindingHandler;
    checked: KnockoutBindingHandler;
    options: KnockoutBindingHandler;
    selectedOptions: KnockoutBindingHandler;
    uniqueName: KnockoutBindingHandler;

    // Rendering templates
    template: KnockoutBindingHandler;
}

interface KnockoutMemoization {
    memoize(callback);
    unmemoize(memoId, callbackParams);
    unmemoizeDomNodeAndDescendants(domNode, extraCallbackParamsArray);
    parseMemoText(memoText);
}

interface KnockoutVirtualElements {
    allowedBindings;
    emptyNode;
    firstChild;
    insertAfter;
    nextSibling;
    prepend;
    setDomNodeChildren;
}

interface KnockoutExtenders {
    throttle(target: any, timeout: number): KnockoutComputed;
    notify(target: any, notifyWhen: string): any;
}

interface KnockoutUtils {

    fieldsIncludedWithJsonPost: any[];

    arrayForEach(array: any[], action: (any) => void ): void;
    arrayIndexOf(array: any[], item: any): number;
    arrayFirst(array: any[], predicate: (item) => bool, predicateOwner?: any): any;
    arrayRemoveItem(array: any[], itemToRemove: any): void;
    arrayGetDistinctValues(array: any[]): any[];
    arrayMap(array: any[], mapping: (item) => any): any[];
    arrayFilter(array: any[], predicate: (item) => bool): any[];
    arrayPushAll(array: any[], valuesToPush: any[]): any[];

    extend(target, source);

    emptyDomNode(domNode): void;
    moveCleanedNodesToContainerElement(nodes: any[]): HTMLElement;
    cloneNodes(nodesArray: any[], shouldCleanNodes: bool): any[];
    setDomNodeChildren(domNode: any, childNodes: any[]): void;
    replaceDomNodes(nodeToReplaceOrNodeArray: any, newNodesArray: any[]): void;
    setOptionNodeSelectionState(optionNode: any, isSelected: bool): void;
    stringTrim(str: string): string;
    stringTokenize(str: string, delimiter: string): string;
    stringStartsWith(str: string, startsWith: string): string;
    domNodeIsContainedBy(node: any, containedByNode: any): bool;
    domNodeIsAttachedToDocument(node: any): bool;
    tagNameLower(element: any): string;
    registerEventHandler(element: any, eventType: any, handler: Function): void;
    triggerEvent(element: any, eventType: any): void;
    unwrapObservable(value: any): any;
    toggleDomNodeCssClass(node: any, className: string, shouldHaveClass: bool): void;
    setTextContent(element: any, textContent: string): void;
    setElementName(element: any, name: string): void;
    ensureSelectElementIsRenderedCorrectly(selectElement);
    forceRefresh(node: any): void;
    ensureSelectElementIsRenderedCorrectly(selectElement: any): void;
    range(min: any, max: any): any;
    makeArray(arrayLikeObject: any): any[];
    getFormFields(form: any, fieldName: string): any[];
    parseJson(jsonString: string): any;
    stringifyJson(data: any, replacer: Function, space: string): string;
    postJson(urlOrForm: any, data: any, options: any): void;

    ieVersion: number;
    isIe6: bool;
    isIe7: bool;

    domNodeDisposal;
}


interface KnockoutStatic {
    utils: KnockoutUtils;
    memoization: KnockoutMemoization;
    bindingHandlers: KnockoutBindingHandlers;
    virtualElements: KnockoutVirtualElements;
    extenders: KnockoutExtenders;

    applyBindings(viewModel: any, rootNode?: any): void;
    applyBindingsToDescendants(viewModel: any, rootNode: any): void;
    applyBindingsToNode(node: Element, options: any, viewModel: any): void;

    subscribable: KnockoutSubscribableStatic;
    observable: KnockoutObservableStatic;
    computed: KnockoutComputedStatic;
    observableArray: KnockoutObservableArrayStatic;

    contextFor(node: any): any;
    isSubscribable(instance: any): bool;
    toJSON(viewModel: any, replacer?: Function, space?: any): string;
    toJS(viewModel: any): any;
    isObservable(instance: any): bool;
    isComputed(instance: any): bool;
    dataFor(node: any): any;
    removeNode(node: Element);
    cleanNode(node: Element);
}

declare var ko: KnockoutStatic;