import { Repository } from './repository';
import { DiffPerfdata } from './diff-perf-data';
import { StatusOptions } from './status-options';

export class StatusList {
    static create(repo: Repository, opts?: StatusOptions): Promise<StatusList>;

    entrycount(): number;

    free(): void;
    getPerfdata(): Promise<DiffPerfdata>;
}
