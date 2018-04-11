import { Oid } from './oid';
import { Repository } from './repository';
import { Buf } from './buf';

export class Object {
    static size(type: number): number;
    static lookup(repo: Repository, id: Oid, type: number): Promise<Object>;
    static lookupPrefix(repo: Repository, id: Oid, len: number, type: number): Promise<Object>;
    static string2type(str: string): number;
    static type2string(type: number): string;
    static typeisloose(type: number): number;

    dup(): Promise<Object>;

    free(): void;
    id(): Oid;
    lookupByPath(path: string, type: number): Promise<Object>;
    owner(): Repository;
    peel(targetType: number): Promise<Object>;
    shortId(): Promise<Buf>;
    type(): number;
}
