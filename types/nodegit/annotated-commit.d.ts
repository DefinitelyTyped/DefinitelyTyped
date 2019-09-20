import { Repository } from './repository';
import { Oid } from './oid';
import { Reference } from './reference';

export class AnnotatedCommit {
    /**
     * @param repo - repository that contains the given commit
     * @param branchName - name of the (remote) branch
     * @param remoteUrl - 	url of the remote
     * @param id - the commit object id of the remote branch
     */
    static fromFetchhead(repo: Repository, branchName: string, remoteUrl: string, id: Oid): Promise<AnnotatedCommit>;
    static fromRef(repo: Repository, ref: Reference): Promise<AnnotatedCommit>;
    static fromRevspec(repo: Repository, revspec: string): Promise<AnnotatedCommit>;
    static lookup(repo: Repository, id: Oid): Promise<AnnotatedCommit>;

    free(): void;
    id(): Oid;
}
