import CodeMirror = require("codemirror");
import "codemirror/addon/display/fullscreen";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    fullScreen: true,
});
