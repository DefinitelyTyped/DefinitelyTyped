import CodeMirror = require("codemirror");
import "codemirror/addon/edit/trailingspace";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    showTrailingSpace: true,
});
