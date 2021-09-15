import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageStyleEditing extends Plugin {
    static readonly pluginName: 'ImageStyleEditing';
    init(): void;
}

export interface ImageStyleFormat {
    className?: string;
    icon?: string;
    isDefault?: boolean;
    name: string;
    title?: string;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageStyleEditing: ImageStyleEditing;
    }
}
