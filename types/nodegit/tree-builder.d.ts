import { Oid } from './oid';
import { Repository } from './repository';
import { Tree } from './tree';
import { TreeEntry } from './tree-entry';

export class Treebuilder {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Tree} source
     * @returns {Promise<Treebuilder>}
     *
     * @memberof Treebuilder
     */
    static create(repo: Repository, source: Tree): Promise<Treebuilder>;

    /**
     *
     *
     *
     * @memberof Treebuilder
     */
    clear(): void;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Treebuilder
     */
    entrycount(): number;
    /**
     *
     *
     *
     * @memberof Treebuilder
     */
    free(): void;
    /**
     *
     *
     * @param {string} filename
     * @returns {TreeEntry}
     *
     * @memberof Treebuilder
     */
    get(filename: string): TreeEntry;
    /**
     *
     *
     * @param {string} filename
     * @param {Oid} id
     * @param {number} filemode
     * @returns {Promise<TreeEntry>}
     *
     * @memberof Treebuilder
     */
    insert(filename: string, id: Oid, filemode: number): Promise<TreeEntry>;
    /**
     *
     *
     * @param {string} filename
     * @returns {number}
     *
     * @memberof Treebuilder
     */
    remove(filename: string): number;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Treebuilder
     */
    write(): Oid;
}
