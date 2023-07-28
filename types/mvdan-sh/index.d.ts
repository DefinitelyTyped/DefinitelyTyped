// Type definitions for mvdan-sh 0.10
// Project: https://github.com/mvdan/sh/tree/master/_js
// Definitions by: JounQin <https://github.com/JounQin>
//                 Rossil2012 <https://github.com/Rossil2012>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// eslint-disable-next-line no-const-enum
declare const enum LangVariant {
    LangBash = 0,
    LangPOSIX = 1,
    LangMirBSDKorn = 2,
    LangBats = 3,
}

declare namespace sh {
    type token = number;
    type RedirOperator = token;
    type ProcOperator = token;
    type GlobOperator = token;
    type BinCmdOperator = token;
    type CaseOperator = token;
    type ParNamesOperator = token;
    type ParExpOperator = token;
    type UnAritOperator = token;
    type BinAritOperator = token;
    type UnTestOperator = token;
    type BinTestOperator = token;

    interface Node {
        Pos(): Pos;
        End(): Pos;
    }

    interface File extends Node {
        Name: string;
        Stmts: Array<Stmt | null>;
        Last: Comment[];
    }

    interface Pos {
        After(p: Pos): boolean;
        Col(): number;
        IsValid(): boolean;
        Line(): number;
        Offset(): number;
        String(): string;
    }

    interface Comment extends Node {
        Hash: Pos;
        Text: string;
    }

    interface Stmt extends Node {
        Comments: Comment[];
        Cmd: Command;
        Position: Pos;
        Semicolon: Pos;
        Negated: boolean;
        Background: boolean;
        Coprocess: boolean;
        Redirs: Array<Redirect | null>;
    }

    type Command = Node;

    interface Assign extends Node {
        Append: boolean;
        Naked: boolean;
        Name: Lit | null;
        Index: ArithmExpr;
        Value: Word | null;
        Array: ArrayExpr | null;
    }

    interface Redirect extends Node {
        OpPos: Pos;
        Op: RedirOperator;
        N: Lit | null;
        Word: Word | null;
        Hdoc: Word | null;
    }

    interface CallExpr extends Command {
        Assigns: Array<Assign | null>;
        Args: Array<Word | null>;
    }

    interface Subshell extends Command {
        Lparen: Pos;
        Rparen: Pos;
        Stmts: Array<Stmt | null>;
        Last: Comment[];
    }

    interface Block extends Command {
        Lbrace: Pos;
        Rbrace: Pos;
        Stmts: Array<Stmt | null>;
        Last: Comment[];
    }

    interface IfClause extends Command {
        Position: Pos;
        ThenPos: Pos;
        FiPos: Pos;
        Cond: Array<Stmt | null>;
        CondLast: Comment[];
        Then: Array<Stmt | null>;
        ThenLast: Comment[];
        Else: IfClause | null;
        Last: Comment[];
    }

    interface WhileClause extends Command {
        WhilePos: Pos;
        DoPos: Pos;
        DonePos: Pos;
        Until: boolean;
        Cond: Array<Stmt | null>;
        CondLast: Comment[];
        Do: Array<Stmt | null>;
        DoLast: Comment[];
    }

    interface ForClause extends Command {
        ForPos: Pos;
        DoPos: Pos;
        DonePos: Pos;
        Select: boolean;
        Braces: boolean;
        Loop: Loop;

        Do: Array<Stmt | null>;
        DoLast: Comment[];
    }

    type Loop = Node;

    interface WordIter extends Loop {
        Name: Lit | null;
        InPos: Pos;
        Items: Array<Word | null>;
    }

    interface CStyleLoop extends Loop {
        Lparen: Pos;
        Rparen: Pos;
        Init: ArithmExpr;
        Cond: ArithmExpr;
        Post: ArithmExpr;
    }

    interface BinaryCmd extends Command {
        OpPos: Pos;
        Op: BinCmdOperator;
        X: Stmt | null;
        Y: Stmt | null;
    }

    interface FuncDecl extends Command {
        Position: Pos;
        RsrvWord: boolean;
        Parens: boolean;
        Name: Lit | null;
        Body: Stmt | null;
    }

    interface Word extends Node, TestClause, ArithmExpr {
        Parts: WordPart[];
        Lit(): string;
    }

    type WordPart = Node;

    interface Lit extends WordPart {
        ValuePos: Pos;
        ValueEnd: Pos;
        Value: string;
    }

    interface SglQuoted extends WordPart {
        Left: Pos;
        Right: Pos;
        Dollar: boolean;
        Value: string;
    }

    interface DblQuoted extends WordPart {
        Left: Pos;
        Right: Pos;
        Dollar: boolean;
        Parts: WordPart[];
    }

    interface CmdSubst extends WordPart {
        Left: Pos;
        Right: Pos;
        Stmts: Array<Stmt | null>;
        Last: Comment[];
        Backquotes: boolean;
        TempFile: boolean;
        ReplyVar: boolean;
    }

    interface ParamExp extends WordPart {
        Dollar: Pos;
        Rbrace: Pos;
        Short: boolean;
        Excl: boolean;
        Length: boolean;
        Width: boolean;
        Param: Lit | null;
        Index: ArithmExpr;
        Slice: Slice | null;
        Repl: Replace | null;
        Names: ParNamesOperator;
        Exp: Expansion | null;
    }

    interface Slice {
        Offset: ArithmExpr;
        Length: ArithmExpr;
    }

    interface Replace {
        All: boolean;
        Orig: Word | null;
        With: Word | null;
    }

    interface Expansion {
        Op: ParExpOperator;
        Word: Word | null;
    }

    interface ArithmExp extends WordPart {
        Left: Pos;
        Right: Pos;
        Bracket: boolean;
        Unsigned: boolean;
        X: ArithmExpr;
    }

    interface ArithmCmd extends Command {
        Left: Pos;
        Right: Pos;
        Unsigned: boolean;
        X: ArithmExpr;
    }

    type ArithmExpr = Node;

    interface BinaryArithm extends ArithmExpr {
        OpPos: Pos;
        Op: BinAritOperator;
        X: ArithmExpr;
        Y: ArithmExpr;
    }

    interface UnaryArithm extends ArithmExpr {
        OpPos: Pos;
        Op: UnAritOperator;
        Post: boolean;
        X: ArithmExpr;
    }

    interface ParenArithm extends ArithmExpr {
        Lparen: Pos;
        Rparen: Pos;
        X: ArithmExpr;
    }

    interface CaseClause extends Command {
        Case: Pos;
        In: Pos;
        Esac: Pos;
        Braces: boolean;
        Word: Word | null;
        Items: Array<CaseItem | null>;
        Last: Comment[];
    }

    interface CaseItem extends Node {
        Op: CaseOperator;
        OpPos: Pos;
        Comments: Comment[];
        Patterns: Array<Word | null>;
        Stmts: Array<Stmt | null>;
        Last: Comment[];
    }

    interface TestClause extends Command {
        Left: Pos;
        Right: Pos;
        X: TestExpr;
    }

    type TestExpr = Node;

    interface BinaryTest extends TestExpr {
        OpPos: Pos;
        Op: BinTestOperator;
        X: TestExpr;
        Y: TestExpr;
    }

    interface UnaryTest extends TestExpr {
        OpPos: Pos;
        Op: UnTestOperator;
        X: TestExpr;
    }

    interface ParenTest extends TestExpr {
        Lparen: Pos;
        Rparen: Pos;
        X: TestExpr;
    }

    interface DeclClause extends Command {
        Variant: Lit | null;
        Args: Array<Assign | null>;
    }

    interface ArrayExpr extends Node {
        Lparen: Pos;
        Rparen: Pos;
        Elems: Array<ArrayElem | null>;
        Last: Comment[];
    }

    interface ArrayElem extends Node {
        Index: ArithmExpr;
        Value: Word | null;
        Comments: Comment[];
    }

    interface ExtGlob extends WordPart {
        OpPos: Pos;
        Op: GlobOperator;
        Pattern: Lit | null;
    }

    interface ProcSubst extends WordPart {
        OpPos: Pos;
        Rparen: Pos;
        Op: ProcOperator;
        Stmts: Array<Stmt | null>;
        Last: Comment[];
    }

    interface TimeClause extends Command {
        Time: Pos;
        PosixFormat: boolean;
        Stmt: Stmt | null;
    }

    interface CoprocClause extends Command {
        Coproc: Pos;
        Name: Word | null;
        Stmt: Stmt | null;
    }

    interface LetClause extends Command {
        Let: Pos;
        Exprs: ArithmExpr[];
    }

    interface BraceExp extends WordPart {
        Sequence: boolean;
        Elems: Array<Word | null>;
    }

    interface TestDecl extends Command {
        Position: Pos;
        Description: Word | null;
        Body: Stmt | null;
    }

    type ParserOption = (parser: Parser) => void;

    type PrinterOption = (printer: Printer) => void;

    interface Parser {
        Parse(text: string, path?: string): File;
        Interactive(r: { read: (size?: number) => string | Buffer | null }, fn: (stmts: Stmt[]) => boolean): void;
        InteractiveStep(line: string): Stmt[];
        Incomplete(): boolean;
    }

    interface Printer {
        Print(node: Node): string;
    }

    interface ShellScript {
        LangVariant: typeof LangVariant;
        syntax: {
            // variant
            LangBash: LangVariant.LangBash;
            LangPOSIX: LangVariant.LangPOSIX;
            LangMirBSDKorn: LangVariant.LangMirBSDKorn;

            // parser
            NewParser(...options: ParserOption[]): Parser;
            KeepComments(enabled?: boolean): ParserOption;
            StopAt(word: string): ParserOption;
            Variant(lang: LangVariant): ParserOption;

            // printer
            NewPrinter(...options: PrinterOption[]): Printer;
            Indent(spaces: number): PrinterOption;
            BinaryNextLine(enabled: boolean): PrinterOption;
            SwitchCaseIndent(enabled: boolean): PrinterOption;
            SpaceRedirects(enabled: boolean): PrinterOption;
            KeepPadding(enabled: boolean): PrinterOption;
            Minify(enabled: boolean): PrinterOption;
            FunctionNextLine(enabled: boolean): PrinterOption;

            // helpers and utils
            DebugPrint(node: Node): void;
            NodeType(node: Node): string;
            SplitBraces<T = {}>(word: T): T
            Walk(node: Node, walker: (node: Node) => boolean): void;
            IsIncomplete(err: any): boolean;
        };
    }
}

declare const sh: sh.ShellScript;

export = sh;
