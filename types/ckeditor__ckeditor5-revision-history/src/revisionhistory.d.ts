import Revision from './revision';

export default class RevisionHistory {
    adapter: RevisionHistoryAdapter;
}

export interface RevisionHistoryAdapter {
    addRevision(data?: {
        channelId: string;
        id: string;
        name: string | null;
        creatorId: string;
        data: Record<string, string>;
        createdAt: Date;
        attributes: Record<string, unknown>;
    }): Promise<void>;
    getRevision(data?: { revisionId?: string | undefined }): Promise<Revision>;
    getRevisions(data?: { channelId?: string | undefined }): Promise<Revision[]>;
    updateRevision(data?: {
        revisionId: string;
        name?: string | undefined;
        attributes?: Record<string, unknown> | undefined;
    }): Promise<unknown>;
}

export interface RevisionHistoryConfig {
    editorContainer?: HTMLElement | undefined;
    viewerContainer?: HTMLElement | undefined;
    viewerEditorElement?: HTMLElement | undefined;
    viewerSidebarContainer?: HTMLElement | undefined;
}
