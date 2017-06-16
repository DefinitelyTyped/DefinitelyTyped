import { Strarray } from './str-array';

export interface StatusOptions {
    /**
     *
     *
     * @type {number}
     * @memberof StatusOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof StatusOptions
     */
    show?: number;
    /**
     *
     *
     * @type {number}
     * @memberof StatusOptions
     */
    flags?: number;
    /**
     *
     *
     * @type {Strarray}
     * @memberof StatusOptions
     */
    pathspec?: Strarray;
}
