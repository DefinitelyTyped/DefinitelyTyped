// Type definitions for Knockout 2.3
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface KnockoutPrototypeStatic<T> {
    new (): T;
    prototype: T;
}

interface KnockoutInstancePrototypeStatic<T> extends KnockoutPrototypeStatic<T> {
    instance: T;
}

interface KnockoutSubscribableFunctions<T> {
    subscribe(callback: (newValue: T) => void , target?: any, topic?: string): KnockoutSubscription<T>;
    notifySubscribers(valueToWrite: T, topic?: string): void;
    getSubscriptionsCount(): number;
    extend(source: any): any;
}

interface KnockoutComputedFunctions<T> { }

interface KnockoutObservableFunctions<T> {
    equalityComparer(a: T, b: T): boolean;
}

interface KnockoutObservableArrayFunctions<T> {
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

interface KnockoutSubscriptionStatic {
    new <T>(): KnockoutSubscription<T>;
}

interface KnockoutSubscription<T> {
    target: KnockoutSubscribable<T>;
    isDisposed?: boolean;
    callback: (newValue: T) => void;
    disposeCallback: () => void;

    dispose(): void;
}

interface KnockoutSubscribableStatic {
    fn: KnockoutSubscribableFunctions<any>;

    new <T>(): KnockoutSubscribable<T>;
}

interface KnockoutSubscribable<T> extends KnockoutSubscribableFunctions<T> {
    (): T;
    (value: T): void;
}

interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions<any>;

    <T>(value?: T): KnockoutObservable<T>;
}

interface KnockoutObservable<T> extends KnockoutSubscribable<T> {
    peek(): T;
    valueHasMutated(): void;
    valueWillMutate(): void;
}
interface KnockoutObservable<T> extends KnockoutObservableFunctions<T> { }

interface KnockoutObservableArrayStatic {
    fn: KnockoutObservableArrayFunctions<any>;

    <T>(value?: T[]): KnockoutObservableArray<T>;
}

interface KnockoutObservableArray<T> extends KnockoutObservable<T[]> { }
interface KnockoutObservableArray<T> extends KnockoutObservableArrayFunctions<T> { }

interface KnockoutComputedStatic {
    fn: KnockoutComputedFunctions<any>;

    <T>(): KnockoutComputed<T>;
    <T>(func: () => T, context?: any, options?: any): KnockoutComputed<T>;
    <T>(def: KnockoutComputedDefine<T>): KnockoutComputed<T>;
    (options?: any): KnockoutComputed<any>;
}

interface KnockoutComputed<T> extends KnockoutSubscribable<T> {
    peek(): T;
    dispose(): void;
    isActive(): boolean;
    getDependenciesCount(): number;
}
interface KnockoutComputed<T> extends KnockoutComputedFunctions<T> { }

interface KnockoutComputedDefine<T> {
    read(): T;
    write(value: T): void;

    disposeWhenNodeIsRemoved?: boolean;
    disposeWhen?: () => boolean;
    owner?: any;
    deferEvaluation?: boolean;
}

interface KnockoutBindingContext {
    $parent: any;
    $parents: any[];
    $root: any;
    $data: any;
    $index?: number;
    $parentContext?: KnockoutBindingContext;

    extend(properties: any): any;
    createChildContext(dataItem: any, dataItemAlias?: string): KnockoutBindingContext;
}

interface KnockoutBindingProvider {
    nodeHasBindings(node: Element): boolean;
    getBindings(node: Element, bindingContext: KnockoutBindingContext): { [key: string]: any };
    getBindingsString(node: Element, bindingContext: KnockoutBindingContext): string;
    getBindingAccessors(node: Element, bindingContext: KnockoutBindingContext): { [key: string]: any };
    parseBindingsString(bindingString: string, bindingContext: KnockoutBindingContext, node: Element, options?: any): { [key: string]: any };
}

interface KnockoutBindingHandler {
    init? (element: any, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void;
    update? (element: any, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void;
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
    memoize(callback: (any) => void ): string;
    unmemoize(memoId: string, callbackParams?: any[]): boolean;
    unmemoizeDomNodeAndDescendants(domNode: Element, extraCallbackParamsArray?: any[]): void;
    parseMemoText(memoText: string): string;
}

interface KnockoutSelectExtensions {
    readValue(element: Element): any;
    writeValue(element: Element, value: any): void;
}

interface KnockoutExpressionRewriting {
    bindingRewriteValidators: { [key: string]: (value: any) => any };
    parseObjectLiteral(objectLiteralString: string): any;
    preProcessBindings(objectLiteralStringOrKeyValueArray: string): any;
    preProcessBindings(objectLiteralStringOrKeyValueArray: any[]): any;
}

interface KnockoutVirtualElement { }

interface KnockoutVirtualElements {
    allowedBindings: { [bindingName: string]: boolean; };
    emptyNode(e: KnockoutVirtualElement);
    //firstChild( e: KnockoutVirtualElement ); firstChild is not minified
    insertAfter(container: KnockoutVirtualElement, nodeToInsert: HTMLElement, insertAfter: HTMLElement);
    //nextSibling( e: KnockoutVirtualElement ); nextSibling is not minified
    prepend(e: KnockoutVirtualElement, toInsert: HTMLElement);
    setDomNodeChildren(e: KnockoutVirtualElement, newChildren: { length: number;[index: number]: HTMLElement; });
    //childNodes( e: KnockoutVirtualElement ): HTMLElement[]; childNodes is not minified
}

interface KnockoutExtenders {
    [name: string]: any;

    throttle(target: any, timeout: number): KnockoutComputed<any>;
    notify(target: any, notifyWhen: string): any;
}

interface KnockoutUtils {

    //////////////////////////////////
    // utils.domManipulation.js
    //////////////////////////////////

    parseHtmlFragment(html: string): Element[];

    setHtml(node: Element, html: string): void;
    setHtml(node: Element, html: KnockoutSubscribable<string>): void;

    //////////////////////////////////
    // utils.domData.js
    //////////////////////////////////

    domData: {
        get(node: Element, key: string): any;

        set(node: Element, key: string, value: any): void;

        getAll(node: Element, createIfNotFound?: boolean): { [key: string]: any };

        clear(node: Element): boolean;
    };

    //////////////////////////////////
    // utils.domNodeDisposal.js
    //////////////////////////////////

    domNodeDisposal: {
        addDisposeCallback(node: Element, callback: Function): void;

        removeDisposeCallback(node: Element, callback: Function): void;

        cleanNode(node: Element): Element;

        removeNode(node: Element): void;
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
    arrayPushAll(array: KnockoutObservableArray<any>, valuesToPush: any[]): any[];

    compareArrays(oldArray: any[], newArray: any[], dontLimitMoves?: boolean): { status: string; value: any; index?: number }[];

    extend(target, source);

    objectForEach(obj: any, action: (any) => void );

    peekObservable(value: any): void;

    emptyDomNode(domNode): void;

    moveCleanedNodesToContainerElement(nodes: any[]): HTMLElement;

    cloneNodes(nodesArray: any[], shouldCleanNodes: boolean): any[];

    setDomNodeChildren(domNode: any, childNodes: any[]): void;

    replaceDomNodes(nodeToReplaceOrNodeArray: any, newNodesArray: any[]): void;

    setOptionNodeSelectionState(optionNode: any, isSelected: boolean): void;

    setDomNodeChildrenFromArrayMapping(domNode: Element, array: any[], mapping: any, options?: { dontLimitMove?: boolean; beforeMove?: (any) => any; beforeRemove?: (any) => any; afterMove?: (any) => any; afterAdd?: (any) => any; }, callbackAfterAddingNodes?: (entry: any, mappedNodes: Element[], index: KnockoutObservable<number>) => void ): void;

    stringTrim(str: string): string;

    stringTokenize(str: string, delimiter: string): string;

    stringStartsWith(str: string, startsWith: string): string;

    domNodeIsContainedBy(node: any, containedByNode: any): boolean;

    domNodeIsAttachedToDocument(node: any): boolean;

    tagNameLower(element: any): string;

    registerEventHandler(element: any, eventType: any, handler: Function): void;

    triggerEvent(element: any, eventType: string): void;

    registerEventHandler(element: any, eventType: string, handler: (any) => void );

    unwrapObservable<T>(value: KnockoutSubscribable<T>): T;
    unwrapObservable<T>(value: any): T;

    toggleDomNodeCssClass(node: any, classNames: string, shouldHaveClass?: boolean): void;

    //setTextContent(element: any, textContent: string): void; // NOT PART OF THE MINIFIED API SURFACE (ONLY IN knockout-{version}.debug.js) https://github.com/SteveSanderson/knockout/issues/670

    setElementName(element: any, name: string): void;

    forceRefresh(node: any): void;

    ensureSelectElementIsRenderedCorrectly(selectElement: any): void;

    range(min: any, max: any): any;

    makeArray(arrayLikeObject: any): any[];

    getFormFields(form: any, fieldName: string): any[];
    getFormFields(form: any, fieldName: RegExp): any[];

    parseJson(jsonString: string): any;

    stringifyJson(data: any, replacer?: Function, space?: string): string;

    postJson(urlOrForm: any, data: any, options?: any): void;

    ieVersion: number;

    isIe6: boolean;

    isIe7: boolean;
}

//////////////////////////////////
// templateRewriting.js
//////////////////////////////////

interface KnockoutTemplateRewriting {
    ensureTemplateIsRewritten(template: string, templateEngine: KnockoutTemplateEngine, templateDocument?: Document): void;
    ensureTemplateIsRewritten(template: Element, templateEngine: KnockoutTemplateEngine, templateDocument?: Document): void;

    memoizeBindingAttributeSyntax(htmlString: string, templateEngine: KnockoutTemplateEngine): string;
    applyMemoizedBindingsToNextSibling(bindings: any, nodeName: string): string;
}

//////////////////////////////////
// templateSources.js
//////////////////////////////////

interface KnockoutTemplateSourceStatic<T> {
    new (element: Element): T;
    prototype: T;
}

interface KnockoutTemplateSource {
    text(): string;
    text(valueToWrite: string): void;

    data(key: string): any;
    data(key: string, valueToWrite: any): void;
}

interface KnockoutTemplateSourceDomElement extends KnockoutTemplateSource {
    nodes(): any;
    nodes(valueToWrite: any): void;
}

interface KnockoutTemplateSourceAnonymousTemplate extends KnockoutTemplateSource {
    nodes(): any;
    nodes(valueToWrite: any): void;
}

interface KnockoutTemplateSources {
    domElement: KnockoutTemplateSourceStatic<KnockoutTemplateSourceDomElement>;
    anonymousTemplate: KnockoutTemplateSourceStatic<KnockoutTemplateSourceAnonymousTemplate>;
}

//////////////////////////////////
// templateEngine.js
//////////////////////////////////

declare enum KnockoutTemplateRenderModes {
    replaceChildren,
    replaceNode,
    ignoreTargetNode
}

interface KnockoutTemplateOptions {
    templateEngine?: KnockoutTemplateEngine;
    as?: string;
    dontLimitMoves?: boolean;

    afterRender?: (nodes: Element[], data: any) => void;
    afterAdd?: (nodes: Element[], data: any) => void;
    afterMove?: (nodes: Element[], data: any) => void;
    beforeRemove?: (nodes: Element[], data: any) => void;
    beforeMove?: (nodes: Element[], data: any) => void;
}

interface KnockoutTemplateEngine {
    allowTemplateRewriting?: boolean;

    renderTemplateSource(templateSource: KnockoutTemplateSource, bindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions): Element[];

    createJavaScriptEvaluatorBlock(script: string): void;

    makeTemplateSource(template: string, templateDocument?: Document): KnockoutTemplateSource;
    makeTemplateSource(template: Element, templateDocument?: Document): KnockoutTemplateSource;

    renderTemplate(template: string, bindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions, templateDocument?: Document): Element[];
    renderTemplate(template: Element, bindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions, templateDocument?: Document): Element[];

    isTemplateRewritten(template: string, templateDocument?: Document): boolean;
    isTemplateRewritten(template: Element, templateDocument?: Document): boolean;

    rewriteTemplate(template: string, rewriterCallback: (text: string) => string, templateDocument?: Document): void;
    rewriteTemplate(template: Element, rewriterCallback: (text: string) => string, templateDocument?: Document): void;
}

//////////////////////////////////
// nativeTemplateEngine.js
//////////////////////////////////

interface KnockoutNativeTemplateEngine extends KnockoutTemplateEngine { }

//////////////////////////////////
// jqueryTmplTemplateEngine.js
//////////////////////////////////

interface KnockoutJQueryTmplTemplateEngine extends KnockoutTemplateEngine {
    addTemplate(templateName: string, templateMarkup: string): void;
}

/////////////////////////////////

interface KnockoutStatic {
    utils: KnockoutUtils;
    memoization: KnockoutMemoization;
    selectExtensions: KnockoutSelectExtensions;
    expressionRewriting: KnockoutExpressionRewriting;
    bindingProvider: KnockoutInstancePrototypeStatic<KnockoutBindingProvider>;
    bindingHandlers: KnockoutBindingHandlers;
    virtualElements: KnockoutVirtualElements;
    extenders: KnockoutExtenders;

    applyBindings(viewModel: any, rootNode?: Element): void;
    applyBindingsToDescendants(viewModel: any, rootNode: Element): void;
    applyBindingsToNode(node: Element, bindings: any, viewModel: any): void;

    subscription: KnockoutSubscriptionStatic;
    subscribable: KnockoutSubscribableStatic;
    observable: KnockoutObservableStatic;
    computed: KnockoutComputedStatic;
    dependentObservable: KnockoutComputedStatic;
    observableArray: KnockoutObservableArrayStatic;

    toJS(viewModel: any): any;
    toJSON(viewModel: any, replacer?: Function, space?: any): string;

    dataFor(node: Element): any;
    contextFor(node: Element): KnockoutBindingContext;

    unwrap<T>(value: KnockoutSubscribable<T>): T;
    unwrap<T>(value: any): T;

    isSubscribable(instance: any): boolean;
    isObservable(instance: any): boolean;
    isWriteableObservable(instance: any): boolean;
    isComputed(instance: any): boolean;

    removeNode(node: Element);
    cleanNode(node: Element);

    renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any);
    renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any);

    templateSources: KnockoutTemplateSources;
    templateRewriting: KnockoutTemplateRewriting;
    templateEngine: KnockoutPrototypeStatic<KnockoutTemplateEngine>;
    nativeTemplateEngine: KnockoutInstancePrototypeStatic<KnockoutNativeTemplateEngine>;
    jqueryTmplTemplateEngine: KnockoutPrototypeStatic<KnockoutJQueryTmplTemplateEngine>;

    //////////////////////////////////
    // templating.js
    //////////////////////////////////

    setTemplateEngine(templateEngine: KnockoutTemplateEngine);

    renderTemplate(template: string, dataOrBindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions, targetNodeOrNodeArray?: Element, renderMode?: string): any;
    renderTemplate(template: string, dataOrBindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions, targetNodeOrNodeArray?: Element[], renderMode?: string): any;

    renderTemplate(template: Element, dataOrBindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions, targetNodeOrNodeArray?: Element, renderMode?: string): any;
    renderTemplate(template: Element, dataOrBindingContext: KnockoutBindingContext, options?: KnockoutTemplateOptions, targetNodeOrNodeArray?: Element[], renderMode?: string): any;


    renderTemplateForEach(template: string, arrayOrObservableArray: any[], options, targetNode: Element, parentBindingContext: KnockoutBindingContext): KnockoutComputed<string>;
    renderTemplateForEach(template: string, arrayOrObservableArray: KnockoutObservableArray<any>, options, targetNode: Element, parentBindingContext: KnockoutBindingContext): KnockoutComputed<string>;

    renderTemplateForEach(template: (value: any, itemContext: KnockoutBindingContext) => string, arrayOrObservableArray: any[], options, targetNode: Element, parentBindingContext: KnockoutBindingContext): KnockoutComputed<string>;
    renderTemplateForEach(template: (value: any, itemContext: KnockoutBindingContext) => string, arrayOrObservableArray: KnockoutObservableArray<any>, options, targetNode: Element, parentBindingContext: KnockoutBindingContext): KnockoutComputed<string>;

    renderTemplateForEach(template: Element, arrayOrObservableArray: any[], options, targetNode: Element, parentBindingContext: KnockoutBindingContext): KnockoutComputed<string>;
    renderTemplateForEach(template: Element, arrayOrObservableArray: KnockoutObservableArray<any>, options, targetNode: Element, parentBindingContext: KnockoutBindingContext): KnockoutComputed<string>;

    /////////////////////////////////

    __tr_ambtns(bindings: any, nodeName: string): string;
}

declare module "knockout" {
	export = ko;
}

declare var ko: KnockoutStatic;