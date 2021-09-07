// Type definitions for json-query 2.2
// Project: http://github.com/mmckegg/json-query#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = JsonQuery;

declare function JsonQuery(
    selector: JsonQuery.Selector | JsonQuery.SelectorWithQueryParams,
    options: JsonQuery.Options
): JsonQuery.Result;

declare namespace JsonQuery {
    type Selector = string;

    type QueryParam = any;
    // No way to support [Selector, ...QueryParam[]]?
    // 10 params should be more than enough, hopefully.
    type SelectorWithQueryParams =
        [Selector, QueryParam]
        | [Selector, QueryParam]
        | [Selector, QueryParam]
        | [Selector, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam]
        | [Selector, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam, QueryParam];

    type Context = any;

    type Filter = (input: Context, ...args: any[]) => Context;
    interface Locals {
        [filterName: string]: Filter;
    }

    interface Options {
        data?: Context | undefined;
        rootContext?: Context | undefined;
        source?: Context | undefined;
        context?: Context | undefined;
        parent?: Context | undefined;
        locals?: Locals | undefined;
        filters?: Locals | undefined;
        globals?: boolean | undefined;
        force?: boolean | undefined;
        allowRegexp?: boolean | undefined;
    }

    interface Result {
        value: any;
        key: string;
        references: any[];
        parents: string[];
    }
}
