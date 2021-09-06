import { ContextPlugin } from '@ckeditor/ckeditor5-core';

export default class PresenceList extends ContextPlugin {
    static readonly pluginName: 'PresenceList';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PresenceList: PresenceList;
    }
}
