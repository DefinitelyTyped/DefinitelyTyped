import { Plugin } from '@ckeditor/ckeditor5-core';
import { ContextualBalloon } from '@ckeditor/ckeditor5-ui';

export default class TablePropertiesUI extends Plugin {
    static readonly requires: [typeof ContextualBalloon];
    static readonly pluginName: 'TablePropertiesUI';
    init(): void;
    destroy(): void;
}
