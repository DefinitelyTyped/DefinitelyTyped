import { Oid } from './oid';
import { Repository } from './repository';
import { Buf } from './buf';

export class Object {
    static size(type: Object.TYPE): number;
    static lookup(repo: Repository, id: Oid, type: Object.TYPE): Promise<Object>;
    static lookupPrefix(repo: Repository, id: Oid, len: number, type: Object.TYPE): Promise<Object>;
    static string2Type(str: string): Object.TYPE;
    static type2String(type: Object.TYPE): string;
    static typeisloose(type: Object.TYPE): number;

    dup(): Promise<Object>;

    free(): void;
    id(): Oid;
    lookupByPath(path: string, type: Object.TYPE): Promise<Object>;
    owner(): Repository;
    peel(targetType: number): Promise<Object>;
    shortId(): Promise<Buf>;
    type(): number;
}

export namespace Object {
    const enum TYPE {
        ANY = -2,
        BAD = -1,
        EXT1 = 0,
        COMMIT = 1,
        TREE = 2,
        BLOB = 3,
        TAG = 4,
        EXT2 = 5,
        OFS_DELTA = 6,
        REF_DELTA = 7,
    }
}
