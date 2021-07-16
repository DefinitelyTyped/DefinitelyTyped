import * as CodeMirror from '../../';

export interface BaseLintStateOptions<T> {
    /** debounce delay before linting onChange */
    delay?: number | undefined;

    /** callback to modify an annotation before display */
    formatAnnotation?: ((annotation: Annotation) => Annotation) | undefined;

    /** whether to lint onChange event */
    lintOnChange?: boolean | undefined;

    selfContain?: boolean | undefined;

    /** callback after linter completes */
    onUpdateLinting?(annotationsNotSorted: Annotation[], annotations: Annotation[], codeMirror: CodeMirror.Editor): void;

    /**
     * Passing rules in `options` property prevents JSHint (and other linters) from complaining
     * about unrecognized rules like `onUpdateLinting`, `delay`, `lintOnChange`, etc.
     */
    options?: T | undefined;

    /** controls display of lint tooltips */
    tooltips?: boolean | 'gutter' | undefined;
}

export interface SyncLintStateOptions<T> extends BaseLintStateOptions<T> {
    async?: false | undefined;
    getAnnotations?: Linter<T> | undefined;
}

export interface AsyncLintStateOptions<T> extends BaseLintStateOptions<T> {
    /** specifies that the lint process runs asynchronously */
    async: true;
    getAnnotations?: AsyncLinter<T> | undefined;
}

export type LintStateOptions<T> = SyncLintStateOptions<T> | AsyncLintStateOptions<T>;

/**
 * A function that return errors found during the linting process.
 */
 export interface Linter<T> {
    (content: string, options: T, codeMirror: CodeMirror.Editor):
        | Annotation[]
        | PromiseLike<Annotation[]>;
}

/**
 * A function that calls the updateLintingCallback with any errors found during the linting process.
 */
export interface AsyncLinter<T> {
    (
        content: string,
        updateLintingCallback: UpdateLintingCallback,
        options: T,
        codeMirror: CodeMirror.Editor,
    ): void;
}

/**
 * A function that, given an array of annotations, updates the CodeMirror linting GUI with those annotations
 */
export interface UpdateLintingCallback {
    (annotations: Annotation[]): void;
    (codeMirror: CodeMirror.Editor, annotations: Annotation[]): void;
}

/**
 * An annotation contains a description of a lint error, detailing the location of the error within the code, the severity of the error,
 * and an explaination as to why the error was thrown.
 */
export interface Annotation {
    from: CodeMirror.Position;
    message?: string | undefined;
    severity?: string | undefined;
    to?: CodeMirror.Position | undefined;
}

declare module '../../' {
    interface Editor {
        performLint: () => void;
    }

    interface EditorConfiguration {
        /** Optional lint configuration to be used in conjunction with CodeMirror's linter addon. */
        lint?: boolean | LintStateOptions<any> | Linter<any> | undefined;
    }

    namespace lint {}
}
