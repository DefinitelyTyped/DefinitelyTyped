// Type definitions for Semantic UI 2.2
// Project: http://semantic-ui.com/
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="jquery" />

interface JQueryStatic {
    site: SemanticUI.Site;

    api: SemanticUI.Api;
}

interface JQuery {
    site: SemanticUI.Site;

    accordion: SemanticUI.Accordion;
    checkbox: SemanticUI.Checkbox;
    dimmer: SemanticUI.Dimmer;
    dropdown: SemanticUI.Dropdown;
    embed: SemanticUI.Embed;
    modal: SemanticUI.Modal;
    nag: SemanticUI.Nag;
    popup: SemanticUI.Popup;
    progress: SemanticUI.Progress;
    rating: SemanticUI.Rating;
    search: SemanticUI.Search;
    shape: SemanticUI.Shape;
    sidebar: SemanticUI.Sidebar;
    sticky: SemanticUI.Sticky;
    tab: SemanticUI.Tab;
    transition: SemanticUI.Transition;

    api: SemanticUI.Api;
    form: SemanticUI.Form;
    visibility: SemanticUI.Visibility;
}

declare namespace SemanticUI {
    type Selector = string | JQuery;

    /**
     * These settings are native to all modules, and define how the component ties content to DOM attributes, and debugging settings for the module.
     */
    interface ComponentSettings {
        // region DOM Settings

        /**
         * Event namespace. Makes sure module teardown does not effect other events attached to an element.
         */
        namespace?: string;

        // endregion

        // region Debug Settings

        /**
         * Name used in log statements
         */
        name?: string;
        /**
         * Silences all console output including error messages, regardless of other debug settings.
         */
        silent?: boolean;
        /**
         * Debug output to console
         */
        debug?: boolean;
        /**
         * Show console.table output with performance metrics
         */
        performance?: boolean;
        /**
         * Debug output includes all internal behaviors
         */
        verbose?: boolean;

        // endregion
    }

    // region Globals

    // region Site

    interface Site {
        settings: SiteSettings;

        (behavior: 'destroy'): JQuery;
        <K extends keyof SiteSettings>(behavior: 'setting', name: K, value?: undefined): SiteSettings[K];
        <K extends keyof SiteSettings>(behavior: 'setting', name: K, value: SiteSettings[K]): JQuery;
        (behavior: 'setting', value: SiteSettings): JQuery;
        (settings?: SiteSettings): JQuery;
    }

    interface SiteSettings extends ComponentSettings {
        modules?: string[];
        siteNamespace?: string;
        namespaceStub?: {
            cache?: any;
            config?: any;
            sections?: any;
            section?: any;
            utilities?: any;
        };
    }

    // endregion

    // endregion

    // region Modules

    // region Accordion

    interface Accordion {
        settings: AccordionSettings;

        /**
         * Refreshes all cached selectors and data
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Opens accordion content at index
         */
        (behavior: 'open', index: number): JQuery;
        /**
         * Closes accordion content that are not active
         */
        (behavior: 'close others'): JQuery;
        /**
         * Closes accordion content at index
         */
        (behavior: 'close', index: number): JQuery;
        /**
         * Toggles accordion content at index
         */
        (behavior: 'toggle', index: number): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof AccordionSettings>(behavior: 'setting', name: K, value?: undefined): AccordionSettings[K];
        <K extends keyof AccordionSettings>(behavior: 'setting', name: K, value: AccordionSettings[K]): JQuery;
        (behavior: 'setting', value: AccordionSettings): JQuery;
        (settings?: AccordionSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/accordion.html#/settings}
     */
    interface AccordionSettings extends ComponentSettings {
        // region Behavior

        /**
         * Only allow one section open at a time
         *
         * @default true
         */
        exclusive?: boolean;
        /**
         * Event on title that will cause accordion to open
         *
         * @default 'click'
         */
        on?: string;
        /**
         * Whether child content opacity should be animated (may cause performance issues with many child elements)
         *
         * @default true
         */
        animateChildren?: boolean;
        /**
         * Close open nested accordion content when an element closes
         *
         * @default true
         */
        closeNested?: boolean;
        /**
         * Allow active sections to collapse
         *
         * @default true
         */
        collapsible?: boolean;
        /**
         * Duration in ms of opening animation
         *
         * @default 500
         */
        duration?: number;
        /**
         * Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations.
         *
         * @default 'easeInOutQuint'
         * @see {@link http://gsgd.co.uk/sandbox/jquery/easing/}
         */
        easing?: string;
        /**
         * whether accordion should automatically refresh on DOM insertion
         *
         * @default true
         */
        observeChanges?: boolean;

        // endregion

        // region Callbacks

        /**
         * Callback before element opens
         */
        onOpening?(this: JQuery): void;
        /**
         * Callback after element is open
         */
        onOpen?(this: JQuery): void;
        /**
         * Callback before element closes
         */
        onClosing?(this: JQuery): void;
        /**
         * Callback after element is closed
         */
        onClose?(this: JQuery): void;
        /**
         * Callback on element open or close
         */
        onChange?(this: JQuery): void;

        // endregion

        // region DOM Settings

        /**
         * Selectors used to find parts of a module
         */
        selector?: {
            /**
             * @default '.accordion'
             */
            accordion?: string;
            /**
             * @default '.title'
             */
            title?: string;
            /**
             * @default '.title'
             */
            trigger?: string;
            /**
             * @default '.content'
             */
            content?: string;
        };
        /**
         * Class names used to determine element state
         */
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'animating'
             */
            animating?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Checkbox

    interface Checkbox {
        settings: CheckboxSettings;

        /**
         * Switches a checkbox from current state
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Set a checkbox state to checked
         */
        (behavior: 'check'): JQuery;
        /**
         * Set a checkbox state to unchecked
         */
        (behavior: 'uncheck'): JQuery;
        /**
         * Set as indeterminate checkbox
         */
        (behavior: 'indeterminate'): JQuery;
        /**
         * Set as determinate checkbox
         */
        (behavior: 'determinate'): JQuery;
        /**
         * Enable interaction with a checkbox
         */
        (behavior: 'enable'): JQuery;
        /**
         * Set a checkbox state to checked without callbacks
         */
        (behavior: 'set checked'): JQuery;
        /**
         * Set a checkbox state to unchecked without callbacks
         */
        (behavior: 'set unchecked'): JQuery;
        /**
         * Set as indeterminate checkbox without callbacks
         */
        (behavior: 'set indeterminate'): JQuery;
        /**
         * Set as determinate checkbox without callbacks
         */
        (behavior: 'set determinate'): JQuery;
        /**
         * Enable interaction with a checkbox without callbacks
         */
        (behavior: 'set enabled'): JQuery;
        /**
         * Disable interaction with a checkbox without callbacks
         */
        (behavior: 'set disabled'): JQuery;
        /**
         * Attach checkbox events to another element
         */
        (behavior: 'attach events', selector: Selector, event?: string): JQuery;
        /**
         * Returns whether element is radio selection
         */
        (behavior: 'is radio'): boolean;
        /**
         * Returns whether element is currently checked
         */
        (behavior: 'is checked'): boolean;
        /**
         * Returns whether element is not checked
         */
        (behavior: 'is unchecked'): boolean;
        /**
         * Returns whether element is able to be changed
         */
        (behavior: 'can change'): boolean;
        /**
         * Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
         */
        (behavior: 'should allow check'): boolean;
        /**
         * Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
         */
        (behavior: 'should allow uncheck'): boolean;
        /**
         * Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
         */
        (behavior: 'should allow determinate'): boolean;
        /**
         * Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
         */
        (behavior: 'should allow indeterminate'): boolean;
        /**
         * Returns whether element is able to be unchecked
         */
        (behavior: 'can uncheck'): boolean;
        (behavior: 'destroy'): JQuery;
        <K extends keyof CheckboxSettings>(behavior: 'setting', name: K, value?: undefined): CheckboxSettings[K];
        <K extends keyof CheckboxSettings>(behavior: 'setting', name: K, value: CheckboxSettings[K]): JQuery;
        (behavior: 'setting', value: CheckboxSettings): JQuery;
        (settings?: CheckboxSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/checkbox.html#/settings}
     */
    interface CheckboxSettings extends ComponentSettings {
        // region Behavior

        /**
         * Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes
         *
         * @default 'auto'
         */
        uncheckable?: 'auto' | boolean;
        /**
         * Whether callbacks for checked status should be fired on init as well as change
         *
         * @default false
         */
        fireOnInit?: boolean;

        // endregion

        // region Callbacks

        /**
         * Callback after a checkbox is either checked or unchecked.
         */
        onChange?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is checked.
         */
        onChecked?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is set to undeterminate.
         */
        onIndeterminate?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is set to determinate.
         */
        onDeterminate?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is unchecked.
         */
        onUnchecked?(this: HTMLElement): void;
        /**
         * Callback before a checkbox is checked. Can cancel change by returning false
         */
        beforeChecked?(this: HTMLElement): boolean;
        /**
         * Callback before a checkbox is set to undeterminate. Can cancel change by returning false
         */
        beforeIndeterminate?(this: HTMLElement): boolean;
        /**
         * Callback before a checkbox is set to determinate. Can cancel change by returning false
         */
        beforeDeterminate?(this: HTMLElement): boolean;
        /**
         * Callback before a checkbox is unchecked. Can cancel change by returning false
         */
        beforeUnchecked?(this: HTMLElement): boolean;
        /**
         * Callback after a checkbox is enabled.
         */
        onEnable?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is disabled.
         */
        onDisable?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is enabled.
         *
         * @deprecated
         */
        onEnabled?(this: HTMLElement): void;
        /**
         * Callback after a checkbox is disabled.
         *
         * @deprecated
         */
        onDisabled?(this: HTMLElement): void;

        // endregion

        // region DOM Settings

        /**
         * Selectors used to find parts of a module
         */
        selector?: {
            /**
             * @default 'input[type=checkbox], input[type=radio]'
             */
            input?: string;
            /**
             * @default 'label'
             */
            label?: string;
        };
        /**
         * Class names used to determine element state
         */
        className?: {
            /**
             * @default 'checked'
             */
            checked?: string;
            /**
             * @default 'disabled'
             */
            disabled?: string;
            /**
             * @default 'radio'
             */
            radio?: string;
            /**
             * @default 'read-only'
             */
            readOnly?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Dimmer

    interface Dimmer {
        settings: DimmerSettings;

        /**
         * Detaches a given element from DOM and reattaches element inside dimmer
         */
        (behavior: 'add content', element: Selector): JQuery;
        /**
         * Shows dimmer
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides dimmer
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles current dimmer visibility
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Changes dimmer opacity
         */
        (behavior: 'set opacity', opacity: number): JQuery;
        /**
         * Creates a new dimmer in dimmable context
         */
        (behavior: 'create'): JQuery;
        /**
         * Returns current duration for show or hide event depending on current visibility
         */
        (behavior: 'get duration'): number;
        /**
         * Returns DOM element for dimmer
         */
        (behavior: 'get dimmer'): JQuery;
        /**
         * Returns whether current dimmable has a dimmer
         */
        (behavior: 'has dimmer'): boolean;
        /**
         * Whether section's dimmer is active
         */
        (behavior: 'is active'): boolean;
        /**
         * Whether dimmer is animating
         */
        (behavior: 'is animating'): boolean;
        /**
         * Whether current element is a dimmer
         */
        (behavior: 'is dimmer'): boolean;
        /**
         * Whether current element is a dimmable section
         */
        (behavior: 'is dimmable'): boolean;
        /**
         * Whether dimmer is disabled
         */
        (behavior: 'is disabled'): boolean;
        /**
         * Whether dimmer is not disabled
         */
        (behavior: 'is enabled'): boolean;
        /**
         * Whether dimmable section is body
         */
        (behavior: 'is page'): boolean;
        /**
         * Whether dimmer is a page dimmer
         */
        (behavior: 'is page dimmer'): boolean;
        /**
         * Sets page dimmer to active
         */
        (behavior: 'set active'): JQuery;
        /**
         * Sets an element as a dimmable section
         */
        (behavior: 'set dimmable'): JQuery;
        /**
         * Sets a dimmable section as dimmed
         */
        (behavior: 'set dimmed'): JQuery;
        /**
         * Sets current dimmer as a page dimmer
         */
        (behavior: 'set page dimmer'): JQuery;
        /**
         * Sets a dimmer as disabled
         */
        (behavior: 'set disabled'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof DimmerSettings>(behavior: 'setting', name: K, value?: undefined): DimmerSettings[K];
        <K extends keyof DimmerSettings>(behavior: 'setting', name: K, value: DimmerSettings[K]): JQuery;
        (behavior: 'setting', value: DimmerSettings): JQuery;
        (settings?: DimmerSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/dimmer.html#/settings}
     */
    interface DimmerSettings extends ComponentSettings {
        // region Behavior

        /**
         * Dimmers opacity from 0-1. Defaults to auto which uses the CSS specified opacity.
         *
         * @default 'auto'
         */
        opacity?: 'auto' | number;
        /**
         * Specify a variation to add when generating dimmer, like inverted
         *
         * @default false
         */
        variation?: false | string;
        /**
         * If initializing a dimmer on a dimmable context, you can use dimmerName to distinguish between multiple dimmers in that context.
         *
         * @default false
         */
        dimmerName?: false | string;
        /**
         * Whether clicking on the dimmer should hide the dimmer (Defaults to auto, closable only when settings.on is not hover
         *
         * @default 'auto'
         */
        closable?: 'auto' | boolean;
        /**
         * Can be set to hover or click to show/hide dimmer on dimmable event
         *
         * @default false
         */
        on?: false | 'hover' | 'click';
        /**
         * Whether to dim dimmers using CSS transitions.
         *
         * @default true
         */
        useCSS?: boolean;
        /**
         * Animation duration of dimming. If an integer is used, that value will apply to both show and hide animations.
         */
        duration?: number | {
            /**
             * @default 500
             */
            show?: number;
            /**
             * @default 500
             */
            hide?: number;
        };
        /**
         * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
         *
         * @default 'fade'
         * @see {@link http://semantic-ui.com/modules/transition.html}
         */
        transition?: string;

        // endregion

        // region Callbacks

        /**
         * Callback on element show
         */
        onShow?(this: JQuery): void;
        /**
         * Callback on element hide
         */
        onHide?(this: JQuery): void;
        /**
         * Callback on element show or hide
         */
        onChange?(this: JQuery): void;

        // endregion

        // region DOM Settings

        /**
         * Object containing selectors used by module.
         */
        selector?: {
            /**
             * @default '.dimmable'
             */
            dimmable?: string;
            /**
             * @default '.ui.dimmer'
             */
            dimmer?: string;
            /**
             * @default '.ui.dimmer > .content, .ui.dimmer > .content > .center'
             */
            content?: string;
        };
        /**
         * Templates used to generate dimmer content
         */
        template?: {
            dimmer?(): JQuery;
        };
        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'dimmable'
             */
            dimmable?: string;
            /**
             * @default 'dimmed'
             */
            dimmed?: string;
            /**
             * @default 'disabled'
             */
            disabled?: string;
            /**
             * @default 'page'
             */
            pageDimmer?: string;
            /**
             * @default 'hide'
             */
            hide?: string;
            /**
             * @default 'show'
             */
            show?: string;
            /**
             * @default 'transition'
             */
            transition?: string;
        };

        // endregion

        // region Debug Settings

        /**
         * Error messages displayed to console
         */
        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Dropdown

    // TODO: Should 'value'/'values' parameters be of type 'string' instead of 'any'?

    interface Dropdown {
        settings: DropdownSettings;

        /**
         * Recreates dropdown menu from select option values.
         */
        (behavior: 'setup menu'): JQuery;
        /**
         * Refreshes all cached selectors and data
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Toggles current visibility of dropdown
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Shows dropdown
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides dropdown
         */
        (behavior: 'hide'): JQuery;
        /**
         * Clears dropdown of selection
         */
        (behavior: 'clear'): JQuery;
        /**
         * Hides all other dropdowns that is not current dropdown
         */
        (behavior: 'hide others'): JQuery;
        /**
         * Restores dropdown text and value to its value on page load
         */
        (behavior: 'restore defaults'): JQuery;
        /**
         * Restores dropdown text to its value on page load
         */
        (behavior: 'restore default text'): JQuery;
        /**
         * Restores dropdown text to its prompt, placeholder text
         */
        (behavior: 'restore placeholder text'): JQuery;
        /**
         * Restores dropdown value to its value on page load
         */
        (behavior: 'restore default value'): JQuery;
        /**
         * Saves current text and value as new defaults (for use with restore)
         */
        (behavior: 'save defaults'): JQuery;
        /**
         * Sets value as selected
         */
        (behavior: 'set selected', value: any): JQuery;
        /**
         * Remove value from selected
         */
        (behavior: 'remove selected', value: any): JQuery;
        /**
         * Adds a group of values as selected
         */
        (behavior: 'set selected', values: any[]): JQuery;
        /**
         * Sets selected values to exactly specified values, removing current selection
         */
        (behavior: 'set exactly', values: any[]): JQuery;
        /**
         * Sets dropdown text to a value
         */
        (behavior: 'set text', text: string): JQuery;
        /**
         * Sets dropdown input to value (does not update display state)
         */
        (behavior: 'set value', value: any): JQuery;
        /**
         * Returns current dropdown text
         */
        (behavior: 'get text'): string;
        /**
         * Returns current dropdown input value
         */
        (behavior: 'get value'): any;
        /**
         * Returns DOM element that matches a given input value
         */
        (behavior: 'get item', value: any): JQuery;
        /**
         * Adds touch events to element
         */
        (behavior: 'bind touch events'): JQuery;
        /**
         * Adds mouse events to element
         */
        (behavior: 'bind mouse events'): JQuery;
        /**
         * Binds a click to document to determine if you click away from a dropdown
         */
        (behavior: 'bind intent'): JQuery;
        /**
         * Unbinds document intent click
         */
        (behavior: 'unbind intent'): JQuery;
        /**
         * Returns whether event occurred inside dropdown
         */
        (behavior: 'determine intent'): boolean;
        /**
         * Triggers preset item selection action based on settings passing text/value
         */
        (behavior: 'determine select action', text: string, value: any): JQuery;
        /**
         * Sets dropdown to active state
         */
        (behavior: 'set active'): JQuery;
        /**
         * Sets dropdown to visible state
         */
        (behavior: 'set visible'): JQuery;
        /**
         * Removes dropdown active state
         */
        (behavior: 'remove active'): JQuery;
        /**
         * Removes dropdown visible state
         */
        (behavior: 'remove visible'): JQuery;
        /**
         * Returns whether dropdown is a selection dropdown
         */
        (behavior: 'is selection'): boolean;
        /**
         * Returns whether dropdown is animated
         */
        (behavior: 'is animated'): boolean;
        /**
         * Returns whether dropdown is visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether dropdown is hidden
         */
        (behavior: 'is hidden'): boolean;
        /**
         * Returns dropdown value as set on page load
         */
        (behavior: 'get default text'): string;
        /**
         * Returns placeholder text
         */
        (behavior: 'get placeholder text'): string;
        (behavior: 'destroy'): JQuery;
        <K extends keyof DropdownSettings>(behavior: 'setting', name: K, value?: undefined): DropdownSettings[K];
        <K extends keyof DropdownSettings>(behavior: 'setting', name: K, value: DropdownSettings[K]): JQuery;
        (behavior: 'setting', value: DropdownSettings): JQuery;
        (settings?: DropdownSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/dropdown.html#/settings}
     */
    interface DropdownSettings extends ComponentSettings {
        // region Frequently Used Settings

        /**
         * Event used to trigger dropdown (Hover, Click, Custom Event)
         *
         * @default 'click'
         */
        on?: string;
        /**
         * When set to true will fire onChange even when the value a user select matches the currently selected value.
         *
         * @default false
         */
        allowReselection?: boolean;
        /**
         * Whether search selection should allow users to add their own selections, works for single or multi-select.
         *
         * @default false
         */
        allowAdditions?: boolean;
        /**
         * When disabled user additions will appear in the results menu using a specially formatted selection item formatted by templates.addition.
         *
         * @default true
         */
        hideAdditions?: boolean;
        /**
         * Sets a default action to occur. (See usage guide)
         *
         * @default 'activate'
         * @see {@link http://semantic-ui.com/modules/dropdown.html#/usage}
         */
        action?: 'activate' | 'select' | 'combo' | 'nothing' | 'hide' | ((this: JQuery, text: string, value: string | false, element: JQuery) => void);
        /**
         * The minimum characters for a search to begin showing results
         *
         * @default 1
         */
        minCharacters?: number;
        /**
         * When using search selection specifies how to match values.
         *
         * @default 'both'
         */
        match?: 'both' | 'value' | 'text';
        /**
         * Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice.
         *
         * @default true
         */
        selectOnKeydown?: boolean;
        /**
         * Whether search selection will force currently selected choice when element is blurred.
         *
         * @default true
         */
        forceSelection?: boolean;
        /**
         * Whether menu items with sub-menus (categories) should be selectable
         *
         * @default false
         */
        allowCategorySelection?: boolean;
        /**
         * @default 'auto'
         */
        placeholder?: 'auto' | 'value' | false;

        // endregion

        // region Remote Settings

        /**
         * Can be set to an object to specify API settings for retrieving remote selection menu content from an API endpoint
         *
         * @default false
         * @see {@link http://semantic-ui.com/behaviors/api.html}
         */
        apiSettings?: false | ApiSettings;
        /**
         * List mapping dropdown content to JSON Property when using API
         */
        fields?: {
            /**
             * grouping for api results
             *
             * @default 'results'
             */
            remoteValues?: string;
            /**
             * grouping for all dropdown values
             *
             * @default 'values'
             */
            values?: string;
            /**
             * displayed dropdown text
             *
             * @default 'name'
             */
            name?: string;
            /**
             * actual dropdown value
             *
             * @default 'value'
             */
            value?: string;
        };
        /**
         * When enabled will automatically store selected name/value pairs in sessionStorage to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh.
         *
         * @default true
         */
        saveRemoteData?: boolean;
        /**
         * When set to true API will be expected to return the complete result set, which will then be filtered clientside to only display matching results.
         *
         * @default false
         * @since 2.2.8
         */
        filterRemoteData?: boolean;

        // endregion

        // region Multiple Select Settings

        /**
         * Whether multiselect should use labels. Must be set to true when allowAdditions is true
         *
         * @default true
         */
        useLabels?: boolean;
        /**
         * When set to a number, sets the maximum number of selections
         *
         * @default false
         */
        maxSelections?: boolean;
        /**
         * Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em
         *
         * @default 1.0714
         */
        glyphWidth?: number;
        /**
         * Allows customization of multi-select labels
         */
        label?: {
            /**
             * @default 'horizontal flip'
             */
            transition?: string;
            /**
             * @default 200
             */
            duration?: number;
            /**
             * @default false
             */
            variation?: false | string;
        };

        // endregion

        // region Additional Settings

        /**
         * When set to auto determines direction based on whether dropdown can fit on screen. Set to upward or downward to always force a direction.
         *
         * @default 'auto'
         */
        direction?: 'auto' | 'upward' | 'downward';
        /**
         * Whether dropdown should try to keep itself on screen by checking whether menus display position in its context (Default context is page).
         *
         * @default true
         */
        keepOnScreen?: boolean;
        /**
         * Element context to use when checking whether can show when keepOnScreen: true
         *
         * @default 'window'
         */
        context?: Selector;
        /**
         * Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string
         *
         * @default false
         */
        fullTextSearch?: boolean | 'exact';
        /**
         * Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value)
         *
         * @default true
         */
        preserveHTML?: boolean;
        /**
         * Whether to sort values when creating a dropdown automatically from a select element.
         *
         * @default false
         */
        sortSelect?: boolean;
        /**
         * Whether to show dropdown menu automatically on element focus.
         *
         * @default true
         */
        showOnFocus?: boolean;
        /**
         * Whether to allow the element to be navigable by keyboard, by automatically creating a tabindex
         *
         * @default true
         */
        allowTab?: boolean;
        /**
         * Named transition to use when animating menu in and out.
         * Defaults to slide down or slide up depending on dropdown direction.
         * Fade and slide down are available without including ui transitions
         *
         * @default 'auto'
         * @see {@link http://semantic-ui.com/modules/transition.html}
         */
        transition?: 'auto' | string;
        /**
         * Duration of animation events
         *
         * @default 200
         */
        duration?: number;
        /**
         * The keycode used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass false for comma delimiter's value
         */
        keys?: {
            /**
             * @default 8
             */
            backspace?: number;
            /**
             * @default 188
             */
            delimiter?: number | false;
            /**
             * @default 46
             */
            deleteKey?: number;
            /**
             * @default 13
             */
            enter?: number;
            /**
             * @default 27
             */
            escape?: number;
            /**
             * @default 33
             */
            pageUp?: number;
            /**
             * @default 34
             */
            pageDown?: number;
            /**
             * @default 37
             */
            leftArrow?: number;
            /**
             * @default 38
             */
            upArrow?: number;
            /**
             * @default 39
             */
            rightArrow?: number;
            /**
             * @default 40
             */
            downArrow?: number;
        };
        /**
         * Time in milliseconds to debounce show or hide behavior when on: hover is used, or when touch is used.
         */
        delay?: {
            /**
             * @default 300
             */
            hide?: number;
            /**
             * @default 200
             */
            show?: number;
            /**
             * @default 50
             */
            search?: number;
            /**
             * @default 50
             */
            touch?: number;
        };

        // endregion

        // region Callbacks

        /**
         * Is called after a dropdown value changes. Receives the name and value of selection and the active menu element
         */
        onChange?(this: JQuery, value: any, text: string, $choice: JQuery): void;
        /**
         * Is called after a dropdown selection is added using a multiple select dropdown, only receives the added value
         */
        onAdd?(this: JQuery, addedValue: any, addedText: string, $addedChoice: JQuery): void;
        /**
         * Is called after a dropdown selection is removed using a multiple select dropdown, only receives the removed value
         */
        onRemove?(this: JQuery, removedValue: any, removedText: string, $removedChoice: JQuery): void;
        /**
         * Allows you to modify a label before it is added. Expects the jQ DOM element for a label to be returned.
         */
        onLabelCreate?(this: JQuery, value: any, text: string): JQuery;
        /**
         * Called when a label is remove, return false; will prevent the label from being removed.
         */
        onLabelRemove?(this: JQuery, value: any): false | void;
        /**
         * Is called after a label is selected by a user
         */
        onLabelSelect?(this: JQuery, $selectedLabels: JQuery): void;
        /**
         * Is called after a dropdown is searched with no matching values
         */
        onNoResults?(this: JQuery, searchValue: any): void;
        /**
         * Is called before a dropdown is shown. If false is returned, dropdown will not be shown.
         */
        onShow?(this: JQuery): false | void;
        /**
         * Is called before a dropdown is hidden. If false is returned, dropdown will not be hidden.
         */
        onHide?(this: JQuery): false | void;

        // endregion

        // region DOM Settings

        /**
         * You can specify site wide messages by modifying $.fn.dropdown.settings.message that will apply on any dropdown if it appears in the page.
         */
        message?: {
            /**
             * @default 'Add <b>{term}</b>'
             */
            addResult?: string;
            /**
             * @default '{count} selected'
             */
            count?: string;
            /**
             * @default 'Max {maxCount} selections'
             */
            maxSelections?: string;
            /**
             * 'No results found.'
             */
            noResults?: string;
        };
        selector?: {
            /**
             * @default '.addition'
             */
            addition?: string;
            /**
             * @default '.ui.dropdown'
             */
            dropdown?: string;
            /**
             * @default '> .dropdown.icon'
             */
            icon?: string;
            /**
             * @default '> input[type="hidden"], > select'
             */
            input?: string;
            /**
             * @default '.item'
             */
            item?: string;
            /**
             * @default '> .label'
             */
            label?: string;
            /**
             * @default '> .label > .delete.icon'
             */
            remove?: string;
            /**
             * @default '.label'
             */
            siblingLabel?: string;
            /**
             * @default '.menu'
             */
            menu?: string;
            /**
             * @default '.message'
             */
            message?: string;
            /**
             * @default '.dropdown.icon'
             */
            menuIcon?: string;
            /**
             * @default 'input.search, .menu > .search > input'
             */
            search?: string;
            /**
             * @default '> .text:not(.icon)'
             */
            text?: string;
        };
        regExp?: {
            /**
             * @default /[-[\]{}()*+?.,\\^$|#\s]/g
             */
            escape?: RegExp;
        };
        metadata?: {
            /**
             * @default 'defaultText'
             */
            defaultText?: string;
            /**
             * @default 'defaultValue'
             */
            defaultValue?: string;
            /**
             * @default 'placeholderText'
             */
            placeholderText?: string;
            /**
             * @default 'text'
             */
            text?: string;
            /**
             * @default 'value'
             */
            value?: string;
        };
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'addition'
             */
            addition?: string;
            /**
             * @default 'animating'
             */
            animating?: string;
            /**
             * @default 'disabled'
             */
            disabled?: string;
            /**
             * @default 'ui dropdown'
             */
            dropdown?: string;
            /**
             * @default 'filtered'
             */
            filtered?: string;
            /**
             * @default 'hidden transition'
             */
            hidden?: string;
            /**
             * @default 'item'
             */
            item?: string;
            /**
             * @default 'ui label'
             */
            label?: string;
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'menu'
             */
            menu?: string;
            /**
             * @default 'message'
             */
            message?: string;
            /**
             * @default 'multiple'
             */
            multiple?: string;
            /**
             * @default 'default'
             */
            placeholder?: string;
            /**
             * @default 'search'
             */
            search?: string;
            /**
             * @default 'selected'
             */
            selected?: string;
            /**
             * @default 'selection'
             */
            selection?: string;
            /**
             * @default 'upward'
             */
            upward?: string;
            /**
             * @default 'visible'
             */
            visible?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'You called a dropdown action that was not defined'
             */
            action?: string;
            /**
             * @default 'Once a select has been initialized behaviors must be called on the created ui dropdown'
             */
            alreadySetup?: string;
            /**
             * @default 'Allowing user additions currently requires the use of labels.'
             */
            labels?: string;
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
            /**
             * @default 'This module requires ui transitions <https: github.com="" semantic-org="" ui-transition="">'
             */
            noTransition?: string;
        };

        // endregion
    }

    // endregion

    // region Embed

    interface Embed {
        settings: EmbedSettings;

        /**
         * Changes iframe to a new content source
         */
        (behavior: 'change', source: string, id: string, url: string): JQuery;
        /**
         * Removes embed and shows placeholder content if available
         */
        (behavior: 'reset'): JQuery;
        /**
         * Shows embed content
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides embed content and shows placeholder content
         */
        (behavior: 'hide'): JQuery;
        /**
         * Returns current content id
         */
        (behavior: 'get id'): string;
        /**
         * Returns placeholder image url
         */
        (behavior: 'get placeholder'): string;
        /**
         * Returns source name
         */
        (behavior: 'get sources'): string;
        /**
         * Returns source type
         */
        (behavior: 'get type'): string;
        /**
         * Returns URL with all parameters added
         */
        (behavior: 'get url'): string;
        /**
         * Returns whether embed content has placeholder
         */
        (behavior: 'has placeholder'): boolean;
        /**
         * Destroys instance and removes all events
         */
        (behavior: 'destroy'): JQuery;
        <K extends keyof EmbedSettings>(behavior: 'setting', name: K, value?: undefined): EmbedSettings[K];
        <K extends keyof EmbedSettings>(behavior: 'setting', name: K, value: EmbedSettings[K]): JQuery;
        (behavior: 'setting', value: EmbedSettings): JQuery;
        (settings?: EmbedSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/embed.html#/settings}
     */
    interface EmbedSettings extends ComponentSettings {
        /**
         * Specifies a url to use for embed
         *
         * @default false
         */
        url?: false | string;

        // region Embed Settings

        /**
         * Specifies an icon to use with placeholder content
         *
         * @default false
         */
        icon?: false | string;
        /**
         * Specifies a source to use, if no source is provided it will be determined from the domain of a specified url.
         *
         * @default false
         */
        source?: false | string;
        /**
         * Specifies an id value to replace with the {id} value found in templated urls
         *
         * @default false
         */
        id?: false | string;
        /**
         * Specify an object containing key/value pairs to add to the iframes GET parameters
         *
         * @default false
         */
        parameters?: false | any;

        // endregion

        // region Video Settings

        /**
         * Default setting auto will only autoplay content when a placeholder is specified. Setting to true or false will force autoplay.
         *
         * @default 'auto'
         */
        autoplay?: 'auto' | boolean;
        /**
         * Specifies a default chrome color with Vimeo or YouTube.
         *
         * @default '#444444'
         */
        color?: string;
        /**
         * Whether to prefer HD content
         *
         * @default true
         */
        hd?: boolean;
        /**
         * Whether to show networks branded UI like title cards, or after video calls to action.
         *
         * @default false
         */
        brandedUI?: boolean;

        // endregion

        // region Callbacks

        /**
         * Callback when iframe is generated
         */
        onCreate?(this: JQuery, url: string): void;
        /**
         * Whenever an iframe contents is shown
         */
        onDisplay?(this: JQuery): void;
        /**
         * Callback immediately before Embed is removed from DOM
         */
        onPlaceholderDisplay?(this: JQuery): void;
        /**
         * Callback when module parameters are determined. Allows you to adjust parameters at run time by returning a new parameters object.
         */
        onEmbed?(this: JQuery, parameters: any): any;

        // endregion

        // region DOM Settings

        /**
         * DOM Selectors used internally
         */
        selector?: {
            /**
             * @default '.embed'
             */
            embed?: string;
            /**
             * @default '.placeholder'
             */
            placeholder?: string;
            /**
             * @default '.play'
             */
            play?: string;
        };
        /**
         * HTML Data attributes used to store data
         */
        metadata?: {
            /**
             * @default 'id'
             */
            id?: string;
            /**
             * @default 'icon'
             */
            icon?: string;
            /**
             * @default 'placeholder'
             */
            placeholder?: string;
            /**
             * @default 'source'
             */
            source?: string;
            /**
             * @default 'url'
             */
            url?: string;
        };
        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'embed'
             */
            embed?: string;
        };
        templates?: {
            /**
             * returns html for iframe
             */
            iframe?(url: string, parameters: string): string;
            /**
             * returns html for placeholder element
             */
            placeholder?(image: string, icon: string): string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'No URL specified'
             */
            noURL?: string;
            /**
             * @default 'The method you called is not defined'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Modal

    interface Modal {
        settings: ModalSettings;

        /**
         * Shows the modal
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides the modal
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles the modal
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Refreshes centering of modal on page
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Shows associated page dimmer
         */
        (behavior: 'show dimmer'): JQuery;
        /**
         * Hides associated page dimmer
         */
        (behavior: 'hide dimmer'): JQuery;
        /**
         * Hides all modals not selected modal in a dimmer
         */
        (behavior: 'hide others'): JQuery;
        /**
         * Hides all visible modals in the same dimmer
         */
        (behavior: 'hide all'): JQuery;
        /**
         * Caches current modal size
         */
        (behavior: 'cache sizes'): JQuery;
        /**
         * Returns whether the modal can fit on the page
         */
        (behavior: 'can fit'): boolean;
        /**
         * Returns whether the modal is active
         */
        (behavior: 'is active'): boolean;
        /**
         * Sets modal to active
         */
        (behavior: 'set active'): JQuery;
        (behavior: 'attach events', selector: Selector, event?: string): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof ModalSettings>(behavior: 'setting', name: K, value?: undefined): ModalSettings[K];
        <K extends keyof ModalSettings>(behavior: 'setting', name: K, value: ModalSettings[K]): JQuery;
        (behavior: 'setting', value: ModalSettings): JQuery;
        (settings?: ModalSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/modal.html#/settings}
     */
    interface ModalSettings extends ComponentSettings {
        // region Modal Settings

        /**
         * If set to false will prevent the modal from being moved to inside the dimmer
         *
         * @default true
         */
        detachable?: boolean;
        /**
         * When true, the first form input inside the modal will receive focus when shown. Set this to false to prevent this behavior.
         *
         * @default true
         */
        autofocus?: boolean;
        /**
         * Whether any change in modal DOM should automatically refresh cached positions
         *
         * @default false
         */
        observeChanges?: boolean;
        /**
         * If set to true will not close other visible modals when opening a new one
         *
         * @default false
         */
        allowMultiple?: boolean;
        /**
         * Whether to automatically bind keyboard shortcuts
         *
         * @default true
         */
        keyboardShortcuts?: boolean;
        /**
         *    A vertical offset to allow for content outside of modal, for example a close button, to be centered.
         *
         * @default 0
         */
        offset?: number;
        /**
         * Selector or jquery object specifying the area to dim
         *
         * @default 'body'
         */
        context?: Selector;
        /**
         * Setting to false will not allow you to close the modal by clicking on the dimmer
         *
         * @default true
         */
        closable?: boolean;
        /**
         * You can specify custom settings to extend UI dimmer
         *
         * @see {@link http://semantic-ui.com/modules/dimmer.html}
         */
        dimmerSettings?: DimmerSettings;
        /**
         * Named transition to use when animating menu in and out, full list can be found in ui transitions docs.
         *
         * @default 'scale'
         * @see {@link http://semantic-ui.com/modules/transition.html}
         */
        transition?: string;
        /**
         * Duration of animation
         *
         * @default 400
         */
        duration?: number;
        /**
         * Whether additional animations should queue
         *
         * @default false
         */
        queue?: boolean;

        // endregion

        // region Callbacks

        /**
         * Is called when a modal starts to show.
         */
        onShow?(this: JQuery): void;
        /**
         * Is called after a modal has finished showing animating.
         */
        onVisible?(this: JQuery): void;
        /**
         * Is called after a modal starts to hide. If the function returns false, the modal will not hide.
         */
        onHide?(this: JQuery, $element: JQuery): false | void;
        /**
         * Is called after a modal has finished hiding animation.
         */
        onHidden?(this: JQuery): void;
        /**
         * Is called after a positive, approve or ok button is pressed. If the function returns false, the modal will not hide.
         */
        onApprove?(this: JQuery, $element: JQuery): false | void;
        /**
         * Is called after a negative, deny or cancel button is pressed. If the function returns false the modal will not hide.
         */
        onDeny?(this: JQuery, $element: JQuery): false | void;

        // endregion

        // region DOM Settings

        selector?: {
            /**
             * @default '.close, .actions .button'
             */
            close?: string;
            /**
             * @default '.actions .positive, .actions .approve, .actions .ok'
             */
            approve?: string;
            /**
             * @default '.actions .negative, .actions .deny, .actions .cancel'
             */
            deny?: string;
        };
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'scrolling'
             */
            scrolling?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Nag

    interface Nag {
        settings: NagSettings;

        (behavior: 'show'): JQuery;
        (behavior: 'hide'): JQuery;
        /**
         * Clears cookie so nag shows again
         */
        (behavior: 'clear'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof NagSettings>(behavior: 'setting', name: K, value?: undefined): NagSettings[K];
        <K extends keyof NagSettings>(behavior: 'setting', name: K, value: NagSettings[K]): JQuery;
        (behavior: 'setting', value: NagSettings): JQuery;
        (settings?: NagSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/nag.html}
     */
    interface NagSettings extends ComponentSettings {
        // region Behavior

        /**
         * allows cookie to be overridden
         *
         * @default false
         */
        persist?: boolean;
        /**
         * set to zero to require manually dismissal, otherwise hides on its own
         *
         * @default 0
         */
        displayTime?: number;
        animation?: {
            /**
             * @default 'slide'
             */
            show?: string;
            /**
             * @default 'slide'
             */
            hide?: string;
        };
        /**
         * @default false
         */
        context?: false | Selector;
        /**
         * @default false
         */
        detachable?: boolean;

        /**
         * @default 30
         */
        expires?: number;
        /**
         * @default false
         */
        domain?: false | string;
        /**
         * @default '/'
         */
        path?: string;

        /**
         * type of storage to use
         *
         * @default 'cookie'
         */
        storageMethod?: 'cookie' | 'localstorage' | 'sessionstorage';

        /**
         * @default 'nag'
         */
        key?: any;
        /**
         * @default 'dismiss'
         */
        value?: any;

        /**
         * @default 500
         */
        speed?: number;
        /**
         * @default 'easeOutQuad'
         */
        easing?: string;

        // endregion

        // region Callbacks

        onHide?(this: JQuery): void;

        // endregion

        // region DOM Settings

        className?: {
            /**
             * @default 'bottom'
             */
            bottom?: string;
            /**
             * @default 'fixed'
             */
            fixed?: string;
        };
        selector?: {
            /**
             * @default '.close.icon'
             */
            close?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default '$.cookie is not included. A storage solution is required.'
             */
            noCookieStorage?: string;
            /**
             * @default 'Neither $.cookie or store is defined. A storage solution is required for storing state'
             */
            noStorage?: string;
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Popup

    interface Popup {
        settings: PopupSettings;

        /**
         * Shows popup
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides popup
         */
        (behavior: 'hide'): JQuery;
        /**
         * Hides all visible pop ups on the page
         */
        (behavior: 'hide all'): JQuery;
        /**
         * Returns current popup dom element
         */
        (behavior: 'get popup'): JQuery;
        /**
         * Changes current popup content
         */
        (behavior: 'change content', html: string): JQuery;
        /**
         * Toggles visibility of popup
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Returns whether popup is visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether popup is hidden
         */
        (behavior: 'is hidden'): boolean;
        /**
         * Returns whether popup is created and inserted into the page
         */
        (behavior: 'exists'): boolean;
        /**
         * Adjusts popup when content size changes (only necessary for centered popups)
         */
        (behavior: 'reposition'): JQuery;
        /**
         * Repositions a popup
         */
        (behavior: 'set position', position: string): JQuery;
        /**
         * Removes popup from the page and removes all events
         */
        (behavior: 'destroy'): JQuery;
        /**
         * Removes popup from the page
         */
        (behavior: 'remove popup'): JQuery;
        <K extends keyof PopupSettings>(behavior: 'setting', name: K, value?: undefined): PopupSettings[K];
        <K extends keyof PopupSettings>(behavior: 'setting', name: K, value: PopupSettings[K]): JQuery;
        (behavior: 'setting', value: PopupSettings): JQuery;
        (settings?: PopupSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/popup.html#/settings}
     */
    interface PopupSettings extends ComponentSettings {
        // region Popup Settings

        /**
         * Can specify a DOM element that should be used as the popup. This is useful for including a pre-formatted popup.
         *
         * @default false
         */
        popup?: false | Selector;
        /**
         * Whether all other popups should be hidden when this popup is opened
         *
         * @default false
         */
        exclusive?: boolean;
        /**
         * Whether to move popup to same offset container as target element when popup already exists on the page.
         * Using a popup inside of an element without overflow:visible, like a sidebar, may require you to set this to false
         *
         * @default true
         */
        movePopup?: boolean;
        /**
         * Whether popup should attach mutationObservers to automatically run destroy when the element is removed from the page's DOM.
         *
         * @default true
         */
        observeChanges?: boolean;
        /**
         * When the popup surpasses the boundary of this element, it will attempt to find another display position.
         */
        boundary?: Selector;
        /**
         * Selector or jquery object specifying where the popup should be created.
         *
         * @default 'body'
         */
        context?: Selector;
        /**
         * Will automatically hide a popup on scroll event in this context
         */
        scrollContext?: Selector;
        /**
         * Number of pixels that a popup is allowed to appear outside the boundaries of its context.
         * This allows for permissible rounding errors when an element is against the edge of its context.
         *
         * @default 2
         */
        jitter?: number;
        /**
         * Position that the popup should appear
         *
         * @default 'top left'
         */
        position?: string;
        /**
         * If a popup is inline it will be created next to current element, allowing for local css rules to apply.
         * It will not be removed from the DOM after being hidden.
         * Otherwise popups will appended to body and removed after being hidden.
         *
         * @default false
         */
        inline?: boolean;
        /**
         * Whether popup contents should be preserved in the page after being hidden, allowing it to re-appear slightly faster on subsequent loads.
         *
         * @default false
         */
        preserve?: boolean;
        /**
         * Can be set to adjacent or opposite to prefer adjacent or opposite position if popup cannot fit on screen
         *
         * @default 'adjacent'
         */
        prefer?: 'adjacent' | 'opposite';
        /**
         * When set to false, a popup will not appear and produce an error message if it cannot entirely fit on page.
         * Setting this to a position like, right center forces the popup to use this position as a last resort even if it is partially offstage.
         * Setting this to true will use the last attempted position.
         *
         * @default false
         */
        lastResort?: boolean | string;
        /**
         * Event used to trigger popup. Can be either focus, click, hover, or manual. Manual popups must be triggered with $('.element').popup('show');
         *
         * @default 'hover'
         */
        on?: 'focus' | 'click' | 'hover' | 'manual';
        /**
         * Delay in milliseconds before showing or hiding a popup on hover or focus
         */
        delay?: {
            show?: number;
            hide?: number;
        };
        /**
         * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
         *
         * @default 'slide down'
         * @see {@link http://semantic-ui.com/modules/transition.html}
         */
        transition?: string;
        /**
         * Duration of animation events
         *
         * @default 200
         */
        duration?: number;
        /**
         * Whether popup should set fluid popup variation width on load to avoid width: 100% including padding
         *
         * @default true
         */
        setFluidWidth?: boolean;
        /**
         * Whether popup should not close on hover (useful for popup navigation menus)
         *
         * @default false
         */
        hoverable?: boolean;
        /**
         * When using on: 'click' specifies whether clicking the page should close the popup
         *
         * @default true
         */
        closable?: boolean;
        /**
         * When using on: 'hover' whether touchstart events should be added to allow the popup to be triggered
         */
        addTouchEvents?: boolean;
        /**
         * Whether popup should hide on scroll or touchmove, auto only hides for popups without on: 'click'.
         * Set this to false to prevent mobile browsers from closing popups when you tap inside input fields.
         *
         * @default 'auto'
         */
        hideOnScroll?: 'auto' | false;
        /**
         * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
         *
         * @default false
         */
        target?: false | Selector;
        /**
         * Offset for distance of popup from element
         *
         * @default 0
         */
        distanceAway?: number;
        /**
         * Offset in pixels from calculated position
         *
         * @default 0
         */
        offset?: number;
        /**
         * Number of iterations before giving up search for popup position when a popup cannot fit on screen
         *
         * @default 10
         */
        maxSearchDepth?: number;

        // endregion

        // region Callbacks

        /**
         * Callback on popup element creation, with created popup
         */
        onCreate?(this: JQuery, $module: JQuery): void;
        /**
         * Callback immediately before Popup is removed from DOM
         */
        onRemove?(this: JQuery, $module: JQuery): void;
        /**
         * Callback before popup is shown. Returning false from this callback will cancel the popup from showing.
         */
        onShow?(this: JQuery, $module: JQuery): false | void;
        /**
         * Callback after popup is shown
         */
        onVisible?(this: JQuery, $module: JQuery): void;
        /**
         * Callback before popup is hidden. Returning false from this callback will cancel the popup from hiding.
         */
        onHide?(this: JQuery, $module: JQuery): false | void;
        /**
         * Callback after popup is hidden
         */
        onHidden?(this: JQuery, $module: JQuery): void;
        /**
         * Callback after popup cannot be placed on screen
         */
        onUnplaceable?(this: JQuery, $module: JQuery): void;

        // endregion

        // region Content Settings

        /**
         * Popup variation to use, can use multiple variations with a space delimiter
         */
        variation?: string;
        /**
         * Content to display
         */
        content?: string;
        /**
         * Title to display alongside content
         */
        title?: string;
        /**
         * HTML content to display instead of preformatted title and content
         */
        html?: string | JQuery;

        // endregion

        // region DOM Settings

        /**
         * DOM Selectors used internally
         */
        selector?: {
            /**
             * @default '.ui.popup'
             */
            popup?: string;
        };
        /**
         * HTML Data attributes used to store data
         */
        metadata?: {
            /**
             * @default 'content'
             */
            content?: string;
            /**
             * @default 'html'
             */
            html?: string;
            /**
             * @default 'offset'
             */
            offset?: string;
            /**
             * @default 'position'
             */
            position?: string;
            /**
             * @default 'title'
             */
            title?: string;
            /**
             * @default 'variation'
             */
            variation?: string;
        };
        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'ui popup'
             */
            popup?: string;
            /**
             * @default 'top left center bottom right'
             */
            position?: string;
            /**
             * @default 'visible'
             */
            visible?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The position you specified is not a valid position'
             */
            invalidPosition?: string;
            /**
             * @default 'Popup does not fit within the boundaries of the viewport'
             */
            cannotPlace?: string;
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
            /**
             * @default 'This module requires ui transitions <https: github.com="" semantic-org="" ui-transition="">'
             */
            noTransition?: string;
            /**
             * @default 'The target or popup you specified does not exist on the page'
             */
            notFound?: string;
        };

        // endregion
    }

    // endregion

    // region Progress

    interface Progress {
        settings: ProgressSettings;

        /**
         * Sets current percent of progress to value. If using a total will convert from percent to estimated value.
         */
        (behavior: 'set percent', percent: number): JQuery;
        /**
         * Sets progress to specified value. Will automatically calculate percent from total.
         */
        (behavior: 'set progress', value: number): JQuery;
        /**
         * Increments progress by increment value, if not passed a value will use random amount specified in settings
         */
        (behavior: 'increment', incrementValue: number): JQuery;
        /**
         * Decrements progress by decrement value, if not passed a value will use random amount specified in settings
         */
        (behavior: 'decrement', decrementValue: number): JQuery;
        /**
         * Immediately updates progress to value, ignoring progress animation interval delays
         */
        (behavior: 'update progress', value: number): JQuery;
        /**
         * Finishes progress and sets loaded to 100%
         */
        (behavior: 'complete'): JQuery;
        /**
         * Resets progress to zero
         */
        (behavior: 'reset'): JQuery;
        /**
         * Set total to a new value
         */
        (behavior: 'set total', total: number): JQuery;
        /**
         * Replaces templated string with value, total, percent left and percent.
         */
        (behavior: 'get text', text: string): string;
        /**
         * Returns normalized value inside acceptable range specified by total.
         */
        (behavior: 'get normalized value', value: number): number;
        /**
         * Returns percent as last specified
         */
        (behavior: 'get percent'): number;
        /**
         * Returns current progress value
         */
        (behavior: 'get value'): number;
        /**
         * Returns total
         */
        (behavior: 'get total'): number;
        /**
         * Returns whether progress is completed
         */
        (behavior: 'is complete'): boolean;
        /**
         * Returns whether progress was a success
         */
        (behavior: 'is success'): boolean;
        /**
         * Returns whether progress is in warning state
         */
        (behavior: 'is warning'): boolean;
        /**
         * Returns whether progress is in error state
         */
        (behavior: 'is error'): boolean;
        /**
         * Returns whether progress is in active state
         */
        (behavior: 'is active'): boolean;
        /**
         * Sets progress to active state
         */
        (behavior: 'set active'): JQuery;
        /**
         * Sets progress to warning state
         */
        (behavior: 'set warning'): JQuery;
        /**
         * Sets progress to success state
         */
        (behavior: 'set success'): JQuery;
        /**
         * Sets progress to error state
         */
        (behavior: 'set error'): JQuery;
        /**
         * Changes progress animation speed
         */
        (behavior: 'set duration', value: number): JQuery;
        /**
         * Sets progress exterior label to text
         */
        (behavior: 'set label', text: string): JQuery;
        /**
         * Sets progress bar label to text
         */
        (behavior: 'set bar label', text: string): JQuery;
        /**
         * Removes progress to active state
         */
        (behavior: 'remove active'): JQuery;
        /**
         * Removes progress to warning state
         */
        (behavior: 'remove warning'): JQuery;
        /**
         * Removes progress to success state
         */
        (behavior: 'remove success'): JQuery;
        /**
         * Removes progress to error state
         */
        (behavior: 'remove error'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof ProgressSettings>(behavior: 'setting', name: K, value?: undefined): ProgressSettings[K];
        <K extends keyof ProgressSettings>(behavior: 'setting', name: K, value: ProgressSettings[K]): JQuery;
        (behavior: 'setting', value: ProgressSettings): JQuery;
        (settings?: ProgressSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/progress.html#/settings}
     */
    interface ProgressSettings extends ComponentSettings {
        // region Progress Settings

        /**
         * Whether success state should automatically trigger when progress completes
         *
         * @default true
         */
        autoSuccess?: boolean;
        /**
         * Whether progress should automatically show activity when incremented
         *
         * @default true
         */
        showActivity?: boolean;
        /**
         * When set to true, values that calculate to above 100% or below 0% will be adjusted.
         * When set to false, inappropriate values will produce an error.
         *
         * @default true
         */
        limitValues?: boolean;
        /**
         * Can be set to either to display progress as percent or ratio. Matches up to corresponding text template with the same name.
         *
         * @default 'percent'
         */
        label?: 'percent' | 'ratio';
        /**
         * When incrementing without value, sets range for random increment value
         */
        random?: {
            /**
             * @default 2
             */
            min?: number;
            /**
             * @default 5
             */
            max?: number;
        };
        /**
         * Decimal point precision for calculated progress
         *
         * @default 1
         */
        precision?: number;
        /**
         * Setting a total value will make each call to increment get closer to this total (i.e. 1/20, 2/20 etc)
         *
         * @default false
         */
        total?: false | number;
        /**
         * Sets current value, when total is specified, this is used to calculate a ratio of the total, with percent this should be the overall percent
         *
         * @default false
         */
        value?: false | number;

        // endregion

        // region Callbacks

        /**
         * Callback on percentage change
         */
        onChange?(this: JQuery, percent: number, value: number, total: number): void;
        /**
         * Callback on success state
         */
        onSuccess?(this: JQuery, total: number): void;
        /**
         * Callback on active state
         */
        onActive?(this: JQuery, value: number, total: number): void;
        /**
         * Callback on error state
         */
        onError?(this: JQuery, value: number, total: number): void;
        /**
         * Callback on warning state
         */
        onWarning?(this: JQuery, value: number, total: number): void;

        // endregion

        // region DOM Settings

        /**
         * Text content for each state, uses simple templating with {percent}, {value}, {total}
         */
        text?: {
            /**
             * @default false
             */
            active?: false | string;
            /**
             * @default false
             */
            error?: false | string;
            /**
             * @default false
             */
            success?: false | string;
            /**
             * @default false
             */
            warning?: false | string;
            /**
             * @default '{percent}%'
             */
            percent?: false | string;
            /**
             * @default '{value} of {total}'
             */
            ratio?: false | string;
        };
        /**
         * Regular expressions used by module
         */
        regExp?: {
            /**
             * @default /\{\$*[A-z0-9]+\}/g
             */
            variable?: RegExp;
        };
        /**
         * Selectors used by module
         */
        selector?: {
            /**
             * @default '> .bar
             */
            bar?: string;
            /**
             * @default '> .label'
             */
            label?: string;
            /**
             * @default '.bar > .progress'
             */
            progress?: string;
        };
        /**
         * DOM metadata used by module
         */
        metadata?: {
            /**
             * @default 'percent'
             */
            percent?: string;
            /**
             * @default 'total'
             */
            total?: string;
            /**
             * @default 'value'
             */
            value?: string;
        };
        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'error'
             */
            error?: string;
            /**
             * @default 'success'
             */
            success?: string;
            /**
             * @default 'warning'
             */
            warning?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
            /**
             * @default 'Progress value is non numeric'
             */
            nonNumeric?: string;
        };

        // endregion
    }

    // endregion

    // region Rating

    interface Rating {
        settings: RatingSettings;

        /**
         * Sets rating programmatically
         */
        (behavior: 'set rating', rating: number): JQuery;
        /**
         * Gets current rating
         */
        (behavior: 'get rating'): number;
        /**
         * Disables interactive rating mode
         */
        (behavior: 'disable'): JQuery;
        /**
         * Enables interactive rating mode
         */
        (behavior: 'enable'): JQuery;
        /**
         * Clears current rating
         */
        (behavior: 'clear rating'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof RatingSettings>(behavior: 'setting', name: K, value?: undefined): RatingSettings[K];
        <K extends keyof RatingSettings>(behavior: 'setting', name: K, value: RatingSettings[K]): JQuery;
        (behavior: 'setting', value: RatingSettings): JQuery;
        (settings?: RatingSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/rating.html#/settings}
     */
    interface RatingSettings extends ComponentSettings {
        // region Rating Settings

        /**
         * A number representing the default rating to apply
         *
         * @default 0
         */
        initialRating?: number;
        /**
         * Whether callbacks like onRate should fire immediately after initializing with the current value.
         *
         * @default false
         */
        fireOnInit?: boolean;
        /**
         * By default a rating will be only clearable if there is 1 icon. Setting to true/false will allow or disallow a user to clear their rating
         *
         * @default 'auto'
         */
        clearable?: 'auto' | boolean;
        /**
         * Whether to enable user's ability to rate
         *
         * @default true
         */
        interactive?: boolean;

        // endregion

        // region Callbacks

        /**
         * Is called after user selects a new rating
         */
        onRate?(this: JQuery, value: number): void;

        // endregion

        // region DOM Settings

        selector?: {
            /**
             * @default '.icon'
             */
            icon?: string;
        };
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'hover'
             */
            hover?: string;
            /**
             * @default 'loading'
             */
            loading?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'You called a rating action that was not defined'
             */
            action?: string;
        };

        // endregion
    }

    // endregion

    // region Search

    interface Search {
        settings: SearchSettings;

        /**
         * Search for value currently set in search input
         */
        (behavior: 'query', callback?: () => void): JQuery;
        /**
         * Displays message in search results with text, using template matching type
         */
        (behavior: 'display message', text: string, type: string): JQuery;
        /**
         * Cancels current remote search query
         */
        (behavior: 'cancel query'): JQuery;
        /**
         * Search local object for specified query and display results
         */
        (behavior: 'search local', query: string): JQuery;
        /**
         * Whether has minimum characters
         */
        (behavior: 'has minimum characters'): boolean;
        /**
         * Search remote endpoint for specified query and display results
         */
        (behavior: 'search remote', query: string, callback?: () => void): JQuery;
        /**
         * Search object for specified query and return results
         */
        (behavior: 'search object', query: string, object: any, searchFields: string[]): any;
        /**
         * Cancels current remote search request
         */
        (behavior: 'cancel query'): JQuery;
        /**
         * Whether search is currently focused
         */
        (behavior: 'is focused'): boolean;
        /**
         * Whether search results are visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Whether search results are empty
         */
        (behavior: 'is empty'): boolean;
        /**
         * Returns current search value
         */
        (behavior: 'get value'): any;
        /**
         * Returns JSON object matching searched title or id (see above)
         */
        (behavior: 'get result', value: any): any;
        /**
         * Sets search input to value
         */
        (behavior: 'set value', value: any): JQuery;
        /**
         * Reads cached results for query
         */
        (behavior: 'read cache', query: string): JQuery;
        /**
         * Clears value from cache, if no parameter passed clears all cache
         */
        (behavior: 'clear cache', query?: string): JQuery;
        /**
         * Writes cached results for query
         */
        (behavior: 'write cache', query: string): JQuery;
        /**
         * Adds HTML to results and displays
         */
        (behavior: 'add results', html: string): JQuery;
        /**
         * Shows results container
         */
        (behavior: 'show results', callback?: () => void): JQuery;
        /**
         * Hides results container
         */
        (behavior: 'hide results', callback?: () => void): JQuery;
        /**
         * Generates results using parser specified by settings.template
         */
        (behavior: 'generate results', response: any): JQuery;
        /**
         * Removes all events
         */
        (behavior: 'destroy'): JQuery;
        <K extends keyof SearchSettings>(behavior: 'setting', name: K, value?: undefined): SearchSettings[K];
        <K extends keyof SearchSettings>(behavior: 'setting', name: K, value: SearchSettings[K]): JQuery;
        (behavior: 'setting', value: SearchSettings): JQuery;
        (settings?: SearchSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/search.html#/settings}
     */
    interface SearchSettings extends ComponentSettings {
        // region Behavior

        /**
         * Settings for API call.
         *
         * @see {@link http://semantic-ui.com/behaviors/api.html#/usage}
         */
        apiSettings?: ApiSettings;
        /**
         * Minimum characters to query for results
         *
         * @default 1
         */
        minCharacters?: number;
        /**
         * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
         *
         * @default 'fade'
         * @see {@link http://semantic-ui.com/modules/transition.html}
         */
        transition?: string;
        /**
         * Duration of animation events
         *
         * @default 300
         */
        duration?: number;
        /**
         * Maximum results to display when using local and simple search, maximum category count for category search
         *
         * @default 7
         */
        maxResults?: number;
        /**
         * Caches results locally to avoid requerying server
         *
         * @default true
         */
        cache?: boolean;
        /**
         * Specify a Javascript object which will be searched locally
         *
         * @default false
         */
        source?: false | any;
        /**
         * Whether the search should automatically select the first search result after searching
         *
         * @default false
         */
        selectFirstResult?: boolean;
        /**
         * Whether a "no results" message should be shown if no results are found. (These messages can be modified using the template object specified below)
         *
         * @default false
         */
        showNoResults?: boolean;
        /**
         * Return local results that match anywhere inside your content
         *
         * @default true
         */
        searchFullText?: boolean;
        /**
         * List mapping display content to JSON property, either with API or source.
         */
        fields?: {
            /**
             * array of categories (category view)
             *
             * @default 'results'
             */
            categories?: string;
            /**
             * name of category (category view)
             *
             * @default 'name'
             */
            categoryName?: string;
            /**
             * array of results (category view)
             *
             * @default 'results'
             */
            categoryResults?: string;
            /**
             * result description
             *
             * @default 'description'
             */
            description?: string;
            /**
             * result image
             *
             * @default 'image'
             */
            image?: string;
            /**
             * result price
             *
             * @default 'price'
             */
            price?: string;
            /**
             * array of results (standard)
             *
             * @default 'results'
             */
            results?: string;
            /**
             * result title
             *
             * @default 'title'
             */
            title?: string;
            /**
             * "view more" object name
             *
             * @default 'action'
             */
            action?: string;
            /**
             * "view more" text
             *
             * @default 'text'
             */
            actionText?: string;
            /**
             * "view more" url
             *
             * @default 'url'
             */
            actionURL?: string;
        };
        /**
         * Specify object properties inside local source object which will be searched
         */
        searchFields?: string[];
        /**
         * Delay before hiding results after search blur
         *
         * @default 0
         */
        hideDelay?: number;
        /**
         * Delay before querying results on inputchange
         *
         * @default 100
         */
        searchDelay?: number;
        /**
         * Easing equation when using fallback Javascript animation
         *
         * @default 'easeOutExpo'
         */
        easing?: string;

        // endregion

        // region Callbacks

        /**
         * Callback on element selection by user.
         * The first parameter includes the filtered response results for that element.
         * The function should return false to prevent default action (closing search results and selecting value).
         */
        onSelect?(this: JQuery, result: any, response: any): false | void;
        /**
         * Callback after processing element template to add HTML to results. Function should return false to prevent default actions.
         */
        onResultsAdd?(this: JQuery, html: string): false | void;
        /**
         * Callback on search query
         */
        onSearchQuery?(this: JQuery, query: string): void;
        /**
         * Callback on server response
         */
        onResults?(this: JQuery, response: any): void;
        /**
         * Callback when results are opened
         */
        onResultsOpen?(this: JQuery): void;
        /**
         * Callback when results are closed
         */
        onResultsClose?(this: JQuery): void;

        // endregion

        // region Templates

        templates?: {
            escape?(string: string): string;
            message?(message: string, type: string): string;
            category?(response: any): string;
            standard?(response: any): string;
        };

        // endregion

        // region DOM Settings

        /**
         * Regular expressions used for matching
         */
        regExp?: {
            /**
             * @default /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
             */
            escape?: RegExp;
            /**
             * @default '(?:\s|^)'
             */
            beginsWith?: string;
        };
        /**
         * Selectors used to find parts of a module
         */
        selector?: {
            /**
             * @default '.prompt'
             */
            prompt?: string;
            /**
             * @default '.search.button'
             */
            searchButton?: string;
            /**
             * @default '.results'
             */
            results?: string;
            /**
             * @default '.category'
             */
            category?: string;
            /**
             * @default '.result'
             */
            result?: string;
        };
        /**
         * HTML5 metadata attributes used internally
         */
        metadata?: {
            /**
             * @default 'cache'
             */
            cache?: string;
            /**
             * @default 'results'
             */
            results?: string;
        };
        /**
         * Class names used to determine element state
         */
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'empty'
             */
            empty?: string;
            /**
             * @default 'focus'
             */
            focus?: string;
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'down'
             */
            pressed?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'Cannot search. No source used, and Semantic API module was not included'
             */
            source?: string;
            /**
             * @default 'Your search returned no results'
             */
            noResults?: string;
            /**
             * @default 'Error in debug logging, exiting.'
             */
            logging?: string;
            /**
             * @default 'A valid template name was not specified.'
             */
            noTemplate?: string;
            /**
             * @default 'There was an issue with querying the server.'
             */
            serverError?: string;
            /**
             * @default 'Results must be an array to use maxResults setting'
             */
            maxResults?: string;
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // region Shape

    interface Shape {
        settings: ShapeSettings;

        /**
         * Flips the shape upward
         */
        (behavior: 'flip up'): JQuery;
        /**
         * Flips the shape downward
         */
        (behavior: 'flip down'): JQuery;
        /**
         * Flips the shape right
         */
        (behavior: 'flip right'): JQuery;
        /**
         * Flips the shape left
         */
        (behavior: 'flip left'): JQuery;
        /**
         * Flips the shape over clock-wise
         */
        (behavior: 'flip over'): JQuery;
        /**
         * Flips the shape over counter-clockwise
         */
        (behavior: 'flip back'): JQuery;
        /**
         * Set the next side to a specific selector
         */
        (behavior: 'set next side', selector: Selector): JQuery;
        /**
         * Returns whether shape is currently animating
         */
        (behavior: 'is animating'): boolean;
        /**
         * Removes all inline styles
         */
        (behavior: 'reset'): JQuery;
        /**
         * Queues an animation until after current animation
         */
        (behavior: 'queue', animation: string): JQuery;
        /**
         * Forces a reflow on element
         */
        (behavior: 'repaint'): JQuery;
        /**
         * Set the next side to next sibling to active element
         */
        (behavior: 'set default side'): JQuery;
        /**
         * Sets shape to the content size of the next side
         */
        (behavior: 'set stage size'): JQuery;
        /**
         * Refreshes the selector cache for element sides
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Returns translation for next side staged below
         */
        (behavior: 'get transform down'): Translation;
        /**
         * Returns translation for next side staged left
         */
        (behavior: 'get transform left'): Translation;
        /**
         * Returns translation for next side staged right
         */
        (behavior: 'get transform right'): Translation;
        /**
         * Returns translation for next side staged up
         */
        (behavior: 'get transform up'): Translation;
        /**
         * Returns translation for next side staged down
         */
        (behavior: 'get transform down'): Translation;
        (behavior: 'destroy'): JQuery;
        <K extends keyof ShapeSettings>(behavior: 'setting', name: K, value?: undefined): ShapeSettings[K];
        <K extends keyof ShapeSettings>(behavior: 'setting', name: K, value: ShapeSettings[K]): JQuery;
        (behavior: 'setting', value: ShapeSettings): JQuery;
        (settings?: ShapeSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/shape.html#/settings}
     */
    interface ShapeSettings extends ComponentSettings {
        // region Shape Settings

        /**
         * Duration of side change animation
         *
         * @default 700
         */
        duration?: number;
        /**
         * When set to next will use the width of the next side during the shape's animation.
         * When set to initial it will use the width of the shape at initialization.
         * When set to a specific pixel height, will force the width to that height.
         *
         * @default 'initial'
         * @since 2.2
         */
        width?: 'next' | 'initial' | number;
        /**
         * When set to next will use the height of the next side during the shape's animation.
         * When set to initial it will use the height of the shape at initialization.
         * When set to a specific pixel height, will force the height to that height.
         *
         * @default 'initial'
         * @since 2.2
         */
        height?: 'next' | 'initial' | number;

        // endregion

        // region Callbacks

        /**
         * Is called before side change
         */
        beforeChange?(this: JQuery): void;
        /**
         * Is called after visible side change
         */
        onChange?(this: JQuery): void;

        // endregion

        // region DOM Settings

        selector?: {
            /**
             * @default '.sides'
             */
            sides?: string;
            /**
             * @default '.side'
             */
            side?: string;
        };
        className?: {
            /**
             * @default 'animating'
             */
            animating?: string;
            /**
             * @default 'hidden'
             */
            hidden?: string;
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'active'
             */
            active?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'You tried to switch to a side that does not exist.'
             */
            side?: string;
            /**
             * @default 'The method you called is not defined'
             */
            method?: string;
        };

        // endregion
    }

    interface Translation {
        transform: string;
    }

    // endregion

    // region Sidebar

    interface Sidebar {
        settings: SidebarSettings;

        /**
         * Attaches sidebar action to given selector. Default event if none specified is toggle
         */
        (behavior: 'attach events', selector: string, event?: string): JQuery;
        /**
         * Shows sidebar
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides sidebar
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles visibility of sidebar
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Returns whether sidebar is visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether sidebar is hidden
         */
        (behavior: 'is hidden'): boolean;
        /**
         * Pushes page content to be visible alongside sidebar
         */
        (behavior: 'push page'): JQuery;
        /**
         * Returns direction of current sidebar
         */
        (behavior: 'get direction'): string;
        /**
         * Returns page content to original position
         */
        (behavior: 'pull page'): JQuery;
        /**
         * Adds stylesheet to page head to trigger sidebar animations
         */
        (behavior: 'add body CSS'): JQuery;
        /**
         * Removes any inline stylesheets for sidebar animation
         */
        (behavior: 'remove body CSS'): JQuery;
        /**
         * Returns vendor prefixed transition end event
         */
        (behavior: 'get transition event'): string;
        (behavior: 'destroy'): JQuery;
        <K extends keyof SidebarSettings>(behavior: 'setting', name: K, value?: undefined): SidebarSettings[K];
        <K extends keyof SidebarSettings>(behavior: 'setting', name: K, value: SidebarSettings[K]): JQuery;
        (behavior: 'setting', value: SidebarSettings): JQuery;
        (settings?: SidebarSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/sidebar.html#/settings}
     */
    interface SidebarSettings extends ComponentSettings {
        // region Behavior

        /**
         * Context which sidebar will appear inside
         *
         * @default 'body'
         */
        context?: Selector;
        /**
         * Whether multiple sidebars can be open at once
         *
         * @default false
         */
        exclusive?: boolean;
        /**
         * Whether sidebar can be closed by clicking on page
         *
         * @default true
         */
        closable?: boolean;
        /**
         * Whether to dim page contents when sidebar is visible
         *
         * @default true
         */
        dimPage?: boolean;
        /**
         * Whether to lock page scroll when sidebar is visible
         *
         * @default false
         */
        scrollLock?: boolean;
        /**
         * Whether to return to original scroll position when sidebar is hidden, automatically occurs with transition: scale
         *
         * @default false
         */
        returnScroll?: boolean;
        /**
         * When sidebar is initialized without the proper HTML, using this option will defer creation of DOM to use requestAnimationFrame.
         *
         * @default false
         */
        delaySetup?: boolean;

        // endregion

        // region Animation

        /**
         * Named transition to use when animating sidebar. Defaults to 'auto' which selects transition from defaultTransition based on direction.
         *
         * @default 'auto'
         */
        transition?: string;
        /**
         * Named transition to use when animating when detecting mobile device. Defaults to 'auto' which selects transition from defaultTransition based on direction.
         *
         * @default 'auto'
         */
        mobileTransition?: string;
        /**
         * Default transitions for each direction and screen size, used with transition: auto
         */
        defaultTransition?: {
            computer?: {
                /**
                 * @default 'uncover'
                 */
                left?: string;
                /**
                 * @default 'uncover'
                 */
                right?: string;
                /**
                 * @default 'overlay'
                 */
                top?: string;
                /**
                 * @default 'overlay'
                 */
                bottom?: string;
            };
            mobile?: {
                /**
                 * @default 'uncover'
                 */
                left?: string;
                /**
                 * @default 'uncover'
                 */
                right?: string;
                /**
                 * @default 'overlay'
                 */
                top?: string;
                /**
                 * @default 'overlay'
                 */
                bottom?: string;
            };
        };
        /**
         * Whether Javascript animations should be used. Defaults to false. Setting to auto will use legacy animations only for browsers that do not support CSS transforms
         *
         * @default false
         */
        useLegacy?: 'auto' | boolean;
        /**
         * Duration of sidebar animation when using legacy Javascript animation
         *
         * @default 500
         */
        duration?: number;
        /**
         * Easing to use when using legacy Javascript animation
         *
         * @default 'easeInOutQuint'
         */
        easing?: string;

        // endregion

        // region Callbacks

        /**
         * Is called when a sidebar begins animating in.
         */
        onVisible?(this: JQuery): void;
        /**
         * Is called when a sidebar has finished animating in.
         */
        onShow?(this: JQuery): void;
        /**
         * Is called when a sidebar begins to hide or show
         */
        onChange?(this: JQuery): void;
        /**
         * Is called before a sidebar begins to animate out.
         */
        onHide?(this: JQuery): void;
        /**
         * Is called after a sidebar has finished animating out.
         */
        onHidden?(this: JQuery): void;

        // endregion

        // region DOM Settings

        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'animating'
             */
            animating?: string;
            /**
             * @default 'dimmed'
             */
            dimmed?: string;
            /**
             * @default 'ios'
             */
            ios?: string;
            /**
             * @default 'pushable'
             */
            pushable?: string;
            /**
             * @default 'pushed'
             */
            pushed?: string;
            /**
             * @default 'right'
             */
            right?: string;
            /**
             * @default 'top'
             */
            top?: string;
            /**
             * @default 'left'
             */
            left?: string;
            /**
             * @default 'bottom'
             */
            bottom?: string;
            /**
             * @default 'visible'
             */
            visible?: string;
        };
        regExp?: {
            /**
             * @default /(iPad|iPhone|iPod)/g
             */
            ios?: RegExp;
            /**
             * @default /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
             */
            mobile?: RegExp;
        };
        selector?: {
            /**
             * @default '.fixed'
             */
            fixed?: string;
            /**
             * @default 'script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed'
             */
            omitted?: string;
            /**
             * @default '.pusher'
             */
            pusher?: string;
            /**
             * @default '.ui.sidebar'
             */
            sidebar?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
            /**
             * @default 'Had to add pusher element. For optimal performance make sure body content is inside a pusher element'
             */
            pusher?: string;
            /**
             * @default 'Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag'
             */
            movedSidebar?: string;
            /**
             * @default 'The overlay setting is no longer supported, use animation: overlay'
             */
            overlay?: string;
            /**
             * @default 'There were no elements that matched the specified selector'
             */
            notFound?: string;
        };

        // endregion
    }

    // endregion

    // region Sticky

    interface Sticky {
        settings: StickySettings;

        /**
         * recalculates offsets
         */
        (behavior: 'refresh'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof StickySettings>(behavior: 'setting', name: K, value?: undefined): StickySettings[K];
        <K extends keyof StickySettings>(behavior: 'setting', name: K, value: StickySettings[K]): JQuery;
        (behavior: 'setting', value: StickySettings): JQuery;
        (settings?: StickySettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/sticky.html#/settings}
     */
    interface StickySettings extends ComponentSettings {
        // region Sticky Settings

        /**
         * Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
         *
         * @default false
         */
        pushing?: boolean;
        /**
         * Sticky container height will only be set if the difference between heights of container and context is larger than this jitter value.
         *
         * @default 5
         */
        jitter?: number;
        /**
         * Whether any change in context DOM should automatically refresh cached sticky positions
         *
         * @default false
         */
        observeChanges?: boolean;
        /**
         * Context which sticky element should stick to
         *
         * @default false
         */
        context?: false | Selector;
        /**
         * Context which sticky should attach onscroll events.
         *
         * @default 'window'
         */
        scrollContext?: Selector;
        /**
         * Offset in pixels from the top of the screen when fixing element to viewport
         *
         * @default 0
         */
        offset?: number;
        /**
         * Offset in pixels from the bottom of the screen when fixing element to viewport
         *
         * @default 0
         */
        bottomOffset?: number;

        // endregion

        // region Callbacks

        /**
         * Callback when element is repositioned from layout change
         */
        onReposition?(this: JQuery): void;
        /**
         * Callback when requestAnimationFrame fires from scroll handler.
         */
        onScroll?(this: JQuery): void;
        /**
         * Callback when element is fixed to page
         */
        onStick?(this: JQuery): void;
        /**
         * Callback when element is unfixed from page
         */
        onUnstick?(this: JQuery): void;
        /**
         * Callback when element is bound to top of parent container
         */
        onTop?(this: JQuery): void;
        /**
         * Callback when element is bound to bottom of parent container
         */
        onBottom?(this: JQuery): void;

        // endregion

        // region DOM Settings

        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'bound'
             */
            bound?: string;
            /**
             * @default 'fixed'
             */
            fixed?: string;
            /**
             * @default 'native'
             */
            supported?: string;
            /**
             * @default 'top'
             */
            top?: string;
            /**
             * @default 'bottom'
             */
            bottom?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'Sticky element must be inside a relative container'
             */
            container?: string;
            /**
             * @default 'Element is hidden, you must call refresh after element becomes visible'
             */
            visible?: string;
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
            /**
             * @default 'Context specified does not exist'
             */
            invalidContext?: string;
            /**
             * @default 'Sticky element is larger than its container, cannot create sticky.'
             */
            elementSize?: string;
        };

        // endregion
    }

    // endregion

    // region Tab

    interface Tab {
        settings: TabSettings;

        // Documentation says this exists but it does not.
        // /**
        //  * Attaches tab action to given selector. Default event if none specified is toggle
        //  */
        // (behavior: 'attach events', selector: Selector, event?: string): JQuery;
        /**
         * Changes tab to path
         */
        (behavior: 'change tab', path: string): JQuery;
        /**
         * Sets current path to state
         */
        (behavior: 'set state', path: string): JQuery;
        /**
         * Returns current path
         */
        (behavior: 'get path'): string;
        /**
         * Returns whether tab exists
         */
        (behavior: 'is tab'): boolean;
        /**
         * Returns cached HTML for path
         */
        (behavior: 'cache read', path: string): string | false;
        /**
         * Sets cached HTML for path
         */
        (behavior: 'cache add', path: string, html: string): JQuery;
        /**
         * Removes cached HTML for path
         */
        (behavior: 'cache remove', path: string): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof TabSettings>(behavior: 'setting', name: K, value?: undefined): TabSettings[K];
        <K extends keyof TabSettings>(behavior: 'setting', name: K, value: TabSettings[K]): JQuery;
        (behavior: 'setting', value: TabSettings): JQuery;
        (settings?: TabSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/tab.html#/settings}
     */
    interface TabSettings extends ComponentSettings {
        // region Tab Settings

        /**
         * Whether tab should load remote content as same url as history
         *
         * @default false
         */
        auto?: boolean;
        /**
         * When set to siblings will only deactivate elements that are DOM siblings with the activated element.
         * When set to all the component will deactivate all other elements initialized at the same time.
         *
         * @default 'siblings'
         * @since 2.2
         */
        deactivate?: 'siblings' | 'all';
        /**
         * Whether to record history events for tab changes
         *
         * @default false
         */
        history?: boolean;
        /**
         * Do not load content remotely on first tab load. Useful when open tab is rendered on server.
         *
         * @default false
         */
        ignoreFirstLoad?: boolean;
        /**
         * Whether inline scripts in tab HTML should be parsed on tab load.
         * Defaults to once, parsing only on first load.
         * Can also be set to true or false to always parse or never parse inline scripts.
         *
         * @default 'once'
         */
        evaluateScripts?: 'once' | boolean;
        /**
         * Tab should reload content every time it is opened
         */
        alwaysRefresh?: boolean;
        /**
         * Can be set to either response, DOM or html.
         * Using DOM will cache the a clone of the DOM tree, preserving all events as they existed on render.
         * response will cache the original response on load, this way callbacks always receive the same content.
         * Using html will cache the resulting html after all callbacks, making sure any changes to content are preserved.
         *
         * @default 'response'
         */
        cacheType?: 'response' | 'DOM' | 'html';
        /**
         * Tab should cache content after loading locally to avoid server trip on second load
         *
         * @default true
         */
        cache?: boolean;
        /**
         * Settings object for $.api call
         *
         * @default false
         * @see {@link http://semantic-ui.com/behaviors/api.html}
         */
        apiSettings?: ApiSettings;
        /**
         * Can be set to hash or state.
         * Hash will use an in-page link to create history events.
         * State will use DOM History and load pages from server on refresh.
         *
         * @default 'hash'
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history}
         */
        historyType?: 'hash' | 'state';
        /**
         * When using historyType state you must specify the base URL for all internal links.
         *
         * @default false
         */
        path?: false | string;
        /**
         * Tabs are limited to those found inside this context
         *
         * @default false
         */
        context?: false | Selector;
        /**
         * If enabled limits tabs to children of passed context
         *
         * @default false
         */
        childrenOnly?: boolean;
        /**
         * Maximum amount of nested tabs allowed (avoids recursion)
         *
         * @default 25
         */
        maxDepth?: number;
        /**
         * When enabled only calls remote endpoint for tab data on first load and leaves the DOM undisturbed afterwards.
         *
         * @default false
         * @since 2.2.8
         */
        loadOnce?: boolean;

        // endregion

        // region Callbacks

        /**
         * Callback only the first time a tab is loaded
         */
        onFirstLoad?(this: JQuery, tabPath: string, parameterArray: any[], historyEvent: any): void;
        /**
         * Callback every time a tab is loaded
         */
        onLoad?(this: JQuery, tabPath: string, parameterArray: any[], historyEvent: any): void;
        /**
         * Called when a tab begins loading remote content
         */
        onRequest?(this: JQuery, tabPath: string): void;
        /**
         * Called after a tab becomes visible
         */
        onVisible?(this: JQuery, tabPath: string): void;

        // endregion

        // region DOM Settings

        /**
         * Functions used to return content
         */
        templates?: {
            /**
             * returns page title
             */
            determineTitle?(tabArray: any[]): string;
        };
        /**
         * Selectors used by module
         */
        selector?: {
            /**
             * @default '.ui.tab'
             */
            tabs?: string;
            /**
             * @default '.ui:not(.menu)'
             */
            parent?: string;
        };
        /**
         * DOM metadata used by module
         */
        metadata?: {
            /**
             * @default 'tab'
             */
            tab?: string;
            /**
             * @default 'loaded'
             */
            loaded?: string;
            /**
             * @default 'promise'
             */
            promise?: string;
        };
        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'active'
             */
            active?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'You attempted to load content without API module'
             */
            api?: string;
            /**
             * @default 'The method you called is not defined'
             */
            method?: string;
            /**
             * @default 'Activated tab cannot be found for this context.'
             */
            missingTab?: string;
            /**
             * @default 'The tab you specified is missing a content url.'
             */
            noContent?: string;
            /**
             * @default 'History enabled, but no path was specified'
             */
            path?: string;
            /**
             * @default 'Max recursive depth reached'
             */
            recursion?: string;
            /**
             * @default 'The state library has not been initialized'
             */
            state?: string;
        };

        // endregion
    }

    // endregion

    // region Transition

    interface Transition {
        settings: TransitionSettings;

        /**
         * Stop current animation and preserve queue
         */
        (behavior: 'stop'): JQuery;
        /**
         * Stop current animation and queued animations
         */
        (behavior: 'stop all'): JQuery;
        /**
         * Clears all queued animations
         */
        (behavior: 'clear queue'): JQuery;
        /**
         * Stop current animation and show element
         */
        (behavior: 'show'): JQuery;
        /**
         * Stop current animation and hide element
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles between hide and show
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Forces reflow using a more expensive but stable method
         */
        (behavior: 'force repaint'): JQuery;
        /**
         * Triggers reflow on element
         */
        (behavior: 'repaint'): JQuery;
        /**
         * Resets all conditions changes during transition
         */
        (behavior: 'reset'): JQuery;
        /**
         * Enables animation looping
         */
        (behavior: 'looping'): JQuery;
        /**
         * Removes looping state from element
         */
        (behavior: 'remove looping'): JQuery;
        /**
         * Adds disabled state (stops ability to animate)
         */
        (behavior: 'disable'): JQuery;
        /**
         * Removes disabled state
         */
        (behavior: 'enable'): JQuery;
        /**
         * Modifies element animation duration
         */
        (behavior: 'set duration', duration: number): JQuery;
        /**
         * Saves all class names and styles to cache to be retrieved after animation
         */
        (behavior: 'save conditions'): JQuery;
        /**
         * Adds back cached names and styles to element
         */
        (behavior: 'restore conditions'): JQuery;
        /**
         * Returns vendor prefixed animation property for animationname
         */
        (behavior: 'get animation name'): string;
        /**
         * Returns vendor prefixed animation property for animationend
         */
        (behavior: 'get animation event'): string;
        /**
         * Returns whether element is currently visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether transition is currently occurring
         */
        (behavior: 'is animating'): boolean;
        /**
         * Returns whether animation looping is set
         */
        (behavior: 'is looping'): boolean;
        /**
         * Returns whether animations are supported
         */
        (behavior: 'is supported'): boolean;
        (behavior: 'destroy'): JQuery;
        <K extends keyof TransitionSettings>(behavior: 'setting', name: K, value?: undefined): TransitionSettings[K];
        <K extends keyof TransitionSettings>(behavior: 'setting', name: K, value: TransitionSettings[K]): JQuery;
        (behavior: 'setting', value: TransitionSettings): JQuery;
        (transition: string): JQuery;
        (settings?: TransitionSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/transition.html#/settings}
     */
    interface TransitionSettings extends ComponentSettings {
        // region Transition Settings

        /**
         * Named animation event to used. Must be defined in CSS.
         *
         * @default 'fade'
         */
        animation?: string;
        /**
         * Interval in MS between each elements transition
         *
         * @default 0
         */
        interval?: number;
        /**
         * When an interval is specified, sets order of animations. auto reverses only animations that are hiding.
         *
         * @default 'auto'
         */
        reverse?: 'auto' | boolean;
        /**
         * Specify the final display type (block, inline-block etc) so that it doesn't have to be calculated.
         *
         * @default false
         */
        displayType?: false | string;
        /**
         * Duration of the CSS transition animation
         *
         * @default 500
         */
        duration?: number;
        /**
         * If enabled a timeout will be added to ensure animationend callback occurs even if element is hidden
         */
        useFailSafe?: boolean;
        /**
         * If enabled will allow same animation to be queued while it is already occurring
         */
        allowRepeats?: boolean;
        /**
         * Whether to automatically queue animation if another is occurring
         */
        queue?: boolean;

        // endregion

        // region Callbacks

        /**
         * Callback on each transition that changes visibility to shown
         */
        onShow?(this: JQuery): void;
        /**
         * Callback on each transition that changes visibility to hidden
         */
        onHide?(this: JQuery): void;
        /**
         * Callback on animation start, useful for queued animations
         */
        onStart?(this: JQuery): void;
        /**
         * Callback on each transition complete
         */
        onComplete?(this: JQuery): void;

        // endregion

        // region DOM Settings

        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'animating'
             */
            animating?: string;
            /**
             * @default 'disabled'
             */
            disabled?: string;
            /**
             * @default 'hidden'
             */
            hidden?: string;
            /**
             * @default 'in'
             */
            inward?: string;
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'looping'
             */
            looping?: string;
            /**
             * @default 'out'
             */
            outward?: string;
            /**
             * @default 'transition'
             */
            transition?: string;
            /**
             * @default 'visible'
             */
            visible?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'There is no CSS animation matching the one you specified.'
             */
            noAnimation?: string;
            /**
             * @default 'The method you called is not defined'
             */
            method?: string;
        };

        // endregion
    }

    // endregion

    // endregion

    // region Behaviors

    // region API

    interface Api {
        settings: ApiSettings;

        /**
         * Execute query using existing API settings
         */
        (behavior: 'query'): JQuery;
        /**
         * Adds data to existing templated url and returns full url string
         */
        (behavior: 'add url data', url: string, data: any): string;
        /**
         * Gets promise for current API request
         */
        (behavior: 'get request'): JQueryDeferred<any> | false;
        /**
         * Aborts current API request
         */
        (behavior: 'abort'): JQuery;
        /**
         * Removes loading and error state from element
         */
        (behavior: 'reset'): JQuery;
        /**
         * Returns whether last request was cancelled
         */
        (behavior: 'was cancelled'): boolean;
        /**
         * Returns whether last request was failure
         */
        (behavior: 'was failure'): boolean;
        /**
         * Returns whether last request was successful
         */
        (behavior: 'was successful'): boolean;
        /**
         * Returns whether last request was completed
         */
        (behavior: 'was complete'): boolean;
        /**
         * Returns whether element is disabled
         */
        (behavior: 'is disabled'): boolean;
        /**
         * Returns whether element response is mocked
         */
        (behavior: 'is mocked'): boolean;
        /**
         * Returns whether element is loading
         */
        (behavior: 'is loading'): boolean;
        /**
         * Sets loading state to element
         */
        (behavior: 'set loading'): JQuery;
        /**
         * Sets error state to element
         */
        (behavior: 'set error'): JQuery;
        /**
         * Removes loading state to element
         */
        (behavior: 'remove loading'): JQuery;
        /**
         * Removes error state to element
         */
        (behavior: 'remove error'): JQuery;
        /**
         * Gets event that API request will occur on
         */
        (behavior: 'get event'): string;
        /**
         * Returns encodeURIComponent value only if value passed is not already encoded
         */
        (behavior: 'get url encoded value', value: any): string;
        /**
         * Reads a locally cached response for a URL
         */
        (behavior: 'read cached response', url: string): any;
        /**
         * Writes a cached response for a URL
         */
        (behavior: 'write cached response', url: string, response: any): JQuery;
        /**
         * Creates new cache, removing all locally cached URLs
         */
        (behavior: 'create cache'): JQuery;
        /**
         * Removes API settings from the page and all events
         */
        (behavior: 'destroy'): JQuery;
        <K extends keyof ApiSettings>(behavior: 'setting', name: K, value?: undefined): ApiSettings[K];
        <K extends keyof ApiSettings>(behavior: 'setting', name: K, value: ApiSettings[K]): JQuery;
        (behavior: 'setting', value: ApiSettings): JQuery;
        (settings?: ApiSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/behaviors/api.html#/settings}
     */
    interface ApiSettings extends ComponentSettings {
        // region Behavior

        /**
         * When API event should occur
         *
         * @default 'auto'
         */
        on?: string;
        /**
         * Can be set to 'local' to cache successful returned AJAX responses when using a JSON API.
         * This helps avoid server round trips when API endpoints will return the same results when accessed repeatedly.
         * Setting to false, will add cache busting parameters to the URL.
         *
         * @default true
         */
        cache?: 'local' | boolean;
        /**
         * UI state will be applied to this element, defaults to triggering element.
         */
        stateContext?: Selector;
        /**
         * Whether to encode parameters with encodeURIComponent before adding into url string
         *
         * @default true
         */
        encodeParameters?: boolean;
        /**
         * Whether to automatically include default data like {value} and {text}
         *
         * @default true
         */
        defaultData?: boolean;
        /**
         * Whether to serialize closest form and include in request
         *
         * @default false
         */
        serializeForm?: boolean;
        /**
         * How long to wait when a request is made before triggering request, useful for rate limiting oninput
         *
         * @default 0
         */
        throttle?: number;
        /**
         * When set to false will not delay the first request made, when no others are queued
         *
         * @default true
         */
        throttleFirstRequest?: boolean;
        /**
         * Whether an API request can occur while another request is still pending
         *
         * @default false
         */
        interruptRequests?: boolean;
        /**
         * Minimum duration to show loading indication
         *
         * @default 0
         */
        loadingDuration?: number;
        /**
         * The default auto will automatically remove error state after error duration, unless the element is a form
         *
         * @default 'auto'
         */
        hideError?: 'auto' | boolean;
        /**
         * Setting to true, will not remove error.
         * Setting to a duration in milliseconds to show error state after request error.
         *
         * @default 2000
         */
        errorDuration?: true | number;

        // endregion

        // region Request Settings

        /**
         * Named API action for query, originally specified in $.fn.settings.api
         */
        action?: string | false;
        /**
         * Templated URL for query, will override specified action
         */
        url?: string | false;
        /**
         * Variables to use for replacement
         */
        urlData?: any | false;
        /**
         * Can be set to a Javascript object which will be returned automatically instead of requesting JSON from server
         */
        response?: any | false;
        /**
         * When specified, this function can be used to retrieve content from a server and return it asynchronously instead of a standard AJAX call.
         * The callback function should return the server response.
         *
         * @default false
         */
        responseAsync?: ((settings: ApiSettings, callback: (response: any) => void) => void) | false;
        /**
         * @see response
         */
        mockResponse?: any | false;
        /**
         * @see responseAsync
         */
        mockResponseAsync?: ((settings: ApiSettings, callback: (response: any) => void) => void) | false;
        /**
         * Method for transmitting request to server
         */
        method?: 'post' | 'get';
        /**
         * Expected data type of response
         */
        dataType?: 'xml' | 'json' | 'jsonp' | 'script' | 'html' | 'text';
        /**
         * POST/GET Data to Send with Request
         */
        data?: any;

        // endregion

        // region Callbacks

        /**
         * Allows modifying settings before request, or cancelling request
         */
        beforeSend?(settings: ApiSettings): any;
        /**
         * Allows modifying XHR object for request
         */
        beforeXHR?(xhrObject: JQueryXHR): any;
        /**
         * Callback that occurs when request is made. Receives both the API success promise and the XHR request promise.
         */
        onRequest?(promise: JQueryDeferred<any>, xhr: JQueryXHR): void;
        /**
         * Allows modifying the server's response before parsed by other callbacks to determine API event success
         */
        onResponse?(response: any): void;
        /**
         * Determines whether completed JSON response should be treated as successful
         *
         * @see {@link http://semantic-ui.com/behaviors/api.html#determining-json-success}
         */
        successTest?(response: any): boolean;
        /**
         * Callback after successful response, JSON response must pass successTest
         */
        onSuccess?(response: any, element: JQuery, xhr: JQueryXHR): void;
        /**
         * Callback on request complete regardless of conditions
         */
        onComplete?(response: any, element: JQuery, xhr: JQueryXHR): void;
        /**
         * Callback on failed response, or JSON response that fails successTest
         */
        onFailure?(response: any, element: JQuery): void;
        /**
         * Callback on server error from returned status code, or XHR failure.
         */
        onError?(errorMessage: string, element: JQuery, xhr: JQueryXHR): void;
        /**
         * Callback on abort caused by user clicking a link or manually cancelling request.
         */
        onAbort?(errorMessage: string, element: JQuery, xhr: JQueryXHR): void;

        // endregion

        // region DOM Settings

        /**
         * Regular expressions used for template matching
         */
        regExp?: {
            /**
             * @default /\{\$*[A-z0-9]+\}/g
             */
            required?: RegExp;
            /**
             * @default /\{\/\$*[A-z0-9]+\}/g
             */
            optional?: RegExp;
        };
        /**
         * Selectors used to find parts of a module
         */
        selector?: {
            /**
             * @default '.disabled'
             */
            disabled?: string;
            /**
             * @default 'form'
             */
            form?: string;
        };
        /**
         * Class names used to determine element state
         */
        className?: {
            /**
             * @default 'loading'
             */
            loading?: string;
            /**
             * @default 'error'
             */
            error?: string;
        };
        /**
         * Metadata used to store XHR and response promise
         */
        metadata?: {
            /**
             * @default 'action'
             */
            action?: string;
            /**
             * @default 'url'
             */
            url?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The before send function has aborted the request'
             */
            beforeSend?: string;
            /**
             * @default 'There was an error with your request'
             */
            error?: string;
            /**
             * @default 'API Request Aborted. Exit conditions met'
             */
            exitConditions?: string;
            /**
             * @default 'JSON could not be parsed during error handling'
             */
            JSONParse?: string;
            /**
             * @default 'You are using legacy API success callback names'
             */
            legacyParameters?: string;
            /**
             * @default 'API action used but no url was defined'
             */
            missingAction?: string;
            /**
             * @default 'Required dependency jquery-serialize-object missing, using basic serialize'
             */
            missingSerialize?: string;
            /**
             * @default 'No URL specified for API event'
             */
            missingURL?: string;
            /**
             * @default 'The beforeSend callback must return a settings object, beforeSend ignored.'
             */
            noReturnedValue?: string;
            /**
             * @default 'There was an error parsing your request'
             */
            parseError?: string;
            /**
             * @default 'Missing a required URL parameter: '
             */
            requiredParameter?: string;
            /**
             * @default 'Server gave an error: '
             */
            statusMessage?: string;
            /**
             * @default 'Your request timed out'
             */
            timeout?: string;
        };

        // endregion
    }

    // endregion

    // region Form Validation

    interface Form {
        settings: FormSettings;

        /**
         * Submits selected form
         */
        (behavior: 'submit'): JQuery;
        /**
         * Returns true/false whether a form passes its validation rules
         */
        (behavior: 'is valid'): boolean;
        /**
         * Validates form and calls onSuccess or onFailure
         */
        (behavior: 'validate form'): JQuery;
        /**
         * gets browser property change event
         */
        (behavior: 'get change event'): string;
        /**
         * Returns element with matching name, id, or data-validate metadata to ID
         */
        (behavior: 'get field', id: string): JQuery;
        /**
         * Returns value of element with id
         */
        (behavior: 'get value', id: string): any;
        /**
         * Returns object of element values that match array of ids. If no IDS are passed will return all fields
         */
        (behavior: 'get values', ids?: string[]): any;
        /**
         * Sets value of element with id
         */
        (behavior: 'set value', id: string): JQuery;
        /**
         * Sets key/value pairs from passed values object to matching ids
         */
        (behavior: 'set values', values: any): JQuery;
        /**
         * Returns validation rules for a given jQuery-referenced input field
         */
        (behavior: 'get validation', element: JQuery): any;
        /**
         * Returns whether a field exists
         */
        (behavior: 'has field', identifier: string): boolean;
        /**
         * Adds errors to form, given an array errors
         */
        (behavior: 'add errors', errors: string[]): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof FormSettings>(behavior: 'setting', name: K, value?: undefined): FormSettings[K];
        <K extends keyof FormSettings>(behavior: 'setting', name: K, value: FormSettings[K]): JQuery;
        (behavior: 'setting', value: FormSettings): JQuery;
        (settings?: FormSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/behaviors/form.html#/settings}
     */
    interface FormSettings extends ComponentSettings {
        // region Form Settings

        /**
         * Adds keyboard shortcuts for enter and escape keys to submit form and blur fields respectively
         *
         * @default true
         */
        keyboardShortcuts?: boolean;
        /**
         * Event used to trigger validation. Can be either submit, blur or change.
         *
         * @default 'submit'
         */
        on?: 'submit' | 'blur' | 'change';
        /**
         * If set to true will revalidate fields with errors on input change
         *
         * @default true
         */
        revalidate?: boolean;
        /**
         * Delay from last typed letter to validate a field when using on: change or when revalidating a field.
         *
         * @default true
         */
        delay?: boolean;
        /**
         * Adds inline error on field validation error
         *
         * @default false
         */
        inline?: boolean;
        /**
         * Named transition to use when animating validation errors. Fade and slide down are available without including ui transitions
         *
         * @default 'scale'
         * @see {@link http://semantic-ui.com/modules/transition.html}
         */
        transition?: string;
        /**
         * Animation speed for inline prompt
         *
         * @default 150
         */
        duration?: number;
        fields?: {
            [name: string]: string | string[] | Field;
        };

        // endregion

        // region Form Prompts

        text?: {
            /**
             * @default 'Please enter a valid value'
             */
            unspecifiedRule?: string;
            /**
             * @default 'This field'
             */
            unspecifiedField?: string;
        };
        prompt?: {
            /**
             * @default '{name} must have a value'
             */
            empty?: string;
            /**
             * @default '{name} must be checked'
             */
            checked?: string;
            /**
             * @default '{name} must be a valid e-mail'
             */
            email?: string;
            /**
             * @default '{name} must be a valid url'
             */
            url?: string;
            /**
             * @default '{name} is not formatted correctly'
             */
            regExp?: string;
            /**
             * @default '{name} must be an integer'
             */
            integer?: string;
            /**
             * @default '{name} must be a decimal number'
             */
            decimal?: string;
            /**
             * @default '{name} must be set to a number'
             */
            number?: string;
            /**
             * @default '{name} must be \'{ruleValue}\''
             */
            is?: string;
            /**
             * @default '{name} must be exactly \'{ruleValue}\''
             */
            isExactly?: string;
            /**
             * @default '{name} cannot be set to \'{ruleValue}\''
             */
            not?: string;
            /**
             * @default '{name} cannot be set to exactly \'{ruleValue}\''
             */
            notExactly?: string;
            /**
             * @default '{name} cannot contain \'{ruleValue}\''
             */
            contain?: string;
            /**
             * @default '{name} cannot contain exactly \'{ruleValue}\''
             */
            containExactly?: string;
            /**
             * @default '{name} must contain  \'{ruleValue}\''
             */
            doesntContain?: string;
            /**
             * @default '{name} must contain exactly \'{ruleValue}\''
             */
            doesntContainExactly?: string;
            /**
             * @default '{name} must be at least {ruleValue} characters'
             */
            minLength?: string;
            /**
             * @default '{name} must be at least {ruleValue} characters'
             */
            length?: string;
            /**
             * @default '{name} must be exactly {ruleValue} characters'
             */
            exactLength?: string;
            /**
             * @default '{name} cannot be longer than {ruleValue} characters'
             */
            maxLength?: string;
            /**
             * @default '{name} must match {ruleValue} field'
             */
            match?: string;
            /**
             * @default '{name} must have a different value than {ruleValue} field'
             */
            different?: string;
            /**
             * @default '{name} must be a valid credit card number'
             */
            creditCard?: string;
            /**
             * @default '{name} must have at least {ruleValue} choices'
             */
            minCount?: string;
            /**
             * @default '{name} must have exactly {ruleValue} choices'
             */
            exactCount?: string;
            /**
             * @default '{name} must have {ruleValue} or less choices'
             */
            maxCount?: string;
        };

        // endregion

        // region Callbacks

        /**
         * Callback on each valid field
         */
        onValid?(this: JQuery): void;
        /**
         * Callback on each invalid field
         */
        onInvalid?(this: JQuery): void;
        /**
         * Callback if a form is all valid
         */
        onSuccess?(this: JQuery, event: JQueryEventObject, fields: any): void;
        /**
         * Callback if any form field is invalid
         */
        onFailure?(this: JQuery, formErrors: string[], fields: any): void;

        // endregion

        // region Templates

        templates?: {
            error?(errors: string[]): JQuery;
            prompt?(errors: string[]): JQuery;
        };

        // endregion

        // region Rules

        rules?: {
            [name: string]: (...args: any[]) => boolean;
        };

        // endregion

        // region DOM Settings

        /**
         * Selectors used to match functionality to DOM
         */
        selector?: {
            /**
             * @default '.error.message'
             */
            message?: string;
            /**
             * @default 'input, textarea, select'
             */
            field?: string;
            /**
             * @default '.field'
             */
            group?: string;
            /**
             * @default 'input'
             */
            input?: string;
            /**
             * @default '.prompt'
             */
            prompt?: string;
            /**
             * @default '.submit'
             */
            submit?: string;
        };
        /**
         * HTML5 metadata attributes
         */
        metadata?: {
            /**
             * @default 'validate'
             */
            validate?: string;
        };
        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'active'
             */
            active?: string;
            /**
             * @default 'default'
             */
            placeholder?: string;
            /**
             * @default 'disabled'
             */
            disabled?: string;
            /**
             * @default 'visible'
             */
            visible?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    interface Field {
        identifier: string;
        rules: Rule[];
    }

    interface Rule {
        type: string;
        prompt: string;
    }

    // endregion

    // region Visibility

    interface Visibility {
        settings: VisibilitySettings;

        /**
         * Disable callbacks temporarily. This is useful if you need to adjust scroll position and do not want to trigger callbacks during the position change.
         */
        (behavior: 'disable callbacks'): JQuery;
        /**
         * Re-enable callbacks
         */
        (behavior: 'enable callbacks'): JQuery;
        /**
         * Returns whether element is on screen
         */
        (behavior: 'is on screen'): boolean;
        /**
         * Returns whether element is off screen
         */
        (behavior: 'is off screen'): boolean;
        /**
         * Returns number of pixels passed in current element from top of element
         */
        (behavior: 'get pixels passed'): number;
        /**
         * Returns element calculations as object
         */
        (behavior: 'get element calculations'): ElementCalculations;
        /**
         * Returns screen calculations as object
         */
        (behavior: 'get screen calculations'): ScreenCalculations;
        /**
         * Returns screen size as object
         */
        (behavior: 'get screen size'): ScreenSize;
        (behavior: 'destroy'): JQuery;
        <K extends keyof VisibilitySettings>(behavior: 'setting', name: K, value?: undefined): VisibilitySettings[K];
        <K extends keyof VisibilitySettings>(behavior: 'setting', name: K, value: VisibilitySettings[K]): JQuery;
        (behavior: 'setting', value: VisibilitySettings): JQuery;
        (settings?: VisibilitySettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/behaviors/visibility.html#/settings}
     */
    interface VisibilitySettings extends ComponentSettings {
        // region Functionality

        /**
         * When set to false a callback will occur each time an element passes the threshold for a condition.
         *
         * @default true
         */
        once?: boolean;
        /**
         * When set to true a callback will occur anytime an element passes a condition not just immediately after the threshold is met.
         *
         * @default false
         */
        continuous?: boolean;
        /**
         * Set to image to load images when on screen. Set to fixed to add class name fixed when passed.
         *
         * @default false
         */
        type?: false | 'image' | 'fixed';
        /**
         * Whether visibility conditions should be checked immediately on init
         *
         * @default true
         */
        initialCheck?: boolean;
        /**
         * The scroll context visibility should use.
         *
         * @default 'window'
         */
        context?: Selector;
        /**
         * Whether visibility conditions should be checked on window load. This ensures that after images load content positions will be updated correctly.
         *
         * @default true
         */
        refreshOnLoad?: boolean;
        /**
         * Whether visibility conditions should be checked on window resize. Useful when content resizes causes continuous changes in position
         *
         * @default true
         */
        refreshOnResize?: boolean;
        /**
         * Whether visibility conditions should be checked on calls to refresh.
         * These calls can be triggered from either resize, load or manually calling $('.foo').visibility('refresh')
         *
         * @default true
         */
        checkOnRefresh?: boolean;
        /**
         * Specify a z-index when using type: 'fixed'.
         *
         * @default 1
         * @since 2.2
         */
        zIndex?: number;
        /**
         * Value that context scrollTop should be adjusted in pixels. Useful for making content appear below content fixed to the page.
         *
         * @default 0
         */
        offset?: number;
        /**
         * Whether element calculations should include its margin
         *
         * @default false
         */
        includeMargin?: boolean;
        /**
         * When set to an integer, scroll position will be debounced using this ms value. false will debounce with requestAnimationFrame.
         *
         * @default false
         */
        throttle?: false | number;
        /**
         * Whether to automatically refresh content when changes are made to the element's DOM subtree
         *
         * @default true
         */
        observeChanges?: boolean;
        /**
         * When using type: image allows you to specify transition when showing a loaded image
         *
         * @default false
         */
        transition?: false | string;
        /**
         * When using type: image allows you to specify transition duration
         *
         * @default 1000
         */
        duration?: number;

        // endregion

        // region Visibility Callbacks

        /**
         * Element's top edge has passed bottom of screen
         */
        onTopVisible?(this: JQuery): void;
        /**
         * Element's top edge has passed top of the screen
         */
        onTopPassed?(this: JQuery): void;
        /**
         * Element's bottom edge has passed bottom of screen
         */
        onBottomVisible?(this: JQuery): void;
        /**
         * Any part of an element is visible on screen
         */
        onPassing?(this: JQuery): void;
        /**
         * Element's bottom edge has passed top of screen
         */
        onBottomPassed?(this: JQuery): void;
        /**
         * Element's top edge has not passed bottom of screen
         */
        onTopVisibleReverse?(this: JQuery): void;
        /**
         * Element's top edge has not passed top of the screen
         */
        onTopPassedReverse?(this: JQuery): void;
        /**
         * Element's bottom edge has not passed bottom of screen
         */
        onBottomVisibleReverse?(this: JQuery): void;
        /**
         * Element's top has not passed top of screen but bottom has
         */
        onPassingReverse?(this: JQuery): void;
        /**
         * Element's bottom edge has not passed top of screen
         */
        onBottomPassedReverse?(this: JQuery): void;
        onOnScreen?(this: JQuery): void;
        onOffScreen?(this: JQuery): void;

        // endregion

        // region Image Callbacks

        /**
         * Occurs after an image has completed loading
         *
         * @since 2.2
         */
        onLoad?(this: JQuery): void;
        /**
         * Occurs after all img initialized at the same time have loaded.
         *
         * @since 2.2
         */
        onAllLoaded?(this: JQuery): void;

        // endregion

        // region Fixed Callbacks

        /**
         * Occurs after element has been assigned position fixed
         *
         * @since 2.2
         */
        onFixed?(this: JQuery): void;
        /**
         * Occurs after element has been removed from fixed position
         *
         * @since 2.2
         */
        onUnfixed?(this: JQuery): void;

        // endregion

        // region Utility Callbacks

        /**
         * Occurs each time an elements calculations are updated
         */
        onUpdate?(this: JQuery, calculations: ElementCalculations): void;
        /**
         * Occurs whenever element's visibility is refreshed
         */
        onRefresh?(this: JQuery): void;

        // endregion

        // region DOM Settings

        /**
         * Class names used to attach style to state
         */
        className?: {
            /**
             * @default 'fixed'
             */
            fixed?: string;
        };

        // endregion

        // region Debug Settings

        error?: {
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        };

        // endregion
    }

    interface ElementPosition {
        fits: boolean;
        offset: JQueryCoordinates;
        width: number;
        height: number;
    }

    interface ElementCalculations extends ElementPosition {
        margin?: {
            top: number;
            bottom: number;
        };
        top: number;
        bottom: number;

        topVisible: boolean;
        topPassed: boolean;
        bottomVisible: boolean;
        bottomPassed: boolean;
        pixelsPassed: number;
        percentagePassed: number;

        onScreen: boolean;
        passing: boolean;
        offScreen: boolean;
    }

    interface ScreenCalculations {
        top: number;
        bottom: number;
    }

    interface ScreenSize {
        height: number;
    }

    // endregion

    // endregion
}
