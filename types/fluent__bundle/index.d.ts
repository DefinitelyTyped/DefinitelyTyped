// Type definitions for @fluent/bundle 0.14
// Project: http://projectfluent.org
// Definitions by: Mark Weaver <https://github.com/blushingpenguin>, Huy Nguyen <https://github.com/huy-nguyen>, James Nimlos <https://github.com/jamesnimlos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

export class FluentError extends Error {}

export interface FluentBundleConstructorOptions {
    functions?: object;
    useIsolating?: boolean;
    transform?: (...args: any[]) => any;
}

export interface FluentBundleAddResourceOptions {
    allowOverrides?: boolean;
}

// tslint:disable-next-line:no-empty-interface
export interface Pattern {}

export interface RawMessage {
    value: Pattern | null;

    attributes: Record<string, Pattern>;
}

// tslint:disable-next-line:no-unnecessary-class
export class FluentResource {
    constructor(source: string);
}

export class FluentBundle {
    constructor(locales: string | string[], options?: FluentBundleConstructorOptions);
    locales: string[];
    hasMessage(id: string): boolean;
    getMessage(id: string): RawMessage;
    addResource(res: FluentResource, options?: FluentBundleAddResourceOptions): string[];
    formatPattern(pattern: Pattern | string, args?: object, errors?: Error[]): string;
}

export interface Scope {
    cloneForTermReference(args: object): Scope;
    reportError(error: string): void;
    memoizeIntlObject<OptsType, ObjectType>(
        ctor: new (locales: string[], opts: OptsType) => ObjectType,
        opts: OptsType,
    ): ObjectType;
}

export class FluentType {
    constructor(value: any);
    toString(scope?: Scope): string;
    valueOf(): any;
}

export class FluentNumber extends FluentType {
    /** Options passed to Intl.NumberFormat. */
    constructor(value: any, opts?: any);
    toString(scope: Scope): string;
}

export class FluentDateTime extends FluentType {
    /** Options passed to Intl.DateFormat. */
    constructor(value: any, opts?: any);
    toString(scope: Scope): string;
}

export as namespace FluentBundle;
