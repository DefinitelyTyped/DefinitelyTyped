/// <reference path="../ace.d.ts" />

exports = {
    "test: token iterator initialization in JavaScript document": function () {
        var lines = [
            "function foo(items) {",
            "    for (var i=0; i<items.length; i++) {",
            "        alert(items[i] + \"juhu\");",
            "    } // Real Tab.",
            "}"
        ];
        var session = new AceAjax.EditSession(lines.join("\n"), new JavaScriptMode());

        var iterator = new AceAjax.TokenIterator(session, 0, 0);
        assert.equal(iterator.getCurrentToken().value, "function");
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        iterator.stepForward();
        assert.equal(iterator.getCurrentToken().value, " ");
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 8);

        var iterator = new AceAjax.TokenIterator(session, 0, 4);
        assert.equal(iterator.getCurrentToken().value, "function");
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        iterator.stepForward();
        assert.equal(iterator.getCurrentToken().value, " ");
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 8);

        var iterator = new AceAjax.TokenIterator(session, 2, 18);
        assert.equal(iterator.getCurrentToken().value, "items");
        assert.equal(iterator.getCurrentTokenRow(), 2);
        assert.equal(iterator.getCurrentTokenColumn(), 14);

        iterator.stepForward();
        assert.equal(iterator.getCurrentToken().value, "[");
        assert.equal(iterator.getCurrentTokenRow(), 2);
        assert.equal(iterator.getCurrentTokenColumn(), 19);

        var iterator = new AceAjax.TokenIterator(session, 4, 0);
        assert.equal(iterator.getCurrentToken().value, "}");
        assert.equal(iterator.getCurrentTokenRow(), 4);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        iterator.stepBackward();
        assert.equal(iterator.getCurrentToken().value, "// Real Tab.");
        assert.equal(iterator.getCurrentTokenRow(), 3);
        assert.equal(iterator.getCurrentTokenColumn(), 6);

        var iterator = new AceAjax.TokenIterator(session, 5, 0);
        assert.equal(iterator.getCurrentToken(), null);
    },

    "test: token iterator initialization in text document": function () {
        var lines = [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
            "sed do eiusmod tempor incididunt ut labore et dolore magna",
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            "ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ];
        var session = new AceAjax.EditSession(lines.join("\n"));

        var iterator = new AceAjax.TokenIterator(session, 0, 0);
        assert.equal(iterator.getCurrentToken().value, lines[0]);
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        var iterator = new AceAjax.TokenIterator(session, 0, 4);
        assert.equal(iterator.getCurrentToken().value, lines[0]);
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        var iterator = new AceAjax.TokenIterator(session, 2, 18);
        assert.equal(iterator.getCurrentToken().value, lines[2]);
        assert.equal(iterator.getCurrentTokenRow(), 2);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        var iterator = new AceAjax.TokenIterator(session, 3, lines[3].length - 1);
        assert.equal(iterator.getCurrentToken().value, lines[3]);
        assert.equal(iterator.getCurrentTokenRow(), 3);
        assert.equal(iterator.getCurrentTokenColumn(), 0);

        var iterator = new AceAjax.TokenIterator(session, 4, 0);
        assert.equal(iterator.getCurrentToken(), null);
    },

    "test: token iterator step forward in JavaScript document": function () {
        var lines = [
            "function foo(items) {",
            "    for (var i=0; i<items.length; i++) {",
            "        alert(items[i] + \"juhu\");",
            "    } // Real Tab.",
            "}"
        ];
        var session = new AceAjax.EditSession(lines.join("\n"), new JavaScriptMode());

        var tokens = [];
        var len = session.getLength();
        for (var i = 0; i < len; i++)
            tokens = tokens.concat(session.getTokens(i));

        var iterator = new AceAjax.TokenIterator(session, 0, 0);
        for (var i = 1; i < tokens.length; i++)
            assert.equal(iterator.stepForward(), tokens[i]);
        assert.equal(iterator.stepForward(), null);
        assert.equal(iterator.getCurrentToken(), null);
    },

    "test: token iterator step backward in JavaScript document": function () {
        var lines = [
            "function foo(items) {",
            "     for (var i=0; i<items.length; i++) {",
            "         alert(items[i] + \"juhu\");",
            "     } // Real Tab.",
            "}"
        ];
        var session = new AceAjax.EditSession(lines.join("\n"), new JavaScriptMode());

        var tokens = [];
        var len = session.getLength();
        for (var i = 0; i < len; i++)
            tokens = tokens.concat(session.getTokens(i));

        var iterator = new AceAjax.TokenIterator(session, 4, 0);
        for (var i = tokens.length - 2; i >= 0; i--)
            assert.equal(iterator.stepBackward(), tokens[i]);
        assert.equal(iterator.stepBackward(), null);
        assert.equal(iterator.getCurrentToken(), null);
    },

    "test: token iterator reports correct row and column": function () {
        var lines = [
            "function foo(items) {",
            "    for (var i=0; i<items.length; i++) {",
            "        alert(items[i] + \"juhu\");",
            "    } // Real Tab.",
            "}"
        ];
        var session = new AceAjax.EditSession(lines.join("\n"), new JavaScriptMode());

        var iterator = new AceAjax.TokenIterator(session, 0, 0);

        iterator.stepForward();
        iterator.stepForward();

        assert.equal(iterator.getCurrentToken().value, "foo");
        assert.equal(iterator.getCurrentTokenRow(), 0);
        assert.equal(iterator.getCurrentTokenColumn(), 9);

        iterator.stepForward();
        iterator.stepForward();
        iterator.stepForward();
        iterator.stepForward();
        iterator.stepForward();
        iterator.stepForward();
        iterator.stepForward();

        assert.equal(iterator.getCurrentToken().value, "for");
        assert.equal(iterator.getCurrentTokenRow(), 1);
        assert.equal(iterator.getCurrentTokenColumn(), 4);
    }
};
