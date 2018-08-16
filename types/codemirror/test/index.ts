import CodeMirror = require('codemirror');

var myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

var myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode: "javascript",
    extraKeys: {
        Enter: (cm) => { console.log("save"); },
        Esc: (cm) => { return CodeMirror.Pass; }
    }
});

// $ExpectError
var myCodeMirror2_1: CodeMirror.Editor = CodeMirror(document.body, {
    extraKeys: {
        "Shift-Enter": (cm) => { return 42; }  // not a valid return value
    }
});

var range = myCodeMirror2.findWordAt(CodeMirror.Pos(0, 2));
var anchor = range.anchor;
var head = range.head;
var from = range.from();
var to = range.to();

var myTextArea: HTMLTextAreaElement = undefined!;
var myCodeMirror3: CodeMirror.Editor = CodeMirror(function (elt) {
    myTextArea.parentNode!.replaceChild(elt, myTextArea);
}, { value: myTextArea.value });

var myCodeMirror4: CodeMirror.Editor = CodeMirror.fromTextArea(myTextArea);

var doc: CodeMirror.Doc = new CodeMirror.Doc('text');
var doc2: CodeMirror.Doc = CodeMirror(document.body).getDoc();

var lintStateOptions: CodeMirror.LintStateOptions = {
    async: true,
    hasGutters: true
};

var asyncLintOptions: CodeMirror.LintOptions = {
    async: true,
    hasGutters: true,
    getAnnotations: (content: string,
                     updateLintingCallback: CodeMirror.UpdateLintingCallback,
                     options: CodeMirror.LintStateOptions,
                     codeMirror: CodeMirror.Editor) => {}
};

var syncLintOptions: CodeMirror.LintOptions = {
    async: false,
    hasGutters: true,
    getAnnotations: (content: string,
                     options: CodeMirror.LintStateOptions,
                     codeMirror: CodeMirror.Editor): CodeMirror.Annotation[] => { return []; }
};

var updateLintingCallback: CodeMirror.UpdateLintingCallback = (codeMirror: CodeMirror.Editor,
                                                               annotations: CodeMirror.Annotation[]) => {};

var annotation: CodeMirror.Annotation = {
    from: {
        ch: 0,
        line: 0
    },
    to: CodeMirror.Pos(1),
    message: "test",
    severity: "warning"
};

myCodeMirror.getValue();
myCodeMirror.getValue("foo")
myCodeMirror.setValue("bar");

myCodeMirror.on(
  "renderLine",
  (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => { }
);

myCodeMirror.on(
  "beforeChange",
  (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => {
    // $ExpectError
    change.update();
    if (change.update != null) change.update();
  }
);

CodeMirror.registerHelper("lint", "javascript", {});

myCodeMirror.isReadOnly();
myCodeMirror.execCommand('selectAll');
