interface FileUploaderOptions {
    selectorInit: string;
    selectorInput: string;
    selectorContainer: string;
    selectorCloseButton: string;
    selectorSelectedFile: string;
    selectorDropContainer: string;
    selectorOtherDropContainers: string;
    classLoading: string;
    classLoadingAnimation: string;
    classLoadingSvg: string;
    classLoadingBackground: string;
    classLoadingStroke: string;
    classFileName: string;
    classFileClose: string;
    classFileComplete: string;
    classSelectedFile: string;
    classStateContainer: string;
    classDragOver: string;
    eventBeforeDeleteFilenameFileuploader: string;
    eventAfterDeleteFilenameFileuploader: string;
}

declare const FileUploader_base: any;
declare class FileUploader extends FileUploader_base {
    constructor(element: HTMLElement, options?: Partial<FileUploaderOptions>);
    _filenamesHTML(name: string, id: string): string;
    _uploadHTML(): string;
    _closeButtonHTML(): string;
    _checkmarkHTML(): string;
    _changeState: (state: string, detail: { filenameElement?: HTMLElement | undefined }, callback?: () => void) => void;
    _getStateContainers(): HTMLElement[];
    _displayFilenames(files?: FileList): void;
    _removeState(element?: HTMLElement): void;
    _handleStateChange(elements: HTMLElement[], selectIndex?: number, html?: string): void;
    _handleDeleteButton: (evt: Event) => void;
    _handleDragDrop: (evt: MouseEvent) => void;
    setState(state: "edit" | "update" | "complete", selectIndex: number): void;
    static components: WeakMap<object, any>;
    static get options(): FileUploaderOptions;
}
export default FileUploader;
