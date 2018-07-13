// Type definitions for prop-types 15.5
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactElement, ReactNode } from 'react';

declare const resolvedType: unique symbol;

export interface Validator<T, R = false> {
    (object: T, key: string, componentName: string, ...rest: any[]): Error | null;
    [resolvedType]?: R extends true ? T : T | null | undefined;
}

export interface Requireable<T> extends Validator<T> {
    isRequired: Validator<T, true>;
}

export type ValidationMap<T = any> = {
    [K in keyof T]-?: ReactNode extends T[K] ? Validator<T[K]> : Validator<NonNullable<T[K]>, any>
};

type RequiredValidatorKeys<O> = {
    [K in keyof O]: O[K] extends Requireable<any> ? never : O[K] extends Validator<any, true> ? K : never
}[keyof O];

type OptionalValidatorKeys<O> = {
    [K in keyof O]: O[K] extends Validator<any> ? K : never
}[keyof O];

type InferPropsOfValidationMap<O> = {
    [K in keyof O]: O[K] extends Validator<infer T, infer R> ? R extends true ? T : T | null | undefined : any
};

export type InferProps<O> =
    & InferPropsOfValidationMap<Pick<O, RequiredValidatorKeys<O>>>
    & Partial<InferPropsOfValidationMap<Pick<O, OptionalValidatorKeys<O>>>>;

export const any: Requireable<any>;
export const array: Requireable<any[]>;
export const bool: Requireable<boolean>;
export const element: Requireable<ReactElement<any>>;
export const func: Requireable<(...args: any[]) => any>;
export const node: Requireable<ReactNode>;
export const number: Requireable<number>;
export const object: Requireable<object>;
export const string: Requireable<string>;
export const symbol: Requireable<symbol>;
export function instanceOf<C extends new (...args: any[]) => any>(expectedClass: C): Requireable<InstanceType<C>>;
export function oneOf(types: any[]): Requireable<any>;
export function oneOfType(types: Array<Requireable<any>>): Requireable<any>;
export function arrayOf<T>(type: Requireable<T>): Requireable<T[]>;
export function objectOf<T>(type: Requireable<T>): Requireable<{ [K: string]: T}>;
export function shape<O>(type: O): Requireable<InferProps<O>>;

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param typeSpecs Map of name to a ReactPropType
 * @param values Runtime values that need to be type-checked
 * @param location e.g. "prop", "context", "child context"
 * @param componentName Name of the component for error messages.
 * @param getStack Returns the component stack.
 */
export function checkPropTypes(typeSpecs: any, values: any, location: string, componentName: string, getStack?: () => any): void;
