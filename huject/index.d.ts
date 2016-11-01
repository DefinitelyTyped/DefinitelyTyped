// Type definitions for huject
// Project: https://github.com/asvetliakov/Huject
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>, Alfaslash <https://github.com/alfaslash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Huject {

    export class Container {
        /**
         * @constructor
         */
        constructor();

        /**
         * Allow to unregistered definitions be registered and resolved automatically. If false then each class should be explicitly registered in container
         * @param allow true to allow, false to disable
         */
        setAllowUnregisteredResolving(allow: boolean): void;

        /**
         * Register class definition
         * @param classDefinition Class definition
         * @param constructorArguments Optional array of constructor arguments. They will be passed to constructor when object will be instantiated
         */
        register(classDefinition: Function, constructorArguments?: Array<any>): Definition;
        /**
         * Bind class to another class (interface)
         * @param interfaceDefinition An interface to bind to
         * @param implementationDefinition Class definition
         * @param constructorArguments Optional array of constructor arguments
         */
        register(interfaceDefinition: Function, implementationDefinition: Function, constructorArguments?: Array<any>): Definition;
        /**
         * Bind pre-created object to class definition. The object will be used when defined class is instantiated
         * @param classDefinition Class definition
         * @param object Object
         */
        register(classDefinition: Function, object: Object): Definition;

        /**
         * Bind class definition to string definition. Object could be later instantiated by resolve('symbol');
         * @param symbolDefinition String
         * @param classDefinition Class definition
         * @param constructorArguments Optional array of constructor arguments
         */
        register(symbolDefinition: string, classDefinition: Function, constructorArguments?: Array<any>): Definition;
        /**
         * Bind object to string definition
         * @param symbolDefinition String
         * @param Object Object
         */
        register(symbolDefinition: string, Object: any): Definition;

        /**
         * Bind callable function to class definition. Instead creating new object the function result will be used instead
         * @param classDefinition Class definition
         * @param callable Callable
         */
        registerCallable(classDefinition: Function, callable: () => Object|Function): Definition;
        /**
         * Bind callable function to string definition. Instead creating new object the function result will be used instead
         * @param symbolDefinition String definition
         * @param callable Callable
         */
        registerCallable(symbolDefinition: string, callable: () => Object|Function): Definition;

        /**
         * Resolve (instantiate) object from container. Will resolve all wired dependencies if they were specified by decorators
         * @param definition Class definition
         * @param method Factory method. Used to override definition method only for this instantiation
         */
        resolve(definition: Function, method?: FactoryMethod): any;
        /**
         * Resolve {instantiate} object from container by string definition. Will resolve all wired dependencies if they were specified by decorators
         * @param definition Class definition
         * @param method Factory method. Used to override definition method only for this instantiation
         */
        resolve(definition: string, method?: FactoryMethod): any;
    }


    /**
     * Interface for creating objects from container dynamically
     */
    export class ContainerFactoryInterface {
        /**
         * Create object using the container. Will create new instance for each call
         * @param definition Class or string definition
         * @param constructorArgs Optional constructor arguments. Overrides constructor arguments in definition
         */
        public make(definition: Function, constructorArgs?: Array<any>): any;
        public make(definition: string, constructorArgs?: Array<any>): any;
    }


    interface Definition {
        /**
         * Change FactoryMethod type for definition
         * @param method Factory method type
         */
        as(method: FactoryMethod): Definition;
    }

    /**
     * Used to specify instantiate method
     */
    export const enum FactoryMethod {
        /** Singleton. Each instantiation will share same object */
        SINGLETON,
        /** Factory. Each instantiation will return new object */
        FACTORY,
        /** Object. Do not try to instantiate object and return original function or object */
        OBJECT
    }


    /**
     * Property injection
     * @param method Specify to override factory method for registration
     * @example
     * class MyClass {
     *     @Inject(FactoryMethod.SINGLETON)
     *     public service: MyService;
     * }
     */
    export function Inject(method: FactoryMethod): void;

    /**
     * Property injection by string definition. Literal should be registered with container.register('literal',...); before using
     * @param literal String literal
     * @param method Optional factory method
     * @example
     * class MyClass {
     *     @Inject('coolnumber')
     *     public num: number;
     *
     *     @Inject('classToken')
     *     public token: string;
     * }
     */
    export function Inject(literal: string, method?: FactoryMethod): void;

    /**
     * Property injection. Will instantiate with default factory method or with registered method if dependency was already registered
     * @param target
     * @param propertyKey
     * @example
     * class MyClass {
     *     @Inject
     *     public service: MyService;
     * }
     */
    export function Inject(target: Object, propertyKey: string|symbol): void;

    /**
     * Constructor injection. Do not mess constructor injection with ordinary (non-injected) params.
     * To inject ordinary params by literal use @ConstructorInject('literal') in constructor parameters
     * @param target
     * @example
     * @ConstructorInject
     * Class MyClass {
     *     private service: MyService;
     *     public constructor(service: MyService) {
     *         this.service = service;
     *     }
     * }
     */
    export function ConstructorInject<TFunction extends Function>(target: TFunction): TFunction|void;

    /**
     * Override factory method in constructor arguments for injected instance. You still need to apply @ConstructorInject decorator at top of the class
     * @param method Factory method
     * @example
     * @ConstructorInject
     * Class MyClass {
     *     private service: MyService;
     *     public constructor(@ConstructorInject(FactoryMethod.SINGLETON) service: MyService) {
     *         this.service = service;
     *     }
     * }
     */
    export function ConstructorInject(method: FactoryMethod): void;

    /**
     * Resolve instance by string definition and pass to constructor argument
     * @param literal string definition
     * @param method Optional factory method
     * @example
     * @ConstructorInject
     * Class MyClass {
     *     private service: MyService;
     *     private anotherService: AnotherService;
     *
     *     private tokenStr: string;
     *
     *     public constructor(
     *         service: MyService,
     *         @ConstructorInject('service', FactoryMethod.SINGLETON) anotherService: AnotherService,
     *         @ConstructorInject('serviceToken') token: string
     *     ) {
     *         this.service = service;
     *         this.anotherService = anotherService;
     *         this.tokenStr = token;
     *     }
     * }
     */
    export function ConstructorInject(literal: string, method?: FactoryMethod): void;

    /**
     * Specify that property injection should be optional. That means if dependency couldn't be resolved, then leave original specified value
     * @param target
     * @param propertyKey
     * @example
     * class MyClass {
     *     @Optional
     *     @Inject('coolnumber')
     *     public num: number = 50;
     *
     *     @Optional
     *     @Inject('classToken')
     *     public token: string = 'defaultToken';
     * }
     */
    export function Optional(target: Object, propertyKey: string|symbol): void;

    /**
     * Specify that constructor argument injection should be optional. If argument couldn't be resolved, pass null instead
     * @param target
     * @param propertyKey
     * @param parameterIndex
     * @example
     * @ConstructorInject
     * Class MyClass {
     *     private service: MyService;
     *     public constructor(@Optional @ConstructorInject(FactoryMethod.SINGLETON) service: MyService) {
     *         if (service) {
     *             this.service = service;
     *         }
     *     }
     * }
     */
    export function Optional(target: Object, propertyKey: string|symbol, parameterIndex: number): void;

    /**
     * Specify that class should be base for auto-factory
     * @param target
     * @example
     * @Factory
     * class MyModelFactory {
     *     @Factory
     *     public createModel(): Model {return null;}
     * }
     */
    export function Factory<TFunction extends Function>(target: TFunction): TFunction | void;

    /**
     * Specify that method should be used for auto-factory
     * @param target
     * @param propertyKey
     * @param descriptor
     * @example
     * @Factory
     * class MyModelFactory {
     *     @Factory
     *     public createModel(): Model {return null;}
     * }
     */
    export function Factory<T>(target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
}

declare module "huject" {
    export = Huject;
}
