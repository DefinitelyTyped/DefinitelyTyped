/// <reference path="quill.d.ts" />
/// <reference path="../requirejs/require.d.ts"/>

//export var Quill = require("quill");

function test_quill() {

    var quillEditor = new Quill('#editor', {
        modules:
        {
            "toolbar": { container: "#toolbar" }
        },
        theme: 'snow'
    });
}

function test_getText() {
    var quillEditor = new Quill('#editor');
    var strValue: string = quillEditor.getText();
}

function test_getText_StartingAt() {
    var quillEditor = new Quill('#editor');
    var strValue: string = quillEditor.getText(10);
}

function test_getText_substring() {
    var quillEditor = new Quill('#editor');
    var strValue: string = quillEditor.getText(0, 10);
}

function test_getLength() {
    var quillEditor = new Quill('#editor');
    var num: number = quillEditor.getLength();
}

function test_getContents() {
    var quillEditor = new Quill('#editor');
    var delta: DeltaStatic = quillEditor.getContents();
}

function test_insertText() {
    var quillEditor = new Quill('#editor');
    quillEditor.insertText(0, "Hello World");
}

function test_deleteText() {
    var quillEditor = new Quill('#editor');
    quillEditor.deleteText(0, 10);
}

function test_formatText() {
    var quillEditor = new Quill('#editor');
    quillEditor.formatText(0, 5, 'bold', true);
}

function test_formatText2() {
    var quillEditor = new Quill('#editor');

    quillEditor.formatText(0, 5, {
        'bold': false,
        'color': 'rgb(0, 0, 255)'
    });
}

function test_formatLine() {
    var quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, 'align', 'right');
}

function test_insertEmbed() {
    var quillEditor = new Quill('#editor');

    quillEditor.insertEmbed(10, 'image', 'http://quilljs.com/images/cloud.png');
}

function test_updateContents() {
    var quillEditor = new Quill('#editor');
    quillEditor.updateContents({
        ops: [
            { retain: 6 },        // Keep 'Hello '
            { delete: 5 },        // 'World' is deleted
            { insert: 'Quill' },  // Insert 'Quill'
            { retain: 1, attributes: { bold: true } }    // Apply bold to exclamation mark
        ]
    });
}

function test_setContents() {
    var quillEditor = new Quill('#editor');

    quillEditor.setContents([
        { insert: 'Hello ' },
        { insert: 'World!', attributes: { bold: true } },
        { insert: '\n' }
    ]);
}

function test_setHTML() {
    var quillEditor = new Quill('#editor');

    quillEditor.setHTML('<div>Hello</div>');
}

function test_setText() {
    var quillEditor = new Quill('#editor');
    quillEditor.setText('Hello\n');
}


function test_getSelection() {
    var quillEditor = new Quill('#editor');

    var range = quillEditor.getSelection();
    if (range) {
        if (range.start == range.end) {
            console.log('User cursor is at index', range.start);
        } else {
            var text = quillEditor.getText(range.start, range.end);
            console.log('User has highlighted: ', text);
        }
    } else {
        console.log('User cursor is not in editor');
    }
}

function test_setSelection() {
    var quillEditor = new Quill('#editor');
    quillEditor.setSelection(0, 5);
}

function test_prepareFormat() {
    var quillEditor = new Quill('#editor');
    quillEditor.prepareFormat('bold', true);
}

function test_focus() {
    var quillEditor = new Quill('#editor');
    quillEditor.focus();
}

function test_getBounds() {
    var quillEditor = new Quill('#editor');
    quillEditor.setText('Hello\nWorld\n');
}

function test_addModule() {
    var quillEditor = new Quill('#editor');

    var toolbar = quillEditor.addModule('toolbar', {
        container: '#toolbar-container'
    });
}

function test_getModule()
{
    var quillEditor = new Quill('#editor');

    var toolbar = quillEditor.getModule('toolbar');
}


function test_addFormat()
{
    var quillEditor = new Quill('#editor');
    quillEditor.addFormat('strike', { tag: 'S', prepare: 'strikeThrough' });
}

function test_addContainer()
{
    var quillEditor = new Quill('#editor');
    quillEditor.addContainer('ql-custom');
}
