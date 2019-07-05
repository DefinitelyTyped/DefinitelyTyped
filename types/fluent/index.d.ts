// Type definitions for fluent 0.11
// Project: http://projectfluent.org
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>, James Nimlos <https://github.com/jamesnimlos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface FluentBundleContructorOptions {
    functions?: object;
    useIsolating?: boolean;
    transform?: (...args: any[]) => any;
}

export class FluentType {
    constructor(value: any, opts: object);
    toString(bundle: FluentBundle): string;
    valueOf(): any;
}

export class FluentNone extends FluentType  {}
export class FluentNumber extends FluentType {}
export class FluentDateTime extends FluentType {}

export type FluentNode = FluentType | string;

export class FluentResource extends Map {
    static fromString(source: string): FluentResource;
}

export class FluentBundle {
    constructor(locales: string | string[], options?: FluentBundleContructorOptions);
    locales: string[];
    messages: IterableIterator<[string, FluentNode[]]>;
    hasMessage(id: string): boolean;
    addMessages(source: string): string[];
    getMessage(id: string): FluentNode[] | undefined;
    format(message: FluentNode[], args?: object, errors?: Array<string | Error>): string;
    addResource(res: FluentResource): string[];
}

export function ftl(strings: TemplateStringsArray): string;
