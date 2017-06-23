import { Repository } from './repository';

export class Ignore {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} rules
     * @returns {number}
     *
     * @memberof Ignore
     */
    static addRule(repo: Repository, rules: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {number}
     *
     * @memberof Ignore
     */
    static clearInternalRules(repo: Repository): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} path
     * @returns {Promise<number>}
     *
     * @memberof Ignore
     */
    static pathIsIgnored(repo: Repository, path: string): Promise<number>;
}
