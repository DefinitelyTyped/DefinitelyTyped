declare class DataTransfer {
    constructor(data: any);
    /**
     * Is this likely to be a rich text data transfer?
     *
     * @return {boolean}
     */

    isRichText(): boolean;

    /**
     * Get raw text.
     *
     * @return {?string}
     */

    getText(): string | null | undefined;
    /**
     * Get HTML paste data
     *
     * @return {?string}
     */

    getHTML(): string | null | undefined;

    /**
     * Is this a link data transfer?
     *
     * @return {boolean}
     */

    isLink(): boolean;

    /**
     * Get a link url.
     *
     * @return {?string}
     */

    getLink(): string | null | undefined;
    /**
     * Is this an image data transfer?
     *
     * @return {boolean}
     */
    isImage(): boolean;

    getCount(): number | null;

    /**
     * Get files.
     *
     * @return {array}
     */
    getFiles(): Array<any>;

    /**
     * Are there any files to fetch?
     *
     * @return {boolean}
     */
    hasFiles(): boolean;
}

declare namespace DataTransfer {}

export = DataTransfer;
