import * as CodeMirror from 'codemirror';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/indent-fold';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.indent);
