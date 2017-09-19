export namespace Hashsig {
    const enum OPTION {
        NORMAL = 0,
        IGNORE_WHITESPACE = 1,
        SMART_WHITESPACE = 2,
        ALLOW_SMALL_FILES = 4
    }
}

export class Hashsig {
    /**
     *
     *
     * @static
     * @param {string} buf
     * @param {number} buflen
     * @param {number} opts
     * @returns {Promise<Hashsig>}
     *
     * @memberof Hashsig
     */
    static create(buf: string, buflen: number, opts: number): Promise<Hashsig>;
    /**
     *
     *
     * @static
     * @param {string} path
     * @param {number} opts
     * @returns {Promise<Hashsig>}
     *
     * @memberof Hashsig
     */
    static createFromFile(path: string, opts: number): Promise<Hashsig>;

    /**
     *
     *
     * @param {Hashsig} b
     * @returns {number}
     *
     * @memberof Hashsig
     */
    compare(b: Hashsig): number;
    /**
     *
     *
     *
     * @memberof Hashsig
     */
    free(): void;
}
