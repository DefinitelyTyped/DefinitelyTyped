// Type definitions for jQuery Tags Input Plugin 1.3
// Project: https://github.com/xoxco/jQuery-Tags-Input
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace jQueryTagsInput {
    interface Options {
        /**
         * Url for autocomplete
         */
         autocomplete_url?: string;

        /**
         * Autocomplete options
         */
         autocomplete?: object;

        /**
         * Height of tag
         */
         height?: string;

        /**
         * Width of tag
         */
         width?: string;

        /**
         * Interactive tags
         */
         interactive?: boolean;

        /**
         * Placeholder of field when tags is empty
         */
         defaultText?: string;

        /**
         * Callback function on add tag
         */
         onAddTag?: (addedValue: string) => void;

        /**
         * Callback function on remove tag
         */
         onRemoveTag?: (removedValue: string) => void;

        /**
         * Callback function on change list of tags
         */
         onChange?: (element: JQuery, changedValue: string) => void;

        /**
         * Delimiters on tags creation
         */
         delimiter?: string[]|string;

        /**
         * Remove with tag backspace
         */
         removeWithBackspace ?: boolean;

        /**
         * Minimun char length for tag
         */
         minChars?: number;

        /**
         * Max char length for tag
         */
         maxChars?: number;

        /**
         * Placeholder color of tags
         */
         placeholderColor?: string;
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
