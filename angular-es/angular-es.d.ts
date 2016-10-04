// Type definitions for angular-es v0.0.3
// Project: https://github.com/mbutsykin/angular-es
// Definitions by: mbutsykin <https://github.com/mbutsykin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'angular-es' {

    interface ClassDecorator {
        <TFunction extends Function>(target: TFunction): TFunction|void;
    }

    interface MethodDecorator {
        <T>(target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>|void;
    }

    /**
     * Decorated target
     */
    interface ngESDecorator extends ClassDecorator, MethodDecorator {
        (target: Object|Function,
         ngName?: string,
         ngArguments?: Array<any>,
         ngType?: string,
         injectAsProperty?: Array<string>): void;
    }

    /**
     * Component interface
     * @see https://docs.angularjs.org/guide/component
     */
    interface iComponent {
        template: string,
        selector: string,
        controllerAs?: string,
        require?: string,
        templateUrl?: string,
        transclude?: string,
        bindings?: Object
    }

    /**
     * Register component
     *
     * @param {Object<iComponent>} component - component config
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Component(component: iComponent): ngESDecorator;

    /**
     * Register config block
     */
    function Config(): ngESDecorator;

    /**
     * Register constant
     *
     * @param {string} name - constant name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Constant(name: string): ngESDecorator;

    /**
     * Register controller
     *
     * @param {string} name - controller name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Controller(name: string): ngESDecorator;

    /**
     * Register decorator
     *
     * @param {string} name - provider name to decorate
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Decorator(name: string): ngESDecorator;

    /**
     * Register directive
     *
     * @param {string} name - directive selector, can be in hyphen-case
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Directive(name: string): ngESDecorator;

    /**
     * Register factory
     *
     * @param {string} name - factory name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Factory(name: string): ngESDecorator;

    /**
     * Register filter
     *
     * @param {string} name - filter name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Filter(name: string): ngESDecorator;

    /**
     * Add $inject property to target
     *
     * @param {Array<string>} dependencies - dependencies to inject
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Inject(...dependencies: Array<string>): ngESDecorator;

    /**
     * Inject dependencies as properties to target
     *
     * @param {Array<string>} dependencies - dependencies to inject
     *
     * @returns {ngESDecorator} - decorated class
     */
    function InjectAsProperty(...dependencies: Array<string>): ngESDecorator;

    /**
     * Attach target to the specified module
     *
     * @param {string} name - module name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Module(name: string): ngESDecorator;

    /**
     * Register provider
     *
     * @param {string} name - provider name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Provider(name: string): ngESDecorator;

    /**
     * Register run block
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Run(): ngESDecorator;

    /**
     * Register service
     *
     * @param {string} name - service name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Service(name: string): ngESDecorator;

    /**
     * Register value
     *
     * @param {string} name - value name
     *
     * @returns {ngESDecorator} - decorated class
     */
    function Value(name: string): ngESDecorator;

    export {
        Component,
        Config,
        Constant,
        Controller,
        Decorator,
        Directive,
        Factory,
        Filter,
        Inject,
        InjectAsProperty,
        Module,
        Provider,
        Run,
        Service,
        Value,
    }
}
