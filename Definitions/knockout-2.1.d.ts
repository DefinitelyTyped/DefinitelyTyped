// Type definitions for Knockout 2.1.0
// https://github.com/borisyankov/DefinitelyTyped

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
    (): any[];
    (value: any[]): void;
}

interface KnockoutObservableArrayStatic {
    (): KnockoutObservableArray;
    fn: KnockoutObservableArrayFunctions;
}

interface KnockoutObservable {
    (): any;
    (value): void;

    subscribe(func: Function): void;
}

interface KnockoutComputed extends KnockoutObservable {
}

interface KnockoutComputedDefine {
    read(): any;
    write(any);
}

interface KnockoutComputedStatic {
    (): KnockoutComputed;
    (func: Function): KnockoutComputed;
    (def: KnockoutComputedDefine) : KnockoutComputed;
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
}

interface KnockoutBindingHandlers {
    value: KnockoutBindingHandler;
}

interface KnockoutStatic {
    utils: KnockoutUtilsStatic;
    bindingHandlers: KnockoutBindingHandlers;
    applyBindings(viewModel, rootNode?);
    computed : KnockoutComputedStatic;
    observableArray: KnockoutObservableArrayStatic;
    observable(intial?): KnockoutObservable;
}

interface KnockoutUtilsStatic {
    arrayForEach(array: any[], action);
    arrayIndexOf(array: any[], item);
    arrayFirst(array: any[], predicate, predicateOwner?);
    arrayRemoveItem(array: any[], itemToRemove);
    arrayGetDistinctValues(array: any[]);
    arrayMap(array: any[], mapping);
    arrayFilter(array: any[], predicate);
    arrayPushAll(array: any[], valuesToPush);
    extend(target, source);
    emptyDomNode(domNode);
    moveCleanedNodesToContainerElement(nodes);
    setDomNodeChildren(domNode, childNodes);
    replaceDomNodes(nodeToReplaceOrNodeArray, newNodesArray);
    setOptionNodeSelectionState(optionNode, isSelected);
    stringTrim(str: string);
    stringTokenize(str: string, delimiter);
    stringStartsWith(str: string, startsWith);
    buildEvalWithinScopeFunction(expression, scopeLevels);
    domNodeIsContainedBy(node, containedByNode);
    domNodeIsAttachedToDocument(node);
    tagNameLower(element);
    registerEventHandler(element, eventType, handler);
    triggerEvent(element, eventType);
    unwrapObservable(value);
    toggleDomNodeCssClass(node, className, shouldHaveClass);
    setTextContent(element, textContent);
    ensureSelectElementIsRenderedCorrectly(selectElement);
    range(min, max);
    makeArray(arrayLikeObject);
    getFormFields(form, fieldName);
    parseJson(jsonString);
    stringifyJson(data, replacer, space);
    postJson(urlOrForm, data, options);
}

declare var ko: KnockoutStatic;