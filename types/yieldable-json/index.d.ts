// Type definitions for yieldable-json 2.0
// Project: https://github.com/ibmruntimes/yieldable-json
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Callback<T> = (err: Error, result: T) => void;

export type Reviver = (key: number, value: any) => any;

export type Replacer = (key: number, value: any) => any;

export function stringifyAsync(data: object, callback: Callback<string>): () => void;
export function stringifyAsync(
    data: object,
    replacer_intensity_space: Replacer | any[] | null | number | string,
    callback: Callback<string>,
): () => void;
export function stringifyAsync(
    data: object,
    replacer_space: Replacer | any[] | null | number | string,
    space_intensity: number | string,
    callback: Callback<string>,
): () => void;
export function stringifyAsync(
    data: object,
    replacer: Replacer | any[] | null,
    space: number | string,
    intensity: number,
    callback: Callback<string>,
): () => void;

export function parseAsync(text: string, callback: Callback<object>): string;
export function parseAsync(text: string, reviver_intensity: Reviver | number, callback: Callback<object>): string;
export function parseAsync(text: string, reviver: Reviver, intensity: number, callback: Callback<object>): string;
