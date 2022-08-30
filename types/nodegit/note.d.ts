import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';

export class Note {
    static create(
        repo: Repository,
        notesRef: string,
        author: Signature,
        committer: Signature,
        oid: Oid,
        note: string,
        force: number,
    ): Promise<Oid>;
    static foreach(repo: Repository, notesRef: string, noteCb: Function, payload: any): Promise<number>;
    static iteratorNew(repo: Repository, notesRef: string): Promise<any>;
    static next(noteId: Oid, annotatedId: Oid, it: any): number;
    static read(repo: Repository, notesRef: string, oid: Oid): Promise<Note>;
    static remove(
        repo: Repository,
        notesRef: string,
        author: Signature,
        committer: Signature,
        oid: Oid,
    ): Promise<number>;

    author(): Signature;
    committer(): Signature;

    free(): void;
    id(): Oid;
    message(): string;
}
