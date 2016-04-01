/// <reference path="../ace.d.ts" />

var assert: any;
var editor: any;
var renderer: any;
var exec = function (name?, times?, args?) {
    do {
        editor.commands.exec(name, editor, args);
    } while (times-- > 1)
};
var testRanges = function (str) {
    assert.equal(editor.selection.getAllRanges() + "", str + "");
}

var exports = {

        name: "ACE multi_select.js",

        "test: multiselect editing": function() {
            var doc = new AceAjax.EditSession([
                "w1.w2",
                "    wtt.w",
                "    wtt.w"
            ]);
            editor = new AceAjax.Editor(renderer, doc);

            editor.navigateFileEnd();
            exec("selectMoreBefore", 3);
            assert.ok(editor.inMultiSelectMode);
            assert.equal(editor.selection.getAllRanges().length, 4);

            var newLine = editor.session.getDocument().getNewLineCharacter();
            var copyText = "wwww".split("").join(newLine);
            assert.equal(editor.getCopyText(), copyText);
            exec("insertstring", 1, "a");
            exec("backspace", 2);
            assert.equal(editor.session.getValue(), "w1.w2\ntt\ntt");
            assert.equal(editor.selection.getAllRanges().length, 4);

            exec("selectall");
            assert.ok(!editor.inMultiSelectMode);
            //assert.equal(editor.selection.getAllRanges().length, 1);
        } ,

    "test: multiselect navigation": function() {
        var doc = new AceAjax.EditSession([
            "w1.w2",
            "    wtt.w",
            "    wtt.we"
        ]);
        editor = new AceAjax.Editor(renderer, doc);

        editor.selectMoreLines(1);
        testRanges("Range: [0/0] -> [0/0],Range: [1/0] -> [1/0]");
        assert.ok(editor.inMultiSelectMode);

        exec("golinedown");
        exec("gotolineend");
        testRanges("Range: [1/9] -> [1/9],Range: [2/10] -> [2/10]");
        exec("selectwordleft");

        testRanges("Range: [1/8] -> [1/9],Range: [2/8] -> [2/10]");
        exec("golinedown", 2);
        assert.ok(!editor.inMultiSelectMode);
    } ,

    "test: multiselect session change": function() {
        var doc = new AceAjax.EditSession([
            "w1.w2",
            "    wtt.w",
            "    wtt.w"
        ]);
        editor = new AceAjax.Editor(renderer, doc);

        editor.selectMoreLines(1)
        testRanges("Range: [0/0] -> [0/0],Range: [1/0] -> [1/0]");
        assert.ok(editor.inMultiSelectMode);

        var doc2 = new AceAjax.EditSession(["w1"]);
        editor.setSession(doc2);
        assert.ok(!editor.inMultiSelectMode);

        editor.setSession(doc);
        assert.ok(editor.inMultiSelectMode);
    } ,

    "test: multiselect addRange": function() {
        var doc = new AceAjax.EditSession([
            "w1.w2",
            "    wtt.w",
            "    wtt.w"
        ]);
        editor = new AceAjax.Editor(renderer, doc);

        var selection = editor.selection;

        var range1 = new AceAjax.Range(0, 2, 0, 4);
        editor.selection.fromOrientedRange(range1);

        var range2 = new AceAjax.Range(0, 3, 0, 4);
        selection.addRange(range2);
        assert.ok(!editor.inMultiSelectMode);
        assert.ok(range2.isEqual(editor.selection.getRange()));

        var range3 = new AceAjax.Range(0, 1, 0, 1);
        selection.addRange(range3);
        assert.ok(editor.inMultiSelectMode);
        testRanges([range3, range2]);

        var range4 = new AceAjax.Range(0, 0, 4, 0);
        selection.addRange(range4);
        assert.ok(!editor.inMultiSelectMode);
    }
};
