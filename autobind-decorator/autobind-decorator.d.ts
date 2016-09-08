declare module 'autobind-decorator' {
    function autobind<TFunction extends Function>(target: TFunction): TFunction | void;
    function autobind<T extends Function>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    export = autobind;
}
