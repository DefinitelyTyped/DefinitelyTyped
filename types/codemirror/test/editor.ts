// TypeScript Version: 3.1
import CodeMirror = require("codemirror");

// Init variables
const editor: CodeMirror.Editor = CodeMirror(document.body);
const editorTextArea: CodeMirror.EditorFromTextArea = CodeMirror.fromTextArea(document.createElement("textarea"), {
    mode: "javascript",
});
const element: Element = document.createElement("span");
const position: CodeMirror.Position = { line: 0, ch: 0 };
const position1: CodeMirror.Position = { line: 1, ch: 0 };

// Check events
editor.on(
  'change',
  (
    instance: CodeMirror.Editor,
    changeObj: CodeMirror.EditorChangeLinkedList,
  ) => {
    changeObj.from;
    changeObj.to;
    changeObj.text;
    changeObj.removed;
    changeObj.origin;
  },
);
editor.on("changes", (instance: CodeMirror.Editor, changes: CodeMirror.EditorChangeLinkedList[]) => {
    changes.forEach(change => {
        change.from;
        change.to;
        change.text;
        change.removed;
        change.origin;
    });
});
editor.on("beforeChange", (instance: CodeMirror.Editor, changeObj: CodeMirror.EditorChangeCancellable) => {
    if (changeObj.update != null) changeObj.update();
});
editor.on("cursorActivity", (instance: CodeMirror.Editor) => {});
editor.on("keyHandled", (instance: CodeMirror.Editor, name: string, event: Event) => {});
editor.on("inputRead", (instance: CodeMirror.Editor, changeObj: CodeMirror.EditorChangeCancellable) => {});
editor.on("electricInput", (instance: CodeMirror.Editor, line: number) => {});
editor.on("beforeSelectionChange", (instance: CodeMirror.Editor, selection: CodeMirror.Selection) => {
    selection.ranges.forEach(range => {
        range.anchor;
        range.head;
    });
    selection.origin;
    selection.update([]);
});
editor.on("viewportChange", (instance: CodeMirror.Editor, from: number, to: number) => {});
editor.on("swapDoc", (instance: CodeMirror.Editor, oldDoc: CodeMirror.Doc) => {});
editor.on("gutterClick", (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => {});
editor.on("gutterContextMenu", (instance: CodeMirror.Editor, line: number, gutter: string, event: Event) => {});
editor.on("focus", (instance: CodeMirror.Editor, event: Event) => {});
editor.on("blur", (instance: CodeMirror.Editor, event: Event) => {});
editor.on("scroll", (instance: CodeMirror.Editor) => {});
editor.on("refresh", (instance: CodeMirror.Editor) => {});
editor.on("optionChange", (instance: CodeMirror.Editor, option: string) => {});
editor.on("scrollCursorIntoView", (instance: CodeMirror.Editor, event: Event) => {});
editor.on("update", (instance: CodeMirror.Editor) => {});
editor.on("renderLine", (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: Element) => {});
editor.on("mousedown", (instance: CodeMirror.Editor, event: MouseEvent) => {});

// Check methods
const focus: boolean = editor.hasFocus();
const posH: { line: number; ch: number; hitSide?: boolean } = editor.findPosH(position, 0, "char", true);
const posV: { line: number; ch: number; hitSide?: boolean } = editor.findPosV(position, 0, "page");
const word: CodeMirror.Range = editor.findWordAt(position);
editor.setOption('theme', 'default');
const option: string | undefined = editor.getOption('theme');
editor.addKeyMap("default", true);
editor.removeKeyMap("default");
editor.addOverlay("javascript", {
    opaque: true,
    priority: 0,
});
editor.addOverlay({ javascript: true });
editor.removeOverlay("javascript");
editor.removeOverlay({ javascript: true });
const doc: CodeMirror.Doc = editor.getDoc();
const newDoc: CodeMirror.Doc = editor.swapDoc(doc);
editor.addWidget(position, element, true);
editor.setSize(0, 0);
editor.setSize("100%", "100%");
editor.scrollTo(0, 0);
const scroll: CodeMirror.ScrollInfo = editor.getScrollInfo();
editor.scrollIntoView(position, 0);
editor.scrollIntoView({ left: 0, top: 0, right: 0, bottom: 0 }, 0);
editor.scrollIntoView({ from: position, to: position1 }, 0);
const cursor: {
    left: number;
    top: number;
    bottom: number;
} = editor.cursorCoords(true, "local");
const cursor1: {
    left: number;
    top: number;
    bottom: number;
} = editor.cursorCoords(position, "page");
const char: {
    left: number;
    right: number;
    top: number;
    bottom: number;
} = editor.charCoords(position, "window");
const height: number = editor.lineAtHeight(0, "window");
const height1: number = editor.heightAtLine(1, "local", true);
const height2: number = editor.defaultTextHeight();
const height3: number = editor.defaultCharWidth();
const viewport: { from: number; to: number } = editor.getViewport();
editor.refresh();
const mode: CodeMirror.Mode<{}> = editor.getModeAt(position);
const token: CodeMirror.Token = editor.getTokenAt(position, true);
const tokens: CodeMirror.Token[] = editor.getLineTokens(1, true);
const tokenType: string = editor.getTokenTypeAt(position);
const helpers: object[] = editor.getHelpers(position, "fold");
const helper: object = editor.getHelper(position, "fold");
const state: any = editor.getStateAfter(0, true);
const operation: boolean = editor.operation<boolean>(() => true);
editor.startOperation();
editor.endOperation();
editor.indentLine(1, "add");
editor.indentLine(1, 1);
editor.toggleOverwrite(true);
const readOnly: boolean = editor.isReadOnly();
editor.focus();
const phrase: string = editor.phrase("test");
const inputField: Element = editor.getInputField();
const wrapper: Element = editor.getWrapperElement();
const scroller: Element = editor.getScrollerElement();
const gutter: Element = editor.getGutterElement();
editorTextArea.save();
editorTextArea.toTextArea();
const textArea: HTMLTextAreaElement = editorTextArea.getTextArea();
