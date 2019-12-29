// Type definitions for markdownlint 0.13
// Project: https://github.com/DavidAnson/markdownlint
// Definitions by: ark120202 <https://github.com/ark120202>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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
        [rule: string]: undefined | string | number | boolean | { [key: string]: any };

        /**
         * Default state for all rules.
         * @default true
         */
        default?: boolean;

        /**
         * Heading levels should only increment by one level at a time.
         *
         * This rule is triggered when you skip heading levels in a markdown document.
         */
        "heading-increment"?: boolean;
        /**
         * Heading levels should only increment by one level at a time.
         *
         * This rule is triggered when you skip heading levels in a markdown document.
         */
        "header-increment"?: boolean;

        /**
         * First heading should be a top level heading.
         * @deprecated
         * @see {"first-line-heading"}
         * @see {"first-line-h1"}
         */
        "first-heading-h1"?: boolean | {
            level?: number;
        };
        /**
         * First heading should be a top level heading.
         * @deprecated
         * @see {"first-line-heading"}
         * @see {"first-line-h1"}
         */
        "first-header-h1"?: MarkdownlintConfig["first-heading-h1"];

        /**
         * Heading style.
         * @default "consistent"
         */
        "heading-style"?: {
            style?: "consistent" | "atx" | "atx_closed" | "setext" | "setext_with_atx" | "setext_with_atx_closed"
        };
        /**
         * Heading style.
         * @default "consistent"
         */
        "header-style"?: MarkdownlintConfig["heading-style"];

        /**
         * This rule is triggered when the symbols used in the document for unordered list items do not match the configured unordered list style:
         *
         * ```md
         * * Item 1
         * + Item 2
         * - Item 3
         * ```
         *
         * @default "consistent"
         */
        "ul-style"?: {
            style?: "consistent" | "asterisk" | "plus" | "dash" | "sublist";
        };

        /**
         * Inconsistent indentation for list items at the same level
         */
        "list-indent"?: boolean;

        /**
         * Consider starting bulleted lists at the beginning of the line.
         */
        "ul-start-left"?: boolean;

        /**
         * This rule is triggered when list items are not indented by the configured number of spaces.
         * @default 2
         */
        "ul-indent"?: boolean | {
            indent?: number;
        };

        "no-trailing-spaces"?: boolean | {
            br_spaces?: number;
            list_item_empty_lines?: boolean
        };

        "no-hard-tabs"?: boolean | {
            code_blocks?: boolean;
        };

        "no-reversed-links"?: boolean;

        "no-multiple-blanks"?: boolean | {
            maximum?: number;
        };

        "line-length"?: boolean | {
            line_length: number;
            heading_line_length: number;
            /**
             * Exclude this rule for code blocks.
             */
            code_blocks?: boolean;
            /**
             * Exclude this rule for tables.
             */
            tables?: boolean;
            /**
             * Exclude this rule for headings/headers.
             */
            headings?: boolean;
            /**
             * Exclude this rule for headings/headers (alias for `headings`).
             */
            headers?: boolean;
        };

        "commands-show-output"?: boolean;

        "no-missing-space-atx"?: boolean;

        "no-multiple-space-atx"?: boolean;

        "no-missing-space-closed-atx"?: boolean;

        "no-multiple-space-closed-atx"?: boolean;

        "blanks-around-headings"?: boolean | {
            lines_above?: number;
            lines_below?: number;
        };

        "blanks-around_headers"?: MarkdownlintConfig["blanks-around-headings"];

        "heading-start-left"?: boolean;
        "header-start-left"?: MarkdownlintConfig["heading-start-left"];

        "no-duplicate-heading"?: boolean | {
            siblings_only?: boolean;
            allow_different_nesting?: boolean;
        };
        "no-duplicate-header"?: MarkdownlintConfig["no-duplicate-heading"];

        "single-title"?: boolean | {
            /**
             * @default 1
             */
            level?: number;
            /**
             * @default "^\s*title:"
             */
            front_matter_title?: string;
        };
        "single-h1"?: MarkdownlintConfig["single-title"];

        "no-trailing-punctuation"?: boolean | {
            /**
             * @default ".,;:!?"
             */
            punctuation?: string;
        };

        "no-multiple-space-blockquote"?: boolean;

        "no-blanks-blockquote"?: boolean;

        "ol-prefix"?: boolean | {
            style?: "one" | "ordered" | "one_or_ordered" | "zero";
        };

        "list-marker-space"?: boolean | {
            "ul_single"?: number;
            "ol_single"?: number;
            "ul_multi"?: number;
            "ol_multi"?: number;
        };

        "blanks-around-fences"?: boolean;

        "blanks-around-lists"?: boolean;

        "no-inline-html"?: boolean | {
            allowed_elements?: string[];
        };

        "no-bare-urls"?: boolean;

        "hr-style"?: {
            /**
             * @default consistent
             */
            style: string;
        };

        "no-emphasis-as-heading"?: boolean | {
            punctuation?: string;
        };
        "no-emphasis-as-header"?: MarkdownlintConfig["no-emphasis-as-heading"];

        "no-space-in-emphasis"?: boolean;

        "no-space-in-code"?: boolean;

        "no-space-in-links"?: boolean;

        "fenced-code-language"?: boolean;

        "first-line-heading"?: {
            level?: number;
            front_matter_title?: string;
        };
        "first-line-h1"?: MarkdownlintConfig["first-line-heading"];

        "no-empty-links"?: boolean;

        "required-headings"?: string[];
        "required-headers"?: MarkdownlintConfig["required-headings"];

        "proper-names"?: {
            names?: string[] | null;
            code_blocks?: boolean;
        };

        "no-alt-text"?: boolean;
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
