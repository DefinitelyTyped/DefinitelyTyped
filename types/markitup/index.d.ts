// Type definitions for markitup 1.x
// Project: https://github.com/markitup/1.x
// Definitions by: drillbits <https://github.com/drillbits>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace MarkItUp {
    interface Options {
        /**
         * Apply a specific className to the wrapping Div. Useful to prevent CSS conflicts between instances.
         */
        nameSpace?: string;

        /**
         * Enable/Disable the handle to resize the editor.
         */
        resizeHandle?: boolean;

        /**
         * Display the preview in a popup window with comma-separated list of specs. If empty or false, the preview will be displayed in the built-in iFrame preview.
         */
        previewInWindow?: string;

        /**
         * AutoRefresh the preview iFrame or window when the editor is used.
         */
        previewAutoRefresh?: boolean;

        /**
         * You can set the path of your own parser to preview markup languages other than html. If this property is set, the built-in preview will be overridden by your own preview script.
         * Use ~/ for markItUp! root.
         */
        previewParserPath?: string;

        /**
         * Name of the var posted with the editor content to the parser defined above.
         *
         * default: 'data'
         */
        previewParserVar?: string;

        /**
         * Path to the Html preview template.
         * Use ~/ for markItUp! root.
         *
         * default: '~/templates/preview.html'
         */
        previewTemplatePath?: string;

        /**
         * Parse the content with the javascript parser of your choice before passing it to the preview.
         *
         * default: false
         */
        previewParser?: boolean;

        /**
         * Position of the Built-in preview before or after the main textarea.
         * 'before'|'after'
         *
         * default: 'after'
         */
        previewPosition?: string;

        /**
         * Define what to do when Enter key is pressed.
         */
        onEnter?: MarkupSet;

        /**
         * Define what to do when Ctrl+Enter keys are pressed.
         */
        onCtrlEnter?: MarkupSet;

        /**
         * Define what to do when Shift+Enter keys are pressed.
         */
        onShiftEnter?: MarkupSet;

        /**
         * Define what to do when Tab key is pressed. Warning, this key is also used to jump at the end of a new inserted markup.
         */
        onTab?: MarkupSet;

        /**
         * Function to be called before any markup insertion.
         */
        beforeInsert?: (h: MarkupSet) => string;

        /**
         * Function to be called after any markup insertion.
         */
        afterInsert?: (h: MarkupSet) => string;

        /**
         * Note that most of the settings below are used by the engine for all insertion calls ($.markItUp( {} ), onEnter, onShiftEnter, onCtrlEnter, onTab) except exclusive button properties marked by
         */
        markupSet?: MarkupSet[];
    }

    interface MarkupSet {
        /**
         * Button name
         */
        name?: string;

        /**
         * Classname to be applied to this very button.
         */
        className?: string;

        /**
         * Shortcut key to be applied to the button. Ctrl+key trigger the action of a button.
         */
        key?: string;

        /**
         * Markup to be added before selection. Accepts functions.
         */
        openWith?: string|((h: MarkupSet) => string);

        /**
         * Markup to be added after selection. Accepts functions.
         */
        closeWith?: string|((h: MarkupSet) => string);

        /**
         * Text to be added in place of the cursor or selection. Accepts functions.
         */
        replaceWith?: string|((h: MarkupSet) => string);

        /**
         * Text to be added before a whole block. Accepts functions.
         */
        openBlockWith?: string|((h: MarkupSet) => string);

        /**
         * Text to be added after a whole block. Accepts functions.
         */
        closeBlockWith?: string|((h: MarkupSet) => string);

        /**
         * Set whether the tags has to be inserted at each line or on the whole selected block.
         */
        multiline?: boolean;

        /**
         * Placeholder text to be inserted if no text is selected by the user.
         */
        placeHolder?: string|((h: MarkupSet) => string);

        /**
         * Function to be called just before a markup insertion. If a global beforeInsert callback is already defined this function is fired just after.
         */
        beforeInsert?: (h: MarkupSet) => string;

        /**
         * Function to be called just after a markup insertion. If a global afterInsert callback is already defined this function is fired before.
         */
        afterInsert?: (h: MarkupSet) => string;

        /**
         * Function to be called before a multiline markup insertion.
         */
        beforeMultiInsert?: (h: MarkupSet) => string;

        /**
         * Function to be called after a multiline markup insertion.
         */
        afterMultiInsert?: (h: MarkupSet) => string;

        /**
         * Open a dropdown menu with another button set.
         */
        dropMenu?: MarkupSet[];

        /**
         * Keep (true) or not (false) the default behaviour of the key.
         */
        keepDefault?: boolean;

        /**
         * Returns the selection.
         */
        selection?: string;

        /**
         * Returns the textarea object.
         */
        textarea?: HTMLElement;

        /**
         * Returns the position of the selection.
         */
        caretPosition?: number;

        /**
         * Returns the position of the scrollbar.
         */
        scrollPosition?: number;

        /**
         * If a multi-line edition is trigged (Ctrl + Shift + click). This property return the number of the line being processed.
         */
        line?: number;

        /**
         * Returns true if the Control key is pressed when the callback is fired.
         */
        ctrlKey?: boolean;

        /**
         * Returns true if the Shift key is pressed when the callback is fired.
         */
        shiftKey?: boolean;

        /**
         * Returns true if the Alt key is pressed when the callback is fired.
         */
        altKey?: boolean;

        /** Not documented on the markitup site, but present in the tests */
        separator?: string;
    }

    interface Static {
        (): JQuery;
        (settings: Options): JQuery;
    }
}

interface JQueryStatic {
    markItUp: MarkItUp.Static;
}

interface JQuery {
    markItUp(settings?: MarkItUp.Options): JQuery;
    markItUp(settings?: MarkItUp.Options, extraSettings?: MarkItUp.Options): JQuery;
    markItUpRemove(): JQuery;
}
