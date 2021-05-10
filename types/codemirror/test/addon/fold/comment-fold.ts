import * as CodeMirror from 'codemirror';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldcode';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.comment);
