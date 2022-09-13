import { Plugin } from '@ckeditor/ckeditor5-core';

export default class TrackChangesUI extends Plugin {
    static readonly pluginName: 'TrackChangesUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TrackChangesUI: TrackChangesUI;
    }
}
