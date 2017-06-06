import { Repository } from './repository';
import { Oid } from './oid';
import { Signature } from './signature';

export class Reflog {
    static delete(repo: Repository, name: string): number;
    static entryCommitter(entry: ReflogEntry): Signature;
    static entryIdNew(entry: ReflogEntry): Oid;
    static entryIdOld(entry: ReflogEntry): Oid;
    static entryMessage(entry: ReflogEntry): string;
    static read(repo: Repository, name: string): Promise<Reflog>;
    static rename(repo: Repository, old_name: string, name: string): number;

    append(id: Oid, committer: Signature, msg: string): number;
    drop(idx: number, rewrite_previous_entry: number): number;
    entryByIndex(idx: number): ReflogEntry;
    entrycount(): number;
    free(): void;
    write(): number;
}

export class ReflogEntry {
    committer(): Signature;
    idNew(): Oid;
    idOld(): Oid;
    message(): string;
}
