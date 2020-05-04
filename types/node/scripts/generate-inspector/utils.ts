// Utility functions

import { Documentable, Field, ObjectReference } from "./devtools-protocol-schema";

/**
 * Returns a function suitable for Array#reduce that flattens an array of
 * arrays.
 * @param inBetween A value to insert between groups of flattened values
 */
export function flattenArgs<T = string>(inBetween?: T): (acc: T[], next: T[]) => T[] {
    if (inBetween != null) {
        return (acc: T[], next: T[]) => {
            if (acc.length > 0) {
                return acc.concat([inBetween], next);
            } else {
                return acc.concat(next);
            }
        };
    } else {
        return (acc: T[], next: T[]) => acc.concat(next);
    }
}

/**
 * Returns whether an array exists and has elements.
 * @param a The array to check.
 */
export const hasElements = (a?: any[]): boolean => !!a && a.length > 0;

/**
 * Given an array that might have null elements, return an array with just the
 * non-null elements.
 * @param a The array to filter.
 */
export const filterNull = <T>(a: Array<T | null>): T[] => a.filter(x => x != null) as T[];

/**
 * Returns the capitalized form of a given string.
 * @param s The string to capitalize
 */
export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Returns whether a given object is an ObjectReference.
 * @param t An object whose type should be checked
 */
export function isObjectReference(t: Field): t is ObjectReference {
    return "$ref" in t;
}

/**
 * Given a Documentable object, return a comment block generated from its
 * contents, or an empty array if the object doesn't contain any information
 * to populate a comment block.
 * @param documentable A Documentable object.
 */
export const createDocs = ({ deprecated, description, experimental }: Documentable): string[] => {
    const hasDocs = !!description || deprecated || experimental;
    return hasDocs ? filterNull([
        "/**",
        ...(description ? description.split(/\r?\n/).map(l => ` * ${l}`) : []),
        deprecated ? " * @deprecated" : null,
        experimental ? " * @experimental" : null,
        " */",
    ]) : [];
};

/**
 * Given a string, replace lines that match a known pattern (...// # propName)
 * with args[propName] if it exists.
 * @param str The input string.
 * @param args An object mapping strings to arrays of strings.
 */
export const substitute = (
    str: string,
    args: NodeJS.Dict<string[]>,
): string => {
    return str.split("\n")
        .map(line => {
            const regex = /(\s*)\/\/ # (.*)/;
            const matches = line.match(regex);
            if (matches) {
                const [_0, prefix, argName] = matches;
                const arg = args[argName];
                if (arg) {
                    return arg.map(l => prefix + l);
                }
                return [];
            }
            return [line];
        })
        .reduce(flattenArgs(), [])
        .join("\n");
};

export const trimRight = (s: string): string => {
    // TODO(kjin): This is terrible
    const numTrailingSpaces: number = s.split("").reverse().findIndex(c => c !== " ");
    if (numTrailingSpaces === -1) {
        return "";
    }
    return s.slice(0, s.length - numTrailingSpaces);
};
