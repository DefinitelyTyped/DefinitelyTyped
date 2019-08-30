import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const doc: CodeMirror.Doc = editor.getDoc();
const position: CodeMirror.Position = { line: 0, ch: 0 };
const editorOpt: CodeMirror.EditorConfiguration = {
    highlightSelectionMatches: true
};
const opt: CodeMirror.HighlightSelectionMatches = {
    minChars: 0,
    style: "test",
    trim: true,
    showToken: true,
    delay: 0,
    wordsOnly: true,
    annotateScrollbar: true
};
const opt1: CodeMirror.HighlightSelectionMatches = {
    showToken: /test/
};
const editorOpt1: CodeMirror.EditorConfiguration = {
    highlightSelectionMatches: opt
};
const searchOpt: CodeMirror.SearchCursorOptions = {
    caseFold: true,
    multiline: true
};
const searchAnnotationOpt: CodeMirror.SearchAnnotationOptions = {
    className: "test",
    scrollButtonHeight: 0,
    listenForChanges: true,
    multiline: true,
    maxMatches: 0
};

// Check commands
CodeMirror.commands.jumpToLine(editor);
CodeMirror.commands.find(editor);
CodeMirror.commands.findPersistent(editor);
CodeMirror.commands.findPersistentNext(editor);
CodeMirror.commands.findPersistentPrev(editor);
CodeMirror.commands.findNext(editor, true, true, true);
CodeMirror.commands.findPrev(editor);
CodeMirror.commands.clearSearch(editor);
CodeMirror.commands.replace(editor);
CodeMirror.commands.replaceAll(editor, true);

// Check editor methods
editor.showMatchesOnScrollbar("test", true, "test");
editor.showMatchesOnScrollbar(/test/, searchOpt, searchAnnotationOpt);
const searchCursor: CodeMirror.SearchCursor = editor.getSearchCursor("test", { from: position, to: position }, true);
const searchCursor1: CodeMirror.SearchCursor = editor.getSearchCursor(
    /test/,
    { from: position, to: position },
    searchOpt
);
editor.selectMatches("test", true);
editor.selectMatches(/test/, searchOpt);
const searchCursor2: CodeMirror.SearchCursor = doc.getSearchCursor("test", { from: position, to: position }, true);
const searchCursor3: CodeMirror.SearchCursor = doc.getSearchCursor(/test/, { from: position, to: position }, searchOpt);

// Check search cursor
const findNext: boolean | RegExpExecArray = searchCursor.findNext();
const findPrev: boolean | RegExpExecArray = searchCursor.findPrevious();
const find: boolean | RegExpExecArray = searchCursor.find(true);
const from: CodeMirror.Position = searchCursor.from();
const to: CodeMirror.Position = searchCursor.to();
searchCursor.replace("test");
searchCursor.replace("test", "test");
