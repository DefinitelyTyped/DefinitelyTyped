import { Repository } from './repository';

export class Refdb {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Promise<Refdb>}
     *
     * @memberof Refdb
     */
    static open(repo: Repository): Promise<Refdb>;

    /**
     *
     *
     * @returns {number}
     *
     * @memberof Refdb
     */
    compress(): number;
    /**
     *
     *
     *
     * @memberof Refdb
     */
    free(): void;
}
