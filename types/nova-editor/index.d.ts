// Type definitions for non-npm package nova-editor 1.0 (beta 10)
// Project: https://novadocs.panic.com
// Definitions by: Cameron Little <https://github.com/apexskier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class LanguageClient {
    constructor(
        identifier: string,
        name: string,
        serverOptions: {
            type?: 'stdio' | 'socket' | 'pipe';
            path: string;
            args?: Array<string>;
            env?: { [key: string]: string };
        },
        clientOptions: { syntaxes: Array<string> },
    );

    readonly identifier: string;
    readonly name: string;
    readonly running: boolean;

    onNotification(method: string, callback: (parameters: unknown) => void): void;
    onRequest(method: string, callback: (parameters: unknown) => unknown | Promise<unknown>): void;
    sendRequest(method: string, parameters?: unknown): Promise<unknown>;
    sendNotification(method: string, parameters?: unknown): void;
    start(): void;
    stop(): void;
}

interface Configuration {}

type TextDocument = unknown;
type TextEditor = unknown;

interface Workspace {
    readonly path: string | null;
    readonly config: Configuration;
    readonly textDocuments: ReadonlyArray<TextDocument>;
    readonly textEditors: ReadonlyArray<TextEditor>;
    readonly activeTextEditor: TextEditor;

    onDidAddTextEditor(callback: (editor: TextEditor) => void): void;
    onDidChangePath(callback: (newPath: TextEditor) => void): void;
}

interface Extension {
    readonly identifier: string;
    readonly name: string;
    readonly vendor: string;
    readonly version: string;
    readonly path: string;
    readonly globalStoragePath: string;
    readonly workspaceStoragePath: string;
}

declare class Range {
    constructor(start: number, end: number);

    start: number;
    end: number;
    length: number;
    empty: boolean;

    isEqual(other: Range): boolean;
    compare(other: Range): number;
    containsRange(other: Range): boolean;
    containsIndex(index: number): boolean;
    union(other: Range): Range;
    intersection(other: Range): Range;
    intersectsRange(other: Range): boolean;
}

type Selector = string;

declare class Disposable {
    static isDisposable(x: any): x is Disposable;
    dispose(): void;
}

type ColorFormat = 'rgb' | 'hsl' | 'hsb' | 'p3' | 'hex';
type ColorComponents = [number, number, number, number];

declare class Color {
    constructor(format: ColorFormat, components: ColorComponents);

    format: ColorFormat;
    components: ColorComponents;
}

interface ColorAssistant {
    parseColorStrings(colorStrings: ReadonlyArray<String>): ReadonlyArray<Color>;
}

declare enum CompletionReason {
    Invoke,
    Character,
}

interface CompletionContext {
    readonly text: string;
    readonly line: string;
    readonly position: number;
    readonly reason: CompletionReason;
}

declare enum CompletionItemKind {
    Type,
    Class,
    Category,
    Interface,
    Enum,
    Union,
    Struct,
    Function,
    Method,
    Closure,
    Constructor,
    Constant,
    Variable,
    Property,
    Argument,
    Color,
    EnumMember,
    Statement,
    Expression,
    Tag,
    Package,
    File,
    Reference,
    Keyword,
    StyleRuleset,
    StyleDirective,
    StyleID,
    StyleClass,
}

declare class CompletionItem {
    constructor(label: string, kind: CompletionItemKind);

    label: string;
    kind: CompletionItemKind;
    detail?: string;
    documentation?: string;
    filterText?: string;
    range?: Range;
    commitCharacters?: Array<string>;
    tokenize: boolean; // default false
}

interface CompletionAssistant {
    provideCompletionItems(editor: TextEditor, context: CompletionContext): Array<CompletionItem>;
}

declare class IssueCollection {
    constructor(name?: string);

    name: string;

    append(uri: string, issues: Array<Issue>): void;
    dispose(): void;
    clear(): void;
    has(uri: string): void;
    get(uri: string): void;
    set(uri: string, issues: Array<Issue>): void;
    remove(uri: string): void;
}

declare enum IssueSeverity {
    Error,
    Warning,
}

declare class Issue {
    constructor();
    code: number | string;
    severity: IssueSeverity;
    source: string | null;
    textRange?: Range;
    line?: number;
    column?: number;
    endLine?: number;
    endColumn?: number;
}

interface IssueAssistant {
    provideIssues(editor: TextEditor): Array<Issue>;
}

interface AssistantsRegistry {
    registerColorAssistant(selector: Selector, object: ColorAssistant): Disposable;
    registerCompletionAssistant(selector: Selector, object: CompletionAssistant): Disposable;
    registerIssueAssistant(selector: Selector, object: IssueAssistant): Disposable;
}

interface NovaObject {
    readonly workspace: Workspace;
    readonly extension: Extension;
    readonly assistants: AssistantsRegistry;
}

declare const nova: NovaObject;

interface Console {
    assert(condition: () => unknown, message: string, ...params: Array<unknown>): void;
    clear(): void;
    log(message: unknown, ...params: Array<unknown>): void;
    info(message: unknown, ...params: Array<unknown>): void;
    warn(message: unknown, ...params: Array<unknown>): void;
    error(message: unknown, ...params: Array<unknown>): void;
    group(): void;
    groupEnd(): void;
    count(label?: string): void;
    time(label: string): void;
    timeEnd(label: string): void;
    timeStamp(label?: string): void;
    trace(): void;
}

declare const console: Console;
