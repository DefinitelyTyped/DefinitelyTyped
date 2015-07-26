/// <reference path="aurelia-path" />


declare module 'aurelia-loader' {
  //import * as core from 'core-js';
  import { relativeToFile }  from 'aurelia-path';
  import { Origin }  from 'aurelia-metadata';
  export class TemplateDependency {
    constructor(src: string, name?: string);
  }
  export class TemplateRegistryEntry {
    constructor(id: string);
    templateIsLoaded(): boolean;
    isReady(): boolean;
    setTemplate(template: Element): void;
    addDependency(src: string | Function, name?: string): void;
    setResources(resources: any): void;
    setFactory(factory: any): void;
  }
  export class Loader {
    constructor();
    loadModule(id: any): any;
    loadAllModules(ids: any): any;
    loadTemplate(url: any): any;
    loadText(url: any): any;
    getOrCreateTemplateRegistryEntry(id: any): any;
    importDocument(url: any): any;
    importBundle(link: any): any;
    importTemplate(url: any): any;
    findTemplate(doc: any, url: any): any;
    findBundledTemplate(name: any, entry: any): any;
  }
}
