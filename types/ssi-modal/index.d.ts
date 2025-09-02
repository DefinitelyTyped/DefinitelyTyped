/// <reference types="jquery" />
/// <reference path="SsiModal.d.ts" />

export = ssi_modal;

declare global {
    interface Window {
        ssi_modal: SsiModal.ssi_modal;
    }
}
