import {Repository} from './repository';
import {Signature} from './signature';
import {Oid} from './oid';

export class Note {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notesRef
     * @param {Signature} author
     * @param {Signature} committer
     * @param {Oid} oid
     * @param {string} note
     * @param {number} force
     * @returns {Promise<Oid>}
     *
     * @memberof Note
     */
    static create(repo: Repository, notesRef: string, author: Signature, committer: Signature, oid: Oid, note: string, force: number): Promise<Oid>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notesRef
     * @param {Function} noteCb
     * @param {*} payload
     * @returns {Promise<number>}
     *
     * @memberof Note
     */
    static foreach(repo: Repository, notesRef: string, noteCb: Function, payload: any): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notesRef
     * @returns {Promise<any>}
     *
     * @memberof Note
     */
    static iteratorNew(repo: Repository, notesRef: string): Promise<any>;
    /**
     *
     *
     * @static
     * @param {Oid} noteId
     * @param {Oid} annotatedId
     * @param {*} it
     * @returns {number}
     *
     * @memberof Note
     */
    static next(noteId: Oid, annotatedId: Oid, it: any): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notesRef
     * @param {Oid} oid
     * @returns {Promise<Note>}
     *
     * @memberof Note
     */
    static read(repo: Repository, notesRef: string, oid: Oid): Promise<Note>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} notesRef
     * @param {Signature} author
     * @param {Signature} committer
     * @param {Oid} oid
     * @returns {Promise<number>}
     *
     * @memberof Note
     */
    static remove(repo: Repository, notesRef: string, author: Signature, committer: Signature, oid: Oid): Promise<number>;

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
