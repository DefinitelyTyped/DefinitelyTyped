import { Buf } from './buf';

export class DiffStats {
    /**
     * @returns - total number of deletions in the diff
     */
    deletions(): Number;

    /**
     * @returns - total number of files changed in the diff
     */
    filesChanged(): Number;

    /**
     * @returns - total number of insertions in the diff
     */
    insertions(): Number;

    /**
     * @param format - Formatting option.
     * @param width - Target width for output (only affects GIT_DIFF_STATS_FULL)
     * @returns - buffer to store the formatted diff statistics in.
     */
    toBuf(format: Number, width: Number): Promise<Buf>;
}
