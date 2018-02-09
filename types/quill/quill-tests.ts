import { Quill, Delta, DeltaStatic, RangeStatic, StringMap } from 'quill';
import { Blot } from 'parchment/src/blot/abstract/blot';

function test_quill() {
    const quillEditor = new Quill('#editor', {
        modules:
        {
            toolbar: { container: "#toolbar" }
        },
        theme: 'snow'
    });
}

function test_scroll() {
    const quillEditor = new Quill('#editor');
    const blot: Blot = quillEditor.scroll;
}

function test_deleteText() {
    const quillEditor = new Quill('#editor');
    quillEditor.deleteText(0, 10);
}

function test_disable() {
    const quillEditor = new Quill('#Editor');
    quillEditor.disable();
}

function test_enable() {
    const quillEditor = new Quill('#Editor');
    quillEditor.enable();
}

function test_enable_false() {
    const quillEditor = new Quill('#Editor');
    quillEditor.enable(false);
}

function test_getContents() {
    const quillEditor = new Quill('#editor');
    const delta: DeltaStatic = quillEditor.getContents();
}

function test_getLength() {
    const quillEditor = new Quill('#editor');
    const num: number = quillEditor.getLength();
}

function test_getText() {
    const quillEditor = new Quill('#editor');
    const strValue: string = quillEditor.getText();
}

function test_getText_StartingAt() {
    const quillEditor = new Quill('#editor');
    const strValue: string = quillEditor.getText(10);
}

function test_getText_substring() {
    const quillEditor = new Quill('#editor');
    const strValue: string = quillEditor.getText(0, 10);
}

function test_insertText() {
    const quillEditor = new Quill('#editor');
    quillEditor.insertText(0, "Hello World");
}

function test_formatText() {
    const quillEditor = new Quill('#editor');
    quillEditor.formatText(0, 5, 'bold', true);
}

function test_formatText2() {
    const quillEditor = new Quill('#editor');
    quillEditor.formatText(0, 5, {
        bold: false,
        color: 'rgb(0, 0, 255)'
    });
}

function test_formatLine1() {
    const quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, 'api');
}

function test_formatLine2() {
    const quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, 'align', 'right');
}

function test_formatLine3() {
    const quillEditor = new Quill('#editor');
    quillEditor.formatLine(1, 3, {
            align: 'right',
            bold: false,
        });
}

function test_insertEmbed() {
    const quillEditor = new Quill('#editor');
    quillEditor.insertEmbed(10, 'image', 'http://com/images/cloud.png');
}

function test_updateContents() {
    const quillEditor = new Quill('#editor');
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
    const quillEditor = new Quill('#editor');
    quillEditor.setContents(new Delta({ ops: [
        { insert: 'Hello ' },
        { insert: 'World!', attributes: { bold: true } },
        { insert: '\n' }
    ]}));
}

function test_setText() {
    const quillEditor = new Quill('#editor');
    quillEditor.setText('Hello\n');
}

function test_getSelection() {
    const quillEditor = new Quill('#editor');
    const range = quillEditor.getSelection();
    if (range) {
        if (range.index === range.length) {
            console.log('User cursor is at index', range.index);
        } else {
            const text = quillEditor.getText(range.index, range.length);
            console.log('User has highlighted: ', text);
        }
    } else {
        console.log('User cursor is not in editor');
    }
}

function test_setSelection() {
    const quillEditor = new Quill('#editor');
    quillEditor.setSelection(0, 5);
}

function test_focus() {
    const quillEditor = new Quill('#editor');
    quillEditor.focus();
}

function test_getBounds() {
    const quillEditor = new Quill('#editor');
    quillEditor.setText('Hello\nWorld\n');
}

function test_getModule() {
    const quillEditor = new Quill('#editor');
    const toolbar = quillEditor.getModule('toolbar');
}

function test_addContainer() {
    const quillEditor = new Quill('#editor');
    quillEditor.addContainer('ql-custom');
}

function test_on_Events() {
    const textChangeHandler = (newDelta: DeltaStatic, oldDelta: DeltaStatic, source: string) => { };
    const selectionChangeHandler = (newRange: RangeStatic, oldRange: RangeStatic, source: string) => { };
    const editorChangeHandler = (name: string, ...args: any[]) => { };

    const quillEditor = new Quill('#editor');
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

function test_PasteHTML() {
    const quillEditor = new Quill('#editor');
    quillEditor.pasteHTML('<h1>Quill Rocks</h1>');
}

function test_PasteHTML2() {
    const quillEditor = new Quill('#editor');
    quillEditor.pasteHTML(5, '<h1>Quill Rocks</h1>');
}

function test_DeltaChaining() {
    const delta = new Delta()
        .insert('Hello', { bold: true })
        .insert('World')
        .delete(5)
        .retain(5)
        .retain(5, { color: '#0c6' });
}

function test_DeltaFilter() {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    const text = delta
      .filter((op: any) => typeof op.insert === 'string')
      .map((op: any) => op.insert)
      .join('');
}

function test_DeltaForEach() {
    const delta = new Delta();
    delta.forEach((op: any) => console.log(op));
}

function test_DeltaMap() {
    const delta = new Delta()
        .insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    const text = delta
      .map((op: any) => typeof op.insert === 'string' ? op.insert : '')
      .join('');
}

function test_DeltaPartition() {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    const results = delta.partition((op: any) => typeof op.insert === 'string');
    const passed = results[0];  // [{ insert: 'Hello', attributes: { bold: true }}, { insert: 'World'}]
    const failed = results[1];  // [{ insert: { image: 'https://octodex.github.com/images/labtocat.png' }}]
}

function test_DeltaReduce() {
    const delta = new Delta().insert('Hello', { bold: true })
                           .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
                           .insert('World!');

    const length = delta.reduce((length: number, op: any) => length + (op.insert.length || 1), 0);
}

function test_DeltaSlice() {
    const delta = new Delta().insert('Hello', { bold: true }).insert(' World');

    // {
    //   ops: [
    //     { insert: 'Hello', attributes: { bold: true } },
    //     { insert: ' World' }
    //   ]
    // }
    const copy = delta.slice();
    console.log(copy.ops);

    // { ops: [{ insert: 'World' }] }
    const world = delta.slice(6);
    console.log(world.ops);

    // { ops: [{ insert: ' ' }] }
    const space = delta.slice(5, 6);
    console.log(space.ops);
}

function test_DeltaCompose() {
    const a = new Delta().insert('abc');
    const b = new Delta().retain(1).delete(1);

    const composed = a.compose(b);  // composed == new Delta().insert('ac');
}

function test_DeltaDiff() {
    const a = new Delta().insert('Hello');
    const b = new Delta().insert('Hello!');

    const diff = a.diff(b);  // { ops: [{ retain: 5 }, { insert: '!' }] }
                           // a.compose(diff) == b
    const diff2 = a.diff(b, 0);  // { ops: [{ retain: 5 }, { insert: '!' }] }
                               // a.compose(diff) == b
}

function test_DeltaEachLine() {
    const delta = new Delta().insert('Hello\n\n')
                           .insert('World')
                           .insert({ image: 'octocat.png' })
                           .insert('\n', { align: 'right' })
                           .insert('!');

    delta.eachLine((line: DeltaStatic, attributes: StringMap, i: number) => console.log(line, attributes, i));
    // Should log:
    // { ops: [{ insert: 'Hello' }] }, {}, 0
    // { ops: [] }, {}, 1
    // { ops: [{ insert: 'World' }, { insert: { image: 'octocat.png' } }] }, { align: 'right' }, 2
    // { ops: [{ insert: '!' }] }, {}, 3
}

function test_DeltaTransform() {
    const a = new Delta().insert('a');
    const b = new Delta().insert('b').retain(5).insert('c');

    const d1: DeltaStatic = a.transform(b, true);  // new Delta().retain(1).insert('b').retain(5).insert('c');
    const d2: DeltaStatic = a.transform(b, false); // new Delta().insert('b').retain(6).insert('c');
    const n1: number = a.transform(5);
    const n2: number = a.transform(5, true);
    const n3: number = a.transform(5, false);
}

function test_DeltatransformPosition() {
    const delta = new Delta().retain(5).insert('a');
    const n1: number = delta.transformPosition(4); // 4
    const n2: number = delta.transformPosition(5); // 6
    const n3: number = delta.transformPosition(5, true);
    const n4: number = delta.transformPosition(5, false);
}
