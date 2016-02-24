﻿// Type definitions for Knockout v3.2.0
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Igor Oleinikov <https://github.com/Igorbek/>, Clément Bourgeois <https://github.com/moonpyk/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface KnockoutSubscribableFunctions<T> {
    [key: string]: KnockoutBindingHandler;

	notifySubscribers(valueToWrite?: T, event?: string): void;
}

interface KnockoutComputedFunctions<T> {
    [key: string]: KnockoutBindingHandler;
}

interface KnockoutObservableFunctions<T> {
    [key: string]: KnockoutBindingHandler;

	equalityComparer(a: any, b: any): boolean;
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
    reverse(): KnockoutObservableArray<T>;
    sort(): KnockoutObservableArray<T>;
    sort(compareFunction: (left: T, right: T) => number): KnockoutObservableArray<T>;

    // Ko specific
    [key: string]: KnockoutBindingHandler;

    replace(oldItem: T, newItem: T): void;

    remove(item: T): T[];
    remove(removeFunction: (item: T) => boolean): T[];
    removeAll(items: T[]): T[];
    removeAll(): T[];

    destroy(item: T): void;
    destroy(destroyFunction: (item: T) => boolean): void;
    destroyAll(items: T[]): void;
    destroyAll(): void;
}

interface KnockoutSubscribableStatic {
    fn: KnockoutSubscribableFunctions<any>;

    new <T>(): KnockoutSubscribable<T>;
}

interface KnockoutSubscription {
	dispose(): void;
}

interface KnockoutSubscribable<T> extends KnockoutSubscribableFunctions<T> {
	subscribe(callback: (newValue: T) => void, target?: any, event?: string): KnockoutSubscription;
	subscribe<TEvent>(callback: (newValue: TEvent) => void, target: any, event: string): KnockoutSubscription;
	extend(requestedExtenders: { [key: string]: any; }): KnockoutSubscribable<T>;
	getSubscriptionsCount(): number;
}

interface KnockoutComputedStatic {
    fn: KnockoutComputedFunctions<any>;

    <T>(): KnockoutComputed<T>;
    <T>(func: () => T, context?: any, options?: any): KnockoutComputed<T>;
    <T>(def: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>;
}

interface KnockoutComputed<T> extends KnockoutObservable<T>, KnockoutComputedFunctions<T> {
	fn: KnockoutComputedFunctions<any>;

	dispose(): void;
	isActive(): boolean;
	getDependenciesCount(): number;
    extend(requestedExtenders: { [key: string]: any; }): KnockoutComputed<T>;
}

interface KnockoutObservableArrayStatic {
    fn: KnockoutObservableArrayFunctions<any>;

    <T>(value?: T[]): KnockoutObservableArray<T>;
}

interface KnockoutObservableArray<T> extends KnockoutObservable<T[]>, KnockoutObservableArrayFunctions<T> {
    extend(requestedExtenders: { [key: string]: any; }): KnockoutObservableArray<T>;
}

interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions<any>;

    <T>(value?: T): KnockoutObservable<T>;
}

interface KnockoutObservable<T> extends KnockoutSubscribable<T>, KnockoutObservableFunctions<T> {
	(): T;
	(value: T): void;

	peek(): T;
	valueHasMutated?:{(): void;};
	valueWillMutate?:{(): void;};
    extend(requestedExtenders: { [key: string]: any; }): KnockoutObservable<T>;
}

interface KnockoutComputedDefine<T> {
	read(): T;
	write? (value: T): void;
	disposeWhenNodeIsRemoved?: Node;
	disposeWhen? (): boolean;
	owner?: any;
	deferEvaluation?: boolean;
	pure?: boolean;
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

    extend(properties: any): any;
    createChildContext(dataItemOrAccessor: any, dataItemAlias?: any, extendCallback?: Function): any;
}

interface KnockoutAllBindingsAccessor {
    (): any;
    get(name: string): any;
    has(name: string): boolean;
}

interface KnockoutBindingHandler {
    after?: Array<string>;
    init?: (element: any, valueAccessor: () => any, allBindingsAccessor?: KnockoutAllBindingsAccessor, viewModel?: any, bindingContext?: KnockoutBindingContext) => void | { controlsDescendantBindings: boolean; };
    update?: (element: any, valueAccessor: () => any, allBindingsAccessor?: KnockoutAllBindingsAccessor, viewModel?: any, bindingContext?: KnockoutBindingContext) => void;
    options?: any;
    preprocess?: (value: string, name: string, addBindingCallback?: (name: string, value: string) => void) => string;
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
    memoize(callback: () => string): string;
    unmemoize(memoId: string, callbackParams: any[]): boolean;
    unmemoizeDomNodeAndDescendants(domNode: any, extraCallbackParamsArray: any[]): boolean;
    parseMemoText(memoText: string): string;
}

interface KnockoutVirtualElement {}

interface KnockoutVirtualElements {
    allowedBindings: { [bindingName: string]: boolean; };
    emptyNode(node: KnockoutVirtualElement ): void;
    firstChild(node: KnockoutVirtualElement ): KnockoutVirtualElement;
    insertAfter( container: KnockoutVirtualElement, nodeToInsert: Node, insertAfter: Node ): void;
    nextSibling(node: KnockoutVirtualElement): Node;
    prepend(node: KnockoutVirtualElement, toInsert: Node ): void;
    setDomNodeChildren(node: KnockoutVirtualElement, newChildren: { length: number;[index: number]: Node; } ): void;
    childNodes(node: KnockoutVirtualElement ): Node[];
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
        get (node: Element, key: string): any;

        set (node: Element, key: string, value: any): void;

        getAll(node: Element, createIfNotFound: boolean): any;

        clear(node: Element): boolean;
    };

    //////////////////////////////////
    // utils.domNodeDisposal.js
    //////////////////////////////////

    domNodeDisposal: {
        addDisposeCallback(node: Element, callback: Function): void;

        removeDisposeCallback(node: Element, callback: Function): void;

        cleanNode(node: Node): Element;

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
    status: string;
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
	    new (element: Element): KnockoutTemplateSourcesDomElement
    };

    anonymousTemplate: {
		prototype: KnockoutTemplateAnonymous;
		new (element: Element): KnockoutTemplateAnonymous;
    };
}

//////////////////////////////////
// nativeTemplateEngine.js
//////////////////////////////////

interface KnockoutNativeTemplateEngine {

    renderTemplateSource(templateSource: Object, bindingContext?: KnockoutBindingContext, options?: Object): any[];
}

//////////////////////////////////
// templateEngine.js
//////////////////////////////////

interface KnockoutTemplateEngine extends KnockoutNativeTemplateEngine {

    createJavaScriptEvaluatorBlock(script: string): string;

    makeTemplateSource(template: any, templateDocument?: Document): any;

    renderTemplate(template: any, bindingContext: KnockoutBindingContext, options: Object, templateDocument: Document): any;

    isTemplateRewritten(template: any, templateDocument: Document): boolean;

    rewriteTemplate(template: any, rewriterCallback: Function, templateDocument: Document): void;
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
	pureComputed<T>(evaluatorFunction: () => T, context?: any): KnockoutComputed<T>;
	pureComputed<T>(options: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>;

    observableArray: KnockoutObservableArrayStatic;

    contextFor(node: any): any;
    isSubscribable(instance: any): boolean;
    toJSON(viewModel: any, replacer?: Function, space?: any): string;
    toJS(viewModel: any): any;
    isObservable(instance: any): boolean;
    isWriteableObservable(instance: any): boolean;
    isComputed(instance: any): boolean;
    dataFor(node: any): any;
    removeNode(node: Element): void;
    cleanNode(node: Element): Element;
    renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any): any;
    renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any): any;
	unwrap<T>(value: KnockoutObservable<T> | T): T;

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

        new (): KnockoutTemplateEngine;
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

        new (): KnockoutNativeTemplateEngine;

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

    setTemplateEngine(templateEngine: KnockoutNativeTemplateEngine): void;

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

    expressionRewriting: {
        bindingRewriteValidators: any;
        parseObjectLiteral: { (objectLiteralString: string): any[] }
    };

    /////////////////////////////////

	bindingProvider: {
		instance: KnockoutBindingProvider;
		new (): KnockoutBindingProvider;
	}

    /////////////////////////////////
    // selectExtensions.js
    /////////////////////////////////

    selectExtensions: {

        readValue(element: HTMLElement): any;

        writeValue(element: HTMLElement, value: any): void;
    };

    components: KnockoutComponents;
}

interface KnockoutBindingProvider {
	nodeHasBindings(node: Node): boolean;
	getBindings(node: Node, bindingContext: KnockoutBindingContext): {};
	getBindingAccessors?(node: Node, bindingContext: KnockoutBindingContext): { [key: string]: string; };
}

interface KnockoutComputedContext {
	getDependenciesCount(): number;
	isInitial: () => boolean;
	isSleeping: boolean;
}

//
// refactored types into a namespace to reduce global pollution
// and used Union Types to simplify overloads (requires TypeScript 1.4)
//
declare module KnockoutComponentTypes {

    interface Config {
        viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
        template: string | Node[]| DocumentFragment | TemplateElement | AMDModule;
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
        createViewModel: (params?: any, componentInfo?: ComponentInfo) => any;
    }

    interface ComponentInfo {
        element: Node;
        templateNodes: Node[];
    }

    interface TemplateElement {
        element: string | Node;
    }

    interface Loader {
        getConfig? (componentName: string, callback: (result: ComponentConfig) => void): void;
        loadComponent? (componentName: string, config: ComponentConfig, callback: (result: Definition) => void): void;
        loadTemplate? (componentName: string, templateConfig: any, callback: (result: Node[]) => void): void;
        loadViewModel? (componentName: string, viewModelConfig: any, callback: (result: any) => void): void;
        suppressLoaderExceptions?: boolean;
    }

    interface Definition {
        template: Node[];
        createViewModel? (params: any, options: { element: Node; }): any;
    }
}

interface KnockoutComponents {
    // overloads for register method:
    register(componentName: string, config: KnockoutComponentTypes.Config | KnockoutComponentTypes.EmptyConfig): void;

    isRegistered(componentName: string): boolean;
    unregister(componentName: string): void;
    get(componentName: string, callback: (definition: KnockoutComponentTypes.Definition) => void): void;
    clearCachedDefinition(componentName: string): void
    defaultLoader: KnockoutComponentTypes.Loader;
    loaders: KnockoutComponentTypes.Loader[];
    getComponentNameForNode(node: Node): string;
}

declare var ko: KnockoutStatic;

declare module "knockout" {
	export = ko;
}
