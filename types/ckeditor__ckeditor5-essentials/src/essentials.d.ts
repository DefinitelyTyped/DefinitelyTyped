import { Plugin } from "@ckeditor/ckeditor5-core";
// TODO: import {Clipboard} from "@ckeditor/ckeditor5-clipboard";
type Clipboard = typeof Plugin;
// TODO: import {Enter, ShiftEnter} from "@ckeditor/ckeditor5-enter";
type Enter = typeof Plugin;
type ShiftEnter = typeof Plugin;
// TODO: import {SelectAll} from "@ckeditor/ckeditor5-select-all";
type SelectAll = typeof Plugin;
// TODO: import {Typing} from "@ckeditor/ckeditor5-typing";
type Typing = typeof Plugin;
// TODO: import {Undo} from "@ckeditor/ckeditor5-undo";
type Undo = typeof Plugin;

export default class Essentials extends Plugin {
    static requires: [Clipboard, Enter, SelectAll, ShiftEnter, Typing, Undo];

    static pluginName: "Essentials";
}

export {};
