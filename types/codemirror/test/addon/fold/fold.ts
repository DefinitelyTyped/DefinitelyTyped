import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const position: CodeMirror.Position = { line: 0, ch: 0 };
type Result = { from: CodeMirror.Position; to: CodeMirror.Position };
const foldFunction: CodeMirror.FoldFunction = (
    cm: CodeMirror.Editor,
    start: CodeMirror.Position
): { from: CodeMirror.Position; to: CodeMirror.Position } => ({
    from: position,
    to: position
});
const opt: CodeMirror.FoldCodeOptions = {
    rangeFinder: foldFunction
};
const editorOpt: CodeMirror.EditorConfiguration = {
    foldOptions: opt,
    foldGutter: true
};

// Check helpers
const combine: (cm: CodeMirror.Editor, start: CodeMirror.Position) => CodeMirror.Position = CodeMirror.fold.combine();
const auto: Result = CodeMirror.fold.auto(editor, position);
const brace: Result = CodeMirror.fold.brace(editor, position);
const import_: Result = CodeMirror.fold.import(editor, position);
const include: Result = CodeMirror.fold.include(editor, position);
const comment: Result = CodeMirror.fold.comment({
  test: (config: CodeMirror.EditorConfiguration, modeOption: any) => ({})
});
const indent: Result = CodeMirror.fold.indent(editor, position);
const markdown: Result = CodeMirror.fold.markdown(editor, position);
const xml: Result = CodeMirror.fold.xml(editor, position);

// Check commands
CodeMirror.commands.toggleFold(editor);
CodeMirror.commands.fold(editor);
CodeMirror.commands.unfold(editor);
CodeMirror.commands.foldAll(editor);
CodeMirror.commands.unfoldAll(editor);

// Check editor
editor.foldCode(0, {
    ...opt,
    call: foldFunction
});
editor.foldCode(position, opt);
const folded: boolean = editor.isFolded(position);
const option: any = editor.foldOption(opt, "test");
