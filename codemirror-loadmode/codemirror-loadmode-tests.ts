/// <reference path="codemirror-loadmode.d.ts" />

var editor: CodeMirror.Editor = CodeMirror(document.body);

CodeMirror.modeURL = "../mode/%N/%N.js";
CodeMirror.requireMode("javascript", () => {});
CodeMirror.autoLoadMode(editor, "javascript");

CodeMirror.requireMode({ name: "javascript" }, () => {});
CodeMirror.autoLoadMode(editor, { name: "javascript" });
