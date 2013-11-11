// Type definitions for Knockout 2.2 (as an AMD module)
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
///<reference path="knockout.d.ts" />

declare module 'knockout' {
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
    export function isSubscribable(instance: any): boolean;
    export function toJSON(viewModel: any, replacer?: Function, space?: any): string;
    export function toJS(viewModel: any): any;
    export function isObservable(instance: any): boolean;
    export function isComputed(instance: any): boolean;
    export function dataFor(node: any): any;
    export function removeNode(node: Element): void;
    export function cleanNode(node: Element): Element;
    export function renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any): any;
    export function renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any): any;

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
        ensureTemplateIsRewritten(template: Node, templateEngine: KnockoutTemplateEngine, templateDocument: Document): any;
        ensureTemplateIsRewritten(template: string, templateEngine: KnockoutTemplateEngine, templateDocument: Document): any;
        memoizeBindingAttributeSyntax(htmlString: string, templateEngine: KnockoutTemplateEngine): any;
        applyMemoizedBindingsToNextSibling(bindings: any, nodeName: string): string;
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
        renderTemplateSource(templateSource: Object, bindingContext: KnockoutBindingContext, options: Object): Node[];
        createJavaScriptEvaluatorBlock(script: string): string;
        addTemplate(templateName: string, templateMarkup: string): void;
    };
    ////////////////////////////////////
    //// templating.js
    ////////////////////////////////////
    export function renderTemplate(template: Function, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    export function renderTemplate(template: any, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    export function renderTemplate(template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    export function renderTemplate(template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
    export function renderTemplate(template: Function, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    export function renderTemplate(template: any, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    export function renderTemplate(template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    export function renderTemplate(template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
    export function renderTemplateForEach(template: Function, arrayOrObservableArray: Array, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    export function renderTemplateForEach(template: any, arrayOrObservableArray: Array, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    export function renderTemplateForEach(template: Function, arrayOrObservableArray: KnockoutObservable<Array>, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    export function renderTemplateForEach(template: any, arrayOrObservableArray: KnockoutObservable < Array>, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext): any;
    export var expressionRewriting: {
        bindingRewriteValidators: any;
    };

    ///////////////////////////////////
    export var bindingProvider: any;
}