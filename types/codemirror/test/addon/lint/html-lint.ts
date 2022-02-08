import CodeMirror = require('codemirror');
import 'codemirror/addon/lint/html-lint';
import 'codemirror/addon/lint/lint';

const htmlLintedCm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: CodeMirror.lint.html
});

const htmlLintedCm2: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        getAnnotations: CodeMirror.lint.html,
    }
});
