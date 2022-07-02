import Revision from './revision';
import { RevisionHistoryAdapter } from './revisionhistory';

export default class RevisionTracker {
    adapter: RevisionHistoryAdapter;
    addRevisionData(data: Record<string, unknown>): Revision;
    saveRevision(
        data?: { name?: string | undefined; id?: string | undefined; attributes?: Record<string, unknown> },
        version?: number,
    ): Revision;
    update(): Promise<unknown>;
}
