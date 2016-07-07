// Type definitions for Chosen.JQuery 1.6.1
// Project: http://harvesthq.github.com/chosen/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare namespace Chosen {
    interface Options {
        /**When set to true on a single select, Chosen adds a UI element which selects the first element (if it is blank).
         * @default: false
		 */
        allow_single_deselect?: boolean;
        /**By default Chosen's search is case-insensitive. Setting this option to true makes the search case-sensitive.
         * @default: false
         */
        case_sensitive_search?: boolean;
        /**When set to true, Chosen will not display the search field (single selects only).
         * @default: false
         */
        disable_search?: boolean;
        /**Hide the search input on single selects if there are n or fewer options.
         * @default: 0
         */
        disable_search_threshold?: number;
        /**By default, searching will match on any word within an option tag. Set this option to false if you want to only match on the entire text of an option tag.
         * @default: true
         */
        enable_split_word_search?: boolean;
        /**When set to true, Chosen will grab any classes on the original select field and add them to Chosen’s container div.
         * @default: false
         */
        inherit_select_classes?: boolean;
        /**Limits how many options the user can select. When the limit is reached, the chosen:maxselected event is triggered.
         * @default: Infinity
         */
        max_selected_options?: number;
        /**The text to be displayed when no matching results are found. The current search is shown at the end of the text (e.g., No results match "Bad Search").
         * @default: "No results match"
         */
        no_results_text?: string;
        /**The text to be displayed as a placeholder when no options are selected for a multiple select.
         * @default: "Select Some Options"
         */
        placeholder_text_multiple?: string;
        /**The text to be displayed as a placeholder when no options are selected for a single select.
         * @default: "Select an Option"
         */
        placeholder_text_single?: string;
        /**By default, Chosen’s search matches starting at the beginning of a word. Setting this option to true allows matches starting from anywhere within a word. This is especially useful for options that include a lot of special characters or phrases in ()s and []s.
         * @default: false
         */
        search_contains?: boolean;
        /**By default, pressing delete/backspace on multiple selects will remove a selected choice. When false, pressing delete/backspace will highlight the last choice, and a second press deselects it.
         * @default: true
         */
        single_backstroke_delete?: boolean;
        /**The width of the Chosen select box. By default, Chosen attempts to match the width of the select box you are replacing. If your select is hidden when Chosen is instantiated, you must specify a width or the select will show up with a width of 0. */
        width?: string;
        /**By default, Chosen includes disabled options in search results with a special styling. Setting this option to false will hide disabled results and exclude them from searches.
         * @default: true
         */
        display_disabled_options?: boolean;
        /**By default, Chosen includes selected options in search results with a special styling. Setting this option to false will hide selected results and exclude them from searches.
         * Note: this is for multiple selects only. In single selects, the selected result will always be displayed.
         * @default: true
         */
        display_selected_options?: boolean;
        /**By default, Chosen only shows the text of a selected option. Setting this option to true will show the text and group (if any) of the selected option.
         * @default: false
         */
        include_group_label_in_selected?: boolean;
        /**Only show the first (n) matching options in the results. This can be used to increase performance for selects with very many options.
         * @default: Infinity
         */
        max_shown_results?: number;
	}

    interface SelectedData {
        selected: string;
        deselected: string;
    }
}

interface JQuery {
    chosen(): JQuery;
    chosen(options: Chosen.Options): JQuery;
    /**To destroy Chosen and revert back to the native select. */
    chosen(options: "destroy"): JQuery;

    /**Chosen triggers the standard DOM event whenever a selection is made (it also sends a selected or deselected parameter that tells you which option was changed). */
    on(events: "change", handler: (eventObject: JQueryEventObject, args: Chosen.SelectedData) => any): JQuery;
    /**Triggered after Chosen has been fully instantiated. */
    on(events: "chosen:ready", handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**Triggered if max_selected_options is set and that total is broken. */
    on(events: "chosen:maxselected", handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**Triggered when Chosen’s dropdown is opened. */
    on(events: "chosen:showing_dropdown", handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**Triggered when Chosen’s dropdown is closed. */
    on(events: "chosen:hiding_dropdown", handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**Triggered when a search returns no matching results. */
    on(events: "chosen:no_results", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**This event should be triggered whenever Chosen’s underlying select element changes (such as a change in selected options). */
    trigger(eventType: "chosen:updated"): JQuery;
    /**This is the equivalant of focusing a standard HTML select field. When activated, Chosen will capure keypress events as if you had clicked the field directly. */
    trigger(eventType: "chosen:activate"): JQuery;
    /**This event activates Chosen and also displays the search results. */
    trigger(eventType: "chosen:open"): JQuery;
    /**This event deactivates Chosen and hides the search results. */
    trigger(eventType: "chosen:close"): JQuery;
}
