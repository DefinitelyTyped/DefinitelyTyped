// Type definitions for non-npm package Atom 1.40
// Project: https://github.com/atom/atom
// Definitions by: GlenCFL <https://github.com/GlenCFL>
//                 smhxx <https://github.com/smhxx>
//                 lierdakil <https://github.com/lierdakil>
//                 aminya <https://github.com/aminya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// NOTE: only those classes exported within this file should be retain that status below.
// https://github.com/atom/atom/blob/v1.40.0/exports/atom.js

/// <reference types="node" />

// Imports ======================================================
import { MarkerLayer, Point } from "./dependencies/text-buffer";
import { DecorationOptions } from "./src/decoration";
import { TextEditor } from "./src/text-editor";
import { TextEditorElement } from "./src/text-editor-element";
import { Pane } from "./src/pane";
import { PathWatcher } from "./src/path-watcher";
import { AtomEnvironment } from "./src/atom-environment";

declare global {
    const atom: AtomEnvironment;

    interface HTMLElementTagNameMap {
      "atom-text-editor": TextEditorElement;
    }
}


// Essential Classes ==========================================================

export * from "./src/config";

export * from "./src/config-schema";

export * from "./src/color";

export * from "./src/command-registry";

export * from "./dependencies/event-kit";

export * from "./src/decoration";

export * from "./dependencies/text-buffer";

export * from "./src/layer-decoration";

export * from "./src/notification";

export * from "./src/notification-manager";

export * from "./src/text-editor";

export * from "./src/gutter";

export interface PixelPosition {
    left: number;
    top: number;
}

export * from "./src/text-editor-component";

export * from "./src/text-editor-element";

export * from "./src/text-editor-registry";

export * from "./src/tooltip-manager";

export * from "./src/view-registry";

export * from "./src/workspace";

export * from "./src/workspace-center";

export * from "./src/buffered-process";

export * from "./src/buffered-node-process";

export * from "./src/clipboard";

export * from "./src/context-menu-manager";

export * from "./src/menu-manager";

export * from "./src/cursor";

export * from "./src/deserializer-manager";

export * from "./dependencies/pathwatcher";

export * from "./src/dock";

export * from "./src/git-repository";

export * from "./src/history-manager";

export * from "./src/keymap-extensions";

export * from "./src/package";

export * from "./src/package-manager";

export * from "./src/pane";

export * from "./src/panel";

export * from "./src/path-watcher";

export * from "./src/project";

export * from "./src/scope-descriptor";

export * from "./src/selection";

export * from "./src/style-manager";

export * from "./src/task";

export * from "./src/theme-manager";

export * from "./dependencies/first-mate";

export * from "./src/grammar-registry";

export * from "./src/tooltip";

export * from "./src/get-window-load-settings";

export * from "./src/atom-environment";

// Extended Classes ===========================================================

// Events =====================================================================
// The event objects that are passed into the callbacks which the user provides to
// specific API calls.

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
  Action extends "created"|"modified"|"deleted"|"renamed"
  = "created"|"modified"|"deleted"
> {
    /** A string describing the filesystem action that occurred. */
    action: Action;

    /** The absolute path to the filesystem entry that was acted upon. */
    path: string;
}

export interface FilesystemChangeRename extends FilesystemChangeBasic<"renamed"> {
    /**
     *  For rename events, a string containing the filesystem entry's former
     *  absolute path.
     */
    oldPath: string;
}

export type FilesystemChange = FilesystemChangeBasic|FilesystemChangeRename;

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

// Extendables ================================================================
// Interfaces which can be augmented in order to provide additional type
// information under certain contexts.

// Options ====================================================================
// The option objects that the user is expected to fill out and provide to
// specific API call.

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
    undo?: "skip";
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

// Interfaces =================================================================
// The requirements placed on object parameters for specific API calls.

/** An interface which all custom test runners should implement. */
export type TestRunner = (params: TestRunnerParams) => Promise<number>;

// Structures =================================================================
// The structures that are passed to the user by Atom following specific API calls.

export interface CancellablePromise<T> extends Promise<T> {
    cancel(): void;
}

export type FileEncoding =
    | "iso88596"       // Arabic (ISO 8859-6)
    | "windows1256"    // Arabic (Windows 1256)
    | "iso88594"       // Baltic (ISO 8859-4)
    | "windows1257"    // Baltic (Windows 1257)
    | "iso885914"      // Celtic (ISO 8859-14)
    | "iso88592"       // Central European (ISO 8859-2)
    | "windows1250"    // Central European (Windows 1250)
    | "gb18030"        // Chinese (GB18030)
    | "gbk"            // Chinese (GBK)
    | "cp950"          // Traditional Chinese (Big5)
    | "big5hkscs"      // Traditional Chinese (Big5-HKSCS)
    | "cp866"          // Cyrillic (CP 866)
    | "iso88595"       // Cyrillic (ISO 8859-5)
    | "koi8r"          // Cyrillic (KOI8-R)
    | "koi8u"          // Cyrillic (KOI8-U)
    | "windows1251"    // Cyrillic (Windows 1251)
    | "cp437"          // DOS (CP 437)
    | "cp850"          // DOS (CP 850)
    | "iso885913"      // Estonian (ISO 8859-13)
    | "iso88597"       // Greek (ISO 8859-7)
    | "windows1253"    // Greek (Windows 1253)
    | "iso88598"       // Hebrew (ISO 8859-8)
    | "windows1255"    // Hebrew (Windows 1255)
    | "cp932"          // Japanese (CP 932)
    | "eucjp"          // Japanese (EUC-JP)
    | "shiftjis"       // Japanese (Shift JIS)
    | "euckr"          // Korean (EUC-KR)
    | "iso885910"      // Nordic (ISO 8859-10)
    | "iso885916"      // Romanian (ISO 8859-16)
    | "iso88599"       // Turkish (ISO 8859-9)
    | "windows1254"    // Turkish (Windows 1254)
    | "utf8"           // Unicode (UTF-8)
    | "utf16le"        // Unicode (UTF-16 LE)
    | "utf16be"        // Unicode (UTF-16 BE)
    | "windows1258"    // Vietnamese (Windows 1258)
    | "iso88591"       // Western (ISO 8859-1)
    | "iso88593"       // Western (ISO 8859-3)
    | "iso885915"      // Western (ISO 8859-15)
    | "macroman"       // Western (Mac Roman)
    | "windows1252";   // Western (Windows 1252)

export interface Invisibles {
    /**
     *  Character used to render newline characters (\n) when the `Show Invisibles`
     *  setting is enabled.
     */
    eol?: boolean|string;

    /**
     *  Character used to render leading and trailing space characters when the
     *  `Show Invisibles` setting is enabled.
     */
    space?: boolean|string;

    /**
     *  Character used to render hard tab characters (\t) when the `Show Invisibles`
     *  setting is enabled.
     */
    tab?: boolean|string;

    /**
     *  Character used to render carriage return characters (for Microsoft-style line
     *  endings) when the `Show Invisibles` setting is enabled.
     */
    cr?: boolean|string;
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
