// Type definitions for non-npm package nova-editor-node 1.0
// Project: https://novadocs.panic.com
// Definitions by: Cameron Little <https://github.com/apexskier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.3

// Currently at beta 10

/// https://novadocs.panic.com/extensions/

// This runs in an extension of Apple's JavaScriptCore, manually set libs

/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />

type ReadableStream = unknown;
type WritableStream = unknown;

/// https://novadocs.panic.com/api-reference/assistants-registry/

type AssistantsRegistrySelector = string | { syntax: string };

interface AssistantsRegistry {
    registerColorAssistant(selector: AssistantsRegistrySelector, object: ColorAssistant): Disposable;
    registerCompletionAssistant(selector: AssistantsRegistrySelector, object: CompletionAssistant): Disposable;
    registerIssueAssistant(selector: AssistantsRegistrySelector, object: IssueAssistant): Disposable;
}

interface ColorAssistant {
    parseColorStrings(colorStrings: ReadonlyArray<string>): ReadonlyArray<Color>;
}

interface CompletionAssistant {
    provideCompletionItems(editor: TextEditor, context: CompletionContext): CompletionItem[];
}

interface IssueAssistant {
    provideIssues(editor: TextEditor): Issue[];
}

/// https://novadocs.panic.com/api-reference/color/

type ColorFormat = 'rgb' | 'hsl' | 'hsb' | 'p3' | 'hex';
type ColorComponents = [number, number, number, number];

declare class Color {
    constructor(format: ColorFormat, components: ColorComponents);

    format: ColorFormat;
    components: ColorComponents;
}

/// https://novadocs.panic.com/api-reference/commands-registry/

interface CommandsRegistry {
    register(name: string, callable: (...params: any[]) => void): Disposable;
    register<T>(name: string, callable: (this: T, ...params: any[]) => void, thisValue: T): Disposable;
    invoke(name: string, ...arguments: unknown[]): Promise<unknown>;
}

/// https://novadocs.panic.com/api-reference/completion-context/

interface CompletionContext {
    readonly text: string;
    readonly line: string;
    readonly position: number;
    readonly reason: CompletionReason;
}

declare enum CompletionReason {
    Invoke,
    Character,
}

/// https://novadocs.panic.com/api-reference/completion-item/

declare class CompletionItem {
    constructor(label: string, kind: CompletionItemKind);

    label: string;
    kind: CompletionItemKind;
    detail?: string;
    documentation?: string;
    filterText?: string;
    insertText?: string;
    range?: Range;
    commitCharacters?: string[];
    tokenize: boolean; // default false
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

/// https://novadocs.panic.com/api-reference/composite-disposable/

declare class CompositeDisposable extends Disposable {
    constructor();

    add(object: Disposable): void;
    remove(object: Disposable): void;
    delete(object: Disposable): void;
    clear(): void;
}

/// https://novadocs.panic.com/api-reference/configuration/

type ConfigurationValue = string | number | string[] | boolean;

interface Configuration {
    onDidChange<T>(key: string, callback: (newValue: T, oldValue: T) => void): Disposable;
    observe<T>(key: string, callback: (newValue: T, oldValue: T) => void): Disposable;
    get(key: string): ConfigurationValue | null;
    get(key: string, coerce: 'string'): string | null;
    get(key: string, coerce: 'number'): number | null;
    get(key: string, coerce: 'array'): string[] | null;
    get(key: string, coerce: 'boolean'): boolean | null;
    set(key: string, value?: ConfigurationValue | null): void;
    remove(key: string): void;
}

/// https://novadocs.panic.com/api-reference/console/

interface Console {
    assert(condition: () => unknown, message: string, ...params: unknown[]): void;
    clear(): void;
    log(message: unknown, ...params: unknown[]): void;
    info(message: unknown, ...params: unknown[]): void;
    warn(message: unknown, ...params: unknown[]): void;
    error(message: unknown, ...params: unknown[]): void;
    group(): void;
    groupEnd(): void;
    count(label?: string): void;
    time(label: string): void;
    timeEnd(label: string): void;
    timeStamp(label?: string): void;
    trace(): void;
}

/// https://novadocs.panic.com/api-reference/credentials/

type User = unknown;

interface Credentials {
    getPassword(service: string, user: User): string | null;
    setPassword(service: string, user: User, password: string): null;
    removePassword(service: string, user: User): null;
}

/// https://novadocs.panic.com/api-reference/disposable/

declare class Disposable {
    constructor();

    static isDisposable(x: any): x is Disposable;
    dispose(): void;
}

/// https://novadocs.panic.com/api-reference/emitter/

declare class Emitter extends Disposable {
    constructor();

    on(eventName: string, callback: (...args: any[]) => void): void;
    once(eventName: string, callback: (...args: any[]) => void): void;
    preempt(eventName: string, callback: (...args: any[]) => void): void;
    emit(eventName: string, ...args: unknown[]): void;
    clear(eventName?: string): void;
}

/// https://novadocs.panic.com/api-reference/environment/

interface Environment {
    readonly version: [number, number, number];
    readonly versionString: string;
    readonly systemVersion: [number, number, number];
    readonly locales: string[];
    readonly config: Configuration;
    readonly credentials: Credentials;
    readonly extension: Extension;
    readonly environment: { [key: string]: string };
    readonly path: Path;
    readonly subscriptions: CompositeDisposable;
    readonly workspace: Workspace;

    // undocumented in main documentation page, but referenced elsewhere
    readonly assistants: AssistantsRegistry;
    readonly commands: CommandsRegistry;
    readonly fs: FileSystem;
    readonly notifications: NotificationCenter;

    isReleasedVersion(): boolean;
    inDevMode(): boolean;
    beep(): void;
    localize(key: string | null, value?: string | null, tableName?: string | null): string;
    openConfig(identifier?: string): void;
    openURL(url: string, callback?: (success: boolean) => void): void;
}

declare const nova: Environment;

/// https://novadocs.panic.com/api-reference/extension/

interface Extension {
    readonly identifier: string;
    readonly name: string;
    readonly vendor: string;
    readonly version: string;
    readonly path: string;
    readonly globalStoragePath: string;
    readonly workspaceStoragePath: string;
}

/// https://novadocs.panic.com/api-reference/file/

interface File {
    readonly closed: boolean;
    readonly path: string;

    close(): void;
    tell(): number;
    seek(offset: number, from?: number): void;
    write(value: string | ArrayBuffer, encoding?: string): void;
}

interface FileBinaryMode extends File {
    read(size?: string): ArrayBuffer | null;
}

interface FileTextMode extends File {
    read(size?: string): string | null;
    readline(): string;
    readlines(): string[];
}

/// https://novadocs.panic.com/api-reference/file-stats/

interface FileStats {
    readonly atime: Date;
    readonly ctime: Date;
    readonly mtime: Date;
    readonly birthtime: Date;
    readonly size: number;

    isFile(): boolean;
    isDirectory(): boolean;
    isSymbolicLink(): boolean;
}

/// https://novadocs.panic.com/api-reference/file-system/

type FileSystemBitField = number & { __t: 'FileSystemBitField' };

type Encoding =
    | 'utf8'
    | 'utf-8'
    | 'ascii'
    | 'utf16le'
    | 'utf-16le'
    | 'utf16be'
    | 'utf-16be'
    | 'latin1'
    | 'hex'
    | 'base64';

declare class FileSystem {
    private constructor();

    static F_OK: FileSystemBitField;
    static R_OK: FileSystemBitField;
    static W_OK: FileSystemBitField;
    static X_OK: FileSystemBitField;
    static START: FileSystemBitField;
    static CURRENT: FileSystemBitField;
    static END: FileSystemBitField;

    F_OK: FileSystemBitField;
    R_OK: FileSystemBitField;
    W_OK: FileSystemBitField;
    X_OK: FileSystemBitField;
    START: FileSystemBitField;
    CURRENT: FileSystemBitField;
    END: FileSystemBitField;

    access(path: string, modes: number): boolean;
    copy(src: string, dest: string): void;
    copyAsync(src: string, dest: string, callback: (err?: Error) => void): void;
    copyAsync<T>(src: string, dest: string, callback: (this: T, err?: Error) => void, thisValue: T): void;
    listdir(path: string): string[];
    mkdir(path: string): void;
    move(src: string, dest: string): void;
    moveAsync(src: string, dest: string, callback: (err?: Error) => void): void;
    moveAsync<T>(src: string, dest: string, callback: (this: T, err?: Error) => void, thisValue: T): void;
    remove(path: string): void;
    rmdir(path: string): void;
    stat(path: string): FileStats | null;
    eject(path: string): void;
    reveal(path: string): void;
    open(path: string, mode?: string, encoding?: Encoding): FileBinaryMode | FileTextMode;
    watch(pattern: string | null, callable: (path: string) => void): FileSystemWatcher;
}

/// https://novadocs.panic.com/api-reference/file-system-watcher/

interface FileSystemWatcher extends Disposable {
    onDidChange(callback: (path: string) => void): void;
}

/// https://novadocs.panic.com/api-reference/issue/

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

declare enum IssueSeverity {
    Error,
    Warning,
    Hint,
    Info,
}

/// https://novadocs.panic.com/api-reference/issue-collection/

declare class IssueCollection {
    constructor(name?: string);

    name: string;

    append(uri: string, issues: Issue[]): void;
    dispose(): void;
    clear(): void;
    has(uri: string): void;
    get(uri: string): void;
    set(uri: string, issues: Issue[]): void;
    remove(uri: string): void;
}

/// https://novadocs.panic.com/api-reference/language-client/

declare class LanguageClient {
    constructor(
        identifier: string,
        name: string,
        serverOptions: {
            type?: 'stdio' | 'socket' | 'pipe';
            path: string;
            args?: string[];
            env?: { [key: string]: string };
        },
        clientOptions: { syntaxes: string[] },
    );

    readonly identifier: string;
    readonly name: string;
    readonly running: boolean;

    onNotification(method: string, callback: (parameters: any) => void): void;
    onRequest(method: string, callback: (parameters: any) => unknown | Promise<unknown>): void;
    sendRequest(method: string, parameters?: unknown): Promise<unknown>;
    sendNotification(method: string, parameters?: unknown): void;
    start(): void;
    stop(): void;
}

/// https://novadocs.panic.com/api-reference/notification-center/

interface NotificationCenter {
    add(request: NotificationRequest): Promise<NotificationResponse>;
    cancel(identifier: string): void;
}

/// https://novadocs.panic.com/api-reference/notification-request/

declare class NotificationRequest {
    constructor(identifier: string);

    readonly identifier: string;
    title?: string;
    body?: string;
    type?: 'input' | 'secure-input';
    textInputValue?: string;
    textInputPlaceholder?: string;
    actions?: string[];
}

/// https://novadocs.panic.com/api-reference/notification-response/

interface NotificationResponse {
    readonly identifier: string;
    readonly actionIdx: number | null;
    readonly textInputValue?: string;
}

/// https://novadocs.panic.com/api-reference/path/

interface Path {
    basename(path: string): string;
    dirname(path: string): string;
    extname(path: string): string;
    splitext(path: string): [string, string];
    expanduser(path: string): string;
    isAbsolute(path: string): boolean;
    join(path: string, ...paths: string[]): string;
    normalize(path: string): string;
    split(path: string): string[];
}

/// https://novadocs.panic.com/api-reference/process/

// This could be improved to split into automatic pipe and jsonrpc types with
// the appropriate methods enabled, but because stdio is configured within
// options it feels like overkill

declare class Process {
    constructor(
        command: string,
        options?: {
            args?: string[];
            env?: { [key: string]: string };
            cwd?: string;
            stdio?: ['pipe' | 'ignore', 'pipe' | 'ignore', 'pipe' | 'ignore'] | 'pipe' | 'ignore' | 'jsonrpc';
            shell?: true | string;
        },
    );

    readonly args?: string[];
    readonly env?: { [key: string]: string };
    readonly command: string;
    readonly pid: number;
    readonly stdio?: [
        ReadableStream | WritableStream | null,
        ReadableStream | WritableStream | null,
        ReadableStream | WritableStream | null,
    ];
    readonly stdin?: ReadableStream | WritableStream | null;
    readonly stdout?: ReadableStream | WritableStream | null;
    readonly stderr?: ReadableStream | WritableStream | null;

    onStdout(callback: (line: string) => void): void;
    onStderr(callback: (line: string) => void): void;
    onDidExit(callback: (status: number) => void): void;
    start(): void;
    signal(signal: string | number): void;
    kill(): void;
    terminate(): void;
    // see no-unnecessary-generics for why these aren't stricter
    notify(methodName: string, params?: any): void;
    request(methodName: string, params?: any): Promise<any>;
    onNotify(methodName: string, callback: (message: ProcessMessage<any, any, any>) => void): void;
    onRequest(methodName: string, callback: (message: ProcessMessage<any, any, any>) => any): void;
}

/// https://novadocs.panic.com/api-reference/process-message/

interface ProcessMessage<P, R, E> {
    readonly method: string | null;
    readonly parameters?: P;
    readonly result?: R | null;
    readonly errorCode: number | null;
    readonly errorReason: string | null;
    readonly errorData: E | null;
}

/// https://novadocs.panic.com/api-reference/range/

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

/// https://novadocs.panic.com/api-reference/symbol/

type NovaSymbolType =
    | 'function'
    | 'method'
    | 'property'
    | 'class'
    | 'type'
    | 'interface'
    | 'constant'
    | 'variable'
    | 'category'
    | 'package'
    | 'enum'
    | 'union'
    | 'struct'
    | 'heading'
    | 'bookmark';

// name change to avoid conflict with base ecmascript Symbol

interface NovaSymbol {
    readonly type: NovaSymbolType;
    readonly range: Range;
    readonly name: string;
    readonly nameRange: Range;
    readonly displayName: string;
    readonly comment: string | null;
    readonly parent: NovaSymbol | null;
}

// https://novadocs.panic.com/api-reference/text-document/

interface TextDocument {
    readonly uri: string;
    readonly path: string | null;
    readonly isRemote: boolean;
    readonly isDirty: boolean;
    readonly isEmpty: boolean;
    readonly isUntitled: boolean;
    readonly isClosed: boolean;
    readonly eol: string;
    readonly length: number;
    readonly syntax: string | null;

    getTextInRange(range: Range): string;
    getLineRangeForRange(range: Range): Range;
    onDidChangePath(callback: (document: TextDocument, path: string | null) => void): void;
    onDidChangeSyntax(callback: (document: TextDocument, syntax: string | null) => void): void;
}

/// https://novadocs.panic.com/api-reference/text-editor/

declare class TextEditor {
    private constructor();

    static isTextEditor(object: any): object is TextEditor;

    readonly document: TextDocument;
    readonly selectedRange: Range;
    readonly selectedRanges: Range[];
    readonly selectedText: string;
    readonly softTabs: boolean;
    readonly tabLength: number;
    readonly tabText: string;

    edit(callback: (edit: TextEditorEdit) => void, options?: unknown): Promise<void>;
    insert(string: string): Promise<void>;
    save(): void;
    getTextInRange(range: Range): string;
    getLineRangeForRange(range: Range): string;
    onDidChange(callback: (textEditor: TextEditor) => void): void;
    onDidStopChanging(callback: (textEditor: TextEditor) => void): void;
    onWillSave(callback: (textEditor: TextEditor) => void): void;
    onDidSave(callback: (textEditor: TextEditor) => void): void;
    onDidChangeSelection(callback: (textEditor: TextEditor) => void): void;
    onDidDestroy(callback: (textEditor: TextEditor) => void): void;
    addSelectionForRange(range: Range): void;
    selectToPosition(position: number): void;
    selectUp(rowCount: number): void;
    selectDown(rowCount: number): void;
    selectLeft(rowCount: number): void;
    selectRight(rowCount: number): void;
    selectToTop(): void;
    selectToBottom(): void;
    selectAll(): void;
    selectLinesContainingCursors(): void;
    selectToBeginningOfLine(): void;
    selectToEndOfLine(): void;
    selectWordsContainingCursors(): void;
    selectToBeginningOfWord(): void;
    selectToEndOfWord(): void;
    scrollToCursorPosition(): void;
    scrollToPosition(position: number): void;
    symbolAtPosition(position: number): NovaSymbol | null;
    symbolsForSelectedRanges(): ReadonlyArray<NovaSymbol | null>;
}

/// https://novadocs.panic.com/api-reference/text-editor-edit/

interface TextEditorEdit {
    delete(range: Range): void;
    replace(range: Range, text: string): void;
    insert(position: number, text: string): void;
}

/// https://novadocs.panic.com/api-reference/tree-data-provider/

interface TreeDataProvider<E> {
    getChildren(element: E | null): E[] | Promise<E[]>;
    getParent?(element: E): E;
    getTreeItem(element: E): TreeItem;
}

/// https://novadocs.panic.com/api-reference/tree-item/

declare class TreeItem {
    constructor(name: string, collapsibleState?: TreeItemCollapsibleState);

    readonly name: string;
    readonly collapsibleState: TreeItemCollapsibleState;
    command?: unknown; // https://dev.panic.com/panic/nova-issues/-/issues/909
    contextValue?: string;
    descriptiveText?: string;
    identifier?: string;
    image?: string;
    path?: string;
    tooltip?: string;
}

declare enum TreeItemCollapsibleState {
    None,
    Collapsed,
    Expanded,
}

/// https://novadocs.panic.com/api-reference/tree-view/

declare class TreeView<E> extends Disposable {
    constructor(identifier: string, options?: { dataProvider: TreeDataProvider<E> });

    readonly visible: boolean;
    readonly selection: E[];

    onDidChangeSelection(callback: (selectedElements: E[]) => void): Disposable;
    onDidChangeVisibility(callback: () => void): Disposable;
    onDidExpandElement(callback: (element: E) => void): Disposable;
    onDidCollapseElement(callback: (element: E) => void): Disposable;
    reload(element?: E | null): Promise<void>;
    reveal(element: E | null, options?: { select?: boolean; focus?: boolean; reveal?: number }): void;
}

/// https://novadocs.panic.com/api-reference/workspace/

interface Workspace {
    readonly path: string | null;
    readonly config: Configuration;
    readonly textDocuments: ReadonlyArray<TextDocument>;
    readonly textEditors: ReadonlyArray<TextEditor>;
    readonly activeTextEditor: TextEditor;

    onDidAddTextEditor(callback: (editor: TextEditor) => void): void;
    onDidChangePath(callback: (newPath: TextEditor) => void): void;
    onDidOpenTextDocument(callback: (textDocument: TextDocument) => void): void;
    contains(path: string): boolean;
    relativizePath(path: string): string;
    openConfig(identifier?: string): void;
    openFile(uri: string): Promise<TextEditor | null>;
    showInformativeMessage(message: string): void;
    showWarningMessage(message: string): void;
    showErrorMessage(message: string): void;
    showActionPanel(
        message: string,
        options?: { buttons?: string[] },
        callback?: (buttonIndex: number | null) => void,
    ): void;
    showInputPanel(
        message: string,
        options?: {
            label?: string;
            placeholder?: string;
            value?: string;
            prompt?: string;
            secure?: boolean;
        },
        callback?: (value: string | null) => void,
    ): void;
    showInputPalette(
        message: string,
        options?: { placeholder?: string },
        callback?: (value: string | null) => void,
    ): void;
    showChoicePalette(
        choices: string[],
        options?: { placeholder?: string },
        callback?: (choice: string | null, choiceIndex: number | null) => void,
    ): void;
    showFileChooser(
        message: string,
        options?: {
            prompt?: string;
            allowFiles?: boolean;
            allowDirectories?: boolean;
            allowMultiple?: boolean;
            filetype?: string[];
            relative?: boolean;
        },
        callback?: (paths: string[] | null) => void,
    ): void;
}

/// https://novadocs.panic.com/api-reference/

declare function atob(data: string): string;
declare function btoa(data: string): string;

// tslint:disable-next-line:ban-types
type TimerHandler = string | Function;

declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function clearTimeout(handle?: number): void;

declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function clearInterval(handle?: number): void;
