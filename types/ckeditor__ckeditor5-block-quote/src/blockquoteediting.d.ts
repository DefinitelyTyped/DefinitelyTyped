import { Plugin } from "@ckeditor/ckeditor5-core";
// TODO: import { Enter } from '@ckeditor/ckeditor5-enter";
// TODO: import { Delete } from '@ckeditor/ckeditor5-typing";

declare class Enter extends Plugin {}
declare class Delete extends Plugin {}

export default class BlockQuoteEditing extends Plugin {
    static readonly pluginName: "BlockQuoteEditing";
    static readonly requires: [typeof Enter, typeof Delete];
    init(): void;
}

export {};
