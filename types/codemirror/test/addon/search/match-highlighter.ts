import * as CodeMirror from 'codemirror';
import 'codemirror/addon/search/match-highlighter';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    highlightSelectionMatches: true,
});
