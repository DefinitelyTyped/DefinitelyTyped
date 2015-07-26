/// <reference path="aurelia-metadata" />
/// <reference path="aurelia-loader" />


declare module 'aurelia-loader-default' {
  import { Origin }  from 'aurelia-metadata';
  import { Loader }  from 'aurelia-loader';
  export class DefaultLoader extends Loader {
    constructor();
    loadModule(id: any): any;
    loadAllModules(ids: any): any;
    loadTemplate(url: any): any;
    loadText(url: any): any;
  }
}