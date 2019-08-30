import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const options: CodeMirror.TernOptions = {
    completionTip (data) {
        const d = data.completions;
        return "";
    },
    showError (editor, message) {
        alert(message);
    }
};

const ts = new CodeMirror.TernServer(options);
ts.request(
    editor.getDoc(),
    "completions",
    (_e, d) => {
        if (d) {
            const c = d.completions;
        }
    },
    { ch: 0, line: 0 },
);
ts.complete(editor.getDoc());
ts.showType(editor.getDoc());
