// TypeScript Version: 3.1

import CodeMirror = require("codemirror");

// Init variables
const doc: CodeMirror.Doc = new CodeMirror.Doc("");
const lineHandle: CodeMirror.LineHandle = doc.getLineHandle(1);
const textMarker: CodeMirror.TextMarker = doc.setBookmark({ ch: 0, line: 0 });
const position: CodeMirror.Position = { line: 0, ch: 0 };
const position1: CodeMirror.Position = { line: 1, ch: 0 };

// Check options
const options: CodeMirror.EditorConfiguration = {
    value: "function myScript(){\n    return 100;\n}\n",
    mode: "javascript",
    lineSeparator: null,
    theme: "default",
    indentUnit: 2,
    tabSize: 4,
    indentWithTabs: false,
    electricChars: true,
    specialChars: /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/,
    specialCharPlaceholder: (char: string): Element => {
        const element = document.createElement("span");
        element.innerHTML = char;
        return element;
    },
    direction: "ltr",
    rtlMoveVisually: false,
    keyMap: "default",
    extraKeys: {
        "Ctrl-s": (cm: CodeMirror.Editor): void => {
            console.log("save");
        },
    },
    configureMouse: (cm: CodeMirror.Editor, repeat, event: Event) => ({
        unit: "char",
        extend: false,
        addNew: false,
        moveOnDrag: true,
    }),
    lineWrapping: false,
    lineNumbers: true,
    firstLineNumber: 1,
    lineNumberFormatter: (line: number): string => line.toString(),
    gutters: ["gutter", { className: "gutter-style", style: "color: red" }],
    fixedGutter: true,
    scrollbarStyle: "native",
    coverGutterNextToScrollbar: true,
    inputStyle: "textarea",
    readOnly: false,
    showCursorWhenSelecting: false,
    lineWiseCopyCut: false,
    pasteLinesPerSelection: true,
    selectionsMayTouch: false,
    undoDepth: 200,
    historyEventDelay: 1250,
    tabindex: 0,
    autofocus: true,
    phrases: {},
    dragDrop: true,
    allowDropFileTypes: ["text/plain"],
    cursorBlinkRate: 530,
    cursorScrollMargin: 0,
    cursorHeight: 1,
    resetSelectionOnContextMenu: true,
    workTime: 200,
    workDelay: 300,
    pollInterval: 100,
    flattenSpans: true,
    addModeClass: false,
    maxHighlightLength: 10000,
    viewportMargin: 10,
    spellcheck: true,
    autocorrect: false,
    autocapitalize: false,
};

// Check without options
const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

// Check with all options
const myCodeMirror1: CodeMirror.Editor = CodeMirror(document.body, options);

// Check with some options
const myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    value: myCodeMirror1.getDoc(),
    mode: {
        javascript: true,
    },
    extraKeys: {
        Enter (cm) {
            console.log("save");
        },
        Esc (cm) {
            return CodeMirror.Pass;
        },
    },
});

// Check LineHandle events
lineHandle.on("delete", () => {});
lineHandle.on("change", (line: CodeMirror.LineHandle, changeObj: CodeMirror.EditorChangeCancellable) => {});

// Check TextMarker events
textMarker.on("beforeCursorEnter", () => {});
textMarker.on("clear", (from: CodeMirror.Position, to: CodeMirror.Position) => {});
textMarker.on("hide", () => {});
textMarker.on("unhide", () => {});

// Check LineWidget events
const lineWidget: CodeMirror.LineWidget = doc.addLineWidget(null, document.createElement("span"));
lineWidget.on("redraw", () => {});

// Check commands
CodeMirror.commands.selectAll(myCodeMirror);
CodeMirror.commands.singleSelection(myCodeMirror);
CodeMirror.commands.killLine(myCodeMirror);
CodeMirror.commands.deleteLine(myCodeMirror);
CodeMirror.commands.deleteLine(myCodeMirror);
CodeMirror.commands.delLineLeft(myCodeMirror);
CodeMirror.commands.delWrappedLineLeft(myCodeMirror);
CodeMirror.commands.delWrappedLineRight(myCodeMirror);
CodeMirror.commands.undo(myCodeMirror);
CodeMirror.commands.redo(myCodeMirror);
CodeMirror.commands.undoSelection(myCodeMirror);
CodeMirror.commands.redoSelection(myCodeMirror);
CodeMirror.commands.goDocStart(myCodeMirror);
CodeMirror.commands.goDocEnd(myCodeMirror);
CodeMirror.commands.goLineStart(myCodeMirror);
CodeMirror.commands.goLineStartSmart(myCodeMirror);
CodeMirror.commands.goLineEnd(myCodeMirror);
CodeMirror.commands.goLineRight(myCodeMirror);
CodeMirror.commands.goLineLeft(myCodeMirror);
CodeMirror.commands.goLineLeftSmart(myCodeMirror);
CodeMirror.commands.goLineUp(myCodeMirror);
CodeMirror.commands.goLineDown(myCodeMirror);
CodeMirror.commands.goPageUp(myCodeMirror);
CodeMirror.commands.goPageDown(myCodeMirror);
CodeMirror.commands.goCharLeft(myCodeMirror);
CodeMirror.commands.goCharRight(myCodeMirror);
CodeMirror.commands.goColumnLeft(myCodeMirror);
CodeMirror.commands.goColumnRight(myCodeMirror);
CodeMirror.commands.goWordLeft(myCodeMirror);
CodeMirror.commands.goWordRight(myCodeMirror);
CodeMirror.commands.goGroupLeft(myCodeMirror);
CodeMirror.commands.goGroupRight(myCodeMirror);
CodeMirror.commands.delCharAfter(myCodeMirror);
CodeMirror.commands.delCharBefore(myCodeMirror);
CodeMirror.commands.delWordAfter(myCodeMirror);
CodeMirror.commands.delWordBefore(myCodeMirror);
CodeMirror.commands.delGroupAfter(myCodeMirror);
CodeMirror.commands.delGroupBefore(myCodeMirror);
CodeMirror.commands.indentAuto(myCodeMirror);
CodeMirror.commands.indentMore(myCodeMirror);
CodeMirror.commands.indentLess(myCodeMirror);
CodeMirror.commands.insertTab(myCodeMirror);
CodeMirror.commands.insertSoftTab(myCodeMirror);
CodeMirror.commands.defaultTab(myCodeMirror);
CodeMirror.commands.transposeChars(myCodeMirror);
CodeMirror.commands.newlineAndIndent(myCodeMirror);
CodeMirror.commands.toggleOverwrite(myCodeMirror);

// Static properties
const version: string = CodeMirror.version;
const cm: CodeMirror.EditorFromTextArea = CodeMirror.fromTextArea(document.createElement("textarea"), {
    mode: "javascript",
});
const defaultOpts: CodeMirror.EditorConfiguration = CodeMirror.defaults;
CodeMirror.defineExtension("test", {});
CodeMirror.defineDocExtension("test", {});
CodeMirror.defineOption("test", false, (instance, newVal, oldVal) => {});
CodeMirror.defineInitHook(instance => {});
CodeMirror.registerHelper("test", "test", {});
CodeMirror.registerGlobalHelper("test", "test", (mode, instance) => true, {});
const pos: CodeMirror.Position = CodeMirror.Pos(0, 1, "after");
const pos1: CodeMirror.Position = CodeMirror.changeEnd({
    from: position,
    to: position1,
    text: ["test"],
    removed: ["test"],
    origin: "test",
});
const column: number = CodeMirror.countColumn("test", 0, 0);

let stringStream = new CodeMirror.StringStream("var myEditor;");

// Call a method from the CodeMirror.Doc interface to confirm a CodeMirror.Editor extends it
myCodeMirror.getCursor();
