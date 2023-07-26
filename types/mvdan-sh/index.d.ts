// Type definitions for mvdan-sh 0.10
// Project: https://github.com/mvdan/sh/tree/master/_js
// Definitions by: JounQin <https://github.com/JounQin>
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
    interface Pos {
        After(p: Pos): boolean;
        Col(): number;
        IsValid(): boolean;
        Line(): number;
        Offset(): number;
        String(): string;
    }

    interface Node {
        Pos(): Pos;
        End(): Pos;
    }

    interface Command extends Node {
        OpPos: Pos;
    }

    type WordPart = Node;

    interface Word extends Node {
        Parts: WordPart[];
        Lit(): string;
    }

    interface Lit extends Node {
        ValuePos: Pos;
        ValueEnd: Pos;
        Value: string;
    }

    interface Stmt extends Node {
        Comments: Comment[];
        Cmd: Command;
        Position: Pos;
        Semicolon: Pos;
        Negated: boolean;
        Background: boolean;
        Coprocess: boolean;
    }

    interface Comment extends Node {
        Hash: Pos;
        Text: string;
    }

    interface File extends Node {
        Name: string;
        Stmts?: Stmt[] | undefined;
        Last: Stmt[];
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
