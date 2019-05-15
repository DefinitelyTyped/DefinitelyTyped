import CodeMirror = require("codemirror");

const opt: CodeMirror.EditorConfiguration = {
  continueComments: "test"
};
const opt1: CodeMirror.EditorConfiguration = {
  continueComments: {
    key: "test"
  }
};
