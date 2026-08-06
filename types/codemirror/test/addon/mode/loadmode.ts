import CodeMirror from "codemirror";
import "codemirror/addon/mode/loadmode";

CodeMirror.requireMode("javascript", () => {
    console.log("loaded");
});
CodeMirror.requireMode("css", () => {
    console.log("loaded");
}, {
    path(mode) {
        return mode.toLowerCase() + ".js";
    },
});

const cm = CodeMirror(document.body);
