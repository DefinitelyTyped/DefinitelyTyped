// Type definitions for electron-process v0.1.3
// Project: https://github.com/smith-kyle/electron-process
// Definitions by: Will Streeter <https://github.com/WillStreeter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="electron"/>
///<reference types="lodash"/>
///<reference types="object-hash"/>
///<reference types="bluebird"/>


export declare class background {
    backgroundTasks: any;
    hasRegisteredListeners: boolean;
    constructor();
    turnCallbackIntoIpcCall(functionId: any): () => void;
    registerListeners(): void;
    registerModule(backgroundModule: any): void;
}
