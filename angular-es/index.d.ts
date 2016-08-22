// Type definitions for angular-es v0.0.3
// Project: https://github.com/mbutsykin/angular-es
// Definitions by: mbutsykin <https://github.com/mbutsykin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ClassDecorator {
    <TFunction extends Function>(target: TFunction): TFunction|void;
}

export interface MethodDecorator {
    <T>(target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>|void;
}

/**
 * Decorated target
 */
export interface ngESDecorator extends ClassDecorator, MethodDecorator {
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
export interface iComponent {
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
export declare var Component: (component: iComponent) => ngESDecorator;

/**
 * Register config block
 */
export declare var Config: () => ngESDecorator;

/**
 * Register constant
 *
 * @param {string} name - constant name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Constant: (name: string) => ngESDecorator;

/**
 * Register controller
 *
 * @param {string} name - controller name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Controller: (name: string) => ngESDecorator;

/**
 * Register decorator
 *
 * @param {string} name - provider name to decorate
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Decorator: (name: string) => ngESDecorator;

/**
 * Register directive
 *
 * @param {string} name - directive selector, can be in hyphen-case
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Directive: (name: string) => ngESDecorator;

/**
 * Register factory
 *
 * @param {string} name - factory name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Factory: (name: string) => ngESDecorator;

/**
 * Register filter
 *
 * @param {string} name - filter name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Filter: (name: string) => ngESDecorator;

/**
 * Add $inject property to target
 *
 * @param {Array<string>} dependencies - dependencies to inject
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Inject: (...dependencies: Array<string>) => ngESDecorator;

/**
 * Inject dependencies as properties to target
 *
 * @param {Array<string>} dependencies - dependencies to inject
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var InjectAsProperty: (...dependencies: Array<string>) => ngESDecorator;

/**
 * Attach target to the specified module
 *
 * @param {string} name - module name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Module: (name: string) => ngESDecorator;

/**
 * Register provider
 *
 * @param {string} name - provider name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Provider: (name: string) => ngESDecorator;

/**
 * Register run block
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Run: () => ngESDecorator;

/**
 * Register service
 *
 * @param {string} name - service name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Service: (name: string) => ngESDecorator;

/**
 * Register value
 *
 * @param {string} name - value name
 *
 * @returns {ngESDecorator} - decorated class
 */
export declare var Value: (name: string) => ngESDecorator;