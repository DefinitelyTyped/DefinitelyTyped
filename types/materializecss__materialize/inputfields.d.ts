/// <reference path="./common.d.ts" />

declare namespace M {
    /**
     * Reinitializes all the Materialize labels on
     * the page (useful when updating the value content
     * dynamically).
     */
    function updateTextFields(): void;

    /**
     * Resizes the given TextArea after updating the
     * value content dynamically.
     */
    function textareaAutoResize(textarea: Element | JQuery | Cash): void;
}
