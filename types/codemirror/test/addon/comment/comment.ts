import CodeMirror = require("codemirror");

const editor = CodeMirror(document.body);
const position: CodeMirror.Position = { ch: 0, line: 0 };
const opt: CodeMirror.CommentOptions = {
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentLead: "*",
    lineComment: "//",
    padding: " ",
    commentBlankLines: true,
    indent: true,
    fullLines: true
};

// Check methods
editor.toggleComment(opt);
editor.blockComment(position, position, opt);
editor.lineComment(position, position, opt);
const b: boolean = editor.uncomment(position, position, opt);
