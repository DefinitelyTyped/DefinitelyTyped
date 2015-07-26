/// <reference path="aurelia-metadata" />
/// <reference path="aurelia-logging" />


declare module 'aurelia-dependency-injection' {
  //import * as core from 'core-js';
  import { Metadata, Decorators }  from 'aurelia-metadata';
  import { AggregateError }  from 'aurelia-logging';

  /**
  * Used to allow functions/classes to indicate that they should be registered as transients with the container.
  *
  * @class TransientRegistration
  * @constructor
  * @param {Object} [key] The key to register as.
  */
  export class TransientRegistration {
    constructor(key: any);

    /**
      * Called by the container to register the annotated function/class as transient.
      *
      * @method register
      * @param {Container} container The container to register with.
      * @param {Object} key The key to register as.
      * @param {Object} fn The function to register (target of the annotation).
      */
    register(container: Container, key: any, fn: Function): any;
  }

  /**
  * Used to allow functions/classes to indicate that they should be registered as singletons with the container.
  *
  * @class SingletonRegistration
  * @constructor
  * @param {Object} [key] The key to register as.
  */
  export class SingletonRegistration {
    constructor(keyOrRegisterInChild: any, registerInChild?: boolean);

    /**
      * Called by the container to register the annotated function/class as a singleton.
      *
      * @method register
      * @param {Container} container The container to register with.
      * @param {Object} key The key to register as.
      * @param {Object} fn The function to register (target of the annotation).
      */
    register(container: Container, key: any, fn: Function): any;
  }

  /**
  * An abstract resolver used to allow functions/classes to specify custom dependency resolution logic.
  *
  * @class Resolver
  * @constructor
  */
  export class Resolver {

    /**
      * Called by the container to allow custom resolution of dependencies for a function/class.
      *
      * @method get
      * @param {Container} container The container to resolve from.
      * @return {Object} Returns the resolved object.
      */
    get(container: Container): any;
  }

  /**
  * Used to allow functions/classes to specify lazy resolution logic.
  *
  * @class Lazy
  * @constructor
  * @extends Resolver
  * @param {Object} key The key to lazily resolve.
  */
  export class Lazy extends Resolver {
    constructor(key: any);

    /**
      * Called by the container to lazily resolve the dependency into a lazy locator function.
      *
      * @method get
      * @param {Container} container The container to resolve from.
      * @return {Function} Returns a function which can be invoked at a later time to obtain the actual dependency.
      */
    get(container: Container): any;

    /**
      * Creates a Lazy Resolver for the supplied key.
      *
      * @method of
      * @static
      * @param {Object} key The key to lazily resolve.
      * @return {Lazy} Returns an insance of Lazy for the key.
      */
    static of(key: any): Lazy;
  }

  /**
  * Used to allow functions/classes to specify resolution of all matches to a key.
  *
  * @class All
  * @constructor
  * @extends Resolver
  * @param {Object} key The key to lazily resolve all matches for.
  */
  export class All extends Resolver {
    constructor(key: any);

    /**
      * Called by the container to resolve all matching dependencies as an array of instances.
      *
      * @method get
      * @param {Container} container The container to resolve from.
      * @return {Object[]} Returns an array of all matching instances.
      */
    get(container: Container): any[];

    /**
      * Creates an All Resolver for the supplied key.
      *
      * @method of
      * @static
      * @param {Object} key The key to resolve all instances for.
      * @return {All} Returns an insance of All for the key.
      */
    static of(key: any): All;
  }

  /**
  * Used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
  *
  * @class Optional
  * @constructor
  * @extends Resolver
  * @param {Object} key The key to optionally resolve for.
  * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
  */
  export class Optional extends Resolver {
    constructor(key: any, checkParent?: boolean);

    /**
      * Called by the container to provide optional resolution of the key.
      *
      * @method get
      * @param {Container} container The container to resolve from.
      * @return {Object} Returns the instance if found; otherwise null.
      */
    get(container: Container): any;

    /**
      * Creates an Optional Resolver for the supplied key.
      *
      * @method of
      * @static
      * @param {Object} key The key to optionally resolve for.
      * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
      * @return {Optional} Returns an insance of Optional for the key.
      */
    static of(key: any, checkParent?: boolean): Optional;
  }

  /**
  * Used to inject the dependency from the parent container instead of the current one.
  *
  * @class Parent
  * @constructor
  * @extends Resolver
  * @param {Object} key The key to resolve from the parent container.
  */
  export class Parent extends Resolver {
    constructor(key: any);

    /**
      * Called by the container to load the dependency from the parent container
      *
      * @method get
      * @param {Container} container The container to resolve the parent from.
      * @return {Function} Returns the matching instance from the parent container
      */
    get(container: Container): any;

    /**
      * Creates a Parent Resolver for the supplied key.
      *
      * @method of
      * @static
      * @param {Object} key The key to resolve.
      * @return {Parent} Returns an insance of Parent for the key.
      */
    static of(key: any): Parent;
  }

  /**
  * Used to instantiate a class.
  *
  * @class ClassActivator
  * @constructor
  */
  export class ClassActivator {
    static instance: any;
    invoke(fn: Function, args: any[]): any;
  }

  /**
  * Used to invoke a factory method.
  *
  * @class FactoryActivator
  * @constructor
  */
  export class FactoryActivator {
    static instance: any;
    invoke(fn: Function, args: any[]): any;
  }
  export var emptyParameters: any;

  /**
  * A lightweight, extensible dependency injection container.
  *
  * @class Container
  * @constructor
  */
  export class Container {
    constructor(constructionInfo?: Map<Function, Object>);

    /**
      * Makes this container instance globally reachable through Container.instance.
      *
      * @method makeGlobal
      */
    makeGlobal(): Container;

    /**
      * Registers an existing object instance with the container.
      *
      * @method registerInstance
      * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param {Object} instance The instance that will be resolved when the key is matched.
      */
    registerInstance(key: any, instance: any): any;

    /**
      * Registers a type (constructor function) such that the container returns a new instance for each request.
      *
      * @method registerTransient
      * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param {Function} [fn] The constructor function to use when the dependency needs to be instantiated.
      */
    registerTransient(key: any, fn?: Function): any;

    /**
      * Registers a type (constructor function) such that the container always returns the same instance for each request.
      *
      * @method registerSingleton
      * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param {Function} [fn] The constructor function to use when the dependency needs to be instantiated.
      */
    registerSingleton(key: any, fn?: Function): any;

    /**
      * Registers a type (constructor function) by inspecting its registration annotations. If none are found, then the default singleton registration is used.
      *
      * @method autoRegister
      * @param {Function} fn The constructor function to use when the dependency needs to be instantiated.
      * @param {Object} [key] The key that identifies the dependency at resolution time; usually a constructor function.
      */
    autoRegister(fn: any, key?: any): any;

    /**
      * Registers an array of types (constructor functions) by inspecting their registration annotations. If none are found, then the default singleton registration is used.
      *
      * @method autoRegisterAll
      * @param {Function[]} fns The constructor function to use when the dependency needs to be instantiated.
      */
    autoRegisterAll(fns: any[]): any;

    /**
      * Registers a custom resolution function such that the container calls this function for each request to obtain the instance.
      *
      * @method registerHandler
      * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param {Function} handler The resolution function to use when the dependency is needed. It will be passed one arguement, the container instance that is invoking it.
      */
    registerHandler(key: any, handler: (c: Container) => any): any;

    /**
      * Unregisters based on key.
      *
      * @method unregister
      * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
      */
    unregister(key: any): any;

    /**
      * Resolves a single instance based on the provided key.
      *
      * @method get
      * @param {Object} key The key that identifies the object to resolve.
      * @return {Object} Returns the resolved instance.
      */
    get(key: any): any;

    /**
      * Resolves all instance registered under the provided key.
      *
      * @method getAll
      * @param {Object} key The key that identifies the objects to resolve.
      * @return {Object[]} Returns an array of the resolved instances.
      */
    getAll(key: any): any[];

    /**
      * Inspects the container to determine if a particular key has been registred.
      *
      * @method hasHandler
      * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param {Boolean} [checkParent=false] Indicates whether or not to check the parent container hierarchy.
      * @return {Boolean} Returns true if the key has been registred; false otherwise.
      */
    hasHandler(key: any, checkParent?: boolean): boolean;

    /**
      * Creates a new dependency injection container whose parent is the current container.
      *
      * @method createChild
      * @return {Container} Returns a new container instance parented to this.
      */
    createChild(): Container;

    /**
      * Invokes a function, recursively resolving its dependencies.
      *
      * @method invoke
      * @param {Function} fn The function to invoke with the auto-resolved dependencies.
      * @param {any[]} [deps] Additional function dependencies to use during invocation.
      * @return {Object} Returns the instance resulting from calling the function.
      */
    invoke(fn: Function, deps?: any[]): any;
  }
  export function autoinject(target?: any): any;
  export function inject(...rest: any[]): any;
  export function registration(value: any): any;
  export function transient(key?: any): any;
  export function singleton(keyOrRegisterInChild?: any, registerInChild?: boolean): any;
  export function instanceActivator(value: any): any;
  export function factory(): any;
}
