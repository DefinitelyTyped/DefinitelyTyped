import { Plugin } from '@ckeditor/ckeditor5-core';
import Delete from './delete';
import Input from './input';

export default class TextTransformation extends Plugin {
    static readonly pluginName: 'TextTransformation';
    static readonly requires: [typeof Delete, typeof Input];
    init(): void;
}

export interface TextTransformationDescription {
    from: string | RegExp;
    to: string | Array<string | null> | ((matches: RegExpMatchArray) => Array<string | null>);
}

export interface TextTransformationConfig {
    include: Array<TextTransformationDescription | string>;
    extra: TextTransformationDescription[];
    remove: string[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TextTransformation: TextTransformation;
    }
}
