/// <reference types="jquery" />

declare namespace RangyInputs {
    interface Selection {
        /** The character index of the start position of the selection */
        start: number;

        /**  The character index of the end position of the selection */
        end: number;

        /** The number of characters selected */
        length: number;

        /** The selected Text */
        text: string;
    }
}

interface JQuery {
    /** Note that in IE the textarea or text input must have the focus before calling this method. You can ensure this by calling the focus() method of the element (or its jQuery object). */
    getSelection(): RangyInputs.Selection;

    /** Selects the text within the text input or textarea element between the specified start and end character indices. */
    setSelection(start: number, end?: number): JQuery;

    /** Collapses the selection to an insertion point (caret) either at the start of the current selection if toStart is true or the end of the current selection otherwise. */
    collapseSelection(toStart?: boolean): JQuery;

    /** Deletes the text within the text input or textarea element between the specified start and end character indices and optionally places the caret at the position where the deleted text had been if moveSelection is true. */
    deleteText(start: number, end: number, moveSelection?: boolean): JQuery;

    /** Deletes the currently selected text within the text input or textarea element and places the caret at the position where the deleted text had been. */
    deleteSelectedText(): JQuery;

    /** Deletes the currently selected text within the text input or textarea element, places the caret at the position where the deleted text had been and returns the text that was deleted. */
    extractSelectedText(): string;

    /**
     * Inserts the specified text at the specified character position within the text input or textarea element and optionally updates the selection depending on the value of selectionBehaviour. Possible values are:
     *
     * - "select": Selects the inserted text
     * - "collapseToStart": Collapses the selection to a caret at the start of the inserted text
     * - "collapseToEnd": Collapses the selection to a caret at the end of the inserted text
     *
     * If no value is supplied for selectionBehaviour, the selection is not changed and left at the mercy of the browser (placing the caret at the start is not uncommon when the textarea's value is changed).
     */
    insertText(
        text: string,
        pos: number,
        selectionBehaviour?: "select" | "collapseToStart" | "collapseToEnd",
    ): JQuery;

    /**
     * Replaces the currently selected text in the text input or textarea element with the specified text and optionally updates the selection depending on the value of selectionBehaviour. Possible values are:
     *
     * - "select": Selects the inserted text
     * - "collapseToStart": Collapses the selection to a caret at the start of the inserted text
     * - "collapseToEnd": Collapses the selection to a caret at the end of the inserted text
     *
     * If no value is supplied for selectionBehaviour, "collapseToEnd" is assumed.
     */
    replaceSelectedText(
        text: string,
        selectionBehaviour?: "select" | "collapseToStart" | "collapseToEnd",
    ): JQuery;

    /**
     * Surrounds the currently selected text in the text input or textarea element with the specified pieces of text and optionally updates the selection depending on the value of selectionBehaviour. Possible values are:
     *
     * - "select": Selects the inserted text
     * - "collapseToStart": Collapses the selection to a caret at the start of the inserted text
     * - "collapseToEnd": Collapses the selection to a caret at the end of the inserted text
     *
     * If no value is supplied for selectionBehaviour, "select" is assumed.
     */
    surroundSelectedText(
        textBefore: string,
        textAfter: string,
        selectionBehaviour?: "select" | "collapseToStart" | "collapseToEnd",
    ): JQuery;
}
