import { Repository } from './repository';
import { Oid } from './oid';
import { Revwalk } from './rev-walk';

export namespace Packbuilder {
    const enum STAGE {
        ADDING_OBJECTS = 0,
        DELTAFICATION = 1
    }
}

export class Packbuilder {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Packbuilder}
     *
     * @memberof Packbuilder
     */
    static create(repo: Repository): Packbuilder;

    /**
     *
     *
     *
     * @memberof Packbuilder
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Packbuilder
     */
    hash(): Oid;
    /**
     *
     *
     * @param {Oid} id
     * @param {string} name
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    insert(id: Oid, name: string): number;
    /**
     *
     *
     * @param {Oid} id
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    insertCommit(id: Oid): number;
    /**
     *
     *
     * @param {Oid} id
     * @param {string} name
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    insertRecur(id: Oid, name: string): number;
    /**
     *
     *
     * @param {Oid} id
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    insertTree(id: Oid): number;
    /**
     *
     *
     * @param {Revwalk} walk
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    insertWalk(walk: Revwalk): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    objectCount(): number;
    /**
     *
     *
     * @param {number} n
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    setThreads(n: number): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Packbuilder
     */
    written(): number;
}
