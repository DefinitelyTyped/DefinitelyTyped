/// <reference types="jquery" />
/// <reference path="SsiModal.d.ts" />

export = ssi_modal;

declare global {
    interface Window {
        ssi_modal: SsiModal.ssi_modal;
    }
    interface JQuery {
        /**
         * Initialize a ssi-modal on the selected element(s).
         * Equivalent to calling `ssi_modal.show({ content: element })` but chainable from a jQuery collection.
         * @param options Modal options override.
         */
        ssi_modal(options: Partial<SsiModalOptions>): SsiModal;
    }
}
