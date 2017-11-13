// Type definitions for react-monaco-editor 0.10
// Project: https://github.com/superRaytin/react-monaco-editor
// Definitions by: Joshua Netterfield <https://github.com/jnetterf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="monaco-editor" />

import * as React from "react";

export interface ReactMonacoEditorProps {
    /**
     * Width of editor. Defaults to 100%.
     */
    width?: string | number;

    /**
     * Height of editor. Defaults to 500.
     */
    height?: string | number;

    /**
     * Value of the auto created model in the editor.
     * If you specify value property, the component behaves in controlled mode. Otherwise, it behaves in uncontrolled mode.
     */
    value?: string;

    /**
     * The initial value of the auto created model in the editor.
     */
    defaultValue?: string;

    /**
     * The initial language of the auto created model in the editor. Defaults to 'javascript'.
     */
    language?: string;

    /**
     * Theme to be used for rendering.
     * The current out-of-the-box available themes are: 'vs' (default), 'vs-dark', 'hc-black'.
     * You can create custom themes via `monaco.editor.defineTheme`.
     */
    theme?: string;

    /**
     * Refer to Monaco interface IEditorOptions.
     */
    options?: monaco.editor.IEditorOptions;

    /**
     * An event emitted when the editor has been mounted (similar to componentDidMount of React).
     */
    editorDidMount?(editor: monaco.editor.ICodeEditor, monacoModule: typeof monaco): void;

    /**
     * An event emitted before the editor mounted (similar to componentWillMount of React).
     */
    editorWillMount?(monacoModule: typeof monaco): void;

    /**
     * An event emitted when the content of the current model has changed.
     */
    onChange?(val: string, ev: monaco.editor.IModelContentChangedEvent): void;

    /**
     * Optional, allow to config loader url and relative path of module, refer to require.config.
     */
    requireConfig?: object;

    /**
     * Optional, allow to pass a different context then the global window onto which the monaco instance will be loaded. Useful if you want to load the editor in an iframe.
     */
    context?: object;
}

export default class ReactMonacoEditor extends React.Component<ReactMonacoEditorProps> {
    editor: monaco.editor.ICodeEditor;
}
