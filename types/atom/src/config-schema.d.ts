import { FileEncoding, Invisibles } from '../index';

// NOTE: the config schema with these defaults can be found here:
//   https://github.com/atom/atom/blob/v1.40.0/src/config-schema.js
/**
 *  Allows you to strongly type Atom configuration variables. Additional key:value
 *  pairings merged into this interface will result in configuration values under
 *  the value of each key being templated by the type of the associated value.
 */
// tslint:disable-next-line:no-empty-interface
export interface ConfigValues {
    // NOTE: this is intentionally left empty, extended via ambient declarations
}

// NOTE: A hack to make ConfigValues extensible
// tslint:disable-next-line:no-declare-current-package
declare module 'atom' {
    interface ConfigValues {
        /**
         *  List of glob patterns. Files and directories matching these patterns will be
         *  ignored by some packages, such as the fuzzy finder and tree view. Individual
         *  packages might have additional config settings for ignoring names.
         */
        'core.ignoredNames': string[];

        /**
         *  Files and directories ignored by the current project's VCS system will be ignored
         *  by some packages, such as the fuzzy finder and find and replace. For example,
         *  projects using Git have these paths defined in the .gitignore file. Individual
         *  packages might have additional config settings for ignoring VCS ignored files and
         *  folders.
         */
        'core.excludeVcsIgnoredPaths': boolean;

        /**
         *  Follow symbolic links when searching files and when opening files with the fuzzy
         *  finder.
         */
        'core.followSymlinks': boolean;

        /** List of names of installed packages which are not loaded at startup. */
        'core.disabledPackages': string[];

        /** List of names of installed packages which are not automatically updated. */
        'core.versionPinnedPackages': string[];

        /**
         *  Associates scope names (e.g. "source.coffee") with arrays of file extensions
         *  and file names (e.g. ["Cakefile", ".coffee2"]).
         */
        'core.customFileTypes': {
            [key: string]: string[];
        };

        /** Names of UI and syntax themes which will be used when Atom starts. */
        'core.themes': string[];

        /**
         *  Trigger the system's beep sound when certain actions cannot be executed or
         *  there are no results.
         */
        'core.audioBeep': boolean;

        /** Close corresponding editors when a file is deleted outside Atom. */
        'core.closeDeletedFileTabs': boolean;

        /** When the last tab of a pane is closed, remove that pane as well. */
        'core.destroyEmptyPanes': boolean;

        /**
         *  When a window with no open tabs or panes is given the 'Close Tab' command,
         *  close that window.
         */
        'core.closeEmptyWindows': boolean;

        /** Default character set encoding to use when reading and writing files. */
        'core.fileEncoding': FileEncoding;

        /**
         *  When checked opens an untitled editor when loading a blank environment (such as
         *  with 'File > New Window' or when "Restore Previous Windows On Start" is unchecked);
         *  otherwise, no editor is opened when loading a blank environment.
         *  This setting has no effect when restoring a previous state.
         */
        'core.openEmptyEditorOnStart': boolean;

        /**
         *  When selected 'no', a blank environment is loaded. When selected 'yes' and Atom
         *  is started from the icon or `atom` by itself from the command line, restores the
         *  last state of all Atom windows; otherwise a blank environment is loaded. When
         *  selected 'always', restores the last state of all Atom windows always, no matter
         *  how Atom is started.
         */
        'core.restorePreviousWindowsOnStart': 'no' | 'yes' | 'always';

        /** How many recent projects to show in the Reopen Project menu. */
        'core.reopenProjectMenuCount': number;

        /** Automatically update Atom when a new release is available. */
        'core.automaticallyUpdate': boolean;

        /** Use detected proxy settings when calling the `apm` command-line tool. */
        'core.useProxySettingsWhenCallingApm': boolean;

        /**
         *  Allow items to be previewed without adding them to a pane permanently, such as
         *  when single clicking files in the tree view.
         */
        'core.allowPendingPaneItems': boolean;

        /**
         *  Allow usage statistics and exception reports to be sent to the Atom team to help
         *  improve the product.
         */
        'core.telemetryConsent': 'limited' | 'no' | 'undecided';

        /** Warn before opening files larger than this number of megabytes. */
        'core.warnOnLargeFileLimit': number;

        /**
         *  Choose the underlying implementation used to watch for filesystem changes. Emulating
         *  changes will miss any events caused by applications other than Atom, but may help
         *  prevent crashes or freezes.
         */
        'core.fileSystemWatcher': 'native' | 'experimental' | 'poll' | 'atom';

        /** Use the new Tree-sitter parsing system for supported languages. */
        'core.useTreeSitterParsers': boolean;

        /**
         * Specify whether Atom should use the operating system's color profile (recommended)
         * or an alternative color profile.
         */
        'core.colorProfile': 'default' | 'srgb';

        'editor.commentStart': string | null;

        'editor.commentEnd': string | null;

        'editor.increaseIndentPattern': string | null;

        'editor.decreaseIndentPattern': string | null;

        'editor.foldEndPattern': string | null;

        /** The name of the font family used for editor text. */
        'editor.fontFamily': string;

        /** Height in pixels of editor text. */
        'editor.fontSize': number;

        /** Height of editor lines, as a multiplier of font size. */
        'editor.lineHeight': string | number;

        /** Show cursor while there is a selection. */
        'editor.showCursorOnSelection': boolean;

        /** Render placeholders for invisible characters, such as tabs, spaces and newlines. */
        'editor.showInvisibles': boolean;

        /** Show indentation indicators in the editor. */
        'editor.showIndentGuide': boolean;

        /** Show line numbers in the editor's gutter. */
        'editor.showLineNumbers': boolean;

        /** Skip over tab-length runs of leading whitespace when moving the cursor. */
        'editor.atomicSoftTabs': boolean;

        /** Automatically indent the cursor when inserting a newline. */
        'editor.autoIndent': boolean;

        /** Automatically indent pasted text based on the indentation of the previous line. */
        'editor.autoIndentOnPaste': boolean;

        /** A string of non-word characters to define word boundaries. */
        'editor.nonWordCharacters': string;

        /**
         *  Identifies the length of a line which is used when wrapping text with the
         *  `Soft Wrap At Preferred Line Length` setting enabled, in number of characters.
         */
        'editor.preferredLineLength': number;

        /**
         * Defines the maximum width of the editor window before soft wrapping is enforced,
         * in number of characters.
         */
        'editor.maxScreenLineLength': number;

        /** Number of spaces used to represent a tab. */
        'editor.tabLength': number;

        /**
         *  Wraps lines that exceed the width of the window. When `Soft Wrap At Preferred
         *  Line Length` is set, it will wrap to the number of characters defined by the
         *  `Preferred Line Length` setting.
         */
        'editor.softWrap': boolean;

        /**
         *  If the `Tab Type` config setting is set to "auto" and autodetection of tab type
         *  from buffer content fails, then this config setting determines whether a soft tab
         *  or a hard tab will be inserted when the Tab key is pressed.
         */
        'editor.softTabs': boolean;

        /**
         *  Determine character inserted when Tab key is pressed. Possible values: "auto",
         *  "soft" and "hard". When set to "soft" or "hard", soft tabs (spaces) or hard tabs
         *  (tab characters) are used. When set to "auto", the editor auto-detects the tab
         *  type based on the contents of the buffer (it uses the first leading whitespace
         *  on a non-comment line), or uses the value of the Soft Tabs config setting if
         *  auto-detection fails.
         */
        'editor.tabType': 'auto' | 'soft' | 'hard';

        /**
         *  Instead of wrapping lines to the window's width, wrap lines to the number of
         *  characters defined by the `Preferred Line Length` setting. This will only take
         *  effect when the soft wrap config setting is enabled globally or for the current
         *  language.
         *  **Note:** If you want to hide the wrap guide (the vertical line) you can disable
         *  the `wrap-guide` package.
         */
        'editor.softWrapAtPreferredLineLength': boolean;

        /**
         *  When soft wrap is enabled, defines length of additional indentation applied to
         *  wrapped lines, in number of characters.
         */
        'editor.softWrapHangingIndent': number;

        /** Determines how fast the editor scrolls when using a mouse or trackpad. */
        'editor.scrollSensitivity': number;

        /** Allow the editor to be scrolled past the end of the last line. */
        'editor.scrollPastEnd': boolean;

        /**
         *  Time interval in milliseconds within which text editing operations will be
         *  grouped together in the undo history.
         */
        'editor.undoGroupingInterval': number;

        /**
         *  Show confirmation dialog when checking out the HEAD revision and discarding
         *  changes to current file since last commit.
         */
        'editor.confirmCheckoutHeadRevision': boolean;

        /**
         *  A hash of characters Atom will use to render whitespace characters. Keys are
         *  whitespace character types, values are rendered characters (use value false to
         *  turn off individual whitespace character types).
         */
        'editor.invisibles': Invisibles;

        /**
         *  Change the editor font size when pressing the Ctrl key and scrolling the mouse
         *  up/down.
         */
        'editor.zoomFontWhenCtrlScrolling': boolean;

        // tslint:disable-next-line:no-any
        [key: string]: any;
    }
}
