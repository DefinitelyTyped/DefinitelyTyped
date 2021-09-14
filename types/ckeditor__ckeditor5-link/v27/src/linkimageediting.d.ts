import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageEditing from '@ckeditor/ckeditor5-image/src/image/imageediting';
import LinkEditing from './linkediting';

export default class LinkImageEditing extends Plugin {
    static readonly requires: [typeof ImageEditing, typeof LinkEditing];
    static readonly pluginName: 'LinkImageEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        LinkImageEditing: LinkImageEditing;
    }
}
