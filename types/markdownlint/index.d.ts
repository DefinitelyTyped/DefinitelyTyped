// Type definitions for markdownlint 0.6
// Project: https://github.com/DavidAnson/markdownlint
// Definitions by: ark120202 <https://github.com/ark120202>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function markdownlint(
    options: markdownlint.MarkdownlintOptions,
    callback: (err: Error | null, result: markdownlint.MarkdownlintResults) => any,
): void;

declare namespace markdownlint {
    function sync(options: MarkdownlintOptions): MarkdownlintResults;

    function readConfig(
        file: string,
        callback: (err: Error | null, result: MarkdownlintConfig) => any,
    ): void;
    function readConfigSync(file: string): MarkdownlintConfig;

    interface MarkdownlintConfig {
        [rule: string]: boolean | { [key: string]: any };
    }

    interface MarkdownlintOptions {
        files?: ReadonlyArray<string> | string;
        strings?: { [identifier: string]: string };
        config?: MarkdownlintConfig;
        frontMatter?: RegExp;
        noInlineConfig?: boolean;
        resultVersion?: number;
    }

    interface MarkdownlintResult {
        lineNumber: number;
        ruleName: string;
        ruleAlias: string;
        ruleDescription: string;
        errorDetail?: string;
        errorContext: string;
        errorRange?: [number, number];
    }

    interface MarkdownlintResults {
        [source: string]: MarkdownlintResult[] | ((useAlias?: boolean) => string);
        toString(useAlias?: boolean): string;
    }
}

export = markdownlint;
