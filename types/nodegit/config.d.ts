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
}

export class Config {
    static openDefault(): Promise<Config>;
    static findProgramdata(): Promise<Buf>;

    getStringBuf(name: string): Promise<Buf>;
    setInt64(name: string, value: number): number;
    setMultivar(name: string, regexp: string, value: string): number;
    setString(name: string, value: string): Promise<number>;
    snapshot(): Promise<Config>;
    lock(transaction: any): number;
}
