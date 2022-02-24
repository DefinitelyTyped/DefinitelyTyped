import { Repository } from './repository';
import { BlameOptions } from './blame-options';
import { BlameHunk } from './blame-hunk';

export namespace Blame {
    const enum FLAG {
        NORMAL = 0,
        TRACK_COPIES_SAME_FILE = 1,
        TRACK_COPIES_SAME_COMMIT_MOVES = 2,
        TRACK_COPIES_SAME_COMMIT_COPIES = 4,
        TRACK_COPIES_ANY_COMMIT_COPIES = 8,
        FIRST_PARENT = 16,
    }
}

export class Blame {
    /**
     * Retrieve the blame of a file
     *
     * @param repo - Repository that contains the file
     * @param path - to the file to get the blame of
     * @param [options] - Options for the blame
     */
    static file(repo: Repository, path: string, options?: BlameOptions): Promise<Blame>;
    /**
     * @param opts - The git_blame_options struct to initialize
     * @param version - Version of struct; pass GIT_BLAME_OPTIONS_VERSION
     */
    static initOptions(opts: BlameOptions, version: number): number;

    buffer(buffer: string, bufferLen: number): Promise<Blame>;

    free(): void;
    /**
     * @returns - the hunk at the given index, or NULL on error
     */
    getHunkByIndex(index: number): BlameHunk;
    /**
     * @returns - the hunk that contains the given line, or NULL on error
     */
    getHunkByLine(lineNo: number): BlameHunk;

    getHunkCount(): number;
}
