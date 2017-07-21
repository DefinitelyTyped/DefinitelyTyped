import { Repository } from './repository';

export namespace Attr {
    const enum STATES {
        UNSPECIFIED_T = 0,
        TRUE_T = 1,
        FALSE_T = 2,
        VALUE_T = 3
    }
}

export class Attr {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} values
     * @returns {number}
     *
     * @memberof Attr
     */
    static addMacro(repo: Repository, name: string, values: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     *
     * @memberof Attr
     */
    static cacheFlush(repo: Repository): void;
    /**
     *
     *
     * @static
     * @param {Repository} repo - The repository containing the path.
     * @param {number} flags - A combination of GIT_ATTR_CHECK... flags.
     * @param {string} path - The path to check for attributes. Relative paths are interpreted relative to the repo root.
     * The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory).
     * @param {string} name - The name of the attribute to look up.
     * @returns {Promise<string>} - Output of the value of the attribute. Use the GIT_ATTR_...
     *
     * @memberof Attr
     */
    static get(repo: Repository, flags: number, path: string, name: string): Promise<string>;
    /**
     *
     *
     * @static
     * @param {Repository} repo - The repository containing the path.
     * @param {number} flags - A combination of GIT_ATTR_CHECK... flags.
     * @param {string} path - The path to check for attributes. Relative paths are interpreted relative to the repo root.
     * The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory).
     * @param {number} numAttr - The number of attributes being looked up
     * @param {string} names - An array of num_attr strings containing attribute names.
     * @returns {any[]}
     *
     * @memberof Attr
     */
    static getMany(repo: Repository, flags: number, path: string, numAttr: number, names: string): any[];
    /**
     *
     *
     * @static
     * @param {string} attr - The attribute
     * @returns {number}- the value type for the attribute
     *
     * @memberof Attr
     */
    static value(attr: string): number;
}
