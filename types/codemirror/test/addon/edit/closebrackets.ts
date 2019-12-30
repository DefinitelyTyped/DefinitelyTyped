import * as CodeMirror from "codemirror";
import "codemirror/addon/edit/closebrackets";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    autoCloseBrackets: "()[]{}''\"\""
});

const myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    autoCloseBrackets: true
});
