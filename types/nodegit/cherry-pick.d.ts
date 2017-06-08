import { Repository } from './repository';
import { Commit } from './commit';
import { MergeOptions } from './merge-options';
import { CherrypickOptions } from './cherry-pick-options';

export class Cherrypick {
    static cherrypick(repo: Repository, commit: Commit, options?: CherrypickOptions): Promise<number>;
    static commit(repo: Repository, cherrypickCommit: Commit, ourCommit: Commit, mainline: number, mergeOptions?: MergeOptions): Promise<number>;
    static initOptions(opts: CherrypickOptions, version: number): number;
}
