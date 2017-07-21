import { Error } from './error';

export class Giterr {
    /**
     *
     *
     * @static
     *
     * @memberof Giterr
     */
    static errClear(): void;
    /**
     *
     *
     * @static
     * @returns {Error}
     *
     * @memberof Giterr
     */
    static errLast(): Error;
    /**
     *
     *
     * @static
     *
     * @memberof Giterr
     */
    static errSetOom(): void;
    /**
     *
     *
     * @static
     * @param {number} errorClass
     * @param {string} string
     *
     * @memberof Giterr
     */
    static errSetString(errorClass: number, string: string): void;
}
