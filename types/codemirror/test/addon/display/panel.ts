import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const node: Element = document.createElement("div");
const panel = editor.addPanel(node);
const opt: CodeMirror.ShowPanelOptions = {
  position:"top",
  before: panel,
  after: panel,
  replace: panel,
  stable: true
}

var panel2: CodeMirror.Panel = editor.addPanel(node, opt);

panel.clear();
panel.changed();
panel.changed(100);
