import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const position: CodeMirror.Position = { line: 0, ch: 0 };

// Check static methods
CodeMirror.requireMode("test", () => {});
CodeMirror.requireMode({}, () => {});
CodeMirror.autoLoadMode(editor, "test");
CodeMirror.autoLoadMode(editor, {});
const mode: CodeMirror.Mode<CodeMirror.MultiplexState> = CodeMirror.multiplexingMode({});
const mode1: CodeMirror.Mode<CodeMirror.OverlayState> = CodeMirror.overlayMode({}, {}, true);
