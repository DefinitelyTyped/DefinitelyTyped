import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RealTimeCollaborativeComments extends Plugin {
    static readonly pluginName: 'RealTimeCollaborativeComments';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RealTimeCollaborativeComments: RealTimeCollaborativeComments;
    }
}
