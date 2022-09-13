import { Plugin } from '@ckeditor/ckeditor5-core';
import History from '@ckeditor/ckeditor5-engine/src/model/history';

export default class RealTimeCollaborationClient extends Plugin {
    static readonly pluginName: 'RealTimeCollaborationClient';
    readonly cloudDocumentVersion: number;
    readonly lastSyncVersion: number;
    readonly serverHistory: History;
    readonly sessionId: string | null;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RealTimeCollaborationClient: RealTimeCollaborationClient;
    }
}
