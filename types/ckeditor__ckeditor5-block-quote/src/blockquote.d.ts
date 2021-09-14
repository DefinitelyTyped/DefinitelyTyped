import { Plugin } from "@ckeditor/ckeditor5-core";
import BlockQuoteEditing from "./blockquoteediting";
import BlockQuoteUI from "./blockquoteui";

export default class BlockQuote extends Plugin {
    static readonly requires: [typeof BlockQuoteEditing, typeof BlockQuoteUI];
    static readonly pluginName: "BlockQuote";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        BlockQuote: BlockQuote;
    }
}
