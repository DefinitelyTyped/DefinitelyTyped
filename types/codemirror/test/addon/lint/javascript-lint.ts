import CodeMirror = require('codemirror');
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/lint';

const cm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        getAnnotations: CodeMirror.lint.javascript,
    }
});
