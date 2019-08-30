import CodeMirror = require("codemirror");

const opt: CodeMirror.EditorConfiguration = {
  continueComments: true
};
const opt1: CodeMirror.EditorConfiguration = {
  continueComments: "test"
};
const opt2: CodeMirror.EditorConfiguration = {
  continueComments: {
    key: "test",
    continueLineComment: true
  }
};
