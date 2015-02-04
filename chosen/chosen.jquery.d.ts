// Type definitions for Chosen.JQuery 0.9
// Project: http://harvesthq.github.com/chosen/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ChosenOptions {
    allow_single_deselect?: boolean;
    disable_search_threshold?: number;
    disable_search?: boolean;
    search_contains?: boolean;
    single_backstroke_delete?: boolean;
    max_selected_options?: number;
    placeholder_text_multiple?: string;
    placeholder_text?: string;
    placeholder_text_single?: string;
    no_results_text?: string;
}

interface JQuery {
    chosen(): JQuery;
    chosen(options: ChosenOptions): JQuery;
}