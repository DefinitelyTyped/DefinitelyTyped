import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageBlockEditing from '@ckeditor/ckeditor5-image/src/image/imageblockediting';
import LinkEditing from './linkediting';
import LinkUI from './linkui';

export default class LinkImageUI extends Plugin {
    static readonly requires: [typeof LinkEditing, typeof LinkUI, typeof ImageBlockEditing];
    static readonly pluginName: 'LinkImageUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        LinkImageUI: LinkImageUI;
    }
}
