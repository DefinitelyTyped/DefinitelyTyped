// Type definitions for schema-utils 1.0
// Project: https://github.com/webpack-contrib/schema-utils
// Definitions by: Dmitry Guketlev <https://github.com/yavanosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function validate(
    schema: object | string | boolean,
    options: any,
    name: string): true;

export = validate;
