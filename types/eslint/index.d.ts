// Type definitions for eslint 4.16
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Ast {
    comments: any[],
    tokens: any[],
    loc: any,
    range: any[];
}

export type AstNode = any;
export type Token = any;
export type Comment = any;

export type FilterPredicate = (tokenOrComment: Token | Comment) => boolean;

export type CursorWithSkipOptions = number | FilterPredicate | {
    includeComments?: boolean;
    filter?: FilterPredicate;
    skip?: number;
}

export type CursorWithCountOptions = number | FilterPredicate | {
    includeComments?: boolean;
    filter?: FilterPredicate;
    count?: number;
}

export class TokenStore {
    getTokenByRangeStart(offset: number, options?: { includeComments?: boolean }): Token | null;

    getFirstToken(node: AstNode, options: CursorWithSkipOptions): Token | null;

    getFirstTokens(node: AstNode, options: CursorWithCountOptions): Token[];

    getLastToken(node: AstNode, options: CursorWithSkipOptions): Token | null;

    getLastTokens(node: AstNode, options: CursorWithCountOptions): Token[];

    getTokenBefore(node: AstNode | Token | Comment, options: CursorWithSkipOptions): Token | null;

    getTokensBefore(node: AstNode | Token | Comment, options: CursorWithCountOptions): Token[];

    getTokenAfter(node: AstNode | Token | Comment, options: CursorWithSkipOptions): Token | null;

    getTokensAfter(node: AstNode | Token | Comment, options: CursorWithCountOptions): Token[];

    getFirstTokenBetween(left:  AstNode | Token | Comment, right:  AstNode | Token | Comment, options: CursorWithSkipOptions): Token | null;

    getFirstTokensBetween(left:  AstNode | Token | Comment, right:  AstNode | Token | Comment, options: CursorWithCountOptions): Token[];

    getLastTokenBetween(left:  AstNode | Token | Comment, right:  AstNode | Token | Comment, options: CursorWithSkipOptions): Token | null;

    getLastTokensBetween(left:  AstNode | Token | Comment, right:  AstNode | Token | Comment, options: CursorWithCountOptions): Token[];

    getTokens(node: AstNode, beforeCount?: number, afterCount?: number): Token[];
    getTokens(node: AstNode, options: FilterPredicate | CursorWithCountOptions): Token[];

    getTokensBetween(left: AstNode | Token | Comment, right: AstNode | Token | Comment, padding: number): Token[];
    getTokensBetween(left: AstNode | Token | Comment, right: AstNode | Token | Comment, padding: FilterPredicate | CursorWithCountOptions): Token[];

    commentsExistBetween(left: AstNode, right: AstNode): boolean;

    getCommentsBefore(nodeOrToken: AstNode | Token): Comment[];

    getCommentsAfter(nodeOrToken: AstNode | Token): Comment[];

    getCommentsInside(node: AstNode): Comment[];
}

export interface SourceCodeConfig {
    text: string;
    ast: Ast;
    parserServices?: ParserServices;
    scopeManager?: ScopeManager;
    visitorKeys?: VisitorKeys;
}

export interface Location {
    line: number;
    column: number;
}

type ParserServices = any;
type ScopeManager = any;
type VisitorKeys = any;

export class SourceCode extends TokenStore {
    text: string;
    ast: Ast;
    lines: string[];
    hasBOM: boolean;
    parserServices: ParserServices;
    scopeManager: ScopeManager;
    visitorKeys: VisitorKeys;

    constructor(text: string, ast: Ast);
    constructor(config: SourceCodeConfig);

    static splitLines(text: string): string[];

    getText(node?: AstNode, beforeCount?: number, afterCount?: number): string;

    getLines(): string[];

    getAllComments(): AstNode[];

    getComments(node: AstNode): { leading: Comment[], trailing: Comment[] };

    getJSDocComment(node: AstNode): Token | null;

    getNodeByRangeIndex(index: number): AstNode | null;

    isSpaceBetweenTokens(first: Token, second: Token): boolean;

    getLocFromIndex(index: number): Location;

    getIndexFromLoc(location: Location): number;
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

export type Range = [number, number];

export interface Fix {
    range: Range;
    text: string;
}

export interface FixReport {
    fixed: boolean;
    output: string;
    messages: LintMessage[];
}

export interface RuleModule {
    create(context: RuleContext): any;
    meta?: RuleMetaData;
}

export interface RuleMetaData {
    docs?: {
        description?: string;
        category?: string;
        recommended?: boolean;
        url?: string;
    }
    messages?: { [messageId: string]: string };
    fixable?: 'code' | 'whitespace';
    schema?: any;
    deprecated?: boolean;
}

interface RuleContext {
    id: string;
    options: any[];
    settings: any;
    parserPath: string;
    parserOptions: any;
    parserServices: any;

    getAncestors(): AstNode[];

    getDeclaredVariables(node: AstNode): any[];

    getFilename(): string;

    getScope(): any;

    getSourceCode(): SourceCode;

    markVariableAsUsed(name: string): boolean;

    report(descriptor: ReportDescriptor): void;
}

type ReportDescriptor = ReportDescriptorMessage & ReportDescriptorLocation & ReportDescriptorOptions;
type ReportDescriptorMessage = { message: string } | { messageId: string };
type ReportDescriptorLocation = { node: AstNode } | { loc: { start: Location, end: Location } | { line: number, column: number } }
type ReportDescriptorOptions = {
    data?: any;

    fix?(fixer: RuleFixer): null | Fix | IterableIterator<Fix>;
}

interface RuleFixer {
    insertTextAfter(nodeOrToken: AstNode | Token, text: string): Fix;

    insertTextAfterRange(range: Range, text: string): Fix;

    insertTextBefore(nodeOrToken: AstNode | Token, text: string): Fix;

    insertTextBeforeRange(range: Range, text: string): Fix;

    remove(nodeOrToken: AstNode | Token): Fix;

    removeRange(range: Range): Fix;

    replaceText(nodeOrToken: AstNode | Token, text: string): Fix;

    replaceTextRange(range: Range, text: string): Fix;
}

export type ParserModule = {
    parse(text: string, options?: any): AstNode;
} | {
    parseForESLint(text: string, options?: any): ESLintParseResult;
}

export interface ESLintParseResult {
    ast: AstNode;
    parserServices?: any;
    scopeManager?: any;
    visitorKeys?: { [type: string]: string[] };
}

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
