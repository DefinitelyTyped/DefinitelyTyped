import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const editorOpt: CodeMirror.EditorConfiguration = {
    scrollPastEnd: true,
    scrollButtonHeight: 0
};
const opt: CodeMirror.AnnotateScrollbarOptions = {
    className: "test",
    scrollButtonHeight: 0,
    listenForChanges: true
};

// Check editor methods
editor.annotateScrollbar("test");
editor.annotateScrollbar(opt);
