// Type definitions for @yaireo/tagify 4.16
// Project: https://github.com/yairEO/tagify
// Definitions by: Brakebein <https://github.com/Brakebein>
//                 Andre Wachsmuth <https://github.com/blutorange>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Tagify {
    /**
     * Mode for how tags are displayed and how they can be edited:
     * - `select`: Single-value dropdown-like select box.
     * - `mix`: Allow mixed-content. Requires the `pattern` setting to be set.
     */
    type TagifyMode = 'select' | 'mix';

    /**
     * Where the dropdown menu will appear:
     * - `manual` - will not render the dropdown, and you would need to do
     * it yourself.
     * - `text` - will place the dropdown next to the caret
     * - `input` - will place the dropdown next to the input
     * - `all` - normal, full-width design
     */
    type DropDownPosition = 'manual' | 'text' | 'input' | 'all';

    /**
     * Settings for the autocomplete feature at runtime.
     */
    interface AutoCompleteRuntimeSettings {
        /**
         * Tries to suggest the input's value while typing (match from
         * whitelist) by adding the rest of term as grayed-out text.
         * @default true
         */
        enabled: boolean;

        /**
         * If `true`, when the right arrow key is pressed, use the suggested
         * value to create a tag, else just auto-completes the input. In mixed
         * mode this is ignored and treated as `true`.
         * @default false
         */
        rightKey: boolean;
    }

    /**
     * Settings for the autocomplete feature that can be configured via the
     * `autocomplete` option of the settings that are passed to tagify.
     */
    interface AutoCompleteSettings extends Partial<AutoCompleteRuntimeSettings> {}

    /**
     * Settings for the dropdown feature at runtime.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownRuntimeSettings<T extends BaseTagData = TagData> {
        /**
         * Minimum characters input for showing a suggestions list.
         * `false` will not render a suggestions list.
         * @default 2
         */
        enabled: number | false;

        /**
         * If `true`, match exact item when a suggestion is selected (from the
         * dropdown) and also more strict matching for duplicate items.
         * Ensure `fuzzySearch` is `false` for this to work.
         * @default false
         */
        caseSensitive: boolean;

        /**
         * Maximum items to show in the suggestions list.
         * @default 10
         */
        maxItems: number;

        /**
         * Custom class name for the dropdown suggestions list.
         * @default Empty string.
         */
        classname: string;

        /**
         * Enables filtering dropdown items values by string _containing_ and not only _beginning_.
         * @default true
         */
        fuzzySearch: boolean;

        /**
         * Enable searching for accented items in the whitelist without typing exact match.
         * @default true
         */
        accentedSearch: boolean;

        /**
         * If `true`, the suggestions list includes already-selected tags (after filtering).
         * @default false
         */
        includeSelectedTags: boolean;

        /**
         * Controls where the dropdown menu is positioned.
         * @default 'all'
         */
        position: DropDownPosition;

        /**
         * When a suggestions list is shown, highlight the first item,
         * and also suggest it in the input (The suggestion can be accepted with → key).
         * @default false
         */
        highlightFirst: boolean;

        /**
         * Close the dropdown after selecting an item, if `enabled: 0` is set
         * (which means always show dropdown on focus).
         * @default true
         */
        closeOnSelect: boolean;

        /**
         * If `false`, keep typed text after selecting a suggestion.
         * @default true
         */
        clearOnSelect: boolean;

        /**
         * If whitelist is an array of tag objects, this setting controls which
         * data key will be printed in the dropdown.
         * @default undefined
         */
        mapValueTo?: string |
        /**
         * @param data The tag data to map.
         * @return The value that will be shown in the dropdown menu.
         */
        ((data: T) => string) | undefined;

        /**
         * When a user types something and trying to match the whitelist items
         * for suggestions, this setting allows matching other keys of a
         * whitelist objects.
         * @default ['value', 'searchBy']
         */
        searchKeys: string[];

        /**
         * Target node to which the suggestions dropdown is appended (only when
         * rendered). When `null`, appends to `document.body`.
         * @default null
         */
        appendTarget: HTMLElement | null;

        /**
         * If defined, will force the placement of the dropdown:
         * - `true` - always show the suggestions dropdown above the input field
         * - `false` - always show the suggestions dropdown below the input field
         *
         * By default, this setting it not defined and the placement of the
         * dropdown is automatically decided according to the space available,
         * where opening it below the input is preferred.
         * @default undefined
         */
        placeAbove?: boolean | undefined;
    }

    /**
     * Settings for the dropdown feature that can be configured via the
     * `dropdown` option of the settings that are passed to tagify.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownSettings<T extends BaseTagData = TagData> extends Partial<DropDownRuntimeSettings<T>> {}

    /**
     * Options for the mix mode feature at runtime.
     */
    interface MixModeRuntimeSettings {
        /**
         * Add after the added tag.
         * @default '\u00A0'
         */
        insertAfterTag: string | HTMLElement;
    }

    /**
     * Options for the mix mode feature that can be activated via the `mode`
     * option of the settings that are passed to tagify.
     */
    interface MixModeSettings extends Partial<MixModeRuntimeSettings> {}

    /**
     * Options related to accessibility at runtime.
     */
    interface A11yRuntimeSettings {
        /**
         * If `true`, allows to focus tags via tab navigation.
         * @default false
         */
        focusableTags: boolean;
    }

    /**
     * Options related to accessibility.
     */
    interface A11ySettings extends Partial<A11yRuntimeSettings> {}

    /**
     * Options for the edit tags feature at runtime.
     */
    interface EditTagsRuntimeSettings {
        /**
         * Number of clicks to enter `edit` mode: `1` for single click. Any
         * other value is considered as double-click
         * @default 2
         */
        clicks: 1 | 2;

        /**
         * When `true`, keeps invalid edits as-is until the escape key is
         * pressed while in focus.
         * @default true
         */
        keepInvalid: boolean;
    }

    /**
     * Options for the edit tags feature that can be activated via the
     * `editTags` option of the settings that are passed to tagify.
     */
    interface EditTagsSettings extends Partial<EditTagsRuntimeSettings> {}

    /**
     * Messages for reasons if tag validation fails.
     */
    interface InvalidTagsMessages {
        /**
         * When a new tag is empty.
         * @default 'empty'
         */
        empty: string;

        /**
         * When the new tag cannot be added, because it would exceed the maximum number of allowed tags.
         * @default 'number of tags exceeded'
         */
        exceed: string;

        /**
         * When the new tag does not conform to the specified (regex) pattern.
         * @default 'pattern mismatch'
         */
        pattern: string;

        /**
         * When a tag with the same value already exists and duplicates are not allowed.
         * @default 'already exists'
         */
        duplicate: string;

        /**
         * When the new tag is not allowed for any other reason.
         * @default 'not allowed'
         */
        notAllowed: string;
    }

    /**
     * Class names at runtime.
     */
    interface ClassNameRuntimeSettings {
        /**
         * @default 'tagify'
         */
        namespace: string;

        /**
         * @default 'tagify--mix'
         */
        mixMode: string;

        /**
         * @default 'tagify--select'
         */
        selectMode: string;

        /**
         * @default 'tagify__input'
         */
        input: string;

        /**
         * @default 'tagify--focus'
         */
        focus: string;

        /**
         * @default 'tagify__tag'
         */
        tag: string;

        /**
         * @default 'tagify--noAnim'
         */
        tagNoAnimation: string;

        /**
         * @default 'tagify--invalid'
         */
        tagInvalid: string;

        /**
         * @default 'tagify--notAllowed'
         */
        tagNotAllowed: string;

        /**
         * @default 'tagify__input--invalid'
         */
        inputInvalid: string;

        /**
         * @default 'tagify__tag__removeBtn'
         */
        tagX: string;

        /**
         * @default 'tagify__tag-text'
         */
        tagText: string;

        /**
         * @default 'tagify__dropdown'
         */
        dropdown: string;

        /**
         * @default 'tagify__dropdown__wrapper'
         */
        dropdownWrapper: string;

        /**
         * @default 'tagify__dropdown__header'
         */
        dropdownHeader: string;

        /**
         * @default 'tagify__dropdown__footer'
         */
        dropdownFooter: string;

        /**
         * @default 'tagify__dropdown__item'
         */
        dropdownItem: string;

        /**
         * @default 'tagify__dropdown__item--active'
         */
        dropdownItemActive: string;

        /**
         * @default 'tagify__dropdown__item--hidden'
         */
        dropdownItemHidden: string;

        /**
         * Initial class for the dropdown menu.
         *
         * Note: This is __not a typo__, this is the name as used by the tagify
         * library.
         * @default 'tagify__dropdown--initial'
         */
        dropdownInital: string;

        /**
         * @default 'tagify--loading'
         */
        scopeLoading: string;

        /**
         * @default 'tagify__tag--loading'
         */
        tagLoading: string;

        /**
         * @default 'tagify__tag--editable'
         */
        tagEditing: string;

        /**
         * @default 'tagify__tag--flash'
         */
        tagFlash: string;

        /**
         * @default 'tagify__tag--hide'
         */
        tagHide: string;

        /**
         * @default 'tagify--hasMaxTags'
         */
        hasMaxTags: string;

        /**
         * @default 'tagify--noTags'
         */
        hasNoTags: string;

        /**
         * @default 'tagify--empty'
         */
        empty: string;
    }

    /**
     * Optional class names that can be used to add additional class names to
     * the corresponding DOM elements.
     */
    interface ClassNameSettings extends Partial<ClassNameRuntimeSettings> {}

    /**
     * Render functions for the template feature at runtime.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface TemplatesRuntime<T extends BaseTagData = TagData> {
        /**
         * Template for wrapper element for the tags.
         */
        wrapper:
        /**
         * @param input Original input DOM element.
         * @param settings Tagify instance settings object.
         * @returns HTML string with the wrapper for the tags. Defaults to a
         * `TAGS` DOM element.
         */
        ((this: Tagify<T>, input: HTMLInputElement | HTMLTextAreaElement, settings: TagifyRuntimeSettings<T>) => string);

        /**
         * Template for the rendered tags.
         */
        tag:
        /**
         * @param tagData Data of the tag to render.
         * @param tagify Tagify instance to access, e.g., settings.
         * @returns HTML string with the rendered tag. Defaults to a `TAG` DOM
         * element.
         */
        ((this: Tagify<T>, tagData: T, tagify: Tagify<T>) => string);

        /**
         * This callback is called when the dropdown menu is about to be shown.
         * It receives the current settings and should return the HTML for the
         * dropdown menu container.
         */
        dropdown:
        /**
         * @param settings Current settings for the dropdown instance.
         * @returns HTML string with the dropdown menu container to use for the
         * dropdown menu.
         */
        ((this: Tagify<T>, settings: TagifyRuntimeSettings<T>) => string);

        /**
         * This callback is called to prepend the {@link dropdownHeader} template and
         * append {@link dropdownFooter} template to the generated HTML string of the
         * list of dropdown items.
         */
        dropdownContent:
        /**
         * @param htmlContent List of dropdown items as HTML string.
         * @returns `htmlContent` wrapped into {@link dropdownHeader} and {@link dropdownFooter}.
         */
        ((this: Tagify<T>, htmlContent: string) => string);

        /**
         * This callback is called once for each item in the dropdown list. It
         * is given an item and should return the HTML markup for that item.
         */
        dropdownItem:
        /**
         * @param Data of the item to render in the dropdown menu.
         * @returns HTML string with the rendered dropdown item that will be
         * shown in the dropdown menu.
         */
        ((this: Tagify<T>, item: T) => string);

        /**
         * Template for a header that is rendered above the list of dropdown items.
         */
        dropdownHeader:
        /**
         * @param suggestions An array of all the matched suggested items,
         * including those which were sliced away due to the {@link DropDownSettings.maxItems} setting.
         * @returns HTML string that is displayed at the top of the dropdown list.
         */
        ((this: Tagify<T>, suggestions: T[]) => string);

        /**
         * Template for a footer that is rendered beneath the list of dropdown items.
         */
        dropdownFooter:
        /**
         * @param suggestions An array of all the matched suggested items,
         * including those which were sliced away due to the {@link DropDownSettings.maxItems} setting.
         * @returns HTML string that is displayed at the bottom of the dropdown list.
         */
        ((this: Tagify<T>, suggestions: T[]) => string);

        /**
         * Callback invoked when no matching dropdown item was found. If there
         * is no match for the typed text, a special dropdown item will be
         * rendered using the value returned by this callback.
         */
        dropdownItemNoMatch:
        /**
         * @param data Dropdown request data. The `value` is the value by
         * which the whitelist should be filtered.
         * @returns HTML string that is displayed in the dropdown suggestions
         * list when no matching suggestions are found.
         */
        ((this: Tagify<T>, data: { value: string }) => string) | null;
    }

    /**
     * Render functions for the template feature that can be configured via the
     * `templates` option of the settings that are passed to tagify.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface Templates<T extends BaseTagData = TagData> extends Partial<TemplatesRuntime<T>> {}

    /**
     * Data passed with suggestionClick hook {@link Hooks.suggestionClick}.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface SuggestionClickData<T extends BaseTagData = TagData> {
        /**
         * Tagify instance.
         */
        tagify: Tagify<T>;
        /**
         * Data of selected suggestion item.
         */
        tagData: T | null;
        /**
         * Element of selected suggestion item.
         */
        suggestionElm: HTMLElement | null;
    }

    /**
     * Data passed with beforePaste hook {@link Hooks.beforePaste}.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface BeforePasteData<T extends BaseTagData = TagData> {
        /**
         * Tagify instance.
         */
        tagify: Tagify<T>;
        /**
         * Text content that have been pasted into Tagify.
         */
        pastedText: string;
        /**
         * The raw clipboard data transfer object as provided by the paste event.
         */
        clipboardData: DataTransfer;
    }

    /**
     * Promise-based hooks for async program flow scenarios at runtime.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface HooksRuntime<T extends BaseTagData = TagData> {
        /**
         * Hook invoked before a tag is removed. Can be used to perform a custom
         * action. The tag is removed only when the promise is fulfilled. When
         * the promise is rejected, the tag is not removed.
         */
        beforeRemoveTag:
        /**
         * @param tags Tag or tags that are schedule to be removed.
         * @return Promise that controls whether the tags are removed. When the
         * promise resolves, the tags are removed if the promise was fulfilled,
         * or kept when the promise was rejected.
         */
        ((tags: T[]) => Promise<void>);

        /**
         * Hook invoked when the user clicks on (or selects via Enter key) a suggestion in the dropdown
         * menu. Can be used to perform custom actions, such as removing a
         * suggestion from the dropdown menu via a custom remove button. The
         * suggestion is accepted and a new tag is added only when the promise
         * is fulfilled. When the promise is rejected, the suggestion is not
         * accepted and no tag is added.
         */
        suggestionClick:
        /**
         * @param event Click or keyboard event that occurred on a suggestion item.
         * @param data Data and element of selected suggestion item.
         * @return Promise that controls whether the suggestion is accepted.
         * When the promise resolves, the suggestion is accepted if the promise
         * was fulfilled, and declined when the promise was rejected.
         */
        ((event: MouseEvent | KeyboardEvent, data: SuggestionClickData<T>) => Promise<void>);

        /**
         * Hook invoked when the user pastes a string into Tagify. It can be used to change
         * the pasted string before it gets added to Tagify.
         * @param event Clipboard event
         * @param data Data object with pasted text and clipboard data.
         * @return Promise with optional string value. If the promise resolves with a string value,
         * this value gets added to Tagify. Without any value, the original paste value gets added.
         */
        beforePaste: ((event: ClipboardEvent, data: BeforePasteData<T>) => Promise<string|undefined>);
    }

    /**
     * Promise-based hooks for async program flow scenarios. Allows to "hook"
     * (intervene) at certain points of the program, which were selected as a
     * suitable place to pause the program flow and wait for further
     * instructions on how / if to proceed.
     *
     * See also the `hooks` option of the settings that are passed to tagify.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface Hooks<T extends BaseTagData = TagData> extends Partial<HooksRuntime<T>> {}

    /**
     * Settings that are available after the tagify instance was created.
     * Includes a few extra properties that are not available when creating a
     * new instance. These are also passed to several callback methods.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface TagifyCoreSettings<T extends BaseTagData = TagData> {
        /**
         * No user-interaction (add / remove / edit) is allowed when `true`.
         */
        readonly: boolean;

        /**
         * `TagData` property which will be displayed as the tag's text.
         * Remember to keep `value` property unique.
         * @default 'value'
         */
        tagTextProp: keyof T;

        /**
         * Placeholder text. If this attribute is set on an input / textarea
         * element it will override this setting.
         * @default Empty string
         */
        placeholder: string;

        /**
         * RegEx string. Split tags by any of these delimiters.
         * Example delimiters: ",|.| " (comma, dot, or whitespace)
         * @default ','
         */
        delimiters: string | RegExp;

        /**
         * Validate input by RegEx pattern (can also be applied on the input itself as an attribute).
         * Example: /[1-9]/
         * @default null
         */
        pattern: string | RegExp | null;

        /**
         * Use `select` for single-value dropdown-like select box.
         * See `mix` as value to allow mixed-content. The `pattern` setting must be set to some character.
         * @default null
         */
        mode?: TagifyMode | null | undefined;

        /**
         * Interpolation for mix mode. Everything between these will become a
         * tag.
         * @default ['[[', ']]']
         */
        mixTagsInterpolator: [string, string];

        /**
         * Define conditions in which typed mix-tags content is allowing a tag
         * to be created after.
         * @default /,|\.|\:|\s/
         */
        mixTagsAllowedAfter: RegExp;

        /**
         * Should duplicate tags be allowed or not?
         * @default false
         */
        duplicates: boolean;

        /**
         * If `true` trim the tag's value (remove before / after white spaces).
         * @default true
         */
        trim: boolean;

        /**
         * Assign a unique id to enable the feature to store and load persisted data via `localStorage`.
         * @default undefined
         */
        id?: string | undefined;

        /**
         * Should ONLY use tags allowed in whitelist.
         * In `mix` mode, setting it to `false` will not allow creating new tags.
         * @default false
         */
        enforceWhitelist: boolean;

        /**
         * Set `false` to disable manually typing/pasting/editing tags (tags may only be added from the whitelist).
         * @default true
         */
        userInput: boolean;

        /**
         * An array of allowed tags.
         *
         * Also used for auto-completion when `autocomplete.enabled` is `true`.
         * @default Empty array.
         */
        whitelist: string[] | T[];

        /**
         * An array of tags which aren't allowed.
         * @default Empty array.
         */
        blacklist: string[];

        /**
         * Automatically adds the text which was entered as a tag when a blur
         * event happens.
         * @default true
         */
        addTagOnBlur: boolean;

        /**
         * If `true`, the native way of input's `onChange` event is kept,
         * and it only fires when the field is blurred.
         * @default true
         */
        onChangeAfterBlur: boolean;

        /**
         * Automatically converts pasted text into tags.
         * @default true
         */
        pasteAsTags: boolean;

        /**
         * Callbacks that are invoked when the event specified by the key
         * occurs.
         */
        callbacks?: {
            [K in keyof EventDataMap]?: (event: CustomEvent<EventDataMap<T>[K]>) => void;
        } | undefined;

        /**
         * Maximum number of allowed tags.
         *
         * When reached, adds a class `tagify--hasMaxTags` to `<tags>`.
         * @default Infinity
         */
        maxTags: number;

        /**
         * Customize messages for reasons if tag validation fails.
         */
        texts?: Partial<InvalidTagsMessages> | undefined;

        /**
         * If the `pattern` setting does not meet your needs, use this function
         * to implement a custom validation.
         */
        validate?:
        /**
         * @param tagData The tag to validate.
         * @returns `true` if the tag is valid. `false` if the tag is invalid.
         * When a string is returned, the tag is considered invalid and the
         * string will be used as an error message.
         */
        ((tagData: T) => boolean | string) | undefined;

        /**
         * Takes a tag data as an argument and allows mutating it before a tag
         * is created or edited and also before validation.
         *
         * Should not return anything, only mutate the argument.
         */
        transformTag:
        /**
         * @param tagData The tag to transform. May be mutated by this method.
         */
        ((tagData: T) => void);

        /**
         * If `true`, do not remove tags which did not pass validation.
         * @default false
         */
        keepInvalidTags: boolean;

        /**
         * If `true`, create invalid tags. Otherwise, keep the editable input
         * and do not create tags from it.
         * @default true
         */
        createInvalidTags: boolean;

        /**
         * If `true`, do not add invalid, temporary tags before automatically
         * removing them.
         * @default false
         */
        skipInvalid: boolean;

        /**
         * When the backspace key is pressed:
         * `true` - remove last tag
         * `edit` - edit last tag
         * `false` - do nothing (useful for outside style)
         * @default true
         */
        backspace: boolean | 'edit';

        /**
         * If you wish your original input / textarea `value` property format to
         * be anything other than the default (which I recommend keeping), you
         * may use this and make sure it returns a string.
         */
        originalInputValueFormat?:
        /**
         * @param value Currently selected tags.
         * @returns The stringified value representing all tags. This value is
         * set on the hidden input or textarea element.
         */
        ((value: T[]) => string) | undefined;
    }

    /**
     * Settings that are available after the tagify instance was created.
     * Includes a few extra properties that are not available when creating a
     * new instance. These are also passed to several callback methods.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface TagifyRuntimeSettings<T extends BaseTagData = TagData> extends TagifyCoreSettings<T> {
        /**
         * Adds a required attribute to the Tagify wrapper element. Does nothing
         * more.
         */
        required: boolean;

        /**
         * `true` if the input element has the `disabled` attribute
         * or the Tagify instance has been disabled.
         */
        disabled: boolean;

        /**
         * Functions that return template strings. Can be used to customize how
         * tags, drop down menus etc. are rendered.
         */
        templates: TemplatesRuntime<T>;

        /**
         * Number of clicks to enter `edit` mode: 1 for single click, `2` for a
         * double-click.
         *
         * `false` or `null` will disallow editing.
         * @default {clicks: 2, keepInvalid: true}
         */
        editTags: 1 | 2 | false | null | EditTagsRuntimeSettings;

        /**
         * Optional settings to configure how mixed mode behaves, see also the
         * `mode` setting.
         */
        mixMode: MixModeRuntimeSettings;

        /**
         * Options related to accessibility.
         */
        a11y: A11yRuntimeSettings;

        /**
         * Options for offering autocomplete suggestions as the user types.
         */
        autoComplete: AutoCompleteRuntimeSettings;

        /**
         * Optional class names that are added to the corresponding elements.
         */
        classNames: ClassNameRuntimeSettings;

        /**
         * Options for offering a dropdown menu with available tags.
         */
        dropdown: DropDownRuntimeSettings<T>;

        /**
         * Promise-based hooks for async program flow scenarios. Allows to
         * "hook" (intervene) at certain points of the program, which were
         * selected as a suitable place to pause the program flow and wait for
         * further instructions on how / if to proceed.
         */
        hooks: HooksRuntime<T>;
    }

    /**
     * Settings that are available after the tagify instance was created.
     * Includes a few extra properties that are not available when creating a
     * new instance. These are also passed to several callback methods.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface TagifySettings<T extends BaseTagData = TagData> extends Partial<TagifyCoreSettings<T>> {
        /**
         * Functions that return template strings. Can be used to customize how
         * tags, drop down menus etc. are rendered.
         */
        templates?: Templates<T> | undefined;

        /**
         * Number of clicks to enter `edit` mode: 1 for single click, `2` for a
         * double-click.
         *
         * `false` or `null` will disallow editing.
         * @default {clicks: 2, keepInvalid: true}
         */
        editTags?: 1 | 2 | false | null | EditTagsSettings | undefined;

        /**
         * Optional settings to configure how mixed mode behaves, see also the
         * `mode` setting.
         */
        mixMode?: MixModeSettings | undefined;

        /**
         * Options related to accessibility.
         */
        a11y?: A11ySettings | undefined;

        /**
         * Options for offering autocomplete suggestions as the user types.
         */
        autoComplete?: AutoCompleteSettings | undefined;

        /**
         * Optional class names that are added to the corresponding elements.
         */
        classNames?: ClassNameSettings | undefined;

        /**
         * Options for offering a dropdown menu with available tags.
         */
        dropdown?: DropDownSettings<T> | undefined;

        /**
         * Promise-based hooks for async program flow scenarios. Allows to
         * "hook" (intervene) at certain points of the program, which were
         * selected as a suitable place to pause the program flow and wait for
         * further instructions on how / if to proceed.
         */
        hooks?: Hooks<T> | undefined;
    }

    /**
     * Optional settings for creating a new tagify instance. These can be used
     * to modify how the tagify component behaves.
     * @deprecated Just use {@link TagifySettings}.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface TagifyConstructorSettings<T extends BaseTagData = TagData> extends TagifySettings<T> {}

    /**
     * Generic tag format that requires only a value and allows other
     * properties.
     *
     * `value` property must be unique, i.e. no two different tags may share the
     * same value.
     *
     * Note to TypeScript users: you can parametrize the tagify instance with a
     * type parameter that extends from `BaseTagData` instead for additional
     * type safety.
     */
    interface TagData extends BaseTagData {
        [key: string]: any;
    }

    /**
     * Base interface for tag data. A tag always requires a value, but may have
     * more custom properties.
     *
     * `value` property must be unique, i.e. no two different tags may share the
     * same value.
     *
     * Note to TypeScript users: you can parametrize the tagify instance with a
     * type parameter that extends this interface for additional type safety.
     */
    interface BaseTagData {
        value: string;
    }

    /**
     * Base event data common to all events.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EventData<T extends BaseTagData = TagData> {
        /**
         * The tagify instance which triggered the event.
         */
        tagify: Tagify<T>;
    }

    /**
     * Event data with a single parameter. When a non-object value is passed to
     * trigger, it is wrapped in this object.
     * @template T Type of the tag data. See the Tagify class for more details.
     * @template S Type of the value provided by this event.
     */
    interface SingleEventData<T extends BaseTagData = TagData, S = unknown> extends EventData<T> {
        value: S;
    }

    /**
     * Event data relating to a single tag.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface TagEventData<T extends BaseTagData = TagData> extends EventData<T> {
        data?: T | undefined;
        index?: number | undefined;
        tag: HTMLElement;
    }

    /**
     * Event data for events triggered by DOM events.
     * @template T Type of the tag data. See the Tagify class for more details.
     * @template E Type of the original event wrapped by this event.
     */
    interface DomEventData<T extends BaseTagData = TagData, E extends Event = Event> extends EventData<T> {
        event: E;
    }

    /**
     * Event data for keyboard related events.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface KeyboardEventData<T extends BaseTagData = TagData> extends DomEventData<T, KeyboardEvent> { }

    /**
     * Event data for when the element receives or loses focus.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface FocusChangeEventData<T extends BaseTagData = TagData> extends EventData<T> {
        relatedTarget: Element;
    }

    /**
     * Event data for events related to the dropdown feature.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownEventData<T extends BaseTagData = TagData> extends HTMLDivElement, EventData<T> { }

    /**
     * A tag has been added.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface AddEventData<T extends BaseTagData = TagData> extends TagEventData<T> { }

    /**
     * The component lost focus.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface BlurEventData<T extends BaseTagData = TagData> extends FocusChangeEventData<T> { }

    /**
     * Any change to the value has occurred.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface ChangeEventData<T extends BaseTagData = TagData> extends SingleEventData<T, string> { }

    /**
     * Clicking a tag.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface ClickEventData<T extends BaseTagData = TagData> extends DomEventData<T, MouseEvent>, TagEventData<T> {
        data: T;
        index: number;
    }

    /**
     * Double-clicking a tag.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DoubleClickEventData<T extends BaseTagData = TagData> extends TagEventData<T> { }

    /**
     * Suggestions dropdown has been removed from the DOM.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownHideEventData<T extends BaseTagData = TagData> extends DropDownEventData<T> { }

    /**
     * Suggestions dropdown is to be rendered. The dropdown DOM node is
     * passed in the callback.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownShowEventData<T extends BaseTagData = TagData> extends DropDownEventData<T> { }

    /**
     * When the dropdown menu is open and its items were recomputed via
     * `Tagify.refilter`.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownUpdatedEventData<T extends BaseTagData = TagData> extends DropDownEventData<T> { }

    /**
     * No whitelist suggestion item matched for the typed input. At this point
     * it is possible to manually set `suggestedListItems` to any possible
     * custom value, for example: `[{ value:"default" }]`.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownNoMatchEventData<T extends BaseTagData = TagData> extends SingleEventData<T, string> { }

    /**
     * Suggestions dropdown item selected (by mouse / keyboard/ touch).
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownSelectEventData<T extends BaseTagData = TagData> extends EventData<T> {
        data: T;
        elm: DomReference['dropdown'];
        event: MouseEvent | {};
    }

    /**
     * Tells the percentage scrolled. (`event.detail.percentage`).
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface DropDownScrollEventData<T extends BaseTagData = TagData> extends EventData<T> {
        percentage: number;
    }

    /**
     * Just before a tag has been updated, while still in "edit" mode.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EditBeforeUpdateEventData<T extends BaseTagData = TagData> extends TagEventData<T> { }

    /**
     * Typing inside an edited tag.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EditInputEventData<T extends BaseTagData = TagData> extends TagEventData<T> {
        data: T & { newValue: string };
        index: number;
        event: Event;
    }

    /**
     * Keydown event while an edited tag is in focus
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EditKeydownEventData<T extends BaseTagData = TagData> extends KeyboardEventData<T> { }

    /**
     * A tag is now in "edit mode".
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EditStartEventData<T extends BaseTagData = TagData> extends TagEventData<T> {
        data: T;
        index: number;
        isValid: boolean;
    }

    /**
     * A tag as been updated (changed view editing or by directly calling
     * the `replaceTag` method).
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EditUpdatedEventData<T extends BaseTagData = TagData> extends TagEventData<T> { }

    /**
     * The component has received focus.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface FocusEventData<T extends BaseTagData = TagData> extends FocusChangeEventData<T> { }

    /**
     * A tag has been added but did not pass validation.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface InvalidTagEventData<T extends BaseTagData = TagData> extends TagEventData<T> {
        data: T;
        /**
         * Message indicating the type of error. Can be either a boolean to indicate success,
         * or a message code as defined with {@link InvalidTagsMessages} or returned by the custom {@link TagifySettings.validate} method.
         */
        message: string | boolean;
    }

    /**
     * Input event, when a tag is being typed / edited.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface InputEventData<T extends BaseTagData = TagData> extends EventData<T> {
        inputElm: HTMLInputElement | HTMLTextAreaElement;
        value: string;
    }

    /**
     * When tagify input has focus and a key was pressed.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface KeydownEventData<T extends BaseTagData = TagData> extends KeyboardEventData<T> { }

    /**
     * A tag has been removed (use `removeTag` instead with jQuery).
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface RemoveEventData<T extends BaseTagData = TagData> extends TagEventData<T> { }

    /**
     * Map between the events that are triggered by tagify and the data provided
     * for each event.
     * @template T Type of the tag data. See the Tagify class for more details.
     */
    interface EventDataMap<T extends BaseTagData = TagData> {
        /**
         * A tag has been added.
         */
        'add': AddEventData<T>;

        /**
         * The component lost focus.
         */
        'blur': BlurEventData<T>;

        /**
         * Any change to the value has occurred.
         */
        'change': ChangeEventData<T>;

        /**
         * Clicking a tag.
         */
        'click': ClickEventData<T>;

        /**
         * Double-clicking a tag.
         */
        'dblclick': DoubleClickEventData<T>;

        /**
         * Suggestions dropdown has been removed from the DOM.
         */
        'dropdown:hide': DropDownHideEventData<T>;

        /**
         * No whitelist suggestion item matched for the typed input. At this
         * point it is possible to manually set `suggestedListItems` to any
         * possible custom value, for example: `[{ value:"default" }]`.
         */
        'dropdown:noMatch': DropDownNoMatchEventData<T>;

        /**
         * The dropdown was scrolled by the user. Use `event.detail.percentage`
         * to get the percentage scrolled.
         */
        'dropdown:scroll': DropDownScrollEventData<T>;

        /**
         * A suggestions dropdown item got selected (by mouse / keyboard /
         * touch).
         */
        'dropdown:select': DropDownSelectEventData<T>;

        /**
         * Suggestions dropdown is about to be rendered. The dropdown DOM node
         * is passed to the callback.
         */
        'dropdown:show': DropDownShowEventData<T>;

        /**
         * When the dropdown menu is open and its items were recomputed via
         * `Tagify.refilter`.
         */
        'dropdown:updated': DropDownUpdatedEventData<T>;

        /**
         * Just before a tag has been updated, while still in "edit" mode.
         */
        'edit:beforeUpdate': EditBeforeUpdateEventData<T>;

        /**
         * Typing inside an edited tag.
         */
        'edit:input': EditInputEventData<T>;

        /**
         * Keydown event while an edited tag is in focus
         */
        'edit:keydown': EditKeydownEventData<T>;

        /**
         * A tag is now in "edit mode".
         */
        'edit:start': EditStartEventData<T>;

        /**
         * A tag has been updated (changed view editing or by directly calling
         * the `replaceTag` method).
         */
        'edit:updated': EditUpdatedEventData<T>;

        /**
         * The component has received focus.
         */
        'focus': FocusEventData<T>;

        /**
         * Input event, when a tag is being typed / edited.
         */
        'input': InputEventData<T>;

        /**
         * A tag has been added but did not pass validation.
         */
        'invalid': InvalidTagEventData<T>;

        /**
         * When the tagify input element (for adding new tags or editing
         * existing tags) has focus and a key was pressed.
         */
        'keydown': KeydownEventData<T>;

        /**
         * A tag has been removed (use `removeTag` instead with jQuery).
         */
        'remove': RemoveEventData<T>;
    }

    // types for the tagify instance

    /**
     * References to DOM elements used by an active tagify instance.
     */
    interface DomReference {
        /**
         * The dropdown container with the `tagify__dropdown` class.
         */
        dropdown: HTMLDivElement;

        /**
         * The SPAN element representing the visible tag input area with the
         * `tagify__input` class.
         */
        input: HTMLSpanElement;

        /**
         * The original hidden INPUT or TEXTAREA element that stores the value.
         */
        originalInput: HTMLInputElement | HTMLTextAreaElement;

        /**
         * The tagify container with the `tagify` class.
         */
        scope: HTMLElement;
    }

    /**
     * Optional settings that can be passed to {@link Tagify.removeAllTags}.
     */
    interface RemoveAllTagsOptions {
        /**
         * When `true`, no change is event triggered and the change is applied
         * silently. When `false` or not given, a change event is triggered
         * normally as if the user had made the change. Note that no event is
         * triggered when the value of the INPUT or TEXTAREA element did not
         * change.
         * @default false
         */
        withoutChangeEvent?: boolean | undefined;
    }

    /**
     * Optional settings that can be passed to {@link Tagify.update}.
     */
    interface UpdateOptions {
        /**
         * When `true`, no change is event triggered and the change is applied
         * silently. When `false` or not given, a change event is triggered
         * normally as if the user had made the change. Note that no event is
         * triggered when the value of the INPUT or TEXTAREA element did not
         * change.
         * @default false
         */
        withoutChangeEvent?: boolean | undefined;
    }
}

/**
 * Tagify class. This is the main entry point for creating a new tagify editor.
 * @template T Type of the tag data used by the tagify instance. Must contain at
 * least a `value` property. Defaults to {@link Tagify.TagData}, which allows
 * arbitrary properties. To enjoy more type safety, extend from
 * {@link Tagify.BaseTagData}, specify the allowed properties and use that as
 * the type parameter.
 */
declare class Tagify<T extends Tagify.BaseTagData = Tagify.TagData> {
    /**
     * Dropdown specific methods.
     */
    dropdown: {
        /**
         * Refilters the list of items in the dropdown.
         * @param filterValue Filter the whitelist by this value (optional).
         */
        refilter(filterValue?: string): void;

        /**
         * Shows the suggestions list dropdown.
         * @param filterValue Filter the whitelist by this value (optional).
         */
        show(filterValue?: string): void;

        /**
         * Hides the suggestions list dropdown.
         * @param force Whether the dropdown menu should be hidden even when it
         * would need to be prevented.
         */
        hide(force?: boolean): void;

        /**
         * Toggles the suggestions list dropdown show/hide.
         * @param show Force show.
         */
        toggle(show?: boolean): void;

        /**
         * Add all suggested items as tags and close the suggestion dropdown.
         * @param onlyRendered Include only suggested items that are currently rendered, otherwise include all.
         */
        selectAll(onlyRendered?: boolean): void;
    };

    /**
     * The current settings of this tagify instance.
     */
    settings: Tagify.TagifyRuntimeSettings<T>;

    /**
     * List with the currently available options for the dropdown.
     */
    suggestedListItems?: T[] | undefined;

    /**
     * Get or dynamically set whitelist.
     */
    whitelist: string[] | T[];

    /**
     * Array with tag data of the currently selected tags.
     */
    value: T[];

    /**
     * References to DOM elements used by this tagify instance.
     */
    DOM: Tagify.DomReference;

    /**
     * Reference to messages for reasons if tag validation fails.
     */
    TEXTS: Tagify.InvalidTagsMessages;

    /**
     * Creates a new tagify editor on the given input element.
     * @param inputElement Input or textarea element to convert into a tagify
     * editor.
     * @param settings Optional settings to configure the tagify
     * editor.
     */
    constructor(
        inputElement: HTMLInputElement | HTMLTextAreaElement,
        settings?: Tagify.TagifySettings<T>
    );

    /**
     * @param tagData Tag for which to retrieve its HTML attributes.
     * @returns A string of HTML element attributes for the given tag.
     */
    getAttributes(tagData: T): string;

    /**
     * Reverts the input element back as it was before Tagify was applied.
     */
    destroy(): void;

    /**
     * Removes all tags and resets the original input tag's value property.
     * @param opts Optional settings to affect whether events are triggered.
     */
    removeAllTags(opts?: Tagify.RemoveAllTagsOptions): void;

    /**
     * Get `value` (array of tag data) without properties that are only used internally.
     * @return A list of tag data without internal properties (that usually start with two underscores).
     */
    getCleanValue(): T[];

    /**
     * Update the value of the original (hidden) INPUT or TEXTAREA field so that
     * it reflects the currently selected tags.
     * @param opts Optional settings that affect how the update is performed.
     * Can be used to suppress the change event.
     */
    update(opts?: Tagify.UpdateOptions): void;

    /**
     * Get `value` (array of tag data) as string. If in mixed mode, get the current value entered in the tagify
     * input field {@link getMixedTagsAsString}.
     * @return Stringified tag data.
     */
    getInputValue(): string;

    /**
     * Should only be used when in mixed mode.
     *
     * Creates a string representing the current value entered in the tagify
     * input field. In mixed mode, both tags and plain text content may be
     * entered. The string that is returned will have tags enclosed in the
     * delimiters as specified by `mixTagsInterpolator`. For example, when
     * `mixTagsInterpolator` was not changed from its default:
     *
     * ```text
     * [[{"id":101,"value":"cartman","title":"Eric Cartman"}]] does not know [[{"value":"homer simpson","readonly":true}]] because he's a relic.
     * ```
     *
     * @return When not in mixed mode: the empty string. When in mixed mode: a
     * string with the entire content currently entered in the tagify input
     * fields, with tags enclosed in the delimiters as specified by the
     * `mixTagsInterpolator` setting.
     */
    getMixedTagsAsString(): string;

    /**
     * Parse and add tags.
     * @param tags Tags to add. When a string, it can be either a single word or
     * multiple words separated with a delimiter.
     * @param clearInput If `true`, the input's value gets cleared after
     * adding tags.
     * @param skipInvalid If `true`, do not add, mark & remove invalid tags
     * (defaults to the current tagify settings).
     * @return List of HTML elements representing the tags that were added.
     */
    addTags(tags: string | string[] | T[], clearInput?: boolean, skipInvalid?: boolean): HTMLElement[];

    /**
     * Bypasses the normalization process in `addTags`, forcefully adding tags
     * at the last caret location or at the end, if there's no last caret
     * location saved (at `tagify.state.selection`).
     * @param tags Tags to add. When a string, it can be either a single word or
     * multiple words separated with a delimiter.
     */
    addMixTags(tags: string | string[] | T[]): void;

    /**
     * Remove single/multiple tags. When nothing is passed, removes the last
     * tag.
     * @param tagElms DOM element(s) or a String value
     * @param silent A flag, which when turned on, does not remove any value and
     * does not update the original input value but simply removes the tag from
     * tagify.
     * @param tranDuration - Delay for animation in milliseconds, after which
     * the tag will be removed from the DOM.
     */
    removeTags(tagElms?: HTMLElement[] | HTMLElement | string, silent?: boolean, tranDuration?: number): void;

    /**
     * Create an empty tag (optionally with predefined data) and enters edit
     * mode directly.
     * @param initialData Optional initial data for the new tag.
     */
    addEmptyTag(initialData?: Partial<T>): void;

    /**
     * Converts the given value into tags. This method gets called
     * automatically when instantiating Tagify. Also works for mixed tags.
     * @param value Value to convert to tags. When not given, the value of
     * the hidden INPUT or TEXTAREA element is used.
     */
    loadOriginalValues(value: string | string[]): void;

    /**
     * @param value Value to search for.
     * @param property Optional property whose value is used for the search.
     * Defaults to `value` when not given. The property will be converted to a
     * string and compared to the search value.
     * @param whitelist List of tag in which to search. When no given, uses the
     * current whitelist setting of this tagify instance.
     * @returns An array of found matching items (case-insensitive).
     */
    getWhitelistItem(value: string, property?: keyof T, whitelist?: string[] | T[]): T[];

    /**
     * @param value Value to search for in the `value` property` of the
     * existing tags.
     * @param caseSensitive Whether the search for tags should be
     * case-sensitive.
     * @returns When the `mode` is set to `select`, this returns `false`.
     * Otherwise, this returns how many tags with the given value already exist.
     */
    isTagDuplicate(value: string | T, caseSensitive?: boolean): number | false;

    /**
     * Converts a string argument (such as `[[foo]] and [[bar]] are...`) into
     * HTML with mixed tags & texts.
     * @param value A value with tags to parse.
     * @return The parsed HTML with mixed tags & texts.
     */
    parseMixTags(value: string): string;

    /**
     * @param classes - Filter by set of class names
     * @return A list of DOM nodes of all the tags, optionally filtered by the
     * given class names. Empty array when there are no tags.
     */
    getTagElms(...classes: string[]): HTMLElement[];

    /**
     * @param value Value to search for in the text content of the current tags.
     * @returns The DOM node for the first matching tag. `undefined` when no
     * matching tag was found.
     */
    getTagElmByValue(value: string): HTMLElement | undefined;

    /**
     * @param value Value to search for in the text content of the current tags.
     * @returns The 0-based indices of the matching tags. Empty array when no
     * matching tag was found.
     */
    getTagIndexByValue(value: string): number[];

    /**
     * Gets the tag data of the given tag element.
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @return The data for the tag. `undefined` when no tag data was found or
     * the element is not an existing tag.
     */
    tagData(tagElm: HTMLElement): T | undefined;

    /**
     * Sets the data of the given tag element to the given value.
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @param data New data to set on the tag. Replaces the values for the given
     * properties. Properties not given remain unchanged.
     * @param override `undefined` or `false` to assign the given data to the
     * tag's data and keep other properties.
     * @return The new tag data for the tag, or the given data when the element
     * is not an existing tag.
     */
    tagData<P extends Partial<T>>(tagElm: HTMLElement, data: P, override?: false): P | T;

    /**
     * Sets the data of the given tag element to the given value.
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @param data New data to set on the tag. Replaces the values for the given
     * properties. Properties not given remain unchanged.
     * @param override `true` to replace all the entire tag data with the given
     * data.
     * @return The new tag data for the tag, or the given data when the element
     * is not an existing tag.
     */
    tagData(tagElm: HTMLElement, data: T, override: true): T;

    /**
     * Switches a tag into edit mode so that it can be edited by the user.
     * @param tagElm The tag element to edit. If none is given, use the last
     * tag.
     * @return This tagify instance for chaining methods.
     */
    editTag(tagElm?: HTMLElement): this;

    /**
     * Get the HTML element which has the actual tag's content
     * (by default those with the `tagify__tag-text` class).
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @return The node which has the actual tag's content.
     */
    getTagTextNode(tagElm: HTMLElement): HTMLElement;

    /**
     * Set the text of a tag (DOM only, does not affect the actual data).
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @param html New text/html string.
     */
    setTagTextNode(tagElm: HTMLElement, html: string): void;

    /**
     * Replaces an existing tag with a new one. Used for updating a tag's data.
     * Also exits the tag's edit mode.
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @param tagData The new tag data for the tag.
     */
    replaceTag(tagElm: HTMLElement, tagData: T): void;

    /**
     * Toggle loading state on/off (e.g. for AJAX whitelist pulling)
     * @param loading `true` to switch to the loading state, `false` to switch out of
     * the loading state.
     * @return This tagify instance for chaining methods.
     */
    loading(loading: boolean): this;

    /**
     * Toggle specific tag loading state on or off.
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @param loading `true` to switch the tag to the loading state, `false` to
     * switch it out of the loading state.
     * @return This tagify instance for chaining methods.
     */
    tagLoading(tagElm: HTMLElement, loading: boolean): this;

    /**
     * Creates a new tag DOM element with the given data.
     * @param tagData Data to use for creating the tag.
     * @returns A new tag element from the supplied tag data.
     */
    createTagElem(tagData: T): HTMLElement;

    /**
     * Injects text or HTML node at last caret position,
     * which is saved on the "state" when "blur" event gets triggered.
     * @param injectedNode The text content or node to inject at the current
     * caret position.
     * @param range Optional range object, must have `anchorNode` and
     * `anchorOffset` set.
     * @return This tagify instance for chaining methods.
     */
    injectAtCaret(injectedNode: string | HTMLElement, range?: Selection): this;

    /**
     * Places the caret after a given node.
     * @param node Node after which to place the caret.
     */
    placeCaretAfterNode(node: HTMLElement): void;

    /**
     * Inserts text or a node after the given tag.
     * @param tagElm A tag HTML element (by default those with the `tagify__tag`
     * class).
     * @param newNode Text content or node to insert.
     * @return The newly inserted node. A new node is created when a string is
     * given.
     */
    insertAfterTag(tagElm: HTMLElement, newNode: string | HTMLElement): HTMLElement;

    /**
     * Toggles the given class on the main tagify container (`scope`).
     * @param className Name of the class to toggle.
     * @param force If not given, adds the class to the element if not present
     * and removes it when present. If `true`, adds the class to the element.
     * If `false`, removes the class from the element.
     */
    toggleClass(className: string, force?: boolean): void;

    /**
     * Update `value` (array of tag data) by traversing all valid tags.
     *
     * Iterates all tag DOM nodes and rebuilds the `value` array. Call this if
     * tags get sorted manually.
     */
    updateValueByDOMTags(): void;

    /**
     * Converts a template string into a DOM node.
     * @template K The name of a template from `settings.templates`.
     * @param template The name of a template from `settings.templates`.
     * @param data Arguments passed to the template function.
     * @returns The rendered HTML string.
     */
    parseTemplate<K extends keyof Tagify.TemplatesRuntime>(
        template: K,
        data: Parameters<Exclude<Tagify.TemplatesRuntime<T>[K], null>>
    ): HTMLElement;

    /**
     * Converts a template string into a DOM node.
     * @template Args Arguments passed to the template function.
     * @param template A template function which returns a string.
     * @param data Arguments passed to the template function.
     * @returns The rendered HTML string.
     */
    parseTemplate<Args extends any[]>(template: ((...args: Args) => string), data: Args): HTMLElement;

    /**
     * Switches read-only mode on or off.
     * @param readonly `true` to switch the tagify instance to read-only mode,
     * `false` to switch off read-only mode.
     */
    setReadonly(readonly: boolean): void;

    /**
     * Toggles "disabled" mode on/off.
     */
    setDisabled(disabled: boolean): void;

    /**
     * Get data for the specific instance by `key` parameter from `localStorage`.
     * @param key `localStorage` key (under the tagify namespace).
     * @returns Data stored under `key` in `localStorage`.
     * Returns `undefined` if {@link TagifyConstructorSettings.id} has not been set or no entry exists for `key` in `localStorage`.
     */
    getPersistedData(key: string): unknown;

    /**
     * Set data for the specific instance.
     * Must supply a second parameter which will be the key to save the data in the `localStorage`
     * (under the tagify namespace).
     * In order to use this method, {@link TagifyConstructorSettings.id} must be set.
     * @param data Data to store in `localStorage`.
     * @param key `localStorage` key (under the tagify namespace).
     */
    setPersistedData(data: unknown, key: string): void;

    /**
     * Clears data for the specific instance by `key` parameter.
     * If the `key` parameter is omitted, clears all persisted data related to this instance (by its `id` which was set in the settings).
     * @param key `localStorage` key (under the tagify namespace).
     */
    clearPersistedData(key?: string): void;

    /**
     * Removes a listener previously added via `on`.
     * @template K Name of the event.
     * @param event Name of the event.
     * @param callback Callback listener to remove.
     * @returns This tagify instance for chaining method calls.
     */
    off<K extends keyof Tagify.EventDataMap>(
        event: K,
        callback: (event: CustomEvent<Tagify.EventDataMap<T>[K]>) => void
    ): this;

    /**
     * Adds a listener for the given event to this tagify instance.
     * @template K Name of the event to which to listen.
     * @param event Name of the event to which to listen.
     * @param callback Callback listener invoked when the event occurs.
     * @returns This tagify instance for chaining method calls.
     */
    on<K extends keyof Tagify.EventDataMap>(
        event: K,
        callback: (event: CustomEvent<Tagify.EventDataMap<T>[K]>) => void
    ): this;
}

export = Tagify;

export as namespace Tagify;
