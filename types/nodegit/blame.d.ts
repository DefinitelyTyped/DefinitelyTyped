import { Repository } from './repository';
import { BlameOptions } from './blame-options';
import {BlameHunk} from './blame-hunk';

export namespace Blame {
    const enum FLAG {
        NORMAL = 0,
        TRACK_COPIES_SAME_FILE = 1,
        TRACK_COPIES_SAME_COMMIT_MOVES = 2,
        TRACK_COPIES_SAME_COMMIT_COPIES = 4,
        TRACK_COPIES_ANY_COMMIT_COPIES = 8,
        FIRST_PARENT = 16
    }
}

export class Blame {
    /**
     * Retrieve the blame of a file
     *
     * @static
     * @param {Repository} repo - Repository that contains the file
     * @param {string} path - to the file to get the blame of
     * @param {BlameOptions} [options] - Options for the blame
     * @returns {Blame}
     *
     * @memberof Blame
     */
    static file(repo: Repository, path: string, options?: BlameOptions): Blame;
    /**
     *
     *
     * @static
     * @param {BlameOptions} opts - The git_blame_options struct to initialize
     * @param {number} version - Version of struct; pass GIT_BLAME_OPTIONS_VERSION
     * @returns {number}
     *
     * @memberof Blame
     */
    static initOptions(opts: BlameOptions, version: number): number;

    /**
     *
     *
     * @param {string} buffer
     * @param {number} bufferLen
     * @returns {Promise<Blame>}
     *
     * @memberof Blame
     */
    buffer(buffer: string, bufferLen: number): Promise<Blame>;
    /**
     *
     *
     *
     * @memberof Blame
     */
    free(): void;
    /**
     *
     *
     * @param {number} index
     * @returns {BlameHunk} - the hunk at the given index, or NULL on error
     *
     * @memberof Blame
     */
    getHunkByIndex(index: number): BlameHunk;
    /**
     *
     *
     * @param {number} lineNo
     * @returns {BlameHunk} - 	the hunk that contains the given line, or NULL on error
     *
     * @memberof Blame
     */
    getHunkByLine(lineNo: number): BlameHunk;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Blame
     */
    getHunkCount(): number;
}
