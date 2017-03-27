

var doc = new CodeMirror.Doc('text');
var pos = new CodeMirror.Pos(2, 3);
CodeMirror.showHint(doc);
CodeMirror.showHint(doc, function (cm) {
    return {
        from: pos,
        list: ["one", "two"],
        to: pos
    };
});
CodeMirror.showHint(doc, function (cm) {
    return {
        from: pos,
        list: [
            {
                text: "disp1",
                render: function (el, self, data) {
                    ;
                }
            },
            {
                className: "class2",
                displayText: "disp2",
                from: pos,
                to: pos,
                text: "sometext"
            }
        ],
        to: pos
    };
});
var asyncHintFunc : CodeMirror.AsyncHintFunction =
    (doc: CodeMirror.Doc, callback: (hints: CodeMirror.Hints) => any) => {
        callback({
            from: pos,
            list: ["one", "two"],
            to: pos
        });
    };
asyncHintFunc.async = true;

doc.showHint({
    completeSingle: false,
    hint: asyncHintFunc
})
