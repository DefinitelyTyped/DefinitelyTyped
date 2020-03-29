// Type definitions for jsoneditor 8.6
// Project: https://github.com/josdejong/jsoneditor
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
//                 Errietta Kostala <https://github.com/errietta>
//                 Adam Vigneaux <https://github.com/adamvig>
//                 Joep Kockelkorn <https://github.com/joepkockelkorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="ace" />

import { Ajv, ErrorObject } from 'ajv';

export type JSONPath = Array<string | number>;

export interface Node {
    field: string;
    value?: string;
    path: JSONPath;
}

export type JSONEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text' | 'preview';

export interface NodeName {
    path: ReadonlyArray<string>;
    type: 'object' | 'array';
    size: number;
}

export interface ValidationError {
    path: JSONPath;
    message: string;
}

export type SchemaValidationErrorType = 'validation' | 'customValidation';

export interface SchemaValidationError {
    node: any; // TODO: write type from https://github.com/josdejong/jsoneditor/blob/develop/src/js/Node.js
    error: ErrorObject;
    type: SchemaValidationErrorType;
}

export interface ParseError {
    line: number;
    message: string;
    type: 'error';
}

export interface Template {
    text: string;
    title: string;
    className?: string;
    field: string;
    value: any;
}

export type AutoCompleteCompletion = null | string[] | { startFrom: number; options: string[] };

export type AutoCompleteMatchingStrategy = 'start' | 'contain';

export type AutoCompleteTrigger = 'keydown' | 'focus';

export type AutoCompleteElementType = 'field' | 'value';

export interface AutoCompleteOptions {
    /**
     * Pick one of the two strategies, or define a custom filter function.
     *
     * 'start': Match your input from the start, e.g. 'ap' matches 'apple' but 'pl' does not.
     *
     * 'contain': Contains the user's input or not, e.g. 'pl' matches 'apple' too.
     */
    filter?: AutoCompleteMatchingStrategy | ((query: string) => boolean);
    /**
     * Indicate the way to trigger autocomplete menu.
     *
     * 'keydown': When you type something in the field or value, it will trigger autocomplete immediately.
     *
     * 'focus': When you focus in the field or value, it will trigger the autocomplete.
     * @default 'keydown'
     */
    trigger?: AutoCompleteTrigger;
    /**
     * Indicate the KeyCodes for trigger confirm completion, by default those keys are: `[39, 35, 9]` which are the code for `[right, end, tab]`.
     * @default [39, 35, 9]
     */
    confirmKeys?: number[];
    /**
     * Indicate if the autocomplete is going to be strict case-sensitive to match the options.
     */
    caseSensitive?: boolean;
    /**
     * This function will return your possible options for create the autocomplete selection,
     * you can control dynamically which options you want to display according to the current active editing node.
     * @param text The text in the current node part (basically the text that the user is editing).
     * @param path The path of the node that is being edited as an array.
     * @param input Can be 'field' or 'value' depending if the user is editing a field name or a value of a node.
     * @param editor The editor instance object that is being edited.
     */
    getOptions?: (
        text: string,
        path: JSONPath,
        input: AutoCompleteElementType,
        editor: JSONEditor,
    ) => AutoCompleteCompletion | Promise<AutoCompleteCompletion>;
}

export interface SelectionPosition {
    row: number;
    column: number;
}

export interface SerializableNode {
    value: any;
    path: JSONPath;
}

// Based on the API of https://github.com/Sphinxxxx/vanilla-picker
export interface Color {
    rgba: number[];
    hsla: number[];
    rgbString: string;
    rgbaString: string;
    hslString: string;
    hslaString: string;
    hex: string;
}

export interface MenuItem {
    text: string;
    title: string;
    type?: 'separator';
    className: string;
    submenu?: MenuItem[];
    submenuTitle?: string;
    click?: () => void;
}

export type MenuItemNodeType = 'single' | 'append';

export interface MenuItemNode {
    type: MenuItemNodeType;
    path: ReadonlyArray<string>;
    paths: ReadonlyArray<ReadonlyArray<string>>;
}

export interface TimestampNode {
    field: string;
    value: string;
    path: ReadonlyArray<string>;
}

export interface JSONEditorOptions {
    /**
     * Provide a custom version of the Ace editor and use this instead of the version that comes embedded with JSONEditor. Only applicable when mode is 'code'.
     *
     * Note that when using the minimalist version of JSONEditor (which has Ace excluded), JSONEditor will try to load the Ace plugins `ace/mode/json` and `ace/ext/searchbox`.
     * These plugins must be loaded beforehand or be available in the folder of the Ace editor.
     */
    ace?: AceAjax.Ace;
    /**
     * Provide a custom instance of [ajv](https://github.com/epoberezkin/ajv), the library used for JSON schema validation.
     * @example { ajv: Ajv({ allErrors: true, verbose: true }) }
     */
    ajv?: Ajv;
    /**
     * Set a callback function triggered when the contents of the JSONEditor change.
     * This callback does not pass the changed contents, use `get()` or `getText()` for that.
     * Note that `get()` can throw an exception in mode 'text', 'code', or 'preview', when the editor contains invalid JSON.
     * Will only be triggered on changes made by the user, not in case of programmatic changes via the functions `set`, `setText`, `update`, or `updateText`.
     * See also callback functions `onChangeJSON(json)` and `onChangeText(jsonString)`.
     */
    onChange?: () => void;
    /**
     * Set a callback function triggered when the contents of the JSONEditor change.
     * Passes the changed JSON document. Only applicable when option mode is 'tree', 'form', or 'view'.
     * The callback will only be triggered on changes made by the user, not in case of programmatic changes via the functions `set`, `setText`, `update`, or `updateText`.
     * Also see the callback function `onChangeText(jsonString)`.
     */
    onChangeJSON?: (json: any) => void;
    /**
     * Set a callback function triggered when the contents of the JSONEditor change.
     * Passes the changed JSON document as a string.
     * The callback will only be triggered on changes made by the user, not in case of programmatic changes via the functions `set`, `setText`, `update`, or `updateText`.
     * Also see the callback function `onChangeJSON(json)`.
     */
    onChangeText?: (jsonString: string) => void;
    /**
     * Set a callback function to add custom CSS classes to the rendered nodes.
     * Only applicable when option mode is 'tree', 'form', or 'view'.
     * The function must either return a string containing CSS class names, or return undefined in order to do nothing for a specific node.
     * In order to update css classes when they depend on external state, you can call `editor.refresh()`.
     */
    onClassName?: (classNameParams: {
        path: ReadonlyArray<string>;
        field: string;
        value: string;
    }) => string | undefined;
    /**
     * Set a callback function to determine whether individual nodes are editable or readonly.
     * Only applicable when option mode is 'tree', 'text', or 'code'.
     * In case of mode 'tree', the callback is invoked as `editable(node)`, where the first parameter is a `Node`.
     * The function must either return a boolean value to set both the nodes field and value editable or readonly,
     * or return `{ field: boolean; value: boolean }` to set the readonly attribute for field and value individually.
     * In modes 'text' and 'code', the callback is invoked as `editable(node)` where node is an empty object (no field, value, or path).
     * In that case the function can return false to make the text or code editor completely readonly.
     */
    onEditable?: (node: Node | object) => boolean | { field: boolean; value: boolean };
    /**
     * Set a callback function triggered when an error occurs.
     * Invoked with the error as first argument. The callback is only invoked
     * for errors triggered by a users action, like switching from 'code' mode to 'tree' mode
     * or clicking the Format button whilst the editor doesn't contain valid JSON.
     */
    onError?: (error: Error) => void;
    /**
     * Set a callback function triggered right after the mode is changed by the user.
     * Only applicable when the mode can be changed by the user (i.e. when option modes is set).
     */
    onModeChange?: (newMode: JSONEditorMode, oldMode: JSONEditorMode) => void;
    /**
     * Customize the name of object and array nodes. By default the names are brackets with the number of children inside, like {5} and [32].
     * The number inside can be customized. using onNodeName. The onNodeName function should return a string containing the name for the node.
     * If nothing is returned, the size (number of children) will be displayed.
     */
    onNodeName?: (nodeName: NodeName) => string | undefined;
    /**
     * Set a callback function for custom validation. Available in all modes.
     * On a change of the JSON, the callback function is invoked with the changed data.
     * The function should return an array with errors or null if there are no errors.
     * The function can also return a Promise resolving with the errors retrieved via an asynchronous validation (like sending a request to a server for validation).
     * Also see the option `schema` for JSON schema validation.
     * @example {
                    onValidate: function (json) {
                        var errors = [];
                        if (json && json.customer && !json.customer.address) {
                            errors.push({
                                path: ['customer'],
                                message: 'Required property "address" missing.'
                            });
                        }
                        return errors;
                    }
                }
     */
    onValidate?: (json: any) => ValidationError[] | Promise<ValidationError[]>;
    /**
     * Set a callback function for validation and parse errors. Available in all modes.
     * On validation of the json, if errors of any kind were found this callback is invoked with the errors data.
     * On change, the callback will be invoked only if errors were changed.
     * @example {
                    onValidationError: function (errors) {
                        errors.forEach((error) => {
                            switch (error.type) {
                                case 'validation': // schema validation error
                                    ...
                                    break;
                                case 'customValidation': // custom validation error
                                    ...
                                    break;
                                case 'error':  // json parse error
                                    ...
                                    break;
                            }
                        });
                    }
                }
     */
    onValidationError?: (errors: ReadonlyArray<SchemaValidationError | ParseError>) => void;
    /**
     * Set a callback function to customize the context menu in tree mode. Each time the user clicks on the context menu button, an array of menu items is created.
     * If this callback is configured, the array with menu items is passed to this function. The menu items can be customized in this function in any aspect of these menu items,
     * including deleting them and/or adding new items. The function should return the final array of menu items to be displayed to the user.
     * Each menu item is represented by an object, which may also contain a submenu array of items.
     */
    onCreateMenu?: (menuItems: MenuItem[], node: MenuItemNode) => MenuItem[];
    /**
     * If true, unicode characters are escaped and displayed as their hexadecimal code (like \u260E) instead of of the character itself (like ☎).
     * @default false
     */
    escapeUnicode?: boolean;
    /**
     * If true, object keys in 'tree', 'view' or 'form' mode will be listed alphabetically instead by their insertion order.
     * Sorting is performed using a natural sort algorithm, which makes it easier to see objects that have string numbers as keys.
     * @default false
     */
    sortObjectKeys?: boolean;
    /**
     * Enables history, adds a button Undo and Redo to the menu of the JSONEditor. Only applicable when mode is 'tree', 'form', or 'preview'.
     * @default true
     */
    history?: boolean;
    /**
     * Set the editor mode. Available values: 'tree', 'view', 'form', 'code', 'text', 'preview'.
     * In 'view' mode, the data and datastructure is readonly. In 'form' mode, only the value can be changed, the data structure is readonly.
     * Mode 'code' requires the Ace editor to be loaded on the page. Mode 'text' shows the data as plain text.
     * The 'preview' mode can handle large JSON documents up to 500 MiB. It shows a preview of the data, and allows to transform, sort, filter, format, or compact the data.
     * @default 'tree'
     */
    mode?: JSONEditorMode;
    /**
     * Create a box in the editor menu where the user can switch between the specified modes.
     * @see mode.
     */
    modes?: JSONEditorMode[];
    /**
     * Initial field name for the root node. Can also be set using `setName(name)`. Only applicable when mode is 'tree', 'view', or 'form'.
     * @default undefined
     */
    name?: string;
    /**
     * Validate the JSON object against a JSON schema. A JSON schema describes the structure that a JSON object must have, like required properties or the type that a value must have.
     * Also see the option `onValidate` for custom validation.
     * @see http://json-schema.org/
     */
    schema?: object;
    /**
     * Schemas that are referenced using the `$ref` property from the JSON schema that are set in the schema option, the object structure in the form of `{ reference_key: schemaObject }`.
     */
    schemaRefs?: object;
    /**
     * Enables a search box in the upper right corner of the JSONEditor. Only applicable when mode is 'tree', 'view', or 'form'.
     * @default true
     */
    search?: boolean;
    /**
     * Number of indentation spaces. Only applicable when mode is 'code', 'text', or 'preview'.
     * @default 2
     */
    indentation?: number;
    /**
     * Set the Ace editor theme. Please note that only the default theme is included with JSONEditor, so if you specify another one you need to make sure it is loaded.
     * @default 'ace/theme/jsoneditor'
     */
    theme?: string;
    /**
     * Array of templates that will appear in the context menu, Each template is a json object precreated that can be added as a object value to any node in your document.
     * @example [
                    {
                        text: 'Person',
                        title: 'Insert a Person Node',
                        className: 'jsoneditor-type-object',
                        field: 'PersonTemplate',
                        value: {
                            firstName: 'John',
                            lastName: 'Do',
                            age: 28
                        }
                    },
                    {
                        text: 'Address',
                        title: 'Insert an Address Node',
                        field: 'AddressTemplate',
                        value: {
                            street: '',
                            city: '',
                            state: '',
                            zipcode: ''
                        }
                    }
                ]
     */
    templates?: Template[];
    /**
     * Providing this will enable this feature in your editor in 'tree' mode.
     */
    autocomplete?: AutoCompleteOptions;
    /**
     * Adds main menu bar. Contains format, sort, transform, search etc. functionality. Applicable in all modes.
     * @default true
     */
    mainMenuBar?: boolean;
    /**
     * Adds navigation bar to the menu. The navigation bar visualizes the current position on the tree structure as well as allows breadcrumbs navigation.
     * Only applicable when mode is 'tree', 'form' or 'view'.
     * @default true
     */
    navigationBar?: boolean;
    /**
     * Adds status bar to the bottom of the editor. The status bar shows the cursor position and a count of the selected characters.
     * Only applicable when mode is 'code', 'text', or 'preview'.
     * @default true
     */
    statusBar?: boolean;
    /**
     * Set a callback function triggered when a text is selected in the JSONEditor. Only applicable when mode is 'code' or 'text'.
     */
    onTextSelectionChange?: (start: SelectionPosition, end: SelectionPosition, text: string) => void;
    /**
     * Set a callback function triggered when Nodes are selected in the JSONEditor. Only applicable when mode is 'tree'.
     */
    onSelectionChange?: (start: SerializableNode, end: SerializableNode) => void;
    /**
     * Set a callback function that will be triggered when an event will occur in a JSON field or value. Only applicable when mode is 'form', 'tree' or 'view'.
     */
    onEvent?: (node: Node, event: string) => void;
    /**
     * When true, values containing a color name or color code will have a color picker rendered on their left side.
     * @default true
     */
    colorPicker?: boolean;
    /**
     * Callback function triggered when the user clicks a color. Can be used to implement a custom color picker.
     * @param parent An HTML element where the color picker can be attached. JSONEditor comes with a built-in color picker, powered by {@link https://github.com/Sphinxxxx/vanilla-picker|vanilla-picker}.
     * @param color The current color.
     * @param onChange A callback which has to be invoked with the new color selected in the color picker.
     * @example (parent, color, onChange) => {
                    new VanillaPicker({
                        parent,
                        color,
                        onDone: color => onChange(color.hex)
                    }).show();
                }
     */
    onColorPicker?: (parent: HTMLElement, color: string, onChange: (color: Color) => void) => void;
    /**
     * By default (true), a tag with the date/time of a timestamp is displayed right from values containing a timestamp. By default, a value is considered a timestamp when it is an integer number with a value larger than Jan 1th 2000, 946684800000.
     * When timestampTag a is a function, a timestamp tag will be displayed when this function returns true, and no timestamp is displayed when the function returns false.
     * When the function returns a non-boolean value like null or undefined, JSONEditor will fallback on the built-in rules to determine whether or not to show a timestamp.
     * Whether a value is a timestamp can be determined implicitly based on the value, or explicitly based on field or path. You can for example test whether a field name contains a string like: 'date' or 'time'.
     * Only applicable for modes 'tree', 'form', and 'view'.
     * @default true
     * @example ({ field, value, path }) => field === 'dateCreated'
     */
    timestampTag?: boolean | ((node: TimestampNode) => boolean);
    /**
     * Customizing the way formating the timestamp. Called when a value is timestamp after timestampTag. If it returns null, the timestamp would be formatted with default setting.
     * Only applicable for modes 'tree', 'form', and 'view'.
     * @default value => new Date(value).toISOString()
     */
    timestampFormat?: (node: TimestampNode) => string | null;
    /**
     * The default language comes from the browser navigator, but you can force a specific language. So use here string as 'en' or 'pt-BR'.
     * Built-in languages: 'en', 'pt-BR', 'zh-CN', 'tr', 'ja', 'fr-FR'. Other translations can be specified via the option `languages`.
     */
    language?: string;
    /**
     * You can override existing translations or provide a new translation for a specific language. To do it provide an object at languages with language and the keys/values to be inserted.
     * All available fields for translation can be found in the source file `src/js/i18n.js`.
     * @example { 'pt-BR': { 'auto': 'Automático testing' }, 'en': { 'auto': 'Auto testing' } }
     */
    languages?: {
        [lang: string]: {
            [key: string]: string;
        };
    };
    /**
     * The container element where modals (like for sorting and filtering) are attached: an overlay will be created on top of this container, and the modal will be created in the center of this container.
     */
    modalAnchor?: HTMLElement;
    /**
     * The container element where popups (for example drop down menus, for JSON Schema error tooltips, and color pickers) will be absolutely positioned.
     * By default, this is the root `div` element of the editor itself. When the JSONEditor is inside a `div` element which hides overflowing contents (CSS overflow: auto or overflow: hidden), tooltips will be visible only partly.
     * In this case, a popupAnchor outside of the element without hidden overflow will allow the tooltips to be visible when overflowing the `div` element of the JSONEditor.
     */
    popupAnchor?: HTMLElement;
    /**
     * Enable sorting of arrays and object properties. Only applicable for mode 'tree'.
     * @default true
     */
    enableSort?: boolean;
    /**
     * Enable filtering, sorting, and transforming JSON using a {@link https://jmespath.org/|JMESPath} query. Only applicable for mode 'tree'.
     * @default true
     */
    enableTransform?: boolean;
    /**
     * Number of children allowed for a given node before the 'show more/show all' message appears (in 'tree', 'view', or 'form' modes).
     * @default 100
     */
    maxVisibleChilds?: number;
    // TODO: createQuery, executeQuery, queryDescription
}

// TODO: docs on methods
export default class JSONEditor {
    /**
     * Constructs a new JSONEditor.
     * @param container An HTML DIV element. The JSONEditor will be created inside this container element.
     * @param options Optional object with options.
     * @param json Initial JSON data to be loaded into the JSONEditor. Alternatively, the method JSONEditor.set(json) can be used to load JSON data into the editor.
     * @returns New instance of a JSONEditor.
     */
    constructor(container: HTMLElement, options?: JSONEditorOptions, json?: any);
    collapseAll(): void;
    destroy(): void;
    expandAll(): void;
    focus(): void;
    get(): any;
    getMode(): JSONEditorMode;
    getName(): string | undefined;
    getNodesByRange(start: { path: JSONPath }, end: { path: JSONPath }): SerializableNode[];
    getSelection(): { start: SerializableNode; end: SerializableNode };
    getText(): string;
    getTextSelection(): { start: SelectionPosition; end: SelectionPosition; text: string };
    refresh(): void;
    set(json: any): void;
    setMode(mode: JSONEditorMode): void;
    setName(name?: string): void;
    setSchema(schema: object, schemaRefs?: object): void;
    setSelection(start: { path: JSONPath }, end: { path: JSONPath }): void;
    setText(jsonString: string): void;
    setTextSelection(start: SelectionPosition, end: SelectionPosition): void;
    update(json: any): void;
    updateText(jsonString: string): void;

    static VALID_OPTIONS: string[];
    static ace: AceAjax.Ace;
    static Ajv: Ajv;
    static VanillaPicker: any;
}
