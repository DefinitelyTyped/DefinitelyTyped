// Type definitions for LevelUp 
// Project: https://github.com/rvagg/node-levelup
// Definitions by: Bret Little <https://github.com/blittle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Batch {
    type: string;
    key: any;
    value?: any;
    keyEncoding?: string;
    valueEncoding?: string;
}

interface LevelUp {
    open(callback ?: (error : any) => any): void;
    close(callback ?: (error : any) => any): void;
    put(key: any, value: any, callback ?: (error: any) => any): void;
    put(key: any, value: any, options?: { sync?: boolean }, callback ?: (error: any) => any): void;
    get(key: any, callback ?: (error: any, value: any) => any): void;

    get(key: any, options ?: { keyEncoding?: string; fillCache?: boolean }, callback ?: (error: any, value: any) => any): void;
    del(key: any, callback ?: (error: any) => any): void;
    del(key: any, options ?: { keyEncoding?: string; sync?: boolean }, callback ?: (error: any) => any): void;


    batch(array: Batch[], options?: { keyEncoding?: string; valueEncoding?: string; sync?: boolean }, callback?: (error?: any)=>any);
    batch(array: Batch[], callback?: (error?: any)=>any);
}

declare module "levelup" {

    function levelup(hostname: string): LevelUp;
    
    export = levelup;
}
