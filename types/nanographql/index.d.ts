// Type definitions for nanographql 2.0
// Project: https://github.com/yoshuawuyts/nanographql
// Definitions by: Christopher Dieringer <https://github.com/cdaringe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = nanographql;

declare function nanographql(query: TemplateStringsArray | string): (variables?: object) => string;
