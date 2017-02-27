// Type definitions for Stylelint 7.9
// Project: https://github.com/stylelint/stylelint
// Definitions by: Alan Agius <https://github.com/alan-agius4/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LinterOptions {
    code?: string;
    codeFilename?: string;
    config?: JSON;
    configBasedir?: string;
    configFile?: string;
    configOverrides?: JSON;
    files?: string | string[];
    formatter?: "json" | "string" | "verbose";
    ignoreDisables?: boolean;
    reportNeedlessDisables?: boolean;
    ignorePath?: boolean;
    syntax?: "scss" | "less" | "sugarss";
    customSyntax?: string;
}

export interface LinterResult {
    errored: boolean;
    output: string;
    postcssResults: any[];
    results: LintResult[];
}

export interface LintResult {
    source: string;
    ignored: boolean;
    warnings: string[];
}

export function lint(options?: LinterOptions): Promise<LinterResult>;
