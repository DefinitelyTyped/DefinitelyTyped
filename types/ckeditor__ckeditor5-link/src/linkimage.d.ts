import { Plugin } from '@ckeditor/ckeditor5-core';
import LinkImageEditing from './linkimageediting';
import LinkImageUI from './linkimageui';

export default class LinkImage extends Plugin {
    static readonly requires: [typeof LinkImageEditing, typeof LinkImageUI];
    static readonly pluginName: 'LinkImage';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        LinkImage: LinkImage;
    }
}
