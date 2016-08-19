// Type definitions for React Codemirror v0.2.6
// Project: https://github.com/JedWatson/react-codemirror
// Definitions by: Vicky Lai <https://github.com/velveret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
/// <reference path="../codemirror/codemirror.d.ts"/>

declare namespace ReactCodeMirror {
    interface ReactCodeMirrorProps extends __React.Props<ReactCodeMirror> {
        onChange?: (newValue: string) => any; // called when a change is made
        onFocusChange?: (focused: boolean) => any; // called when the editor is focused or loses focus
        onScroll?: (scrollInfo: CodeMirror.ScrollInfo) => any; // called when the editor is scrolled
        options?: CodeMirror.EditorConfiguration; // options passed to the CodeMirror instance
        path?: string; // the identifying name for the textarea
        value?: string; // the editor value
        className?: string; // CSS className for the outer element
        codeMirrorInstance?: CodeMirror.Editor; // the CodeMirror instance
    }

    interface ReactCodeMirror extends __React.Component<ReactCodeMirrorProps, {}> {
        /** Focuses the CodeMirror instance. */
        focus(): void;

        /** Returns the CodeMirror instance, if available. */
        getCodeMirror(): CodeMirror.Editor;
    }

    interface ReactCodeMirrorClass extends __React.ComponentClass<ReactCodeMirrorProps> { }
}

declare module "react-codemirror" {
    const RCM: ReactCodeMirror.ReactCodeMirrorClass;
    export = RCM;
}
