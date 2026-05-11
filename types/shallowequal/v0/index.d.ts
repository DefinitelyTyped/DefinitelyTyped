declare function shallowEqual(
    objA: any,
    objB: any,
    compare?: (objA: any, objB: any, indexOrKey?: number | string) => boolean | undefined,
    compareContext?: any,
): boolean;

declare namespace shallowEqual {}

export = shallowEqual;
