var renderer: AceAjax.VirtualRenderer;
var mode: any;
const aceEditorTextEditTests = {
    "test: delete line from the middle": function () {
        var session = new AceAjax.EditSession(["a", "b", "c", "d"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 1);
        editor.removeLines();

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
    },

    "test: delete multiple selected lines": function () {
        var session = new AceAjax.EditSession(["a", "b", "c", "d"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 1);
        editor.getSelection().selectDown();

        editor.removeLines();
        assert.equal(session.toString(), "a\nd");
        assert.position(editor.getCursorPosition(), 1, 0);
    },

    "test: delete first line": function () {
        var session = new AceAjax.EditSession(["a", "b", "c"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.removeLines();

        assert.equal(session.toString(), "b\nc");
        assert.position(editor.getCursorPosition(), 0, 0);
    },

    "test: delete last should also delete the new line of the previous line": function () {
        var session = new AceAjax.EditSession(["a", "b", "c", ""].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(3, 0);

        editor.removeLines();
        assert.equal(session.toString(), "a\nb\nc");
        assert.position(editor.getCursorPosition(), 2, 1);

        editor.removeLines();
        assert.equal(session.toString(), "a\nb");
        assert.position(editor.getCursorPosition(), 1, 1);
    },

    "test: indent block": function () {
        var session = new AceAjax.EditSession(["a12345", "b12345", "c12345"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 3);
        editor.getSelection().selectDown();

        editor.indent();

        assert.equal(["a12345", "    b12345", "    c12345"].join("\n"), session.toString());

        assert.position(editor.getCursorPosition(), 2, 7);

        var range = editor.getSelectionRange();
        assert.position(range.start, 1, 7);
        assert.position(range.end, 2, 7);
    },

    "test: indent selected lines": function () {
        var session = new AceAjax.EditSession(["a12345", "b12345", "c12345"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 0);
        editor.getSelection().selectDown();

        editor.indent();
        assert.equal(["a12345", "    b12345", "c12345"].join("\n"), session.toString());
    },

    "test: no auto indent if cursor is before the {": function () {
        var session = new AceAjax.EditSession("{",mode);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 0);
        editor.onTextInput("\n");
        assert.equal(["", "{"].join("\n"), session.toString());
    },

    "test: outdent block": function () {
        var session = new AceAjax.EditSession(["        a12345", "    b12345", "        c12345"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 5);
        editor.getSelection().selectDown();
        editor.getSelection().selectDown();

        editor.blockOutdent();
        assert.equal(session.toString(), ["    a12345", "b12345", "    c12345"].join("\n"));

        assert.position(editor.getCursorPosition(), 2, 1);

        var range = editor.getSelectionRange();
        assert.position(range.start, 0, 1);
        assert.position(range.end, 2, 1);

        editor.blockOutdent();
        assert.equal(session.toString(), ["a12345", "b12345", "c12345"].join("\n"));

        var range = editor.getSelectionRange();
        assert.position(range.start, 0, 0);
        assert.position(range.end, 2, 0);
    },

    "test: outent without a selection should update cursor": function () {
        var session = new AceAjax.EditSession("        12");
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 3);
        editor.blockOutdent("  ");

        assert.equal(session.toString(), "    12");
        assert.position(editor.getCursorPosition(), 0, 0);
    },

    "test: comment lines should perserve selection": function () {
        var session = new AceAjax.EditSession(["  abc", "cde"].join("\n"),mode);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 2);
        editor.getSelection().selectDown();
        editor.toggleCommentLines();

        assert.equal(["//  abc", "//cde"].join("\n"), session.toString());

        var selection = editor.getSelectionRange();
        assert.position(selection.start, 0, 4);
        assert.position(selection.end, 1, 4);
    },

    "test: uncomment lines should perserve selection": function () {
        var session = new AceAjax.EditSession(["//  abc", "//cde"].join("\n"),mode);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 1);
        editor.getSelection().selectDown();
        editor.getSelection().selectRight();
        editor.getSelection().selectRight();

        editor.toggleCommentLines();

        assert.equal(["  abc", "cde"].join("\n"), session.toString());
        assert.range(editor.getSelectionRange(), 0, 0, 1, 1);
    },

    "test: toggle comment lines twice should return the original text": function () {
        var session = new AceAjax.EditSession(["  abc", "cde", "fg"], mode);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 0);
        editor.getSelection().selectDown();
        editor.getSelection().selectDown();

        editor.toggleCommentLines();
        editor.toggleCommentLines();

        assert.equal(["  abc", "cde", "fg"].join("\n"), session.toString());
    },


    "test: comment lines - if the selection end is at the line start it should stay there": function () {
        //select down
        var session = new AceAjax.EditSession(["abc", "cde"].join("\n"),mode);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 0);
        editor.getSelection().selectDown();

        editor.toggleCommentLines();
        assert.range(editor.getSelectionRange(), 0, 2, 1, 0);

        // select up
        var session = new AceAjax.EditSession(["abc", "cde"].join("\n"),mode);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 0);
        editor.getSelection().selectUp();

        editor.toggleCommentLines();
        assert.range(editor.getSelectionRange(), 0, 2, 1, 0);
    },

    "test: move lines down should select moved lines": function () {
        var session = new AceAjax.EditSession(["11", "22", "33", "44"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

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
    },

    "test: move lines up should select moved lines": function () {
        var session = new AceAjax.EditSession(["11", "22", "33", "44"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

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
    },

    "test: move line without active selection should not move cursor relative to the moved line": function () {
        var session = new AceAjax.EditSession(["11", "22", "33", "44"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 1);
        editor.clearSelection();

        editor.moveLinesDown();
        assert.equal(["11", "33", "22", "44"].join("\n"), session.toString());
        assert.position(editor.getCursorPosition(), 2, 1);

        editor.clearSelection();

        editor.moveLinesUp();
        assert.equal(["11", "22", "33", "44"].join("\n"), session.toString());
        assert.position(editor.getCursorPosition(), 1, 1);
    },

    "test: copy lines down should select lines and place cursor at the selection start": function () {
        var session = new AceAjax.EditSession(["11", "22", "33", "44"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 1);
        editor.getSelection().selectDown();

        editor.copyLinesDown();
        assert.equal(["11", "22", "33", "22", "33", "44"].join("\n"), session.toString());

        assert.position(editor.getCursorPosition(), 3, 0);
        assert.position(editor.getSelection().getSelectionAnchor(), 5, 0);
        assert.position(editor.getSelection().getSelectionLead(), 3, 0);
    },

    "test: copy lines up should select lines and place cursor at the selection start": function () {
        var session = new AceAjax.EditSession(["11", "22", "33", "44"].join("\n"));
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(1, 1);
        editor.getSelection().selectDown();

        editor.copyLinesUp();
        assert.equal(["11", "22", "33", "22", "33", "44"].join("\n"), session.toString());

        assert.position(editor.getCursorPosition(), 1, 0);
        assert.position(editor.getSelection().getSelectionAnchor(), 3, 0);
        assert.position(editor.getSelection().getSelectionLead(), 1, 0);
    },

    "test: input a tab with soft tab should convert it to spaces": function () {
        var session = new AceAjax.EditSession("");
        var editor = new AceAjax.Editor(renderer, session);

        session.setTabSize(2);
        session.setUseSoftTabs(true);

        editor.onTextInput("\t");
        assert.equal(session.toString(), "  ");

        session.setTabSize(5);
        editor.onTextInput("\t");
        assert.equal(session.toString(), "       ");
    },

    "test: input tab without soft tabs should keep the tab character": function () {
        var session = new AceAjax.EditSession("");
        var editor = new AceAjax.Editor(renderer, session);

        session.setUseSoftTabs(false);

        editor.onTextInput("\t");
        assert.equal(session.toString(), "\t");
    },

    "test: undo/redo for delete line": function () {
        var session = new AceAjax.EditSession(["111", "222", "333"]);
        var undoManager = new AceAjax.UndoManager();
        session.setUndoManager(undoManager);

        var initialText = session.toString();
        var editor = new AceAjax.Editor(renderer, session);

        editor.removeLines();
        var step1 = session.toString();
        assert.equal(step1, "222\n333");

        editor.removeLines();
        var step2 = session.toString();
        assert.equal(step2, "333");

        editor.removeLines();
        var step3 = session.toString();
        assert.equal(step3, "");

        undoManager.undo();
        assert.equal(session.toString(), step2);

        undoManager.undo();
        assert.equal(session.toString(), step1);

        undoManager.undo();
        assert.equal(session.toString(), initialText);

        undoManager.undo();
        assert.equal(session.toString(), initialText);
    },

    "test: remove left should remove character left of the cursor": function () {
        var session = new AceAjax.EditSession(["123", "456"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 1);
        editor.remove("left");
        assert.equal(session.toString(), "123\n56");
    },

    "test: remove left should remove line break if cursor is at line start": function () {
        var session = new AceAjax.EditSession(["123", "456"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 0);
        editor.remove("left");
        assert.equal(session.toString(), "123456");
    },

    "test: remove left should remove tabsize spaces if cursor is on a tab stop and preceeded by spaces": function () {
        var session = new AceAjax.EditSession(["123", "        456"]);
        session.setUseSoftTabs(true);
        session.setTabSize(4);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 8);
        editor.remove("left");
        assert.equal(session.toString(), "123\n    456");
    },

    "test: transpose at line start should be a noop": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 0);
        editor.transposeLetters();

        assert.equal(session.getValue(), ["123", "4567", "89"].join("\n"));
    },

    "test: transpose in line should swap the charaters before and after the cursor": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 2);
        editor.transposeLetters();

        assert.equal(session.getValue(), ["123", "4657", "89"].join("\n"));
    },

    "test: transpose at line end should swap the last two characters": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 4);
        editor.transposeLetters();

        assert.equal(session.getValue(), ["123", "4576", "89"].join("\n"));
    },

    "test: transpose with non empty selection should be a noop": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 1);
        editor.getSelection().selectRight();
        editor.transposeLetters();

        assert.equal(session.getValue(), ["123", "4567", "89"].join("\n"));
    },

    "test: transpose should move the cursor behind the last swapped character": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 2);
        editor.transposeLetters();
        assert.position(editor.getCursorPosition(), 1, 3);
    },

    "test: remove to line end": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 2);
        editor.removeToLineEnd();
        assert.equal(session.getValue(), ["123", "45", "89"].join("\n"));
    },

    "test: remove to line end at line end should remove the new line": function () {
        var session = new AceAjax.EditSession(["123", "4567", "89"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 4);
        editor.removeToLineEnd();
        assert.position(editor.getCursorPosition(), 1, 4);
        assert.equal(session.getValue(), ["123", "456789"].join("\n"));
    },

    "test: transform selection to uppercase": function () {
        var session = new AceAjax.EditSession(["ajax", "dot", "org"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 0);
        editor.getSelection().selectLineEnd();
        editor.toUpperCase()
        assert.equal(session.getValue(), ["ajax", "DOT", "org"].join("\n"));
    },

    "test: transform word to uppercase": function () {
        var session = new AceAjax.EditSession(["ajax", "dot", "org"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 0);
        editor.toUpperCase()
        assert.equal(session.getValue(), ["ajax", "DOT", "org"].join("\n"));
        assert.position(editor.getCursorPosition(), 1, 0);
    },

    "test: transform selection to lowercase": function () {
        var session = new AceAjax.EditSession(["AJAX", "DOT", "ORG"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 0);
        editor.getSelection().selectLineEnd();
        editor.toLowerCase()
        assert.equal(session.getValue(), ["AJAX", "dot", "ORG"].join("\n"));
    },

    "test: transform word to lowercase": function () {
        var session = new AceAjax.EditSession(["AJAX", "DOT", "ORG"]);

        var editor = new AceAjax.Editor(renderer, session);
        editor.moveCursorTo(1, 0);
        editor.toLowerCase()
        assert.equal(session.getValue(), ["AJAX", "dot", "ORG"].join("\n"));
        assert.position(editor.getCursorPosition(), 1, 0);
    }
};
