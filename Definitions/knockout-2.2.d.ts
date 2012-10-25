// Type definitions for Knockout 2.2
// Project: http://knockoutjs.com
// https://github.com/borisyankov/DefinitelyTyped


interface KnockoutSubscription {
    dispose(): void;
}

interface KnockoutObservableArrayFunctions {
    // General Array functions
    indexOf(searchElement, fromIndex?: number): number;
    slice(start: number, end?: number): any[];
    splice(start: number): any[];
    splice(start: number, deleteCount: number, ...items: any[]): any[];
    pop();
    push(...items: any[]): void;
    shift();
    unshift(...items: any[]): number;
    reverse(): any[];
    sort(): void;
    sort(compareFunction): void;

    // Ko specific
    remove(item): any[];
    removeAll(items: any[]): any[];
    removeAll(): any[];

    destroy(item): void;
    destroyAll(items: any[]): void;
    destroyAll(): void;
}

interface KnockoutObservableArray extends KnockoutObservableArrayFunctions {

    fn: KnockoutObservableArrayFunctions;

    (): KnockoutObservableArray;
    (value: any[]): KnockoutObservableArray;
}

interface KnockoutObservable {

    fn;

    (): any;
    (value): void;

    extend(source);
    subscribe(func: Function): KnockoutSubscription;
}

interface KnockoutComputed extends KnockoutObservable {
    (): KnockoutComputed;
    (func: Function, context?: any): KnockoutComputed;
    (def: KnockoutComputedDefine): KnockoutComputed;
    (options?: any): KnockoutComputed;

    subscribe(callback: (newValue: number) => void ): KnockoutSubscription;
    getDependenciesCount(): number;
    hasWriteFunction(): bool;
}

interface KnockoutComputedDefine {
    read(): any;
    write(any);
}

interface KnockoutBindingContext {
    $parent: any;
    $parents: any[];
    $root: any;
    $data: any;
    $index?: number;
    $parentContext?: KnockoutBindingContext;
}

interface KnockoutBindingHandler {
    // TODO: Work out how to define bindingHandlers when not using all the args
    // adding element?: any, etc doesnt work...
    //init(element: any, valueAccessor: any, allBindingsAccessor: any, viewModel: any, bindingContext: KnockoutBindingContext) : void;
    //update(element: any, valueAccessor: any, allBindingsAccessor: any, viewModel: any, bindingContext: KnockoutBindingContext) : void;
    init: any;
    update: any;
    options: any;
}

interface KnockoutBindingHandlers {
    value: KnockoutBindingHandler;
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

    domNodeDisposal;
}


interface KnockoutStatic {
    utils: KnockoutUtils;
    memoization: KnockoutMemoization;
    bindingHandlers: KnockoutBindingHandlers;

    computed: KnockoutComputed;
    observableArray: KnockoutObservableArray;
    virtualElements: KnockoutVirtualElements;
    extenders: KnockoutExtenders;

    applyBindings(viewModel: any, rootNode?: any): void;
    applyBindingsToDescendants(viewModel: any, rootNode: any): void;
    observable(intial? ): KnockoutObservable;
    contextFor(node: any): any;
    isSubscribable(instance: any): bool;
    subscribable(): void;
    toJSON(viewModel: any, replacer?: Function, space?: any): string;
    toJS(viewModel: any): any;
    isObservable(instance: any): bool;
    dataFor(node: any): any;
}

declare var ko: KnockoutStatic;