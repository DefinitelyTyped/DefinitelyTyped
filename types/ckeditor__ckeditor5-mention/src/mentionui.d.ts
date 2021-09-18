import { Plugin } from '@ckeditor/ckeditor5-core';
import { ContextualBalloon } from '@ckeditor/ckeditor5-ui';

/**
 * The mention UI feature.
 */
export default class MentionUI extends Plugin {
    static readonly pluginName: 'MentionUI';
    static readonly requires: [typeof ContextualBalloon];
    init(): void;
    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        MentionUI: MentionUI;
    }
}
