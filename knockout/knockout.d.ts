// Type definitions for Knockout 2.2
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface KnockoutSubscription {
    dispose(): void;
}
interface KnockoutSubscribableFunctions<T> {
    extend(source);
    notifySubscribers<T>(valueToNotify:T, event?: string): void;
}
interface KnockoutSubscribable<T> extends KnockoutSubscribableFunctions<T> {
    subscribe(callback: (newValue: T) => void , callbackTarget?: any, event?: string): KnockoutSubscription;
    getSubscriptionsCount(): number;
    extend(requestedExtenders): any;
}
interface KnockoutSubscribableStatic {
    fn: KnockoutSubscribableFunctions<any>;
    new <T>(): KnockoutSubscribable<T>;
}




interface KnockoutObservableFunctions<T> extends KnockoutSubscribableFunctions<T> {
    equalityComparer(a:T, b:T): boolean;
}
interface KnockoutObservable<T> extends KnockoutSubscribable<T>, KnockoutObservableFunctions<T> {
    (): T;
    (value: T): void;
    peek(): T;
    valueHasMutated(): void;
    valueWillMutate(): void;
}
interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions<any>;
    <T>(value?: T): KnockoutObservable<T>;
}





interface KnockoutObservableArrayFunctions<T> extends KnockoutObservableFunctions {
    destroy(predicate: (value: T) => boolean);
    destroyAll(values: Array<T>);
    indexOf(searchElement: T, fromIndex?: number): number;
    pop():T;
    push(...items: T[]): void;
    remove(value: T);
    remove(predicate: (value: T) => boolean);
    removeAll(values?: T[]): T[];
    replace(oldItem: T, newItem: T): void;
    reverse(): T[];
    shift():T;
    slice(start: number, end?: number): T[];
    sort(compareFunction?: (a: T, b: T) => number): T[];
    splice(start: number, deleteCount?: number, ...items: T[]): T[];
    unshift(...items: T[]): number;
}
interface KnockoutObservableArray<T> extends KnockoutObservableArrayFunctions<T> {
    (): T[];
    (value: T[]): void;

    subscribe(callback: (newValue: T[]) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T[], topic?: string);
}
interface KnockoutObservableArrayStatic {
    fn: KnockoutObservableArrayFunctions<any>;
    <T>(value?: T[]): KnockoutObservableArray<T>;
}




interface KnockoutComputedDefine<T> {
    read(): T;
    write(T);
}

interface KnockoutComputedFunctions extends KnockoutSubscribableFunctions {
    getDependenciesCount(): number;
    hasWriteFunction(): boolean;
}
interface KnockoutComputed<T> extends KnockoutComputedFunctions {
    (): T;
    (value: T): void;

    subscribe(callback: (newValue: T) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T, topic?: string);
}
interface KnockoutComputedStatic {
    fn: KnockoutComputedFunctions;

    <T>(): KnockoutComputed<T>;
    <T>(func: () => T, context?: any, options?: any): KnockoutComputed<T>;
    <T>(def: KnockoutComputedDefine<T>): KnockoutComputed<T>;
    (options?: any): KnockoutComputed<any>;
}




interface KnockoutExtenders {
    throttle(target: any, timeout: number): KnockoutComputed;
    notify(target: any, notifyWhen: string): any;
}



interface KnockoutUtils {

    //////////////////////////////////
    // utils.domManipulation.js
    //////////////////////////////////

    simpleHtmlParse(html: string);

    jQueryHtmlParse(html: string);

    parseHtmlFragment(html: string);

    setHtml(node: Element, html: string): void;

    setHtml(node: Element, html: () => string): void;

    //////////////////////////////////
    // utils.domData.js
    //////////////////////////////////

    domData: {
        get(node: Element, key: string);

        set(node: Element, key: string, value: any);

        getAll(node: Element, createIfNotFound: boolean);

        clear(node: Element);
    };

    //////////////////////////////////
    // utils.domNodeDisposal.js
    //////////////////////////////////

    domNodeDisposal: {
        addDisposeCallback(node: Element, callback: Function);

        removeDisposeCallback(node: Element, callback: Function);

        cleanNode(node: Element);

        removeNode(node: Element);
    };

    //////////////////////////////////
    // utils.js
    //////////////////////////////////

    fieldsIncludedWithJsonPost: any[];

    arrayForEach(array: any[], action: (any) => void ): void;

    arrayIndexOf(array: any[], item: any): number;

    arrayFirst(array: any[], predicate: (item) => boolean, predicateOwner?: any): any;

    arrayRemoveItem(array: any[], itemToRemove: any): void;

    arrayGetDistinctValues(array: any[]): any[];

    arrayMap(array: any[], mapping: (item) => any): any[];

    arrayFilter(array: any[], predicate: (item) => boolean): any[];

    arrayPushAll(array: any[], valuesToPush: any[]): any[];

    extend(target, source);

    emptyDomNode(domNode): void;

    moveCleanedNodesToContainerElement(nodes: any[]): HTMLElement;

    cloneNodes(nodesArray: any[], shouldCleanNodes: boolean): any[];

    setDomNodeChildren(domNode: any, childNodes: any[]): void;

    replaceDomNodes(nodeToReplaceOrNodeArray: any, newNodesArray: any[]): void;

    setOptionNodeSelectionState(optionNode: any, isSelected: boolean): void;

    stringTrim(str: string): string;

    stringTokenize(str: string, delimiter: string): string;

    stringStartsWith(str: string, startsWith: string): string;

    domNodeIsContainedBy(node: any, containedByNode: any): boolean;

    domNodeIsAttachedToDocument(node: any): boolean;

    tagNameLower(element: any): string;

    registerEventHandler(element: any, eventType: any, handler: Function): void;

    triggerEvent(element: any, eventType: any): void;

    unwrapObservable(value: any): any;

    toggleDomNodeCssClass(node: any, className: string, shouldHaveClass: boolean): void;

    //setTextContent(element: any, textContent: string): void; // NOT PART OF THE MINIFIED API SURFACE (ONLY IN knockout-{version}.debug.js) https://github.com/SteveSanderson/knockout/issues/670

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

    isIe6: boolean;

    isIe7: boolean;
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

interface KnockoutVirtualElement {}

interface KnockoutVirtualElements {
    allowedBindings: { [bindingName: string]: boolean; };
    emptyNode( e: KnockoutVirtualElement );
    firstChild( e: KnockoutVirtualElement );
    insertAfter( container: KnockoutVirtualElement, nodeToInsert: HTMLElement, insertAfter: HTMLElement );
    nextSibling( e: KnockoutVirtualElement );
    prepend( e: KnockoutVirtualElement, toInsert: HTMLElement );
    setDomNodeChildren( e: KnockoutVirtualElement, newChildren: { length: number;[index: number]: HTMLElement; } );
    childNodes( e: KnockoutVirtualElement ): HTMLElement[];
}


//////////////////////////////////
// templateSources.js
//////////////////////////////////

interface KnockoutTemplateSourcesDomElement {

    text(valueToWrite?);

    data(key, valueToWrite?);
}


interface KnockoutTemplateSources {

    domElement: KnockoutTemplateSourcesDomElement;

    anonymousTemplate: {

        prototype: KnockoutTemplateSourcesDomElement;

        new (element: Element): KnockoutTemplateSourcesDomElement;
    };
}

//////////////////////////////////
// nativeTemplateEngine.js
//////////////////////////////////

interface KnockoutNativeTemplateEngine {

    renderTemplateSource(templateSource, bindingContext, options?);
}

//////////////////////////////////
// templateEngine.js
//////////////////////////////////

interface KnockoutTemplateEngine extends KnockoutNativeTemplateEngine {

    createJavaScriptEvaluatorBlock(script: string);

    makeTemplateSource(template, templateDocument);

    renderTemplate(template, bindingContext, options, templateDocument);

    isTemplateRewritten(template, templateDocument): boolean;

    rewriteTemplate(template, rewriterCallback, templateDocument);
}

/////////////////////////////////

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
    isSubscribable(instance: any): boolean;
    toJSON(viewModel: any, replacer?: Function, space?: any): string;
    toJS(viewModel: any): any;
    isObservable(instance: any): boolean;
    isComputed(instance: any): boolean;
    dataFor(node: any): any;
    removeNode(node: Element);
    cleanNode(node: Element);
    renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any);
    renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any);

    //////////////////////////////////
    // templateSources.js
    //////////////////////////////////

    templateSources: KnockoutTemplateSources;

    //////////////////////////////////
    // templateEngine.js
    //////////////////////////////////

    templateEngine: {

        prototype: KnockoutTemplateEngine;

        new (): KnockoutTemplateEngine;
    };

    //////////////////////////////////
    // templateRewriting.js
    //////////////////////////////////

    templateRewriting: {

        ensureTemplateIsRewritten(template, templateEngine, templateDocument);

        memoizeBindingAttributeSyntax(htmlString: string, templateEngine: KnockoutTemplateEngine);

        applyMemoizedBindingsToNextSibling(bindings);
    };

    //////////////////////////////////
    // nativeTemplateEngine.js
    //////////////////////////////////

    nativeTemplateEngine: {

        prototype: KnockoutNativeTemplateEngine;

        new (): KnockoutNativeTemplateEngine;

        instance: KnockoutNativeTemplateEngine;
    };

    //////////////////////////////////
    // jqueryTmplTemplateEngine.js
    //////////////////////////////////

    jqueryTmplTemplateEngine: {

        prototype: KnockoutTemplateEngine;

        renderTemplateSource(templateSource, bindingContext, options);

        createJavaScriptEvaluatorBlock(script: string): string;

        addTemplate(templateName, templateMarkup);
    };

    //////////////////////////////////
    // templating.js
    //////////////////////////////////

    setTemplateEngine(templateEngine: KnockoutNativeTemplateEngine);

    renderTemplate(template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode);

    renderTemplateForEach(template, arrayOrObservableArray, options, targetNode, parentBindingContext);

    expressionRewriting: {
        bindingRewriteValidators: any;
    };

    /////////////////////////////////

    bindingProvider: any;
}

declare var ko: KnockoutStatic;
