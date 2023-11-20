/// https://docs.nova.app/extensions/#javascript-runtime

// This runs in an extension of Apple's JavaScriptCore, manually set libs

/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />
/// <reference lib="WebWorker" />

/// https://docs.nova.app/api-reference/assistants-registry/

type AssistantsRegistrySelector = string | string[] | { syntax: string } | { syntax: string }[];

interface AssistantsRegistry {
    registerColorAssistant(
        selector: AssistantsRegistrySelector,
        object: ColorAssistant,
    ): Disposable;
    registerCompletionAssistant(
        selector: AssistantsRegistrySelector,
        object: CompletionAssistant,
        options?: { triggerChars?: Charset },
    ): Disposable;
    registerIssueAssistant(
        selector: AssistantsRegistrySelector,
        object: IssueAssistant,
        options?: { event: "onChange" | "onSave" },
    ): Disposable;
    registerTaskAssistant(object: TaskAssistant, options?: { identifier: string; name: string }): Disposable;
}

type AssistantArray<T> = ReadonlyArray<T> | Promise<ReadonlyArray<T>>;

interface ColorAssistant {
    provideColors(editor: TextEditor, context: ColorInformationContext): AssistantArray<ColorInformation>;
    provideColorPresentations(
        color: Color,
        editor: TextEditor,
        context: ColorPresentationContext,
    ): AssistantArray<ColorPresentation>;
}

interface CompletionAssistant {
    provideCompletionItems(editor: TextEditor, context: CompletionContext): AssistantArray<CompletionItem>;
}

interface IssueAssistant {
    provideIssues(editor: TextEditor): AssistantArray<Issue>;
}

type ResolvedTaskAction = TaskCommandAction | TaskProcessAction;

interface TaskAssistant {
    provideTasks(): AssistantArray<Task>;
    resolveTaskAction?<T extends Transferrable>(
        context: TaskActionResolveContext<T>,
    ): ResolvedTaskAction | Promise<ResolvedTaskAction>;
}

/// https://docs.nova.app/api-reference/charset/

declare class Charset {
    constructor(characters?: string);

    static alphanumeric: Charset;
    static digits: Charset;
    static letters: Charset;
    static lower: Charset;
    static newlines: Charset;
    static symbols: Charset;
    static upper: Charset;
    static whitespace: Charset;
    static whitespaceAndNewlines: Charset;

    concat(...charsets: Array<Charset>): Charset;
    intersect(...charsets: Array<Charset>): Charset;
}

/// https://docs.nova.app/api-reference/clipboard/

declare interface Clipboard {
    readText(): Promise<string>;
    writeText(text: string): Promise<void>;
}

/// https://docs.nova.app/api-reference/color/

declare enum ColorFormat {
    rgb = "rgb",
    hsl = "hsl",
    hsb = "hsb",
    displayP3 = "p3",
}

declare class Color {
    constructor(format: ColorFormat, components: number[]);

    static rgb(red: number, green: number, blue: number, alpha?: number): any;
    static hsl(hue: number, saturation: number, luminance: number, alpha?: number): any;
    static hsb(hue: number, saturation: number, brightness: number, alpha?: number): any;
    static displayP3(red: number, green: number, blue: number, alpha?: number): any;

    convert(format: ColorFormat): Color;

    readonly format: ColorFormat;
    readonly components: number[];
}

/// https://docs.nova.app/api-reference/commands-registry/

type Transferrable =
    | Transferrable[]
    | ReadonlyArray<Transferrable>
    | Date
    | null
    | number
    | { [key: string]: Transferrable }
    | RegExp
    | string
    | Color
    | Range;

interface CommandsRegistry {
    register(name: string, callable: (...params: any[]) => void): Disposable;
    register<T>(name: string, callable: (this: T, ...params: any[]) => void, thisValue: T): Disposable;
    invoke(name: string, ...arguments: Transferrable[]): Promise<unknown>;
    invoke(name: string, textEditor: TextEditor, ...arguments: Transferrable[]): Promise<unknown>;
}

/// https://docs.nova.app/api-reference/color-information-context/

interface ColorInformationContext {
    readonly candidates: ColorCandidate[];
}

/// https://docs.nova.app/api-reference/color-candidate/

interface ColorCandidate {
    range: Range;
    text: string;
}

/// https://docs.nova.app/api-reference/color-information/

declare class ColorInformation {
    constructor(range: Range, color: Color, kind?: string);

    color: Color;
    kind?: string;
    range: Range;
    usesFloats?: boolean;
    format?: ColorFormat;
}

/// https://docs.nova.app/api-reference/color-presentation-context/

interface ColorPresentationContext {
    readonly range: Range;
}

/// https://docs.nova.app/api-reference/color-presentation/

declare class ColorPresentation {
    constructor(label: string, kind?: string);

    additionalTextEdits: TextEdit[];
    format?: ColorFormat;
    insertText?: string;
    kind: string;
    label: string;
    usesFloats?: boolean;
}

/// https://docs.nova.app/api-reference/completion-context/

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

/// https://docs.nova.app/api-reference/completion-item/

declare class CompletionItem {
    constructor(label: string, kind: CompletionItemKind);

    additionalTextEdits?: TextEdit[];
    color?: Color;
    commitChars?: Charset;
    detail?: string;
    documentation?: string;
    filterText?: string;
    insertText?: string;
    insertTextFormat?: InsertTextFormat;
    readonly kind: CompletionItemKind;
    readonly label: string;
    range?: Range;
}

declare enum CompletionItemKind {
    // Types
    Type,
    Class,
    Category,
    Interface,
    Enum,
    Union,
    Struct,

    // Types
    Function,
    Method,
    Closure,
    Constructor,
    Destructor,
    Getter,
    Setter,
    StaticMethod,

    // Values
    Constant,
    Variable,
    Property,
    Argument,
    Color,
    EnumMember,
    StaticProperty,

    // Expressions
    Expression,
    Statement,
    Package,
    File,
    Reference,
    Keyword,

    // StyleSheets
    StyleRuleset,
    StyleDirective,
    StyleID,
    StyleClass,
    StylePseudoClass,
    StylePseudoElement,

    // Tags
    Tag,
    TagHead,
    TagTitle,
    TagMeta,
    TagLink,
    TagBody,
    TagScript,
    TagStyle,
    TagHeading,
    TagSection,
    TagContainer,
    TagUnorderedList,
    TagOrderedList,
    TagListItem,
    TagAnchor,
    TagImage,
    TagMedia,
    TagForm,
    TagFormField,
    TagFramework,
}

declare enum InsertTextFormat {
    PlainText,
    Snippet,
}

/// https://docs.nova.app/api-reference/composite-disposable/

declare class CompositeDisposable extends Disposable {
    constructor();

    add(object: Disposable): void;
    remove(object: Disposable): void;
    delete(object: Disposable): void;
    clear(): void;
}

/// https://docs.nova.app/api-reference/configuration/

type ConfigurationValue = string | number | string[] | boolean;

interface Configuration {
    onDidChange<T>(key: string, callback: (newValue: T, oldValue: T) => void): Disposable;
    observe<T, K>(key: string, callback: (this: K, newValue: T, oldValue: T) => void, thisValue?: K): Disposable;
    get(key: string): ConfigurationValue | null;
    get(key: string, coerce: "string"): string | null;
    get(key: string, coerce: "number"): number | null;
    get(key: string, coerce: "array"): string[] | null;
    get(key: string, coerce: "boolean"): boolean | null;
    set(key: string, value?: ConfigurationValue | null): void;
    remove(key: string): void;
}

/// https://docs.nova.app/api-reference/console/

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

/// https://docs.nova.app/api-reference/credentials/

type User = unknown;

interface Credentials {
    getPassword(service: string, user: User): string | null;
    setPassword(service: string, user: User, password: string): null;
    removePassword(service: string, user: User): null;
}

/// https://docs.nova.app/api-reference/disposable/

declare class Disposable {
    constructor();

    static isDisposable(x: any): x is Disposable;
    dispose(): void;
}

/// https://docs.nova.app/api-reference/emitter/

declare class Emitter extends Disposable {
    constructor();

    on(eventName: string, callback: (...args: any[]) => void): void;
    once(eventName: string, callback: (...args: any[]) => void): void;
    preempt(eventName: string, callback: (...args: any[]) => void): void;
    emit(eventName: string, ...args: unknown[]): void;
    clear(eventName?: string): void;
}

/// https://docs.nova.app/api-reference/environment/

interface Environment {
    readonly version: [number, number, number];
    readonly versionString: string;
    readonly systemVersion: [number, number, number];
    readonly locales: string[];
    readonly clipboard: Clipboard;
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

/// https://docs.nova.app/api-reference/extension/

interface Extension {
    readonly identifier: string;
    readonly name: string;
    readonly vendor: string;
    readonly version: string;
    readonly path: string;
    readonly globalStoragePath: string;
    readonly workspaceStoragePath: string;
}

/// https://docs.nova.app/api-reference/file/

interface File {
    readonly closed: boolean;
    readonly path: string;

    close(): void;
    tell(): number;
    seek(offset: number, from?: number): void;
    write(value: string | ArrayBuffer, encoding?: string): void;
}

interface FileBinaryMode extends File {
    read(size?: number): ArrayBuffer | null;
}

interface FileTextMode extends File {
    read(size?: number): string | null;
    readline(): string;
    readlines(): string[];
}

/// https://docs.nova.app/api-reference/file-stats/

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

/// https://docs.nova.app/api-reference/file-system/

type FileSystemBitField = number & { __t: "FileSystemBitField" };

type Encoding =
    | "utf8"
    | "utf-8"
    | "ascii"
    | "utf16le"
    | "utf-16le"
    | "utf16be"
    | "utf-16be"
    | "latin1"
    | "hex"
    | "base64";

declare class FileSystem {
    private constructor();

    constants: {
        F_OK: FileSystemBitField;
        R_OK: FileSystemBitField;
        W_OK: FileSystemBitField;
        X_OK: FileSystemBitField;
        START: FileSystemBitField;
        CURRENT: FileSystemBitField;
        END: FileSystemBitField;
    };

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

/// https://docs.nova.app/api-reference/file-system-watcher/

interface FileSystemWatcher extends Disposable {
    onDidChange(callback: (path: string) => void): void;
}

/// https://docs.nova.app/api-reference/issue/

declare class Issue {
    constructor();
    code: number | string;
    message: string;
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

/// https://docs.nova.app/api-reference/issue-collection/

declare class IssueCollection {
    constructor(name?: string);

    name: string;

    append(uri: string, issues: Issue[]): void;
    dispose(): void;
    clear(): void;
    has(uri: string): boolean;
    get(uri: string): ReadonlyArray<Issue>;
    set(uri: string, issues: Issue[]): void;
    remove(uri: string): void;
}

/// https://docs.nova.app/api-reference/issue-parser/

declare class IssueParser {
    constructor(matcherNames?: string | Array<string>);

    readonly issues: ReadonlyArray<Issue>;

    pushLine(line: string): void;
    clear(): void;
}

/// https://docs.nova.app/api-reference/language-client/

declare class LanguageClient {
    constructor(
        identifier: string,
        name: string,
        serverOptions: ServerOptions,
        clientOptions: { initializationOptions?: any; syntaxes: string[] },
    );

    readonly identifier: string;
    readonly name: string;
    readonly running: boolean;

    onDidStop<T>(callback: (this: T, err?: Error) => void, thisValue?: T): Disposable;
    onNotification(method: string, callback: (parameters: any) => void): void;
    onRequest(method: string, callback: (parameters: any) => unknown | Promise<unknown>): void;
    sendRequest(method: string, parameters?: unknown): Promise<unknown>;
    sendNotification(method: string, parameters?: unknown): void;
    start(): void;
    stop(): void;
}

interface ServerOptions {
    type?: "stdio" | "socket" | "pipe";
    path: string;
    args?: string[];
    env?: { [key: string]: string };
}

/// https://docs.nova.app/api-reference/notification-center/

interface NotificationCenter {
    add(request: NotificationRequest): Promise<NotificationResponse>;
    cancel(identifier: string): void;
}

/// https://docs.nova.app/api-reference/notification-request/

declare class NotificationRequest {
    constructor(identifier?: string);

    readonly identifier: string;
    title?: string;
    body?: string;
    type?: "input" | "secure-input";
    textInputValue?: string;
    textInputPlaceholder?: string;
    actions?: string[];
}

/// https://docs.nova.app/api-reference/notification-response/

interface NotificationResponse {
    readonly identifier: string;
    readonly actionIdx: number | null;
    readonly textInputValue?: string;
}

/// https://docs.nova.app/api-reference/path/

interface Path {
    basename(path: string): string;
    dirname(path: string): string;
    extname(path: string): string;
    splitext(path: string): [string, string];
    expanduser(path: string): string;
    isAbsolute(path: string): boolean;
    join(...paths: string[]): string;
    normalize(path: string): string;
    relative(from: string, to: string): string;
    split(path: string): string[];
}

/// https://docs.nova.app/api-reference/process/

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
            stdio?: ["pipe" | "ignore", "pipe" | "ignore", "pipe" | "ignore"] | "pipe" | "ignore" | "jsonrpc" | number;
            shell?: true | string;
        },
    );

    readonly args?: string[];
    readonly env?: { [key: string]: string };
    readonly command: string;
    readonly pid: number;
    readonly stdio: [
        WritableStream | null,
        ReadableStream | null,
        ReadableStream | null,
    ];
    readonly stdin: WritableStream | null;
    readonly stdout: ReadableStream | null;
    readonly stderr: ReadableStream | null;

    onStdout(callback: (line: string) => void): Disposable;
    onStderr(callback: (line: string) => void): Disposable;
    onDidExit(callback: (status: number) => void): Disposable;
    start(): void;
    signal(signal: string | number): void;
    kill(): void;
    terminate(): void;
    // see no-unnecessary-generics for why these aren't stricter
    notify(methodName: string, params?: any): void;
    request(methodName: string, params?: any): Promise<any>;
    onNotify(methodName: string, callback: (message: ProcessMessage<any, any, any>) => void): Disposable;
    onRequest(methodName: string, callback: (message: ProcessMessage<any, any, any>) => any): Disposable;
}

/// https://docs.nova.app/api-reference/process-message/

interface ProcessMessage<P, R, E> {
    readonly method: string | null;
    readonly parameters?: P;
    readonly result?: R | null;
    readonly errorCode: number | null;
    readonly errorReason: string | null;
    readonly errorData: E | null;
}

/// https://docs.nova.app/api-reference/range/

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

/// https://docs.nova.app/api-reference/scanner/

declare class Scanner {
    constructor(string: string);

    readonly string: string;
    location: number;
    readonly atEnd: boolean;
    skipChars: Charset;
    caseSensitive: boolean;

    scanString(string: string): string | null;
    scanUpToString(string: string): string | null;
    scanChars(charset: Charset): string | null;
    scanUpToChars(charset: Charset): string | null;
    scanInt(): number | null;
    scanFloat(): number | null;
    scanHexInt(): number | null;
    scanHexFloat(): number | null;
}

/// https://docs.nova.app/api-reference/symbol/

type NovaSymbolType =
    // Types
    | "type"
    | "class"
    | "category"
    | "interface"
    | "enum"
    | "union"
    | "struct"
    // Callables
    | "function"
    | "method"
    | "closure"
    | "constructor"
    | "getter"
    | "setter"
    | "destructor"
    // Values
    | "constant"
    | "variable"
    | "property"
    | "argument"
    | "color"
    | "enum-member"
    // Expressions
    | "expression"
    | "statement"
    | "block"
    | "heading"
    | "comment"
    | "package"
    | "file"
    | "reference"
    | "keyword"
    | "bookmark"
    | "separator"
    | "todo"
    // Stylesets
    | "style-ruleset"
    | "style-directive"
    | "style-id"
    | "style-class"
    | "style-pseudoclass"
    | "style-pseudoelement"
    // Tags
    | "tag"
    | "tag-head"
    | "tag-title"
    | "tag-meta"
    | "tag-link"
    | "tag-body"
    | "tag-script"
    | "tag-style"
    | "tag-heading"
    | "tag-section"
    | "tag-container"
    | "tag-ul"
    | "tag-ol"
    | "tag-li"
    | "tag-anchor"
    | "tag-image"
    | "tag-media"
    | "tag-form"
    | "tag-form-field"
    | "tag-framework";

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

/// https://docs.nova.app/api-reference/task/

declare type TaskName = string & { __type: "TaskName" };

declare class Task {
    static readonly Build: TaskName;
    static readonly Clean: TaskName;
    static readonly Run: TaskName;

    constructor(name: string);

    name: string;
    image?: string;

    getAction(name: string): TaskProcessAction | undefined;
    getAction<T extends Transferrable>(name: string): TaskResolvableAction<T> | undefined;
    setAction(name: string, action?: TaskProcessAction | null): void;
    setAction<T extends Transferrable>(name: string, action?: TaskResolvableAction<T> | null): void;
}

/// https://docs.nova.app/api-reference/task-action-resolve-context/

interface TaskActionResolveContext<T extends Transferrable> {
    action: TaskName;
    config: Configuration;
    readonly data?: T;
}

/// https://docs.nova.app/api-reference/task-command-action/

declare class TaskCommandAction {
    constructor(command: string, options?: { args?: string[] });

    readonly args: string[];
    readonly command: string;
}

/// https://docs.nova.app/api-reference/task-process-action/

declare class TaskProcessAction {
    constructor(
        command: string,
        options?: {
            args?: string[];
            env?: { [key: string]: string };
            cwd?: string;
            stdio?: ["pipe" | "ignore", "pipe" | "ignore", "pipe" | "ignore"] | "pipe" | "ignore" | "jsonrpc" | number;
            matchers?: ReadonlyArray<string>;
            shell?: boolean | string;
        },
    );
}

/// https://docs.nova.app/api-reference/task-resolvable-action/

declare class TaskResolvableAction<T extends Transferrable> {
    constructor(options?: { data: T });

    readonly data: T;
}

/// https://docs.nova.app/api-reference/text-document/

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
    onDidChangePath(callback: (document: TextDocument, path: string | null) => void): Disposable;
    onDidChangeSyntax(callback: (document: TextDocument, syntax: string | null) => void): Disposable;
}

/// https://docs.nova.app/api-reference/text-edit/

declare class TextEdit {
    static delete(range: Range): TextEdit;
    static insert(position: number, newText: string): TextEdit;
    static replace(range: Range, newText: string): TextEdit;

    constructor(range: Range, newText: string);

    readonly newText: string;
    readonly range: Range;
}

/// https://docs.nova.app/api-reference/text-editor/

declare class TextEditor {
    private constructor();

    static isTextEditor(object: any): object is TextEditor;

    readonly document: TextDocument;
    selectedRange: Range;
    selectedRanges: Range[];
    readonly selectedText: string;
    softTabs: boolean;
    tabLength: number;
    readonly tabText: string;

    edit(callback: (edit: TextEditorEdit) => void, options?: unknown): Promise<void>;
    insert(string: string, format?: InsertTextFormat): Promise<void>;
    save(): Promise<void>;
    getTextInRange(range: Range): string;
    getLineRangeForRange(range: Range): Range;
    onDidChange(callback: (textEditor: TextEditor) => void): Disposable;
    onDidStopChanging(callback: (textEditor: TextEditor) => void): Disposable;
    onWillSave(callback: (textEditor: TextEditor) => void | Promise<void>): Disposable;
    onDidSave(callback: (textEditor: TextEditor) => void): Disposable;
    onDidChangeSelection(callback: (textEditor: TextEditor) => void): Disposable;
    onDidDestroy(callback: (textEditor: TextEditor) => void): Disposable;
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

/// https://docs.nova.app/api-reference/text-editor-edit/

interface TextEditorEdit {
    delete(range: Range): void;
    replace(range: Range, text: string): void;
    insert(position: number, text: string): void;
}

/// https://docs.nova.app/api-reference/tree-data-provider/

interface TreeDataProvider<E> {
    getChildren(element: E | null): E[] | Promise<E[]>;
    getParent?(element: E): E | null;
    getTreeItem(element: E): TreeItem;
}

/// https://docs.nova.app/api-reference/tree-item/

declare class TreeItem {
    constructor(name: string, collapsibleState?: TreeItemCollapsibleState);

    name: string;
    collapsibleState: TreeItemCollapsibleState;
    command?: unknown; // https://dev.panic.com/panic/nova-issues/-/issues/909
    color?: Color;
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

/// https://docs.nova.app/api-reference/tree-view/

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

/// https://docs.nova.app/api-reference/workspace/

// The line is optional, unless a column is specified
declare type FileLocation =
    | {
        line?: number;
        column?: never;
    }
    | {
        line: number;
        column?: number;
    };

interface Workspace {
    readonly path: string | null;
    readonly config: Configuration;
    readonly textDocuments: ReadonlyArray<TextDocument>;
    readonly textEditors: ReadonlyArray<TextEditor>;
    readonly activeTextEditor: TextEditor | null | undefined;

    onDidAddTextEditor(callback: (editor: TextEditor) => void): Disposable;
    onDidChangePath(callback: (newPath: TextEditor) => void): Disposable;
    onDidOpenTextDocument(callback: (textDocument: TextDocument) => void): Disposable;
    contains(path: string): boolean;
    relativizePath(path: string): string;
    openConfig(identifier?: string): void;
    openFile(uri: string, options?: FileLocation): Promise<TextEditor | null>;
    openNewTextDocument(
        options?: {
            content?: string;
            syntax?: string;
        } & FileLocation,
    ): Promise<TextEditor | null>;
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
        options?: { placeholder?: string; value?: string },
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
    reloadTasks(identifier: string): void;
}

/// https://docs.nova.app/api-reference/

declare function atob(data: string): string;
declare function btoa(data: string): string;

declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function clearTimeout(handle?: number): void;

declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function clearInterval(handle?: number): void;
