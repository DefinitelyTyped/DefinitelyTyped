// Type definitions for electron-devtools-installer v2.2.4
// Project: https://github.com/MarshallOfSound/electron-devtools-installer
// Definitions by: Robin Van den Broeck <https://github.com/gamesmaxed>
//                 M. Fatih Mar <https://github.com/mfatihmar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "electron-devtools-installer" {
    interface ExtensionReference {
        id: string,
        electron: string,
    }

    // Default installation function
    export default function (extensionReference: ExtensionReference | string | Array<ExtensionReference | string>, forceDownload?: boolean): Promise<string>;

    // Devtools themself
    export const EMBER_INSPECTOR: ExtensionReference;
    export const REACT_DEVELOPER_TOOLS: ExtensionReference;
    export const BACKBONE_DEBUGGER: ExtensionReference;
    export const JQUERY_DEBUGGER: ExtensionReference;
    export const ANGULARJS_BATARANG: ExtensionReference;
    export const VUEJS_DEVTOOLS: ExtensionReference;
    export const REDUX_DEVTOOLS: ExtensionReference;
    export const REACT_PERF: ExtensionReference;
    export const CYCLEJS_DEVTOOL: ExtensionReference;
    export const APOLLO_DEVELOPER_TOOLS: ExtensionReference;
    export const MOBX_DEVTOOLS: ExtensionReference;
}
