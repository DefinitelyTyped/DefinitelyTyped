// Type definitions for eslint 7.2
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
//                 Jed Fox <https://github.com/j-f1>
//                 Saad Quadri <https://github.com/saadq>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Brad Zacher <https://github.com/bradzacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="helpers.d.ts" />

import { JSONSchema4 } from 'json-schema';
import * as ESTree from 'estree';

export namespace AST {
    type TokenType =
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

    interface Token {
        type: TokenType;
        value: string;
        range: Range;
        loc: SourceLocation;
    }

    interface SourceLocation {
        start: ESTree.Position;
        end: ESTree.Position;
    }

    type Range = [number, number];

    interface Program extends ESTree.Program {
        comments: ESTree.Comment[];
        tokens: Token[];
        loc: SourceLocation;
        range: Range;
    }
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
        identifiers: ESTree.Identifier[];
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
    ast: AST.Program;
    lines: string[];
    hasBOM: boolean;
    parserServices: SourceCode.ParserServices;
    scopeManager: Scope.ScopeManager;
    visitorKeys: SourceCode.VisitorKeys;

    constructor(text: string, ast: AST.Program);
    constructor(config: SourceCode.Config);

    static splitLines(text: string): string[];

    getText(node?: ESTree.Node, beforeCount?: number, afterCount?: number): string;

    getLines(): string[];

    getAllComments(): ESTree.Comment[];

    getComments(node: ESTree.Node): { leading: ESTree.Comment[], trailing: ESTree.Comment[] };

    getJSDocComment(node: ESTree.Node): AST.Token | null;

    getNodeByRangeIndex(index: number): ESTree.Node | null;

    isSpaceBetweenTokens(first: AST.Token, second: AST.Token): boolean;

    getLocFromIndex(index: number): ESTree.Position;

    getIndexFromLoc(location: ESTree.Position): number;

    // Inherited methods from TokenStore
    // ---------------------------------

    getTokenByRangeStart(offset: number, options?: { includeComments?: boolean }): AST.Token | null;

    getFirstToken(node: ESTree.Node, options?: SourceCode.CursorWithSkipOptions): AST.Token | null;

    getFirstTokens(node: ESTree.Node, options?: SourceCode.CursorWithCountOptions): AST.Token[];

    getLastToken(node: ESTree.Node, options?: SourceCode.CursorWithSkipOptions): AST.Token | null;

    getLastTokens(node: ESTree.Node, options?: SourceCode.CursorWithCountOptions): AST.Token[];

    getTokenBefore(node: ESTree.Node | AST.Token | ESTree.Comment, options?: SourceCode.CursorWithSkipOptions): AST.Token | null;

    getTokensBefore(node: ESTree.Node | AST.Token | ESTree.Comment, options?: SourceCode.CursorWithCountOptions): AST.Token[];

    getTokenAfter(node: ESTree.Node | AST.Token | ESTree.Comment, options?: SourceCode.CursorWithSkipOptions): AST.Token | null;

    getTokensAfter(node: ESTree.Node | AST.Token | ESTree.Comment, options?: SourceCode.CursorWithCountOptions): AST.Token[];

    getFirstTokenBetween(
        left: ESTree.Node | AST.Token | ESTree.Comment,
        right: ESTree.Node | AST.Token | ESTree.Comment,
        options?: SourceCode.CursorWithSkipOptions
    ): AST.Token | null;

    getFirstTokensBetween(
        left: ESTree.Node | AST.Token | ESTree.Comment,
        right: ESTree.Node | AST.Token | ESTree.Comment,
        options?: SourceCode.CursorWithCountOptions
    ): AST.Token[];

    getLastTokenBetween(
        left: ESTree.Node | AST.Token | ESTree.Comment,
        right: ESTree.Node | AST.Token | ESTree.Comment,
        options?: SourceCode.CursorWithSkipOptions
    ): AST.Token | null;

    getLastTokensBetween(
        left: ESTree.Node | AST.Token | ESTree.Comment,
        right: ESTree.Node | AST.Token | ESTree.Comment,
        options?: SourceCode.CursorWithCountOptions
    ): AST.Token[];

    getTokensBetween(
        left: ESTree.Node | AST.Token | ESTree.Comment,
        right: ESTree.Node | AST.Token | ESTree.Comment,
        padding?: number | SourceCode.FilterPredicate | SourceCode.CursorWithCountOptions
    ): AST.Token[];

    getTokens(node: ESTree.Node, beforeCount?: number, afterCount?: number): AST.Token[];
    getTokens(node: ESTree.Node, options: SourceCode.FilterPredicate | SourceCode.CursorWithCountOptions): AST.Token[];

    commentsExistBetween(left: ESTree.Node | AST.Token, right: ESTree.Node | AST.Token): boolean;

    getCommentsBefore(nodeOrToken: ESTree.Node | AST.Token): ESTree.Comment[];

    getCommentsAfter(nodeOrToken: ESTree.Node | AST.Token): ESTree.Comment[];

    getCommentsInside(node: ESTree.Node): ESTree.Comment[];
}

export namespace SourceCode {
    interface Config {
        text: string;
        ast: AST.Program;
        parserServices?: ParserServices;
        scopeManager?: Scope.ScopeManager;
        visitorKeys?: VisitorKeys;
    }

    type ParserServices = any;

    interface VisitorKeys {
        [nodeType: string]: string[];
    }

    type FilterPredicate = (tokenOrComment: AST.Token | ESTree.Comment) => boolean;

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
        create(context: RuleContext): RuleListener;
        meta?: RuleMetaData;
    }

    type NodeTypes = ESTree.Node['type'];
    interface NodeListener {
        ArrayExpression?: (node: ESTree.ArrayExpression & NodeParentExtension) => void;
        ArrayPattern?: (node: ESTree.ArrayPattern & NodeParentExtension) => void;
        ArrowFunctionExpression?: (node: ESTree.ArrowFunctionExpression & NodeParentExtension) => void;
        AssignmentExpression?: (node: ESTree.AssignmentExpression & NodeParentExtension) => void;
        AssignmentPattern?: (node: ESTree.AssignmentPattern & NodeParentExtension) => void;
        AwaitExpression?: (node: ESTree.AwaitExpression & NodeParentExtension) => void;
        BinaryExpression?: (node: ESTree.BinaryExpression & NodeParentExtension) => void;
        BlockStatement?: (node: ESTree.BlockStatement & NodeParentExtension) => void;
        BreakStatement?: (node: ESTree.BreakStatement & NodeParentExtension) => void;
        CallExpression?: (node: ESTree.CallExpression & NodeParentExtension) => void;
        CatchClause?: (node: ESTree.CatchClause & NodeParentExtension) => void;
        ChainExpression?: (node: ESTree.ChainExpression & NodeParentExtension) => void;
        ClassBody?: (node: ESTree.ClassBody & NodeParentExtension) => void;
        ClassDeclaration?: (node: ESTree.ClassDeclaration & NodeParentExtension) => void;
        ClassExpression?: (node: ESTree.ClassExpression & NodeParentExtension) => void;
        ConditionalExpression?: (node: ESTree.ConditionalExpression & NodeParentExtension) => void;
        ContinueStatement?: (node: ESTree.ContinueStatement & NodeParentExtension) => void;
        DebuggerStatement?: (node: ESTree.DebuggerStatement & NodeParentExtension) => void;
        DoWhileStatement?: (node: ESTree.DoWhileStatement & NodeParentExtension) => void;
        EmptyStatement?: (node: ESTree.EmptyStatement & NodeParentExtension) => void;
        ExportAllDeclaration?: (node: ESTree.ExportAllDeclaration & NodeParentExtension) => void;
        ExportDefaultDeclaration?: (node: ESTree.ExportDefaultDeclaration & NodeParentExtension) => void;
        ExportNamedDeclaration?: (node: ESTree.ExportNamedDeclaration & NodeParentExtension) => void;
        ExportSpecifier?: (node: ESTree.ExportSpecifier & NodeParentExtension) => void;
        ExpressionStatement?: (node: ESTree.ExpressionStatement & NodeParentExtension) => void;
        ForInStatement?: (node: ESTree.ForInStatement & NodeParentExtension) => void;
        ForOfStatement?: (node: ESTree.ForOfStatement & NodeParentExtension) => void;
        ForStatement?: (node: ESTree.ForStatement & NodeParentExtension) => void;
        FunctionDeclaration?: (node: ESTree.FunctionDeclaration & NodeParentExtension) => void;
        FunctionExpression?: (node: ESTree.FunctionExpression & NodeParentExtension) => void;
        Identifier?: (node: ESTree.Identifier & NodeParentExtension) => void;
        IfStatement?: (node: ESTree.IfStatement & NodeParentExtension) => void;
        ImportDeclaration?: (node: ESTree.ImportDeclaration & NodeParentExtension) => void;
        ImportDefaultSpecifier?: (node: ESTree.ImportDefaultSpecifier & NodeParentExtension) => void;
        ImportExpression?: (node: ESTree.ImportExpression & NodeParentExtension) => void;
        ImportNamespaceSpecifier?: (node: ESTree.ImportNamespaceSpecifier & NodeParentExtension) => void;
        ImportSpecifier?: (node: ESTree.ImportSpecifier & NodeParentExtension) => void;
        LabeledStatement?: (node: ESTree.LabeledStatement & NodeParentExtension) => void;
        Literal?: (node: ESTree.Literal & NodeParentExtension) => void;
        LogicalExpression?: (node: ESTree.LogicalExpression & NodeParentExtension) => void;
        MemberExpression?: (node: ESTree.MemberExpression & NodeParentExtension) => void;
        MetaProperty?: (node: ESTree.MetaProperty & NodeParentExtension) => void;
        MethodDefinition?: (node: ESTree.MethodDefinition & NodeParentExtension) => void;
        NewExpression?: (node: ESTree.NewExpression & NodeParentExtension) => void;
        ObjectExpression?: (node: ESTree.ObjectExpression & NodeParentExtension) => void;
        ObjectPattern?: (node: ESTree.ObjectPattern & NodeParentExtension) => void;
        Program?: (node: ESTree.Program) => void;
        Property?: (node: ESTree.Property & NodeParentExtension) => void;
        RestElement?: (node: ESTree.RestElement & NodeParentExtension) => void;
        ReturnStatement?: (node: ESTree.ReturnStatement & NodeParentExtension) => void;
        SequenceExpression?: (node: ESTree.SequenceExpression & NodeParentExtension) => void;
        SpreadElement?: (node: ESTree.SpreadElement & NodeParentExtension) => void;
        Super?: (node: ESTree.Super & NodeParentExtension) => void;
        SwitchCase?: (node: ESTree.SwitchCase & NodeParentExtension) => void;
        SwitchStatement?: (node: ESTree.SwitchStatement & NodeParentExtension) => void;
        TaggedTemplateExpression?: (node: ESTree.TaggedTemplateExpression & NodeParentExtension) => void;
        TemplateElement?: (node: ESTree.TemplateElement & NodeParentExtension) => void;
        TemplateLiteral?: (node: ESTree.TemplateLiteral & NodeParentExtension) => void;
        ThisExpression?: (node: ESTree.ThisExpression & NodeParentExtension) => void;
        ThrowStatement?: (node: ESTree.ThrowStatement & NodeParentExtension) => void;
        TryStatement?: (node: ESTree.TryStatement & NodeParentExtension) => void;
        UnaryExpression?: (node: ESTree.UnaryExpression & NodeParentExtension) => void;
        UpdateExpression?: (node: ESTree.UpdateExpression & NodeParentExtension) => void;
        VariableDeclaration?: (node: ESTree.VariableDeclaration & NodeParentExtension) => void;
        VariableDeclarator?: (node: ESTree.VariableDeclarator & NodeParentExtension) => void;
        WhileStatement?: (node: ESTree.WhileStatement & NodeParentExtension) => void;
        WithStatement?: (node: ESTree.WithStatement & NodeParentExtension) => void;
        YieldExpression?: (node: ESTree.YieldExpression & NodeParentExtension) => void;
    }

    interface NodeParentExtension { parent: Node; }
    type Node = ESTree.Node & NodeParentExtension;

    interface RuleListener extends NodeListener {
        onCodePathStart?(codePath: CodePath, node: Node): void;

        onCodePathEnd?(codePath: CodePath, node: Node): void;

        onCodePathSegmentStart?(segment: CodePathSegment, node: Node): void;

        onCodePathSegmentEnd?(segment: CodePathSegment, node: Node): void;

        onCodePathSegmentLoop?(fromSegment: CodePathSegment, toSegment: CodePathSegment, node: Node): void;

        [key: string]:
            | ((codePath: CodePath, node: Node) => void)
            | ((segment: CodePathSegment, node: Node) => void)
            | ((fromSegment: CodePathSegment, toSegment: CodePathSegment, node: Node) => void)
            | ((node: Node) => void)
            | NodeListener[keyof NodeListener]
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
            /** provides the short description of the rule in the [rules index](https://eslint.org/docs/rules/) */
            description?: string;
            /** specifies the heading under which the rule is listed in the [rules index](https://eslint.org/docs/rules/) */
            category?: string;
            /** is whether the `"extends": "eslint:recommended"` property in a [configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) enables the rule */
            recommended?: boolean;
            /** specifies the URL at which the full documentation can be accessed */
            url?: string;
            /** specifies whether rules can return suggestions (defaults to false if omitted) */
            suggestion?: boolean
        };
        messages?: { [messageId: string]: string };
        fixable?: 'code' | 'whitespace';
        schema?: JSONSchema4 | JSONSchema4[];
        deprecated?: boolean;
        type?: 'problem' | 'suggestion' | 'layout';
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

    interface ReportDescriptorOptionsBase {
        data?: { [key: string]: string };

        fix?: null | ((fixer: RuleFixer) => null | Fix | IterableIterator<Fix> | Fix[]);
    }

    type SuggestionDescriptorMessage = { desc: string } | { messageId: string };
    type SuggestionReportDescriptor = SuggestionDescriptorMessage & ReportDescriptorOptionsBase;

    interface ReportDescriptorOptions extends ReportDescriptorOptionsBase {
        suggest?: SuggestionReportDescriptor[] | null;
    }

    type ReportDescriptor = ReportDescriptorMessage & ReportDescriptorLocation & ReportDescriptorOptions;
    type ReportDescriptorMessage = { message: string } | { messageId: string };
    type ReportDescriptorLocation =
        | { node: ESTree.Node }
        | { loc: AST.SourceLocation | { line: number; column: number } };

    interface RuleFixer {
        insertTextAfter(nodeOrToken: ESTree.Node | AST.Token, text: string): Fix;

        insertTextAfterRange(range: AST.Range, text: string): Fix;

        insertTextBefore(nodeOrToken: ESTree.Node | AST.Token, text: string): Fix;

        insertTextBeforeRange(range: AST.Range, text: string): Fix;

        remove(nodeOrToken: ESTree.Node | AST.Token): Fix;

        removeRange(range: AST.Range): Fix;

        replaceText(nodeOrToken: ESTree.Node | AST.Token, text: string): Fix;

        replaceTextRange(range: AST.Range, text: string): Fix;
    }

    interface Fix {
        range: AST.Range;
        text: string;
    }
}

//#region Linter

export class Linter {
    static version: string;

    version: string;

    constructor(options?: { cwd?: string });

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
    type RuleLevelAndOptions<Options extends any[] = any[]> = Prepend<Partial<Options>, RuleLevel>;

    type RuleEntry<Options extends any[] = any[]> = RuleLevel | RuleLevelAndOptions<Options>;

    interface RulesRecord {
        [rule: string]: RuleEntry;
    }

    interface HasRules<Rules extends RulesRecord = RulesRecord> {
        rules?: Partial<Rules>;
    }

    interface BaseConfig<Rules extends RulesRecord = RulesRecord> extends HasRules<Rules> {
        $schema?: string;
        env?: { [name: string]: boolean };
        extends?: string | string[];
        globals?: { [name: string]: boolean | 'readonly' | 'readable' | 'writable' | 'writeable' };
        noInlineConfig?: boolean;
        overrides?: ConfigOverride[];
        parser?: string;
        parserOptions?: ParserOptions;
        plugins?: string[];
        processor?: string;
        reportUnusedDisableDirectives?: boolean;
        settings?: { [name: string]: any };
    }

    interface ConfigOverride<Rules extends RulesRecord = RulesRecord> extends BaseConfig<Rules> {
        excludedFiles?: string | string[];
        files: string | string[];
    }

    // https://github.com/eslint/eslint/blob/v6.8.0/conf/config-schema.js
    interface Config<Rules extends RulesRecord = RulesRecord> extends BaseConfig<Rules> {
        ignorePatterns?: string | string[];
        root?: boolean;
    }

    interface ParserOptions {
        ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020;
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
        filterCodeBlock?: boolean;
        disableFixes?: boolean;
        allowInlineConfig?: boolean;
        reportUnusedDisableDirectives?: boolean;
    }

    interface LintSuggestion {
        desc: string;
        fix: Rule.Fix;
        messageId?: string;
    }

    interface LintMessage {
        column: number;
        line: number;
        endColumn?: number;
        endLine?: number;
        ruleId: string | null;
        message: string;
        messageId?: string;
        nodeType?: string;
        fatal?: true;
        severity: Severity;
        fix?: Rule.Fix;
        /** @deprecated Use `linter.getSourceCode()` */
        source?: string | null;
        suggestions?: LintSuggestion[];
    }

    interface FixOptions extends LintOptions {
        fix?: boolean;
    }

    interface FixReport {
        fixed: boolean;
        output: string;
        messages: LintMessage[];
    }

    type ParserModule =
        | {
              parse(text: string, options?: any): AST.Program;
          }
        | {
              parseForESLint(text: string, options?: any): ESLintParseResult;
          };

    interface ESLintParseResult {
        ast: AST.Program;
        parserServices?: SourceCode.ParserServices;
        scopeManager?: Scope.ScopeManager;
        visitorKeys?: SourceCode.VisitorKeys;
    }
}

//#endregion

//#region ESLint

export class ESLint {
    static version: string;

    static outputFixes(results: ESLint.LintResult[]): Promise<void>;

    static getErrorResults(results: ESLint.LintResult[]): ESLint.LintResult[];

    constructor(options: ESLint.Options);

    lintFiles(patterns: string | string[]): Promise<ESLint.LintResult[]>;

    lintText(code: string, options?: { filePath?: string; warnIgnored?: boolean }): Promise<ESLint.LintResult[]>;

    calculateConfigForFile(filePath: string): Promise<any>;

    isPathIgnored(filePath: string): Promise<boolean>;

    loadFormatter(nameOrPath?: string): Promise<ESLint.Formatter>;
}

export namespace ESLint {
    interface Options {
        // File enumeration
        cwd?: string;
        errorOnUnmatchedPattern?: boolean;
        extensions?: string[];
        globInputPaths?: boolean;
        ignore?: boolean;
        ignorePath?: string;

        // Linting
        allowInlineConfig?: boolean;
        baseConfig?: Linter.Config;
        overrideConfig?: Linter.Config;
        overrideConfigFile?: string;
        plugins?: Record<string, any>;
        reportUnusedDisableDirectives?: Linter.RuleLevel;
        resolvePluginsRelativeTo?: string;
        rulePaths?: string[];
        useEslintrc?: boolean;

        // Autofix
        fix?: boolean | ((message: Linter.LintMessage) => boolean);
        fixTypes?: Array<Rule.RuleMetaData['type']>;

        // Cache-related
        cache?: boolean;
        cacheLocation?: string;
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
        usedDeprecatedRules: DeprecatedRuleUse[];
    }

    interface LintResultData {
        rulesMeta: {
            [ruleId: string]: Rule.RuleMetaData;
        };
    }

    interface DeprecatedRuleUse {
        ruleId: string;
        replacedBy: string[];
    }

    interface Formatter {
        format(results: LintResult[], data?: LintResultData): string;
    }

    // Docs reference the type by this name
    type EditInfo = Rule.Fix;
}

//#endregion

//#region CLIEngine

/** @deprecated Deprecated in favor of `ESLint` */
export class CLIEngine {
    static version: string;

    constructor(options: CLIEngine.Options);

    executeOnFiles(patterns: string[]): CLIEngine.LintReport;

    resolveFileGlobPatterns(patterns: string[]): string[];

    getConfigForFile(filePath: string): Linter.Config;

    executeOnText(text: string, filename?: string): CLIEngine.LintReport;

    addPlugin(name: string, pluginObject: any): void;

    isPathIgnored(filePath: string): boolean;

    getFormatter(format?: string): CLIEngine.Formatter;

    getRules(): Map<string, Rule.RuleModule>;

    static getErrorResults(results: CLIEngine.LintResult[]): CLIEngine.LintResult[];

    static getFormatter(format?: string): CLIEngine.Formatter;

    static outputFixes(report: CLIEngine.LintReport): void;
}

/** @deprecated Deprecated in favor of `ESLint` */
export namespace CLIEngine {
    class Options {
        allowInlineConfig?: boolean;
        baseConfig?: false | { [name: string]: any };
        cache?: boolean;
        cacheFile?: string;
        cacheLocation?: string;
        configFile?: string;
        cwd?: string;
        envs?: string[];
        errorOnUnmatchedPattern?: boolean;
        extensions?: string[];
        fix?: boolean;
        globals?: string[];
        ignore?: boolean;
        ignorePath?: string;
        ignorePattern?: string | string[];
        useEslintrc?: boolean;
        parser?: string;
        parserOptions?: Linter.ParserOptions;
        plugins?: string[];
        resolvePluginsRelativeTo?: string;
        rules?: {
            [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
        };
        rulePaths?: string[];
        reportUnusedDisableDirectives?: boolean;
    }

    type LintResult = ESLint.LintResult;

    type LintResultData = ESLint.LintResultData;

    interface LintReport {
        results: LintResult[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        usedDeprecatedRules: DeprecatedRuleUse[];
    }

    type DeprecatedRuleUse = ESLint.DeprecatedRuleUse;

    type Formatter = (results: LintResult[], data?: LintResultData) => string;
}

//#endregion

//#region RuleTester

export class RuleTester {
    constructor(config?: any);

    run(
        name: string,
        rule: Rule.RuleModule,
        tests: {
            valid?: Array<string | RuleTester.ValidTestCase>;
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

    interface SuggestionOutput {
        messageId?: string;
        desc?: string;
        data?: Record<string, unknown>;
        output: string;
    }

    interface InvalidTestCase extends ValidTestCase {
        errors: number | Array<TestCaseError | string>;
        output?: string | null;
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
        suggestions?: SuggestionOutput[];
    }
}

//#endregion
