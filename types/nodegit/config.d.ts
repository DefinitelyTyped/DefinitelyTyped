import { Buf } from './buf';

export namespace Config {
    const enum LEVEL {
        SYSTEM = 1,
        XDG = 2,
        GLOBAL = 3,
        LOCAL = 4,
        APP = 5,
        HIGHEST_LEVEL = -1
    }

    const enum MAP {
        FALSE = 0,
        TRUE = 1,
        INT32 = 2,
        STRING = 3,
    }
}

export class ConfigEntry {
    // the documentation says those are variables,
    // but in reality they are functions
    level(): number;
    name(): number;
    value(): string;
}

export class Config {
    static findGlobal(): Promise<string>; // the docs says it's a buff but it's actually a string
    static findProgramdata(): Promise<Buf>;
    static findSystem(): Promise<Buf>;
    static findXdg(): Promise<Buf>;
    static openDefault(): Promise<Config>;
    static openOndisk(path: string): Promise<Config>;

    deleteEntry(name: string): number;
    deleteMultivar(name: string, regexp: string): number;
    getBool(name: string): Promise<number>;
    getEntry(name: string): Promise<ConfigEntry>;
    getInt32(name: string): Promise<number>;
    getInt64(name: string): Promise<number>;
    getPath(name: string): Promise<string>; // the docs says Buf but it's actually a string
    getStringBuf(name: string): Promise<Buf>;
    lock(transaction: any): number;
    setBool(name: string, value: number): Promise<number>;
    setInt32(name: string, value: number): Promise<number>;
    setInt64(name: string, value: number): number;
    setMultivar(name: string, regexp: string, value: string): Promise<number>;
    setString(name: string, value: string): Promise<number>;
    snapshot(): Promise<Config>;
}
