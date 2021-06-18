import * as CodeMirror from 'codemirror';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldcode';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.brace);
myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.import);
myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.include);
