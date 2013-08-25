/// <reference path="../ace.d.ts" />

var assert: any;

function forceTokenize(session) {
    for (var i = 0, l = session.getLength(); i < l; i++)
        session.getTokens(i)
}

function testStates(session, states) {
    for (var i = 0, l = session.getLength(); i < l; i++)
        assert.equal(session.bgTokenizer.states[i], states[i])
    assert.ok(l == states.length)
}

var exports = {

    "test background tokenizer update on session change": function() {
        var doc = new AceAjax.EditSession([
            "/*",
            "*/",
            "var juhu"
        ]);
        doc.setMode("./mode/javascript")

        forceTokenize(doc)
        testStates(doc, ["comment", "start", "start"])

        doc.remove(new AceAjax.Range(0, 2, 1, 2))
        testStates(doc, [null, "start"])

        forceTokenize(doc)
        testStates(doc, ["comment", "comment"])

        doc.insert({ row: 0, column: 2 }, "\n*/")
        testStates(doc, [undefined, undefined, "comment"])

        forceTokenize(doc)
        testStates(doc, ["comment", "start", "start"])
    }
};
