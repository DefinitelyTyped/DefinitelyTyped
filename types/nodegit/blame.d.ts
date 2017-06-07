import { Repository } from './repository';
import { BlameOptions } from './blame-options';
import {BlameHunk} from './blame-hunk';

export namespace Blame {
    enum FLAG {
        NORMAL = 0,
        TRACK_COPIES_SAME_FILE = 1,
        TRACK_COPIES_SAME_COMMIT_MOVES = 2,
        TRACK_COPIES_SAME_COMMIT_COPIES = 4,
        TRACK_COPIES_ANY_COMMIT_COPIES = 8,
        FIRST_PARENT = 16
    }
}

export class Blame {
    static file(repo: Repository, path: string, options?: BlameOptions): Blame;
    static initOptions(opts: BlameOptions, version: number): number;

    buffer(buffer: string, buffer_len: number): Promise<Blame>;
    free(): void;
    getHunkByIndex(index: number): BlameHunk;
    getHunkByLine(lineno: number): BlameHunk;
    getHunkCount(): number;
}
