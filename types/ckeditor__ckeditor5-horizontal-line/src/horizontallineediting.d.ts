import { Plugin } from '@ckeditor/ckeditor5-core';
import HorizontalLineCommand from './horizontallinecommand';

/**
 * The horizontal line editing feature.
 */
export default class HorizontalLineEditing extends Plugin {
    static readonly pluginName: 'HorizontalLineEditing';

    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HorizontalLineEditing: HorizontalLineEditing;
    }
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        horizontalLine: HorizontalLineCommand;
    }
}
