import { Clipboard } from '@ckeditor/ckeditor5-clipboard';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { Enter, ShiftEnter } from '@ckeditor/ckeditor5-enter';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { Typing } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';

export default class Essentials extends Plugin {
    static requires: [typeof Clipboard, typeof Enter, typeof SelectAll, typeof ShiftEnter, typeof Typing, typeof Undo];
    static pluginName: 'Essentials';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Essentials: Essentials;
    }
}
