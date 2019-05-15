import CodeMirror = require("codemirror");

const doc: CodeMirror.Doc = new CodeMirror.Doc(
    "text some string and another text match"
);
const cursor: CodeMirror.SearchCursor = doc.getSearchCursor(
    "text",
    new CodeMirror.Pos(0, 0),
    false
);
const cursor1: CodeMirror.SearchCursor = doc.getSearchCursor(
    /text/,
    new CodeMirror.Pos(0, 0)
);
const cursor2: CodeMirror.SearchCursor = doc.getSearchCursor("text");

const find: boolean | any[] = cursor.find(false);
const findNext: boolean | any[] = cursor.findNext();
const findPrev: boolean | any[] = cursor.findPrevious();
const from: CodeMirror.Position = cursor.from();
const to: CodeMirror.Position = cursor.to();
cursor.replace("blah");
cursor.replace("text", "origin");
