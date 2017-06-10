import { Oid } from './oid';
import { Repository } from './repository';
import { Buf } from './buf';

export class Object {
    /**
     *
     *
     * @static
     * @param {number} type
     * @returns {number}
     *
     * @memberof Object
     */
    static size(type: number): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} id
     * @param {number} type
     * @returns {Promise<Object>}
     *
     * @memberof Object
     */
    static lookup(repo: Repository, id: Oid, type: number): Promise<Object>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} id
     * @param {number} len
     * @param {number} type
     * @returns {Promise<Object>}
     *
     * @memberof Object
     */
    static lookupPrefix(repo: Repository, id: Oid, len: number, type: number): Promise<Object>;
    /**
     *
     *
     * @static
     * @param {string} str
     * @returns {number}
     *
     * @memberof Object
     */
    static string2type(str: string): number;
    /**
     *
     *
     * @static
     * @param {number} type
     * @returns {string}
     *
     * @memberof Object
     */
    static type2string(type: number): string;
    /**
     *
     *
     * @static
     * @param {number} type
     * @returns {number}
     *
     * @memberof Object
     */
    static typeisloose(type: number): number;

    /**
     *
     *
     * @returns {Promise<Object>}
     *
     * @memberof Object
     */
    dup(): Promise<Object>;
    /**
     *
     *
     *
     * @memberof Object
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Object
     */
    id(): Oid;
    /**
     *
     *
     * @param {string} path
     * @param {number} type
     * @returns {Promise<Object>}
     *
     * @memberof Object
     */
    lookupByPath(path: string, type: number): Promise<Object>;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Object
     */
    owner(): Repository;
    /**
     *
     *
     * @param {number} targetType
     * @returns {Promise<Object>}
     *
     * @memberof Object
     */
    peel(targetType: number): Promise<Object>;
    /**
     *
     *
     * @returns {Promise<Buf>}
     *
     * @memberof Object
     */
    shortId(): Promise<Buf>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Object
     */
    type(): number;
}
