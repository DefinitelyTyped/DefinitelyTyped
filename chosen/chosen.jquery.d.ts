// Type definitions for Chosen.JQuery 1.4.2
// Project: http://harvesthq.github.com/chosen/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ChosenOptions {
    allow_single_deselect?: boolean;
    disable_search?: boolean;
    disable_search_threshold?: number;
    enable_split_word_search?: boolean;
    inherit_select_classes?: boolean;
    max_selected_options?: number;
    no_results_text?: string;
    placeholder_text_multiple?: string;
    placeholder_text_single?: string;
    search_contains?: boolean;
    single_backstroke_delete?: boolean;
    width?: number|string;
    display_disabled_options?: boolean;
    display_selected_options?: boolean;
    include_group_label_in_selected?: boolean;
}

interface JQuery {
    chosen(): JQuery;
    chosen(options: ChosenOptions): JQuery;
}
