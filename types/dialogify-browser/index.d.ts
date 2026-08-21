/// <reference path="dialogify.d.ts" />

export = Dialogify;

declare global {
    interface Window {
        dialogifyConfig?: Dialogify.DialogifyConfig;
    }
}
