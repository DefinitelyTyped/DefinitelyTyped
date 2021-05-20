import { Plugin } from "@ckeditor/ckeditor5-core";
import { Enter, ShiftEnter } from "@ckeditor/ckeditor5-enter";
import { Typing } from "@ckeditor/ckeditor5-typing";
import { Undo } from "@ckeditor/ckeditor5-undo";
// TODO: import {Clipboard} from "@ckeditor/ckeditor5-clipboard";
type Clipboard = typeof Plugin;
// TODO: import {SelectAll} from "@ckeditor/ckeditor5-select-all";
type SelectAll = typeof Plugin;

export default class Essentials extends Plugin {
    static requires: [Clipboard, typeof Enter, SelectAll, typeof ShiftEnter, typeof Typing, typeof Undo];

    static pluginName: "Essentials";
}

export {};
