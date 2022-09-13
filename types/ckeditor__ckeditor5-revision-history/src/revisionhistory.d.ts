import Revision from './revision';

export default class RevisionHistory {
    adapter: RevisionHistoryAdapter;
    /** Creates a revision basing on given revision data and adds it to the revision tracker and revision repository. */
    addRevisionData(revisionData: Record<string, unknown>): Revision;
    /** Returns the revision with a given revision id or at a given index. */
    getRevision(revisionIdOrIndex: string | number): Revision | null;
    /** Returns all revisions added to the repository. */
    getRevisions(options?: { toJSON?: boolean }): Array<Revision | Record<string, unknown>>;
}

export interface RevisionHistoryAdapter {
    getRevision(data?: { revisionId?: string | undefined; channelId?: string | undefined }): Promise<Revision>;
    updateRevisions(
        data?: Array<{
            revisionId: string;
            name?: string | null | undefined;
            creatorId?: string | null | undefined;
            authorsIds?: string[] | undefined;
            diffData?: Record<string, string> | undefined;
            createdAt?: Date | undefined;
            fromVersion?: number | undefined;
            toVersion?: number | undefined;
            attributes?: Record<string, unknown> | undefined;
            channelId: string;
        }>,
    ): Promise<unknown>;
}

export interface RevisionHistoryConfig {
    editorContainer?: HTMLElement | undefined;
    viewerContainer?: HTMLElement | undefined;
    viewerEditorElement?: HTMLElement | undefined;
    viewerSidebarContainer?: HTMLElement | undefined;
}
