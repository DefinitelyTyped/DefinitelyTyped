import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageResizeEditing from './imageresizeediting';

export default class ImageResizeButtons extends Plugin {
    static readonly requires: [typeof ImageResizeEditing];
    static readonly pluginName: 'ImageResizeButtons';
    init(): void;
}

export interface ImageResizeOption {
    label?: string | undefined;
    name: string;
    icon?: 'small' | 'medium' | 'large' | 'original' | undefined;
    value: string | null;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageResizeButtons: ImageResizeButtons;
    }
}
