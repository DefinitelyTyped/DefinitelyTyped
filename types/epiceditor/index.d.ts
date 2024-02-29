interface EpicEditorOptions {
    container?: any;
    textarea?: any;
    basePath?: string | undefined;
    clientSideStorage?: boolean | undefined;
    localStorageName?: string | undefined;
    useNativeFullsreen?: boolean | undefined;
    parser?: any;
    file?: {
        name: string;
        defaultContent: string;
        autoSave: any;
    } | undefined;
    theme?: {
        base: string;
        preview: string;
        editor: string;
    } | undefined;
    focusOnLoad?: boolean | undefined;
    shortcut?: {
        modifier: number;
        fullscreen: number;
        preview: number;
    } | undefined;
    string?: {
        togglePreview: string;
        toggleEdit: string;
        toggleFullscreen: string;
    } | undefined;
}

declare class EpicEditor {
    constructor();
    constructor(options: EpicEditorOptions);

    load(callback?: Function): EpicEditor;
    unload(callback?: Function): EpicEditor;
    getElement(element: string): any;
    is(state: string): boolean;
    open(filename: string): any;
    importFile(filename?: string, content?: string): void;
    exportFile(filename?: string, type?: string): any;
    rename(oldName: string, newName: string): void;
    save(): void;
    remove(filename: string): void;
    getFiles(filename?: string): any;
    on(event: string, handler: Function): void;
    emit(event: string): void;
    removeListener(event: string, handler?: Function): void;
    preview(): void;
    edit(): void;
    enterFullscreen(): void;
    exitFullscreen(): void;
    reflow(type?: string): void;
}
