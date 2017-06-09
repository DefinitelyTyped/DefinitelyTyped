import { Strarray } from './str-array';

export interface DiffOptions {
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    flags?: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    ignoreSubmodules?: number;
    /**
     *
     *
     * @type {Strarray}
     * @memberof DiffOptions
     */
    pathspec?: Strarray;
    /**
     *
     *
     * @type {Function}
     * @memberof DiffOptions
     */
    notifyCb?: Function;
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    contextLines?: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    interhunkLines?: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    idAbbrev?: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffOptions
     */
    maxSize?: number;
    /**
     *
     *
     * @type {string}
     * @memberof DiffOptions
     */
    oldPrefix?: string;
    /**
     *
     *
     * @type {string}
     * @memberof DiffOptions
     */
    newPrefix?: string;
    /**
     *
     *
     * @type {*}
     * @memberof DiffOptions
     */
    payload?: any;
    /**
     *
     *
     * @type {*}
     * @memberof DiffOptions
     */
    progressCb?: any;
}
