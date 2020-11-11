import * as CodeMirror from 'codemirror';
import 'codemirror/addon/display/placeholder';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    placeholder: 'placeholder',
});
