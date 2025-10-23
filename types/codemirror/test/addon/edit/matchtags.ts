import CodeMirror = require("codemirror");
import "codemirror/addon/edit/matchtags";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    matchTags: { bothTags: true },
});
