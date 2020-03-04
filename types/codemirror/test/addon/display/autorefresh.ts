import * as CodeMirror from "codemirror";
import "codemirror/addon/display/autorefresh";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    autoRefresh: true
});
