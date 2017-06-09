import {Repository} from './repository';
import {Signature} from './signature';
import {Oid} from './oid';

export class Note {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notes_ref
     * @param {Signature} author
     * @param {Signature} committer
     * @param {Oid} oid
     * @param {string} note
     * @param {number} force
     * @returns {Promise<Oid>}
     *
     * @memberof Note
     */
    static create(repo: Repository, notes_ref: string, author: Signature, committer: Signature, oid: Oid, note: string, force: number): Promise<Oid>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notes_ref
     * @param {Function} note_cb
     * @param {*} payload
     * @returns {Promise<number>}
     *
     * @memberof Note
     */
    static foreach(repo: Repository, notes_ref: string, note_cb: Function, payload: any): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notes_ref
     * @returns {Promise<any>}
     *
     * @memberof Note
     */
    static iteratorNew(repo: Repository, notes_ref: string): Promise<any>;
    /**
     *
     *
     * @static
     * @param {Oid} note_id
     * @param {Oid} annotated_id
     * @param {*} it
     * @returns {number}
     *
     * @memberof Note
     */
    static next(note_id: Oid, annotated_id: Oid, it: any): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notes_ref
     * @param {Oid} oid
     * @returns {Promise<Note>}
     *
     * @memberof Note
     */
    static read(repo: Repository, notes_ref: string, oid: Oid): Promise<Note>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notes_ref
     * @param {Signature} author
     * @param {Signature} committer
     * @param {Oid} oid
     * @returns {Promise<number>}
     *
     * @memberof Note
     */
    static remove(repo: Repository, notes_ref: string, author: Signature, committer: Signature, oid: Oid): Promise<number>;

    /**
     *
     *
     * @returns {Signature}
     *
     * @memberof Note
     */
    author(): Signature;
    /**
     *
     *
     * @returns {Signature}
     *
     * @memberof Note
     */
    committer(): Signature;
    /**
     *
     *
     *
     * @memberof Note
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Note
     */
    id(): Oid;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Note
     */
    message(): string;
}
