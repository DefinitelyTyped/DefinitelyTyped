/// <reference path="../ace.d.ts" />

var assert: any;
var exports = {

    setUp: function(next) {
        this.session1 = new AceAjax.EditSession(["abc", "def"]);
        this.session2 = new AceAjax.EditSession(["ghi", "jkl"]);


        var editor = new AceAjax.Editor(null);
        next();
    } ,

    "test: change document": function() {
        var editor = new AceAjax.Editor(null);

        editor.setSession(this.session1);
        assert.equal(editor.getSession(), this.session1);

        editor.setSession(this.session2);
        assert.equal(editor.getSession(), this.session2);
    } ,

    "test: only changes to the new document should have effect": function () {
        var editor = new AceAjax.Editor(null);

        var called = false;
        editor.onDocumentChange = function () {
            called = true;
        };

        editor.setSession(this.session1);
        editor.setSession(this.session2);

        this.session1.duplicateLines(0, 0);
        assert.notOk(called);

        this.session2.duplicateLines(0, 0);
        assert.ok(called);
    } ,

    "test: should use cursor of new document": function () {
        var editor = new AceAjax.Editor(null);

        this.session1.getSelection().moveCursorTo(0, 1);
        this.session2.getSelection().moveCursorTo(1, 0);

        editor.setSession(this.session1);
        assert.position(editor.getCursorPosition(), 0, 1);

        editor.setSession(this.session2);
        assert.position(editor.getCursorPosition(), 1, 0);
    } ,

    "test: only changing the cursor of the new doc should not have an effect": function () {
        var editor = new AceAjax.Editor(null);

        editor.onCursorChange = function () {
            called = true;
        };

        editor.setSession(this.session1);
        editor.setSession(this.session2);
        assert.position(editor.getCursorPosition(), 0, 0);

        var called = false;
        this.session1.getSelection().moveCursorTo(0, 1);
        assert.position(editor.getCursorPosition(), 0, 0);
        assert.notOk(called);

        this.session2.getSelection().moveCursorTo(1, 1);
        assert.position(editor.getCursorPosition(), 1, 1);
        assert.ok(called);
    } ,

    "test: should use selection of new document": function () {
        var editor = new AceAjax.Editor(null);

        this.session1.getSelection().selectTo(0, 1);
        this.session2.getSelection().selectTo(1, 0);

        editor.setSession(this.session1);
        assert.position(editor.getSelection().getSelectionLead(), 0, 1);

        editor.setSession(this.session2);
        assert.position(editor.getSelection().getSelectionLead(), 1, 0);
    } ,

    "test: only changing the selection of the new doc should not have an effect": function () {
        var editor = new AceAjax.Editor(null);

        editor.onSelectionChange = function () {
            called = true;
        };

        editor.setSession(this.session1);
        editor.setSession(this.session2);
        assert.position(editor.getSelection().getSelectionLead(), 0, 0);

        var called = false;
        this.session1.getSelection().selectTo(0, 1);
        assert.position(editor.getSelection().getSelectionLead(), 0, 0);
        assert.notOk(called);

        this.session2.getSelection().selectTo(1, 1);
        assert.position(editor.getSelection().getSelectionLead(), 1, 1);
        assert.ok(called);
    } ,

    "test: should use mode of new document": function () {
        var editor = new AceAjax.Editor(null);

        editor.onChangeMode = function () {
            called = true;
        };
        editor.setSession(this.session1);
        editor.setSession(this.session2);

        var called = false;
        this.session1.setMode(new Text());
        assert.notOk(called);

        this.session2.setMode(null);
        assert.ok(called);
    } ,

    "test: should use stop worker of old document": function (next) {
        var editor = new AceAjax.Editor(null);

        var self = this;

        // 1. Open an editor and set the session to CssMode
        self.editor.setSession(self.session1);
        self.session1.setMode(null);

        // 2. Add a line or two of valid CSS.
        self.session1.setValue("DIV { color: red; }");

        // 3. Clear the session value.
        self.session1.setValue("");

        // 4. Set the session to HtmlMode
        self.session1.setMode(null);

        // 5. Try to type valid HTML
        self.session1.insert({ row: 0, column: 0 }, "<html></html>");

        setTimeout(function () {
            assert.equal(Object.keys(self.session1.getAnnotations()).length, 0);
            next();
        }, 600);
    }
};