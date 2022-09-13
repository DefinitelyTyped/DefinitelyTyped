import Revision from './revision';

export default class RevisionsRepository {
    addRevision(revision: Revision): void;
    createRevision(revisionData: ReturnType<Revision['toJSON']>): Revision;
    getIndex(revisionId: string): number;
    getRevision(revisionIdOrIndex: string | number): Revision | null;
    getRevisions(options?: { toJSON?: boolean | undefined }): Revision[];
}
