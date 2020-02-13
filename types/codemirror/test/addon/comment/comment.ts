import * as CodeMirror from "codemirror";
import "codemirror/addon/comment/comment";

const editor = CodeMirror(document.body);
const position: CodeMirror.Position = { ch: 0, line: 0 };
const opt: CodeMirror.CommentOptions = {
    blockCommentEnd: "*/",
    blockCommentStart: "/*",
    blockCommentLead: "*",
    commentBlankLines: true,
    fullLines: true,
    indent: true,
    lineComment: "//",
    padding: " "
};
editor.toggleComment(opt);
editor.blockComment(position, position, opt);
editor.lineComment(position, position, opt);
const b: boolean = editor.uncomment(position, position, opt);
