export = escape;

declare function escape(fmt: string, ...args: any[]): string;

declare namespace escape {
    function string(val: string): string;
    function dollarQuotedString(val: string): string;
    function ident(val: string): string;
    function literal(val: string): string;
}
