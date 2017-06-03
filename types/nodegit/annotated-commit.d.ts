import { Repository } from './repository';
import { Oid } from './oid';
import { Reference } from './reference';

export class AnnotatedCommit {
    static fromFetchhead(repo: Repository, branch_name: string, remote_url: string, id: Oid): Promise<AnnotatedCommit>;
    static fromRef(repo: Repository, ref: Reference): Promise<AnnotatedCommit>;
    static fromRevspec(repo: Repository, revspec: string): Promise<AnnotatedCommit>;
    static lookup(repo: Repository, id: Oid): Promise<AnnotatedCommit>;

    free(): void;
    id(): Oid;
}
