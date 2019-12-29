import CodeMirror = require('codemirror');

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

const myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode: "javascript",
    extraKeys: {
        Enter: (cm) => { console.log("save"); },
        Esc: (cm) => { return CodeMirror.Pass; }
    }
});

// $ExpectError
const myCodeMirror2_1: CodeMirror.Editor = CodeMirror(document.body, {
    extraKeys: {
        "Shift-Enter": (cm) => { return 42; }  // not a valid return value
    }
});

const range = myCodeMirror2.findWordAt(CodeMirror.Pos(0, 2));
const anchor = range.anchor;
const head = range.head;
const from = range.from();
const to = range.to();

const myTextArea: HTMLTextAreaElement = undefined!;
const myCodeMirror3: CodeMirror.Editor = CodeMirror(function (elt) {
    myTextArea.parentNode!.replaceChild(elt, myTextArea);
}, { value: myTextArea.value });

const myCodeMirror4: CodeMirror.Editor = CodeMirror.fromTextArea(myTextArea);

const doc: CodeMirror.Doc = new CodeMirror.Doc('text');
const doc2: CodeMirror.Doc = CodeMirror(document.body).getDoc();

const lintStateOptions: CodeMirror.LintStateOptions = {
    async: true,
    hasGutters: true
};

const asyncLintOptions: CodeMirror.LintOptions = {
    async: true,
    hasGutters: true,
    getAnnotations: (content: string,
                     updateLintingCallback: CodeMirror.UpdateLintingCallback,
                     options: CodeMirror.LintStateOptions,
                     codeMirror: CodeMirror.Editor) => {}
};

const syncLintOptions: CodeMirror.LintOptions = {
    async: false,
    hasGutters: true,
    getAnnotations: (content: string,
                     options: CodeMirror.LintStateOptions,
                     codeMirror: CodeMirror.Editor): CodeMirror.Annotation[] => { return []; }
};

const updateLintingCallback: CodeMirror.UpdateLintingCallback = (codeMirror: CodeMirror.Editor,
                                                               annotations: CodeMirror.Annotation[]) => {};

const annotation: CodeMirror.Annotation = {
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

myCodeMirror.getCursor();
myCodeMirror.getCursor('from');
myCodeMirror.setCursor({ ch: 1, line: 0 });

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

let htmlElement1 = document.createElement('div');
let htmlElement2 = document.createElement('div');
let widget1 = myCodeMirror.addLineWidget(1, htmlElement1, {});
let widget2 = doc.addLineWidget(1, htmlElement2, {});
widget1.clear();
widget2.clear();
htmlElement1.remove();
htmlElement2.remove();

CodeMirror.commands.newlineAndIndent(myCodeMirror);

let stringStream = new CodeMirror.StringStream("var myEditor;");

// Call a method from the CodeMirror.Doc interface to confirm a CodeMirror.Editor extends it
myCodeMirror.getCursor();
