declare module 'aurelia-metadata' {
  //import * as core from 'core-js';

  /**
  * Provides helpers for working with metadata.
  *
  * @class Metadata
  * @static
  */
  export var Metadata: any;

  /**
  * A metadata annotation that describes the origin module of the function to which it's attached.
  *
  * @class Origin
  * @constructor
  * @param {string} moduleId The origin module id.
  * @param {string} moduleMember The name of the export in the origin module.
  */
  export class Origin {
    constructor(moduleId: string, moduleMember: string);

    /**
      * Get the Origin annotation for the specified function.
      *
      * @method get
      * @static
      * @param {Function} fn The function to inspect for Origin metadata.
      * @return {Origin} Returns the Origin metadata.
      */
    static get(fn: Function): any;

    /**
      * Set the Origin annotation for the specified function.
      *
      * @method set
      * @static
      * @param {Function} fn The function to set the Origin metadata on.
      * @param {origin} fn The Origin metadata to store on the function.
      * @return {Origin} Returns the Origin metadata.
      */
    static set(fn: Function, origin: Origin): any;
  }
  export class DecoratorApplicator {
    constructor();
    decorator(decorator: Function): DecoratorApplicator;
  }
  export var Decorators: any;
}
