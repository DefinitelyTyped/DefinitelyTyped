import CodeMirror = require('codemirror');
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/yaml-lint';

const cm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        getAnnotations: CodeMirror.lint.yaml,
    }
});
