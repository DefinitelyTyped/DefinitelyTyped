import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RealTimeCollaborationClient extends Plugin {
    static readonly pluginName: 'RealTimeCollaborationClient';
    readonly cloudDocumentVersion: number;
    readonly lastSyncVersion: number;
    readonly offset: number;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RealTimeCollaborationClient: RealTimeCollaborationClient;
    }
}
