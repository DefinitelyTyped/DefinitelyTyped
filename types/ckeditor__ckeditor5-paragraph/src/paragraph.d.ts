import { Plugin } from '@ckeditor/ckeditor5-core';

export default class Paragraph extends Plugin {
    static pluginName: 'Paragraph';
    static paragraphLikeElements: Set<
        'blockquote' | 'dd' | 'div' | 'dt' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'p' | 'td' | 'th'
    >;
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Paragraph: Paragraph;
    }
}
