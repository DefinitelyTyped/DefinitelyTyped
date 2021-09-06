import { Plugin } from "@ckeditor/ckeditor5-core";

export default class TextTransformation extends Plugin {
    static readonly pluginName: "TextTransformation";
    init(): void;
}

export interface TextTransformationDescription {
    from: string | RegExp;
    to: string;
}

export interface TextTransformationConfig {
    extra: TextTransformationDescription[];
    include: TextTransformationDescription[];
    remove: TextTransformationDescription[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TextTransformation: TextTransformation;
    }
}
