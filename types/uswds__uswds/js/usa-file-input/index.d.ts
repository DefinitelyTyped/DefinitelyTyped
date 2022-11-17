interface FileInputContext {
    dropZoneEl: HTMLDivElement;
    inputEl: HTMLInputElement;
}

interface FileInput {
    init(root: HTMLElement | Document): void;
    teardown(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * file input component.
     *
     * @param {HTMLElement} el the element within the file input
     * @returns {FileInputContext} elements
     */
    getFileInputContext(el: HTMLElement): FileInputContext;
    /**
     * Disable the file input component
     *
     * @param {HTMLElement} el An element within the file input component
     */
    disable(el: HTMLElement): void;
    /**
     * Enable the file input component
     *
     * @param {HTMLElement} el An element within the file input component
     */
    enable(el: HTMLElement): void;
}

declare const fileInput: FileInput;

export default fileInput;
