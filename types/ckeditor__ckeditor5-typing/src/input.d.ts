import { Plugin } from "@ckeditor/ckeditor5-core";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";

export default class Input extends Plugin {
    static readonly pluginName: "Input";
    init(): void;
    isInput(batch: Batch): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Input: Input;
    }
}
