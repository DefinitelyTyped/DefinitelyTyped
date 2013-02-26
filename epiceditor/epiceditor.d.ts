// Type definitions for EpicEditor 0.2
// Project: http://epiceditor.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface EpicEditorOptions {
    container?: any;
    textarea?: any;
    basePath?: string;
    clientSideStorage?: bool;
    localStorageName?: string;
    useNativeFullsreen?: bool;
    parser?: any;
    file?: {
        name: string;
        defaultContent: string;
        autoSave: any;
    };
    theme?: {
        base: string;
        preview: string;
        editor: string;
    };
    focusOnLoad?: bool;
    shortcut?: {
        modifier: number;
        fullscreen: number;
        preview: number;
    };
    string?: {
        togglePreview: string;
        toggleEdit: string;
        toggleFullscreen: string;
    };
}

class EpicEditor {
    constructor();
    constructor(options: EpicEditorOptions);

    load(callback?: Function): EpicEditor;
    unload(callback?: Function): EpicEditor;
    getElement(element: string): any;
    is(state: string): bool;
    open(filename: string);
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