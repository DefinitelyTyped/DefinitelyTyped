/** Static assertion that `value` has type `T` */
export declare function assertType<T>(value: T): T;

export declare function assertExtendsType<P, T extends P = P>(value: T): T;
