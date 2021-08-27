import { Plugin } from '@ckeditor/ckeditor5-core';

export default class IndentBlock extends Plugin {
    static readonly pluginName: 'IndentBlock';
    init(): void;
    afterInit(): void;
}

export interface IndentBlockConfig {
    classes?: string[] | undefined;
    offset?: number | undefined;
    unit?: string | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        IndentBlock: IndentBlock;
    }
}
