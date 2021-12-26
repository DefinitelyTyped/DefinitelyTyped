import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageStyleEditing from './imagestyle/imagestyleediting';
import ImageStyleUI from './imagestyle/imagestyleui';

export default class ImageStyle extends Plugin {
    static readonly requires: [typeof ImageStyleEditing, typeof ImageStyleUI];
    static readonly pluginName: 'ImageStyle';
}
/**
 * The configuration for the {@link module:image/imagestyle~ImageStyle} plugin that should be provided
 * while creating the editor instance.
 */

export interface ImageStyleConfig {
    options: Array<string | ImageStyleOptionDefinition>;
}

export interface ImageStyleOptionDefinition {
    className?: string | undefined;
    icon?: string | undefined;
    isDefault?: boolean | undefined;
    modelElements?: Array<'imageBlock' | 'imageInline'> | undefined;
    name: string;
    title?: string | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageStyle: ImageStyle;
    }
}
