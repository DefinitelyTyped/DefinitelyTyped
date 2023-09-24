import { Oid } from "./oid";
import { Repository } from "./repository";
import { Signature } from "./signature";

export class Reflog {
    static delete(repo: Repository, name: string): number;
    static read(repo: Repository, name: string): Promise<Reflog>;
    static rename(repo: Repository, oldName: string, name: string): number;

    append(id: Oid, committer: Signature, msg: string): number;
    drop(idx: number, rewritePreviousEntry: number): number;
    entryByIndex(idx: number): ReflogEntry;
    entrycount(): number;

    write(): number;
}

export class ReflogEntry {
    committer(): Signature;
    idNew(): Oid;
    idOld(): Oid;
    message(): string;
}
