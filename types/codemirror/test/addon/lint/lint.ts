import CodeMirror = require('codemirror');
import { Annotation, LintStateOptions, UpdateLintingCallback } from 'codemirror/addon/lint/lint';

const asyncLintedCm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        async: true,
        getAnnotations(content: string, callback, options: any, cm: CodeMirror.Editor) {
            callback(cm, [
                {
                    from: CodeMirror.Pos(0),
                    to: CodeMirror.Pos(1),
                    message: 'test',
                    severity: 'warning',
                }
            ]);
        }
    }
});

const asyncLintedCm3: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        async: true,
        getAnnotations(content: string, callback, options: any, cm: CodeMirror.Editor) {
            callback(cm); // $ExpectError
        }
    }
});

const syncLintedCm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        getAnnotations(content: string, options: any, cm: CodeMirror.Editor) {
            return [
                {
                    from: CodeMirror.Pos(0),
                    to: CodeMirror.Pos(1),
                    message: 'test',
                    severity: 'warning',
                }
            ];
        }
    }
});

const promiseLintedCm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        getAnnotations(content: string, options: any, cm: CodeMirror.Editor) {
            return Promise.resolve([
                {
                    from: CodeMirror.Pos(0),
                    to: CodeMirror.Pos(1),
                    message: 'test',
                    severity: 'warning',
                }
            ]);
        }
    }
});

const syncLintedCm3: CodeMirror.Editor = CodeMirror(document.body, {
    // $ExpectError
    lint: {
        getAnnotations(content: string, options: any, cm: CodeMirror.Editor) {
            return null;
        }
    }
});

const lintStateOptions: LintStateOptions<any> = {
    async: true,
};

const asyncLintOptions: LintStateOptions<{foo: boolean}> = {
    async: true,
    getAnnotations: (
        content: string,
        updateLintingCallback: UpdateLintingCallback,
        options: {foo: boolean},
        codeMirror: CodeMirror.Editor,
    ) => {},
};

const syncLintOptions: LintStateOptions<any> = {
    async: false,
    getAnnotations: (
        content: string,
        options: any,
        codeMirror: CodeMirror.Editor,
    ): Annotation[] => {
        return [];
    },
};

const customLintOptions: LintStateOptions<{foo: boolean}> = {
    async: false,
    options: {}, // $ExpectError
    getAnnotations: (
        content: string,
        options: {foo: boolean},
        codeMirror: CodeMirror.Editor,
    ): Annotation[] => {
        return [];
    },
};

const annotation: Annotation = {
    from: {
        ch: 0,
        line: 0,
    },
    to: CodeMirror.Pos(1),
    message: 'test',
    severity: 'warning',
};
