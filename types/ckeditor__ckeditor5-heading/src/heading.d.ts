import { Plugin } from "@ckeditor/ckeditor5-core";
import { ElementDefinition } from "@ckeditor/ckeditor5-engine/src/view/elementdefinition";
import HeadingEditing from "./headingediting";
import HeadingUI from "./headingui";

export default class Heading extends Plugin {
    static readonly requires: [typeof HeadingEditing, typeof HeadingUI];
    static readonly pluginName: "Heading";
}

export interface HeadingConfig {
    options: HeadingOption[];
}

export interface HeadingOption {
    class?: string;
    icon?: string;
    model: string;
    title: string;
    view?: ElementDefinition;
}
