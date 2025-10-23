import CodeMirror = require("codemirror");
import "codemirror/addon/scroll/scrollpastend";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    scrollPastEnd: true,
});
