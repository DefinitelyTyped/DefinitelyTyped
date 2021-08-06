import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageTextAlternativeEditing from './imagetextalternative/imagetextalternativeediting';
import ImageTextAlternativeUI from './imagetextalternative/imagetextalternativeui';

export default class ImageTextAlternative extends Plugin {
    static readonly requires: [typeof ImageTextAlternativeEditing, typeof ImageTextAlternativeUI];
    static readonly pluginName: 'ImageTextAlternative';
}
