import { Plugin } from "@ckeditor/ckeditor5-core";

export default class AlignmentUI extends Plugin {
    readonly localizedOptionTitles: {
        left: string;
        right: string;
        center: string;
        justify: string;
    };
    static readonly pluginName: "AlignmentUI";
    init(): void;
}
