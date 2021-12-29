import { Plugin } from '@ckeditor/ckeditor5-core';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

export default class Title extends Plugin {
    static readonly pluginName: 'Title';
    static readonly requires: [typeof Paragraph];
    init(): void;
    getTitle(): string;
    getBody(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
}

export interface TitleConfig {
    placeholder?: string | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Title: Title;
    }
}
