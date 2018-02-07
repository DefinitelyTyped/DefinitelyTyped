// Type definitions for Chosen.JQuery 1.6.1
// Project: http://harvesthq.github.com/chosen/
// Definitions by: Boris Yankov <https://github.com/borisyankov>, denis <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace Chosen {
    type OnEvent = "chosen:ready" | "chosen:maxselected" | "chosen:showing_dropdown" | "chosen:hiding_dropdown" | "chosen:no_results";
    type TriggerEvent = "chosen:updated" | "chosen:activate" | "chosen:open" | "chosen:close";

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
    chosen(options: Chosen.Options | "destroy"): JQuery;

    /**Chosen triggers the standard DOM event whenever a selection is made (it also sends a selected or deselected parameter that tells you which option was changed). */
    on(events: "change", handler: (eventObject: JQueryEventObject, args: Chosen.SelectedData) => any): JQuery;

    on(events: Chosen.OnEvent, handler: (eventObject: JQueryEventObject) => any): JQuery;

    trigger(eventType: Chosen.TriggerEvent): JQuery;
}
