import { Repository } from './repository';
import { Oid } from './oid';
import { Reference } from './reference';

export class AnnotatedCommit {
    /**
     *
     *
     * @static
     * @param {Repository} repo - repository that contains the given commit
     * @param {string} branchName - name of the (remote) branch
     * @param {string} remoteUrl - 	url of the remote
     * @param {Oid} id - the commit object id of the remote branch
     * @returns {Promise<AnnotatedCommit>}
     *
     * @memberof AnnotatedCommit
     */
    static fromFetchhead(repo: Repository, branchName: string, remoteUrl: string, id: Oid): Promise<AnnotatedCommit>;
    static fromRef(repo: Repository, ref: Reference): Promise<AnnotatedCommit>;
    static fromRevspec(repo: Repository, revspec: string): Promise<AnnotatedCommit>;
    static lookup(repo: Repository, id: Oid): Promise<AnnotatedCommit>;

    /**
     *
     *
     *
     * @memberof AnnotatedCommit
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof AnnotatedCommit
     */
    id(): Oid;
}
