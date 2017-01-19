// Type definitions for LevelUp 
// Project: https://github.com/Level/levelup
// Definitions by: Bret Little <https://github.com/blittle>, Thiago de Arruda <https://github.com/tarruda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface CustomEncoding {
    encode(val: any): Buffer| string;
    decode(val: Buffer | string): any;
    buffer: boolean;
    type: string;
}

type Encoding = string | CustomEncoding;

interface Batch {
    type: string;
    key: any;
    value?: any;
    keyEncoding?: Encoding;
    valueEncoding?: Encoding;
}
interface LevelUp {
    open(callback ?: (error : any) => any): void;
    close(callback ?: (error : any) => any): void;
    put(key: any, value: any, callback ?: (error: any) => any): void;
    put(key: any, value: any, options?: { sync?: boolean }, callback ?: (error: any) => any): void;
    get(key: any, callback ?: (error: any, value: any) => any): void;

    get(key: any, options ?: { keyEncoding?: Encoding; fillCache?: boolean }, callback ?: (error: any, value: any) => any): void;
    del(key: any, callback ?: (error: any) => any): void;
    del(key: any, options ?: { keyEncoding?: Encoding; sync?: boolean }, callback ?: (error: any) => any): void;


    batch(array: Batch[], options?: { keyEncoding?: Encoding; valueEncoding?: Encoding; sync?: boolean }, callback?: (error?: any)=>any): void;
    batch(array: Batch[], callback?: (error?: any)=>any): void;
    batch():LevelUpChain;
    isOpen():boolean;
    isClosed():boolean;
    createReadStream(options?: any): any;
    createKeyStream(options?: any): any;
    createValueStream(options?: any): any;
    createWriteStream(options?: any): any;
    destroy(location: string, callback?: Function): void;
    repair(location: string, callback?: Function): void;
}

interface LevelUpChain {
    put(key: any, value: any): LevelUpChain;
    put(key: any, value: any, options?: { sync?: boolean }): LevelUpChain;
    del(key: any): LevelUpChain;
    del(key: any, options ?: { keyEncoding?: Encoding; sync?: boolean }): LevelUpChain;
    clear(): LevelUpChain;
    write(callback?: (error?: any)=>any) : LevelUpChain;
}

interface levelupOptions {
    createIfMissing?: boolean; 
    errorIfExists?: boolean; 
    compression?: boolean; 
    cacheSize?: number; 
    keyEncoding?: Encoding; 
    valueEncoding?: Encoding; 
    db?: string
}

declare module "levelup" {

    function levelup(hostname: string, options?: levelupOptions): LevelUp;
    
    export = levelup;
}

declare module "leveldown" {

    export function destroy(location: string, callback?: Function): void;
    export function repair(location: string, callback?: Function): void;
}
