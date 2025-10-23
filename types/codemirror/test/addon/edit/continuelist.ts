import CodeMirror = require("codemirror");
import "codemirror/addon/edit/continuelist";

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.newlineAndIndentContinueMarkdownList,
};
