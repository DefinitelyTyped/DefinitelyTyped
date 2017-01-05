var renderer: AceAjax.VirtualRenderer;
var mode: any;
const acePlaceholderTests = {

    "test: simple at the end appending of text": function () {
        var session = new AceAjax.EditSession("var a = 10;\nconsole.log(a, a);", mode);
        var editor = new AceAjax.Editor(renderer, session);

        new AceAjax.PlaceHolder(session, 1, { row: 0, column: 4 }, [{ row: 1, column: 12 }, { row: 1, column: 15 }]);

        editor.moveCursorTo(0, 5);
        editor.insert('b');
        assert.equal(session.doc.getValue(), "var ab = 10;\nconsole.log(ab, ab);");
        editor.insert('cd');
        assert.equal(session.doc.getValue(), "var abcd = 10;\nconsole.log(abcd, abcd);");
        editor.remove('left');
        editor.remove('left');
        editor.remove('left');
        assert.equal(session.doc.getValue(), "var a = 10;\nconsole.log(a, a);");
    },

    "test: inserting text outside placeholder": function () {
        var session = new AceAjax.EditSession("var a = 10;\nconsole.log(a, a);\n", mode);
        var editor = new AceAjax.Editor(renderer, session);

        new AceAjax.PlaceHolder(session, 1, { row: 0, column: 4 }, [{ row: 1, column: 12 }, { row: 1, column: 15 }]);

        editor.moveCursorTo(2, 0);
        editor.insert('b');
        assert.equal(session.doc.getValue(), "var a = 10;\nconsole.log(a, a);\nb");
    },

    "test: insertion at the beginning": function (next) {
        var session = new AceAjax.EditSession("var a = 10;\nconsole.log(a, a);", mode);
        var editor = new AceAjax.Editor(renderer, session);

        var p = new AceAjax.PlaceHolder(session, 1, { row: 0, column: 4 }, [{ row: 1, column: 12 }, { row: 1, column: 15 }]);

        editor.moveCursorTo(0, 4);
        editor.insert('$');
        assert.equal(session.doc.getValue(), "var $a = 10;\nconsole.log($a, $a);");
        editor.moveCursorTo(0, 4);
        // Have to put this in a setTimeout because the anchor is only fixed later.
        setTimeout(function () {
            editor.insert('v');
            assert.equal(session.doc.getValue(), "var v$a = 10;\nconsole.log(v$a, v$a);");
            next();
        }, 10);
    },

    "test: detaching placeholder": function () {
        var session = new AceAjax.EditSession("var a = 10;\nconsole.log(a, a);", mode);
        var editor = new AceAjax.Editor(renderer, session);

        var p = new AceAjax.PlaceHolder(session, 1, { row: 0, column: 4 }, [{ row: 1, column: 12 }, { row: 1, column: 15 }]);

        editor.moveCursorTo(0, 5);
        editor.insert('b');
        assert.equal(session.doc.getValue(), "var ab = 10;\nconsole.log(ab, ab);");
        p.detach();
        editor.insert('cd');
        assert.equal(session.doc.getValue(), "var abcd = 10;\nconsole.log(ab, ab);");
    },

    "test: events": function () {
        var session = new AceAjax.EditSession("var a = 10;\nconsole.log(a, a);", mode);
        var editor = new AceAjax.Editor(renderer, session);

        var p = new AceAjax.PlaceHolder(session, 1, { row: 0, column: 4 }, [{ row: 1, column: 12 }, { row: 1, column: 15 }]);
        var entered = false;
        var left = false;
        p.on("cursorEnter", function () {
            entered = true;
        });
        p.on("cursorLeave", function () {
            left = true;
        });

        editor.moveCursorTo(0, 0);
        editor.moveCursorTo(0, 4);
        p.onCursorChange(); // Have to do this by hand because moveCursorTo doesn't trigger the event
        assert.ok(entered);
        editor.moveCursorTo(1, 0);
        p.onCursorChange(); // Have to do this by hand because moveCursorTo doesn't trigger the event
        assert.ok(left);
    },

    "test: cancel": function (next) {
        var session = new AceAjax.EditSession("var a = 10;\nconsole.log(a, a);", mode);
        session.setUndoManager(new AceAjax.UndoManager());
        var editor = new AceAjax.Editor(renderer, session);
        var p = new AceAjax.PlaceHolder(session, 1, { row: 0, column: 4 }, [{ row: 1, column: 12 }, { row: 1, column: 15 }]);

        editor.moveCursorTo(0, 5);
        editor.insert('b');
        editor.insert('cd');
        editor.remove('left');
        assert.equal(session.doc.getValue(), "var abc = 10;\nconsole.log(abc, abc);");
        // Wait a little for the changes to enter the undo stack
        setTimeout(function () {
            p.cancel();
            assert.equal(session.doc.getValue(), "var a = 10;\nconsole.log(a, a);");
            next();
        }, 80);
    }
};
