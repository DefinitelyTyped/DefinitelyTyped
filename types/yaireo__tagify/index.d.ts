// Type definitions for @yaireo/tagify 3.22
// Project: https://github.com/yairEO/tagify
// Definitions by: Brakebein <https://github.com/Brakebein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Tagify {
    interface TagifySettings {
        /**
         * `TagData` property which will be displayed as the tag's text.
         * Remember to keep `value` property unique.
         * @default 'value'
         */
        tagTextProp?: string;
        /**
         * Placeholder text. If this attribute is set on an input/textarea element it will override this setting.
         */
        placeholder?: string;
        /**
         * RegEx string. Split tags by any of these delimiters.
         * Example delimiters: ",|.| " (comma, dot, or whitespace)
         * @default ','
         */
        delimiters?: string | RegExp;
        /**
         * Validate input by RegEx pattern (can also be applied on the input itself as an attribute).
         * Example: `/[1-9]/`
         */
        pattern?: string | RegExp;
        /**
         * Use `select` for single-value dropdown-like select box.
         * See `mix` as value to allow mixed-content. The `pattern` setting must be set to some character.
         * @default null
         */
        mode?: 'select' | 'mix' | null;
        /**
         * Interpolation for mix mode. Everything between these will become a tag.
         * @default ['[[', ']]']
         */
        mixTagsInterpolator?: string[];
        /**
         * Define conditions in which typed mix-tags content is allowing a tag to be created after.
         * @default /,|\.|\:|\s/
         */
        mixTagsAllowedAfter?: RegExp;
        /**
         * Should duplicate tags be allowed or not?
         * @default false
         */
        duplicates?: boolean;
        /**
         * If `true` trim the tag's value (remove before/after whitespaces).
         * @default true
         */
        trim?: boolean;
        /**
         * Should ONLY use tags allowed in whitelist.
         * In `mix` mode, setting it to `false` will not allow creating new tags.
         * @default false
         */
        enforceWhitelist?: boolean;
        autocomplete?: {
            /**
             * Tries to suggest the input's value while typing (match from whitelist)
             * by adding the rest of term as grayed-out text.
             * @default true
             */
            enabled?: boolean;
            /**
             * If `true`, when → is pressed, use the suggested value to create a tag,
             * else just auto-completes the input. In mixed-mode this is ignored and treated as `true`.
             * @default false
             */
            rightKey?: boolean;
        };
        /**
         * An array of allowed tags.
         * Also used for auto-completion when `autoComplete.enabled` is `true`.
         */
        whitelist?: string[] | TagData[];
        /**
         * An array of tags which aren't allowed.
         */
        blacklist?: string[];
        /**
         * Automatically adds the text which was inputed as a tag when blur event happens.
         * @default true
         */
        addTagOnBlur?: boolean;
        /**
         * Exposed callbacks object to be triggered on events.
         */
        callbacks?: { [key: string]: (...args: any[]) => void };
        /**
         * Maximum number of allowed tags.
         * When reached, adds a class `tagify--hasMaxTags` to `<tags>`.
         * @default Infinity
         */
        maxTags?: number;
        /**
         * Number of clicks to enter `edit` mode.
         * `false` or `null` will disallow editing.
         * @default 2
         */
        editTags?: 2 | 1 | false | null | { clicks: 2 | 1, keepInvalid: boolean };
        /**
         * Functions that return template strings.
         */
        templates?: {
            wrapper?: (input: HTMLInputElement | HTMLTextAreaElement, settings: TagifySettings) => string;
            tag?: (tagData: TagData) => string;
            dropdown?: (settings: TagifySettings) => string;
            dropdownItem?: (item: TagData) => string;
            dropdownItemNoMatch?: () => string;
        };
        /**
         * If the `pattern` setting does not meet your needs, use this function,
         * which receives tag data object as an argument and should return `true`
         * if validaton passed or `false`/`string` if not. A string may be returned
         * as the reason of the validation failure.
         */
        validate?: (tagData: TagData) => boolean | string;
        /**
         * Takes a tag data as argument and allows mutating it before a tag is created or edited.
         * Should not return anything, only mutate.
         */
        transformTag?: (tagData: TagData) => void;
        /**
         * If `true`, do not remove tags which did not pass validation.
         * @default false
         */
        keepInvalidTags?: boolean;
        /**
         * If `true`, do not add invalid, temporary tags before automatically removing them.
         * @default false
         */
        skipInvalid?: boolean;
        /**
         * On pressing backspace key:
         * `true` - remove last tag,
         * `edit` - edit last tag.
         * @default true
         */
        backspace?: boolean | 'edit';
        /**
         * If you wish your original input/textarea `value` property format to other than the default
         * (which I recommend keeping) you may use this and make sure it returns a string.
         */
        originalInputValueFormat?: (value: TagData[]) => string;
        mixMode?: {
            /**
             * Add after the added tag.
             * @default '\u00A0'
             */
            insertAfterTag?: string | HTMLElement;
        };
        dropdown?: {
            /**
             * Minimum characters input for showing a suggestions list.
             * `false` will not render a suggestions list.
             * @default 2
             */
            enabled?: number | false;
            /**
             * If `true`, match exact item when a suggestion is selected (from the dropdown)
             * and also more strict matching for dulpicate items.
             * Ensure `fuzzySearch` is `false` for this to work.
             * @default false
             */
            caseSensitive?: boolean;
            /**
             * Maximum items to show in the suggestions list.
             * @default 10
             */
            maxItems?: number;
            /**
             * Custom class name for the dropdown suggestions selectbox.
             */
            classname?: string;
            /**
             * Enables filtering dropdown items values by string _containing_ and not only _beginning_.
             * @default true
             */
            fuzzySearch?: boolean;
            /**
             * Enable searching for accented items in the whitelist without typing exact match.
             * @default true
             */
            accentedSearch?: boolean;
            /**
             * - `manual` - will not render the dropdown, and you would need to do it yourself.
             * - `text` - will place the dropdown next to the caret
             * - `input` - will place the dropdown next to the input
             * - `all` - normal, full-width design
             * @default null
             */
            position?: 'manual' | 'text' | 'input' | 'all' | null;
            /**
             * When a suggestions list is shown, highlight the first item,
             * and also suggest it in the input (The suggestion can be accepted with → key).
             * @default null
             */
            highlightFirst?: boolean;
            /**
             * Close the dropdown after selecting an item, if `enabled: 0` is set
             * (which means always show dropdown on focus).
             * @default true
             */
            closeOnSelect?: boolean;
            /**
             * if `false`, keep typed text after selecting a suggestion.
             * @default true
             */
            clearOnSelect?: boolean;
            /**
             * If whitelist is an Array of Objects,
             * this setting controlls which data key will be printed in the dropdown.
             */
            mapValueTo?: string | ((data: TagData) => string);
            /**
             * When a user types something and trying to match the whitelist items for suggestions,
             * this setting allows matching other keys of a whitelist objects.
             * @default ['value', 'searchBy']
             */
            searchKeys?: string[];
            /**
             * Target node which the suggestions dropdown is appended to (only when rendered).
             */
            appendTarget?: HTMLElement;
        };
    }

    /**
     * Default tag format. `value` property must be unique.
     */
    interface TagData {
        value: string;
        [key: string]: any;
    }
}

/**
 * Tagify class
 */
declare class Tagify {
    /**
     * Settings.
     */
    settings: Tagify.TagifySettings;
    /**
     * Array with tag data.
     */
    value: Tagify.TagData[];

    /**
     * References to elements.
     */
    DOM: {
        dropdown: HTMLDivElement,
        input: HTMLSpanElement,
        originalInput: HTMLInputElement | HTMLTextAreaElement,
        scope: HTMLElement
    };

    /**
     * Dropdown specific methods.
     */
    dropdown: {
        /**
         * Shows the suggestions select box.
         * @param value - Filter the whitelist by this value (optional)
         */
        show(value?: string): void;
        /**
         * Hide the suggestions select box.
         */
        hide(force?: boolean): void;
        /**
         * Add all whitelist items as tags and close the suggestion dropdown.
         */
        selectAll(): void;
    };

    constructor(inputElement: HTMLInputElement | HTMLTextAreaElement, settings?: Tagify.TagifySettings);

    /**
     * Returns a string of HTML element attributes.
     */
    getAttributes(tagData: Tagify.TagData): string;

    /**
     * Reverts the input element back as it was before Tagify was applied.
     */
    destroy(): void;

    /**
     * Removes all tags and resets the original input tag's value property.
     */
    removeAllTags(): void;

    /**
     * Parse and add tags.
     * @param tags - Accepts a String (word, single or multiple with a delimiter), an Array of Objects or Strings
     * @param clearInput - If true, the input's value gets cleared after adding tags
     * @param skipInvalid - If true, do not add, mark & remove invalid tags (defaults to Tagify settings)
     */
    addTags(tags: string, clearInput?: boolean, skipInvalid?: boolean): HTMLElement;
    addTags(tags: string[] | Tagify.TagData[], clearInput?: boolean, skipInvalid?: boolean): HTMLElement[];

    /**
     * Bypasses the normalization process in `addTags`, forcefully adding tags at the last caret
     * location or at the end, if there's no last caret location saved (at `tagify.state.selection`).
     * @param tags - Accepts a String (word, single or multiple with a delimiter), an Array of Objects or Strings
     */
    addMixTags(tags: string | string[] | Tagify.TagData[]): void;

    /**
     * Remove single/multiple tags. When nothing passed, removes last tag.
     * @param tagElms - DOM element(s) or a String value
     * @param silent - A flag, which when turned on, does not remove any value and does not update
     * the original input value but simply removes the tag from tagify
     * @param tranDuration - Delay for animation, after which the tag will be removed from the DOM
     */
    removeTags(tagElms?: HTMLElement[] | HTMLElement | string, silent?: boolean, tranDuration?: number): void;

    /**
     * Create an empty tag (optionally with predefined data) and enters "edit" mode directly.
     */
    addEmptyTag(initialData?: {[key: string]: any}): void;

    /**
     * Converts the input's value into tags. This method gets called automatically when instantiating Tagify.
     * Also works for mixed-tags.
     */
    loadOriginalValues(value: string | string[]): void;

    /**
     * Return an array of found matching items (case-insensitive).
     */
    getWhitelistItem(value: Tagify.TagData): Tagify.TagData[];

    /**
     * Returns how many tags already exists with specific value.
     */
    isTagDuplicate(value: string | Tagify.TagData, caseSensitive?: boolean): number;

    /**
     * Converts a string argument (`[[foo]] and [[bar]] are...`) into HTML with mixed tags & texts.
     */
    parseMixTags(value: string): string;

    /**
     * Return a DOM nodes list of all the tags.
     * @param classes - Filter by set of class names
     */
    getTagElms(...classes: string[]): HTMLElement[];

    /**
     * Return a specific tag DOM node by value.
     */
    getTagElmByValue(value: string): HTMLElement;

    /**
     * Return the indices of tags by value.
     */
    getTagIndexByValue(value: string): number[];

    /**
     * Set/get tag data on a tag element
     */
    tagData(tagElm: HTMLElement, data?: Tagify.TagData): Tagify.TagData;

    /**
     * Enters a tag into "edit" mode.
     * @param tagElm - The tag element to edit. If nothing specified, use the last one.
     */
    editTag(tagElm?: HTMLElement): void;

    /**
     * Replaces an existing tag with a new one. Used for updating a tag's data.
     */
    replaceTag(tagElm: HTMLElement, tagData: Tagify.TagData): void;

    /**
     * Toggle loading state on/off (e.g. for AJAX whitelist pulling)
     */
    loading(isLoading: boolean): this;

    /**
     * Toggle specific tag loading state on/off.
     */
    tagLoading(tagElm: HTMLElement, isLoading: boolean): this;

    /**
     * Return a tag element from the supplied tag data.
     */
    createTagElem(tagData: Tagify.TagData): HTMLElement;

    /**
     * Injects text or HTML node at last caret position,
     * which is saved on the "state" when "blur" event gets triggered.
     * @param injectedNode - The node to inject at the caret position
     * @param range - Optional range object, must have `anchorNode` and  `anchorOffset`
     */
    injectAtCaret(injectedNode: string | HTMLElement, range?: Selection): void;

    /**
     * Places the caret after a given node.
     */
    placeCaretAfterNode(node: HTMLElement): void;

    insertAfterTag(tagElm: HTMLElement, newNode: string | HTMLElement): HTMLElement;

    /**
     * Toggles class on the man tagify container (`scope`).
     */
    toggleClass(className: string, on: boolean): void;

    /**
     * Update `value` (array of objects) by traversing all valid tags.
     */
    updateValueByDOMTags(): void;

    /**
     * Converts a template string into a DOM node.
     * @param template - Select a template from the `settings.templates` by name or supply a template function which returns a string
     * @param data - Arguments passed to the template function
     */
    parseTemplate(template: 'wrapper', data: [HTMLInputElement | HTMLTextAreaElement, Tagify.TagifySettings]): HTMLElement;
    parseTemplate(template: 'tag' | 'dropdownItem', data: [Tagify.TagData]): HTMLElement;
    parseTemplate(template: 'dropdown', data: [Tagify.TagifySettings]): HTMLElement;
    parseTemplate(template: 'dropdownItemNoMatch', data: []): HTMLElement;
    parseTemplate(template: ((...args: any) => string), data: any[]): HTMLElement;

    /**
     * Toggles "readonly" mode on/off.
     */
    setReadonly(isReadonly: boolean): void;

    /**
     * Add event listener
     */
    on(event: 'add' | 'remove' | 'dblclick' | 'edit:beforeUpdate' | 'edit:updated', cb: (e: CustomEvent<{
        tagify: Tagify, tag: HTMLElement, index?: number, data?: Tagify.TagData
    }>) => void): this;
    on(event: 'invalid', cb: (e: CustomEvent<{
        tagify: Tagify, tag: HTMLElement, index?: number, data: Tagify.TagData, message: boolean
    }>) => void): this;
    on(event: 'input', cb: (e: CustomEvent<{
        tagify: Tagify, value: string, inputElm: HTMLInputElement | HTMLTextAreaElement
    }>) => void): this;
    on(event: 'click', cb: (e: CustomEvent<{
        tagify: Tagify, tag: HTMLElement, index: number, data: Tagify.TagData, originalEvent: MouseEvent
    }>) => void): this;
    on(event: 'keydown' | 'edit:keydown', cb: (e: CustomEvent<{ tagify: Tagify, originalEvent: KeyboardEvent }>) => void): this;
    on(event: 'focus' | 'blur', cb: (e: CustomEvent<{
        tagify: Tagify, relatedTarget: Element
    }>) => void): this;
    on(event: 'edit:start', cb: (e: CustomEvent<{
        tagify: Tagify, tag: HTMLElement, index: number, data: Tagify.TagData, isValid: boolean
    }>) => void): this;
    on(event: 'edit:input', cb: (e: CustomEvent<{
        tagify: Tagify, tag: HTMLElement, index: number, data: Tagify.TagData & { newValue: string }, originalEvent: Event
    }>) => void): this;
    on(event: 'dropdown:show' | 'dropdown:hide' | 'dropdown:updated', cb: (e: CustomEvent<{
        tagify: Tagify, dropdown: HTMLElement
    }>) => void): this;
    on(event: 'dropdown:scroll', cb: (e: CustomEvent<{
        tagify: Tagify, percentage: number
    }>) => void): this;
    on(event: 'dropdown:select', cb: (e: CustomEvent<{
        tagify: Tagify, value: string;
    }>) => void): this;
}

export = Tagify;
