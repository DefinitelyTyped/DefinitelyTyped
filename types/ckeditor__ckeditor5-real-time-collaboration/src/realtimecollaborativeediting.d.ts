import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RealTimeCollaborativeEditing extends Plugin {
    static readonly pluginName: 'RealTimeCollaborativeEditing';
}

export interface RealTimeCollaborationConfig {
    channelId?: string | undefined;
}
