// Type definitions for jQuery Tags Manager
// Project: http://welldonethings.com/tags/manager
// Definitions by: https://github.com/vbortone
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
interface TagsManagerOptions {
	prefilled?: any;
	CapitalizeFirstLetter?: bool;
	preventSubmitOnEnter?: bool;
	typeahead?: bool;
	typeaheadAjaxSource?: string;
	typeaheadSource?: any;
	typeaheadAjaxPolling?: bool;
	AjaxPush?: string; //url
	delimeters?: number[];
	backspace?: number[];
	blinkBGColor_1?: string;
	blinkBGColor_2?: string;
	hiddenTagListName?: string;
	maxTags?: number;
	deleteTagsOnBackspace?: bool;
	tagsContainer?: HTMLElement;
	tagCloseIcon?: string;
	tagClass?: string;
}

interface JQuery {
	tagsManager(options: TagsManagerOptions): JQuery;
	tagsManager(command: string, tagToManipulate?: string): JQuery;
}