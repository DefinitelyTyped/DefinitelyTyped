/// <reference path="index.d.ts" />

export {};

declare global {
    interface Window {
        dialogifyConfig?: Dialogify.DialogifyConfig;
    }
}
