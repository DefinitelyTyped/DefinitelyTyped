import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const position: CodeMirror.Position = { line: 0, ch: 0 };
const hintFunction: CodeMirror.HintFunction = (cm: CodeMirror.Editor, options?: any): CodeMirror.Hints => ({
    from: position,
    to: position,
    list: []
});
const opt: CodeMirror.ShowHintOptions = {
    completeSingle: true,
    hint: hintFunction
};
const editorOpt: CodeMirror.EditorConfiguration = {
    showHint: true,
    hintOptions: opt
};
const anywordOpt: CodeMirror.AnywordHintOptions = {
    word: /test/,
    range: 0,
    list: ["test"]
};
const jsOpt: CodeMirror.JavascriptHintOptions = {
    globalScope: window,
    additionalContext: {
        test: {}
    },
    useGlobalScope: true
};
const sqlOpt: CodeMirror.SqlHintOptions = {
    tables: {
        test: {
            text: "test",
            columns: ["id", "test"]
        }
    },
    defaultTable: "test",
    disableKeywords: ["test"]
};
const sqlOpt1: CodeMirror.SqlHintOptions = {
    tables: [{ text: "test", columns: ["id", "test"] }, "test"]
};
const xmlOpt: CodeMirror.XmlHintOptions = {
    schemaInfo: {},
    quoteChar: '"'
};

// Check helpers
const anyword: CodeMirror.Hints = CodeMirror.hint.anyword(editor, anywordOpt);
anywordOpt.list = anyword.list;
const css: CodeMirror.Hints = CodeMirror.hint.css(editor);
const html: CodeMirror.Hints = CodeMirror.hint.html(editor, xmlOpt);
const javascript: CodeMirror.Hints = CodeMirror.hint.javascript(editor, jsOpt);
const coffeescript: CodeMirror.Hints = CodeMirror.hint.coffeescript(editor, jsOpt);
const sql: CodeMirror.Hints = CodeMirror.hint.sql(editor, sqlOpt);
const xml: CodeMirror.Hints = CodeMirror.hint.xml(editor, xmlOpt);

// Check editor
editor.showHint(opt);

// Check static
CodeMirror.showHint(editor, hintFunction, opt);
