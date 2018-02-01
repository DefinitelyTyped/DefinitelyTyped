// Type definitions for eslint 4.16
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
//                 Jed Fox <https://github.com/j-f1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { JSONSchema4 } from 'json-schema';
import * as ESTree from 'estree';

export type TokenType =
    | 'Boolean'
    | 'Null'
    | 'Identifier'
    | 'Keyword'
    | 'Punctuator'
    | 'JSXIdentifier'
    | 'JSXText'
    | 'Numeric'
    | 'String'
    | 'RegularExpression';

export interface Token {
    type: TokenType;
    value: string;
    range: Range;
    loc: SourceLocation;
}

export interface SourceLocation {
    start: Location;
    end: Location;
}

export interface Location {
    line: number;
    column: number;
}

export type Range = [number, number];

export interface Ast {
    comments: ESTree.Comment[];
    tokens: Token[];
    loc: SourceLocation;
    range: Range;
}

export namespace Scope {
    interface ScopeManager {
        scopes: Scope[];
        globalScope: Scope | null;

        acquire(node: ESTree.Node, inner?: boolean): Scope | null;

        getDeclaredVariables(node: ESTree.Node): Variable[];
    }

    interface Scope {
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

    interface Variable {
        name: string;
        identifiers: ESTree.Identifier;
        references: Reference[];
        defs: Definition[];
    }

    interface Reference {
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

    type DefinitionType =
        | { type: 'CatchClause', node: ESTree.CatchClause, parent: null }
        | { type: 'ClassName', node: ESTree.ClassDeclaration | ESTree.ClassExpression, parent: null }
        | { type: 'FunctionName', node: ESTree.FunctionDeclaration | ESTree.FunctionExpression, parent: null }
        | { type: 'ImplicitGlobalVariable', node: ESTree.Program, parent: null }
        | { type: 'ImportBinding', node: ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier, parent: ESTree.ImportDeclaration }
        | { type: 'Parameter', node: ESTree.FunctionDeclaration | ESTree.FunctionExpression | ESTree.ArrowFunctionExpression, parent: null }
        | { type: 'TDZ', node: any, parent: null }
        | { type: 'Variable', node: ESTree.VariableDeclarator, parent: ESTree.VariableDeclaration };

    type Definition = DefinitionType & { name: ESTree.Identifier };
}

//#region SourceCode

export class SourceCode {
    text: string;
    ast: Ast;
    lines: string[];
    hasBOM: boolean;
    parserServices: SourceCode.ParserServices;
    scopeManager: Scope.ScopeManager;
    visitorKeys: SourceCode.VisitorKeys;

    constructor(text: string, ast: Ast);
    constructor(config: SourceCode.Config);

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

    // Inherited methods from TokenStore
    // ---------------------------------

    getTokenByRangeStart(offset: number, options?: { includeComments?: boolean }): Token | null;

    getFirstToken(node: ESTree.Node, options: SourceCode.CursorWithSkipOptions): Token | null;

    getFirstTokens(node: ESTree.Node, options: SourceCode.CursorWithCountOptions): Token[];

    getLastToken(node: ESTree.Node, options: SourceCode.CursorWithSkipOptions): Token | null;

    getLastTokens(node: ESTree.Node, options: SourceCode.CursorWithCountOptions): Token[];

    getTokenBefore(node: ESTree.Node | Token | ESTree.Comment, options: SourceCode.CursorWithSkipOptions): Token | null;

    getTokensBefore(node: ESTree.Node | Token | ESTree.Comment, options: SourceCode.CursorWithCountOptions): Token[];

    getTokenAfter(node: ESTree.Node | Token | ESTree.Comment, options: SourceCode.CursorWithSkipOptions): Token | null;

    getTokensAfter(node: ESTree.Node | Token | ESTree.Comment, options: SourceCode.CursorWithCountOptions): Token[];

    getFirstTokenBetween(
        left: ESTree.Node | Token | ESTree.Comment,
        right: ESTree.Node | Token | ESTree.Comment,
        options: SourceCode.CursorWithSkipOptions
    ): Token | null;

    getFirstTokensBetween(
        left: ESTree.Node | Token | ESTree.Comment,
        right: ESTree.Node | Token | ESTree.Comment,
        options: SourceCode.CursorWithCountOptions
    ): Token[];

    getLastTokenBetween(
        left: ESTree.Node | Token | ESTree.Comment,
        right: ESTree.Node | Token | ESTree.Comment,
        options: SourceCode.CursorWithSkipOptions
    ): Token | null;

    getLastTokensBetween(
        left: ESTree.Node | Token | ESTree.Comment,
        right: ESTree.Node | Token | ESTree.Comment,
        options: SourceCode.CursorWithCountOptions
    ): Token[];

    getTokensBetween(
        left: ESTree.Node | Token | ESTree.Comment,
        right: ESTree.Node | Token | ESTree.Comment,
        padding: number | SourceCode.FilterPredicate | SourceCode.CursorWithCountOptions
    ): Token[];

    getTokens(node: ESTree.Node, beforeCount?: number, afterCount?: number): Token[];
    getTokens(node: ESTree.Node, options: SourceCode.FilterPredicate | SourceCode.CursorWithCountOptions): Token[];

    commentsExistBetween(left: ESTree.Node, right: ESTree.Node): boolean;

    getCommentsBefore(nodeOrToken: ESTree.Node | Token): ESTree.Comment[];

    getCommentsAfter(nodeOrToken: ESTree.Node | Token): ESTree.Comment[];

    getCommentsInside(node: ESTree.Node): ESTree.Comment[];
}

export namespace SourceCode {
    interface Config {
        text: string;
        ast: Ast;
        parserServices?: ParserServices;
        scopeManager?: Scope.ScopeManager;
        visitorKeys?: VisitorKeys;
    }

    type ParserServices = any;

    interface VisitorKeys {
        [nodeType: string]: string[];
    }

    type FilterPredicate = (tokenOrComment: Token | ESTree.Comment) => boolean;

    type CursorWithSkipOptions = number | FilterPredicate | {
        includeComments?: boolean;
        filter?: FilterPredicate;
        skip?: number;
    };

    type CursorWithCountOptions = number | FilterPredicate | {
        includeComments?: boolean;
        filter?: FilterPredicate;
        count?: number;
    };
}

//#endregion

export namespace Rule {
    interface RuleModule {
        create(context: RuleContext): any;
        meta?: RuleMetaData;
    }

    interface RuleListener {
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

    interface CodePath {
        id: string;
        initialSegment: CodePathSegment;
        finalSegments: CodePathSegment[];
        returnedSegments: CodePathSegment[];
        thrownSegments: CodePathSegment[];
        currentSegments: CodePathSegment[];
        upper: CodePath | null;
        childCodePaths: CodePath[];
    }

    interface CodePathSegment {
        id: string;
        nextSegments: CodePathSegment[];
        prevSegments: CodePathSegment[];
        reachable: boolean;
    }

    interface RuleMetaData {
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

    interface RuleContext {
        id: string;
        options: any[];
        settings: { [name: string]: any };
        parserPath: string;
        parserOptions: Linter.ParserOptions;
        parserServices: SourceCode.ParserServices;

        getAncestors(): ESTree.Node[];

        getDeclaredVariables(node: ESTree.Node): Scope.Variable[];

        getFilename(): string;

        getScope(): Scope.Scope;

        getSourceCode(): SourceCode;

        markVariableAsUsed(name: string): boolean;

        report(descriptor: ReportDescriptor): void;
    }

    type ReportDescriptor = ReportDescriptorMessage & ReportDescriptorLocation & ReportDescriptorOptions;
    type ReportDescriptorMessage = { message: string } | { messageId: string };
    type ReportDescriptorLocation = { node: ESTree.Node } | { loc: SourceLocation | { line: number, column: number } };
    interface ReportDescriptorOptions {
        data?: { [key: string]: string };

        fix?(fixer: RuleFixer): null | Fix | IterableIterator<Fix>;
    }

    interface RuleFixer {
        insertTextAfter(nodeOrToken: ESTree.Node | Token, text: string): Fix;

        insertTextAfterRange(range: Range, text: string): Fix;

        insertTextBefore(nodeOrToken: ESTree.Node | Token, text: string): Fix;

        insertTextBeforeRange(range: Range, text: string): Fix;

        remove(nodeOrToken: ESTree.Node | Token): Fix;

        removeRange(range: Range): Fix;

        replaceText(nodeOrToken: ESTree.Node | Token, text: string): Fix;

        replaceTextRange(range: Range, text: string): Fix;
    }

    interface Fix {
        range: Range;
        text: string;
    }
}

//#region Linter

export class Linter {
    version: string;

    verify(code: SourceCode | string, config: Linter.Config, filename?: string): Linter.LintMessage[];
    verify(code: SourceCode | string, config: Linter.Config, options: Linter.LintOptions): Linter.LintMessage[];

    verifyAndFix(code: string, config: Linter.Config, filename?: string): Linter.FixReport;
    verifyAndFix(code: string, config: Linter.Config, options: Linter.FixOptions): Linter.FixReport;

    getSourceCode(): SourceCode;

    defineRule(name: string, rule: Rule.RuleModule): void;

    defineRules(rules: { [name: string]: Rule.RuleModule }): void;

    getRules(): Map<string, Rule.RuleModule>;

    defineParser(name: string, parser: Linter.ParserModule): void;
}

export namespace Linter {
    type Severity = 0 | 1 | 2;
    type RuleLevel = Severity | 'off' | 'warn' | 'error';

    interface RuleLevelAndOptions extends Array<any> {
        0: RuleLevel;
    }

    interface Config {
        rules?: {
            [name: string]: RuleLevel | RuleLevelAndOptions
        };
        parser?: string;
        parserOptions?: ParserOptions;
        settings?: { [name: string]: any };
        env?: { [name: string]: boolean };
        globals?: { [name: string]: boolean };
    }

    interface ParserOptions {
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

    interface LintOptions {
        filename?: string;
        preprocess?: (code: string) => string[];
        postprocess?: (problemLists: LintMessage[][]) => LintMessage[];
        allowInlineConfig?: boolean;
        reportUnusedDisableDirectives?: boolean;
    }

    interface LintMessage {
        column: number;
        line: number;
        endColumn?: number;
        endLine?: number;
        ruleId: string | null;
        message: string;
        nodeType: string;
        fatal?: true;
        severity: Severity;
        fix?: Rule.Fix;
        source: string | null;
    }

    interface FixOptions extends LintOptions {
        fix?: boolean;
    }

    interface FixReport {
        fixed: boolean;
        output: string;
        messages: LintMessage[];
    }

    type ParserModule = {
        parse(text: string, options?: any): ESTree.Node;
    } | {
        parseForESLint(text: string, options?: any): ESLintParseResult;
    };

    interface ESLintParseResult {
        ast: ESTree.Node;
        parserServices?: SourceCode.ParserServices;
        scopeManager?: Scope.ScopeManager;
        visitorKeys?: SourceCode.VisitorKeys;
    }
}

//#endregion

//#region CLIEngine

export class CLIEngine {
    version: string;

    constructor(options: CLIEngine.Options);

    executeOnFiles(patterns: string[]): CLIEngine.LintReport;

    resolveFileGlobPatterns(patterns: string[]): string[];

    getConfigForFile(filePath: string): Linter.Config;

    executeOnText(text: string, filename?: string): CLIEngine.LintReport;

    addPlugin(name: string, pluginObject: any): void;

    isPathIgnored(filePath: string): boolean;

    getFormatter(format: string): CLIEngine.Formatter;

    getRules(): Map<string, Rule.RuleModule>;

    static getErrorResults(results: CLIEngine.LintResult[]): CLIEngine.LintResult[];

    static outputFixes(report: CLIEngine.LintReport): void;
}

export namespace CLIEngine {
    class Options {
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
        parserOptions?: Linter.ParserOptions;
        plugins?: string[];
        rules?: {
            [name: string]: (Linter.RuleLevel | [Linter.RuleLevel, any]);
        };
        rulePaths?: string[];
        reportUnusedDisableDirectives?: true;
    }

    interface LintResult {
        filePath: string;
        messages: Linter.LintMessage[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        output?: string;
        source?: string;
    }

    interface LintReport {
        results: LintResult[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
    }

    type Formatter = (results: LintResult[]) => string;
}

//#endregion

//#region RuleTester

export class RuleTester {
    constructor(config?: any);

    run(
        name: string,
        rule: Rule.RuleModule,
        tests: {
            valid?: RuleTester.ValidTestCase[];
            invalid?: RuleTester.InvalidTestCase[];
        },
    ): void;
}

export namespace RuleTester {
    interface ValidTestCase {
        code: string;
        options?: any;
        filename?: string;
        parserOptions?: Linter.ParserOptions;
        settings?: { [name: string]: any };
        parser?: string;
        globals?: { [name: string]: boolean };
    }

    interface InvalidTestCase extends ValidTestCase {
        errors: number | Array<TestCaseError | string>;
        output?: string;
    }

    interface TestCaseError {
        message?: string | RegExp;
        messageId?: string;
        type?: string;
        data?: any;
        line?: number;
        column?: number;
        endLine?: number;
        endColumn?: number;
    }
}

//#endregion
