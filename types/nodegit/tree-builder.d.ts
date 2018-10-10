import { Oid } from './oid';
import { Repository } from './repository';
import { Tree } from './tree';
import { TreeEntry } from './tree-entry';

export class Treebuilder {
    static create(repo: Repository, source: Tree): Promise<Treebuilder>;
    clear(): void;
    entrycount(): number;
    free(): void;
    get(filename: string): TreeEntry;
    insert(filename: string, id: Oid, filemode: number): Promise<TreeEntry>;
    remove(filename: string): number;
    write(): Oid;
}
