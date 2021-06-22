// Type definitions for js-yaml 4.0
// Project: https://github.com/nodeca/js-yaml
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Sebastian Clausen <https://github.com/sclausen>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Armaan Tobaccowalla <https://github.com/ArmaanT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace jsyaml;

export function load(str: string, opts?: LoadOptions): object | string | number | null | undefined;

export class Type {
    constructor(tag: string, opts?: TypeConstructorOptions);
    kind: 'sequence' | 'scalar' | 'mapping' | null;
    resolve(data: any): boolean;
    construct(data: any, type?: string): any;
    instanceOf: object | null;
    predicate: ((data: object) => boolean) | null;
    represent: ((data: object) => any) | { [x: string]: (data: object) => any } | null;
    representName: ((data: object) => any) | null;
    defaultStyle: string | null;
    multi: boolean;
    styleAliases: { [x: string]: any };
}

export class Schema {
    constructor(definition: SchemaDefinition | Type[] | Type);
    extend(types: SchemaDefinition | Type[] | Type): Schema;
}

export function loadAll(str: string, iterator?: null, opts?: LoadOptions): any[];
export function loadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): void;

export function dump(obj: any, opts?: DumpOptions): string;

export interface LoadOptions {
    /** string to be used as a file path in error/warning messages. */
    filename?: string;
    /** function to call on warning messages. */
    onWarning?(this: null, e: YAMLException): void;
    /** specifies a schema to use. */
    schema?: Schema;
    /** compatibility with JSON.parse behaviour. */
    json?: boolean;
    /** listener for parse events */
    listener?(this: State, eventType: EventType, state: State): void;
}

export type EventType = 'open' | 'close';

export interface State {
    input: string;
    filename: string | null;
    schema: Schema;
    onWarning: (this: null, e: YAMLException) => void;
    json: boolean;
    length: number;
    position: number;
    line: number;
    lineStart: number;
    lineIndent: number;
    version: null | number;
    checkLineBreaks: boolean;
    kind: string;
    result: any;
    implicitTypes: Type[];
}

export interface DumpOptions {
    /** indentation width to use (in spaces). */
    indent?: number;
    /** when true, will not add an indentation level to array elements */
    noArrayIndent?: boolean;
    /** do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types. */
    skipInvalid?: boolean;
    /** specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere */
    flowLevel?: number;
    /** Each tag may have own set of styles.    - "tag" => "style" map. */
    styles?: { [x: string]: any };
    /** specifies a schema to use. */
    schema?: Schema;
    /** if true, sort keys when dumping YAML. If a function, use the function to sort the keys. (default: false) */
    sortKeys?: boolean | ((a: any, b: any) => number);
    /** set max line width. (default: 80) */
    lineWidth?: number;
    /** if true, don't convert duplicate objects into references (default: false) */
    noRefs?: boolean;
    /** if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1 (default: false) */
    noCompatMode?: boolean;
    /**
     * if true flow sequences will be condensed, omitting the space between `key: value` or `a, b`. Eg. `'[a,b]'` or `{a:{b:c}}`.
     * Can be useful when using yaml for pretty URL query params as spaces are %-encoded. (default: false).
     */
    condenseFlow?: boolean;
    /** strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters. (default: `'`) */
    quotingType?: "'" | '"';
    /** if true, all non-key strings will be quoted even if they normally don't need to. (default: false) */
    forceQuotes?: boolean;
    /** callback `function (key, value)` called recursively on each key/value in source object (see `replacer` docs for `JSON.stringify`). */
    replacer?: (key: string, value: any) => any;
}

export interface TypeConstructorOptions {
    kind?: 'sequence' | 'scalar' | 'mapping';
    resolve?: (data: any) => boolean;
    construct?: (data: any, type?: string) => any;
    instanceOf?: object;
    predicate?: (data: object) => boolean;
    represent?: ((data: object) => any) | { [x: string]: (data: object) => any };
    representName?: (data: object) => any;
    defaultStyle?: string;
    multi?: boolean;
    styleAliases?: { [x: string]: any };
}

export interface SchemaDefinition {
    implicit?: Type[];
    explicit?: Type[];
}

/** only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346 */
export let FAILSAFE_SCHEMA: Schema;
/** only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346 */
export let JSON_SCHEMA: Schema;
/** same as JSON_SCHEMA: http://www.yaml.org/spec/1.2/spec.html#id2804923 */
export let CORE_SCHEMA: Schema;
/** all supported YAML types */
export let DEFAULT_SCHEMA: Schema;

export class YAMLException extends Error {
    constructor(reason?: any, mark?: any);
    toString(compact?: boolean): string;
}
