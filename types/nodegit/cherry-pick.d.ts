import { Repository } from './repository';
import { Commit } from './commit';
import { MergeOptions } from './merge-options';
import { CherrypickOptions } from './cherry-pick-options';

export class Cherrypick {
    /**
     * Cherrypick a commit and, changing the index and working directory
     */
    static cherrypick(repo: Repository, commit: Commit, options?: CherrypickOptions): Promise<number>;
    /**
     * Cherrypicks the given commit against "our" commit, producing an index that reflects the result of the cherrypick. The index is not backed by a repo.
     */
    static commit(
        repo: Repository,
        cherrypickCommit: Commit,
        ourCommit: Commit,
        mainline: number,
        mergeOptions?: MergeOptions,
    ): Promise<number>;
    static initOptions(opts: CherrypickOptions, version: number): number;
}
