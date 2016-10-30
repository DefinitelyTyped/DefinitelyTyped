// Type definitions for electron-process v0.1.3
// Project: https://github.com/smith-kyle/electron-process
// Definitions by: Will Streeter <https://github.com/WillStreeter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="electron"/>
///<reference types="lodash"/>


export declare class main {
    backgroundWindow: any;
    backgroundProcessHandler: any;
    constructor();
    createBackgroundProcess(url: string, debug: any): any;
    private sendToAllForegroundWindows(eventName, payload);
}