import { Plugin } from "@ckeditor/ckeditor5-core";

// TODO: import {Paragraph} from "@ckeditor/ckeditor5-paragraph";
declare class Paragraph extends Plugin {}

export default class HeadingEditing extends Plugin {
    static readonly pluginName: "HeadingEditing";
    static readonly requires: [typeof Paragraph];
    init(): void;
    afterInit(): void;
}

export {};
