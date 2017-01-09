// Type definitions for electron-process v0.1.3
// Project: https://github.com/smith-kyle/electron-process
// Definitions by: Will Streeter <https://github.com/WillStreeter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="electron"/>
///<reference types="lodash"/>
///<reference types="object-hash"/>
///<reference types="uuid"/>
///<reference types="bluebird"/>



export declare class foreground {
    constructor();
    getModule(originalModule: any): any;
    private taskCompleteCallback(eventKey, resolve, reject, event, data);
    callbackCallback(functionsById: any, event: any, data: any): void;
    private run(moduleHash, funcName, args);
}
