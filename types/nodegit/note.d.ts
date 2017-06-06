import {Repository} from './repository';
import {Signature} from './signature';
import {Oid} from './oid';

export class Note {
    static create(repo: Repository, notes_ref: string, author: Signature, committer: Signature, oid: Oid, note: string, force: number): Promise<Oid>;
    static foreach(repo: Repository, notes_ref: string, note_cb: Function, payload: void): Promise<number>;
    static iteratorNew(repo: Repository, notes_ref: string): Promise<any>;
    static next(note_id: Oid, annotated_id: Oid, it: any): number;
    static read(repo: Repository, notes_ref: string, oid: Oid): Promise<Note>;
    static remove(repo: Repository, notes_ref: string, author: Signature, committer: Signature, oid: Oid): Promise<number>;

    author(): Signature;
    committer(): Signature;
    free(): void;
    id(): Oid;
    message(): string;
}
