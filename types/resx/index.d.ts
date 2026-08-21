export interface ObjectOfStrings {
    [key: string]: string;
}

export interface Js2ResxOptions {
    pretty?: boolean | undefined;
    indent?: string | undefined;
    newline?: string | undefined;
}

// resx2js: promise version
export function resx2js(str: string, withComments?: boolean): Promise<ObjectOfStrings>;

// resx2js: callback version
export function resx2js(str: string, cb: (error: Error, result: ObjectOfStrings) => void): void;

// resx2js: callback version with option
export function resx2js(str: string, withComments: boolean, cb: (error: Error, result: ObjectOfStrings) => void): void;

// js2resx: promise version
export function js2resx(resources: ObjectOfStrings, opt?: Js2ResxOptions): Promise<string>;

// js2resx: callback version
export function js2resx(resources: ObjectOfStrings, cb: (error: Error, result: string) => void): void;

// js2resx: callback version with options
export function js2resx(
    resources: ObjectOfStrings,
    opt: Js2ResxOptions,
    cb: (error: Error, result: string) => void,
): void;
