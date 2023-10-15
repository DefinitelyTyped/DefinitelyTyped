// Type definitions for non-npm package dialogify-browser 1.0
// Project: https://github.com/OneupNetwork/dialogify
// Definitions by: moontai0724 <https://github.com/moontai0724>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="dialogify.d.ts" />

export = Dialogify;

declare global {
    interface Window {
        dialogifyConfig?: Dialogify.DialogifyConfig;
    }
}
