// Type definitions for stylelint 7.11
// Project: https://github.com/stylelint/stylelint
// Definitions by: Alan Agius <https://github.com/alan-agius4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type FormatterType = "json" | "string" | "verbose";

export type SyntaxType = "scss" | "sass" | "less" | "sugarss";

export interface LinterOptions {
    code?: string | undefined;
    codeFilename?: string | undefined;
    config?: JSON | undefined;
    configBasedir?: string | undefined;
    configFile?: string | undefined;
    configOverrides?: JSON | undefined;
    cache?: boolean | undefined;
    cacheLocation?: string | undefined;
    files?: string | string[] | undefined;
    fix?: boolean | undefined;
    formatter?: FormatterType | undefined;
    ignoreDisables?: boolean | undefined;
    reportNeedlessDisables?: boolean | undefined;
    ignorePath?: boolean | undefined;
    syntax?: SyntaxType | undefined;
    customSyntax?: string | undefined;
}

export interface LinterResult {
    errored: boolean;
    output: string;
    postcssResults: any[];
    results: LintResult[];
}

export interface LintResult {
    source: string;
    errored: boolean | undefined;
    ignored: boolean | undefined;
    warnings: string[];
    deprecations: string[];
    invalidOptionWarnings: any[];
}

export namespace formatters {
    function json(results: LintResult[]): string;
    function string(results: LintResult[]): string;
    function verbose(results: LintResult[]): string;
}

export function lint(options?: LinterOptions): Promise<LinterResult>;
