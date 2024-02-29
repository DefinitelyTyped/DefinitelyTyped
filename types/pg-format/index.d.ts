export = format;

declare function format(fmt: string, ...args: any[]): string;

declare namespace format {
    function config(config?: {
        pattern: {
            ident?: string | undefined;
            literal?: string | undefined;
            string?: string | undefined;
        };
    }): void;
    function ident(val: string | number | boolean | any[] | Date): string;
    function literal(val: string | number | boolean | any[] | Date | object | null | undefined): string;
    function string(val: string | number | boolean | any[] | Date | object | null | undefined): string;
    function withArray(fmt: string, array: any[]): string;
}
