// Type definitions for mvdan-sh 0.5
// Project: https://github.com/mvdan/sh/tree/master/_js
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum LangVariant {
    LangBash = 0,
    LangPOSIX = 1,
    LangMirBSDKorn = 2,
}

export interface Pos {
    After(p: Pos): boolean;
    Col(): number;
    IsValid(): boolean;
    Line(): number;
    Offset(): number;
    String(): string;
}

export interface Node {
    Pos(): Pos;
    End(): Pos;
}

export interface Command extends Node {
    OpPos: Pos;
}

export type WordPart = Node;

export interface Word extends Node {
    Parts: WordPart[];
    Lit(): string;
}

export interface Lit extends Node {
    ValuePos: Pos;
    ValueEnd: Pos;
    Value: string;
}

export interface Stmt extends Node {
    Comments: Comment[];
    Cmd: Command;
    Position: Pos;
    Semicolon: Pos;
    Negated: boolean;
    Background: boolean;
    Coprocess: boolean;
}

export interface Comment extends Node {
    Hash: Pos;
    Text: string;
}

export interface File extends Node {
    Name: string;
    Stmts?: Stmt[];
    Last: Stmt[];
}

export type ParserOption = (parser: Parser) => void;

export type PrinterOption = (printer: Printer) => void;

export interface Parser {
    Parse(text: string, path?: string): File;
}

export interface Printer {
    Print(node: Node): string;
}

export interface ShellScript {
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
    };
}

declare const sh: ShellScript;

export default sh;
