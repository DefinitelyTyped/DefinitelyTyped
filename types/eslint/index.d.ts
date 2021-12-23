// Type definitions for eslint 8.2
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
//                 Jed Fox <https://github.com/j-f1>
//                 Saad Quadri <https://github.com/saadq>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Brad Zacher <https://github.com/bradzacher>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="helpers.d.ts" />

import { JSONSchema4 } from "json-schema";
import * as ESTree from "estree";

export namespace AST {
    type TokenType =
        | "Boolean"
        | "Null"
        | "Identifier"
        | "Keyword"
        | "Punctuator"
        | "JSXIdentifier"
        | "JSXText"
        | "Numeric"
        | "String"
        | "RegularExpression";

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
    interface ScopeManager<Node extends ESTree.BaseNode = ESTree.Node> {
        scopes: Array<Scope<Node>>;
        globalScope: Scope<Node> | null;

        acquire(node: Node, inner?: boolean): Scope<Node> | null;

        getDeclaredVariables(node: Node): Array<Variable<Node>>;
    }

    interface Scope<Node extends ESTree.BaseNode> {
        type:
            | "block"
            | "catch"
            | "class"
            | "for"
            | "function"
            | "function-expression-name"
            | "global"
            | "module"
            | "switch"
            | "with"
            | "TDZ";
        isStrict: boolean;
        upper: Scope<Node> | null;
        childScopes: Array<Scope<Node>>;
        variableScope: Scope<Node>;
        block: Node;
        variables: Array<Variable<Node>>;
        set: Map<string, Variable<Node>>;
        references: Array<Reference<Node>>;
        through: Array<Reference<Node>>;
        functionExpressionScope: boolean;
    }

    interface Variable<Node extends ESTree.BaseNode> {
        name: string;
        identifiers: ESTree.Identifier[];
        references: Array<Reference<Node>>;
        defs: Definition[];
    }

    interface Reference<Node extends ESTree.BaseNode> {
        identifier: ESTree.Identifier;
        from: Scope<Node>;
        resolved: Variable<Node> | null;
        writeExpr: Node | null;
        init: boolean;

        isWrite(): boolean;
        isRead(): boolean;
        isWriteOnly(): boolean;
        isReadOnly(): boolean;
        isReadWrite(): boolean;
    }

    type DefinitionType =
        | { type: "CatchClause"; node: ESTree.CatchClause; parent: null }
        | { type: "ClassName"; node: ESTree.ClassDeclaration | ESTree.ClassExpression; parent: null }
        | { type: "FunctionName"; node: ESTree.FunctionDeclaration | ESTree.FunctionExpression; parent: null }
        | { type: "ImplicitGlobalVariable"; node: ESTree.Program; parent: null }
        | {
              type: "ImportBinding";
              node: ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier;
              parent: ESTree.ImportDeclaration;
          }
        | {
              type: "Parameter";
              node: ESTree.FunctionDeclaration | ESTree.FunctionExpression | ESTree.ArrowFunctionExpression;
              parent: null;
          }
        | { type: "TDZ"; node: unknown; parent: null }
        | { type: "Variable"; node: ESTree.VariableDeclarator; parent: ESTree.VariableDeclaration };

    type Definition = DefinitionType & { name: ESTree.Identifier };
}

//#region SourceCode

export class SourceCode<Node extends ESTree.BaseNode = ESTree.Node> {
    text: string;
    ast: AST.Program;
    lines: string[];
    hasBOM: boolean;
    parserServices: SourceCode.ParserServices;
    scopeManager: Scope.ScopeManager<Node>;
    visitorKeys: SourceCode.VisitorKeys;

    constructor(text: string, ast: AST.Program);
    constructor(config: SourceCode.Config<Node>);

    static splitLines(text: string): string[];

    getText(node?: Node, beforeCount?: number, afterCount?: number): string;

    getLines(): string[];

    getAllComments(): ESTree.Comment[];

    getComments(node: Node): { leading: ESTree.Comment[]; trailing: ESTree.Comment[] };

    getJSDocComment(node: Node): ESTree.Comment | null;

    getNodeByRangeIndex(index: number): Node | null;

    isSpaceBetweenTokens(first: AST.Token, second: AST.Token): boolean;

    getLocFromIndex(index: number): ESTree.Position;

    getIndexFromLoc(location: ESTree.Position): number;

    // Inherited methods from TokenStore
    // ---------------------------------

    getTokenByRangeStart(offset: number, options?: { includeComments: false }): AST.Token | null;
    getTokenByRangeStart(offset: number, options: { includeComments: boolean }): AST.Token | ESTree.Comment | null;

    getFirstToken: SourceCode.UnaryNodeCursorWithSkipOptions<Node>;

    getFirstTokens: SourceCode.UnaryNodeCursorWithCountOptions<Node>;

    getLastToken: SourceCode.UnaryNodeCursorWithSkipOptions<Node>;

    getLastTokens: SourceCode.UnaryNodeCursorWithCountOptions<Node>;

    getTokenBefore: SourceCode.UnaryCursorWithSkipOptions<Node>;

    getTokensBefore: SourceCode.UnaryCursorWithCountOptions<Node>;

    getTokenAfter: SourceCode.UnaryCursorWithSkipOptions<Node>;

    getTokensAfter: SourceCode.UnaryCursorWithCountOptions<Node>;

    getFirstTokenBetween: SourceCode.BinaryCursorWithSkipOptions<Node>;

    getFirstTokensBetween: SourceCode.BinaryCursorWithCountOptions<Node>;

    getLastTokenBetween: SourceCode.BinaryCursorWithSkipOptions<Node>;

    getLastTokensBetween: SourceCode.BinaryCursorWithCountOptions<Node>;

    getTokensBetween: SourceCode.BinaryCursorWithCountOptions<Node>;

    getTokens: ((node: Node, beforeCount?: number, afterCount?: number) => AST.Token[]) &
        SourceCode.UnaryNodeCursorWithCountOptions<Node>;

    commentsExistBetween(
        left: Node | AST.Token | ESTree.Comment,
        right: Node | AST.Token | ESTree.Comment,
    ): boolean;

    getCommentsBefore(nodeOrToken: Node | AST.Token): ESTree.Comment[];

    getCommentsAfter(nodeOrToken: Node | AST.Token): ESTree.Comment[];

    getCommentsInside(node: Node): ESTree.Comment[];
}

export namespace SourceCode {
    interface Config<Node extends ESTree.BaseNode> {
        text: string;
        ast: AST.Program;
        parserServices?: ParserServices;
        scopeManager?: Scope.ScopeManager<Node>;
        visitorKeys?: VisitorKeys;
    }

    type ParserServices = unknown;

    interface VisitorKeys {
        [nodeType: string]: string[];
    }

    type TokenFilter<T = AST.Token> = (token: T) => boolean;

    interface UnaryNodeCursorWithSkipOptions<Node> {
        <T extends AST.Token>(
            node: Node,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false; skip?: number  },
        ): T | null;
        <T extends AST.Token | ESTree.Comment>(
            node: Node,
            options: {
                filter: (token: AST.Token | ESTree.Comment) => token is T;
                includeComments: boolean;
                skip?: number;
            },
        ): T | null;
        (
            node: Node,
            options?:
                | TokenFilter
                | { filter?: TokenFilter; includeComments?: false; skip?: number  }
                | number,
        ): AST.Token | null;
        (
            node: Node,
            options: {
                filter?: TokenFilter<AST.Token | ESTree.Comment>;
                includeComments: boolean;
                skip?: number;
            },
        ): AST.Token | ESTree.Comment | null;
    }

    interface UnaryNodeCursorWithCountOptions<Node> {
        <T extends AST.Token>(
            node: Node,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false; count?: number  },
        ): T[];
        <T extends AST.Token | ESTree.Comment>(
            node: Node,
            options: {
                filter: (token: AST.Token | ESTree.Comment) => token is T;
                includeComments: boolean;
                count?: number;
            },
        ): T[];
        (
            node: Node,
            options?:
                | TokenFilter
                | { filter?: TokenFilter; includeComments?: false; count?: number  }
                | number,
        ): AST.Token[];
        (
            node: Node,
            options: {
                filter?: TokenFilter<AST.Token | ESTree.Comment>;
                includeComments: boolean;
                count?: number;
            },
        ): Array<AST.Token | ESTree.Comment>;
    }

    interface UnaryCursorWithSkipOptions<Node> {
        <T extends AST.Token>(
            node: Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false; skip?: number  },
        ): T | null;
        <T extends AST.Token | ESTree.Comment>(
            node: Node | AST.Token | ESTree.Comment,
            options: {
                filter: (token: AST.Token | ESTree.Comment) => token is T;
                includeComments: boolean;
                skip?: number;
            },
        ): T | null;
        (
            node: Node | AST.Token | ESTree.Comment,
            options?:
                | TokenFilter
                | { filter?: TokenFilter; includeComments?: false; skip?: number  }
                | number,
        ): AST.Token | null;
        (
            node: Node | AST.Token | ESTree.Comment,
            options: {
                filter?: TokenFilter<AST.Token | ESTree.Comment>;
                includeComments: boolean;
                skip?: number;
            },
        ): AST.Token | ESTree.Comment | null;
    }

    interface UnaryCursorWithCountOptions<Node> {
        <T extends AST.Token>(
            node: Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false; count?: number  },
        ): T[];
        <T extends AST.Token | ESTree.Comment>(
            node: Node | AST.Token | ESTree.Comment,
            options: {
                filter: (token: AST.Token | ESTree.Comment) => token is T;
                includeComments: boolean;
                count?: number;
            },
        ): T[];
        (
            node: Node | AST.Token | ESTree.Comment,
            options?:
                | TokenFilter
                | { filter?: TokenFilter; includeComments?: false; count?: number  }
                | number,
        ): AST.Token[];
        (
            node: Node | AST.Token | ESTree.Comment,
            options: {
                filter?: TokenFilter<AST.Token | ESTree.Comment>
                includeComments: boolean;
                count?: number;
            },
        ): Array<AST.Token | ESTree.Comment>;
    }

    interface BinaryCursorWithSkipOptions<Node> {
        <T extends AST.Token>(
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false; skip?: number  },
        ): T | null;
        <T extends AST.Token | ESTree.Comment>(
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options: {
                filter: (token: AST.Token | ESTree.Comment) => token is T;
                includeComments: boolean;
                skip?: number;
            },
        ): T | null;
        (
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options?:
                | { filter?: TokenFilter; includeComments?: false; skip?: number  }
                | TokenFilter
                | number,
        ): AST.Token | null;
        (
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options: {
                filter?: TokenFilter<AST.Token | ESTree.Comment>;
                includeComments: boolean;
                skip?: number;
            },
        ): AST.Token | ESTree.Comment | null;
    }

    interface BinaryCursorWithCountOptions<Node> {
        <T extends AST.Token>(
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false; count?: number  },
        ): T[];
        <T extends AST.Token | ESTree.Comment>(
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options: {
                filter: (token: AST.Token | ESTree.Comment) => token is T;
                includeComments: boolean;
                count?: number;
            },
        ): T[];
        (
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options?:
                | { filter?: TokenFilter; includeComments?: false; count?: number  }
                | TokenFilter
                | number,
        ): AST.Token[];
        (
            left: Node | AST.Token | ESTree.Comment,
            right: Node | AST.Token | ESTree.Comment,
            options: {
                filter?: TokenFilter<AST.Token | ESTree.Comment>;
                includeComments: boolean;
                count?: number;
            },
        ): Array<AST.Token | ESTree.Comment>;
    }
}

//#endregion

export namespace Rule {
    interface RuleModule<Node extends ESTree.BaseNode = ESTree.Node> {
        meta?: RuleMetadata;
        create(context: RuleContext<Node>): RuleListener<Node & NodeParentExtension<Node>>;
    }

    type Node = ESTree.Node & NodeParentExtension<ESTree.Node>;

    type NodeTypes = Node["type"];

    interface NodeParentExtension<Node extends ESTree.BaseNode> {
        parent: Node & NodeParentExtension<Node>;
    }

    interface NodeListener<Node extends ESTree.BaseNode> {
        Program?(program: ESTree.Program): void;
        ArrayExpression?(node: ESTree.ArrayExpression & NodeParentExtension<Node>): void;
        ArrayPattern?(node: ESTree.ArrayPattern & NodeParentExtension<Node>): void;
        ArrowFunctionExpression?(node: ESTree.ArrowFunctionExpression & NodeParentExtension<Node>): void;
        AssignmentExpression?(node: ESTree.AssignmentExpression & NodeParentExtension<Node>): void;
        AssignmentPattern?(node: ESTree.AssignmentPattern & NodeParentExtension<Node>): void;
        AwaitExpression?(node: ESTree.AwaitExpression & NodeParentExtension<Node>): void;
        BinaryExpression?(node: ESTree.BinaryExpression & NodeParentExtension<Node>): void;
        BlockStatement?(node: ESTree.BlockStatement & NodeParentExtension<Node>): void;
        BreakStatement?(node: ESTree.BreakStatement & NodeParentExtension<Node>): void;
        CallExpression?(node: ESTree.CallExpression & NodeParentExtension<Node>): void;
        CatchClause?(node: ESTree.CatchClause & NodeParentExtension<Node>): void;
        ChainExpression?(node: ESTree.ChainExpression & NodeParentExtension<Node>): void;
        ClassBody?(node: ESTree.ClassBody & NodeParentExtension<Node>): void;
        ClassDeclaration?(node: ESTree.ClassDeclaration & NodeParentExtension<Node>): void;
        ClassExpression?(node: ESTree.ClassExpression & NodeParentExtension<Node>): void;
        ConditionalExpression?(node: ESTree.ConditionalExpression & NodeParentExtension<Node>): void;
        ContinueStatement?(node: ESTree.ContinueStatement & NodeParentExtension<Node>): void;
        DebuggerStatement?(node: ESTree.DebuggerStatement & NodeParentExtension<Node>): void;
        DoWhileStatement?(node: ESTree.DoWhileStatement & NodeParentExtension<Node>): void;
        EmptyStatement?(node: ESTree.EmptyStatement & NodeParentExtension<Node>): void;
        ExportAllDeclaration?(node: ESTree.ExportAllDeclaration & NodeParentExtension<Node>): void;
        ExportDefaultDeclaration?(node: ESTree.ExportDefaultDeclaration & NodeParentExtension<Node>): void;
        ExportNamedDeclaration?(node: ESTree.ExportNamedDeclaration & NodeParentExtension<Node>): void;
        ExportSpecifier?(node: ESTree.ExportSpecifier & NodeParentExtension<Node>): void;
        ExpressionStatement?(node: ESTree.ExpressionStatement & NodeParentExtension<Node>): void;
        ForInStatement?(node: ESTree.ForInStatement & NodeParentExtension<Node>): void;
        ForOfStatement?(node: ESTree.ForOfStatement & NodeParentExtension<Node>): void;
        ForStatement?(node: ESTree.ForStatement & NodeParentExtension<Node>): void;
        FunctionDeclaration?(node: ESTree.FunctionDeclaration & NodeParentExtension<Node>): void;
        FunctionExpression?(node: ESTree.FunctionExpression & NodeParentExtension<Node>): void;
        Identifier?(node: ESTree.Identifier & NodeParentExtension<Node>): void;
        IfStatement?(node: ESTree.IfStatement & NodeParentExtension<Node>): void;
        ImportDeclaration?(node: ESTree.ImportDeclaration & NodeParentExtension<Node>): void;
        ImportDefaultSpecifier?(node: ESTree.ImportDefaultSpecifier & NodeParentExtension<Node>): void;
        ImportExpression?(node: ESTree.ImportExpression & NodeParentExtension<Node>): void;
        ImportNamespaceSpecifier?(node: ESTree.ImportNamespaceSpecifier & NodeParentExtension<Node>): void;
        ImportSpecifier?(node: ESTree.ImportSpecifier & NodeParentExtension<Node>): void;
        LabeledStatement?(node: ESTree.LabeledStatement & NodeParentExtension<Node>): void;
        Literal?(node: ESTree.Literal & NodeParentExtension<Node>): void;
        LogicalExpression?(node: ESTree.LogicalExpression & NodeParentExtension<Node>): void;
        MemberExpression?(node: ESTree.MemberExpression & NodeParentExtension<Node>): void;
        MetaProperty?(node: ESTree.MetaProperty & NodeParentExtension<Node>): void;
        MethodDefinition?(node: ESTree.MethodDefinition & NodeParentExtension<Node>): void;
        NewExpression?(node: ESTree.NewExpression & NodeParentExtension<Node>): void;
        ObjectExpression?(node: ESTree.ObjectExpression & NodeParentExtension<Node>): void;
        ObjectPattern?(node: ESTree.ObjectPattern & NodeParentExtension<Node>): void;
        Property?(node: ESTree.Property & NodeParentExtension<Node>): void;
        RestElement?(node: ESTree.RestElement & NodeParentExtension<Node>): void;
        ReturnStatement?(node: ESTree.ReturnStatement & NodeParentExtension<Node>): void;
        SequenceExpression?(node: ESTree.SequenceExpression & NodeParentExtension<Node>): void;
        SpreadElement?(node: ESTree.SpreadElement & NodeParentExtension<Node>): void;
        Super?(node: ESTree.Super & NodeParentExtension<Node>): void;
        SwitchCase?(node: ESTree.SwitchCase & NodeParentExtension<Node>): void;
        SwitchStatement?(node: ESTree.SwitchStatement & NodeParentExtension<Node>): void;
        TaggedTemplateExpression?(node: ESTree.TaggedTemplateExpression & NodeParentExtension<Node>): void;
        TemplateElement?(node: ESTree.TemplateElement & NodeParentExtension<Node>): void;
        TemplateLiteral?(node: ESTree.TemplateLiteral & NodeParentExtension<Node>): void;
        ThisExpression?(node: ESTree.ThisExpression & NodeParentExtension<Node>): void;
        ThrowStatement?(node: ESTree.ThrowStatement & NodeParentExtension<Node>): void;
        TryStatement?(node: ESTree.TryStatement & NodeParentExtension<Node>): void;
        UnaryExpression?(node: ESTree.UnaryExpression & NodeParentExtension<Node>): void;
        UpdateExpression?(node: ESTree.UpdateExpression & NodeParentExtension<Node>): void;
        VariableDeclaration?(node: ESTree.VariableDeclaration & NodeParentExtension<Node>): void;
        VariableDeclarator?(node: ESTree.VariableDeclarator & NodeParentExtension<Node>): void;
        WhileStatement?(node: ESTree.WhileStatement & NodeParentExtension<Node>): void;
        WithStatement?(node: ESTree.WithStatement & NodeParentExtension<Node>): void;
        YieldExpression?(node: ESTree.YieldExpression & NodeParentExtension<Node>): void;
    }

    interface CodePathListener<Node extends ESTree.BaseNode> {
        onCodePathStart?(path: CodePath, node: Node): void;
        onCodePathEnd?(path: CodePath, node: Node): void;
        onCodePathSegmentStart?(segment: CodePathSegment, node: Node): void;
        onCodePathSegmentEnd?(segment: CodePathSegment, node: Node): void;
        onCodePathSegmentLoop?(from: CodePathSegment, to: CodePathSegment, node: Node): void;
    }

    interface RuleListener<Node extends ESTree.BaseNode> extends NodeListener<Node>, CodePathListener<Node> {
        [selector: string]:
            | ((node: Node) => void)
            | NodeListener<Node>[keyof NodeListener<Node>]
            | CodePathListener<Node>[keyof CodePathListener<Node>];
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

    interface RuleMetadata {
        docs?: RuleDocumentation;
        messages?: RuleMessages;
        fixable?: "code" | "whitespace";
        schema?: JSONSchema4 | JSONSchema4[];
        deprecated?: boolean;
        type?: "problem" | "suggestion" | "layout";
        /** specifies whether rules can return suggestions (defaults to false if omitted) */
        hasSuggestions?: boolean;
    }

    interface RuleMessages {
        [messageId: string]: string;
    }

    interface RuleDocumentation {
        /** provides the short description of the rule in the [rules index](https://eslint.org/docs/rules/) */
        description?: string;
        /** specifies the heading under which the rule is listed in the [rules index](https://eslint.org/docs/rules/) */
        category?: string;
        /** is whether the `"extends": "eslint:recommended"` property in a [configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) enables the rule */
        recommended?: boolean;
        /** specifies the URL at which the full documentation can be accessed */
        url?: string;
        /** specifies whether rules can return suggestions (defaults to false if omitted) */
        suggestion?: boolean;
    }

    interface RuleContext<Node extends ESTree.BaseNode> {
        id: string;
        options: any[];
        settings: Record<string, any>;
        parserPath: string;
        parserOptions: Linter.ParserOptions;
        parserServices: SourceCode.ParserServices;
        getAncestors(): Node[];
        getDeclaredVariables(node: Node): Array<Scope.Variable<Node>>;
        getFilename(): string;
        getPhysicalFilename(): string;
        getCwd(): string;
        getScope(): Scope.Scope<Node>;
        getSourceCode(): SourceCode<Node>;
        markVariableAsUsed(name: string): boolean;
        report(descriptor: ReportDescriptor<Node>): void;
    }

    type ReportFixer<Node extends ESTree.BaseNode> = (fixer: RuleFixer<Node>) => null | Fix | Fix[] | IterableIterator<Fix>;

    interface ReportDescriptorOptionsBase<Node extends ESTree.BaseNode> {
        data?: Record<string, string>;
        fix?: ReportFixer<Node> | null;
    }

    interface SuggestionReportOptions<Node extends ESTree.BaseNode> {
        data?: Record<string, string>;
        fix: ReportFixer<Node>;
    }

    type SuggestionDescriptorMessage =
        | { desc: string }
        | { messageId: string };

    type SuggestionReportDescriptor<Node extends ESTree.BaseNode> =
        & SuggestionDescriptorMessage
        & SuggestionReportOptions<Node>;

    interface ReportDescriptorOptions<Node extends ESTree.BaseNode> extends ReportDescriptorOptionsBase<Node> {
        suggest?: Array<SuggestionReportDescriptor<Node>> | null;
    }

    type ReportDescriptor<Node extends ESTree.BaseNode> =
        ReportDescriptorMessage &
        ReportDescriptorLocation<Node> &
        ReportDescriptorOptions<Node>;

    type ReportDescriptorMessage =
        | { message: string }
        | { messageId: string };

    type ReportDescriptorLocation<Node> =
        | { node: Node }
        | { loc: AST.SourceLocation | { line: number; column: number } };

    interface RuleFixer<Node extends ESTree.BaseNode> {
        insertTextAfter(nodeOrToken: Node | AST.Token, text: string): Fix;
        insertTextAfterRange(range: AST.Range, text: string): Fix;
        insertTextBefore(nodeOrToken: Node | AST.Token, text: string): Fix;
        insertTextBeforeRange(range: AST.Range, text: string): Fix;
        remove(nodeOrToken: Node | AST.Token): Fix;
        removeRange(range: AST.Range): Fix;
        replaceText(nodeOrToken: Node | AST.Token, text: string): Fix;
        replaceTextRange(range: AST.Range, text: string): Fix;
    }

    interface Fix {
        range: AST.Range;
        text: string;
    }
}

//#region Linter

export class Linter<Node extends ESTree.BaseNode = ESTree.Node> {
    static readonly version: string;

    readonly version: string;

    constructor(options?: Linter.Options);

    verify(code: SourceCode<Node> | string, config: Linter.Config, filename?: string): Linter.LintMessage[];
    verify(code: SourceCode<Node> | string, config: Linter.Config, options: Linter.LintOptions): Linter.LintMessage[];

    verifyAndFix(code: string, config: Linter.Config, filename?: string): Linter.FixReport;
    verifyAndFix(code: string, config: Linter.Config, options: Linter.FixOptions): Linter.FixReport;

    getSourceCode(): SourceCode<Node>;

    defineRule(name: string, rule: Rule.RuleModule<Node>): void;

    defineRules(rules: Record<string, Rule.RuleModule<Node>>): void;

    getRules(): Map<string, Rule.RuleModule<Node>>;

    defineParser(name: string, parser: Linter.ParserModule<Node>): void;
}

export namespace Linter {
    type Severity = 0 | 1 | 2;

    type RuleLevel = Severity | "off" | "warn" | "error";
    type RuleLevelAndOptions<Options extends any[] = any[]> = Prepend<Partial<Options>, RuleLevel>;

    type RuleEntry<Options extends any[] = any[]> = RuleLevel | RuleLevelAndOptions<Options>;

    interface Options {
        cwd?: string;
    }

    interface RulesRecord {
        [rule: string]: RuleEntry;
    }

    interface HasRules<Rules extends RulesRecord = RulesRecord> {
        rules?: Partial<Rules>;
    }

    interface BaseConfig<Rules extends RulesRecord = RulesRecord> extends HasRules<Rules> {
        $schema?: string;
        env?: Record<string, boolean>;
        extends?: string | string[];
        globals?: Record<string, boolean | "readonly" | "readable" | "writable" | "writeable">;
        noInlineConfig?: boolean;
        overrides?: ConfigOverride[];
        parser?: string;
        parserOptions?: ParserOptions;
        plugins?: string[];
        processor?: string;
        reportUnusedDisableDirectives?: boolean;
        settings?: Record<string, any>;
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
        ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | "latest";
        sourceType?: "script" | "module";
        ecmaFeatures?: {
            globalReturn?: boolean;
            impliedStrict?: boolean;
            jsx?: boolean;
            experimentalObjectRestSpread?: boolean;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    }

    interface LintOptions {
        filename?: string;
        preprocess?: ((code: string) => string[]);
        postprocess?: ((problemLists: LintMessage[][]) => LintMessage[]);
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

    type ParserModule<Node extends ESTree.BaseNode> =
        | { parse(text: string, options?: ParserOptions): AST.Program; }
        | { parseForESLint(text: string, options?: ParserOptions): ESLintParseResult<Node>; };

    interface ESLintParseResult<Node extends ESTree.BaseNode> {
        ast: AST.Program;
        parserServices?: SourceCode.ParserServices;
        scopeManager?: Scope.ScopeManager<Node>;
        visitorKeys?: SourceCode.VisitorKeys;
    }

    interface ProcessorFile {
        text: string;
        filename: string;
    }

    // https://eslint.org/docs/developer-guide/working-with-plugins#processors-in-plugins
    interface Processor<T extends string | ProcessorFile = string | ProcessorFile> {
        supportsAutofix?: boolean;
        preprocess?(text: string, filename: string): T[];
        postprocess?(messages: LintMessage[][], filename: string): LintMessage[];
    }
}

//#endregion

//#region ESLint

export class ESLint {
    static readonly version: string;

    static outputFixes(results: ESLint.LintResult[]): Promise<void>;

    static getErrorResults(results: ESLint.LintResult[]): ESLint.LintResult[];

    constructor(options?: ESLint.Options);

    lintFiles(patterns: string | string[]): Promise<ESLint.LintResult[]>;

    lintText(code: string, options?: { filePath?: string; warnIgnored?: boolean  }): Promise<ESLint.LintResult[]>;

    getRulesMetaForResults(results: ESLint.LintResult[]): ESLint.LintResultData['rulesMeta'];

    calculateConfigForFile(filePath: string): Promise<Linter.Config>;

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
        fixTypes?: Array<Rule.RuleMetadata["type"]>;

        // Cache-related
        cache?: boolean;
        cacheLocation?: string;
        cacheStrategy?: "content" | "metadata";
    }

    interface LintResult {
        filePath: string;
        messages: Linter.LintMessage[];
        errorCount: number;
        fatalErrorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        output?: string;
        source?: string;
        usedDeprecatedRules: DeprecatedRuleUse[];
    }

    interface LintResultData {
        rulesMeta: {
            [ruleId: string]: Rule.RuleMetadata;
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

//#region RuleTester

export class RuleTester<Node extends ESTree.BaseNode = ESTree.Node> {
    constructor(config?: Linter.Config);

    run(
        name: string,
        rule: Rule.RuleModule<Node>,
        tests: {
            valid?: Array<string | RuleTester.ValidTestCase>;
            invalid?: RuleTester.InvalidTestCase[];
        },
    ): void;

    static only(
        item: string | RuleTester.ValidTestCase | RuleTester.InvalidTestCase,
    ): RuleTester.ValidTestCase | RuleTester.InvalidTestCase;
}

export namespace RuleTester {
    interface ValidTestCase {
        code: string;
        options?: any;
        filename?: string;
        only?: boolean;
        parserOptions?: Linter.ParserOptions;
        settings?: Record<string, any>;
        parser?: string;
        globals?: Record<string, boolean>;
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
        data?: unknown;
        line?: number;
        column?: number;
        endLine?: number;
        endColumn?: number;
        suggestions?: SuggestionOutput[];
    }
}

//#endregion
