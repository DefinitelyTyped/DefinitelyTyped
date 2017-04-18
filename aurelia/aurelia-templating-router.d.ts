// Type definitions for aurelia-templating-router v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/templating-router/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-logging.d.ts" />
/// <reference path="./aurelia-templating.d.ts" />
/// <reference path="./aurelia-dependency-injection.d.ts" />
/// <reference path="./aurelia-router.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />
/// <reference path="./aurelia-metadata.d.ts" />
/// <reference path="./aurelia-path.d.ts" />

declare module 'aurelia-templating-router' {
  import * as LogManager from 'aurelia-logging';
  import {
    customAttribute,
    bindable,
    ViewSlot,
    ViewLocator,
    customElement,
    noView,
    BehaviorInstruction,
    CompositionTransaction,
    CompositionEngine
  } from 'aurelia-templating';
  import {
    inject,
    Container
  } from 'aurelia-dependency-injection';
  import {
    Router,
    RouteLoader
  } from 'aurelia-router';
  import {
    DOM
  } from 'aurelia-pal';
  import {
    Origin
  } from 'aurelia-metadata';
  import {
    relativeToFile
  } from 'aurelia-path';
  export class RouteHref {
    constructor(router: any, element: any);
    bind(): any;
    unbind(): any;
    attributeChanged(value: any, previous: any): any;
    processChange(): any;
  }
  export class RouterView {
    swapOrder: any;
    constructor(element: any, container: any, viewSlot: any, router: any, viewLocator: any, compositionTransaction: any);
    created(owningView: any): any;
    bind(bindingContext: any, overrideContext: any): any;
    process(viewPortInstruction: any, waitToSwap: any): any;
    swap(viewPortInstruction: any): any;
  }
  export class TemplatingRouteLoader extends RouteLoader {
    constructor(compositionEngine: any);
    loadRoute(router: any, config: any): any;
  }
}