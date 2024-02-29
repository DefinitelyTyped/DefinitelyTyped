/// <reference types="jquery" />

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
    width?: number | undefined;
    height?: number | undefined;
    controls?: string | undefined;
    colors?: string | undefined;
    fonts?: string | undefined;
    sizes?: string | undefined;
    styles?: string[][] | undefined;
    useCSS?: boolean | undefined;
    docType?: string | undefined;
    docCSSFile?: string | undefined;
    bodyStyle?: string | undefined;
}

interface JQueryCLEditorButtonDefinition {
    name: string;
    title: string;
    css?: any;
    image?: string | undefined;
    stripIndex?: number | undefined;
    command?: string | undefined;
    popupName?: string | undefined;
    popupContent?: string | undefined;
    getEnabled?: ((data: JQueryCLEditorButtonDefinitionEventData) => boolean) | undefined;
    getPressed?: ((data: JQueryCLEditorButtonDefinitionEventData) => boolean) | undefined;
    buttonClick?: ((event: Event, data: JQueryCLEditorButtonDefinitionEventData) => boolean) | undefined;
    popupClick?: ((event: Event, data: JQueryCLEditorButtonDefinitionEventData) => boolean) | undefined;
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
