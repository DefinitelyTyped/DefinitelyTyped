// Type definitions for jquery.dialog2
// Project: https://github.com/Nikku/jquery-bootstrap-scripting
// Definitions by: Thomas Ardal <http://thomasardal.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface Dialog2Settings {
    /**
     * id which (if specified) will be added to the dialog to make it accessible later.
     */
    id?: string;

    /**
     * Should the dialog be automatically opened?
     */
    autoOpen?: boolean;

    /**
     * Title of the dialog.
     */
    title?: string;

    buttons?: any;

    /**
     * Should the dialog be closed on overlay click?
     */
    closeOnOverlayClick?: boolean;

    /**
     * Should the dialog be closed if [ESCAPE] key is pressed?
     */
    closeOnEscape?: boolean;

    /**
     * Should the dialog be removed from the document when it is closed?
     */
    removeOnClose?: boolean;

    /**
     * Should a close handle be shown?
     */
    showCloseHandle?: boolean;

    /**
     * Text to be displayed when the dialogs contents are loaded.
     */
    initialLoadText?: string;
}

interface Dialog2 {
    (settings: Dialog2Settings): JQuery;
}

interface JQuery {
    /**
     * Show a new bootstrap dialog.
     **/
    dialog2: Dialog2;
}

interface JQueryStatic {
    dialog2: Dialog2;
}