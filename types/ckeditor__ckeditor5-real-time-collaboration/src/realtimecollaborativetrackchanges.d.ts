import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RealTimeCollaborativeTrackChanges extends Plugin {
    static readonly pluginName: 'RealTimeCollaborativeTrackChanges';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RealTimeCollaborativeTrackChanges: RealTimeCollaborativeTrackChanges;
    }
}
