// Type definitions for aurelia-metadata v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/metadata/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-pal.d.ts" />

declare module 'aurelia-metadata' {
  import {
    PLATFORM
  } from 'aurelia-pal';
  
  /**
  * Helpers for working with metadata on functions.
  */
  export interface MetadataType {
    
    /**
      * The metadata key representing pluggable resources.
      */
    resource: string;
    
    /**
      * The metadata key representing parameter type information.
      */
    paramTypes: string;
    
    /**
      * The metadata key representing property information.
      */
    properties: string;
    
    /**
      * Gets metadata specified by a key on a target, searching up the inheritance hierarchy.
      * @param metadataKey The key for the metadata to lookup.
      * @param target The target to lookup the metadata on.
      * @param targetKey The member on the target to lookup the metadata on.
      */
    get(metadataKey: string, target: Function, targetKey: string): Object;
    
    /**
      * Gets metadata specified by a key on a target, only searching the own instance.
      * @param metadataKey The key for the metadata to lookup.
      * @param target The target to lookup the metadata on.
      * @param targetKey The member on the target to lookup the metadata on.
      */
    getOwn(metadataKey: string, target: Function, targetKey: string): Object;
    
    /**
      * Defines metadata specified by a key on a target.
      * @param metadataKey The key for the metadata to define.
      * @param target The target to set the metadata on.
      * @param targetKey The member on the target to set the metadata on.
      */
    define(metadataKey: string, metadataValue: Object, target: Function, targetKey: string): void;
    
    /**
      * Gets metadata specified by a key on a target, or creates an instance of the specified metadata if not found.
      * @param metadataKey The key for the metadata to lookup or create.
      * @param Type The type of metadata to create if existing metadata is not found.
      * @param target The target to lookup or create the metadata on.
      * @param targetKey The member on the target to lookup or create the metadata on.
      */
    getOrCreateOwn(metadataKey: string, Type: Function, target: Function, targetKey: string): Object;
  }
  
  /**
  * An object capable of applying it's captured decorators to a target.
  */
  export interface DecoratorApplicator {
    
    /**
      * Applies the decorators to the target.
      * @param target The target.
      * @param key If applying to a method, the member name.
      * @param key If applying to a method, you may supply an initial descriptor to pass to the decorators.
      */
    on(target: any, key?: string, descriptor?: Object): any;
  }
  
  /**
  * Options that control how the deprected decorator should function at runtime.
  */
  export interface DeprecatedOptions {
    
    /**
      * Specifies a custom deprecation message.
      */
    message: string;
    
    /**
      * Specifies whether or not the deprecation should throw an error.
      */
    error: boolean;
  }
  
  /**
  * Options used during protocol creation.
  */
  export interface ProtocolOptions {
    
    /**
      * A function that will be run to validate the decorated class when the protocol is applied. It is also used to validate adhoc instances.
      * If the validation fails, a message should be returned which directs the developer in how to address the issue.
      */
    validate?: (target: any) => string | boolean;
    
    /**
      * A function which has the opportunity to compose additional behavior into the decorated class when the protocol is applied.
      */
    compose?: (target: any) => void;
  }
  
  /**
  * Provides helpers for working with metadata.
  */
  /**
  * Provides helpers for working with metadata.
  */
  export const metadata: MetadataType;
  
  /**
  * A metadata annotation that describes the origin module of the function to which it's attached.
  */
  export class Origin {
    
    /**
      * The id of the module from which the item originated.
      */
    moduleId: string;
    
    /**
      * The member name of the export on the module object from which the item originated.
      */
    moduleMember: string;
    
    /**
      * Creates an instance of Origin metadata.
      * @param moduleId The id of the module from which the item originated.
      * @param moduleMember The member name of the export on the module object from which the item originated.
      */
    constructor(moduleId: string, moduleMember: string);
    
    /**
      * Get the Origin metadata for the specified function.
      * @param fn The function to inspect for Origin metadata.
      * @return Returns the Origin metadata.
      */
    static get(fn: Function): Origin;
    
    /**
      * Set the Origin metadata for the specified function.
      * @param fn The function to set the Origin metadata on.
      * @param fn The Origin metadata to store on the function.
      * @return Returns the Origin metadata.
      */
    static set(fn: Function, origin: Origin): void;
  }
  
  /**
  * Enables applying decorators, particularly for use when there is no syntax support in the language, such as with ES5 and ES2016.
  * @param rest The decorators to apply.
  */
  /**
  * Enables applying decorators, particularly for use when there is no syntax support in the language, such as with ES5 and ES2016.
  * @param rest The decorators to apply.
  */
  export function decorators(...rest: Function[]): DecoratorApplicator;
  
  /**
  * Decorator: Enables marking methods as deprecated.
  * @param optionsOrTarget Options for how the deprected decorator should function at runtime.
  */
  /**
  * Decorator: Enables marking methods as deprecated.
  * @param optionsOrTarget Options for how the deprected decorator should function at runtime.
  */
  export function deprecated(optionsOrTarget?: DeprecatedOptions, maybeKey?: string, maybeDescriptor?: Object): any;
  
  /**
  * Decorator: Enables mixing behaior into a class.
  * @param behavior An object with keys for each method to mix into the target class.
  */
  export function mixin(behavior: Object): any;
  
  /**
  * Decorator: Creates a protocol.
  * @param name The name of the protocol.
  * @param options The validation function or options object used in configuring the protocol.
  */
  /**
  * Decorator: Creates a protocol.
  * @param name The name of the protocol.
  * @param options The validation function or options object used in configuring the protocol.
  */
  export function protocol(name: string, options?: ((target: any) => string | boolean) | ProtocolOptions): any;
}