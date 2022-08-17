interface FileInput {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * file input component.
     *
     * @param el the element within the file input
     * @returns elements
     */
    getFileInputContext(el: HTMLElement): {
        dropZoneEl: HTMLDivElement;
        inputEl: HTMLInputElement;
    };
    /**
     * Disable the file input component
     *
     * @param el An element within the file input component
     */
    disable(el: HTMLInputElement): void;
    /**
     * Enable the file input component
     *
     * @param el An element within the file input component
     */
    enable(el: HTMLInputElement): void;
}

declare const fileInput: FileInput;

export default fileInput;
