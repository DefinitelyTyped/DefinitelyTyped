import { WriteStream } from 'fs';

import { Repository } from './repository';
import { Oid } from './oid';

export class Blob {
    /**
     *
     *
     * @static
     * @param {Repository} repo - repository where to blob will be written
     * @param {Buffer} buffer - data to be written into the blob
     * @param {number} len - length of the data
     * @returns {Oid} - return the id of the written blob
     *
     * @memberof Blob
     */
    static createFromBuffer(repo: Repository, buffer: Buffer, len: number): Oid;
    /**
     *
     *
     * @static
     * @param {Oid} id - return the id of the written blob
     * @param {Repository} repo - repository where the blob will be written. this repository can be bare or not
     * @param {string} path - file from which the blob will be created
     * @returns {number}
     *
     * @memberof Blob
     */
    static createFromDisk(id: Oid, repo: Repository, path: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} hintPath
     * @returns {Promise<WriteStream>}
     *
     * @memberof Blob
     */
    static createFromStream(repo: Repository, hintPath: string): Promise<WriteStream>;
    /**
     *
     *
     * @static
     * @param {Oid} id - return the id of the written blob
     * @param {Repository} repo - repository where the blob will be written. this repository cannot be bare
     * @param {string} relativePath - file from which the blob will be created, relative to the repository's working dir
     * @returns {number} - 0 or an error code
     *
     * @memberof Blob
     */
    static createFromWorkdir(id: Oid, repo: Repository, relativePath: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Oid | Blob)} id
     * @returns {Promise<Blob>}
     *
     * @memberof Blob
     */
    static lookup(repo: Repository, id: string | Oid | Blob): Promise<Blob>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} id
     * @param {number} len
     * @returns {Promise<Blob>}
     *
     * @memberof Blob
     */
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Blob>;

    /**
     *
     *
     *
     * @memberof Blob
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Blob
     */
    id(): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Blob
     */
    isBinary(): number;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Blob
     */
    owner(): Repository;
    /**
     *
     *
     * @returns {Buffer}
     *
     * @memberof Blob
     */
    rawcontent(): Buffer;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Blob
     */
    rawsize(): number;
    /**
     *
     *
     * @returns {Buffer}
     *
     * @memberof Blob
     */
    content(): Buffer;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Blob
     */
    toString(): string;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Blob
     */
    filemode(): number;
    /**
     *
     *
     * @returns {Promise<Blob>}
     *
     * @memberof Blob
     */
    dup(): Promise<Blob>;
}
