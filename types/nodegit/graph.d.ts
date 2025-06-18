import { Oid } from "./oid";
import { Repository } from "./repository";

export class Graph {
    static aheadBehind(repo: Repository, local: Oid, upstream: Oid): Promise<number>;
    static descendantOf(repo: Repository, commit: Oid, ancestor: Oid): Promise<number>;
}
