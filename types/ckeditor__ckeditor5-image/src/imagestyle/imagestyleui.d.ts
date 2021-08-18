import { Plugin } from '@ckeditor/ckeditor5-core';
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
