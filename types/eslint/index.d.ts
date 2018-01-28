// Type definitions for eslint 4.16
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class SourceCode {
    text: string;
    ast: any;
    lines: string[];

    constructor(text: string, ast: any);
}

export type RuleLevel = 'off' | 'warn' | 'error' | 0 | 1 | 2;

export interface Config {
    rules?: {
        [name: string]: (RuleLevel | [RuleLevel, any])
    };
    parser?: string;
    parserOptions?: any;
    settings?: any;
    env?: { [name: string]: boolean };
    globals?: { [name: string]: boolean };
}

export interface LintOptions {
    filename?: string;
    preprocess?: (code: string) => string[];
    postprocess?: (problemLists: LintMessage[][]) => LintMessage[];
    allowInlineConfig?: boolean;
    reportUnusedDisableDirectives?: boolean;
}

export type Severity = 1 | 2;

export interface LintMessage {
    column: number;
    line: number;
    endColumn?: number;
    endLine?: number;
    ruleId: string | null;
    message: string;
    nodeType: string;
    fatal?: true;
    severity: Severity;
    fix?: Fix;
    source: string | null;
}

export interface FixOptions extends LintOptions {
    fix?: boolean;
}

export interface Fix {
    range: [number, number];
    text: string;
}

export interface FixReport {
    fixed: boolean;
    output: string;
    messages: LintMessage[];
}

export type RuleModule = any;

export type ParserModule = any;

export class Linter {
    version: string;

    verify(code: SourceCode | string, config: Config, filename?: string): LintMessage[];
    verify(code: SourceCode | string, config: Config, options: LintOptions): LintMessage[];

    verifyAndFix(code: string, config: Config, filename?: string): FixReport;
    verifyAndFix(code: string, config: Config, options: FixOptions): FixReport;

    getSourceCode(): SourceCode;

    defineRule(name: string, rule: RuleModule): void;

    defineRules(rules: { [name: string]: RuleModule }): void;

    getRules(): Map<string, RuleModule>;

    defineParser(name: string, parser: ParserModule): void;
}

export class CLIEngineOptions {
    allowInlineConfig?: boolean;
    baseConfig?: boolean;
    cache?: boolean;
    cacheFile?: string;
    configFile?: string;
    cwd?: string;
    envs?: string[];
    extensions?: string[];
    fix?: boolean;
    globals?: string[];
    ignore?: boolean;
    ignorePath?: string;
    ignorePattern?: string;
    useEslintrc?: boolean;
    parser?: string;
    parserOptions?: any;
    plugins?: string[];
    rules?: {
        [name: string]: (RuleLevel | [RuleLevel, any]);
    };
    rulePaths?: string[];
}

export interface LintResult {
    filePath: string;
    messages: LintMessage[];
    errorCount: number;
    warningCount: number;
    fixableErrorCount: number;
    fixableWarningCount: number;
    output?: string;
    source?: string;
}

export interface LintReport {
    results: LintResult[];
    errorCount: number;
    warningCount: number;
    fixableErrorCount: number;
    fixableWarningCount: number;
}

export type Formatter = (results: LintResult[]) => string;

export class CLIEngine {
    version: string;

    constructor(options: CLIEngineOptions);

    executeOnFiles(patterns: string[]): LintReport;

    resolveFileGlobPatterns(patterns: string[]): string[];

    getConfigForFile(filePath: string): Config;

    executeOnText(text: string, filename?: string): LintReport;

    addPlugin(name: string, pluginObject: any): void;

    isPathIgnored(filePath: string): boolean;

    getFormatter(format: string): Formatter;

    static getErrorResults(results: LintResult[]): LintResult[];

    static outputFixes(report: LintReport): void;

    getRules(): Map<string, RuleModule>;
}

export interface ValidTestCase {
    code: string;
    options?: any;
    filename?: string;
    parserOptions?: any;
}

export interface TestCaseError {
    message?: string | RegExp;
    type?: string;
    line?: number;
    column?: number;
    endLine?: number;
    endColumn?: number;
}

export interface InvalidTestCase extends ValidTestCase {
    errors: number | Array<TestCaseError | string>;
}

export interface Test {
    valid?: ValidTestCase[];
    invalid: InvalidTestCase[];
}

export class RuleTester {
    constructor(config?: any);

    run(name: string, rule: any, tests: Test): void;
}
