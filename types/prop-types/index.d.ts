// Type definitions for prop-types 15.5
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type IsOptional<T> = undefined | null extends T ? true : undefined extends T ? true : null extends T ? true : false;

// Get required keys of a propTypes object, nullable requireables are excluded
// Non-nullable validators of optional types are also excluded, though this should never occur naturally
export type RequiredKeys<V> = { [K in keyof V]: V[K] extends Validator<infer T> ? V[K] extends Requireable<infer T> ? never : IsOptional<T> extends true ? never : K : never }[keyof V];
export type OptionalKeys<V> = Exclude<keyof V, RequiredKeys<V>>;
export type InferPropsInner<V> = { [K in keyof V]: InferType<V[K]>; };

export type Validator<T> = (object: T, key: string, componentName: string, ...rest: any[]) => Error | null;

export interface Requireable<T> extends Validator<T> {
    isRequired: Validator<NonNullable<T>>;
}

export type ValidationMap<T> = { [K in keyof T]-?: IsOptional<T[K]> extends true ? Requireable<NonNullable<T[K]>> : Validator<T[K]> };
// Workaround for type inference, ValidationMap<{}> does not work correctly because of conditional types
export type AnyValidationMap = { [K in keyof any]: Validator<any> | Requireable<any> };

export type InferType<V> = V extends Requireable<infer T> ? T | null | undefined : V extends Validator<infer T> ? T : any;
export type InferProps<V> =
    & InferPropsInner<Pick<V, RequiredKeys<V>>>
    & Partial<InferPropsInner<Pick<V, OptionalKeys<V>>>>;

export const any: Requireable<any>;
export const array: Requireable<any[]>;
export const bool: Requireable<boolean>;
export const func: Requireable<(...args: any[]) => any>;
export const number: Requireable<number>;
export const object: Requireable<object>;
export const string: Requireable<string>;
export const node: Requireable<React.ReactNode>;
export const element: Requireable<React.ReactElement<any>>;
export const symbol: Requireable<symbol>;
export function instanceOf<T>(expectedClass: new (...args: any[]) => T): Requireable<T>;
export function oneOf<T>(types: T[]): Requireable<T>;
export function oneOfType<T extends Validator<any>>(types: T[]): Requireable<NonNullable<InferType<T>>>;
export function arrayOf<T>(type: Requireable<T>): Requireable<T[]>;
export function objectOf<T>(type: Requireable<T>): Requireable<{ [K in keyof any]: T; }>;
export function shape<P extends AnyValidationMap>(type: P): Requireable<InferProps<P>>;

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
