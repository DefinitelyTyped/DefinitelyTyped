import * as CodeMirror from 'codemirror';
import 'codemirror/addon/selection/active-line';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    styleActiveLine: true,
});
