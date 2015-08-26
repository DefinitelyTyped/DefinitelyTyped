// Type definitions for tag-it 2.0.110.4
// Project: http://aehlke.github.io/tag-it/
// Definitions by: Brad Ziolko <https://github.com/bradziolko>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module tagit {
    export interface Options {
        /**
         * Set to allow/disallow duplicate tags.  Defaults to false.
        */
        allowDuplicates?: boolean;
        /**
         * Set to allow/disallow case sensitivity.  Defaults to true.
        */
        caseSensitive?: boolean;
        /**
         * Each tag's hidden input field will have this name. Defaults to 'tags'.
        */
        fieldName?: string;
        /**
         * Sets a placeholder attribute on the input that gets created for tag-it user input.  Defaults to null.
        */
        placeholderText?: string;
        /**
         * Enables/disables the ability to edit tags.  Defaults to false.
        */
        readOnly?: boolean;
        /**
         * When enabled, the user has to press the backspace key twice to remove the last tag.  After the first keypress the last tag receives a remove css class which can be used to visually highlight the tag.  Defaults to false.
        */
        removeConfirmation?: boolean;
        /**
         * Limits the total number of tags that can be entered at once.  Note that if you use this option with preloaded data, it may truncate the number of preloaded tags.  Set to null for unlimited tags.  Defaults to null.
        */
        tagLimit?: number;
        /**
         * Used as source for the autocompletion, unless autocomplete.source is overridden.  If you define your own autocomplete.source, this option is unused (unless you choose to reference it yourself from your custom autocomplete.source).  Defaults to an empty array[].
        */
        availableTags?: string[];
        /**
         * Allows overriding the source and select options that are set by default, as well as adding any other options you want to pass to the jQuery UI Autocomplete widget, such as minLength or delay.  The autocomplete.source should be overridden if you want to use custom autocompletion sources, like an Ajax / XHR response.  The default autocomplete.source function filters the strings in availableTags and subtracts the already assigned tags.  It also positions autocomplete underneath tag input.  See http://jqueryui.com/demos/autocomplete/ for the full list of options.
        */
        autocomplete?: any;
        /**
         * Shows autocomplete when the tag input first receives focus, before the user even types anything.  If enabled, this will also make autocomplete.minLength default to 0 unless you override that, so that autocomplete can show up with a blank search.  Defaults to false.
        */
        showAutocompleteOnFocus?: boolean;
        /**
         * When enabled the user input is not required to wrap multi-word tags in qutation marks.  For example, the user can enter John Smith instead of "John Smith".  Defaults to false.
        */
        allowSpaces?: boolean;
        /**
         * When enabled, will use a single hidden field for the form rather than one per tag.  It will delimit tags in the field with singleFieldDelimiter.  Defaults to false, unless tag-it was created on an input element, in which case singleField will be overridden as true.
        */
        singleField?: boolean;
        /**
         * Defaults to ",".
        */
        singleFieldDelimiter?: string;
        /**
         * Set this to an input DOM node to use an existing form field.  Any text in it will be erased on init.  But it will be populated with the text of tags as they are created, delimited by singleFieldDelimiter.  If this is not set, we create in input node for it, with the name given in fieldName.  Defaults to null, unless tag-it was created on an input element in which case singleFieldNode will be overridden with that element.
        */
        singleFieldNode?: any;
        /**
         * Determines whether or not to animate tag removals.  Defaults to true.
        */
        animate?: boolean;
        /**
         * Set a tabindex attribute on the input that gets created for tag-it user input.  Defaults to null.
        */
        tabIndex?: any;
        /**
         * Used to add custom behaviour before the tag is added to the DOM.  The function receives a null event, and an object containing the properties tag, tagLabel, and duringInitialization.  duringInitialization is a boolean indicating whether the tag was added during the initial construction of this widget.  You can use this to tell whether the event was initiated by the user or by the widget's initialization.  To cancel a tag from being added, simply return false in your event callback to bail out from adding the tag and stop propagation of the event.
        */
        beforeTagAdded?: any;
        /**
         * Behaves the same as beforeTagAdded except that it fires after the tag has been added to the DOM.
        */
        afterTagAdded?: any;
        /**
         * Can be used to add custom behaviour before the tag is removed from the DOM.  To cancel a tag from being removed, return false in your event callback to bail out from removing the tag and stop propagation of the event.  The function receives a null event and an object with tag and tagLabel properties.
        */
        beforeTagRemoved?: any;
        /**
         * Behaves the same as beforeTagRemoved except that it fires after the tag has been removed from the DOM.
        */
        afterTagRemoved?: any;
        /**
         * Can be used to add custom behaviour whent he tag is clicked.  The function receives the click event and an object containing the tag and tagLabel properties.
        */
        onTagClicked?: any;
        /**
         * Called when attempting to create a tag while the tag limit has already been reached.  Receives a null event and an object with the property duringInitialization.  This can only be called if tagLimit is set.
        */
        onTagLimitExceeded?: any;
    }


}

interface JQuery {
    /**
     * Setup tag-it options.
    */
    tagit(settings?: tagit.Options): void;
    /**
     * Returns an array of the text values of all the tags currently in the widget.
    */
    tagit(assignedTags: string): string[];
    /**
     * Adds new tag to the list.  The additionalClass parameter is an optional way to add classes to the tag element.
    */
    tagit(createTag: string, tagLabel: string, additionalClass?: any): void;
    /**
     * Set a function to be called before tag is created.  Callback receives the value of the tag created.
    */
    tagit(preprocessTag: string, func: any, callback?: any): void;
    /**
     * Finds the tag with the label tagLabel and removes it.  If no such tag is found, it'll throw an exception.
    */
    tagit(removeTagByLabel: string, tagLabel: string, animate?: boolean): void;
    /**
     * Clears the widget of all tags - removes each tag it contains, so the beforeTagRemoved / afterTagREmoved event callbacks will be called for each.
    */
    tagit(removeAll: string): void;
}