import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import { Plugin } from '@ckeditor/ckeditor5-core';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

export default class AutoMediaEmbed extends Plugin {
    static readonly requires: [typeof Clipboard, typeof Undo];
    static readonly pluginName: 'AutoMediaEmbed';
    init(): void;
}
