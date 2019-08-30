import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const position: CodeMirror.Position = { line: 0, ch: 0 };
type Result = CodeMirror.Annotation[] | PromiseLike<CodeMirror.Annotation[]>;
const annotation: CodeMirror.Annotation = {
    from: position,
    message: "test",
    severity: "error",
    to: position
};
const linterFunction: CodeMirror.Linter = (content: string, options?: any, editor?: CodeMirror.Editor) => [annotation];
const lintOpt: CodeMirror.LintOptions = {
    async: false,
    hasGutters: true,
    onUpdateLinting: (
        annotationsNotSorted: CodeMirror.Annotation[],
        annotations: CodeMirror.Annotation[],
        codeMirror: CodeMirror.Editor
    ) => {},
    getAnnotations: linterFunction,
    tooltips: true,
    delay: 0,
    formatAnnotation: (annotation: CodeMirror.Annotation) => {}
};
const lintOpt1: CodeMirror.LintOptions = {
    async: false,
    hasGutters: true,
    getAnnotations: linterFunction,
    tooltips: "test"
};
const editorOpt: CodeMirror.EditorConfiguration = {
    lint: true
};
const editorOpt1: CodeMirror.EditorConfiguration = {
    lint: linterFunction
};
const editorOpt2: CodeMirror.EditorConfiguration = {
    lint: lintOpt
};

// Check helpers
const coffeescript: Result = CodeMirror.lint.coffeescript("");
const css: Result = CodeMirror.lint.css("");
const html: Result = CodeMirror.lint.html("");
const javascript: Result = CodeMirror.lint.javascript("");
const json: Result = CodeMirror.lint.json("");
const yaml: Result = CodeMirror.lint.yaml("");

// Check editor
editor.performLint();
