import * as CodeMirror from 'codemirror';
import 'codemirror/addon/merge/merge';

const editor = CodeMirror(document.body);
CodeMirror.commands.goPrevDiff(editor);
CodeMirror.commands.goNextDiff(editor);
