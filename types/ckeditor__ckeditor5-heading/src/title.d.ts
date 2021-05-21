import { Editor, Plugin } from "@ckeditor/ckeditor5-core";

export default class Title extends Plugin {
    static readonly pluginName: "Title";
    static readonly requires: ["Paragraph"];
    init(): void;
    getTitle(): string;
    getBody(options?: { rootName?: string; trim?: "empty" | "none" }): string;
}

export interface TitleConfig {
    placeholder?: string;
}
