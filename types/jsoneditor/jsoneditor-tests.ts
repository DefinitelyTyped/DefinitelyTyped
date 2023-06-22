import * as Ajv from 'ajv';
import JSONEditor, { AutoCompleteOptions, EditableNode, JSONEditorMode, JSONEditorOptions } from 'jsoneditor';

const autocomplete: AutoCompleteOptions = {};

autocomplete.caseSensitive = undefined;
autocomplete.caseSensitive = true;

autocomplete.confirmKeys = undefined;
autocomplete.confirmKeys = [0];

autocomplete.filter = undefined;
autocomplete.filter = 'start';
autocomplete.filter = 'contain';
autocomplete.filter = input => true;

autocomplete.getOptions = undefined;
autocomplete.getOptions = (text, path, type, editor) => [];

autocomplete.trigger = undefined;
autocomplete.trigger = 'keydown';
autocomplete.trigger = 'focus';

const options: JSONEditorOptions = {};

options.ace = undefined;
options.ace = ace;

options.ajv = undefined;
options.ajv = new Ajv({ allErrors: true, verbose: true });

options.onChange = undefined;
options.onChange = () => {};

options.onChangeJSON = undefined;
options.onChangeJSON = json => {};

options.onChangeText = undefined;
options.onChangeText = (json: string) => {};

options.onClassName = undefined;
options.onClassName = obj => {
    // $ExpectType ReadonlyArray<string>
    obj.path;
    // $ExpectType string
    obj.field;
    // $ExpectType string
    obj.value;
    return '';
};
options.onClassName = obj => {
    // $ExpectType ReadonlyArray<string>
    obj.path;
    // $ExpectType string
    obj.field;
    // $ExpectType string
    obj.value;
    return undefined;
};

options.onExpand = undefined;
options.onExpand = obj => {
    // $ExpectType ReadonlyArray<string>
    obj.path;
    // $ExpectType boolean
    obj.isExpand;
    // $ExpectType boolean
    obj.recursive;
};

options.onEditable = undefined;
options.onEditable = (node: EditableNode | {}) => {
    return true;
};
options.onEditable = (node: EditableNode | {}) => {
    return { field: true, value: false };
};

options.onError = undefined;
options.onError = (error: Error) => {};

options.onModeChange = undefined;
options.onModeChange = (newMode: JSONEditorMode, oldMode: JSONEditorMode) => {};

options.onNodeName = undefined;
options.onNodeName = obj => {
    // $ExpectType ReadonlyArray<string>
    obj.path;
    // $ExpectType NodeType
    obj.type;
    // $ExpectType number
    obj.size;
    // $ExpectType any
    obj.value;
    return '';
};
options.onNodeName = obj => {
    // $ExpectType ReadonlyArray<string>
    obj.path;
    // $ExpectType NodeType
    obj.type;
    // $ExpectType number
    obj.size;
    // $ExpectType any
    obj.value;
    return undefined;
};

options.onValidate = undefined;
options.onValidate = json => [];
options.onValidate = json => new Promise(() => []);

options.onValidationError = undefined;
options.onValidationError = errors => {
    return;
};

options.onCreateMenu = undefined;
options.onCreateMenu = (menuItems, node) => {
    const menuItem = menuItems[0];
    // $ExpectType string
    menuItem.text;
    // $ExpectType string
    menuItem.title;
    // $ExpectType "separator" | undefined
    menuItem.type;
    // $ExpectType string
    menuItem.className;
    // $ExpectType MenuItem[] | undefined
    menuItem.submenu;
    // $ExpectType string | undefined
    menuItem.submenuTitle;
    // $ExpectType (() => void) | undefined
    menuItem.click;

    // $ExpectType MenuItemNodeType
    node.type;
    // $ExpectType ReadonlyArray<string>
    node.path;
    // $ExpectType readonly (readonly string[])[]
    node.paths;

    return menuItems;
};

options.escapeUnicode = undefined;
options.escapeUnicode = false;

options.sortObjectKeys = undefined;
options.sortObjectKeys = true;

options.limitDragging = undefined;
options.limitDragging = true;

options.history = undefined;
options.history = true;

options.mode = undefined;
options.mode = 'tree';

options.modes = undefined;
options.modes = ['tree', 'view', 'form', 'code', 'text'];

options.name = undefined;
options.name = 'foo';

options.schema = undefined;
options.schema = {};

options.schemaRefs = undefined;
options.schemaRefs = { otherSchema: {} };

options.allowSchemaSuggestions = undefined;
options.allowSchemaSuggestions = true;

options.search = undefined;
options.search = false;

options.indentation = undefined;
options.indentation = 2;

options.theme = undefined;
options.theme = 'default';

options.templates = undefined;
options.templates = [];
options.templates = [{ text: '', title: '', field: '', value: {} }];

options.autocomplete = undefined;
options.autocomplete = autocomplete;

options.mainMenuBar = undefined;
options.mainMenuBar = false;

options.navigationBar = undefined;
options.navigationBar = false;

options.statusBar = undefined;
options.statusBar = false;

options.onTextSelectionChange = undefined;
options.onTextSelectionChange = (start, end, text) => {
    // $ExpectType number
    start.row;
    // $ExpectType number
    start.column;
    // $ExpectType number
    end.row;
    // $ExpectType number
    end.column;
    // $ExpectType string
    text;
};

options.onSelectionChange = undefined;
options.onSelectionChange = (start, end) => {
    // $ExpectType JSONPath
    start.path;
    // $ExpectType any
    start.value;
    // $ExpectType JSONPath
    end.path;
    // $ExpectType any
    end.value;
};

options.onEvent = undefined;
options.onEvent = (node, event) => {
    // $ExpectType string
    node.field;
    // $ExpectType string | undefined
    node.value;
    // $ExpectType JSONPath
    node.path;
    // $ExpectType Event
    event;
};

options.onFocus = undefined;
options.onFocus = event => {
    // $ExpectType Event
    event;
};

options.onBlur = undefined;
options.onBlur = event => {
    // $ExpectType Event
    event;
};

options.colorPicker = undefined;
options.colorPicker = false;

options.onColorPicker = undefined;
options.onColorPicker = (parent, color, onChange) => {
    // $ExpectType HTMLElement
    parent;
    // $ExpectType string
    color;
    // $ExpectType (color: Color) => void
    onChange;
};

options.timestampTag = undefined;
options.timestampTag = false;
options.timestampTag = node => {
    // $ExpectType string
    node.field;
    // $ExpectType string
    node.value;
    // $ExpectType ReadonlyArray<string>
    node.path;

    return true;
};

options.timestampFormat = undefined;
options.timestampFormat = node => {
    // $ExpectType string
    node.field;
    // $ExpectType string
    node.value;
    // $ExpectType ReadonlyArray<string>
    node.path;

    return '';
};
options.timestampFormat = node => {
    // $ExpectType string
    node.field;
    // $ExpectType string
    node.value;
    // $ExpectType ReadonlyArray<string>
    node.path;

    return null;
};

options.language = undefined;
options.language = 'en';

options.languages = undefined;
options.languages = { 'pt-BR': { auto: 'Automático testing' }, en: { auto: 'Auto testing' } };

options.modalAnchor = undefined;
options.modalAnchor = new HTMLElement();

options.popupAnchor = undefined;
options.popupAnchor = new HTMLElement();

options.enableSort = undefined;
options.enableSort = false;

options.enableTransform = undefined;
options.enableTransform = false;

options.maxVisibleChilds = undefined;
options.maxVisibleChilds = 3;

options.createQuery = undefined;
options.createQuery = (json, queryOptions) => {
    // $ExpectType any
    json;

    if (queryOptions.filter) {
        // $ExpectType string
        queryOptions.filter.field;
        // $ExpectType "==" | "!=" | "<" | "<=" | ">" | ">="
        queryOptions.filter.relation;
        // $ExpectType string
        queryOptions.filter.value;
    }

    if (queryOptions.sort) {
        // $ExpectType string
        queryOptions.sort.field;

        queryOptions.sort.direction = 'asc';
        queryOptions.sort.direction = 'desc';
    }

    if (queryOptions.projection) {
        // $ExpectType string[]
        queryOptions.projection.fields;
    }

    return '';
};

options.executeQuery = undefined;
options.executeQuery = (json, query) => {
    // $ExpectType any
    json;
    // $ExpectType string
    query;
};

options.queryDescription = undefined;
options.queryDescription = '';

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
jsonEditor.expand({ path: [], isExpand: false, recursive: false });

// $ExpectType void
jsonEditor.focus();

// $ExpectType any
jsonEditor.get();

// $ExpectType JSONEditorMode
jsonEditor.getMode();

// $ExpectType string | undefined
jsonEditor.getName();

// $ExpectType SerializableNode[]
jsonEditor.getNodesByRange({ path: ['a', 'b'] }, { path: [1] });

// $ExpectType SerializableNode
jsonEditor.getSelection().start;
// $ExpectType SerializableNode
jsonEditor.getSelection().end;

// $ExpectType string
jsonEditor.getText();

// $ExpectType number
jsonEditor.getTextSelection().start.row;
// $ExpectType number
jsonEditor.getTextSelection().start.column;
// $ExpectType number
jsonEditor.getTextSelection().end.row;
// $ExpectType number
jsonEditor.getTextSelection().end.column;
// $ExpectType string
jsonEditor.getTextSelection().text;

// $ExpectType void
jsonEditor.refresh();

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
jsonEditor.setSelection({ path: ['a', 'b'] }, { path: [1] });

// $ExpectType void
jsonEditor.setText('{foo: 1}');

// $ExpectType void
jsonEditor.setTextSelection({ row: 0, column: 0 }, { row: 1, column: 1 });

// $ExpectType void
jsonEditor.update(null);

// $ExpectType void
jsonEditor.updateText('');

jsonEditor.validate().then(result => {
    // $ExpectType readonly (SchemaValidationError | ParseError)[]
    result;
});

// $ExpectType Editor
jsonEditor.aceEditor;

// $ExpectType string[]
JSONEditor.VALID_OPTIONS;

// $ExpectType Ace
JSONEditor.ace;

// $ExpectType Ajv
JSONEditor.Ajv;

// $ExpectType any
JSONEditor.VanillaPicker;
