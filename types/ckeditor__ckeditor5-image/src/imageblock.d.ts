import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import ImageBlockEditing from './image/imageblockediting';
import ImageTextAlternative from './imagetextalternative';

export default class ImageBlock extends Plugin {
    static readonly requires: [typeof ImageBlockEditing, typeof Widget, typeof ImageTextAlternative];
    static readonly pluginName: 'ImageBlock';
}
