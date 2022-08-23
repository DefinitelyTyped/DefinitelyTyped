/** Static assertion that `value` has type `T` */
export declare function assertType<T>(value: T): T;

// tslint:disable-next-line:no-unnecessary-generics
export declare function assertExtendsType<P, T extends P = P>(value: T): T;
