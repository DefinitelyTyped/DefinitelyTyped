// Type definitions for eslint 4.16
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { JSONSchema4 } from 'json-schema';
import * as ESTree from 'estree';

export type Token = any;

export interface Ast {
    comments: ESTree.Comment[];
    tokens: any[];
    loc: any;
    range: any[];
}

export type FilterPredicate = (tokenOrComment: Token | ESTree.Comment) => boolean;

export type CursorWithSkipOptions = number | FilterPredicate | {
    includeComments?: boolean;
    filter?: FilterPredicate;
    skip?: number;
};

export type CursorWithCountOptions = number | FilterPredicate | {
    includeComments?: boolean;
    filter?: FilterPredicate;
    count?: number;
};

export class TokenStore {
    getTokenByRangeStart(offset: number, options?: { includeComments?: boolean }): Token | null;

    getFirstToken(node: ESTree.Node, options: CursorWithSkipOptions): Token | null;

    getFirstTokens(node: ESTree.Node, options: CursorWithCountOptions): Token[];

    getLastToken(node: ESTree.Node, options: CursorWithSkipOptions): Token | null;

    getLastTokens(node: ESTree.Node, options: CursorWithCountOptions): Token[];

    getTokenBefore(node: ESTree.Node | Token | ESTree.Comment, options: CursorWithSkipOptions): Token | null;

    getTokensBefore(node: ESTree.Node | Token | ESTree.Comment, options: CursorWithCountOptions): Token[];

    getTokenAfter(node: ESTree.Node | Token | ESTree.Comment, options: CursorWithSkipOptions): Token | null;

    getTokensAfter(node: ESTree.Node | Token | ESTree.Comment, options: CursorWithCountOptions): Token[];

    getFirstTokenBetween(left: ESTree.Node | Token | ESTree.Comment, right: ESTree.Node | Token | ESTree.Comment, options: CursorWithSkipOptions): Token | null;

    getFirstTokensBetween(left: ESTree.Node | Token | ESTree.Comment, right: ESTree.Node | Token | ESTree.Comment, options: CursorWithCountOptions): Token[];

    getLastTokenBetween(left: ESTree.Node | Token | ESTree.Comment, right: ESTree.Node | Token | ESTree.Comment, options: CursorWithSkipOptions): Token | null;

    getLastTokensBetween(left: ESTree.Node | Token | ESTree.Comment, right: ESTree.Node | Token | ESTree.Comment, options: CursorWithCountOptions): Token[];

    getTokens(node: ESTree.Node, beforeCount?: number, afterCount?: number): Token[];
    getTokens(node: ESTree.Node, options: FilterPredicate | CursorWithCountOptions): Token[];

    getTokensBetween(left: ESTree.Node | Token | ESTree.Comment, right: ESTree.Node | Token | ESTree.Comment, padding: number | FilterPredicate | CursorWithCountOptions): Token[];

    commentsExistBetween(left: ESTree.Node, right: ESTree.Node): boolean;

    getCommentsBefore(nodeOrToken: ESTree.Node | Token): ESTree.Comment[];

    getCommentsAfter(nodeOrToken: ESTree.Node | Token): ESTree.Comment[];

    getCommentsInside(node: ESTree.Node): ESTree.Comment[];
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

export type ParserServices = any;

export interface ScopeManager {
    scopes: Scope[];
    globalScope: Scope | null;

    acquire(node: ESTree.Node, inner?: boolean): Scope | null;

    getDeclaredVariables(node: ESTree.Node): any[];
}

export interface Scope {
    type: 'block' | 'catch' | 'class' | 'for' | 'function' | 'function-expression-name' | 'global' | 'module' | 'switch' | 'with' | 'TDZ';
    isStrict: boolean;
    upper: Scope | null;
    childScopes: Scope[];
    variableScope: Scope;
    block: ESTree.Node;
    variables: Variable[];
    set: Map<string, Variable>;
    references: Reference[];
    through: Reference[];
    functionExpressionScope: boolean;
}

export interface Variable {
    name: string;
    identifiers: ESTree.Identifier;
    references: Reference[];
    defs: Definition[];
}

export interface Reference {
    identifier: ESTree.Identifier;
    from: Scope;
    resolved: Variable | null;
    writeExpr: ESTree.Node | null;
    init: boolean;

    isWrite(): boolean;

    isRead(): boolean;

    isWriteOnly(): boolean;

    isReadOnly(): boolean;

    isReadWrite(): boolean;
}

export type DefinitionType =
    | { type: 'CatchClause', node: ESTree.CatchClause, parent: null }
    | { type: 'ClassName', node: ESTree.ClassDeclaration | ESTree.ClassExpression, parent: null }
    | { type: 'FunctionName', node: ESTree.FunctionDeclaration | ESTree.FunctionExpression, parent: null }
    | { type: 'ImplicitGlobalVariable', node: ESTree.Program, parent: null }
    | { type: 'ImportBinding', node: ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier, parent: ESTree.ImportDeclaration }
    | { type: 'Parameter', node: ESTree.FunctionDeclaration | ESTree.FunctionExpression | ESTree.ArrowFunctionExpression, parent: null }
    | { type: 'TDZ', node: any, parent: null }
    | { type: 'Variable', node: ESTree.VariableDeclarator, parent: ESTree.VariableDeclaration };

export type Definition = DefinitionType & { name: ESTree.Identifier };

export interface VisitorKeys {
    [nodeType: string]: string[];
}

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

    getText(node?: ESTree.Node, beforeCount?: number, afterCount?: number): string;

    getLines(): string[];

    getAllComments(): ESTree.Node[];

    getComments(node: ESTree.Node): { leading: ESTree.Comment[], trailing: ESTree.Comment[] };

    getJSDocComment(node: ESTree.Node): Token | null;

    getNodeByRangeIndex(index: number): ESTree.Node | null;

    isSpaceBetweenTokens(first: Token, second: Token): boolean;

    getLocFromIndex(index: number): Location;

    getIndexFromLoc(location: Location): number;
}

export type RuleLevel = 'off' | 'warn' | 'error' | 0 | 1 | 2;

export interface ParserOptions {
    ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 2015 | 2016 | 2017 | 2018;
    sourceType?: 'script' | 'module';
    ecmaFeatures?: {
        globalReturn?: boolean;
        impliedStrict?: boolean;
        jsx?: boolean;
        experimentalObjectRestSpread?: boolean;
        [key: string]: any;
    };
    [key: string]: any;
}

export interface Config {
    rules?: {
        [name: string]: (RuleLevel | [RuleLevel, any])
    };
    parser?: string;
    parserOptions?: ParserOptions;
    settings?: { [name: string]: any };
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

export interface RuleListener {
    onCodePathStart?(codePath: CodePath, node: ESTree.Node): void;

    onCodePathEnd?(codePath: CodePath, node: ESTree.Node): void;

    onCodePathSegmentStart?(segment: CodePathSegment, node: ESTree.Node): void;

    onCodePathSegmentEnd?(segment: CodePathSegment, node: ESTree.Node): void;

    onCodePathSegmentLoop?(fromSegment: CodePathSegment, toSegment: CodePathSegment, node: ESTree.Node): void;

    [key: string]:
        | ((codePath: CodePath, node: ESTree.Node) => void)
        | ((segment: CodePathSegment, node: ESTree.Node) => void)
        | ((fromSegment: CodePathSegment, toSegment: CodePathSegment, node: ESTree.Node) => void)
        | ((node: ESTree.Node) => void)
        | undefined;
}

export interface CodePath {
    id: string;
    initialSegment: CodePathSegment;
    finalSegments: CodePathSegment[];
    returnedSegments: CodePathSegment[];
    thrownSegments: CodePathSegment[];
    currentSegments: CodePathSegment[];
    upper: CodePath | null;
    childCodePaths: CodePath[];
}

export interface CodePathSegment {
    id: string;
    nextSegments: CodePathSegment[];
    prevSegments: CodePathSegment[];
    reachable: boolean;
}

export interface RuleMetaData {
    docs?: {
        description?: string;
        category?: string;
        recommended?: boolean;
        url?: string;
    };
    messages?: { [messageId: string]: string };
    fixable?: 'code' | 'whitespace';
    schema?: JSONSchema4 | JSONSchema4[];
    deprecated?: boolean;
}

export interface RuleContext {
    id: string;
    options: any[];
    settings: { [name: string]: any };
    parserPath: string;
    parserOptions: ParserOptions;
    parserServices: any;

    getAncestors(): ESTree.Node[];

    getDeclaredVariables(node: ESTree.Node): any[];

    getFilename(): string;

    getScope(): any;

    getSourceCode(): SourceCode;

    markVariableAsUsed(name: string): boolean;

    report(descriptor: ReportDescriptor): void;
}

export type ReportDescriptor = ReportDescriptorMessage & ReportDescriptorLocation & ReportDescriptorOptions;
export type ReportDescriptorMessage = { message: string } | { messageId: string };
export type ReportDescriptorLocation = { node: ESTree.Node } | { loc: { start: Location, end: Location } | { line: number, column: number } };
export interface ReportDescriptorOptions {
    data?: { [key: string]: string };

    fix?(fixer: RuleFixer): null | Fix | IterableIterator<Fix>;
}

export interface RuleFixer {
    insertTextAfter(nodeOrToken: ESTree.Node | Token, text: string): Fix;

    insertTextAfterRange(range: Range, text: string): Fix;

    insertTextBefore(nodeOrToken: ESTree.Node | Token, text: string): Fix;

    insertTextBeforeRange(range: Range, text: string): Fix;

    remove(nodeOrToken: ESTree.Node | Token): Fix;

    removeRange(range: Range): Fix;

    replaceText(nodeOrToken: ESTree.Node | Token, text: string): Fix;

    replaceTextRange(range: Range, text: string): Fix;
}

export type ParserModule = {
    parse(text: string, options?: any): ESTree.Node;
} | {
    parseForESLint(text: string, options?: any): ESLintParseResult;
};

export interface ESLintParseResult {
    ast: ESTree.Node;
    parserServices?: any;
    scopeManager?: any;
    visitorKeys?: VisitorKeys;
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
    cacheLocation?: string;
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
    parserOptions?: ParserOptions;
    plugins?: string[];
    rules?: {
        [name: string]: (RuleLevel | [RuleLevel, any]);
    };
    rulePaths?: string[];
    reportUnusedDisableDirectives?: true;
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
    parserOptions?: ParserOptions;
    settings?: { [name: string]: any };
    parser?: string;
    globals?: { [name: string]: boolean };
}

export interface TestCaseError {
    message?: string | RegExp;
    messageId?: string;
    type?: string;
    data?: any;
    line?: number;
    column?: number;
    endLine?: number;
    endColumn?: number;
}

export interface InvalidTestCase extends ValidTestCase {
    errors: number | Array<TestCaseError | string>;
    output?: string;
}

export interface Test {
    valid?: ValidTestCase[];
    invalid: InvalidTestCase[];
}

export class RuleTester {
    constructor(config?: any);

    run(name: string, rule: any, tests: Test): void;
}
