// Type definitions for Knockout 2.2 (as an AMD module)
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'knockout' {

    export interface KnockoutSubscribableFunctions {
        extend(source);
        dispose(): void;
        peek(): any;
        valueHasMutated(): void;
        valueWillMutate(): void;
    }
    export interface KnockoutComputedFunctions extends KnockoutSubscribableFunctions {
        getDependenciesCount(): number;
        hasWriteFunction(): bool;
    }
    export interface KnockoutObservableFunctions extends KnockoutSubscribableFunctions {
    }
    export interface KnockoutObservableArrayFunctions extends KnockoutObservableFunctions {
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
        replace(oldItem: any, newItem: any): void;
        remove(item): any[];
        removeAll(items: any[]): any[];
        removeAll(): any[];
        destroy(item): void;
        destroyAll(items: any[]): void;
        destroyAll(): void;
    }
    export interface KnockoutSubscribableStatic {
        fn: KnockoutSubscribableFunctions;
        new (): KnockoutSubscription;
    }
    export interface KnockoutSubscription extends KnockoutSubscribableFunctions {
        subscribe(callback: (newValue: any) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite, topic?: string);
    }
    export interface KnockoutComputedStatic {
        fn: KnockoutComputedFunctions;
        (): KnockoutComputed;
        (func: Function, context?: any, options?: any): KnockoutComputed;
        (def: KnockoutComputedDefine): KnockoutComputed;
        (options?: any): KnockoutComputed;
    }
    export interface KnockoutComputed extends KnockoutObservableAny, KnockoutComputedFunctions {
        (): any;
        (value): void;
    }
    export interface KnockoutObservableArrayStatic {
        fn: KnockoutObservableArrayFunctions;
        (): KnockoutObservableArray;
        (value: any[]): KnockoutObservableArray;
        new (): KnockoutObservableArray;
        new (value: any[]): KnockoutObservableArray;
    }
    export interface KnockoutObservableArray extends KnockoutObservableArrayFunctions {
        (): any[];
        (value: any[]): void;
        subscribe(callback: (newValue: any[]) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: any[], topic?: string);
    }
    export interface KnockoutObservableStatic {
        fn: KnockoutObservableFunctions;
        (value: string): KnockoutObservableString;
        (value: Date): KnockoutObservableDate;
        (value: number): KnockoutObservableNumber;
        (value: bool): KnockoutObservableBool;
        (value?: any): KnockoutObservableAny;
        new (value: string): KnockoutObservableString;
        new (value: Date): KnockoutObservableDate;
        new (value: number): KnockoutObservableNumber;
        new (value: bool): KnockoutObservableBool;
        new (value?: any): KnockoutObservableAny;
    }
    /** use as method to get/set the value */
    export interface KnockoutObservableBase extends KnockoutObservableFunctions {
        getSubscriptionsCount(): number;
    }
    /** use as method to get/set the value
    can cast to a more appropriate (typed) interface such as KnockoutObservableString  or KnockoutObservableNumber
    */
    export interface KnockoutObservableAny extends KnockoutObservableBase {
        (): any;
        (value): void;
        subscribe(callback: (newValue: any) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite, topic?: string);
    }
    export interface KnockoutObservableString extends KnockoutObservableBase {
        (): string;
        (value: string): void;
        subscribe(callback: (newValue: string) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: string, topic?: string);
    }
    export interface KnockoutObservableObject extends KnockoutObservableBase {
        (): {};
        (value: {}): void;
        subscribe(callback: (newValue: {}) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: {}, topic?: string);
    }
    export interface KnockoutObservableNumber extends KnockoutObservableBase {
        (): number;
        (value: number): void;
        subscribe(callback: (newValue: number) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: number, topic?: string);
    }
    export interface KnockoutObservableBool extends KnockoutObservableBase {
        (): bool;
        (value: bool): void;
        subscribe(callback: (newValue: bool) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: bool, topic?: string);
    }
    export interface KnockoutObservableDate extends KnockoutObservableBase {
        (): Date;
        (value: Date): void;
        subscribe(callback: (newValue: Date) => void , target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: Date, topic?: string);
    }
    export interface KnockoutComputedDefine {
        read(): any;
        write(any);
    }
    export interface KnockoutBindingContext {
        $parent: any;
        $parents: any[];
        $root: any;
        $data: any;
        $index?: number;
        $parentContext?: KnockoutBindingContext;
        extend(any): any;
        createChildContext(any): any;
    }
    export interface KnockoutBindingHandler {
        init? (element: any, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void;
        update? (element: any, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void;
        options?: any;
    }
    export interface KnockoutBindingHandlers {
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
    export interface KnockoutMemoization {
        memoize(callback);
        unmemoize(memoId, callbackParams);
        unmemoizeDomNodeAndDescendants(domNode, extraCallbackParamsArray);
        parseMemoText(memoText);
    }
    export interface KnockoutVirtualElement {}
    export interface KnockoutVirtualElements {
        allowedBindings: { [bindingName: string]: bool; };
        emptyNode(e: KnockoutVirtualElement);
        firstChild(e: KnockoutVirtualElement);
        insertAfter(container: KnockoutVirtualElement, nodeToInsert: HTMLElement, insertAfter: HTMLElement);
        nextSibling(e: KnockoutVirtualElement);
        prepend(e: KnockoutVirtualElement, toInsert: HTMLElement);
        setDomNodeChildren(e: KnockoutVirtualElement, newChildren: { length: number;[index: number]: HTMLElement; });
    }
    export interface KnockoutExtenders {
        throttle(target: any, timeout: number): KnockoutComputed;
        notify(target: any, notifyWhen: string): any;
    }
    export interface KnockoutUtils {
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
            getAll(node: Element, createIfNotFound: bool);
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
        isIe6: bool;
        isIe7: bool;
    }
    //////////////////////////////////
    // templateSources.js
    //////////////////////////////////
    export interface KnockoutTemplateSourcesDomElement {
        text(valueToWrite?);
        data(key, valueToWrite?);
    }
    export interface KnockoutTemplateSources {
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
    export interface KnockoutTemplateEngine extends KnockoutNativeTemplateEngine {
        createJavaScriptEvaluatorBlock(script: string);
        makeTemplateSource(template, templateDocument);
        renderTemplate(template, bindingContext, options, templateDocument);
        isTemplateRewritten(template, templateDocument): bool;
        rewriteTemplate(template, rewriterCallback, templateDocument);
    }

    export var utils: KnockoutUtils;
    export var memoization: KnockoutMemoization;
    export var bindingHandlers: KnockoutBindingHandlers;
    export var virtualElements: KnockoutVirtualElements;
    export var extenders: KnockoutExtenders;
    export function applyBindings(viewModel: any, rootNode?: any): void;
    export function applyBindingsToDescendants(viewModel: any, rootNode: any): void;
    export function applyBindingsToNode(node: Element, options: any, viewModel: any): void;
    export var subscribable: KnockoutSubscribableStatic;
    export var observable: KnockoutObservableStatic;
    export var computed: KnockoutComputedStatic;
    export var observableArray: KnockoutObservableArrayStatic;
    export function contextFor(node: any): any;
    export function isSubscribable(instance: any): bool;
    export function toJSON(viewModel: any, replacer?: Function, space?: any): string;
    export function toJS(viewModel: any): any;
    export function isObservable(instance: any): bool;
    export function isComputed(instance: any): bool;
    export function dataFor(node: any): any;
    export function removeNode(node: Element);
    export function cleanNode(node: Element);
    export function renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any);
    export function renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any);

    //////////////////////////////////
    //// templateSources.js
    ////////////////////////////////////
    export var templateSources: KnockoutTemplateSources;
    ////////////////////////////////////
    //// templateEngine.js
    ////////////////////////////////////
    export var templateEngine: {
        prototype: KnockoutTemplateEngine;
        new (): KnockoutTemplateEngine;
    };
    ////////////////////////////////////
    //// templateRewriting.js
    ////////////////////////////////////
    export var templateRewriting: {
        ensureTemplateIsRewritten(template, templateEngine, templateDocument);
        memoizeBindingAttributeSyntax(htmlString: string, templateEngine: KnockoutTemplateEngine);
        applyMemoizedBindingsToNextSibling(bindings);
    };
    ////////////////////////////////////
    //// nativeTemplateEngine.js
    ////////////////////////////////////
    export var nativeTemplateEngine: {
        prototype: KnockoutNativeTemplateEngine;
        new (): KnockoutNativeTemplateEngine;
        instance: KnockoutNativeTemplateEngine;
    };
    ////////////////////////////////////
    //// jqueryTmplTemplateEngine.js
    ////////////////////////////////////
    export var jqueryTmplTemplateEngine: {
        prototype: KnockoutTemplateEngine;
        renderTemplateSource(templateSource, bindingContext, options);
        createJavaScriptEvaluatorBlock(script: string): string;
        addTemplate(templateName, templateMarkup);
    };
    ////////////////////////////////////
    //// templating.js
    ////////////////////////////////////
    export function setTemplateEngine(templateEngine: KnockoutNativeTemplateEngine);
    export function renderTemplate(template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode);
    export function renderTemplateForEach(template, arrayOrObservableArray, options, targetNode, parentBindingContext);
    export var expressionRewriting: {
        bindingRewriteValidators: any;
    };

    ///////////////////////////////////
    export var bindingProvider: any;
}