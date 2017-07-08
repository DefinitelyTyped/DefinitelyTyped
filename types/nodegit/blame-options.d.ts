import {Oid} from './oid';

export class BlameOptions {
    /**
     *
     *
     * @type {number}
     * @memberof BlameOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof BlameOptions
     */
    flags?: number;
    /**
     *
     *
     * @type {number}
     * @memberof BlameOptions
     */
    minMatchCharacters?: number;
    /**
     *
     *
     * @type {Oid}
     * @memberof BlameOptions
     */
    newestCommit?: Oid;
    /**
     *
     *
     * @type {Oid}
     * @memberof BlameOptions
     */
    oldestCommit?: Oid;
    /**
     *
     *
     * @type {number}
     * @memberof BlameOptions
     */
    minLine?: number;
    /**
     *
     *
     * @type {number}
     * @memberof BlameOptions
     */
    maxLine?: number;
}
