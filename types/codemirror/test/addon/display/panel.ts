import * as CodeMirror from "codemirror";
import "codemirror/addon/display/panel";

const cm: CodeMirror.Editor = CodeMirror(document.body);

const panel1 = cm.addPanel(document.body);

const panel2: CodeMirror.Panel = cm.addPanel(document.body, {
    position: "top",
    after: panel1,
    before: panel1,
    replace: panel1,
    stable: true
});

panel2.changed();
panel2.changed(100);

panel2.clear();
