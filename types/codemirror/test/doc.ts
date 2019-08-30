import CodeMirror = require("codemirror");

// Init variables
const doc: CodeMirror.Doc = new CodeMirror.Doc("");
const element: Element = document.createElement("span");
const position: CodeMirror.Position = { line: 0, ch: 0 };
const position1: CodeMirror.Position = { line: 1, ch: 0 };
const selectionOption: CodeMirror.SelectionOptions = {
    scroll: true,
    origin: "",
    bias: 1,
};

// Check events
doc.on("change", (doc: CodeMirror.Doc, changeObj: CodeMirror.EditorChangeCancellable) => {});
doc.on("beforeChange", (doc: CodeMirror.Doc, changeObj: CodeMirror.EditorChangeCancellable) => {});
doc.on("cursorActivity", (doc: CodeMirror.Doc) => {});
doc.on("beforeSelectionChange", (doc: CodeMirror.Doc, selection: CodeMirror.Selection) => {});

// Check methods
const val: string = doc.getValue("\n");
doc.setValue("function myScript(){\n    return 100;\n}\n");
const originRange: string = doc.getRange(position, position1);
doc.replaceRange("test", position, position1, originRange);
const line: string = doc.getLine(1);
const nbLine: number = doc.lineCount();
const lastLine: number = doc.lastLine();
const lineHandle: CodeMirror.LineHandle = doc.getLineHandle(1);
const line1: number | null = doc.getLineNumber(lineHandle);
doc.eachLine((line: CodeMirror.LineHandle) => {});
doc.eachLine(1, 3, (line: CodeMirror.LineHandle) => {});
doc.markClean();
const generation: number = doc.changeGeneration(true);
const clean: boolean = doc.isClean(1);
const selection: string = doc.getSelection("\n");
const selections: string[] = doc.getSelections("\n");
doc.replaceSelection("test", "start");
doc.replaceSelections(["test", "test1"], "end");
const cursor: CodeMirror.Position = doc.getCursor("head");
const selections1: CodeMirror.Range[] = doc.listSelections();
const selected: boolean = doc.somethingSelected();
doc.setCursor(0, 0, selectionOption);
doc.setCursor(position);
doc.setSelection(position, position1, selectionOption);
doc.setSelections(
    [
        {
            anchor: position,
            head: position1,
        },
    ],
    0,
    selectionOption,
);
doc.addSelection(position, position1);
doc.extendSelection(position, position1, selectionOption);
doc.extendSelections(
    [
        {
            anchor: position,
            head: position1,
        },
    ],
    selectionOption,
);
doc.extendSelectionBy(range => range, selectionOption);
doc.setExtending(true);
const extending: boolean = doc.getExtending();
const editor1: CodeMirror.Editor | null = doc.getEditor();
const doc1: CodeMirror.Doc = doc.copy(true);
const linkedDoc: CodeMirror.Doc = doc.linkedDoc({
    sharedHist: true,
    from: 0,
    to: 1,
    mode: "javascript",
});
doc.unlinkDoc(linkedDoc);
doc.iterLinkedDocs((doc, sharedHist) => {});
doc.undo();
doc.redo();
doc.undoSelection();
doc.redoSelection();
const historySize: { undo: number; redo: number } = doc.historySize();
doc.clearHistory();
const history1: object = doc.getHistory();
doc.setHistory(history);
const mark: CodeMirror.TextMarker = doc.markText(position, position1, {
    className: "mark",
    inclusiveLeft: true,
    inclusiveRight: true,
    atomic: true,
    collapsed: true,
    clearOnEnter: true,
    clearWhenEmpty: true,
    replacedWith: element,
    handleMouseEvents: true,
    readOnly: true,
    addToHistory: true,
    startStyle: "mark-start",
    endStyle: "mark-end",
    css: "color: red",
    attributes: {},
    shared: true,
});
const bookmark: CodeMirror.TextMarker = doc.setBookmark(position, {
    widget: element,
    insertLeft: true,
    shared: true,
    handleMouseEvents: true,
});
const marks: CodeMirror.TextMarker[] = doc.findMarks(position, position1);
const marksAt: CodeMirror.TextMarker[] = doc.findMarksAt(position);
const allMarks: CodeMirror.TextMarker[] = doc.getAllMarks();
const gutter: CodeMirror.LineHandle = doc.setGutterMarker(0, "test", element);
doc.clearGutter("test");
const line2: CodeMirror.LineHandle = doc.addLineClass(0, "text", "test");
const line3: CodeMirror.LineHandle = doc.addLineClass(lineHandle, "background", "test");
const line4: CodeMirror.LineHandle = doc.removeLineClass(0, "gutter", "test");
const line5: CodeMirror.LineHandle = doc.addLineClass(lineHandle, "wrap", "test");
const lineInfo: CodeMirror.LineInfo = doc.lineInfo(0);
const lineInfo1: CodeMirror.LineInfo = doc.lineInfo(lineHandle);
const lineWidget: CodeMirror.LineWidget = doc.addLineWidget(0, element, {
    coverGutter: true,
    noHScroll: true,
    above: true,
    handleMouseEvents: false,
    insertAt: 0,
});
const mode: CodeMirror.Mode<{}> = doc.getMode();
const lineSep: string | null = doc.lineSeparator();
const pos: CodeMirror.Position = doc.posFromIndex(0);
const index: number = doc.indexFromPos(position);
