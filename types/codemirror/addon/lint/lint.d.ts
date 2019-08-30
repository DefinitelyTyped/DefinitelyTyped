// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_lint

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface LintHelper {
    }

    var lint: LintHelper;

    /**
     * async specifies that the lint process runs asynchronously. hasGutters specifies that lint errors should be displayed in the CodeMirror
     * gutter, note that you must use this in conjunction with [ "CodeMirror-lint-markers" ] as an element in the gutters argument on
     * initialization of the CodeMirror instance.
     */
    interface LintStateOptions {
        async: boolean;
        hasGutters: boolean;
        onUpdateLinting?: (
            annotationsNotSorted: Annotation[],
            annotations: Annotation[],
            codeMirror: Editor
        ) => void;
    }

    /**
     * Adds the getAnnotations callback to LintStateOptions which may be overridden by the user if they choose use their own
     * linter.
     */
    interface LintOptions extends LintStateOptions {
        getAnnotations: Linter | AsyncLinter;
        lintOnChange?: boolean;
        tooltips?: boolean | string;
        delay?: number;
        formatAnnotation?: (annotation: Annotation) => void
    }

    /**
     * A function that return errors found during the linting process.
     */
    interface Linter<Opts = any> {
        (content: string, options?: Opts, codeMirror?: Editor):
            | Annotation[]
            | PromiseLike<Annotation[]>;
    }

    /**
     * A function that calls the updateLintingCallback with any errors found during the linting process.
     */
    interface AsyncLinter<Opts = any> {
        (
            content: string,
            updateLintingCallback: UpdateLintingCallback,
            options?: Opts,
            codeMirror?: Editor
        ): void;
    }

    /**
     * A function that, given an array of annotations, updates the CodeMirror linting GUI with those annotations
     */
    interface UpdateLintingCallback {
        (codeMirror: Editor, annotations: Annotation[]): void;
    }

    /**
     * An annotation contains a description of a lint error, detailing the location of the error within the code, the severity of the error,
     * and an explaination as to why the error was thrown.
     */
    interface Annotation {
        from: Position;
        message?: string;
        severity?: string;
        to?: Position;
    }

    interface Editor {
        performLint(): void;
    }

    interface EditorConfiguration {
        lint?: boolean | Linter | AsyncLinter | LintOptions;
    }
}
