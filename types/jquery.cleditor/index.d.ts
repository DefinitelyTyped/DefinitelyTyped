// Type definitions for jQuery CLEditor Plugin 1.4.3
// Project: http://premiumsoftware.net/CLEditor
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

/**
 * An editor is composed of a main div element used to hold a toolbar,
 * a text area and an iframe. The toolbar can hold multiple groups
 * which in turn hold multiple buttons.
 */
interface CLEditor {
    $area: JQuery;
    $frame: JQuery;
    $main: JQuery;
    $toolbar: JQuery;
    disabled: boolean;
    doc: Document;
    options: JQueryCLEditorOptions;
    change(handler: Function): CLEditor;
    clear(): CLEditor;
    disable(disabled: boolean): CLEditor;
    execCommand(commands: string, value: any, useCSS?: boolean, button?: any): CLEditor;
    focus(): CLEditor;
    hidePopups(): CLEditor;
    refresh(): CLEditor;
    select(): CLEditor;
    selectedHTML(): string;
    selectedText(): string;
    showMessage(message: string, button?: any): CLEditor;
    sourceMode(): boolean;
    updateFrame(): CLEditor;
    updateTextArea(): CLEditor;
}

interface JQueryCLEditorOptions {
    width?: number;
    height?: number;
    controls?: string;
    colors?: string;
    fonts?: string;
    sizes?: string;
    styles?: string[][];
    useCSS?: boolean;
    docType?: string;
    docCSSFile?: string;
    bodyStyle?: string;
}

interface JQueryCLEditorButtonDefinition {
    name: string;
    title: string;
    css?: any;
    image?: string;
    stripIndex?: number;
    command?: string;
    popupName?: string;
    popupContent?: string;
    getEnabled?: (data: JQueryCLEditorButtonDefinitionEventData) => boolean;
    getPressed?: (data: JQueryCLEditorButtonDefinitionEventData) => boolean;
    buttonClick?: (event: Event, data: JQueryCLEditorButtonDefinitionEventData) => boolean;
    popupClick?: (event: Event, data: JQueryCLEditorButtonDefinitionEventData) => boolean;
}

interface JQueryCLEditorButtonDefinitionEventData {
    editor: CLEditor;
    button: HTMLElement;
    buttonName: string;
    popup: HTMLElement;
    popupName: string;
    command: string;
    value: any;
    useCSS: boolean;
}

/**
 * This object contains global properties and methods used to create
 * custom plugins and override built in functionality.
 */
interface JQueryCLEditorStatic {
    defaultOptions: JQueryCLEditorOptions;
    buttons: JQueryCLEditorButtonDefinition[];
    imagesPath: () => string;
}

interface JQueryStatic {
    cleditor: JQueryCLEditorStatic;
}

interface JQuery {
    /**
     * If the cleditor object does not exist for a matched textarea element,
     * it will be created using the default options combined with the supplied options.
     * This is the core method for creating and selecting cleditor objects. 
     */
    cleditor(options?: JQueryCLEditorOptions): CLEditor;
}
