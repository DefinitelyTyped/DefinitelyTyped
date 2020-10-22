// Type definitions for pg-escape 0.2
// Project: https://github.com/segmentio/pg-escape
// Definitions by: Cameron Yan <https://github.com/khell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = escape;

declare function escape(fmt: string, ...args: any[]): string;

declare namespace escape {
    function string(val: string): string;
    function dollarQuotedString(val: string): string;
    function ident(val: string): string;
    function literal(val: string): string;
}
