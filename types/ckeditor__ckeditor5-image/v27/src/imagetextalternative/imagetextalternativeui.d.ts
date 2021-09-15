import { Plugin } from '@ckeditor/ckeditor5-core';
import { ContextualBalloon } from '@ckeditor/ckeditor5-ui';

export default class ImageTextAlternativeUI extends Plugin {
    static readonly requires: [typeof ContextualBalloon];
    static readonly pluginName: 'ImageTextAlternativeUI';
    init(): void;
    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageTextAlternativeUI: ImageTextAlternativeUI;
    }
}
