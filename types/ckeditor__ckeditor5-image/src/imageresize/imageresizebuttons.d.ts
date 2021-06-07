import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageResizeEditing from './imageresizeediting';

export default class ImageResizeButtons extends Plugin {
    static readonly requires: [typeof ImageResizeEditing];
    static readonly pluginName: 'ImageResizeButtons';
    init(): void;
}

export interface ImageResizeOption {
    label?: string;
    name: string;
    icon: 'small' | 'medium' | 'large' | 'original';
    value: string | null;
}
