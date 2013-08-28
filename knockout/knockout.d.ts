// Type definitions for Knockout 2.3
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
    getSubscriptionsCount(): number;
    hasWriteFunction(): boolean;
}

interface KnockoutObservableFunctions extends KnockoutSubscribableFunctions {
}

interface KnockoutObservableArrayFunctions<T> extends KnockoutObservableFunctions {
    // General Array functions
    indexOf(searchElement: T, fromIndex?: number): number;
    slice(start: number, end?: number): T[];
    splice(start: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    pop(): T;
    push(...items: T[]): void;
    shift(): T;
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
    <T>(func: () => T, context?: any, options?: any): ReadonlyKnockoutComputed<T>;
    <T>(def: KnockoutComputedDefine<T>): KnockoutComputed<T>;
    (options?: any): KnockoutComputed<any>;
}

interface ReadonlyKnockoutComputed<T> extends KnockoutComputedFunctions {
    (): T;

    subscribe(callback: (newValue: T) => void, target?: any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T, topic?: string);
}

interface KnockoutComputed<T> extends ReadonlyKnockoutComputed<T> {
    (value: T): void;
}

interface KnockoutObservableArrayStatic {

    fn: KnockoutObservableArrayFunctions<any>;

    <T>(value?: T[]): KnockoutObservableArray<T>;
}

interface KnockoutObservableArray<T> extends KnockoutObservableArrayFunctions<T> {
    (): T[];
    (value: T[]): void;

    subscribe(callback: (newValue: T[]) => void, target?:any, topic?: string): KnockoutSubscription;
    notifySubscribers(valueToWrite: T[], topic?: string);
}

interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions;

    <T>(value?: T): KnockoutObservable<T>;
}

/** use as method to get/set the value */
interface KnockoutObservableBase extends KnockoutObservableFunctions {
    getSubscriptionsCount(): number;
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

interface KnockoutExtenders {
    throttle(target: any, timeout: number): KnockoutComputed<any>;
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
        get (node: Element, key: string);

        set (node: Element, key: string, value: any);

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
    
    arrayPushAll(array: KnockoutObservableArray<any>, valuesToPush: any[]): any[];

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

    unwrapObservable<T>(value: KnockoutObservable<T>): T;

    toggleDomNodeCssClass(node: any, className: string, shouldHaveClass: boolean): void;

    //setTextContent(element: any, textContent: string): void; // NOT PART OF THE MINIFIED API SURFACE (ONLY IN knockout-{version}.debug.js) https://github.com/SteveSanderson/knockout/issues/670

    setElementName(element: any, name: string): void;

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
    isWriteableObservable(instance: any): boolean;
    isComputed(instance: any): boolean;
    dataFor(node: any): any;
    removeNode(node: Element);
    cleanNode(node: Element);
    renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any);
    renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any);
    unwrap(value: any): any;

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

    /////////////////////////////////
    // selectExtensions.js
    /////////////////////////////////

    selectExtensions: {

        readValue(element: any);

        writeValue(element: any, value: any);
    };
}

declare module "knockout" {
	export = ko;
}

declare var ko: KnockoutStatic;
