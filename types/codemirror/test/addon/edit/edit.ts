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
const opt2: CodeMirror.EditorConfiguration = {
  autoCloseBrackets: true,
  matchTags: { bothTags: true }
};

CodeMirror.commands.toMatchingTag(editor);
