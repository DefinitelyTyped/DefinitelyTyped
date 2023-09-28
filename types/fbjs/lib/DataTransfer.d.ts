declare class DataTransfer {
    constructor(data: any);
    /**
     * Is this likely to be a rich text data transfer?
     */

    isRichText(): boolean;

    /**
     * Get raw text.
     */

    getText(): string | null | undefined;
    /**
     * Get HTML paste data
     */

    getHTML(): string | null | undefined;

    /**
     * Is this a link data transfer?
     */

    isLink(): boolean;

    /**
     * Get a link url.
     */

    getLink(): string | null | undefined;
    /**
     * Is this an image data transfer?
     */
    isImage(): boolean;

    getCount(): number | null;

    /**
     * Get files.
     */
    getFiles(): any[];

    /**
     * Are there any files to fetch?
     */
    hasFiles(): boolean;
}

declare namespace DataTransfer {}

export = DataTransfer;
