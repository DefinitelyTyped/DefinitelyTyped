import CodeMirror = require("codemirror");
import "codemirror/addon/search/jump-to-line";

const editor = CodeMirror(document.body, {
    search: {
        bottom: true,
    },
});

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.jumpToLine,
};
