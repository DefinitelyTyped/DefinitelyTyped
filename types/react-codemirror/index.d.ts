// Type definitions for React Codemirror v1.0.0
// Project: https://github.com/JedWatson/react-codemirror
// Definitions by: Vicky Lai <https://github.com/velveret>
//                 Rudi Chen <https://github.com/rudi-c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>
/// <reference types="codemirror"/>

declare namespace ReactCodeMirror {
    interface ReactCodeMirrorProps extends React.Props<ReactCodeMirror> {
        /** Automatically focuses the editor when it is mounted (default false) */
        autoFocus?: boolean;
        /** Automatically persist changes to underlying textarea (default false) */
        autoSave?: boolean;
        /** Adds a custom CSS class to the editor */
        className?: string;
        /** Provides a specific CodeMirror instance (defaults to `require('codemirror')`) */
        codeMirrorInstance?: (host: any, options?: CodeMirror.EditorConfiguration) => CodeMirror.Editor;
        /** Provides the default (not changed tracked) value to the editor */
        defaultValue?: string;
        /** Set the name of the editor input field */
        name?: string;
        /** Called when a change is made */
        onChange?: (newValue: string, change: CodeMirror.EditorChange) => any;
        /** Called when the cursor is moved */
        onCursorActivity?: (codemirror: CodeMirror.Editor) => any;
        /** Called when the editor is focused or loses focus */
        onFocusChange?: (focused: boolean) => any;
        /** Called when the editor is scrolled */
        onScroll?: (scrollInfo: CodeMirror.ScrollInfo) => any;
        /** Options passed to the CodeMirror instance */
        options?: CodeMirror.EditorConfiguration;
        /** (DEPRECATED), use `name` */
        path?: string;
        /** Preserve previous scroll position after updating value */
        preserveScrollPosition?: boolean
        /** The editor value */
        value?: string;
    }

    interface ReactCodeMirror extends React.Component<ReactCodeMirrorProps> {
        /** Focuses the CodeMirror instance. */
        focus(): void;

        /** Returns the CodeMirror instance, if available. */
        getCodeMirror(): CodeMirror.Editor;
    }

    interface ReactCodeMirrorClass extends React.ComponentClass<ReactCodeMirrorProps> { }
}

declare module "react-codemirror" {
    const RCM: ReactCodeMirror.ReactCodeMirrorClass;
    export = RCM;
}
