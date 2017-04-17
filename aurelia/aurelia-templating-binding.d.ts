/// <reference path="aurelia-templating" />
/// <reference path="aurelia-logging" />


declare module 'aurelia-templating-binding' {
  import { Parser, ObserverLocator, EventManager, ListenerExpression, BindingExpression, NameExpression, CallExpression, bindingMode }  from 'aurelia-binding';
  import { BindingLanguage }  from 'aurelia-templating';
  import * as LogManager from 'aurelia-logging';
  export class SyntaxInterpreter {
    static inject(): any;
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
  export class TemplatingBindingLanguage extends BindingLanguage {
    static inject(): any;
    constructor(parser: any, observerLocator: any, syntaxInterpreter: any);
    inspectAttribute(resources: any, attrName: any, attrValue: any): any;
    createAttributeInstruction(resources: any, element: any, info: any, existingInstruction: any): any;
    parseText(resources: any, value: any): any;
    parseContent(resources: any, attrName: any, attrValue: any): any;
  }
  export class InterpolationBindingExpression {
    constructor(observerLocator: any, targetProperty: any, parts: any, mode: any, valueConverterLookupFunction: any, attribute: any);
    createBinding(target: any): any;
  }
  class InterpolationBinding {
    constructor(observerLocator: any, parts: any, target: any, targetProperty: any, mode: any, valueConverterLookupFunction: any);
    getObserver(obj: any, propertyName: any): any;
    bind(source: any): any;
    setValue(): any;
    partChanged(newValue: any, oldValue: any, connecting: any): any;
    connect(): any;
    interpolate(): any;
    unbind(): any;
  }
  export function configure(aurelia: any): any;
}