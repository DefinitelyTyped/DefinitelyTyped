declare function shallowEqual<TCtx = any>(
    objA: any,
    objB: any,
    customizer?: shallowEqual.Customizer<TCtx>,
    compareContext?: TCtx,
): boolean;

declare namespace shallowEqual {
    type Customizer<T = any> = (
        this: T,
        objA: any,
        objB: any,
        indexOrKey?: number | string,
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    ) => boolean | void;
}

export = shallowEqual;
