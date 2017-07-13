export class Strarray {
    /**
     *
     *
     * @param {Strarray} src
     * @returns {number}
     *
     * @memberof Strarray
     */
    copy(src: Strarray): number;
    /**
     *
     *
     *
     * @memberof Strarray
     */
    free(): void;
    /**
     *
     *
     * @type {string[]}
     * @memberof Strarray
     */
    strings: string[];
    /**
     *
     *
     * @type {number}
     * @memberof Strarray
     */
    count: number;
}
