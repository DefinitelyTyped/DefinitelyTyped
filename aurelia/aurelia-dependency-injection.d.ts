// Type definitions for aurelia-dependency-injection v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/dependency-injection/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-metadata.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />

declare module 'aurelia-dependency-injection' {
  import {
    protocol,
    metadata
  } from 'aurelia-metadata';
  import {
    AggregateError
  } from 'aurelia-pal';
  
  /**
  * Used to allow functions/classes to specify custom dependency resolution logic.
  */
  export interface Resolver {
    
    /**
      * Called by the container to allow custom resolution of dependencies for a function/class.
      * @param container The container to resolve from.
      * @param key The key that the resolver was registered as.
      * @return Returns the resolved object.
      */
    get(container: Container, key: any): any;
  }
  
  /**
  * A strategy for invoking a function, resulting in an object instance.
  */
  export interface Invoker {
    
    /**
      * Invokes the function with the provided dependencies.
      * @param fn The constructor or factory function.
      * @param dependencies The dependencies of the function call.
      * @return The result of the function invocation.
      */
    invoke(container: Container, fn: Function, dependencies: any[]): any;
    
    /**
      * Invokes the function with the provided dependencies.
      * @param fn The constructor or factory function.
      * @param staticDependencies The static dependencies of the function.
      * @param dynamicDependencies Additional dependencies to use during invocation.
      * @return The result of the function invocation.
      */
    invokeWithDynamicDependencies(container: Container, fn: Function, staticDependencies: any[], dynamicDependencies: any[]): any;
  }
  
  /**
  * Customizes how a particular function is resolved by the Container.
  */
  export interface Registration {
    
    /**
      * Called by the container to register the resolver.
      * @param container The container the resolver is being registered with.
      * @param key The key the resolver should be registered as.
      * @param fn The function to create the resolver for.
      * @return The resolver that was registered.
      */
    registerResolver(container: Container, key: any, fn: Function): Resolver;
  }
  
  /**
  * Used to configure a Container instance.
  */
  export interface ContainerConfiguration {
    
    /**
      * An optional callback which will be called when any function needs an InvocationHandler created (called once per Function).
      */
    onHandlerCreated?: (handler: InvocationHandler) => InvocationHandler;
  }
  
  /**
  * Decorator: Indicates that the decorated class/object is a custom resolver.
  */
  export const resolver: Function;
  
  /**
  * Used to allow functions/classes to specify lazy resolution logic.
  */
  
  /**
  * Used to allow functions/classes to specify lazy resolution logic.
  */
  export class Lazy {
    
    /**
      * Creates an instance of the Lazy class.
      * @param key The key to lazily resolve.
      */
    constructor(key: any);
    
    /**
      * Called by the container to lazily resolve the dependency into a lazy locator function.
      * @param container The container to resolve from.
      * @return Returns a function which can be invoked at a later time to obtain the actual dependency.
      */
    get(container: Container): any;
    
    /**
      * Creates a Lazy Resolver for the supplied key.
      * @param key The key to lazily resolve.
      * @return Returns an instance of Lazy for the key.
      */
    static of(key: any): Lazy;
  }
  
  /**
  * Used to allow functions/classes to specify resolution of all matches to a key.
  */
  export class All {
    
    /**
      * Creates an instance of the All class.
      * @param key The key to lazily resolve all matches for.
      */
    constructor(key: any);
    
    /**
      * Called by the container to resolve all matching dependencies as an array of instances.
      * @param container The container to resolve from.
      * @return Returns an array of all matching instances.
      */
    get(container: Container): any[];
    
    /**
      * Creates an All Resolver for the supplied key.
      * @param key The key to resolve all instances for.
      * @return Returns an instance of All for the key.
      */
    static of(key: any): All;
  }
  
  /**
  * Used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
  */
  export class Optional {
    
    /**
      * Creates an instance of the Optional class.
      * @param key The key to optionally resolve for.
      * @param checkParent Indicates whether or not the parent container hierarchy should be checked.
      */
    constructor(key: any, checkParent?: boolean);
    
    /**
      * Called by the container to provide optional resolution of the key.
      * @param container The container to resolve from.
      * @return Returns the instance if found; otherwise null.
      */
    get(container: Container): any;
    
    /**
      * Creates an Optional Resolver for the supplied key.
      * @param key The key to optionally resolve for.
      * @param [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
      * @return Returns an instance of Optional for the key.
      */
    static of(key: any, checkParent?: boolean): Optional;
  }
  
  /**
  * Used to inject the dependency from the parent container instead of the current one.
  */
  export class Parent {
    
    /**
      * Creates an instance of the Parent class.
      * @param key The key to resolve from the parent container.
      */
    constructor(key: any);
    
    /**
      * Called by the container to load the dependency from the parent container
      * @param container The container to resolve the parent from.
      * @return Returns the matching instance from the parent container
      */
    get(container: Container): any;
    
    /**
      * Creates a Parent Resolver for the supplied key.
      * @param key The key to resolve.
      * @return Returns an instance of Parent for the key.
      */
    static of(key: any): Parent;
  }
  export class StrategyResolver {
    
    /**
      * Creates an instance of the StrategyResolver class.
      * @param strategy The type of resolution strategy.
      * @param state The state associated with the resolution strategy.
      */
    constructor(strategy: any, state: any);
    
    /**
      * Called by the container to allow custom resolution of dependencies for a function/class.
      * @param container The container to resolve from.
      * @param key The key that the resolver was registered as.
      * @return Returns the resolved object.
      */
    get(container: Container, key: any): any;
  }
  
  /**
  * Used to allow injecting dependencies but also passing data to the constructor.
  */
  export class Factory {
    
    /**
      * Creates an instance of the Factory class.
      * @param key The key to resolve from the parent container.
      */
    constructor(key: any);
    
    /**
      * Called by the container to pass the dependencies to the constructor.
      * @param container The container to invoke the constructor with dependencies and other parameters.
      * @return Returns a function that can be invoked to resolve dependencies later, and the rest of the parameters.
      */
    get(container: Container): any;
    
    /**
      * Creates a Factory Resolver for the supplied key.
      * @param key The key to resolve.
      * @return Returns an instance of Factory for the key.
      */
    static of(key: any): Factory;
  }
  
  /**
  * Decorator: Specifies a custom Invoker for the decorated item.
  */
  export function invoker(value: Invoker): any;
  
  /**
  * Decorator: Specifies that the decorated item should be called as a factory function, rather than a constructor.
  */
  export function factory(potentialTarget?: any): any;
  
  /**
  * An Invoker that is used to invoke a factory method.
  */
  /**
  * An Invoker that is used to invoke a factory method.
  */
  export class FactoryInvoker {
    
    /**
      * The singleton instance of the FactoryInvoker.
      */
    static instance: FactoryInvoker;
    
    /**
      * Invokes the function with the provided dependencies.
      * @param container The calling container.
      * @param fn The constructor or factory function.
      * @param dependencies The dependencies of the function call.
      * @return The result of the function invocation.
      */
    invoke(container: Container, fn: Function, dependencies: any[]): any;
    
    /**
      * Invokes the function with the provided dependencies.
      * @param container The calling container.
      * @param fn The constructor or factory function.
      * @param staticDependencies The static dependencies of the function.
      * @param dynamicDependencies Additional dependencies to use during invocation.
      * @return The result of the function invocation.
      */
    invokeWithDynamicDependencies(container: Container, fn: Function, staticDependencies: any[], dynamicDependencies: any[]): any;
  }
  
  /**
  * Decorator: Specifies a custom registration strategy for the decorated class/function.
  */
  export function registration(value: Registration): any;
  
  /**
  * Decorator: Specifies to register the decorated item with a "transient" lifetime.
  */
  export function transient(key?: any): any;
  
  /**
  * Decorator: Specifies to register the decorated item with a "singleton" lieftime.
  */
  export function singleton(keyOrRegisterInChild?: any, registerInChild?: boolean): any;
  
  /**
  * Used to allow functions/classes to indicate that they should be registered as transients with the container.
  */
  /**
  * Used to allow functions/classes to indicate that they should be registered as transients with the container.
  */
  export class TransientRegistration {
    
    /**
      * Creates an instance of TransientRegistration.
      * @param key The key to register as.
      */
    constructor(key?: any);
    
    /**
      * Called by the container to register the resolver.
      * @param container The container the resolver is being registered with.
      * @param key The key the resolver should be registered as.
      * @param fn The function to create the resolver for.
      * @return The resolver that was registered.
      */
    registerResolver(container: Container, key: any, fn: Function): Resolver;
  }
  
  /**
  * Used to allow functions/classes to indicate that they should be registered as singletons with the container.
  */
  export class SingletonRegistration {
    
    /**
      * Creates an instance of SingletonRegistration.
      * @param key The key to register as.
      */
    constructor(keyOrRegisterInChild?: any, registerInChild?: boolean);
    
    /**
      * Called by the container to register the resolver.
      * @param container The container the resolver is being registered with.
      * @param key The key the resolver should be registered as.
      * @param fn The function to create the resolver for.
      * @return The resolver that was registered.
      */
    registerResolver(container: Container, key: any, fn: Function): Resolver;
  }
  
  /**
  * Stores the information needed to invoke a function.
  */
  export class InvocationHandler {
    
    /**
      * The function to be invoked by this handler.
      */
    fn: Function;
    
    /**
      * The invoker implementation that will be used to actually invoke the function.
      */
    invoker: Invoker;
    
    /**
      * The statically known dependencies of this function invocation.
      */
    dependencies: any[];
    
    /**
      * Instantiates an InvocationDescription.
      * @param fn The Function described by this description object.
      * @param invoker The strategy for invoking the function.
      * @param dependencies The static dependencies of the function call.
      */
    constructor(fn: Function, invoker: Invoker, dependencies: any[]);
    
    /**
      * Invokes the function.
      * @param container The calling container.
      * @param dynamicDependencies Additional dependencies to use during invocation.
      * @return The result of the function invocation.
      */
    invoke(container: Container, dynamicDependencies?: any[]): any;
  }
  
  /**
  * A lightweight, extensible dependency injection container.
  */
  export class Container {
    
    /**
      * The global root Container instance. Available if makeGlobal() has been called. Aurelia Framework calls makeGlobal().
      */
    static instance: Container;
    
    /**
      * The parent container in the DI hierarchy.
      */
    parent: Container;
    
    /**
      * The root container in the DI hierarchy.
      */
    root: Container;
    
    /**
      * Creates an instance of Container.
      * @param configuration Provides some configuration for the new Container instance.
      */
    constructor(configuration?: ContainerConfiguration);
    
    /**
      * Makes this container instance globally reachable through Container.instance.
      */
    makeGlobal(): Container;
    
    /**
      * Sets an invocation handler creation callback that will be called when new InvocationsHandlers are created (called once per Function).
      * @param onHandlerCreated The callback to be called when an InvocationsHandler is created.
      */
    setHandlerCreatedCallback(onHandlerCreated: ((handler: InvocationHandler) => InvocationHandler)): any;
    
    /**
      * Registers an existing object instance with the container.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param instance The instance that will be resolved when the key is matched.
      */
    registerInstance(key: any, instance?: any): void;
    
    /**
      * Registers a type (constructor function) such that the container always returns the same instance for each request.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param [fn] The constructor function to use when the dependency needs to be instantiated.
      */
    registerSingleton(key: any, fn?: Function): void;
    
    /**
      * Registers a type (constructor function) such that the container returns a new instance for each request.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param [fn] The constructor function to use when the dependency needs to be instantiated.
      */
    registerTransient(key: any, fn?: Function): void;
    
    /**
      * Registers a custom resolution function such that the container calls this function for each request to obtain the instance.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param handler The resolution function to use when the dependency is needed.
      */
    registerHandler(key: any, handler: ((container?: Container, key?: any, resolver?: Resolver) => any)): void;
    
    /**
      * Registers an additional key that serves as an alias to the original DI key.
      * @param originalKey The key that originally identified the dependency; usually a constructor function.
      * @param aliasKey An alternate key which can also be used to resolve the same dependency  as the original.
      */
    registerAlias(originalKey: any, aliasKey: any): void;
    
    /**
      * Registers a custom resolution function such that the container calls this function for each request to obtain the instance.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param resolver The resolver to use when the dependency is needed.
      */
    registerResolver(key: any, resolver: Resolver): void;
    
    /**
      * Registers a type (constructor function) by inspecting its registration annotations. If none are found, then the default singleton registration is used.
      * @param fn The constructor function to use when the dependency needs to be instantiated.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      */
    autoRegister(fn: any, key?: any): Resolver;
    
    /**
      * Registers an array of types (constructor functions) by inspecting their registration annotations. If none are found, then the default singleton registration is used.
      * @param fns The constructor function to use when the dependency needs to be instantiated.
      */
    autoRegisterAll(fns: any[]): void;
    
    /**
      * Unregisters based on key.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      */
    unregister(key: any): void;
    
    /**
      * Inspects the container to determine if a particular key has been registred.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param checkParent Indicates whether or not to check the parent container hierarchy.
      * @return Returns true if the key has been registred; false otherwise.
      */
    hasResolver(key: any, checkParent?: boolean): boolean;
    
    /**
      * Resolves a single instance based on the provided key.
      * @param key The key that identifies the object to resolve.
      * @return Returns the resolved instance.
      */
    get(key: any): any;
    
    /**
      * Resolves all instance registered under the provided key.
      * @param key The key that identifies the objects to resolve.
      * @return Returns an array of the resolved instances.
      */
    getAll(key: any): any[];
    
    /**
      * Creates a new dependency injection container whose parent is the current container.
      * @return Returns a new container instance parented to this.
      */
    createChild(): Container;
    
    /**
      * Invokes a function, recursively resolving its dependencies.
      * @param fn The function to invoke with the auto-resolved dependencies.
      * @param dynamicDependencies Additional function dependencies to use during invocation.
      * @return Returns the instance resulting from calling the function.
      */
    invoke(fn: Function, dynamicDependencies?: any[]): any;
  }
  
  /**
  * Decorator: Directs the TypeScript transpiler to write-out type metadata for the decorated class.
  */
  export function autoinject(potentialTarget?: any): any;
  
  /**
  * Decorator: Specifies the dependencies that should be injected by the DI Container into the decoratored class/function.
  */
  export function inject(...rest: any[]): any;
}