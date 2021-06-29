import { Plugin } from '@ckeditor/ckeditor5-core';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

export default class Title extends Plugin {
    static readonly pluginName: 'Title';
    static readonly requires: [typeof Paragraph];
    init(): void;
    getTitle(): string;
    getBody(options?: { rootName?: string; trim?: 'empty' | 'none' }): string;
}

export interface TitleConfig {
    placeholder?: string;
}
