import * as Ajv from 'ajv';
import JSONEditor, { JSONEditorMode, EditableNode, JSONEditorOptions, AutoCompleteOptions } from 'jsoneditor';

const autocomplete: AutoCompleteOptions = {
    caseSensitive: true,
    confirmKeys: [0],
    filter: 'start',
    getOptions: (text, path, type, editor) => [],
    trigger: 'keydown',
};
autocomplete.filter = input => true;

let options: JSONEditorOptions;
options = {};
options = {
    ace,
    ajv: new Ajv({ allErrors: true, verbose: true }),
    onChange() {},
    autocomplete,
    colorPicker: false,
    onEditable(node: EditableNode | {}) {
        return true;
    },
    limitDragging: true,
    onError(error: Error) {},
    onModeChange(newMode: JSONEditorMode, oldMode: JSONEditorMode) {},
    onValidate: json => [],
    onValidationError: errors => {
        return;
    },
    escapeUnicode: false,
    sortObjectKeys: true,
    history: true,
    mode: 'tree',
    modes: ['tree', 'view', 'form', 'code', 'text'],
    name: 'foo',
    schema: {},
    schemaRefs: { otherSchema: {} },
    search: false,
    indentation: 2,
    theme: 'default',
};
options = {
    onEditable(node: EditableNode | {}) {
        return { field: true, value: false };
    },
};

let jsonEditor: JSONEditor;
jsonEditor = new JSONEditor(document.body);
jsonEditor = new JSONEditor(document.body, {});
jsonEditor = new JSONEditor(document.body, options, { foo: 'bar' });

// $ExpectType void
jsonEditor.collapseAll();
// $ExpectType void
jsonEditor.destroy();
// $ExpectType void
jsonEditor.expandAll();
// $ExpectType void
jsonEditor.focus();
// $ExpectType void
jsonEditor.set({ foo: 'bar' });
// $ExpectType void
jsonEditor.setMode('text');
// $ExpectType void
jsonEditor.setName('foo');
// $ExpectType void
jsonEditor.setName();
// $ExpectType void
jsonEditor.setSchema({});
// $ExpectType void
jsonEditor.setText('{foo: 1}');
// $ExpectType any
jsonEditor.get();
// $ExpectType JSONEditorMode
jsonEditor.getMode();
// $ExpectType SerializableNode[]
jsonEditor.getNodesByRange({ path: ['a', 'b'] }, { path: [1] });
// $ExpectType { start: SerializableNode; end: SerializableNode; }
jsonEditor.getSelection();
// $ExpectType string
jsonEditor.getText();
// $ExpectType { start: SelectionPosition; end: SelectionPosition; text: string; }
jsonEditor.getTextSelection();
// $ExpectType void
jsonEditor.refresh();
// $ExpectType void
jsonEditor.update(null);
// $ExpectType void
jsonEditor.updateText('');
// $ExpectType Promise<readonly (SchemaValidationError | ParseError)[]>
jsonEditor.validate();
