import { Plugin } from "@ckeditor/ckeditor5-core";

export default class AlignmentEditing extends Plugin {
    static readonly pluginName: "AlignmentEditing";
    init(): void;
}

export interface AlignmentFormat {
    className: string;
    name: "left" | "right" | "center" | "justify";
}
