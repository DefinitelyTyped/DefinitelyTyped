// Type definitions for js-yaml 3.12
// Project: https://github.com/nodeca/js-yaml
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Sebastian Clausen <https://github.com/sclausen>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace jsyaml;

export function safeLoad(str: string, opts?: LoadOptions): string | object | undefined;
export function load(str: string, opts?: LoadOptions): any;

export class Type {
    constructor(tag: string, opts?: TypeConstructorOptions);
    kind: 'sequence' | 'scalar' | 'mapping' | null;
    resolve(data: any): boolean;
    construct(data: any): any;
    instanceOf: object | null;
    predicate: ((data: object) => boolean) | null;
    represent: ((data: object) => any) | { [x: string]: (data: object) => any } | null;
    defaultStyle: string | null;
    styleAliases: { [x: string]: any };
}

/* tslint:disable-next-line:no-unnecessary-class */
export class Schema implements SchemaDefinition {
    constructor(definition: SchemaDefinition);
    static create(types: Type[] | Type): Schema;
    static create(schemas: Schema[] | Schema, types: Type[] | Type): Schema;
}

export function safeLoadAll(str: string, iterator?: null, opts?: LoadOptions): any[];
export function safeLoadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): void;

export function loadAll(str: string, iterator?: null, opts?: LoadOptions): any[];
export function loadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): void;

export function safeDump(obj: any, opts?: DumpOptions): string;
export function dump(obj: any, opts?: DumpOptions): string;

export interface LoadOptions {
    /** string to be used as a file path in error/warning messages. */
    filename?: string | undefined;
    /** function to call on warning messages. */
    onWarning?(this: null, e: YAMLException): void;
    /** specifies a schema to use. */
    schema?: SchemaDefinition | undefined;
    /** compatibility with JSON.parse behaviour. */
    json?: boolean | undefined;
    /** listener for parse events */
    listener?(this: State, eventType: EventType, state: State): void;
}

export type EventType = 'open' | 'close';

export interface State {
    input: string;
    filename: string | null;
    schema: SchemaDefinition;
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
    indent?: number | undefined;
    /** when true, will not add an indentation level to array elements */
    noArrayIndent?: boolean | undefined;
    /** do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types. */
    skipInvalid?: boolean | undefined;
    /** specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere */
    flowLevel?: number | undefined;
    /** Each tag may have own set of styles.    - "tag" => "style" map. */
    styles?: { [x: string]: any } | undefined;
    /** specifies a schema to use. */
    schema?: SchemaDefinition | undefined;
    /** if true, sort keys when dumping YAML. If a function, use the function to sort the keys. (default: false) */
    sortKeys?: boolean | ((a: any, b: any) => number) | undefined;
    /** set max line width. (default: 80) */
    lineWidth?: number | undefined;
    /** if true, don't convert duplicate objects into references (default: false) */
    noRefs?: boolean | undefined;
    /** if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1 (default: false) */
    noCompatMode?: boolean | undefined;
    /**
     * if true flow sequences will be condensed, omitting the space between `key: value` or `a, b`. Eg. `'[a,b]'` or `{a:{b:c}}`.
     * Can be useful when using yaml for pretty URL query params as spaces are %-encoded. (default: false).
     */
    condenseFlow?: boolean | undefined;
}

export interface TypeConstructorOptions {
    kind?: 'sequence' | 'scalar' | 'mapping' | undefined;
    resolve?: ((data: any) => boolean) | undefined;
    construct?: ((data: any) => any) | undefined;
    instanceOf?: object | undefined;
    predicate?: ((data: object) => boolean) | undefined;
    represent?: ((data: object) => any) | { [x: string]: (data: object) => any } | undefined;
    defaultStyle?: string | undefined;
    styleAliases?: { [x: string]: any } | undefined;
}

export interface SchemaDefinition {
    implicit?: any[] | undefined;
    explicit?: Type[] | undefined;
    include?: Schema[] | undefined;
}

/** only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346 */
export let FAILSAFE_SCHEMA: Schema;
/** only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346 */
export let JSON_SCHEMA: Schema;
/** same as JSON_SCHEMA: http://www.yaml.org/spec/1.2/spec.html#id2804923 */
export let CORE_SCHEMA: Schema;
/** all supported YAML types, without unsafe ones (!!js/undefined, !!js/regexp and !!js/function): http://yaml.org/type/ */
export let DEFAULT_SAFE_SCHEMA: Schema;
/** all supported YAML types. */
export let DEFAULT_FULL_SCHEMA: Schema;
export let MINIMAL_SCHEMA: Schema;
export let SAFE_SCHEMA: Schema;

export class YAMLException extends Error {
    constructor(reason?: any, mark?: any);
    toString(compact?: boolean): string;
}
