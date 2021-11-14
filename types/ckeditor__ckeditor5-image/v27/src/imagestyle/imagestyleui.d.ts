import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageStyleUI extends Plugin {
    static readonly pluginName: 'ImageStyleUI';
    readonly localizedDefaultStylesTitles: {
        'Full size image': string;
        'Side image': string;
        'Left aligned image': string;
        'Centered image': string;
        'Right aligned image': string;
    };
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageStyleUI: ImageStyleUI;
    }
}
