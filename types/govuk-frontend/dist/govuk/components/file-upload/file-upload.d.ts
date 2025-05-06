import { ConfigurableComponent } from "../../common/configuration.js";
import { type TranslationPluralForms } from "../../i18n.js";

/**
 * File upload component
 */
export class FileUpload extends ConfigurableComponent<
    FileUploadConfig,
    HTMLElement
> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * File upload default config
     *
     * @see {@link FileUploadConfig}
     * @constant
     */
    static defaults: FileUploadConfig;

    /**
     * File upload config schema
     *
     * @constant
     * @satisfies {Schema<FileUploadConfig>}
     */
    static schema: Readonly<{
        properties: {
            i18n: {
                type: "object";
            };
        };
    }>;

    /**
     * @param {Element | null} $root - File input element
     * @param {FileUploadConfig} [config] - File Upload config
     */
    constructor($root: Element | null, config?: FileUploadConfig);
}

export type HTMLFileInputElement = HTMLInputElement & {
    files: FileList;
};

/**
 * File upload config
 */
export interface FileUploadConfig {
    /**
     * - File upload translations
     */
    i18n?: FileUploadTranslations | undefined;
}

/**
 * Messages used by the component
 */
export interface FileUploadTranslations {
    /**
     * - The text of the button that opens the file picker
     */
    chooseFile?: string | undefined;

    /**
     * - The text informing users they can drop files
     */
    dropInstruction?: string | undefined;

    /**
     * - The text displayed when multiple files
     * have been chosen by the user
     */
    multipleFilesChosen?: TranslationPluralForms | undefined;

    /**
     * - The text to displayed when no file has been chosen by the user
     */
    noFileChosen?: string | undefined;

    /**
     * - The text announced by assistive technology
     * when user drags files and enters the drop zone
     */
    enteredDropZone?: string | undefined;

    /**
     * - The text announced by assistive technology
     * when user drags files and leaves the drop zone without dropping
     */
    leftDropZone?: string | undefined;
}
