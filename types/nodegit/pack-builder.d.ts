import { Repository } from './repository';
import { Oid } from './oid';
import { Revwalk } from './rev-walk';

export namespace Packbuilder {
    const enum STAGE {
        ADDING_OBJECTS = 0,
        DELTAFICATION = 1,
    }
}

export class Packbuilder {
    static create(repo: Repository): Packbuilder;

    free(): void;
    hash(): Oid;
    insert(id: Oid, name: string): number;
    insertCommit(id: Oid): number;
    insertRecur(id: Oid, name: string): number;
    insertTree(id: Oid): number;
    insertWalk(walk: Revwalk): number;
    objectCount(): number;
    setThreads(n: number): number;
    written(): number;
}
