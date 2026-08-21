/// <reference types="jquery" />

declare namespace MarkItUp {
    interface Options {
        /**
         * Apply a specific className to the wrapping Div. Useful to prevent CSS conflicts between instances.
         */
        nameSpace?: string | undefined;

        /**
         * Enable/Disable the handle to resize the editor.
         */
        resizeHandle?: boolean | undefined;

        /**
         * Display the preview in a popup window with comma-separated list of specs. If empty or false, the preview will be displayed in the built-in iFrame preview.
         */
        previewInWindow?: string | undefined;

        /**
         * AutoRefresh the preview iFrame or window when the editor is used.
         */
        previewAutoRefresh?: boolean | undefined;

        /**
         * You can set the path of your own parser to preview markup languages other than html. If this property is set, the built-in preview will be overridden by your own preview script.
         * Use ~/ for markItUp! root.
         */
        previewParserPath?: string | undefined;

        /**
         * Name of the var posted with the editor content to the parser defined above.
         *
         * default: 'data'
         */
        previewParserVar?: string | undefined;

        /**
         * Path to the Html preview template.
         * Use ~/ for markItUp! root.
         *
         * default: '~/templates/preview.html'
         */
        previewTemplatePath?: string | undefined;

        /**
         * Parse the content with the javascript parser of your choice before passing it to the preview.
         *
         * default: false
         */
        previewParser?: boolean | undefined;

        /**
         * Position of the Built-in preview before or after the main textarea.
         * 'before'|'after'
         *
         * default: 'after'
         */
        previewPosition?: string | undefined;

        /**
         * Define what to do when Enter key is pressed.
         */
        onEnter?: MarkupSet | undefined;

        /**
         * Define what to do when Ctrl+Enter keys are pressed.
         */
        onCtrlEnter?: MarkupSet | undefined;

        /**
         * Define what to do when Shift+Enter keys are pressed.
         */
        onShiftEnter?: MarkupSet | undefined;

        /**
         * Define what to do when Tab key is pressed. Warning, this key is also used to jump at the end of a new inserted markup.
         */
        onTab?: MarkupSet | undefined;

        /**
         * Function to be called before any markup insertion.
         */
        beforeInsert?: ((h: MarkupSet) => string) | undefined;

        /**
         * Function to be called after any markup insertion.
         */
        afterInsert?: ((h: MarkupSet) => string) | undefined;

        /**
         * Note that most of the settings below are used by the engine for all insertion calls ($.markItUp( {} ), onEnter, onShiftEnter, onCtrlEnter, onTab) except exclusive button properties marked by
         */
        markupSet?: MarkupSet[] | undefined;
    }

    interface MarkupSet {
        /**
         * Button name
         */
        name?: string | undefined;

        /**
         * Classname to be applied to this very button.
         */
        className?: string | undefined;

        /**
         * Shortcut key to be applied to the button. Ctrl+key trigger the action of a button.
         */
        key?: string | undefined;

        /**
         * Markup to be added before selection. Accepts functions.
         */
        openWith?: string | ((h: MarkupSet) => string) | undefined;

        /**
         * Markup to be added after selection. Accepts functions.
         */
        closeWith?: string | ((h: MarkupSet) => string) | undefined;

        /**
         * Text to be added in place of the cursor or selection. Accepts functions.
         */
        replaceWith?: string | ((h: MarkupSet) => string) | undefined;

        /**
         * Text to be added before a whole block. Accepts functions.
         */
        openBlockWith?: string | ((h: MarkupSet) => string) | undefined;

        /**
         * Text to be added after a whole block. Accepts functions.
         */
        closeBlockWith?: string | ((h: MarkupSet) => string) | undefined;

        /**
         * Set whether the tags has to be inserted at each line or on the whole selected block.
         */
        multiline?: boolean | undefined;

        /**
         * Placeholder text to be inserted if no text is selected by the user.
         */
        placeHolder?: string | ((h: MarkupSet) => string) | undefined;

        /**
         * Function to be called just before a markup insertion. If a global beforeInsert callback is already defined this function is fired just after.
         */
        beforeInsert?: ((h: MarkupSet) => string) | undefined;

        /**
         * Function to be called just after a markup insertion. If a global afterInsert callback is already defined this function is fired before.
         */
        afterInsert?: ((h: MarkupSet) => string) | undefined;

        /**
         * Function to be called before a multiline markup insertion.
         */
        beforeMultiInsert?: ((h: MarkupSet) => string) | undefined;

        /**
         * Function to be called after a multiline markup insertion.
         */
        afterMultiInsert?: ((h: MarkupSet) => string) | undefined;

        /**
         * Open a dropdown menu with another button set.
         */
        dropMenu?: MarkupSet[] | undefined;

        /**
         * Keep (true) or not (false) the default behaviour of the key.
         */
        keepDefault?: boolean | undefined;

        /**
         * Returns the selection.
         */
        selection?: string | undefined;

        /**
         * Returns the textarea object.
         */
        textarea?: HTMLElement | undefined;

        /**
         * Returns the position of the selection.
         */
        caretPosition?: number | undefined;

        /**
         * Returns the position of the scrollbar.
         */
        scrollPosition?: number | undefined;

        /**
         * If a multi-line edition is trigged (Ctrl + Shift + click). This property return the number of the line being processed.
         */
        line?: number | undefined;

        /**
         * Returns true if the Control key is pressed when the callback is fired.
         */
        ctrlKey?: boolean | undefined;

        /**
         * Returns true if the Shift key is pressed when the callback is fired.
         */
        shiftKey?: boolean | undefined;

        /**
         * Returns true if the Alt key is pressed when the callback is fired.
         */
        altKey?: boolean | undefined;

        /** Not documented on the markitup site, but present in the tests */
        separator?: string | undefined;
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
