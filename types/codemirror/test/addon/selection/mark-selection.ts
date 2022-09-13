import * as CodeMirror from 'codemirror';
import 'codemirror/addon/selection/mark-selection';

const cm1: CodeMirror.Editor = CodeMirror(document.body, {
    styleSelectedText: true,
});

const cm2: CodeMirror.Editor = CodeMirror(document.body, {
    styleSelectedText: 'custom-style',
});
