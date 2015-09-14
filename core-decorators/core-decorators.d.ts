// Type definitions for core-decorators.js
// Project: https://github.com/jayphelps/core-decorators.js
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "core-decorators" {
    export interface ClassDecorator {
      <TFunction extends Function>(target: TFunction): TFunction|void;
    }

    export interface ParameterDecorator {
      (target: Object, propertyKey: string|symbol, parameterIndex: number): void;
    }

    export interface PropertyDecorator {
        (target: Object, propertyKey: string|symbol): void;
    }

    export interface MethodDecorator {
      <T>(target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>|void;
    }

    export interface PropertyOrMethodDecorator extends MethodDecorator, PropertyDecorator {
        (target: Object, propertyKey: string|symbol): void;
    }

    export interface Deprecate extends MethodDecorator {
        (message?: string, option?: DeprecateOption): MethodDecorator;
    }

    export interface DeprecateOption {
        url: string;
    }

    /**
     * Forces invocations of this function to always have this refer to the class instance,
     * even if the function is passed around or would otherwise lose its this context. e.g. var fn = context.method;
     */
    var autobind: MethodDecorator;
    /**
     * Marks a property or method as not being writable.
     */
    var readonly: PropertyOrMethodDecorator;
    /**
     * Checks that the marked method indeed overrides a function with the same signature somewhere on the prototype chain.
     */
    var override: MethodDecorator;
    /**
     * Calls console.warn() with a deprecation message. Provide a custom message to override the default one. You can also provide an options hash with a url, for further reading.
     */
    var deprecate: Deprecate;
    /**
     * Calls console.warn() with a deprecation message. Provide a custom message to override the default one. You can also provide an options hash with a url, for further reading.
     */
    var deprecated: Deprecate;
    /**
     * Creates a new debounced function which will be invoked after wait milliseconds since the time it was invoked. Default timeout is 300 ms.
     */
    var debounce: (wait: number) => MethodDecorator;
    /**
     * Suppresses any JavaScript console.warn() call while the decorated function is called. (i.e. on the stack)
     */
    var suppressWarnings: MethodDecorator;
    /**
     * Marks a property or method as not being enumerable.
     */
    var nonenumerable: PropertyOrMethodDecorator;
    /**
     * Marks a property or method as not being writable.
     */
    var nonconfigurable: PropertyOrMethodDecorator;
    /**
     * Initial implementation included, likely slow. WIP.
     */
    var memoize: MethodDecorator;

    export {
        autobind,
        readonly,
        override,
        deprecate,
        deprecated,
        debounce,
        suppressWarnings,
        nonenumerable,
        nonconfigurable,
        memoize // WIP
    };
}
