import * as CodeMirror from "codemirror";
import "codemirror/addon/fold/foldgutter";

const myCodeMirror1: CodeMirror.Editor = CodeMirror(document.body, {
    foldGutter: true,
});

const myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    foldGutter: {
        gutter: "CodeMirror-foldgutter",
    },
});

const myCodeMirror3: CodeMirror.Editor = CodeMirror(document.body, {
    foldGutter: {
        rangeFinder: (cm, start) => undefined,
    },
});
