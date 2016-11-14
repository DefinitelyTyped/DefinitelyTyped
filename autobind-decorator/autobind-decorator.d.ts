// Type definitions for autobind-decorator v1.3.3
// Project: https://github.com/andreypopp/autobind-decorator
// Definitions by: Ivo Stratev <https://github.com/NoHomey/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'autobind-decorator' {
    function autobind<TFunction extends Function>(target: TFunction): TFunction | void;
    function autobind<T extends Function>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    export = autobind;
}
