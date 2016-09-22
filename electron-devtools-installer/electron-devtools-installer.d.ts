// Type definitions for electron-devtools-installer v2.0.1
// Project: https://github.com/MarshallOfSound/electron-devtools-installer
// Definitions by: Robin Van den Broeck <https://github.com/gamesmaxed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />


declare module "electron-devtools-installer" {
    // Default installation function
    export default function (extensionReference: any, forceDownload?: boolean): Promise<String>;

    interface Extension {
        id: string,
        electron: string,
    }

    // Devtools themself
    export const EMBER_INSPECTOR: Extension;
    export const REACT_DEVELOPER_TOOLS: Extension;
    export const BACKBONE_DEBUGGER: Extension;
    export const JQUERY_DEBUGGER: Extension;
    export const ANGULARJS_BATARANG: Extension;
    export const VUEJS_DEVTOOLS: Extension;
    export const REDUX_DEVTOOLS: Extension;
    export const REACT_PERF: Extension;
}