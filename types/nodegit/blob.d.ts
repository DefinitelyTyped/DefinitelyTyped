import { Repository } from './repository';
import { Oid } from './oid';

export class Blob {
    static createFromBuffer(repo: Repository, buffer: Buffer, len: number): Oid;
    static createFromDisk(id: Oid, repo: Repository, path: string): number;
    static createFromWorkdir(id: Oid, repo: Repository, relative_path: string): number;
    static lookup(repo: Repository, id: string | Oid | Blob): Promise<Blob>;
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Blob>;

    free(): void;
    id(): Oid;
    isBinary(): number;
    owner(): Repository;
    rawcontent(): Buffer;
    rawsize(): number;
    content(): Buffer;
    toString(): string;
    filemode(): number;
}
