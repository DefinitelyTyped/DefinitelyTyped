import { Plugin } from '@ckeditor/ckeditor5-core';
import { ImageConfig } from '../image';
import ImageStyleEditing from './imagestyleediting';

export default class ImageStyleUI extends Plugin {
    static readonly pluginName: 'ImageStyleUI';
    static readonly requires: [typeof ImageStyleEditing];
    readonly localizedDefaultStylesTitles: {
        'Full size image': string;
        'Side image': string;
        'Left aligned image': string;
        'Centered image': string;
        'Right aligned image': string;
        'Wrap text': string;
        'Break text': string;
        'In line': string;
    };
    init(): void;
}

export interface ImageStyleDropdownDefinition {
    name: string;
    title?: string;
    items: Array<ImageConfig['styles']>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageStyleUI: ImageStyleUI;
    }
}
