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
    /**
     *
     *
     * @static
     * @returns {Promise<Config>}
     *
     * @memberof Config
     */
    static openDefault(): Promise<Config>;
    /**
     *
     *
     * @static
     * @returns {Promise<Buf>}
     *
     * @memberof Config
     */
    static findProgramdata(): Promise<Buf>;

    /**
     *
     *
     * @param {string} name
     * @returns {Promise<Buf>}
     *
     * @memberof Config
     */
    getStringBuf(name: string): Promise<Buf>;
    /**
     *
     *
     * @param {string} name
     * @param {number} value
     * @returns {number}
     *
     * @memberof Config
     */
    setInt64(name: string, value: number): number;
    /**
     *
     *
     * @param {string} name
     * @param {string} regexp
     * @param {string} value
     * @returns {number}
     *
     * @memberof Config
     */
    setMultivar(name: string, regexp: string, value: string): number;
    /**
     *
     *
     * @param {string} name
     * @param {string} value
     * @returns {Promise<number>}
     *
     * @memberof Config
     */
    setString(name: string, value: string): Promise<number>;
    /**
     *
     *
     * @returns {Promise<Config>}
     *
     * @memberof Config
     */
    snapshot(): Promise<Config>;
    /**
     *
     *
     * @param {*} transaction
     * @returns {number}
     *
     * @memberof Config
     */
    lock(transaction: any): number;
}
