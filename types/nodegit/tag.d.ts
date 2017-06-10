import { Repository } from './repository';
import { Oid } from './oid';
import { Object } from './object';
import { Signature } from './signature';
import { Strarray } from './str-array';

export class Tag {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} tag_name
     * @param {Object} target
     * @param {Signature} tagger
     * @param {string} message
     * @returns {Promise<Oid>}
     *
     * @memberof Tag
     */
    static annotationCreate(repo: Repository, tag_name: string, target: Object, tagger: Signature, message: string): Promise<Oid>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} tag_name
     * @param {Object} target
     * @param {Signature} tagger
     * @param {string} message
     * @param {number} force
     * @returns {Promise<Oid>}
     *
     * @memberof Tag
     */
    static create(repo: Repository, tag_name: string, target: Object, tagger: Signature, message: string, force: number): Promise<Oid>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} tag_name
     * @param {Object} target
     * @param {number} force
     * @returns {Promise<Oid>}
     *
     * @memberof Tag
     */
    static createLightweight(repo: Repository, tag_name: string, target: Object, force: number): Promise<Oid>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} tag_name
     * @returns {Promise<number>}
     *
     * @memberof Tag
     */
    static delete(repo: Repository, tag_name: string): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Promise<any[]>}
     *
     * @memberof Tag
     */
    static list(repo: Repository): Promise<any[]>;
    /**
     *
     *
     * @static
     * @param {Strarray} tag_names
     * @param {string} pattern
     * @param {Repository} repo
     * @returns {number}
     *
     * @memberof Tag
     */
    static listMatch(tag_names: Strarray, pattern: string, repo: Repository): number;
    /**
     * Retrieves the tag pointed to by the oid
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Oid | Tag)} id
     * @returns {Promise<Tag>}
     *
     * @memberof Tag
     */
    static lookup(repo: Repository, id: string | Oid | Tag): Promise<Tag>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} id
     * @param {number} len
     * @returns {Promise<Tag>}
     *
     * @memberof Tag
     */
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tag>;

    /**
     *
     *
     * @returns {Promise<Tag>}
     *
     * @memberof Tag
     */
    dup(): Promise<Tag>;
    /**
     *
     *
     *
     * @memberof Tag
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Tag
     */
    id(): Oid;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Tag
     */
    message(): string;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Tag
     */
    name(): string;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Tag
     */
    owner(): Repository;
    /**
     *
     *
     * @param {Object} tagTargetOut
     * @returns {number}
     *
     * @memberof Tag
     */
    peel(tagTargetOut: Object): number;
    /**
     *
     *
     * @returns {Signature}
     *
     * @memberof Tag
     */
    tagger(): Signature;
    /**
     *
     *
     * @returns {Object}
     *
     * @memberof Tag
     */
    target(): Object;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Tag
     */
    targetId(): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Tag
     */
    targetType(): number;
}
