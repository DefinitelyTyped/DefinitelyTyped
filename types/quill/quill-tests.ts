function test_quill() {
    var quillEditor = new Quill('#editor', {
        modules:
        {
            "toolbar": { container: "#toolbar" }
        },
        theme: 'snow'
    });
}

function test_deleteText() {
    var quillEditor = new Quill('#editor');
    quillEditor.deleteText(0, 10);
}

function test_disable() {
    let quillEditor = new Quill('#Editor');
    quillEditor.disable();
}

function test_enable() {
    let quillEditor = new Quill('#Editor');
    quillEditor.enable();
}

function test_enable_false() {
    let quillEditor = new Quill('#Editor');
    quillEditor.enable(false);
}

function test_getContents() {
    var quillEditor = new Quill('#editor');
    var delta: Quill.DeltaStatic = quillEditor.getContents();
}

function test_getLength() {
    var quillEditor = new Quill('#editor');
    var num: number = quillEditor.getLength();
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

function test_insertText() {
    var quillEditor = new Quill('#editor');
    quillEditor.insertText(0, "Hello World");
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

function test_formatLine1() {
    var quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, 'api');
}

function test_formatLine2() {
    var quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, 'align', 'right');
}

function test_formatLine3() {
    var quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, {
            'align': 'right',
            'bold': false,
        });
}

function test_insertEmbed() {
    var quillEditor = new Quill('#editor');

    quillEditor.insertEmbed(10, 'image', 'http://com/images/cloud.png');
}

function test_updateContents() {
    var quillEditor = new Quill('#editor');
    quillEditor.updateContents(new Delta({
        ops: [
            { retain: 6 },        // Keep 'Hello '
            { delete: 5 },        // 'World' is deleted
            { insert: 'Quill' },  // Insert 'Quill'
            { retain: 1, attributes: { bold: true } }    // Apply bold to exclamation mark
        ]
    }));
}

function test_setContents() {
    var quillEditor = new Quill('#editor');

    quillEditor.setContents(new Delta({ ops: [
        { insert: 'Hello ' },
        { insert: 'World!', attributes: { bold: true } },
        { insert: '\n' }
    ]}));
}

function test_setText() {
    var quillEditor = new Quill('#editor');
    quillEditor.setText('Hello\n');
}


function test_getSelection() {
    var quillEditor = new Quill('#editor');

    var range = quillEditor.getSelection();
    if (range) {
        if (range.index == range.length) {
            console.log('User cursor is at index', range.index);
        } else {
            var text = quillEditor.getText(range.index, range.length);
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

function test_focus() {
    var quillEditor = new Quill('#editor');
    quillEditor.focus();
}

function test_getBounds() {
    var quillEditor = new Quill('#editor');
    quillEditor.setText('Hello\nWorld\n');
}

function test_getModule()
{
    var quillEditor = new Quill('#editor');

    var toolbar = quillEditor.getModule('toolbar');
}

function test_addContainer()
{
    var quillEditor = new Quill('#editor');
    quillEditor.addContainer('ql-custom');
}

function test_on_Events(){
    var textChangeHandler = function(newDelta: Quill.DeltaStatic, oldDelta: Quill.DeltaStatic, source: string) { };
    var selectionChangeHandler = function(newRange: Quill.RangeStatic, oldRange: Quill.RangeStatic, source: string) { };
    var editorChangeHandler = function(name: string, ...args: any[]) { };

    var quillEditor = new Quill('#editor');
    quillEditor
      .on('text-change', textChangeHandler)
      .off('text-change', textChangeHandler)
      .once('text-change', textChangeHandler)
      .on('selection-change', selectionChangeHandler)
      .off('selection-change', selectionChangeHandler)
      .once('selection-change', selectionChangeHandler)
      .on('editor-change', editorChangeHandler)
      .off('editor-change', editorChangeHandler)
      .once('editor-change', editorChangeHandler);
}

function test_PasteHTML()
{
    var quillEditor = new Quill('#editor');
    quillEditor.pasteHTML('<h1>Quill Rocks</h1>');
}

function test_PasteHTML2()
{
    var quillEditor = new Quill('#editor');
    quillEditor.pasteHTML(5, '<h1>Quill Rocks</h1>');
}

function test_DeltaChaining() {
    var delta = new Delta()
        .insert('Hello', { bold: true })
        .insert('World')
        .delete(5)
        .retain(5)
        .retain(5, { color: '#0c6' });

}

function test_DeltaFilter() {
    var delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    var text = delta.filter(function(op) {
        return typeof op.insert === 'string';
    }).map(function(op) {
        return op.insert;
    }).join('');
}

function test_DeltaForEach() {
    var delta = new Delta();
    delta.forEach(function(op) {
        console.log(op);
    });
}

function test_DeltaMap() {
    var delta = new Delta()
        .insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    var text = delta.map(function(op) {
      if (typeof op.insert === 'string') {
          return op.insert;
      } else {
          return '';
      }
    }).join('');
}

function test_DeltaPartition() {
    var delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    var results = delta.partition(function(op) {
        return typeof op.insert === 'string';
    });
    var passed = results[0];  // [{ insert: 'Hello', attributes: { bold: true }}, { insert: 'World'}]
    var failed = results[1];  // [{ insert: { image: 'https://octodex.github.com/images/labtocat.png' }}]
}

function test_DeltaReduce() {
    var delta = new Delta().insert('Hello', { bold: true })
                           .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
                           .insert('World!');

    var length = delta.reduce(function(length, op) {
      return length + (op.insert.length || 1);
    }, 0);
}

function test_DeltaSlice() {
    var delta = new Delta().insert('Hello', { bold: true }).insert(' World');

    // {
    //   ops: [
    //     { insert: 'Hello', attributes: { bold: true } },
    //     { insert: ' World' }
    //   ]
    // }
    var copy = delta.slice();
    console.log(copy.ops);

    // { ops: [{ insert: 'World' }] }
    var world = delta.slice(6);
    console.log(world.ops);

    // { ops: [{ insert: ' ' }] }
    var space = delta.slice(5, 6);
    console.log(space.ops);
}

function test_DeltaCompose() {
    var a = new Delta().insert('abc');
    var b = new Delta().retain(1).delete(1);

    var composed = a.compose(b);  // composed == new Delta().insert('ac');
}

function test_DeltaDiff() {
    var a = new Delta().insert('Hello');
    var b = new Delta().insert('Hello!');

    var diff = a.diff(b);  // { ops: [{ retain: 5 }, { insert: '!' }] }
                           // a.compose(diff) == b
    var diff2 = a.diff(b, 0);  // { ops: [{ retain: 5 }, { insert: '!' }] }
                               // a.compose(diff) == b
}

function test_DeltaEachLine() {
    var delta = new Delta().insert('Hello\n\n')
                           .insert('World')
                           .insert({ image: 'octocat.png' })
                           .insert('\n', { align: 'right' })
                           .insert('!');

    delta.eachLine(function(line, attributes, i) {
        console.log(line, attributes, i);
        // Can return false to exit loop early
    });
    // Should log:
    // { ops: [{ insert: 'Hello' }] }, {}, 0
    // { ops: [] }, {}, 1
    // { ops: [{ insert: 'World' }, { insert: { image: 'octocat.png' } }] }, { align: 'right' }, 2
    // { ops: [{ insert: '!' }] }, {}, 3
}

function test_DeltaTransform() {
    var a = new Delta().insert('a');
    var b = new Delta().insert('b').retain(5).insert('c');

    var d1: Quill.DeltaStatic = a.transform(b, true);  // new Delta().retain(1).insert('b').retain(5).insert('c');
    var d2: Quill.DeltaStatic = a.transform(b, false); // new Delta().insert('b').retain(6).insert('c');
    var n1: number = a.transform(5);

}

function test_DeltatransformPosition() {
    var delta = new Delta().retain(5).insert('a');
    var n1: number = delta.transformPosition(4); // 4
    var n2: number = delta.transformPosition(5); // 6
}
