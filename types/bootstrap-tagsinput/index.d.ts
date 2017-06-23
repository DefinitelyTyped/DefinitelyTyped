// Type definitions for bootstrap-tagsinput 0.7
// Project: http://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples/
// Definitions by: My Self <https://github.com/abedi-ir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

type TagEvent = (event: any) => void;
interface TagsEvents {
	// During initialization, pre-defined tags being added will cause this event to be triggered.
	itemAddedOnInit?: TagEvent;
	// Triggered just before an item gets added.
	beforeItemAdd?: TagEvent;
	// Triggered just after an item got added.
	itemAdded?: TagEvent;
	// Triggered just before an item gets removed.
	beforeItemRemove?: TagEvent;
	//  Triggered just after an item got removed.
	itemRemoved?: TagEvent;
}
type TagExists = (item: any, $tag: JQuery) => void;
interface Typeahead {
	// An array (or function returning a promise or array), which will be used as source for a typeahead.
	source?: string[] | ( (grey: any) => string[] );
	// Boolean value controlling whether form submissions get processed when pressing enter in a field converted to a tagsinput (default: false).
	cancelConfirmKeysOnEmpty?: boolean;
	// Function invoked when trying to add an item which allready exists. By default, the existing tag hides and fades in.
	onTagExists?: TagExists;
}
interface TagsOptions extends TagsEvents {
	// Classname for the tags, or a function returning a classname.
	tagClass?: string | ( (item: JQuery) => string );
	// When adding objects as tags, itemValue must be set to the name of the property containing the item's value, or a function returning an item's value.
	itemValue?: string | ( (item: JQuery) => string );
	// When adding objects as tags, you can set itemText to the name of the property of item to use for a its tag's text. You may also provide a function
	// which returns an item's value. When this options is not set, the value of itemValue will be used.
	itemText?: string | ( (item: JQuery) => string );
	// Array of keycodes which will add a tag when typing in the input. (default: [13, 188], which are ENTER and comma).
	confirmKeys?: number[];
	// When set, no more than the given number of tags are allowed to add (default: undefined). When maxTags is reached, a class
	// max' is placed on the tagsinput element.
	maxTags?: number;
	// Defines the maximum length of a single tag. (default: undefined).
	maxChars?: number;
	// When true, automatically removes all whitespace around tags. (default: false).
	trimValue?: boolean;
	// When true, the same tag can be added multiple times. (default: false).
	allowDuplicates?: boolean;
	// When the input container has focus, the class specified by this config option will be applied to the container.
	focusClass?: string;
	// Allow creating tags which are not returned by typeahead's source (default: true).
	// This is only possible when using string as tags. When itemValue option is set, this option will be ignored.
	freeInput?: boolean;
	// Object containing typeahead specific options.
	typeahead?: Typeahead;
}
interface JQuery {
	tagsinput(options?: TagsOptions): JQuery;
	// Adds or remove a tag
	tagsinput(methodName: "add" | "remove", values: any, options?: TagsOptions): JQuery;
	// removeAll : Removes all tags.
	// focus : Sets focus in the tagsinput.
	// input : Returns the tagsinput's internal <input />, which is used for adding tags. You could use this to add your own typeahead behaviour for example.
	// refresh : Refreshes the tags input UI. This might be usefull when you're adding objects as tags. When an object's text changes, you'll have to refresh to update the matching tag's text.
	// destroy : Removes tagsinput behaviour.
	tagsinput(methodName: "removeAll" | "focus" | "input" | "refresh" | "destroy"): JQuery;
}

declare module "bootstrap-tagsinput" {}
