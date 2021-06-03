import { Plugin } from '@ckeditor/ckeditor5-core';
import TextPartLanguageEditing from './textpartlanguageediting';
import TextPartLanguageUI from './textpartlanguageui';

export default class TextPartLanguage extends Plugin {
    static readonly requires: [typeof TextPartLanguageEditing, typeof TextPartLanguageUI];
    static readonly pluginName: 'TextPartLanguage';
}

export interface TextPartLanguageOption {
    languageCode: string;
    textDirection?: 'ltr' | 'rtl';
    title: string;
}
