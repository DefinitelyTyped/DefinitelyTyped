import { Plugin } from '@ckeditor/ckeditor5-core';
import LinkEditing from './linkediting';
import LinkUI from './linkui';
// TODO: import {Image} from '@ckeditor/ckeditor5-image/'
declare class Image extends Plugin {}

export default class LinkImageUI extends Plugin {
    static readonly requires: [typeof LinkEditing, typeof LinkUI, typeof Image];
    static readonly pluginName: 'LinkImageUI';
    init(): void;
}

export {};
