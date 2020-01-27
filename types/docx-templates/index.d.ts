// Type definitions for docx-templates 3.1
// Project: https://github.com/guigrpa/docx-templates#readme
// Definitions by: Sebastian Krüger <https://github.com/mathe42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'docx-templates' {
    function createReport(options: UserOptions<'buffer'>): Promise<Buffer>;
    function createReport(options: UserOptions<string>): Promise<void>;

    interface runJSOptions {
        sandbox: any;
        ctx: any;
    }

    interface UserOptions<T> {
        template: string | ArrayBuffer; // path
        data?: ReportData | QueryResolver;
        queryVars?: any;
        output?: T;
        cmdDelimiter?: string | [string, string];
        literalXmlDelimiter?: string;
        processLineBreaks?: boolean; // true by default
        noSandbox?: boolean;
        runJs?: (
            runJSOptions: runJSOptions,
        ) => {
            modifiedSandbox: any;
            result: any;
        };
        additionalJsContext?: any;
        _probe?: 'JS' | 'XML';
    }

    type Query = string;

    type QueryResolver = (query?: Query, queryVars?: any) => ReportData | Promise<ReportData>;

    type ReportData = any;

    export default createReport;
}
