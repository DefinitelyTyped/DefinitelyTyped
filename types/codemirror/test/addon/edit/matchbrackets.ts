import * as CodeMirror from 'codemirror';
import 'codemirror/addon/edit/matchbrackets';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    matchBrackets: true,
});
