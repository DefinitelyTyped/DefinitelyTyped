import { Repository } from './repository';
import { Oid } from './oid';
import { Signature } from './signature';

export class Reflog {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @returns {number}
     *
     * @memberof Reflog
     */
    static delete(repo: Repository, name: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @returns {Promise<Reflog>}
     *
     * @memberof Reflog
     */
    static read(repo: Repository, name: string): Promise<Reflog>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} oldName
     * @param {string} name
     * @returns {number}
     *
     * @memberof Reflog
     */
    static rename(repo: Repository, oldName: string, name: string): number;

    /**
     *
     *
     * @param {Oid} id
     * @param {Signature} committer
     * @param {string} msg
     * @returns {number}
     *
     * @memberof Reflog
     */
    append(id: Oid, committer: Signature, msg: string): number;
    /**
     *
     *
     * @param {number} idx
     * @param {number} rewritePreviousEntry
     * @returns {number}
     *
     * @memberof Reflog
     */
    drop(idx: number, rewritePreviousEntry: number): number;
    /**
     *
     *
     * @param {number} idx
     * @returns {ReflogEntry}
     *
     * @memberof Reflog
     */
    entryByIndex(idx: number): ReflogEntry;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reflog
     */
    entrycount(): number;
    /**
     *
     *
     *
     * @memberof Reflog
     */
    free(): void;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reflog
     */
    write(): number;
}

export class ReflogEntry {
    /**
     *
     *
     * @returns {Signature}
     *
     * @memberof ReflogEntry
     */
    committer(): Signature;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof ReflogEntry
     */
    idNew(): Oid;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof ReflogEntry
     */
    idOld(): Oid;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof ReflogEntry
     */
    message(): string;
}
