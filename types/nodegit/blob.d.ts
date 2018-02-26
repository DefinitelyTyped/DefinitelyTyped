import { WriteStream } from 'fs';

import { Repository } from './repository';
import { Oid } from './oid';

export class Blob {
    /**
     * @param repo - repository where to blob will be written
     * @param buffer - data to be written into the blob
     * @param len - length of the data
     * @returns - return the id of the written blob
     */
    static createFromBuffer(repo: Repository, buffer: Buffer, len: number): Oid;
    /**
     * @param id - return the id of the written blob
     * @param repo - repository where the blob will be written. this repository can be bare or not
     * @param path - file from which the blob will be created
     */
    static createFromDisk(id: Oid, repo: Repository, path: string): number;
    static createFromStream(repo: Repository, hintPath: string): Promise<WriteStream>;
    /**
     * @param id - return the id of the written blob
     * @param repo - repository where the blob will be written. this repository cannot be bare
     * @param relativePath - file from which the blob will be created, relative to the repository's working dir
     * @returns - 0 or an error code
     */
    static createFromWorkdir(id: Oid, repo: Repository, relativePath: string): number;
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
    dup(): Promise<Blob>;
}
