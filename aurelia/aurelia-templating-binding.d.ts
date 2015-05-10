declare module 'aurelia-templating-binding/syntax-interpreter' {
	export class SyntaxInterpreter {
	    static inject(): any[];
	    parser: any;
	    observerLocator: any;
	    eventManager: any;
	    attributeMap: any;
	    language: any;
	    constructor(parser: any, observerLocator: any, eventManager: any);
	    interpret(resources: any, element: any, info: any, existingInstruction: any): any;
	    handleUnknownCommand(resources: any, element: any, info: any, existingInstruction: any): any;
	    determineDefaultBindingMode(element: any, attrName: any): any;
	    bind(resources: any, element: any, info: any, existingInstruction: any): any;
	    trigger(resources: any, element: any, info: any): any;
	    delegate(resources: any, element: any, info: any): any;
	    call(resources: any, element: any, info: any, existingInstruction: any): any;
	    options(resources: any, element: any, info: any, existingInstruction: any): any;
	}

}
declare module 'aurelia-templating-binding/binding-language' {
	import { BindingLanguage } from 'aurelia-templating';
	export class TemplatingBindingLanguage extends BindingLanguage {
	    static inject(): any[];
	    parser: any;
	    observerLocator: any;
	    syntaxInterpreter: any;
	    emptyStringExpression: any;
	    attributeMap: any;
	    constructor(parser: any, observerLocator: any, syntaxInterpreter: any);
	    inspectAttribute(resources: any, attrName: any, attrValue: any): any;
	    createAttributeInstruction(resources: any, element: any, info: any, existingInstruction: any): any;
	    parseText(resources: any, value: any): InterpolationBindingExpression;
	    parseContent(resources: any, attrName: any, attrValue: any): InterpolationBindingExpression;
	}
	export class InterpolationBindingExpression {
	    observerLocator: any;
	    targetProperty: any;
	    parts: any;
	    mode: any;
	    valueConverterLookupFunction: any;
	    attribute: any;
	    discrete: any;
	    constructor(observerLocator: any, targetProperty: any, parts: any, mode: any, valueConverterLookupFunction: any, attribute: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-templating-binding/index' {
	export function configure(aurelia: any): void;
	export { TemplatingBindingLanguage } from 'aurelia-templating-binding/binding-language';
	export { SyntaxInterpreter } from 'aurelia-templating-binding/syntax-interpreter';

}
declare module 'aurelia-templating-binding' {
	export * from 'aurelia-templating-binding/index';
}
