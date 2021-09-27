import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { Undo } from '@ckeditor/ckeditor5-undo';
import ImageUtils from "./imageutils";

export default class AutoImage extends Plugin {
    static readonly requires: [typeof ImageUtils, typeof Clipboard, typeof Undo];
    static readonly pluginName: 'AutoImage';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AutoImage: AutoImage;
    }
}
