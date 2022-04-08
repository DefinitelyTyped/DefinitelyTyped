import 'jqueryui';

declare global {
    /** The global ID of onscreen dialogs. */
    var DIALOG_ID: number;

    /** All onscreen dialogs, keyed by their ID. */
    var DIALOGS: {};

    /** The number of dialogs on screen. */
    var DIALOG_COUNT: number;

    /** The dialog that has focus. */
    var DIALOG_FOCUS: any;

    /**
     * Controls how quickly the slide toggle animation
     * should play for dialog collapsing and expanding.
     * @default 100
     */
    var DIALOG_SLIDE_DURATION: number;

    /** Create and show dialog */
    function dialog(data: DialogOptions): JQuery;

    // see https://jqueryui.com/dialog/
    interface DialogOptions {
        /** If set only one dialog can be open */
        id?: string;

        /** Dialog title */
        title?: string;

        /**
         * Dialog contents - converted by convertTextToTableMagic
         * \n will be line breaks \t will be table fields
         */
        text?: string;

        /** Dialog contents (if no text) */
        html?: string | HTMLElement | JQuery;

        dialogClass?: string;
        classes?: any;

        /**
         * single dialog
         * default: false
         */
        modal?: boolean;

        /**
         * moveable dialog
         * default: true
         */
        draggable?: boolean;

        /**
         * resizeable dialog (won't work in iitc out-of-the-box)
         * default: false
         */
        resizable?: boolean;

        /** position, see: https://api.jqueryui.com/position/ */
        position?: any;

        /** size */
        height?: string | number;
        width?: string | number;
        maxHeight?: string;
        maxWidth?: string;
        minHeight?: string;
        minWidth?: string;

        autoOpen?: boolean;
        closeOnEscape?: boolean;
        hide?: any;
        appendTo?: any;

        /** Specifies the text for the close button */
        closeText?: string;

        closeCallback?: any;
        collapseCallback?: any;
        expandCallback?: any;
        collapseExpandCallback?: any;
        focusCallback?: any;
        blurCallback?: any;

        buttons?: JQueryUI.ButtonOptions[] | { [key: string]: () => void };
    }

    /** custom alert box */
    function alert(text: string, isHTML: boolean, closeCallback: any): JQuery;

    /** init */
    function setupDialogs(): void;
}
