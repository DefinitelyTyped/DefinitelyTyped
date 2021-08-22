import { Plugin } from '@ckeditor/ckeditor5-core';

export default class AutoLink extends Plugin {
    static readonly pluginName: 'AutoLink';
    init(): void;
    afterInit(): void;
}
