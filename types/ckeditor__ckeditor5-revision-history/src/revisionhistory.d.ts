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
    getRevision(data?: { revisionId?: string }): Promise<Revision>;
    getRevisions(data?: { channelId?: string }): Promise<Revision[]>;
    updateRevision(data?: {
        revisionId: string;
        name?: string;
        attributes?: Record<string, unknown>;
    }): Promise<unknown>;
}

export interface RevisionHistoryConfig {
    editorContainer?: HTMLElement;
    viewerContainer?: HTMLElement;
    viewerEditorElement?: HTMLElement;
    viewerSidebarContainer?: HTMLElement;
}
