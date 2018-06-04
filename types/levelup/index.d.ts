// Type definitions for LevelUp 
// Project: https://github.com/Level/levelup
// Definitions by: Bret Little <https://github.com/blittle>, Thiago de Arruda <https://github.com/tarruda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as leveldown from "leveldown";

export = levelup;

declare var levelup: levelup.LevelUpConstructor;

declare namespace levelup {

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

interface LevelUpBase<BatchType extends Batch> {
    open(callback ?: (error : any) => any): void;
    close(callback ?: (error : any) => any): void;
    put(key: any, value: any, callback ?: (error: any) => any): void;
    put(key: any, value: any, options?: { sync?: boolean }, callback ?: (error: any) => any): void;
    get(key: any, callback ?: (error: any, value: any) => any): void;

    get(key: any, options ?: { keyEncoding?: Encoding; fillCache?: boolean }, callback ?: (error: any, value: any) => any): void;
    del(key: any, callback ?: (error: any) => any): void;
    del(key: any, options ?: { keyEncoding?: Encoding; sync?: boolean }, callback ?: (error: any) => any): void;


    batch(array: BatchType[], options?: { keyEncoding?: Encoding; valueEncoding?: Encoding; sync?: boolean }, callback?: (error?: any)=>any): void;
    batch(array: BatchType[], callback?: (error?: any)=>any): void;
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

type LevelUp = LevelUpBase<Batch>

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
    db?: leveldown.Constructor;
}

interface LevelUpConstructor {
    (hostname: string, options?: levelupOptions): LevelUp;
}
}
