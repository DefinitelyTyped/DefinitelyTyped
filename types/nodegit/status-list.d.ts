import { DiffPerfdata } from "./diff-perf-data";
import { Repository } from "./repository";
import { StatusOptions } from "./status-options";

export class StatusList {
    static create(repo: Repository, opts?: StatusOptions): Promise<StatusList>;

    entrycount(): number;

    getPerfdata(): Promise<DiffPerfdata>;
}
