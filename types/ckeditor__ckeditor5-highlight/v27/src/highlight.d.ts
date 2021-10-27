import { Plugin } from '@ckeditor/ckeditor5-core';
import HighlightEditing from './highlightediting';
import HighlightUI from './highlightui';

export default class Highlight extends Plugin {
    static readonly requires: [typeof HighlightEditing, typeof HighlightUI];
    static readonly pluginName: 'Highlight';
}

export interface HighlightOption {
    class: string;
    color: string;
    model: string;
    title: string;
    type: 'marker' | 'pen';
}

export interface HighlightConfig {
    options: HighlightOption[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Highlight: Highlight;
    }
}
