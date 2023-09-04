import * as CodeMirror from "codemirror";
import "codemirror/mode/meta";

const a = CodeMirror.findModeByMIME("foo");
const b = CodeMirror.findModeByExtension("foo");
const c = CodeMirror.findModeByFileName("foo");
const d = CodeMirror.findModeByName("foo");
declare var editor: CodeMirror.Editor;
editor.on("cut", (instance, event) => {
    event.clipboardData;
});
editor.on("copy", (instance, event) => {
    event.clipboardData;
});
editor.on("paste", (instance, event) => {
    event.clipboardData;
});
