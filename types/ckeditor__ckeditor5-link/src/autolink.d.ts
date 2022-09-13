import { Plugin } from '@ckeditor/ckeditor5-core';
import { Delete } from '@ckeditor/ckeditor5-typing';

export default class AutoLink extends Plugin {
    static readonly pluginName: 'AutoLink';
    static readonly requires: [typeof Delete];
    init(): void;
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AutoLink: AutoLink;
    }
}
