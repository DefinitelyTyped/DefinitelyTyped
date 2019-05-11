// Type definitions for JsViews 1.0
// Project: http://www.jsviews.com/#jsviews
// Definitions by: Boris Moore <https://github.com/borismoore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="jsrender" />

declare module 'jsviews' {
  export = jsviews;
}

declare const jsviews: ((jquery?: JQueryStatic) => JQueryStatic) & JQueryStatic;

// ********************************** JsObservable **********************************

interface JQueryStatic {
  /* $.observable() */
  observable: JsViews.Observable;

  /* $.observe() */
  observe: JsViews.Observe;

  /* $.unobserve() */
  unobserve: JsViews.Unobserve;
}

declare namespace JsViews {

interface Observable {
  /* $.observable(array) */
  (data: any[]): ArrayObservable;
  (ns: string, data: any[]): ArrayObservable;

  /* $.observable(object) */
  (data: any): ObjectObservable;
  (ns: string, data: any): ObjectObservable;
}

interface Observe {
  /* $.observe(...) */
  (object: any[], handler: ChangeHandler<ArrayEvtArgs>): any;
  (object: object, path: string, handler: ChangeHandler<EvtArgs>): any;
  (object: object, path: string, path2: string, handler: ChangeHandler<EvtArgs>): any;
  (object: object, path: string, path2: string, path3: string, handler: ChangeHandler<EvtArgs>): any;
  (object: object, path: string, path2: string, path3: string, path4: string, handler: ChangeHandler<EvtArgs>): any;
  (object: object, ...restOf: any[]): any;

  (ns: string, object: any[], handler: ChangeHandler<ArrayEvtArgs>): any;
  (ns: string, object: object, path: string, handler: ChangeHandler<EvtArgs>): any;
  (ns: string, object: object, ...restOf: any[]): any;
}

interface Unobserve {
  /* $.unobserve(...) */
  (object: any[], handler?: ChangeHandler<ArrayEvtArgs>): any;
  (object: object, path?: string, handler?: ChangeHandler<EvtArgs>): any;
  (object: object, handler: ChangeHandler<EvtArgs>): any;
  (object: object, ...restOf: any[]): any;
  (handler?: ChangeHandler<EvtArgs>): any;

  (ns: string, object: any[], handler?: ChangeHandler<ArrayEvtArgs>): any;
  (ns: string, object: object, path?: string, handler?: ChangeHandler<EvtArgs>): any;
  (ns: string, object: object, handler: ChangeHandler<EvtArgs>): any;
  (ns: string, object: object, ...restOf: any[]): any;
  (ns: string, handler?: ChangeHandler<EvtArgs>): any;
}

interface ObjectObservable {
  /* Observable object, returned by $.observable(object) */
  setProperty(path: string, value: any): ObjectObservable;
  setProperty(values: Hash<any>): ObjectObservable;
  observeAll(handler: ChangeHandler<EvtArgs>, filter?: FilterHandler): void;
  unobserveAll(handler?: ChangeHandler<EvtArgs>, filter?: FilterHandler): void;
  removeProperty(path: string): ObjectObservable;
}

interface ArrayObservable {
  /* Observable array, returned by $.observable(array) */
  insert(index: number, data: any): ArrayObservable;
  insert(data: any): ArrayObservable;
  refresh(newItems: any[]): ArrayObservable;
  remove(index?: number, numToRemove?: number): ArrayObservable;
  move(oldIndex: number, newIndex: number, numToRemove?: number): ArrayObservable;
  observeAll(handler: ChangeHandler<EvtArgs>, filter?: FilterHandler): void;
  unobserveAll(handler?: ChangeHandler<EvtArgs>, filter?: FilterHandler): void;
}

interface FilterHandler {
  /* Filter function (callback handler) passed to observeAll(...) */
  (path: string, ob: any, parentObs: Array<{ [prop: string]: any }>): void;
}

interface ChangeHandler<T> {
  /* Change handler function passed to $.observe() or $.observable.observeAll() */
  (ev: EventObject, eventArgs: T): void;
}

interface EventObject {
  /* jQuery event object, ev, passed to observable change handler */
  target: any;
  data: EventMetaData;
  type: string;
  [propName: string]: any;
}

interface PropEvtArgs {
  /* JsViews event object, eventArgs, passed to observable change handler for property change */
  change: string;
  path?: string;
  value?: any;
  oldValue?: any;
  remove?: boolean;
}
interface ArrayEvtArgs {
  /* JsViews event object, eventArgs, passed to observable change handler for array change */
  change: string;
  index?: number;
  oldIndex?: number;
  items?: any[];
  numToRemove?: number;
  oldItems?: any[];
  refresh?: boolean;
}

interface EvtArgs extends PropEvtArgs, ArrayEvtArgs {
  /* JsViews event object, eventArgs, passed to observable change handler for either object or array change */
}

interface EventMetaData {
  /* JsViews metadata on jQuery event object, ev.data, passed to change handler for $.observe() */
  ns: string;
  fullPath: string;
  prop: string;
  paths: string[];
  observeAll?: ObserveAllMeta;
  [propName: string]: any;
}

interface ObserveAllMeta {
  /* JsViews metadata on jQuery event object, ev.data, passed to change handler  for $.observable().observeAll() */
  path: () => string;
  parents: () => any[];
  [propName: string]: any;
}

} // end namespace

// ********************************** JsViews **********************************

interface JQueryStatic {
  /* var view = $.view(elemOrSelector); // Get view object from DOM node */
  view: JsViews.GetView;

  /* $.link(template, container, data) // Render and link contents */
  link: JsViews.Link;

  /* $.unlink(container) // Unlink contents */
  unlink(container?: any): void;
}

interface JQuery {
  /* var view = $(elemOrSelector).view(); // Get view object from DOM node */
  /* $(elemOrSelector).view("array"); // Get parent view object of chosen type, from DOM node */
  view(type?: string): JsViews.View;

  /* $(elemOrSelector).view(true, "array"); // Get inner view object of chosen type, from DOM node */
  view(inner: boolean, type?: string): JsViews.View;

  /* $(elemOrSelector).link(template, data ...) // Render and link contents - Undocumented */
  link(tmpl: JsViews.Template, data?: any, helpersOrContext?: JsViews.Hash<any>, noIteration?: boolean): JQuery;
  link(tmpl: JsViews.Template, data: any, noIteration: boolean): JQuery; // Undocumented

  /* $(elemOrSelector).link(true, data ...) // Render and link contents */
  /* $(elemOrSelector).link(true, data ...) // Render and link contents */
  link(expression: boolean|string, data?: any, helpersOrContext?: JsViews.Hash<any>): JQuery;

  /* $(elemOrSelector).unlink() // Unlink contents */
  unlink(): void;
}

declare namespace JsViews {

/* $.views.settings*/
interface Settings {
  /**
   * Set trigger mode
   * $.views.settings.trigger(true)
   *
   * @param {boolean}  trigger
   * @returns {Settings}
   */
    trigger(trigger: boolean): Settings;

  /**
   * Get trigger setting
   * trigger = $.views.settings.trigger()
   *
   * @returns {boolean}
   */
  trigger(): boolean;
}

interface dependsFunction {
  /* tag depends option, handler function */
  (data: any, callback: ChangeHandler<EvtArgs>): string | any[] | void;
}

interface TagOptions {
  /* Tag options hash */
  dataBoundOnly?: boolean;
  boundProps?: string[];
  depends?: string | any[] | dependsFunction;
  mapProps?: string[];
  mapDepends?: string | any[] | dependsFunction;
  setSize?: boolean;

  height?: string | number;
  width?: string | number;
  className?: string;

  linkedElement?: string | string[];
  linkedCtxParam?: string | string[];
  mainElement?: string;
  displayElement?: string;
  trigger?: boolean | string;
  attr?: string;

  dataMap?: any;
  lateRender?: boolean;

  onBind?: (this: TagInst, tagCtx: TagCtx, linkCtx: LinkCtx, ctx: Context, ev: EventObject, eventArgs: EvtArgs) => void ;
  onAfterLink?: (this: TagInst, tagCtx: TagCtx, linkCtx: LinkCtx, ctx: Context, ev: EventObject, eventArgs: EvtArgs) => void ;
  onUpdate?: boolean | ((this: TagInst, ev: EventObject, eventArgs: EvtArgs, tagCtxs: TagCtx[]) => any);

  onDispose?: (this: TagInst) => void ;

  convertBack?: string | Converter;
  onUnbind?: (this: TagInst, tagCtx: TagCtx, linkCtx: LinkCtx, ctx: Context, ev: EventObject, eventArgs: EvtArgs) => void ;
  onBeforeUpdateVal?: (this: TagInst, ev: EventObject, eventArgs: EvtArgs) => boolean | void ;
  onBeforeChange?: (this: TagInst, ev: EventObject, eventArgs: EvtArgs) => boolean | void ;
  onAfterChange?: (this: TagInst, ev: EventObject, eventArgs: EvtArgs) => void ;
  onArrayChange?: (this: TagInst, ev: EventObject, eventArgs: EvtArgs) => void ;
  setValue?: (this: TagInst, value: any, index?: number, elseBlock?: number) => void ;
  domChange?: (this: TagInst, ...args: any[]) => void;
}

interface Tag {
  /* Tag object */
  init?: (this: Tag, tagCtx?: TagCtx, linkCtx?: LinkCtx, ctx?: Context) => void;
  linkCtx?: LinkCtx;
  parentElem: HTMLElement;
  linkedElems: JQuery[];
  linkedElem: JQuery;
  mainElem: JQuery;
  displayElem: JQuery;
  inline: boolean;

  refresh(): Tag;
  nodes(): any[];
  contents(deep?: boolean, selectorOrNode?: string|Node|JQuery): JQuery;
  contents(selectorOrNode?: string|Node|JQuery): JQuery;
  childTags(deep?: boolean, tagName?: string): Tag[];
  childTags(tagName?: string): Tag[];
  setValue(newValue: any, index?: number, elseBlock?: number): Tag;
  setValues(...args: any[]): Tag;
  updateValue(newValue: any, index?: number, elseBlock?: number): Tag;
  updateValues(...args: any[]): Tag;
}

interface TagCtx {
  /* tagCtx object */

  linkedElems: JQuery[];
  mainElem: JQuery;
  displayElem: JQuery;
  contentView: View;
  nodes(): any[];
  contents(deep?: boolean, selectorOrNode?: string|Node|JQuery): JQuery;
  contents(selectorOrNode?: string|Node|JQuery): JQuery;
  childTags(deep?: boolean, tagName?: string): Tag[];
  childTags(tagName?: string): Tag[];
  setValues(...args: any[]): void;
}

interface LinkCtx {
  /* linkCtx object */

  /* Current data item */
  data: any;

  /* Data-linked element */
  elem: HTMLElement;

  /* Current view (containing this data-linked element) */
  view: View;

  /* Target attribute or property on HTML element */
  attr: string;

  /* Data-link expression */
  expr?: string;

  /* Tag instance (for data-link tag expressions) */
  tag?: Tag;

  /* Tag instance (for data-link tag expressions) */
  ctx: Context;

  /* "inline" "link" "top" "expr" */
  type: string;
}

interface View {
  /* view object */
  addViews(index: number, dataItems: any[], tmpl?: Template): View;
  removeViews(index?: number, itemsCount?: number, keepNodes?: boolean): View;
  refresh(): View;
  nodes(): any[];
  contents(deep?: boolean, selectorOrNode?: string|Node|JQuery): JQuery;
  contents(selectorOrNode?: string|Node|JQuery): JQuery;
  childTags(deep?: boolean, tagName?: string): Tag[];
  childTags(tagName?: string): Tag[];
  // link(data: any, parentNode: any, prevNode: any, nextNode: any, html: string, refresh?: boolean): any[]; // Undocumented...
}

interface GetView {
  // $.view() returns top view
  // $.view(node) returns view that contains node
  // $.view(selector) returns view that contains first selected element
  // $.view(nodeOrSelector, type) returns nearest containing view of given type
  // $.view(nodeOrSelector, "root") returns root containing view (child of top view)
  // $.view(nodeOrSelector, true, type) returns nearest inner (contained) view of given type

  (selectorOrNode?: string|Node|JQuery, type?: string): View;
  (selectorOrNode: string|Node|JQuery, inner: boolean, type?: string): View;
}

interface Link {
  /* $.link(template, container, data ...) // Render and link contents - Undocumented */
  (tmpl: Template, container: string|Node|JQuery, data?: any, helpersOrContext?: Hash<any>, noIteration?: boolean): JQuery;
  (tmpl: Template, container: string|Node|JQuery, data: any, noIteration: boolean): JQuery;

  /* $.link(true, container, data) // Link existing contents */
  /* $.link(expression, container, data) // Link existing contents */
  (expression: boolean|string, container: string|Node|JQuery, data?: any, helpersOrContext?: Hash<any>): JQuery;

  /* $.link.templateName("#container", data); // Link named template */
  [tmplName: string]: TemplateLink;
}

interface TemplateLink {
  /* $.link.templateName("#container", data); // Link named template */
  (container: string|Node|JQuery, data?: any, helpersOrContext?: Hash<any>, noIteration?: boolean): JQuery;
  (container: string|Node|JQuery, data: any, noIteration: boolean): JQuery;
}

interface Template {
  /* template.link(container, data); // Render and link contents */
  link: TemplateLink;
}

interface GetSet {
  /* Interface for casting a function to a JsViews get/set computed function, as in:
   *
   * var fullName = function() { ... } as JsViews.GetSet;
   * fullName.depends = ...;
   * fullName.set = ...;
   */
  (...args: any[]): any;
  set: any;
  depends: any;
}

} // end namespace
