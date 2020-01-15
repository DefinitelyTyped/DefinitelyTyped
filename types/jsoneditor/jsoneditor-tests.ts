import * as Ajv from 'ajv';
import JSONEditor, {JSONEditorMode, Node, JSONEditorOptions } from 'jsoneditor';

let options: JSONEditorOptions;
options = {};
options = {
    ace: ace,
    ajv: new Ajv({allErrors: true, verbose: true}),
    onChange() {},
    onEditable(node: Node) {
        return true;
    },
    onError(error: Error) {},
    onModeChange(newMode: JSONEditorMode, oldMode: JSONEditorMode) {},
    escapeUnicode: false,
    sortObjectKeys: true,
    history: true,
    mode: 'tree',
    modes: ['tree', 'view', 'form', 'code', 'text'],
    name: 'foo',
    schema: {},
    schemaRefs: { "otherSchema": {}},
    search: false,
    indentation: 2,
    theme: 'default'
};
options = {
    onEditable(node: Node) {
        return {field: true, value: false};
    }
};

let jsonEditor: JSONEditor;
jsonEditor = new JSONEditor(document.body);
jsonEditor = new JSONEditor(document.body, {});
jsonEditor = new JSONEditor(document.body, options, {foo: 'bar'});

jsonEditor.collapseAll();
jsonEditor.destroy();
jsonEditor.expandAll();
jsonEditor.focus();
jsonEditor.set({foo: 'bar'});
jsonEditor.setMode('text');
jsonEditor.setName('foo');
jsonEditor.setName();
jsonEditor.setSchema({});
jsonEditor.setText('{foo: 1}');
jsonEditor.format();
jsonEditor.compact();
jsonEditor.repair();

const json: any = jsonEditor.get();
const name: string = jsonEditor.getName();
const jsonString: string = jsonEditor.getText();
