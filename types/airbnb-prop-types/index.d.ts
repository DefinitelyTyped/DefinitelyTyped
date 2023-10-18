import * as PropTypes from "prop-types";

export interface ReactComponentLike {
    setState(...args: any[]): any;
    forceUpdate(...args: any[]): any;
    render(): PropTypes.ReactNodeLike;
    props: any;
    state: any;
    context: any;
    refs: any;
}

export interface ReactClassComponentLike {
    new(...args: any[]): ReactComponentLike;
}

export type ReactFunctionComponentLike = (...args: any[]) => PropTypes.ReactNodeLike;

export type ReactTypeLike = string | ReactClassComponentLike | ReactFunctionComponentLike;

export interface ReactRefLike<T> {
    readonly current: T | null;
}

export type ReactLegacyRefLike<T> = ((instance: T | null) => void) | ReactRefLike<T>;

export interface Specifier<T = any> {
    max?: number | undefined;
    min?: number | undefined;
    validator: PropTypes.Validator<T>;
}

export function and<A>(
    propTypes: [PropTypes.Validator<A>],
    name?: string,
): PropTypes.Requireable<A>;

export function and<A, B>(
    propTypes: [PropTypes.Validator<A>, PropTypes.Validator<B>],
    name?: string,
): PropTypes.Requireable<A & B>;

export function and<A, B, C>(
    propTypes: [PropTypes.Validator<A>, PropTypes.Validator<B>, PropTypes.Validator<C>],
    name?: string,
): PropTypes.Requireable<A & B & C>;

export function and<T>(
    propTypes: Array<PropTypes.Validator<any>>,
    name?: string,
): PropTypes.Requireable<T>;

export function between(options: {
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
}): PropTypes.Requireable<number>;

export function booleanSome(...props: string[]): PropTypes.Requireable<boolean>;

export function childrenHavePropXorChildren<T = PropTypes.ReactNodeLike>(
    prop: string | symbol,
): PropTypes.Requireable<T>;

export function childrenOf<T = PropTypes.ReactNodeLike, P = any>(
    propType: PropTypes.Validator<P>,
): PropTypes.Requireable<T>;

export function childrenOfType<T = PropTypes.ReactNodeLike>(
    ...types: ReactTypeLike[]
): PropTypes.Requireable<T>;

export function childrenSequenceOf<T = PropTypes.ReactNodeLike>(
    ...specifiers: Specifier[]
): PropTypes.Requireable<T>;

export function componentWithName<T = PropTypes.ReactNodeLike>(
    name: string | RegExp,
    options?: { stripHOCs: ReadonlyArray<string> },
): PropTypes.Requireable<T>;

export function disallowedIf<T>(
    propType: PropTypes.Requireable<T>,
    otherPropName: string,
    otherPropType: PropTypes.Validator<any>,
): PropTypes.Requireable<T>;

export function elementType<T = PropTypes.ReactElementLike>(
    type: ReactTypeLike,
): PropTypes.Requireable<T>;

export function explicitNull(): PropTypes.Requireable<null | undefined>;

export function forbidExtraProps<T extends object>(
    propTypes: PropTypes.ValidationMap<T>,
): PropTypes.ValidationMap<T>;

export function integer(): PropTypes.Requireable<number>;

export function keysOf<T, P>(
    propType: PropTypes.Validator<P>,
    name?: string,
): PropTypes.Requireable<T>;

export function mutuallyExclusiveProps<T>(
    propType: PropTypes.Requireable<T>,
    ...propNames: string[]
): PropTypes.Requireable<T>;

export function mutuallyExclusiveProps<T>(
    // tslint:disable-next-line:unified-signatures
    propType: PropTypes.Validator<T>,
    ...propNames: string[]
): PropTypes.Requireable<T>;

export function mutuallyExclusiveTrueProps(...propNames: string[]): PropTypes.Requireable<boolean>;

export function nChildren<T = PropTypes.ReactNodeLike, P = any>(
    n: number,
    propType?: PropTypes.Validator<P>,
): PropTypes.Requireable<T>;

export const nonNegativeInteger: PropTypes.Requireable<number>;

export function nonNegativeNumber(): PropTypes.Requireable<number>;

export function numericString(): PropTypes.Requireable<string>;

export function object<T extends object>(): PropTypes.Requireable<T>;

export function or<A>(propTypes: [PropTypes.Validator<A>], name?: string): PropTypes.Requireable<A>;

export function or<A, B>(
    propTypes: [PropTypes.Validator<A>, PropTypes.Validator<B>],
    name?: string,
): PropTypes.Requireable<A | B>;

export function or<A, B, C>(
    propTypes: [PropTypes.Validator<A>, PropTypes.Validator<B>, PropTypes.Validator<C>],
    name?: string,
): PropTypes.Requireable<A | B | C>;

export function or<T>(
    propTypes: Array<PropTypes.Validator<T>>,
    name?: string,
): PropTypes.Requireable<T>;

export function or<T = any>(
    // tslint:disable-next-line:unified-signatures
    propTypes: Array<PropTypes.Validator<any>>,
    name?: string,
): PropTypes.Requireable<T>;

export function range<T extends number>(min?: number, max?: number): PropTypes.Requireable<T>;

export function range(min?: number, max?: number): PropTypes.Requireable<number>;

export function ref<T = HTMLElement>(): PropTypes.Requireable<ReactLegacyRefLike<T>>;

export function requiredBy<P>(
    requiredByPropName: string,
    propType: PropTypes.Validator<P>,
    defaultValue?: any,
): PropTypes.Requireable<P>;

export function restrictedProp<T>(
    messageFunction?: (
        props: object,
        propName: string,
        componentName: string,
        location: string,
        propFullName: string,
    ) => string | Error | undefined,
): PropTypes.Requireable<T>;

export function sequenceOf<T>(...specifiers: Specifier[]): PropTypes.Requireable<T>;

export function shape<T extends object>(
    propTypes: PropTypes.ValidationMap<T>,
): PropTypes.Requireable<T>;

export function stringStartsWith(string: string): PropTypes.Requireable<string>;

export function uniqueArray<T = any>(): PropTypes.Requireable<T[]>;

export function uniqueArrayOf<T, P>(
    propType: PropTypes.Validator<P>,
    mapperOrName: ((value: any) => any) | string,
    name?: string,
): PropTypes.Requireable<T[]>;

export function valuesOf<T>(
    propType: PropTypes.Validator<T>,
): PropTypes.Requireable<{ [key: string]: T }>;

export function withShape<T extends object, P, S>(
    propType: PropTypes.Validator<P>,
    propTypes: PropTypes.ValidationMap<S>,
): PropTypes.Requireable<T>;
