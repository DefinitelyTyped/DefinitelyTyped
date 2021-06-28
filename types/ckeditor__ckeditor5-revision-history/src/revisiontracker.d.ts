import Revision from './revision';
import { RevisionHistoryAdapter } from './revisionhistory';

export default class RevisionTracker {
    adapter: RevisionHistoryAdapter;
    isDirty: boolean;
    getCurrentRevision(data?: { name?: string }): Revision;
    saveRevision(data?: { name?: string }): Revision;
}
