// Type definitions for classnames 2.2
// Project: https://github.com/JedWatson/classnames
// Definitions by: Gwilyn Saunders <https://github.com/gwillz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

type OtherValue = undefined | null | boolean | number | '';

// Allow only valid strings (or string lists/dicts), 'other' values are ignored.
export type ClassValue<T extends string> = T | ClassDictionary<T> | ClassArray<T> | OtherValue;

export interface ClassArray<T extends string> extends Array<ClassValue<T>> {} // tslint:disable-line no-empty-interface

// Dict can accept anything as it's value, only it's truthy-ness is used.
// Although using 'any' here breaks the infer-powers below.
export type ClassDictionary<T extends string> = {
    [key in T]?: string | number | undefined | null | boolean;
};

// Bounded classnames can infer what string literals are permitted.
// Record<T, ...> will infer what literal strings are allows in ClassValue<T>.
export function bind<T extends string>(styles: Record<T, string>):
    (...classes: Array<ClassValue<T>>) => string;

declare const cn: {bind: typeof bind};
export default cn;
