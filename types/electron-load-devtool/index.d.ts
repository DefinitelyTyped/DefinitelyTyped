// Type definitions for electron-load-devtool 1.2
// Project: https://github.com/akameco/electron-load-devtool
// Definitions by: Ciffelia <https://github.com/ciffelia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ElectronLoadDevtool {
    (devtoolId: string, options?: ElectronLoadDevtoolOptions): void;
    REDUX_DEVTOOLS: string;
    EMBER_INSPECTOR: string;
    REACT_DEVELOPER_TOOLS: string;
    BACKBONE_DEBUGGER: string;
    JQUERY_DEBUGGER: string;
    ANGULARJS_BATARANG: string;
    VUEJS_DEVTOOLS: string;
    VUEJS_DEVTOOLS_BETA: string;
}

interface ElectronLoadDevtoolOptions {
    enabled?: boolean;
    name?: string;
    profile?: string;
    version?: string;
}

declare const electronLoadDevtool: ElectronLoadDevtool;

export = electronLoadDevtool;
