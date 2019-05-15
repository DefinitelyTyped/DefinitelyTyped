import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const matchOpt: CodeMirror.MatchTags = {
    bothTags: true
};
const opt: CodeMirror.EditorConfiguration = {
    autoCloseBrackets: "()[]{}''\"\"",
    autoCloseTags: true,
    matchBrackets: true,
    matchTags: true
};

CodeMirror.commands.toMatchingTag(editor);
