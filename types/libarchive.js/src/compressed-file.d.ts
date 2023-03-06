import { Archive } from './libarchive';

export class CompressedFile {
    _name: string;
    _size: number;
    _path: string;
    _archiveRef: Archive;

    constructor(name: string, size: number, path: string, archiveRef: Archive)

    get name(): string;

    get size(): number;

    extract(): Promise<File>;
}
