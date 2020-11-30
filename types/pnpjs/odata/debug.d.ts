declare module "./queryable" {
    /**
     * Returns the instance wrapped by the invokable proxy
     */
    interface IQueryable<DefaultActionType = any> {
        __deepTrace: boolean;
        __enableDeepTrace(): void;
        __disableDeepTrace(): void;
        __json(): <T = any>(target: T) => () => any;
        __unwrap(): any;
    }
    interface Queryable<DefaultActionType = any> {
        __deepTrace: boolean;
        __enableDeepTrace(): void;
        __disableDeepTrace(): void;
        __json(): <T = any>(target: T) => () => any;
        __unwrap(): any;
    }
}
export {};
//# sourceMappingURL=debug.d.ts.map