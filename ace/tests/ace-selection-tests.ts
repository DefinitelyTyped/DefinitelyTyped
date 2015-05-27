/// <reference path="../ace.d.ts" />

var assert: any;
var exports = {
    createSession: function (rows, cols) {
        var line = new Array(cols + 1).join("a");
        var text = new Array(rows).join(line + "\n") + line;
        return new AceAjax.EditSession(text);
    },

    "test: move cursor to end of file should place the cursor on last row and column": function () {
        var session = this.createSession(200, 10);
        var selection = session.getSelection();

        selection.moveCursorFileEnd();
        assert.position(selection.getCursor(), 199, 10);
    },

    "test: moveCursor to start of file should place the cursor on the first row and column": function () {
        var session = this.createSession(200, 10);
        var selection = session.getSelection();

        selection.moveCursorFileStart();
        assert.position(selection.getCursor(), 0, 0);
    },

    "test: move selection lead to end of file": function () {
        var session = this.createSession(200, 10);
        var selection = session.getSelection();

        selection.moveCursorTo(100, 5);
        selection.selectFileEnd();

        var range = selection.getRange();

        assert.position(range.start, 100, 5);
        assert.position(range.end, 199, 10);
    },

    "test: move selection lead to start of file": function () {
        var session = this.createSession(200, 10);
        var selection = session.getSelection();

        selection.moveCursorTo(100, 5);
        selection.selectFileStart();

        var range = selection.getRange();

        assert.position(range.start, 0, 0);
        assert.position(range.end, 100, 5);
    },

    "test: move cursor word right": function () {
        var session = new AceAjax.EditSession([
            "ab",
            " Juhu Kinners (abc, 12)",
            " cde"
        ].join("\n"));

        var selection = session.getSelection();

        selection.moveCursorDown();
        assert.position(selection.getCursor(), 1, 0);

        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 1, 5);

        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 1, 13);

        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 1, 18);

        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 1, 22);

        // wrap line
        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 2, 4);

        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 2, 4);
    },

    "test: select word right if cursor in word": function () {
        var session = new AceAjax.EditSession("Juhu Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 2);
        selection.moveCursorWordRight();

        assert.position(selection.getCursor(), 0, 4);
    },

    "test: moveCursor word left": function () {
        var session = new AceAjax.EditSession([
            "ab",
            " Juhu Kinners (abc, 12)",
            " cde"
        ].join("\n"));

        var selection = session.getSelection();

        selection.moveCursorDown();
        selection.moveCursorLineEnd();
        assert.position(selection.getCursor(), 1, 23);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 1, 20);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 1, 15);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 1, 6);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 1, 1);

        // wrap line
        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 0);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 0);
    },

    "test: moveCursor word left with umlauts": function () {
        var session = new AceAjax.EditSession(" Fuß Füße");

        var selection = session.getSelection();
        selection.moveCursorTo(0, 9)
        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 5);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 1);
    },

    "test: select word left if cursor in word": function () {
        var session = new AceAjax.EditSession("Juhu Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 8);

        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 5);
    },

    "test: select word right and select": function () {
        var session = new AceAjax.EditSession("Juhu Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 0);
        selection.selectWordRight();

        var range = selection.getRange();

        assert.position(range.start, 0, 0);
        assert.position(range.end, 0, 4);
    },

    "test: select word left and select": function () {
        var session = new AceAjax.EditSession("Juhu Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 3);
        selection.selectWordLeft();

        var range = selection.getRange();

        assert.position(range.start, 0, 0);
        assert.position(range.end, 0, 3);
    },

    "test: select word with cursor in word should select the word": function () {
        var session = new AceAjax.EditSession("Juhu Kinners 123");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 8);
        selection.selectWord();

        var range = selection.getRange();
        assert.position(range.start, 0, 5);
        assert.position(range.end, 0, 12);
    },

    "test: select word with cursor in word including right whitespace should select the word": function () {
        var session = new AceAjax.EditSession("Juhu Kinners      123");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 8);
        selection.selectAWord();

        var range = selection.getRange();
        assert.position(range.start, 0, 5);
        assert.position(range.end, 0, 18);
    },

    "test: select word with cursor betwen white space and word should select the word": function () {
        var session = new AceAjax.EditSession("Juhu Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 4);
        selection.selectWord();

        var range = selection.getRange();
        assert.position(range.start, 0, 0);
        assert.position(range.end, 0, 4);

        selection.moveCursorTo(0, 5);
        selection.selectWord();

        var range = selection.getRange();
        assert.position(range.start, 0, 5);
        assert.position(range.end, 0, 12);
    },

    "test: select word with cursor in white space should select white space": function () {
        var session = new AceAjax.EditSession("Juhu  Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 5);
        selection.selectWord();

        var range = selection.getRange();
        assert.position(range.start, 0, 4);
        assert.position(range.end, 0, 6);
    },

    "test: moving cursor should fire a 'changeCursor' event": function () {
        var session = new AceAjax.EditSession("Juhu  Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 5);

        var called = false;
        selection.addEventListener("changeCursor", function () {
            called = true;
        });

        selection.moveCursorTo(0, 6);
        assert.ok(called);
    },

    "test: calling setCursor with the same position should not fire an event": function () {
        var session = new AceAjax.EditSession("Juhu  Kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 5);

        var called = false;
        selection.addEventListener("changeCursor", function () {
            called = true;
        });

        selection.moveCursorTo(0, 5);
        assert.notOk(called);
    },

    "test: moveWordright should move past || and [": function () {
        var session = new AceAjax.EditSession("||foo[");
        var selection = session.getSelection();

        // Move behind ||foo
        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 0, 5);

        // Move behind [
        selection.moveCursorWordRight();
        assert.position(selection.getCursor(), 0, 6);
    },

    "test: moveWordLeft should move past || and [": function () {
        var session = new AceAjax.EditSession("||foo[");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 6);

        // Move behind [foo
        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 2);

        // Move behind ||
        selection.moveCursorWordLeft();
        assert.position(selection.getCursor(), 0, 0);
    },

    "test: move cursor to line start should move cursor to end of the indentation first": function () {
        var session = new AceAjax.EditSession("12\n    Juhu\n12");
        var selection = session.getSelection();

        selection.moveCursorTo(1, 6);
        selection.moveCursorLineStart();

        assert.position(selection.getCursor(), 1, 4);
    },

    "test: move cursor to line start when the cursor is at the end of the indentation should move cursor to column 0": function () {
        var session = new AceAjax.EditSession("12\n    Juhu\n12");
        var selection = session.getSelection();

        selection.moveCursorTo(1, 4);
        selection.moveCursorLineStart();

        assert.position(selection.getCursor(), 1, 0);
    },

    "test: move cursor to line start when the cursor is at column 0 should move cursor to the end of the indentation": function () {
        var session = new AceAjax.EditSession("12\n    Juhu\n12");
        var selection = session.getSelection();

        selection.moveCursorTo(1, 0);
        selection.moveCursorLineStart();

        assert.position(selection.getCursor(), 1, 4);
    },

    // Eclipse style
    "test: move cursor to line start when the cursor is before the initial indentation should move cursor to the end of the indentation": function () {
        var session = new AceAjax.EditSession("12\n    Juhu\n12");
        var selection = session.getSelection();

        selection.moveCursorTo(1, 2);
        selection.moveCursorLineStart();

        assert.position(selection.getCursor(), 1, 4);
    },

    "test go line up when in the middle of the first line should go to document start": function () {
        var session = new AceAjax.EditSession("juhu kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 4);
        selection.moveCursorUp();

        assert.position(selection.getCursor(), 0, 0);
    },

    "test: (wrap) go line up when in the middle of the first line should go to document start": function () {
        var session = new AceAjax.EditSession("juhu kinners");
        session.setWrapLimitRange(5, 5);
        session.adjustWrapLimit(80);

        var selection = session.getSelection();

        selection.moveCursorTo(0, 4);
        selection.moveCursorUp();

        assert.position(selection.getCursor(), 0, 0);
    },


    "test go line down when in the middle of the last line should go to document end": function () {
        var session = new AceAjax.EditSession("juhu kinners");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 4);
        selection.moveCursorDown();

        assert.position(selection.getCursor(), 0, 12);
    },

    "test (wrap) go line down when in the middle of the last line should go to document end": function () {
        var session = new AceAjax.EditSession("juhu kinners");
        session.setWrapLimitRange(8, 8);
        session.adjustWrapLimit(80);

        var selection = session.getSelection();

        selection.moveCursorTo(0, 10);
        selection.moveCursorDown();

        assert.position(selection.getCursor(), 0, 12);
    },

    "test go line up twice and then once down when in the second should go back to the previous column": function () {
        var session = new AceAjax.EditSession("juhu\nkinners");
        var selection = session.getSelection();

        selection.moveCursorTo(1, 4);
        selection.moveCursorUp();
        selection.moveCursorUp();
        selection.moveCursorDown();

        assert.position(selection.getCursor(), 1, 4);
    },

    "test (keyboard navigation) when curLine is not EOL and targetLine is all whitespace new column should be current column": function () {
        var session = new AceAjax.EditSession("function (a) {\n\
  \n\
}");
        var selection = session.getSelection();

        selection.moveCursorTo(2, 0);
        selection.moveCursorUp();

        assert.position(selection.getCursor(), 1, 0);
    },

    "test (keyboard navigation) when curLine is EOL and targetLine is shorter dan current column, new column should be targetLine's EOL": function () {
        var session = new AceAjax.EditSession("function (a) {\n\
  \n\
}");
        var selection = session.getSelection();

        selection.moveCursorTo(0, 14);
        selection.moveCursorDown();

        assert.position(selection.getCursor(), 1, 4);
    }
};
