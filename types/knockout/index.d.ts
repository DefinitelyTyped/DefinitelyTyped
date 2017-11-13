// Type definitions for Knockout v3.4.0
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
//                 Igor Oleinikov <https://github.com/Igorbek/>
//                 Clément Bourgeois <https://github.com/moonpyk/>
//                 Matt Brooks <https://github.com/EnableSoftware>
//                 Benjamin Eckardt <https://github.com/BenjaminEckardt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface KnockoutExtensionFunctions {
    [key: string]: any;
}

interface KnockoutSubscribableFunctions<T> extends KnockoutExtensionFunctions {
    notifySubscribers(valueToWrite?: T, event?: string): void;
}

interface KnockoutComputedFunctions<T> extends KnockoutExtensionFunctions {
}

interface KnockoutObservableFunctions<T> extends KnockoutExtensionFunctions {
    equalityComparer(a: any, b: any): boolean;
}

interface KnockoutObservableArrayFunctions<T> extends KnockoutExtensionFunctions {
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
    subscribe(callback: (newValue: T) => void, target: any, event: "beforeChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T) => void, target?: any, event?: "change"): KnockoutSubscription;
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

    <T>(value?: T[] | null): KnockoutObservableArray<T>;
}

interface KnockoutObservableArray<T> extends KnockoutObservable<T[]>, KnockoutObservableArrayFunctions<T> {
    subscribe(callback: (newValue: KnockoutArrayChange<T>[]) => void, target: any, event: "arrayChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T[]) => void, target: any, event: "beforeChange"): KnockoutSubscription;
    subscribe(callback: (newValue: T[]) => void, target?: any, event?: "change"): KnockoutSubscription;
    subscribe<TEvent>(callback: (newValue: TEvent) => void, target: any, event: string): KnockoutSubscription;

    extend(requestedExtenders: { [key: string]: any; }): KnockoutObservableArray<T>;
}

interface KnockoutObservableStatic {
    fn: KnockoutObservableFunctions<any>;

    <T>(value?: T | null): KnockoutObservable<T>;
}

interface KnockoutObservable<T> extends KnockoutSubscribable<T>, KnockoutObservableFunctions<T> {
    (): T;
    (value: T | null): void;

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
    init?: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => void | { controlsDescendantBindings: boolean; };
    update?: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => void;
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
    pureComputed<T>(evaluatorFunction: () => T, context?: any): KnockoutComputed<T>;
    pureComputed<T>(options: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>;

    observableArray: KnockoutObservableArrayStatic;

    contextFor(node: any): any;
    isSubscribable(instance: any): instance is KnockoutSubscribable<any>;
    toJSON(viewModel: any, replacer?: Function, space?: any): string;
    toJS(viewModel: any): any;
    isObservable(instance: any): instance is KnockoutObservable<any>;
    isWriteableObservable(instance: any): instance is KnockoutObservable<any>;
    isComputed(instance: any): instance is KnockoutComputed<any>;
    dataFor(node: any): any;
    removeNode(node: Node): void;
    cleanNode(node: Node): Node;
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

    ignoreDependencies<T>(callback: () => T): T;

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
        new (): KnockoutBindingProvider;
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
    getDependenciesCount(): number;
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
        getConfig? (componentName: string, callback: (result: ComponentConfig | null) => void): void;
        loadComponent? (componentName: string, config: ComponentConfig, callback: (result: Definition | null) => void): void;
        loadTemplate? (componentName: string, templateConfig: any, callback: (result: Node[] | null) => void): void;
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
