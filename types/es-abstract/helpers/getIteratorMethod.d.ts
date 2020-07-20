import type { PropertyKey } from '../index';

declare function getIteratorMethod<T>(
    ES: {
        AdvanceStringIndex?(S: string, index: number, unicode: boolean): number;
        GetMethod(O: unknown, P: PropertyKey): ((...args: any) => any) | undefined;
        IsArray?(O: unknown): boolean;
        Type?(O: unknown): string | undefined;
    },
    iterable: T,
): T extends Iterable<any> ? () => Iterator<T extends Iterable<infer U> ? U : any, any, any> : undefined;

export = getIteratorMethod;
