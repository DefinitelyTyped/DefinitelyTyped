/// <reference types="jquery" />

declare namespace jQueryTagsInput {
    interface Options {
        /**
         * Url for autocomplete
         */
        autocomplete_url?: string | undefined;

        /**
         * Autocomplete options
         */
        autocomplete?: object | undefined;

        /**
         * Height of tag
         */
        height?: string | undefined;

        /**
         * Width of tag
         */
        width?: string | undefined;

        /**
         * Interactive tags
         */
        interactive?: boolean | undefined;

        /**
         * Placeholder of field when tags is empty
         */
        defaultText?: string | undefined;

        /**
         * Callback function on add tag
         */
        onAddTag?: ((addedValue: string) => void) | undefined;

        /**
         * Callback function on remove tag
         */
        onRemoveTag?: ((removedValue: string) => void) | undefined;

        /**
         * Callback function on change list of tags
         */
        onChange?: ((element: JQuery, changedValue: string) => void) | undefined;

        /**
         * Delimiters on tags creation
         */
        delimiter?: string[] | string | undefined;

        /**
         * Remove with tag backspace
         */
        removeWithBackspace?: boolean | undefined;

        /**
         * Minimun char length for tag
         */
        minChars?: number | undefined;

        /**
         * Max char length for tag
         */
        maxChars?: number | undefined;

        /**
         * Placeholder color of tags
         */
        placeholderColor?: string | undefined;
    }
}
interface JQuery {
    /**
     * Transform input field to work with tags
     * @param options for creation
     */
    tagsInput(options?: jQueryTagsInput.Options): JQuery;

    /**
     * Add a new tag to list
     * @param tag value
     */
    addTag(tag: string): boolean;

    /**
     * Remove tag with value from list
     * @param tag to be removed
     */
    removeTag(tag: string): boolean;

    /**
     * Add a new tags
     * @param tags string separated by delimiter
     */
    importTags(tags: string): void;

    /**
     * Verify if tag exists
     * @param tag value
     */
    tagExist(tag: string): boolean;
}
