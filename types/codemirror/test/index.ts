import CodeMirror = require('codemirror');

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

const myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    value: 'function myScript(){return 100;}\n',
    mode: 'javascript',
    extraKeys: {
        Enter: cm => {
            console.log('save');
        },
        Esc: cm => {
            return CodeMirror.Pass;
        },
    },
});

const myCodeMirror2_1: CodeMirror.Editor = CodeMirror(document.body, {
    extraKeys: {
        // $ExpectError
        'Shift-Enter': cm => {
            return 42;
        }, // not a valid return value
    },
});

const range = myCodeMirror2.findWordAt(CodeMirror.Pos(0, 2));
const anchor = range.anchor;
const head = range.head;
const from = range.from();
const to = range.to();

const myTextArea: HTMLTextAreaElement = undefined!;
const myCodeMirror3: CodeMirror.Editor = CodeMirror(
    elt => {
        myTextArea.parentNode!.replaceChild(elt, myTextArea);
    },
    { value: myTextArea.value },
);

const myCodeMirror4: CodeMirror.Editor = CodeMirror.fromTextArea(myTextArea);

const doc: CodeMirror.Doc = new CodeMirror.Doc('text');
doc.lineSeparator();
const doc2: CodeMirror.Doc = CodeMirror(document.body).getDoc();

myCodeMirror.getValue();
myCodeMirror.getValue('foo');
myCodeMirror.setValue('bar');

myCodeMirror.getCursor();
myCodeMirror.getCursor('from');
myCodeMirror.setCursor({ ch: 1, line: 0 });

myCodeMirror.on('renderLine', (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => {});

myCodeMirror.on('beforeChange', (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => {
    // $ExpectError
    change.update();
    if (change.update != null) change.update();
});

CodeMirror.registerHelper('lint', 'javascript', {});

myCodeMirror.isReadOnly();
myCodeMirror.execCommand('selectAll');

const htmlElement1 = document.createElement('div');
const htmlElement2 = document.createElement('div');
const widget1 = myCodeMirror.addLineWidget(1, htmlElement1, {});
const widget2 = doc.addLineWidget(1, htmlElement2, {});
widget1.clear();
widget2.clear();
htmlElement1.remove();
htmlElement2.remove();

CodeMirror.commands.newlineAndIndent(myCodeMirror);

const stringStream = new CodeMirror.StringStream('var myEditor;');

// Call a method from the CodeMirror.Doc interface to confirm a CodeMirror.Editor extends it
myCodeMirror.getCursor();

// Ensure marks come back with option values
myCodeMirror.markText(from, to, {
    readOnly: true,
    inclusiveLeft: true,
    inclusiveRight: false,
});

const textMarker = myCodeMirror.markText(
    { line: 6, ch: 26 },
    { line: 6, ch: 42 },
    {
        className: 'styled-background',
        attributes: {
            title: 'yellow text',
        },
    },
);
textMarker.clear();

const marks = myCodeMirror.getAllMarks();

// $ExpectType TextMarker<MarkerRange | Position>
const mark = marks[0];
