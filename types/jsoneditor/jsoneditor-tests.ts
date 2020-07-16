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

jsonEditor.collapseAll();
jsonEditor.destroy();
jsonEditor.expandAll();
jsonEditor.focus();
jsonEditor.set({ foo: 'bar' });
jsonEditor.setMode('text');
jsonEditor.setName('foo');
jsonEditor.setName();
jsonEditor.setSchema({});
jsonEditor.setText('{foo: 1}');
jsonEditor.get();
jsonEditor.getMode();
jsonEditor.getNodesByRange({ path: ['a', 'b'] }, { path: [1] });
jsonEditor.getSelection();
jsonEditor.getText();
jsonEditor.getTextSelection();
jsonEditor.refresh();
jsonEditor.update(null);
jsonEditor.updateText('');
