import { Plugin } from "@ckeditor/ckeditor5-core";
import { Enter } from "@ckeditor/ckeditor5-enter";
import { Delete } from "@ckeditor/ckeditor5-typing";

export default class BlockQuoteEditing extends Plugin {
    static readonly pluginName: "BlockQuoteEditing";
    static readonly requires: [typeof Enter, typeof Delete];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        BlockQuoteEditing: BlockQuoteEditing;
    }
}
