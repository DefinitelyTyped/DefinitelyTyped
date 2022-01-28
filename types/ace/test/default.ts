var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

editor.on("blur", (e) => e);
editor.on("change", (e) => e);

editor.setTheme("ace/theme/twilight");

editor.getSession().setMode("ace/mode/javascript");

editor.setValue("the new text here"); // or session.setValue
editor.getValue(); // or session.getValue

editor.session.getTextRange(editor.getSelectionRange());

editor.insert("Something cool");

editor.selection.getCursor();

editor.gotoLine(123);

editor.session.getLength();

editor.getSession().setTabSize(4);

editor.getSession().setUseSoftTabs(true);

document.getElementById('editor').style.fontSize = '12px';

editor.getSession().setUseWrapMode(true);

editor.setHighlightActiveLine(false);

editor.setShowPrintMargin(false);

editor.setReadOnly(true);  // false to make it editable

editor.resize()

editor.find('needle', {
    backwards: false,
    wrap: false,
    caseSensitive: false,
    wholeWord: false,
    regExp: false
});
editor.findNext();
editor.findPrevious();

editor.find('foo');
editor.replace('bar');

editor.replaceAll('bar');

editor.getSession().on('change', function (e) {
// e.type, etc
});

editor.getSession().selection.on('changeSelection', function (e) {
});

editor.getSession().selection.on('changeCursor', function (e) {
});

editor.commands.addCommand({
    name: 'myCommand',
    bindKey: { win: 'Ctrl-M', mac: 'Command-M' },
    exec: function (editor) {
        //...
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

editor.moveCursorTo(1, 1);
editor.removeLines();

editor.removeLines();

editor.removeLines();

editor.removeLines();

editor.moveCursorTo(1, 1);
editor.getSelection().selectDown();

editor.removeLines();

editor.removeLines();

editor.moveCursorTo(3, 0);

editor.removeLines();

editor.removeLines();

editor.moveCursorTo(1, 3);
editor.getSelection().selectDown();

editor.indent();

var range = editor.getSelectionRange();

editor.moveCursorTo(1, 0);
editor.getSelection().selectDown();

editor.indent();

editor.moveCursorTo(0, 0);
editor.onTextInput("\n");

editor.moveCursorTo(0, 5);
editor.getSelection().selectDown();
editor.getSelection().selectDown();

editor.blockOutdent();

editor.moveCursorTo(1, 1);
editor.removeLines();

var session = new AceAjax.EditSession(["a", "b", "c", "d"].join("\n"));

assert.equal(session.toString(), "a\nc\nd");
assert.position(editor.getCursorPosition(), 1, 0);

editor.removeLines();

assert.equal(session.toString(), "a\nd");
assert.position(editor.getCursorPosition(), 1, 0);

editor.removeLines();

assert.equal(session.toString(), "a");
assert.position(editor.getCursorPosition(), 0, 1);

editor.removeLines();

assert.equal(session.toString(), "");
assert.position(editor.getCursorPosition(), 0, 0);

editor.moveCursorTo(1, 1);
editor.getSelection().selectDown();

editor.removeLines();
assert.equal(session.toString(), "a\nd");
assert.position(editor.getCursorPosition(), 1, 0);


editor.removeLines();

assert.equal(session.toString(), "b\nc");
assert.position(editor.getCursorPosition(), 0, 0);


editor.moveCursorTo(3, 0);

editor.removeLines();
assert.equal(session.toString(), "a\nb\nc");
assert.position(editor.getCursorPosition(), 2, 1);

editor.removeLines();
assert.equal(session.toString(), "a\nb");
assert.position(editor.getCursorPosition(), 1, 1);


editor.moveCursorTo(1, 3);
editor.getSelection().selectDown();

editor.indent();

assert.equal(["a12345", "    b12345", "    c12345"].join("\n"), session.toString());

assert.position(editor.getCursorPosition(), 2, 7);

range = editor.getSelectionRange();
assert.position(range.start, 1, 7);
assert.position(range.end, 2, 7);


editor.moveCursorTo(1, 0);
editor.getSelection().selectDown();

editor.indent();
assert.equal(["a12345", "    b12345", "c12345"].join("\n"), session.toString());


editor.moveCursorTo(0, 0);
editor.onTextInput("\n");
assert.equal(["", "{"].join("\n"), session.toString());


editor.moveCursorTo(0, 5);
editor.getSelection().selectDown();
editor.getSelection().selectDown();

editor.blockOutdent();
assert.equal(session.toString(), ["    a12345", "b12345", "    c12345"].join("\n"));

assert.position(editor.getCursorPosition(), 2, 1);

range = editor.getSelectionRange();
assert.position(range.start, 0, 1);
assert.position(range.end, 2, 1);

editor.blockOutdent();
assert.equal(session.toString(), ["a12345", "b12345", "c12345"].join("\n"));

range = editor.getSelectionRange();
assert.position(range.start, 0, 0);
assert.position(range.end, 2, 0);


editor.moveCursorTo(0, 3);
editor.blockOutdent("  ");

assert.equal(session.toString(), "    12");
assert.position(editor.getCursorPosition(), 0, 0);


editor.moveCursorTo(0, 2);
editor.getSelection().selectDown();
editor.toggleCommentLines();

assert.equal(["//  abc", "//cde"].join("\n"), session.toString());

var selection = editor.getSelectionRange();
assert.position(selection.start, 0, 4);
assert.position(selection.end, 1, 4);


editor.moveCursorTo(0, 1);
editor.getSelection().selectDown();
editor.getSelection().selectRight();
editor.getSelection().selectRight();

editor.toggleCommentLines();

assert.equal(["  abc", "cde"].join("\n"), session.toString());
assert.range(editor.getSelectionRange(), 0, 0, 1, 1);


editor.moveCursorTo(0, 0);
editor.getSelection().selectDown();
editor.getSelection().selectDown();

editor.toggleCommentLines();
editor.toggleCommentLines();

assert.equal(["  abc", "cde", "fg"].join("\n"), session.toString());


editor.moveCursorTo(0, 0);
editor.getSelection().selectDown();

editor.toggleCommentLines();
assert.range(editor.getSelectionRange(), 0, 2, 1, 0);



editor.moveCursorTo(1, 0);
editor.getSelection().selectUp();

editor.toggleCommentLines();
assert.range(editor.getSelectionRange(), 0, 2, 1, 0);


editor.moveCursorTo(0, 1);
editor.getSelection().selectDown();

editor.moveLinesDown();
assert.equal(["33", "11", "22", "44"].join("\n"), session.toString());
assert.position(editor.getCursorPosition(), 1, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 3, 0);
assert.position(editor.getSelection().getSelectionLead(), 1, 0);

editor.moveLinesDown();
assert.equal(["33", "44", "11", "22"].join("\n"), session.toString());
assert.position(editor.getCursorPosition(), 2, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 3, 2);
assert.position(editor.getSelection().getSelectionLead(), 2, 0);

// moving again should have no effect
editor.moveLinesDown();
assert.equal(["33", "44", "11", "22"].join("\n"), session.toString());
assert.position(editor.getCursorPosition(), 2, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 3, 2);
assert.position(editor.getSelection().getSelectionLead(), 2, 0);


editor.moveCursorTo(2, 1);
editor.getSelection().selectDown();

editor.moveLinesUp();
assert.equal(session.toString(), ["11", "33", "44", "22"].join("\n"));
assert.position(editor.getCursorPosition(), 1, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 3, 0);
assert.position(editor.getSelection().getSelectionLead(), 1, 0);

editor.moveLinesUp();
assert.equal(session.toString(), ["33", "44", "11", "22"].join("\n"));
assert.position(editor.getCursorPosition(), 0, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 2, 0);
assert.position(editor.getSelection().getSelectionLead(), 0, 0);


editor.moveCursorTo(1, 1);
editor.clearSelection();

editor.moveLinesDown();
assert.equal(["11", "33", "22", "44"].join("\n"), session.toString());
assert.position(editor.getCursorPosition(), 2, 1);

editor.clearSelection();

editor.moveLinesUp();
assert.equal(["11", "22", "33", "44"].join("\n"), session.toString());
assert.position(editor.getCursorPosition(), 1, 1);


editor.moveCursorTo(1, 1);
editor.getSelection().selectDown();

editor.copyLinesDown();
assert.equal(["11", "22", "33", "22", "33", "44"].join("\n"), session.toString());

assert.position(editor.getCursorPosition(), 3, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 5, 0);
assert.position(editor.getSelection().getSelectionLead(), 3, 0);


editor.moveCursorTo(1, 1);
editor.getSelection().selectDown();

editor.copyLinesUp();
assert.equal(["11", "22", "33", "22", "33", "44"].join("\n"), session.toString());

assert.position(editor.getCursorPosition(), 1, 0);
assert.position(editor.getSelection().getSelectionAnchor(), 3, 0);
assert.position(editor.getSelection().getSelectionLead(), 1, 0);


session.setTabSize(2);
session.setUseSoftTabs(true);

editor.onTextInput("\t");
assert.equal(session.toString(), "  ");

session.setTabSize(5);
editor.onTextInput("\t");
assert.equal(session.toString(), "       ");


session.setUseSoftTabs(false);

editor.onTextInput("\t");
assert.equal(session.toString(), "\t");

editor.removeLines();
var step1 = session.toString();
assert.equal(step1, "222\n333");

editor.removeLines();
var step2 = session.toString();
assert.equal(step2, "333");

editor.removeLines();
var step3 = session.toString();
assert.equal(step3, "");

var undoManager = new AceAjax.UndoManager();

undoManager.undo();
assert.equal(session.toString(), step2);

undoManager.undo();
assert.equal(session.toString(), step1);

undoManager.undo();
assert.equal(session.toString(), "");

undoManager.undo();
assert.equal(session.toString(), "");

editor.moveCursorTo(1, 1);
editor.remove("left");
assert.equal(session.toString(), "123\n56");

editor.moveCursorTo(1, 0);
editor.remove("left");
assert.equal(session.toString(), "123456");

session.setUseSoftTabs(true);
session.setTabSize(4);

editor.moveCursorTo(1, 8);
editor.remove("left");
assert.equal(session.toString(), "123\n    456");

editor.moveCursorTo(1, 0);
editor.transposeLetters();

assert.equal(session.getValue(), ["123", "4567", "89"].join("\n"));

editor.moveCursorTo(1, 2);
editor.transposeLetters();

assert.equal(session.getValue(), ["123", "4657", "89"].join("\n"));

editor.moveCursorTo(1, 4);
editor.transposeLetters();

assert.equal(session.getValue(), ["123", "4576", "89"].join("\n"));

editor.moveCursorTo(1, 1);
editor.getSelection().selectRight();
editor.transposeLetters();

assert.equal(session.getValue(), ["123", "4567", "89"].join("\n"));

editor.moveCursorTo(1, 2);
editor.transposeLetters();
assert.position(editor.getCursorPosition(), 1, 3);

editor.moveCursorTo(1, 2);
editor.removeToLineEnd();
assert.equal(session.getValue(), ["123", "45", "89"].join("\n"));

editor.moveCursorTo(1, 4);
editor.removeToLineEnd();
assert.position(editor.getCursorPosition(), 1, 4);
assert.equal(session.getValue(), ["123", "456789"].join("\n"));

editor.moveCursorTo(1, 0);
editor.getSelection().selectLineEnd();
editor.toUpperCase()
assert.equal(session.getValue(), ["ajax", "DOT", "org"].join("\n"));

editor.moveCursorTo(1, 0);
editor.toUpperCase()
assert.equal(session.getValue(), ["ajax", "DOT", "org"].join("\n"));
assert.position(editor.getCursorPosition(), 1, 0);

editor.moveCursorTo(1, 0);
editor.getSelection().selectLineEnd();
editor.toLowerCase()
assert.equal(session.getValue(), ["AJAX", "dot", "ORG"].join("\n"));

editor.moveCursorTo(1, 0);
editor.toLowerCase()
assert.equal(session.getValue(), ["AJAX", "dot", "ORG"].join("\n"));
assert.position(editor.getCursorPosition(), 1, 0);
