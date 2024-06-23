/// <reference types="react"/>
/// <reference types="codemirror"/>

declare namespace ReactCodeMirror {
    interface ReactCodeMirrorProps {
        children?: React.ReactNode;
        /** Automatically focuses the editor when it is mounted (default false) */
        autoFocus?: boolean | undefined;
        /** Automatically persist changes to underlying textarea (default false) */
        autoSave?: boolean | undefined;
        /** Adds a custom CSS class to the editor */
        className?: string | undefined;
        /** Provides a specific CodeMirror instance (defaults to `require('codemirror')`) */
        codeMirrorInstance?: ((host: any, options?: CodeMirror.EditorConfiguration) => CodeMirror.Editor) | undefined;
        /** Provides the default (not changed tracked) value to the editor */
        defaultValue?: string | undefined;
        /** Set the name of the editor input field */
        name?: string | undefined;
        /** Called when a change is made */
        onChange?: ((newValue: string, change: CodeMirror.EditorChange) => any) | undefined;
        /** Called when the cursor is moved */
        onCursorActivity?: ((codemirror: CodeMirror.Editor) => any) | undefined;
        /** Called when the editor is focused or loses focus */
        onFocusChange?: ((focused: boolean) => any) | undefined;
        /** Called when the editor is scrolled */
        onScroll?: ((scrollInfo: CodeMirror.ScrollInfo) => any) | undefined;
        /** Options passed to the CodeMirror instance */
        options?: CodeMirror.EditorConfiguration | undefined;
        /** (DEPRECATED), use `name` */
        path?: string | undefined;
        /** Preserve previous scroll position after updating value */
        preserveScrollPosition?: boolean | undefined;
        /** The editor value */
        value?: string | undefined;
    }
}

declare module "react-codemirror" {
    class RCM extends React.Component<ReactCodeMirror.ReactCodeMirrorProps> {
        /** Focuses the CodeMirror instance. */
        focus(): void;

        /** Returns the CodeMirror instance, if available. */
        getCodeMirror(): CodeMirror.Editor;
    }
    export = RCM;
}
