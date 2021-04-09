// This file holds the types that don't belong to a specific file.
// Please don't import types from this file directly as its content might change in other versions.

import { AtomEnvironment, DecorationOptions, MarkerLayer, Pane, Point, TextEditor } from '../index';

export interface PixelPosition {
    left: number;
    top: number;
}

/**
 *  This custom subclass of CustomEvent exists to provide the ::abortKeyBinding
 *  method, as well as versions of the ::stopPropagation methods that record the
 *  intent to stop propagation so event bubbling can be properly simulated for
 *  detached elements.
 */
export interface CommandEvent<CurrentTarget extends EventTarget = EventTarget> extends CustomEvent {
    keyBindingAborted: boolean;
    propagationStopped: boolean;

    abortKeyBinding(): void;
    stopPropagation(): CustomEvent;
    stopImmediatePropagation(): CustomEvent;
    currentTarget: CurrentTarget;
}

export interface DecorationPropsChangedEvent {
    /** Object the old parameters the decoration used to have. */
    oldProperties: DecorationOptions;

    /** Object the new parameters the decoration now has */
    newProperties: DecorationOptions;
}

export interface EditorChangedEvent {
    /** A Point representing where the change started. */
    start: Point;

    /** A Point representing the replaced extent. */
    oldExtent: Point;

    /** A Point representing the replacement extent. */
    newExtent: Point;
}

export interface FileSavedEvent {
    /** The path to which the buffer was saved. */
    path: string;
}

export interface FilesystemChangeBasic<
    Action extends 'created' | 'modified' | 'deleted' | 'renamed' = 'created' | 'modified' | 'deleted'
> {
    /** A string describing the filesystem action that occurred. */
    action: Action;

    /** The absolute path to the filesystem entry that was acted upon. */
    path: string;
}

export interface FilesystemChangeRename extends FilesystemChangeBasic<'renamed'> {
    /**
     *  For rename events, a string containing the filesystem entry's former
     *  absolute path.
     */
    oldPath: string;
}

export type FilesystemChange = FilesystemChangeBasic | FilesystemChangeRename;

export type FilesystemChangeEvent = FilesystemChange[];

export interface HandleableErrorEvent {
    /** The error object. */
    error: Error;

    /**
     *  Call this function to indicate you have handled the error.
     *  The error will not be thrown if this function is called.
     */
    handle(): void;
}

export interface TextEditorObservedEvent {
    textEditor: TextEditor;
    pane: Pane;
    index: number;
}

export interface BuildEnvironmentOptions {
    /**
     *  An object responsible for Atom's interaction with the browser process and host OS.
     *  Use buildDefaultApplicationDelegate for a default instance.
     */
    applicationDelegate?: object;

    /** A window global. */
    window?: Window;

    /** A document global. */
    document?: Document;

    /** A path to the configuration directory (usually ~/.atom). */
    configDirPath?: string;

    /**
     *  A boolean indicating whether the Atom environment should save or load state
     *  from the file system. You probably want this to be false.
     */
    enablePersistence?: boolean;
}

export interface HistoryTransactionOptions {
    /** When provided, skip taking snapshot for other selections markerLayers except given one. */
    selectionsMarkerLayer?: MarkerLayer;
}

export interface HistoryTraversalOptions {
    /** Restore snapshot of selections marker layer to given selectionsMarkerLayer. */
    selectionsMarkerLayer?: MarkerLayer;
}

export interface ReadonlyEditOptions {
    /** Whether the readonly protections on the text editor should be ignored. */
    bypassReadOnly?: boolean;
}

export interface TextEditOptions {
    /** If true, all line endings will be normalized to match the editor's current mode. */
    normalizeLineEndings?: boolean;

    /**
     * If skip, skips the undo stack for this operation.
     * @deprecated Call groupLastChanges() on the TextBuffer afterward instead.
     */
    undo?: 'skip';
}

export interface TextInsertionOptions extends TextEditOptions {
    /** If true, selects the newly added text. */
    select?: boolean;

    /** If true, indents all inserted text appropriately. */
    autoIndent?: boolean;

    /** If true, indent newline appropriately. */
    autoIndentNewline?: boolean;

    /**
     *  If true, decreases indent level appropriately (for example, when a closing
     *  bracket is inserted).
     */
    autoDecreaseIndent?: boolean;

    /**
     *  By default, when pasting multiple lines, Atom attempts to preserve the relative
     *  indent level between the first line and trailing lines, even if the indent
     *  level of the first line has changed from the copied text. If this option is
     *  true, this behavior is suppressed.
     */
    preserveTrailingLineIndentation?: boolean;
}

/** An interface which all custom test runners should implement. */
export type TestRunner = (params: TestRunnerParams) => Promise<number>;

export interface CancellablePromise<T> extends Promise<T> {
    cancel(): void;
}

export type FileEncoding =
    | 'iso88596' // Arabic (ISO 8859-6)
    | 'windows1256' // Arabic (Windows 1256)
    | 'iso88594' // Baltic (ISO 8859-4)
    | 'windows1257' // Baltic (Windows 1257)
    | 'iso885914' // Celtic (ISO 8859-14)
    | 'iso88592' // Central European (ISO 8859-2)
    | 'windows1250' // Central European (Windows 1250)
    | 'gb18030' // Chinese (GB18030)
    | 'gbk' // Chinese (GBK)
    | 'cp950' // Traditional Chinese (Big5)
    | 'big5hkscs' // Traditional Chinese (Big5-HKSCS)
    | 'cp866' // Cyrillic (CP 866)
    | 'iso88595' // Cyrillic (ISO 8859-5)
    | 'koi8r' // Cyrillic (KOI8-R)
    | 'koi8u' // Cyrillic (KOI8-U)
    | 'windows1251' // Cyrillic (Windows 1251)
    | 'cp437' // DOS (CP 437)
    | 'cp850' // DOS (CP 850)
    | 'iso885913' // Estonian (ISO 8859-13)
    | 'iso88597' // Greek (ISO 8859-7)
    | 'windows1253' // Greek (Windows 1253)
    | 'iso88598' // Hebrew (ISO 8859-8)
    | 'windows1255' // Hebrew (Windows 1255)
    | 'cp932' // Japanese (CP 932)
    | 'eucjp' // Japanese (EUC-JP)
    | 'shiftjis' // Japanese (Shift JIS)
    | 'euckr' // Korean (EUC-KR)
    | 'iso885910' // Nordic (ISO 8859-10)
    | 'iso885916' // Romanian (ISO 8859-16)
    | 'iso88599' // Turkish (ISO 8859-9)
    | 'windows1254' // Turkish (Windows 1254)
    | 'utf8' // Unicode (UTF-8)
    | 'utf16le' // Unicode (UTF-16 LE)
    | 'utf16be' // Unicode (UTF-16 BE)
    | 'windows1258' // Vietnamese (Windows 1258)
    | 'iso88591' // Western (ISO 8859-1)
    | 'iso88593' // Western (ISO 8859-3)
    | 'iso885915' // Western (ISO 8859-15)
    | 'macroman' // Western (Mac Roman)
    | 'windows1252'; // Western (Windows 1252)

export interface Invisibles {
    /**
     *  Character used to render newline characters (\n) when the `Show Invisibles`
     *  setting is enabled.
     */
    eol?: boolean | string;

    /**
     *  Character used to render leading and trailing space characters when the
     *  `Show Invisibles` setting is enabled.
     */
    space?: boolean | string;

    /**
     *  Character used to render hard tab characters (\t) when the `Show Invisibles`
     *  setting is enabled.
     */
    tab?: boolean | string;

    /**
     *  Character used to render carriage return characters (for Microsoft-style line
     *  endings) when the `Show Invisibles` setting is enabled.
     */
    cr?: boolean | string;
}

export interface TestRunnerParams {
    /** An array of paths to tests to run. Could be paths to files or directories. */
    testPaths: string[];

    /**
     *  A function that can be called to construct an instance of the atom global.
     *  No atom global will be explicitly assigned, but you can assign one in your
     *  runner if desired.
     */
    buildAtomEnvironment(options: BuildEnvironmentOptions): AtomEnvironment;

    /**
     *  A function that builds a default instance of the application delegate, suitable
     *  to be passed as the applicationDelegate parameter to buildAtomEnvironment.
     */
    buildDefaultApplicationDelegate(): object;

    /** An optional path to a log file to which test output should be logged. */
    logFile: string;

    /**
     *  A boolean indicating whether or not the tests are being run from the command
     *  line via atom --test.
     */
    headless: boolean;
}
