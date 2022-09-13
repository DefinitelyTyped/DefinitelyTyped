import * as CodeMirror from 'codemirror';
import 'codemirror/addon/edit/trailingspace';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    showTrailingSpace: true,
});
