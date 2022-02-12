import { Plugin } from "@ckeditor/ckeditor5-core";

export default class BlockQuoteUI extends Plugin {
    static readonly pluginName: "BlockQuoteUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        BlockQuoteUI: BlockQuoteUI;
    }
}
