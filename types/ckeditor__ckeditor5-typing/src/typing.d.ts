import { Plugin } from "@ckeditor/ckeditor5-core";
import Input from "./input";
import Delete from "./delete";
import { TextTransformationConfig } from "./texttransformation";

export default class Typing extends Plugin {
    static readonly requires: [typeof Input, typeof Delete];
    static readonly pluginName: "Typing";
}

export interface TypingConfig {
    transformations: TextTransformationConfig;
    undoStep: number;
}
