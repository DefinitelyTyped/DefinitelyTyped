// Type definitions for webpack-config-utils 2.3
// Project: https://github.com/kentcdodds/webpack-config-utils#readme
// Definitions by: Martin Hochel <https://github.com/hotell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function getIfUtils<E extends EnvVars | string>(
    env: { [P in E]: boolean | string } | E,
    vars?: Array<EnvVars | string>
): IfUtils;
export function removeEmpty<T>(input: Array<T | undefined>): T[];
export function removeEmpty<T>(input: { [P in keyof T]: T[P] }): NonEmptyObject<T>;
export function propIf<E>(a: Falsy, value: any, alternate: E): E;
export function propIf<I>(a: any, value: I, alternate: any): I;
export function propIfNot<I>(a: Falsy, value: I, alternate: any): I;
export function propIfNot<E>(a: any, value: any, alternate: E): E;

export type Falsy = false | '' | 'false' | undefined | null | 0;
export type DefinedObjKeys<T> = ({ [P in keyof T]: T[P] extends undefined ? never : P })[keyof T];
export type NonEmptyObject<T, P extends DefinedObjKeys<T> = DefinedObjKeys<T>> = { [PP in P]: T[PP] };

export type EnvVars = 'production' | 'prod' | 'test' | 'development' | 'dev';

export interface IfUtilsFn {
    <Y, N>(value: Y, alternate?: N): Y | N;
    (): boolean;
}
export interface IfUtils {
    ifDevelopment: IfUtilsFn;
    ifNotDevelopment: IfUtilsFn;
    ifDev: IfUtilsFn;
    ifNotDev: IfUtilsFn;
    ifProduction: IfUtilsFn;
    ifNotProduction: IfUtilsFn;
    ifProd: IfUtilsFn;
    ifNotProd: IfUtilsFn;
    ifTest: IfUtilsFn;
    ifNotTest: IfUtilsFn;
    [key: string]: IfUtilsFn;
}
