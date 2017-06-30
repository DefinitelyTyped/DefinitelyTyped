// Type definitions for React Codemirror v0.2.6
// Project: https://github.com/JedWatson/react-codemirror
// Definitions by: Vicky Lai <https://github.com/velveret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react"/>
/// <reference types="codemirror"/>

declare namespace ReactCodeMirror {
    interface ReactCodeMirrorProps extends React.Props<ReactCodeMirror> {
        onChange?: (newValue: string) => any; // called when a change is made
        onFocusChange?: (focused: boolean) => any; // called when the editor is focused or loses focus
        onScroll?: (scrollInfo: CodeMirror.ScrollInfo) => any; // called when the editor is scrolled
        options?: CodeMirror.EditorConfiguration; // options passed to the CodeMirror instance
        path?: string; // the identifying name for the textarea
        value?: string; // the editor value
        className?: string; // CSS className for the outer element
        codeMirrorInstance?: CodeMirror.Editor; // the CodeMirror instance
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
