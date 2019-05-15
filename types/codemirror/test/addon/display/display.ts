import CodeMirror = require("codemirror");

const ruler: CodeMirror.Ruler = {
    className: "test",
    color: "red",
    lineStyle: "none",
    width: 100
};
const ruler1: CodeMirror.Ruler = {
    className: "test",
    color: "red",
    lineStyle: "none",
    width: "100%"
};
const opt: CodeMirror.EditorConfiguration = {
    autoRefresh: true,
    fullScreen: true,
    placeholder: "test",
    rulers: false
};
const opt1: CodeMirror.EditorConfiguration = {
    rulers: [0, ruler]
};
